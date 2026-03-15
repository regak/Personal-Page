'use server';

export interface ContactFormState {
  success: boolean;
  message: string;
  fieldErrors: {
    name?: string;
    email?: string;
    subject?: string;
    message?: string;
  };
}

const INITIAL_STATE: ContactFormState = {
  success: false,
  message: '',
  fieldErrors: {},
};

type DeliveryMode = 'log' | 'webhook';

function validateInput(data: { name: string; email: string; subject: string; message: string }) {
  const errors: ContactFormState['fieldErrors'] = {};

  if (!data.name.trim()) {
    errors.name = 'Please enter your name.';
  }

  const email = data.email.trim();
  if (!email) {
    errors.email = 'Please enter your email address.';
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    errors.email = 'Please enter a valid email address.';
  }

  if (!data.subject.trim()) {
    errors.subject = 'Please enter a subject.';
  }

  const trimmedMessage = data.message.trim();
  if (!trimmedMessage) {
    errors.message = 'Please enter a message.';
  } else if (trimmedMessage.length < 20) {
    errors.message = 'Message should be at least 20 characters.';
  }

  return errors;
}

function getDeliveryMode(): DeliveryMode {
  const configured = process.env.CONTACT_DELIVERY_MODE;
  return configured === 'webhook' ? 'webhook' : 'log';
}

function parseTimeoutMs() {
  const parsed = Number(process.env.CONTACT_WEBHOOK_TIMEOUT_MS ?? '8000');
  return Number.isFinite(parsed) && parsed > 0 ? parsed : 8000;
}

export async function submitContactForm(
  _previousState: ContactFormState,
  formData: FormData,
): Promise<ContactFormState> {
  const payload = {
    name: String(formData.get('name') ?? ''),
    email: String(formData.get('email') ?? ''),
    subject: String(formData.get('subject') ?? ''),
    message: String(formData.get('message') ?? ''),
  };

  // Honeypot field for basic bot filtering; silently succeed to avoid signal.
  if (String(formData.get('company') ?? '').trim()) {
    return {
      success: true,
      message: 'Thank you for your message. I will get back to you soon.',
      fieldErrors: {},
    };
  }

  const fieldErrors = validateInput(payload);

  if (Object.keys(fieldErrors).length > 0) {
    return {
      ...INITIAL_STATE,
      message: 'Please fix the highlighted fields and try again.',
      fieldErrors,
    };
  }

  const deliveryMode = getDeliveryMode();

  if (deliveryMode === 'webhook') {
    const webhookUrl = process.env.CONTACT_WEBHOOK_URL;

    if (!webhookUrl) {
      return {
        ...INITIAL_STATE,
        message: 'Contact delivery is not configured. Please try direct email for now.',
      };
    }

    let parsedWebhookUrl: URL;
    try {
      parsedWebhookUrl = new URL(webhookUrl);
    } catch {
      return {
        ...INITIAL_STATE,
        message: 'Contact delivery URL is invalid. Please contact the site administrator.',
      };
    }

    if (process.env.NODE_ENV === 'production' && parsedWebhookUrl.protocol !== 'https:') {
      return {
        ...INITIAL_STATE,
        message: 'Contact delivery requires HTTPS in production.',
      };
    }

    const headers: Record<string, string> = {
      'Content-Type': 'application/json',
    };

    if (process.env.CONTACT_WEBHOOK_AUTH_HEADER) {
      headers.Authorization = process.env.CONTACT_WEBHOOK_AUTH_HEADER;
    }

    try {
      const response = await fetch(parsedWebhookUrl.toString(), {
        method: 'POST',
        headers,
        body: JSON.stringify({
          ...payload,
          source: 'academic-portfolio-contact-form',
        }),
        cache: 'no-store',
        signal: AbortSignal.timeout(parseTimeoutMs()),
      });

      if (!response.ok) {
        return {
          ...INITIAL_STATE,
          message: 'Something went wrong while sending your message. Please try again shortly.',
        };
      }
    } catch {
      return {
        ...INITIAL_STATE,
        message: 'Unable to send your message right now. Please try again shortly.',
      };
    }
  } else {
    console.info('Contact form submission (log mode):', payload);
  }

  return {
    success: true,
    message: 'Thank you for your message. I will get back to you soon.',
    fieldErrors: {},
  };
}

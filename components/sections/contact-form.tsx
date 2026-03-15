'use client';

import { useActionState } from 'react';
import { useFormStatus } from 'react-dom';
import { ContactFormState, submitContactForm } from '@/app/contact/actions';

const initialState: ContactFormState = {
  success: false,
  message: '',
  fieldErrors: {},
};

function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      disabled={pending}
      className="inline-flex items-center justify-center rounded-md bg-brand-700 px-4 py-2 text-sm font-medium text-white hover:bg-brand-500 disabled:cursor-not-allowed disabled:opacity-70 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:ring-offset-2"
    >
      {pending ? 'Sending...' : 'Send Message'}
    </button>
  );
}

interface FieldProps {
  id: 'name' | 'email' | 'subject' | 'message';
  label: string;
  error?: string;
  type?: 'text' | 'email';
  rows?: number;
}

function FormField({ id, label, error, type = 'text', rows }: FieldProps) {
  const sharedClassName =
    'w-full rounded-md border px-3 py-2 text-sm text-slate-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500';

  return (
    <div className="space-y-1">
      <label htmlFor={id} className="text-sm font-medium text-slate-700">
        {label}
      </label>
      {id === 'message' ? (
        <textarea
          id={id}
          name={id}
          rows={rows ?? 6}
          aria-invalid={Boolean(error)}
          aria-describedby={error ? `${id}-error` : undefined}
          className={`${sharedClassName} ${error ? 'border-red-500' : 'border-slate-300'}`}
          required
        />
      ) : (
        <input
          id={id}
          name={id}
          type={type}
          aria-invalid={Boolean(error)}
          aria-describedby={error ? `${id}-error` : undefined}
          className={`${sharedClassName} ${error ? 'border-red-500' : 'border-slate-300'}`}
          required
        />
      )}
      {error ? (
        <p id={`${id}-error`} className="text-sm text-red-700">
          {error}
        </p>
      ) : null}
    </div>
  );
}

export function ContactForm() {
  const [state, formAction] = useActionState(submitContactForm, initialState);

  return (
    <form action={formAction} className="space-y-4 rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
      <input
        type="text"
        name="company"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        className="hidden"
      />
      <FormField id="name" label="Name" error={state.fieldErrors.name} />
      <FormField id="email" label="Email" type="email" error={state.fieldErrors.email} />
      <FormField id="subject" label="Subject" error={state.fieldErrors.subject} />
      <FormField id="message" label="Message" rows={6} error={state.fieldErrors.message} />

      {state.message ? (
        <p
          role="status"
          className={`text-sm ${state.success ? 'text-emerald-700' : 'text-red-700'}`}
          aria-live="polite"
        >
          {state.message}
        </p>
      ) : null}

      <SubmitButton />
    </form>
  );
}

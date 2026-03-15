import type { Metadata } from 'next';

function normalizeSiteUrl(rawUrl?: string) {
  if (!rawUrl) {
    return 'https://example.edu';
  }

  const withProtocol = rawUrl.startsWith('http') ? rawUrl : `https://${rawUrl}`;

  try {
    const parsed = new URL(withProtocol);
    return parsed.origin;
  } catch {
    return 'https://example.edu';
  }
}

const resolvedSiteUrl = normalizeSiteUrl(
  process.env.NEXT_PUBLIC_SITE_URL ?? process.env.VERCEL_PROJECT_PRODUCTION_URL,
);

export const siteConfig = {
  name: 'Dr. Amina Rahman Academic Portfolio',
  title: 'Dr. Amina Rahman | Lecturer in Computer Science',
  description:
    'Academic portfolio for Dr. Amina Rahman, showcasing research areas, publications, teaching, projects, consultancy, and contact information.',
  siteUrl: resolvedSiteUrl,
  locale: 'en_US',
  defaultOgImage: '/images/og-image.png',
};

interface BuildPageMetadataOptions {
  title: string;
  description: string;
  path?: string;
}

export function buildPageMetadata({ title, description, path = '/' }: BuildPageMetadataOptions): Metadata {
  const normalizedPath = path.startsWith('/') ? path : `/${path}`;
  const url = `${siteConfig.siteUrl}${normalizedPath}`;

  return {
    title,
    description,
    alternates: {
      canonical: normalizedPath,
    },
    openGraph: {
      title,
      description,
      url,
      siteName: siteConfig.name,
      locale: siteConfig.locale,
      type: 'website',
      images: [
        {
          url: siteConfig.defaultOgImage,
          width: 1200,
          height: 630,
          alt: `${siteConfig.name} Open Graph image`,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [siteConfig.defaultOgImage],
    },
  };
}

# Academic Portfolio Starter

Production-ready starter template for an academic portfolio website built with Next.js App Router, TypeScript, Tailwind CSS, and ESLint.

## Requirements

- Node.js 20+
- npm 10+

## Local setup (exact commands)

```bash
npm install
npm run lint
npm run typecheck
npm run build
npm run dev
```

Open <http://localhost:3000>.

If `npm install` fails in restricted environments, run:

```bash
npm run setup
```

This script retries install with sanitized proxy variables and then with current proxy settings.

## Scripts

- `npm run dev` — start development server
- `npm run lint` — run ESLint
- `npm run typecheck` — run TypeScript type checks (`tsc --noEmit`)
- `npm run build` — create production build
- `npm run start` — run production server
- `npm run setup` — resilient install helper for constrained environments

## Environment variables

Set these in `.env.local` for local development and in Vercel project settings for production:

- `NEXT_PUBLIC_SITE_URL` — canonical public site URL (e.g. `https://yourdomain.com`)
- `CONTACT_DELIVERY_MODE` — `log` (default) or `webhook`
- `CONTACT_WEBHOOK_URL` — required when `CONTACT_DELIVERY_MODE=webhook`
- `CONTACT_WEBHOOK_AUTH_HEADER` — optional auth header value (e.g. `Bearer <token>`)
- `CONTACT_WEBHOOK_TIMEOUT_MS` — optional timeout in milliseconds for webhook calls (default: `8000`)

### Example

```bash
NEXT_PUBLIC_SITE_URL=https://yourdomain.com
CONTACT_DELIVERY_MODE=webhook
CONTACT_WEBHOOK_URL=https://your-provider.example.com/contact
CONTACT_WEBHOOK_AUTH_HEADER=Bearer your-secret-token
CONTACT_WEBHOOK_TIMEOUT_MS=8000
```

If `CONTACT_DELIVERY_MODE=log`, submissions are validated and logged server-side for safe local testing.

## Deployment-safe contact form notes

- Webhook secrets are only read in server code (`app/contact/actions.ts`), never exposed client-side.
- In production, webhook delivery requires an `https://` URL.
- Basic bot mitigation is enabled through a hidden honeypot field.
- Keep `CONTACT_WEBHOOK_AUTH_HEADER` private and configure it only in Vercel environment variables.

## SEO and metadata

- Global metadata and Open Graph defaults are set in `app/layout.tsx`.
- Page-level metadata is implemented per route through `buildPageMetadata` in `lib/seo.ts`.
- `app/sitemap.ts` and `app/robots.ts` are included for search indexing readiness.

## Vercel deployment (exact steps)

1. Push this repository to GitHub.
2. Sign in to Vercel and click **Add New → Project**.
3. Import the repository.
4. In **Project Settings → Environment Variables**, add:
   - `NEXT_PUBLIC_SITE_URL`
   - `CONTACT_DELIVERY_MODE`
   - `CONTACT_WEBHOOK_URL` (if using webhook)
   - `CONTACT_WEBHOOK_AUTH_HEADER` (if required)
   - `CONTACT_WEBHOOK_TIMEOUT_MS` (optional)
5. Confirm framework preset is **Next.js** (Vercel auto-detects this).
6. Trigger deploy.
7. After deployment, verify:
   - `/sitemap.xml`
   - `/robots.txt`
   - page metadata/Open Graph previews
   - contact form success/error behavior

## Content updates

Update files in `content/` to edit profile, publications, research areas, courses, projects, and consultancy entries.

## Suggested pre-deployment checks

```bash
npm run lint
npm run typecheck
npm run build
```

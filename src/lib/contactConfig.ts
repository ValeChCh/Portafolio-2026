/** Contact delivery + Meet booking — configure via Vite env (see .env.example). */

export function getFormspreeEndpoint(): string | null {
  const endpoint = import.meta.env.VITE_FORMSPREE_ENDPOINT?.trim();
  return endpoint || null;
}

/** Destination for FormSubmit.co when Formspree is not set. */
export function getFormSubmitEmail(fallbackEmail: string): string {
  return import.meta.env.VITE_FORMSUBMIT_EMAIL?.trim() || fallbackEmail;
}

/** Calendly event URL that creates Google Meet (e.g. https://calendly.com/you/15min). */
export function getCalendlyUrl(): string | null {
  const url = import.meta.env.VITE_CALENDLY_URL?.trim();
  return url || null;
}

export function buildCalendlyEmbedUrl(
  baseUrl: string,
  opts: { name: string; email: string }
): string {
  const url = new URL(baseUrl);
  if (opts.name.trim()) url.searchParams.set('name', opts.name.trim());
  if (opts.email.trim()) url.searchParams.set('email', opts.email.trim());
  url.searchParams.set('hide_gdpr_banner', '1');
  url.searchParams.set('primary_color', '8F9DE2');
  return url.toString();
}

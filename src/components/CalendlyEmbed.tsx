import React, { useEffect, useMemo } from 'react';
import { buildCalendlyEmbedUrl } from '../lib/contactConfig';

type Props = {
  calendlyUrl: string;
  name: string;
  email: string;
  onScheduled: () => void;
  title: string;
};

/**
 * Inline Calendly iframe. Event type must have Google Meet enabled in Calendly settings.
 */
export default function CalendlyEmbed({ calendlyUrl, name, email, onScheduled, title }: Props) {
  const src = useMemo(
    () => buildCalendlyEmbedUrl(calendlyUrl, { name, email }),
    [calendlyUrl, name, email]
  );

  useEffect(() => {
    const onMessage = (e: MessageEvent) => {
      const data = e.data as { event?: string } | undefined;
      if (!data?.event || typeof data.event !== 'string') return;
      if (data.event === 'calendly.event_scheduled') {
        onScheduled();
      }
    };
    window.addEventListener('message', onMessage);
    return () => window.removeEventListener('message', onMessage);
  }, [onScheduled]);

  return (
    <div
      className="rounded-xl border-2 border-black overflow-hidden bg-white"
      id="calendly-embed-wrap"
    >
      <iframe
        title={title}
        src={src}
        className="w-full border-0"
        style={{ minWidth: '320px', height: '620px' }}
        loading="lazy"
        id="calendly-inline-iframe"
      />
    </div>
  );
}

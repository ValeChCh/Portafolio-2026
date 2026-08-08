/** Self-contained Harvard CV styles for the print window (matches letter PDF). */
export const HARVARD_CV_PRINT_CSS = `
  @page {
    size: letter;
    margin: 0.55in 0.65in;
  }

  * {
    box-sizing: border-box;
  }

  html, body {
    margin: 0;
    padding: 0;
    background: #fff;
    color: #111;
  }

  body {
    font-family: Georgia, 'Times New Roman', Times, serif;
    font-size: 10.5pt;
    line-height: 1.35;
    -webkit-print-color-adjust: exact;
    print-color-adjust: exact;
  }

  .harvard-cv {
    max-width: none;
    margin: 0;
    padding: 0;
    background: #fff;
    color: #111;
    border: none;
    font-family: Georgia, 'Times New Roman', Times, serif;
    font-size: 10.5pt;
    line-height: 1.35;
  }

  .harvard-cv-header {
    text-align: center;
    margin-bottom: 1.1rem;
  }

  .harvard-cv-name {
    font-family: Georgia, 'Times New Roman', Times, serif;
    font-size: 18pt;
    font-weight: 700;
    letter-spacing: 0.02em;
    line-height: 1.15;
    text-transform: uppercase;
    margin: 0;
  }

  .harvard-cv-title {
    margin: 0.25rem 0 0;
    font-size: 11pt;
    font-style: italic;
  }

  .harvard-cv-contact {
    margin: 0.45rem 0 0;
    font-size: 9.5pt;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 0.35rem 0.5rem;
  }

  .harvard-cv-contact a {
    color: inherit;
    text-decoration: none;
  }

  .harvard-cv-sep {
    opacity: 0.55;
  }

  .harvard-cv-section {
    margin-top: 0.9rem;
  }

  .harvard-cv-section-title {
    font-family: Georgia, 'Times New Roman', Times, serif;
    font-size: 11pt;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.06em;
    border-bottom: 1px solid #111;
    padding-bottom: 0.15rem;
    margin: 0 0 0.45rem;
  }

  .harvard-cv-summary,
  .harvard-cv-skills {
    font-size: 10pt;
    text-align: justify;
    margin: 0;
  }

  .harvard-cv-entries {
    display: flex;
    flex-direction: column;
    gap: 0.65rem;
  }

  .harvard-cv-entry-row {
    display: flex;
    justify-content: space-between;
    align-items: baseline;
    gap: 1rem;
  }

  .harvard-cv-org {
    font-size: 10.5pt;
    font-weight: 700;
    margin: 0;
  }

  .harvard-cv-dates {
    font-size: 10pt;
    white-space: nowrap;
    flex-shrink: 0;
  }

  .harvard-cv-role {
    font-size: 10.5pt;
    font-style: italic;
    margin: 0.05rem 0 0;
  }

  .harvard-cv-detail {
    font-size: 9.5pt;
    margin: 0.1rem 0 0;
  }

  .harvard-cv-bullets {
    margin: 0.25rem 0 0;
    padding-left: 1.1rem;
    list-style: disc;
  }

  .harvard-cv-bullets li {
    font-size: 10pt;
    margin-top: 0.15rem;
  }

  .harvard-cv-bullets li::marker {
    font-size: 0.85em;
  }
`;

export function printHarvardCv(options: {
  html: string;
  documentTitle: string;
  lang: 'es' | 'en';
  /** Fallback when the print popup is blocked */
  onPopupBlocked?: () => void;
}): void {
  const { html, documentTitle, lang, onPopupBlocked } = options;
  // Do not use noopener here — some browsers then return null and print never opens.
  const win = window.open('', '_blank', 'width=900,height=1200');

  if (!win) {
    onPopupBlocked?.();
    return;
  }

  win.document.open();
  win.document.write(`<!DOCTYPE html>
<html lang="${lang}">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>${documentTitle}</title>
  <style>${HARVARD_CV_PRINT_CSS}</style>
</head>
<body>
${html}
</body>
</html>`);
  win.document.close();

  const triggerPrint = () => {
    try {
      win.focus();
      win.print();
    } finally {
      // Close after the print dialog settles (keeps dialog usable).
      win.setTimeout(() => {
        try {
          win.close();
        } catch {
          /* ignore */
        }
      }, 300);
    }
  };

  if (win.document.readyState === 'complete') {
    win.setTimeout(triggerPrint, 200);
  } else {
    win.onload = () => win.setTimeout(triggerPrint, 200);
  }
}

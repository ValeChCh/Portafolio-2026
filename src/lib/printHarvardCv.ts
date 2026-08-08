import type { Experience } from '../types';
import type { Lang } from '../i18n/LanguageContext';

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

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

export type HarvardEducation = {
  degree: string;
  institution: string;
  duration: string;
  detail?: string;
};

export type HarvardCvLabels = {
  profileSummary: string;
  workExperience: string;
  education: string;
  skillsSection: string;
  languages: string;
};

export type HarvardCvData = {
  fullName: string;
  title: string;
  location: string;
  email: string;
  linkedInUrl?: string;
  bio: string;
  experience: Experience[];
  education: HarvardEducation[];
  skillsLine: string;
  languagesLine: string;
  labels: HarvardCvLabels;
};

export function buildHarvardCvHtml(data: HarvardCvData): string {
  const linkedIn = data.linkedInUrl
    ? `<span class="harvard-cv-sep" aria-hidden="true">|</span><a href="${escapeHtml(data.linkedInUrl)}" target="_blank" rel="noreferrer">LinkedIn</a>`
    : '';

  const experienceHtml = data.experience
    .map(
      (exp) => `
      <div class="harvard-cv-entry">
        <div class="harvard-cv-entry-row">
          <h3 class="harvard-cv-org">${escapeHtml(exp.company)}</h3>
          <span class="harvard-cv-dates">${escapeHtml(exp.duration)}</span>
        </div>
        <p class="harvard-cv-role">${escapeHtml(exp.role)}</p>
        <ul class="harvard-cv-bullets">
          ${exp.description.map((d) => `<li>${escapeHtml(d)}</li>`).join('')}
        </ul>
      </div>`
    )
    .join('');

  const educationHtml = data.education
    .map(
      (edu) => `
      <div class="harvard-cv-entry">
        <div class="harvard-cv-entry-row">
          <h3 class="harvard-cv-org">${escapeHtml(edu.institution)}</h3>
          <span class="harvard-cv-dates">${escapeHtml(edu.duration)}</span>
        </div>
        <p class="harvard-cv-role">${escapeHtml(edu.degree)}</p>
        ${edu.detail ? `<p class="harvard-cv-detail">${escapeHtml(edu.detail)}</p>` : ''}
      </div>`
    )
    .join('');

  return `
<article class="harvard-cv" aria-label="Curriculum Vitae">
  <header class="harvard-cv-header">
    <h1 class="harvard-cv-name">${escapeHtml(data.fullName)}</h1>
    <p class="harvard-cv-title">${escapeHtml(data.title)}</p>
    <p class="harvard-cv-contact">
      <span>${escapeHtml(data.location)}</span>
      <span class="harvard-cv-sep" aria-hidden="true">|</span>
      <a href="mailto:${escapeHtml(data.email)}">${escapeHtml(data.email)}</a>
      ${linkedIn}
    </p>
  </header>

  <section class="harvard-cv-section">
    <h2 class="harvard-cv-section-title">${escapeHtml(data.labels.profileSummary)}</h2>
    <p class="harvard-cv-summary">${escapeHtml(data.bio)}</p>
  </section>

  <section class="harvard-cv-section">
    <h2 class="harvard-cv-section-title">${escapeHtml(data.labels.workExperience)}</h2>
    <div class="harvard-cv-entries">${experienceHtml}</div>
  </section>

  <section class="harvard-cv-section">
    <h2 class="harvard-cv-section-title">${escapeHtml(data.labels.education)}</h2>
    <div class="harvard-cv-entries">${educationHtml}</div>
  </section>

  <section class="harvard-cv-section">
    <h2 class="harvard-cv-section-title">${escapeHtml(data.labels.skillsSection)}</h2>
    <p class="harvard-cv-skills">${escapeHtml(data.skillsLine)}</p>
  </section>

  <section class="harvard-cv-section">
    <h2 class="harvard-cv-section-title">${escapeHtml(data.labels.languages)}</h2>
    <p class="harvard-cv-skills">${escapeHtml(data.languagesLine)}</p>
  </section>
</article>`;
}

function printDocumentHtml(options: {
  html: string;
  documentTitle: string;
  lang: Lang;
}): void {
  const { html, documentTitle, lang } = options;
  const docHtml = `<!DOCTYPE html>
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
</html>`;

  const win = window.open('', '_blank', 'width=900,height=1200');
  if (win) {
    win.document.open();
    win.document.write(docHtml);
    win.document.close();

    const triggerPrint = () => {
      try {
        win.focus();
        win.print();
      } finally {
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
    return;
  }

  // Popup blocked: print via hidden iframe (still Harvard PDF, not on-screen neo UI).
  const iframe = document.createElement('iframe');
  iframe.setAttribute('title', documentTitle);
  iframe.style.position = 'fixed';
  iframe.style.right = '0';
  iframe.style.bottom = '0';
  iframe.style.width = '0';
  iframe.style.height = '0';
  iframe.style.border = '0';
  iframe.style.opacity = '0';
  iframe.style.pointerEvents = 'none';
  document.body.appendChild(iframe);

  const iframeDoc = iframe.contentDocument || iframe.contentWindow?.document;
  if (!iframeDoc || !iframe.contentWindow) {
    document.body.removeChild(iframe);
    return;
  }

  iframeDoc.open();
  iframeDoc.write(docHtml);
  iframeDoc.close();

  iframe.contentWindow.focus();
  iframe.contentWindow.print();
  window.setTimeout(() => {
    iframe.remove();
  }, 1000);
}

/** Opens the Harvard-format CV in a print dialog (Save as PDF). ES/EN via `data`. */
export function printHarvardCv(options: {
  data: HarvardCvData;
  documentTitle: string;
  lang: Lang;
}): void {
  const html = buildHarvardCvHtml(options.data);
  printDocumentHtml({
    html,
    documentTitle: options.documentTitle,
    lang: options.lang,
  });
}

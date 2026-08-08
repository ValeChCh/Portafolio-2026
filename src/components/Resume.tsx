import { Printer } from 'lucide-react';
import { CORE_SKILLS, DESIGN_TOOLS, METHODOLOGIES } from '../data';
import { useLocalizedContent } from '../i18n/useI18n';

const FULL_NAME = 'Valeria Charco';

export default function Resume() {
  const { profile, experience, education, t } = useLocalizedContent();
  const languages = [
    { name: t.langSpanish, level: t.langSpanishLevel },
    { name: t.langEnglish, level: t.langEnglishLevel },
  ];
  const linkedIn = profile.socials.find((s) => s.name === 'LinkedIn')?.url;
  const skillsLine = [
    ...CORE_SKILLS.map((s) => s.name),
    ...DESIGN_TOOLS,
    ...METHODOLOGIES.slice(0, 4),
  ].join(' · ');

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="space-y-8 py-2 md:py-6" id="resume-section-container">
      <div className="flex items-center justify-between no-print" id="resume-actions-header">
        <div>
          <h2 className="font-display text-3xl font-black tracking-tight text-black">
            {t.resumeTitle}
          </h2>
          <p className="text-sm font-medium text-slate-700 mt-1">{t.resumeSubtitle}</p>
        </div>

        <div className="flex space-x-2" id="resume-action-buttons">
          <button
            type="button"
            onClick={handlePrint}
            className="neo-btn-primary"
            title={t.printCvTitle}
            id="print-cv-btn"
          >
            <Printer size={16} />
            <span className="hidden sm:inline">{t.printCv}</span>
          </button>
        </div>
      </div>

      <article className="harvard-cv" id="harvard-cv" aria-label="Curriculum Vitae">
        <header className="harvard-cv-header">
          <h1 className="harvard-cv-name">{FULL_NAME}</h1>
          <p className="harvard-cv-title">{profile.title}</p>
          <p className="harvard-cv-contact">
            <span>{profile.location}</span>
            <span className="harvard-cv-sep" aria-hidden="true">
              |
            </span>
            <a href={`mailto:${profile.email}`}>{profile.email}</a>
            {linkedIn ? (
              <>
                <span className="harvard-cv-sep" aria-hidden="true">
                  |
                </span>
                <a href={linkedIn} target="_blank" rel="noreferrer">
                  LinkedIn
                </a>
              </>
            ) : null}
          </p>
        </header>

        <section className="harvard-cv-section" id="cv-profile-section">
          <h2 className="harvard-cv-section-title">{t.profileSummary}</h2>
          <p className="harvard-cv-summary">{profile.bio}</p>
        </section>

        <section className="harvard-cv-section" id="cv-work-experience-section">
          <h2 className="harvard-cv-section-title">{t.workExperience}</h2>
          <div className="harvard-cv-entries">
            {experience.map((exp) => (
              <div key={exp.id} className="harvard-cv-entry" id={`exp-item-${exp.id}`}>
                <div className="harvard-cv-entry-row">
                  <h3 className="harvard-cv-org">{exp.company}</h3>
                  <span className="harvard-cv-dates">{exp.duration}</span>
                </div>
                <p className="harvard-cv-role">{exp.role}</p>
                <ul className="harvard-cv-bullets" id={`exp-bullet-list-${exp.id}`}>
                  {exp.description.map((desc, dIdx) => (
                    <li key={dIdx} id={`exp-desc-bullet-${exp.id}-${dIdx}`}>
                      {desc}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <section className="harvard-cv-section" id="cv-education-section">
          <h2 className="harvard-cv-section-title">{t.education}</h2>
          <div className="harvard-cv-entries">
            {education.map((edu, idx) => (
              <div key={idx} className="harvard-cv-entry" id={`edu-item-${idx}`}>
                <div className="harvard-cv-entry-row">
                  <h3 className="harvard-cv-org">{edu.institution}</h3>
                  <span className="harvard-cv-dates">{edu.duration}</span>
                </div>
                <p className="harvard-cv-role">{edu.degree}</p>
                {'detail' in edu && edu.detail ? (
                  <p className="harvard-cv-detail">{edu.detail}</p>
                ) : null}
              </div>
            ))}
          </div>
        </section>

        <section className="harvard-cv-section" id="cv-skills-section">
          <h2 className="harvard-cv-section-title">{t.skillsSection}</h2>
          <p className="harvard-cv-skills">{skillsLine}</p>
        </section>

        <section className="harvard-cv-section" id="cv-languages-section">
          <h2 className="harvard-cv-section-title">{t.languages}</h2>
          <p className="harvard-cv-skills">
            {languages.map((lang) => `${lang.name} (${lang.level})`).join(' · ')}
          </p>
        </section>
      </article>
    </div>
  );
}

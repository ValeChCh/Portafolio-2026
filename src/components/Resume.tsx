import { Briefcase, GraduationCap, Languages, Printer } from 'lucide-react';
import { CORE_SKILLS, DESIGN_TOOLS, METHODOLOGIES } from '../data';
import { useLocalizedContent } from '../i18n/useI18n';
import { printHarvardCv } from '../lib/printHarvardCv';

const FULL_NAME = 'Valeria Charco';

export default function Resume() {
  const { lang, profile, experience, education, t } = useLocalizedContent();
  const languages = [
    { name: t.langSpanish, level: t.langSpanishLevel },
    { name: t.langEnglish, level: t.langEnglishLevel },
  ];

  const handlePrint = () => {
    const previousTitle = document.title;
    const documentTitle =
      lang === 'en' ? 'Valeria_Charco_Resume_EN' : 'Valeria_Charco_CV_ES';
    const linkedIn = profile.socials.find((s) => s.name === 'LinkedIn')?.url;
    const skillsLine = [
      ...CORE_SKILLS.map((s) => s.name),
      ...DESIGN_TOOLS,
      ...METHODOLOGIES.slice(0, 4),
    ].join(' · ');

    document.title = documentTitle;

    printHarvardCv({
      lang,
      documentTitle,
      data: {
        fullName: FULL_NAME,
        title: profile.title,
        location: profile.location,
        email: profile.email,
        linkedInUrl: linkedIn,
        bio: profile.bio,
        experience,
        education,
        skillsLine,
        languagesLine: languages.map((item) => `${item.name} (${item.level})`).join(' · '),
        labels: {
          profileSummary: t.profileSummary,
          workExperience: t.printWorkExperience,
          education: t.printEducation,
          skillsSection: t.skillsSection,
          languages: t.printLanguages,
        },
      },
    });

    window.setTimeout(() => {
      document.title = previousTitle;
    }, 1000);
  };

  return (
    <div className="space-y-10 py-2 md:py-6" id="resume-section-container">
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

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 no-print" id="cv-grid">
        <div className="lg:col-span-8 neo-window" id="cv-main-column">
          <div className="neo-window-bar">
            <div className="flex space-x-1.5">
              <span className="h-2.5 w-2.5 rounded-full bg-red-400 border border-black inline-block" />
              <span className="h-2.5 w-2.5 rounded-full bg-yellow-400 border border-black inline-block" />
              <span className="h-2.5 w-2.5 rounded-full bg-emerald-400 border border-black inline-block" />
            </div>
            <span>EXPERIENCIA_LABORAL.LOG</span>
          </div>

          <div className="p-6 md:p-8 space-y-8">
            <div className="space-y-6" id="cv-work-experience-section">
              <h3 className="font-display text-2xl font-black text-black flex items-center space-x-2 pb-3 border-b-2 border-black">
                <Briefcase size={22} className="text-black" />
                <span>{t.workExperience}</span>
              </h3>

              <div
                className="space-y-8 relative pl-6 before:absolute before:left-1 before:top-2 before:bottom-2 before:w-1 before:bg-black"
                id="experience-timeline"
              >
                {experience.map((exp) => (
                  <div key={exp.id} className="relative group" id={`exp-timeline-item-${exp.id}`}>
                    <span
                      className={`absolute -left-7 top-1 h-5 w-5 rounded-full border-2 border-black transition-transform group-hover:scale-125 ${
                        exp.current ? 'bg-[#8F9DE2]' : 'bg-[#bae6fd]'
                      }`}
                    />

                    <div className="space-y-2">
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                        <h4 className="text-lg font-black text-black group-hover:text-[#7A8AD9] transition-colors">
                          {exp.role}
                        </h4>
                        <span className="neo-pill bg-[#a7f3d0] text-black">{exp.duration}</span>
                      </div>

                      <div className="text-sm font-sans font-bold text-slate-700">{exp.company}</div>

                      <ul
                        className="list-disc list-outside pl-4 space-y-1.5 text-xs md:text-sm font-medium text-slate-800 leading-relaxed"
                        id={`exp-bullet-list-${exp.id}`}
                      >
                        {exp.description.map((desc, dIdx) => (
                          <li key={dIdx} id={`exp-desc-bullet-${exp.id}-${dIdx}`}>
                            {desc}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="lg:col-span-4 space-y-8 flex flex-col" id="cv-side-column">
          <div className="neo-window" id="cv-education-section">
            <div className="neo-window-bar">
              <div className="flex space-x-1.5">
                <span className="h-2.5 w-2.5 rounded-full bg-red-400 border border-black inline-block" />
                <span className="h-2.5 w-2.5 rounded-full bg-yellow-400 border border-black inline-block" />
                <span className="h-2.5 w-2.5 rounded-full bg-emerald-400 border border-black inline-block" />
              </div>
              <span>FORMACION.EDU</span>
            </div>

            <div className="p-6 space-y-4">
              <h3 className="font-display text-xl font-black text-black flex items-center space-x-2 pb-2 border-b-2 border-black">
                <GraduationCap size={20} className="text-black" />
                <span>{t.education}</span>
              </h3>

              <div className="space-y-4" id="education-items">
                {education.map((edu, idx) => (
                  <div
                    key={idx}
                    className="space-y-1 p-3 rounded-xl border-2 border-black bg-[#fbcfe8] text-black"
                    id={`edu-item-${idx}`}
                  >
                    <h4 className="text-sm md:text-base font-black leading-tight">{edu.degree}</h4>
                    <p className="text-xs font-semibold text-slate-800">{edu.institution}</p>
                    {'detail' in edu && edu.detail ? (
                      <p className="text-xs text-slate-700 leading-snug">{edu.detail}</p>
                    ) : null}
                    <span className="inline-block text-[10px] font-sans font-bold bg-black text-white px-2 py-0.5 rounded-full">
                      {edu.duration}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="neo-window" id="cv-languages-section">
            <div className="neo-window-bar">
              <div className="flex space-x-1.5">
                <span className="h-2.5 w-2.5 rounded-full bg-red-400 border border-black inline-block" />
                <span className="h-2.5 w-2.5 rounded-full bg-yellow-400 border border-black inline-block" />
                <span className="h-2.5 w-2.5 rounded-full bg-emerald-400 border border-black inline-block" />
              </div>
              <span>IDIOMAS.LANG</span>
            </div>

            <div className="p-6 space-y-4">
              <h3 className="font-display text-xl font-black text-black flex items-center space-x-2 pb-2 border-b-2 border-black">
                <Languages size={20} className="text-black" />
                <span>{t.languages}</span>
              </h3>

              <div className="space-y-3" id="language-items">
                {languages.map((item) => (
                  <div
                    key={item.name}
                    className="flex items-center justify-between gap-3 p-3 rounded-xl border-2 border-black bg-[#e9d5ff] text-black"
                    id={`lang-item-${item.name.toLowerCase()}`}
                  >
                    <h4 className="text-sm md:text-base font-black leading-tight">{item.name}</h4>
                    <span className="inline-block shrink-0 text-[10px] font-sans font-bold bg-black text-white px-2 py-0.5 rounded-full">
                      {item.level}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

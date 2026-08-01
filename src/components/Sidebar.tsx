import { CORE_SKILLS } from '../data';
import type { ActiveTab } from '../types';
import { useLocalizedContent } from '../i18n/useI18n';

interface SidebarProps {
  setActiveTab?: (tab: ActiveTab) => void;
}

export default function Sidebar({ setActiveTab }: SidebarProps) {
  const { profile, t } = useLocalizedContent();

  return (
    <div className="neo-window" id="valeria-intro-sidebar">
      <div className="neo-window-bar">
        <div className="flex space-x-1.5">
          <span className="h-2.5 w-2.5 rounded-full bg-red-400 border border-black inline-block" />
          <span className="h-2.5 w-2.5 rounded-full bg-yellow-400 border border-black inline-block" />
          <span className="h-2.5 w-2.5 rounded-full bg-emerald-400 border border-black inline-block" />
        </div>
        <span className="truncate">VALERIA_PROFILE.APP</span>
      </div>

      <div className="p-6 md:p-8 flex flex-col space-y-6">
        <div className="space-y-4">
          <h1 className="font-display text-4xl font-black tracking-tight text-black md:text-5xl leading-[1.1]" id="intro-greeting">
            {t.greeting} <br className="hidden md:inline" />
            {t.greetingName}
          </h1>
          <h2 className="font-sans text-sm font-extrabold text-slate-700" id="intro-profession">
            {profile.title}
          </h2>
          <p className="font-sans text-sm md:text-base leading-relaxed text-slate-800" id="intro-description">
            {profile.bio}
          </p>
        </div>

        <div className="space-y-3 pt-2" id="core-skills-section">
          <h3 className="font-sans text-xs font-black uppercase tracking-widest text-black border-b-2 border-black pb-1 w-fit" id="skills-title">
            {t.coreSkills}
          </h3>
          <div className="flex flex-wrap gap-2" id="skills-badges-container">
            {CORE_SKILLS.map((skill, index) => (
                <span
                  key={index}
                  className="neo-pill bg-transparent cursor-default"
                  id={`skill-badge-${index}`}
                >
                  {skill.name}
                </span>
            ))}
          </div>
        </div>

        <div className="rounded-xl border-2 border-black bg-white p-4 text-black" id="sidebar-cta-card">
          <p className="text-xs font-bold leading-relaxed">{t.sidebarCta}</p>
          <div className="mt-2.5">
            <button
              type="button"
              onClick={() => setActiveTab?.('contact')}
              className="inline-flex items-center text-xs font-black bg-black text-white px-3 py-1 rounded-full hover:bg-slate-800 transition-colors cursor-pointer"
            >
              {t.seeContact}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

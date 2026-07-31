import { METHODOLOGIES, DESIGN_TOOLS } from '../data';
import { Target, Heart, Award, BookOpen, Compass, CheckCircle2 } from 'lucide-react';
import { useLocalizedContent } from '../i18n/useI18n';

export default function About() {
  const { profile, t } = useLocalizedContent();

  const values = [
    { title: t.value1Title, desc: t.value1Desc, icon: Target, bg: 'bg-[#fef08a]' },
    { title: t.value2Title, desc: t.value2Desc, icon: Heart, bg: 'bg-[#fbcfe8]' },
    { title: t.value3Title, desc: t.value3Desc, icon: Award, bg: 'bg-[#bae6fd]' },
  ];

  return (
    <div className="space-y-12 py-2 md:py-6" id="about-section-container">
      <div className="neo-window p-0" id="about-intro-grid">
        <div className="neo-window-bar">
          <div className="flex space-x-1.5">
            <span className="h-2.5 w-2.5 rounded-full bg-red-400 border border-black inline-block" />
            <span className="h-2.5 w-2.5 rounded-full bg-yellow-400 border border-black inline-block" />
            <span className="h-2.5 w-2.5 rounded-full bg-emerald-400 border border-black inline-block" />
          </div>
          <span>{t.navAbout}</span>
          <span className="text-[10px] text-slate-400">PROFILE</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 p-6 md:p-8 items-start">
          <div
            className="lg:col-span-4 flex flex-col items-center text-center space-y-4"
            id="about-profile-wrapper"
          >
            <div
              className="relative h-48 w-48 sm:h-56 sm:w-56 overflow-hidden rounded-2xl border-2 border-black"
              id="about-profile-image-frame"
            >
              <img
                src="/src/assets/images/valeria_avatar.jpg"
                alt="Valeria Designer Profile"
                className="h-full w-full object-cover object-[50%_20%]"
                referrerPolicy="no-referrer"
              />
            </div>
            <div id="about-profile-meta" className="space-y-1">
              <h3 className="font-display text-2xl font-black text-black">Valeria Charco</h3>
              <p className="neo-pill bg-[#fef08a] text-black">{t.productDesigner}</p>
              <p className="text-xs font-mono font-bold text-slate-700 pt-1 leading-relaxed">
                {profile.location.includes('(') ? (
                  <>
                    {profile.location.slice(0, profile.location.indexOf('(')).trimEnd()}
                    <br />
                    {profile.location.slice(profile.location.indexOf('('))}
                  </>
                ) : (
                  profile.location
                )}
              </p>
            </div>
          </div>

          <div className="lg:col-span-8 space-y-3" id="about-bio-text">
            <span className="neo-pill bg-[#a7f3d0] text-black">{t.aboutPill}</span>
            <h2
              className="font-display text-3xl font-black tracking-tight text-black leading-tight"
              id="about-headline"
            >
              {t.aboutHeadline}
            </h2>
            <p
              className="font-sans text-sm md:text-base leading-relaxed text-slate-800"
              id="about-detailed-bio"
            >
              {profile.aboutDetailed}
            </p>
          </div>
        </div>
      </div>

      <div className="space-y-6" id="about-values-section">
        <div className="text-center max-w-xl mx-auto space-y-2">
          <h3 className="font-display text-2xl font-black text-black">{t.valuesTitle}</h3>
          <p className="text-sm font-medium text-slate-700">{t.valuesSubtitle}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6" id="values-grid">
          {values.map((val, idx) => {
            const IconComponent = val.icon;
            return (
              <div
                key={idx}
                className={`rounded-2xl border-2 border-black p-6 md:p-8 flex flex-col space-y-4 ${val.bg} text-black`}
                id={`value-card-${idx}`}
              >
                <div className="p-3 rounded-full border-2 border-black bg-white w-fit" id={`value-icon-wrapper-${idx}`}>
                  <IconComponent size={24} className="text-black" />
                </div>
                <h4 className="font-display text-lg font-black text-black" id={`value-title-${idx}`}>
                  {val.title}
                </h4>
                <p className="font-sans text-xs md:text-sm font-medium leading-relaxed text-slate-800" id={`value-desc-${idx}`}>
                  {val.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-2" id="methodologies-tools-grid">
        <div className="neo-window" id="methodologies-col">
          <div className="neo-window-bar">
            <div className="flex space-x-1.5">
              <span className="h-2.5 w-2.5 rounded-full bg-red-400 border border-black inline-block" />
              <span className="h-2.5 w-2.5 rounded-full bg-yellow-400 border border-black inline-block" />
              <span className="h-2.5 w-2.5 rounded-full bg-emerald-400 border border-black inline-block" />
            </div>
            <span>METODOLOGIAS.LIST</span>
          </div>
          <div className="p-6 space-y-4">
            <div className="flex items-center space-x-2 text-black mb-2">
              <Compass className="text-black" size={20} />
              <h4 className="font-display text-lg font-black">{t.methodologiesTitle}</h4>
            </div>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2" id="methodologies-list">
              {METHODOLOGIES.map((met, idx) => (
                <li key={idx} className="flex items-center space-x-2 text-xs md:text-sm font-bold text-black" id={`met-item-${idx}`}>
                  <CheckCircle2 size={16} className="text-emerald-500 shrink-0" />
                  <span>{met}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="neo-window" id="tools-col">
          <div className="neo-window-bar">
            <div className="flex space-x-1.5">
              <span className="h-2.5 w-2.5 rounded-full bg-red-400 border border-black inline-block" />
              <span className="h-2.5 w-2.5 rounded-full bg-yellow-400 border border-black inline-block" />
              <span className="h-2.5 w-2.5 rounded-full bg-emerald-400 border border-black inline-block" />
            </div>
            <span>TOOLS_STACK.CONFIG</span>
          </div>
          <div className="p-6 space-y-4">
            <div className="flex items-center space-x-2 text-black mb-2">
              <BookOpen className="text-black" size={20} />
              <h4 className="font-display text-lg font-black">{t.toolsTitle}</h4>
            </div>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2" id="tools-list">
              {DESIGN_TOOLS.map((tool, idx) => (
                <li key={idx} className="flex items-center space-x-2 text-xs md:text-sm font-bold text-black" id={`tool-item-${idx}`}>
                  <CheckCircle2 size={16} className="text-indigo-500 shrink-0" />
                  <span>{tool}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

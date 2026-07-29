import { VALERIA_PROFILE, CORE_SKILLS } from '../data';

export default function Sidebar() {
  return (
    <div className="neo-window" id="valeria-intro-sidebar">
      {/* Window Header Bar */}
      <div className="neo-window-bar">
        <div className="flex space-x-1.5">
          <span className="h-2.5 w-2.5 rounded-full bg-red-400 border border-black inline-block" />
          <span className="h-2.5 w-2.5 rounded-full bg-yellow-400 border border-black inline-block" />
          <span className="h-2.5 w-2.5 rounded-full bg-emerald-400 border border-black inline-block" />
        </div>
        <span className="truncate">VALERIA_PROFILE.APP</span>
        <span className="text-[10px] text-slate-400">v1.0</span>
      </div>

      <div className="p-6 md:p-8 flex flex-col space-y-6">
        {/* Intro info */}
        <div className="space-y-4">
          <span className="neo-pill bg-[#fef08a] text-black">
            Product designer
          </span>
          <h1 className="font-display text-4xl font-black tracking-tight text-black dark:text-white md:text-5xl leading-[1.1]" id="intro-greeting">
            Hola, <br className="hidden md:inline" />
            soy Valeria!
          </h1>
          <h2 className="font-mono text-sm font-extrabold text-slate-700 dark:text-slate-300 bg-slate-100 dark:bg-slate-800 p-2 rounded-xl border border-black dark:border-white w-fit" id="intro-profession">
            {VALERIA_PROFILE.title}
          </h2>
          <p className="font-sans text-sm md:text-base leading-relaxed text-slate-800 dark:text-slate-200" id="intro-description">
            {VALERIA_PROFILE.bio}
          </p>
        </div>

        {/* Core skills badges */}
        <div className="space-y-3 pt-2" id="core-skills-section">
          <h3 className="font-mono text-xs font-black uppercase tracking-widest text-black dark:text-white border-b-2 border-black dark:border-white pb-1 w-fit" id="skills-title">
            ★ Core Skills
          </h3>
          <div className="flex flex-wrap gap-2" id="skills-badges-container">
            {CORE_SKILLS.map((skill, index) => {
              const bgColors = ['bg-[#fef08a]', 'bg-[#fbcfe8]', 'bg-[#bae6fd]', 'bg-[#a7f3d0]', 'bg-[#e9d5ff]', 'bg-amber-200'];
              const bg = bgColors[index % bgColors.length];
              return (
                <span
                  key={index}
                  className={`neo-pill ${bg} hover:scale-105 transition-transform cursor-default`}
                  id={`skill-badge-${index}`}
                >
                  {skill.name}
                </span>
              );
            })}
          </div>
        </div>

        {/* Callout box */}
        <div className="rounded-xl border-2 border-black bg-[#fbcfe8] p-4 text-black" id="sidebar-cta-card">
          <p className="text-xs font-bold leading-relaxed">
            ¿Buscando una diseñadora para tu próximo reto digital? Conversemos.
          </p>
          <div className="mt-2.5">
            <span className="inline-flex items-center text-xs font-black bg-black text-white px-3 py-1 rounded-full hover:bg-slate-800 transition-colors cursor-pointer">
              Ver Contacto &rarr;
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

import { VALERIA_PROFILE, METHODOLOGIES, DESIGN_TOOLS } from '../data';
import { Target, Heart, Award, Sparkles, BookOpen, Compass, CheckCircle2 } from 'lucide-react';

export default function About() {
  const values = [
    {
      title: "Diseño Guiado por Datos",
      desc: "No creo en opiniones subjetivas. Valido cada flujo, color y botón a través de pruebas de usabilidad y analíticas reales.",
      icon: Target,
      bg: "bg-[#fef08a]"
    },
    {
      title: "Empatía Radical",
      desc: "Me sumerjo profundamente en las realidades diarias del usuario. Diseñar con empatía real genera soluciones que resuelven dolores genuinos.",
      icon: Heart,
      bg: "bg-[#fbcfe8]"
    },
    {
      title: "Sistemas Escalables",
      desc: "Diseño pensando en el mañana. Mis interfaces se estructuran en sistemas de diseño consistentes que aceleran el desarrollo.",
      icon: Award,
      bg: "bg-[#bae6fd]"
    }
  ];

  return (
    <div className="space-y-12 py-2 md:py-6" id="about-section-container">
      {/* Intro section with photo and detailed bio */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch" id="about-intro-grid">
        {/* Profile Image Window */}
        <div className="lg:col-span-4 neo-window p-0 flex flex-col items-center justify-between text-center" id="about-profile-wrapper">
          <div className="neo-window-bar w-full">
            <div className="flex space-x-1.5">
              <span className="h-2.5 w-2.5 rounded-full bg-red-400 border border-black inline-block" />
              <span className="h-2.5 w-2.5 rounded-full bg-yellow-400 border border-black inline-block" />
              <span className="h-2.5 w-2.5 rounded-full bg-emerald-400 border border-black inline-block" />
            </div>
            <span>VALERIA_AVATAR.PNG</span>
          </div>

          <div className="p-6 flex flex-col items-center justify-center space-y-4 my-auto">
            <div className="relative h-56 w-56 overflow-hidden rounded-2xl border-2 border-black dark:border-white" id="about-profile-image-frame">
              <img
                src="/src/assets/images/valeria_avatar_1784586297194.jpg"
                alt="Valeria Designer Profile"
                className="h-full w-full object-cover object-center"
                referrerPolicy="no-referrer"
              />
            </div>
            <div id="about-profile-meta" className="space-y-1">
              <h3 className="font-display text-2xl font-black text-black dark:text-white">Valeria</h3>
              <p className="neo-pill bg-[#fef08a] text-black">UX / Product Designer</p>
              <p className="text-xs font-mono font-bold text-slate-700 dark:text-slate-300 pt-1">{VALERIA_PROFILE.location}</p>
            </div>
          </div>
        </div>

        {/* Detailed Bio Text Window */}
        <div className="lg:col-span-8 neo-window p-0 flex flex-col justify-between" id="about-bio-text">
          <div className="neo-window-bar">
            <div className="flex space-x-1.5">
              <span className="h-2.5 w-2.5 rounded-full bg-red-400 border border-black inline-block" />
              <span className="h-2.5 w-2.5 rounded-full bg-yellow-400 border border-black inline-block" />
              <span className="h-2.5 w-2.5 rounded-full bg-emerald-400 border border-black inline-block" />
            </div>
            <span>ABOUT_VALERIA.TXT</span>
          </div>

          <div className="p-6 md:p-8 space-y-6 flex-1 flex flex-col justify-between">
            <div className="space-y-3">
              <span className="neo-pill bg-[#a7f3d0] text-black">
                ★ Sobre Mí
              </span>
              <h2 className="font-display text-3xl font-black tracking-tight text-black dark:text-white leading-tight" id="about-headline">
                Transformando ideas complejas en experiencias simples y humanas
              </h2>
              <p className="font-sans text-sm md:text-base leading-relaxed text-slate-800 dark:text-slate-200" id="about-detailed-bio">
                {VALERIA_PROFILE.aboutDetailed}
              </p>
            </div>
            
            <div className="rounded-xl border-2 border-black bg-[#fbcfe8] p-5 text-black" id="about-philosophy-box">
              <span className="font-mono text-[10px] font-black uppercase tracking-wider block mb-1 text-black">Mi Filosofía de Diseño</span>
              <p className="font-sans text-xs md:text-sm font-semibold italic text-slate-900">
                "El diseño no es solo lo que se ve y lo que se siente. El diseño es cómo funciona." — Steve Jobs. En mi trabajo diario, me esfuerzo por lograr una sinergia perfecta entre estética, tecnología y objetivos de negocio.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Values / Core Principles */}
      <div className="space-y-6" id="about-values-section">
        <div className="text-center max-w-xl mx-auto space-y-2">
          <h3 className="font-display text-2xl font-black text-black dark:text-white">Mis Valores Profesionales</h3>
          <p className="text-sm font-medium text-slate-700 dark:text-slate-300">
            Los pilares fundamentales que guían cada línea que trazo y cada decisión que tomo.
          </p>
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

      {/* Methodologies & Tools lists */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-2" id="methodologies-tools-grid">
        {/* Methodologies Column */}
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
            <div className="flex items-center space-x-2 text-black dark:text-white mb-2">
              <Compass className="text-black dark:text-white" size={20} />
              <h4 className="font-display text-lg font-black">Metodologías de Trabajo</h4>
            </div>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2" id="methodologies-list">
              {METHODOLOGIES.map((met, idx) => (
                <li key={idx} className="flex items-center space-x-2 text-xs md:text-sm font-bold text-black dark:text-slate-200" id={`met-item-${idx}`}>
                  <CheckCircle2 size={16} className="text-emerald-500 shrink-0" />
                  <span>{met}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Tools Column */}
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
            <div className="flex items-center space-x-2 text-black dark:text-white mb-2">
              <BookOpen className="text-black dark:text-white" size={20} />
              <h4 className="font-display text-lg font-black">Herramientas y Tecnologías</h4>
            </div>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2" id="tools-list">
              {DESIGN_TOOLS.map((tool, idx) => (
                <li key={idx} className="flex items-center space-x-2 text-xs md:text-sm font-bold text-black dark:text-slate-200" id={`tool-item-${idx}`}>
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

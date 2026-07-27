import { EXPERIENCE_HISTORY, EDUCATION_HISTORY, VALERIA_PROFILE, CORE_SKILLS } from '../data';
import { Briefcase, GraduationCap, Download, Printer, CheckCircle, ArrowUpRight } from 'lucide-react';

export default function Resume() {
  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="space-y-10 py-2 md:py-6" id="resume-section-container">
      {/* Resume Actions Header */}
      <div className="flex items-center justify-between no-print" id="resume-actions-header">
        <div>
          <h2 className="font-display text-3xl font-black tracking-tight text-black dark:text-white flex items-center space-x-2">
            <span className="bg-[#fef08a] text-black px-3 py-1 rounded-full border-2 border-black text-sm font-mono">03</span>
            <span>Mi Resumen Profesional</span>
          </h2>
          <p className="text-sm font-medium text-slate-700 dark:text-slate-300 mt-1">
            Una mirada detallada a mi carrera, formación y logros como diseñadora.
          </p>
        </div>

        {/* Print / Export Action Buttons */}
        <div className="flex space-x-2" id="resume-action-buttons">
          <button
            onClick={handlePrint}
            className="neo-btn-primary"
            title="Imprimir o guardar como PDF"
            id="print-cv-btn"
          >
            <Printer size={16} />
            <span className="hidden sm:inline">Imprimir CV</span>
          </button>
        </div>
      </div>

      {/* CV Grid Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 print-full" id="cv-grid">
        
        {/* Left Column (Main Work History) */}
        <div className="lg:col-span-8 neo-window" id="cv-main-column">
          <div className="neo-window-bar">
            <div className="flex space-x-1.5">
              <span className="h-2.5 w-2.5 rounded-full bg-red-400 border border-black inline-block" />
              <span className="h-2.5 w-2.5 rounded-full bg-yellow-400 border border-black inline-block" />
              <span className="h-2.5 w-2.5 rounded-full bg-emerald-400 border border-black inline-block" />
            </div>
            <span>EXPERIENCIA_LABORAL.LOG</span>
            <span className="text-[10px] bg-black text-white px-2 py-0.5 rounded-full font-mono">LIVE_CV</span>
          </div>

          <div className="p-6 md:p-8 space-y-8">
            {/* Work Experience */}
            <div className="space-y-6" id="cv-work-experience-section">
              <h3 className="font-display text-2xl font-black text-black dark:text-white flex items-center space-x-2 pb-3 border-b-2 border-black dark:border-white">
                <Briefcase size={22} className="text-black dark:text-white" />
                <span>Experiencia Laboral</span>
              </h3>

              <div className="space-y-8 relative pl-6 before:absolute before:left-1 before:top-2 before:bottom-2 before:w-1 before:bg-black dark:before:bg-white" id="experience-timeline">
                {EXPERIENCE_HISTORY.map((exp) => (
                  <div key={exp.id} className="relative group" id={`exp-timeline-item-${exp.id}`}>
                    {/* Timeline Dot Indicator */}
                    <span className={`absolute -left-7 top-1 h-5 w-5 rounded-full border-2 border-black transition-transform group-hover:scale-125 ${
                      exp.current 
                        ? 'bg-[#fef08a]' 
                        : 'bg-[#bae6fd]'
                    }`} />
                    
                    {/* Item Content */}
                    <div className="space-y-2">
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                        <h4 className="text-lg font-black text-black dark:text-white group-hover:text-amber-600 transition-colors">
                          {exp.role}
                        </h4>
                        <span className="neo-pill bg-[#a7f3d0] text-black">
                          {exp.duration}
                        </span>
                      </div>

                      <div className="text-sm font-mono font-bold text-slate-700 dark:text-slate-300">
                        {exp.company}
                      </div>

                      {/* Bullet List */}
                      <ul className="list-disc list-outside pl-4 space-y-1.5 text-xs md:text-sm font-medium text-slate-800 dark:text-slate-200 leading-relaxed" id={`exp-bullet-list-${exp.id}`}>
                        {exp.description.map((desc, dIdx) => (
                          <li key={dIdx} id={`exp-desc-bullet-${exp.id}-${dIdx}`}>{desc}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Right Column (Education, Sidebar metrics, Skills) */}
        <div className="lg:col-span-4 space-y-8 flex flex-col" id="cv-side-column">
          {/* Education */}
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
              <h3 className="font-display text-xl font-black text-black dark:text-white flex items-center space-x-2 pb-2 border-b-2 border-black dark:border-white">
                <GraduationCap size={20} className="text-black dark:text-white" />
                <span>Formación</span>
              </h3>
              
              <div className="space-y-4" id="education-items">
                {EDUCATION_HISTORY.map((edu, idx) => (
                  <div key={idx} className="space-y-1 p-3 rounded-xl border-2 border-black bg-[#fbcfe8] text-black" id={`edu-item-${idx}`}>
                    <h4 className="text-sm md:text-base font-black leading-tight">
                      {edu.degree}
                    </h4>
                    <p className="text-xs font-semibold text-slate-800">{edu.institution}</p>
                    <span className="inline-block text-[10px] font-mono font-bold bg-black text-white px-2 py-0.5 rounded-full">{edu.duration}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Core Strengths Matrix */}
          <div className="neo-window" id="cv-strengths-section">
            <div className="neo-window-bar">
              <div className="flex space-x-1.5">
                <span className="h-2.5 w-2.5 rounded-full bg-red-400 border border-black inline-block" />
                <span className="h-2.5 w-2.5 rounded-full bg-yellow-400 border border-black inline-block" />
                <span className="h-2.5 w-2.5 rounded-full bg-emerald-400 border border-black inline-block" />
              </div>
              <span>SKILL_MATRIX.SYS</span>
            </div>

            <div className="p-6 space-y-4">
              <h3 className="font-display text-xl font-black text-black dark:text-white flex items-center space-x-2 pb-2 border-b-2 border-black dark:border-white">
                <CheckCircle size={20} className="text-black dark:text-white" />
                <span>Fortalezas Clave</span>
              </h3>
              
              <div className="space-y-4" id="strengths-sliders">
                {[
                  { label: "Diseño Visual / Alta Fidelidad", value: 95 },
                  { label: "Pruebas de Usabilidad / Research", value: 90 },
                  { label: "Sistemas de Diseño / Componentes", value: 95 },
                  { label: "Prototipado Interactivo Avanzado", value: 85 },
                  { label: "Estrategia de Producto / CRO", value: 80 }
                ].map((strength, idx) => (
                  <div key={idx} className="space-y-1.5" id={`strength-${idx}`}>
                    <div className="flex justify-between text-xs font-bold text-black dark:text-white">
                      <span>{strength.label}</span>
                      <span className="font-mono">{strength.value}%</span>
                    </div>
                    <div className="h-3 w-full bg-slate-200 dark:bg-slate-700 rounded-full border-2 border-black overflow-hidden p-0.5">
                      <div 
                        className="h-full bg-[#fef08a] dark:bg-amber-400 border border-black rounded-full"
                        style={{ width: `${strength.value}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Quick printable contact info */}
          <div className="p-4 rounded-xl border-2 border-black bg-[#bae6fd] text-black text-xs space-y-2 hidden print:block" id="print-contact-info">
            <h4 className="font-black">Contacto Directo</h4>
            <p>Email: ValeChCh05@gmail.com</p>
            <p>Ubicación: {VALERIA_PROFILE.location}</p>
          </div>
        </div>

      </div>
    </div>
  );
}

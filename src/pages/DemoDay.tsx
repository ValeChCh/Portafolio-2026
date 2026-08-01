import { useCallback, useEffect, useState, type ReactNode } from 'react';
import { ArrowLeft, ArrowRight, ExternalLink, Keyboard } from 'lucide-react';

const LIVE_URL = 'https://valeria-ux-product-designer.vercel.app/';

type Slide = {
  id: string;
  eyebrow: string;
  title: string;
  timing?: string;
  content: ReactNode;
};

const SLIDES: Slide[] = [
  {
    id: 'portada',
    eyebrow: 'Interface School · Demo Day',
    title: 'Portfolio',
    content: (
      <>
        <p className="text-xl sm:text-2xl md:text-3xl font-bold leading-snug text-black max-w-4xl">
          Portafolio virtual para empresas de tecnología y reclutadores
        </p>
        <a
          href={LIVE_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-8 inline-flex items-center gap-2 font-sans text-sm sm:text-base font-bold underline underline-offset-4 decoration-2 text-black hover:text-slate-700 focus-visible:outline focus-visible:outline-4 focus-visible:outline-offset-4 focus-visible:outline-black"
        >
          {LIVE_URL}
          <ExternalLink size={18} aria-hidden="true" />
        </a>
      </>
    ),
  },
  {
    id: 'problema',
    eyebrow: 'Problema',
    timing: '0:00 – 0:30',
    title: '¿Por qué un sitio propio?',
    content: (
      <ul className="space-y-5 text-lg sm:text-xl md:text-2xl font-semibold leading-snug text-black max-w-4xl list-none">
        <li className="flex gap-3">
          <span className="neo-pill bg-[#fbcfe8] shrink-0 mt-1" aria-hidden="true">01</span>
          <span>Proyectos dispersos en Behance, Dribbble y conversaciones</span>
        </li>
        <li className="flex gap-3">
          <span className="neo-pill bg-[#bae6fd] shrink-0 mt-1" aria-hidden="true">02</span>
          <span>Sin sitio único que demuestre experiencia completa</span>
        </li>
        <li className="flex gap-3">
          <span className="neo-pill bg-[#a7f3d0] shrink-0 mt-1" aria-hidden="true">03</span>
          <span>Reclutadores sin forma clara de ver casos y contactar</span>
        </li>
      </ul>
    ),
  },
  {
    id: 'demo',
    eyebrow: 'Demo en vivo',
    timing: '0:30 – 2:30',
    title: 'Recorrido del producto',
    content: (
      <div className="space-y-6 max-w-4xl">
        <a
          href={LIVE_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="neo-btn-primary text-base sm:text-lg md:text-xl px-8 py-4 gap-3 focus-visible:outline focus-visible:outline-4 focus-visible:outline-offset-4 focus-visible:outline-black"
        >
          <span>Abrir sitio en vivo</span>
          <ExternalLink size={22} aria-hidden="true" />
        </a>
        <ol className="space-y-4 text-lg sm:text-xl md:text-2xl font-semibold leading-snug text-black list-none">
          <li className="flex gap-3">
            <span className="font-sans text-sm sm:text-base font-black bg-[#8F9DE2] border-2 border-black rounded-full px-3 py-1 shrink-0 h-fit">1</span>
            <span>Home con descripción de perfil</span>
          </li>
          <li className="flex gap-3">
            <span className="font-sans text-sm sm:text-base font-black bg-[#8F9DE2] border-2 border-black rounded-full px-3 py-1 shrink-0 h-fit">2</span>
            <span>Proyectos filtrados por área de trabajo</span>
          </li>
          <li className="flex gap-3">
            <span className="font-sans text-sm sm:text-base font-black bg-[#8F9DE2] border-2 border-black rounded-full px-3 py-1 shrink-0 h-fit">3</span>
            <span>Formulario de contacto funcional</span>
          </li>
        </ol>
        <p className="text-base sm:text-lg md:text-xl font-medium text-slate-800 border-2 border-black bg-[#e9d5ff] rounded-xl px-4 py-3">
          Fuera de cámara: Agenda del calendario (en mejora)
        </p>
      </div>
    ),
  },
  {
    id: 'decisiones',
    eyebrow: 'Decisiones',
    timing: '2:30 – 4:30',
    title: 'Qué delegó y qué retuvo',
    content: (
      <ul className="space-y-4 text-lg sm:text-xl md:text-2xl font-semibold leading-snug text-black max-w-4xl list-none">
        <li>
          <span className="font-black">Delegó a AI Studio:</span> estructura general del portafolio
        </li>
        <li>
          <span className="font-black">Modo de delegación:</span> automatizar
        </li>
        <li>
          <span className="font-black">Retuvo:</span> navegación (clara y funcional)
        </li>
        <li>
          <span className="font-black">Decidió:</span> cómo mostrar proyectos, datos del CV, estilo visual
        </li>
        <li>
          <span className="font-black">IA asistió con:</span> copys, interacciones, accesibilidad
        </li>
      </ul>
    ),
  },
  {
    id: 'verificacion',
    eyebrow: 'Verificación y transparencia',
    timing: '2:30 – 4:30',
    title: 'Cómo se validó',
    content: (
      <ul className="space-y-4 text-lg sm:text-xl md:text-2xl font-semibold leading-snug text-black max-w-4xl list-none">
        <li>Verificó que el flujo fuera claro</li>
        <li>
          Entrada de datos: capturas de pantalla, prompts, decisiones de contexto
        </li>
        <li>Sin correcciones mayores en QA</li>
        <li>
          Pendiente: agenda del calendario y descarga del CV
        </li>
      </ul>
    ),
  },
  {
    id: 'cierre',
    eyebrow: 'Cierre',
    timing: '4:30 – 5:00',
    title: 'Aprendizajes',
    content: (
      <ul className="space-y-5 text-lg sm:text-xl md:text-2xl font-semibold leading-snug text-black max-w-4xl list-none">
        <li>
          <span className="font-black">Pensaba que lo difícil:</span> ajustar lo generado por IA
        </li>
        <li>
          <span className="font-black">Realmente fue:</span> entender la lógica y pasos del flujo
        </li>
        <li>
          <span className="font-black">Si reiniciara:</span> tendría estilo visual y contenido listos antes
        </li>
        <li className="rounded-xl border-2 border-black bg-[#a7f3d0] px-4 py-3">
          <span className="font-black">Aprendizaje #1:</span> entender mejor términos técnicos y estructura de repositorios
        </li>
      </ul>
    ),
  },
];

export default function DemoDay() {
  const [index, setIndex] = useState(0);
  const total = SLIDES.length;
  const slide = SLIDES[index];
  const isFirst = index === 0;
  const isLast = index === total - 1;

  const goPrev = useCallback(() => {
    setIndex((i) => Math.max(0, i - 1));
  }, []);

  const goNext = useCallback(() => {
    setIndex((i) => Math.min(total - 1, i + 1));
  }, [total]);

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      const target = e.target as HTMLElement | null;
      if (target?.closest('input, textarea, select, [contenteditable="true"]')) return;

      if (e.key === 'ArrowRight' || e.key === 'PageDown') {
        e.preventDefault();
        goNext();
      } else if (e.key === 'ArrowLeft' || e.key === 'PageUp') {
        e.preventDefault();
        goPrev();
      } else if (e.key === 'Home') {
        e.preventDefault();
        setIndex(0);
      } else if (e.key === 'End') {
        e.preventDefault();
        setIndex(total - 1);
      }
    };

    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [goNext, goPrev, total]);

  return (
    <div
      className="min-h-dvh flex flex-col bg-[#f7f5f0] text-black"
      id="demo-day-root"
      style={{
        backgroundImage: 'radial-gradient(#000000 0.75px, transparent 0.75px)',
        backgroundSize: '24px 24px',
      }}
    >
      <a
        href="#demo-day-slide"
        className="sr-only focus:not-sr-only focus:absolute focus:top-3 focus:left-3 focus:z-50 focus:bg-[#8F9DE2] focus:text-black focus:border-2 focus:border-black focus:px-4 focus:py-2 focus:font-bold focus-visible:outline focus-visible:outline-4 focus-visible:outline-offset-2 focus-visible:outline-black"
      >
        Saltar a la diapositiva
      </a>

      <header className="border-b-2 border-black bg-white/95 backdrop-blur-md" id="demo-day-header">
        <div className="mx-auto flex h-14 sm:h-16 max-w-6xl items-center justify-between gap-3 px-4 sm:px-6">
          <div className="flex items-center gap-2 min-w-0">
            <span className="font-display text-sm sm:text-base font-black tracking-tight truncate">
              Valeria · Demo Day
            </span>
            <span className="hidden sm:inline neo-pill bg-[#8F9DE2]">Wave Delta</span>
          </div>
          <div className="flex items-center gap-3 shrink-0">
            <p
              className="font-sans text-sm sm:text-base font-bold tabular-nums"
              aria-live="polite"
              id="demo-day-progress"
            >
              {index + 1}/{total}
            </p>
            <a
              href="/"
              className="text-xs sm:text-sm font-extrabold underline underline-offset-2 hover:text-slate-700 focus-visible:outline focus-visible:outline-4 focus-visible:outline-offset-2 focus-visible:outline-black"
            >
              Ir al portafolio
            </a>
          </div>
        </div>
      </header>

      <main
        id="demo-day-slide"
        className="flex-1 flex flex-col justify-center px-4 sm:px-6 py-8 sm:py-12"
        aria-labelledby="demo-day-title"
      >
        <article
          key={slide.id}
          className="mx-auto w-full max-w-6xl neo-window demo-day-slide"
          aria-roledescription="diapositiva"
        >
          <div className="neo-window-bar">
            <div className="flex space-x-1.5" aria-hidden="true">
              <span className="h-2.5 w-2.5 rounded-full bg-red-400 border border-black inline-block" />
              <span className="h-2.5 w-2.5 rounded-full bg-yellow-400 border border-black inline-block" />
              <span className="h-2.5 w-2.5 rounded-full bg-emerald-400 border border-black inline-block" />
            </div>
            <span className="truncate uppercase tracking-wider">{slide.eyebrow}</span>
            <span className="text-[10px] text-slate-500 font-sans">
              {slide.timing ?? 'START'}
            </span>
          </div>

          <div className="p-6 sm:p-10 md:p-14 space-y-6 sm:space-y-8">
            <header className="space-y-3">
              <p className="font-sans text-xs sm:text-sm font-bold uppercase tracking-wider text-slate-700">
                {slide.eyebrow}
                {slide.timing ? ` · ${slide.timing}` : ''}
              </p>
              <h1
                id="demo-day-title"
                className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tight leading-[1.05] text-black"
              >
                {slide.title}
              </h1>
            </header>
            <div>{slide.content}</div>
          </div>
        </article>
      </main>

      <nav
        className="border-t-2 border-black bg-white"
        aria-label="Navegación de diapositivas"
        id="demo-day-nav"
      >
        <div className="mx-auto max-w-6xl px-4 sm:px-6 py-4 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
          <p className="flex items-center gap-2 text-xs sm:text-sm font-bold text-slate-700 order-2 sm:order-1">
            <Keyboard size={16} aria-hidden="true" />
            <span>Flechas ← → del teclado</span>
          </p>

          <div className="flex items-center justify-center gap-2 order-1 sm:order-2" role="group" aria-label="Indicadores de diapositiva">
            {SLIDES.map((s, i) => (
              <button
                key={s.id}
                type="button"
                onClick={() => setIndex(i)}
                aria-label={`Ir a diapositiva ${i + 1}: ${s.title}`}
                aria-current={i === index ? 'true' : undefined}
                className={`h-3 rounded-full border-2 border-black transition-all cursor-pointer focus-visible:outline focus-visible:outline-4 focus-visible:outline-offset-2 focus-visible:outline-black ${
                  i === index ? 'w-8 bg-[#8F9DE2]' : 'w-3 bg-white hover:bg-slate-200'
                }`}
              />
            ))}
          </div>

          <div className="flex items-center justify-between sm:justify-end gap-2 order-3">
            <button
              type="button"
              onClick={goPrev}
              disabled={isFirst}
              className="neo-btn-secondary disabled:opacity-40 disabled:cursor-not-allowed focus-visible:outline focus-visible:outline-4 focus-visible:outline-offset-2 focus-visible:outline-black"
              aria-label="Diapositiva anterior"
            >
              <ArrowLeft size={18} aria-hidden="true" />
              <span>Anterior</span>
            </button>
            <button
              type="button"
              onClick={goNext}
              disabled={isLast}
              className="neo-btn-primary disabled:opacity-40 disabled:cursor-not-allowed focus-visible:outline focus-visible:outline-4 focus-visible:outline-offset-2 focus-visible:outline-black"
              aria-label="Diapositiva siguiente"
            >
              <span>Siguiente</span>
              <ArrowRight size={18} aria-hidden="true" />
            </button>
          </div>
        </div>
      </nav>
    </div>
  );
}

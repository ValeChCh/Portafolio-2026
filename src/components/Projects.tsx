import { useEffect, useState } from 'react';
import { Project } from '../types';
import { useLocalizedContent } from '../i18n/useI18n';
import {
  ArrowRight,
  Eye,
  Trophy,
  ChevronRight,
  ChevronLeft,
  X,
  Timer,
  ShieldCheck,
  Bot,
  type LucideIcon,
} from 'lucide-react';

const METRIC_ICONS: Record<'timer' | 'shield-check' | 'bot', LucideIcon> = {
  timer: Timer,
  'shield-check': ShieldCheck,
  bot: Bot,
};

export default function Projects() {
  const { projects, t } = useLocalizedContent();
  const [selectedProjectId, setSelectedProjectId] = useState<string | null>(null);
  const [filter, setFilter] = useState<string>('All');
  const [carouselIndex, setCarouselIndex] = useState(0);

  // Lock page scroll while the Behance-style project viewer is open
  useEffect(() => {
    if (!selectedProjectId) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [selectedProjectId]);

  // Gather all unique categories
  const categories = ['All', 'Banca', 'Traveltech', 'E-Commerce'];
  /** Color de tags por categoría */
  const categoryPillBg: Record<string, string> = {
    Banca: 'bg-[#86DCE4]',
    Traveltech: 'bg-[#FC982C]',
    'E-Commerce': 'bg-[#F6D61A]',
  };
  /** Color del filtro solo cuando está activo */
  const categoryPillBgOnActive: Record<string, string> = {
    Banca: 'bg-[#86DCE4]',
    Traveltech: 'bg-[#FC982C]',
    'E-Commerce': 'bg-[#F6D61A]',
  };

  const filteredProjects = filter === 'All'
    ? projects
    : projects.filter(p => p.category === filter);

  const tagPillClass = (tag: string) => {
    if (categoryPillBg[tag]) return categoryPillBg[tag];
    return 'bg-white';
  };

  const selectedProject = selectedProjectId
    ? projects.find(p => p.id === selectedProjectId) ?? null
    : null;

  const openProject = (project: Project) => {
    setCarouselIndex(0);
    setSelectedProjectId(project.id);
  };

  const closeProject = () => setSelectedProjectId(null);

  const gallery = selectedProject
    ? (selectedProject.images?.length ? selectedProject.images : [selectedProject.image])
    : [];

  const goToSlide = (index: number) => {
    if (!gallery.length) return;
    setCarouselIndex((index + gallery.length) % gallery.length);
  };

  return (
    <div className="space-y-10 pt-0 pb-2 md:pb-6" id="projects-section-container">
      {/* Header and Filter Buttons */}
      <div className="flex flex-col md:flex-row md:items-start justify-between gap-4" id="projects-header-group">
        <h2 className="font-display text-3xl font-black tracking-tight text-black dark:text-white" id="featured-title">
          {t.featuredWork}
        </h2>
        
        {/* Category Filters */}
        <div className="flex flex-wrap gap-2 md:justify-end" id="filter-tabs">
          {categories.map((cat) => {
            const isActive = filter === cat;
            const activeBg = categoryPillBgOnActive[cat] || 'bg-[#8F9DE2] dark:bg-[#7A8AD9]';
            const bgClass = isActive
              ? activeBg
              : 'bg-white hover:bg-slate-100 dark:bg-slate-800 dark:border-white';
            return (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`rounded-full px-4 py-1.5 text-xs font-black uppercase tracking-wider transition-transform hover:scale-105 cursor-pointer border-2 border-black text-black dark:text-white ${bgClass}`}
                id={`filter-btn-${cat.toLowerCase()}`}
              >
                {cat === 'All' ? t.filterAll : cat}
              </button>
            );
          })}
        </div>
      </div>

      {/* Projects List */}
      <div className="space-y-12" id="projects-list">
        {filteredProjects.map((project) => (
          <div key={project.id} id={`project-wrapper-${project.id}`}>
            {/* Project Card as Window Frame */}
            <div 
              className="neo-window group flex flex-col"
              id={`project-card-${project.id}`}
            >
              {/* Retro Window Bar */}
              <div className="neo-window-bar">
                <div className="flex space-x-1.5">
                  <span className="h-2.5 w-2.5 rounded-full bg-red-400 border border-black inline-block" />
                  <span className="h-2.5 w-2.5 rounded-full bg-yellow-400 border border-black inline-block" />
                  <span className="h-2.5 w-2.5 rounded-full bg-emerald-400 border border-black inline-block" />
                </div>
                <span className="truncate">{project.title.toUpperCase()}</span>
              </div>

              {/* Image Container with Hover Zoom & Action Overlay */}
              <div 
                className="relative aspect-16/10 w-full overflow-hidden bg-slate-100 dark:bg-slate-900 cursor-pointer border-b-2 border-black dark:border-white"
                onClick={() => openProject(project)}
                id={`project-img-container-${project.id}`}
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-102"
                  referrerPolicy="no-referrer"
                />
                
                {/* Overlay on Hover */}
                <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="bg-white text-black border-2 border-black px-5 py-2.5 rounded-full font-display text-xs font-black flex items-center space-x-2">
                    <Eye size={16} />
                    <span>{t.viewFullCase}</span>
                  </div>
                </div>
              </div>

              {/* Text / Data Details */}
              <div className="p-6 md:p-8 space-y-4" id={`project-info-${project.id}`}>
                {/* Tag Badges */}
                <div className="flex flex-wrap gap-2" id={`project-tags-${project.id}`}>
                  {project.tags.map((tag, tIdx) => (
                      <span
                        key={tIdx}
                        className={`neo-pill ${tagPillClass(tag)}`}
                        id={`project-tag-${project.id}-${tIdx}`}
                      >
                        {tag}
                      </span>
                  ))}
                </div>

                {/* Title */}
                <h3 
                  className="font-display text-2xl font-black text-black dark:text-white hover:text-[#7A8AD9] transition-colors cursor-pointer inline-block leading-tight tracking-tight"
                  onClick={() => openProject(project)}
                  id={`project-title-${project.id}`}
                >
                  {project.title}
                </h3>

                {/* Description */}
                <div
                  className="font-sans text-sm md:text-base leading-relaxed text-slate-800 dark:text-slate-200 space-y-3"
                  id={`project-desc-${project.id}`}
                >
                  {project.description.split('\n').filter(Boolean).map((paragraph, pIdx) => (
                    <p key={pIdx}>{paragraph}</p>
                  ))}
                </div>

                {/* Interactive Detail Link */}
                <div className="pt-2" id={`project-action-row-${project.id}`}>
                  <button
                    onClick={() => openProject(project)}
                    className="neo-btn-black"
                    id={`project-details-btn-${project.id}`}
                  >
                    <span>{t.exploreCase}</span>
                    <ChevronRight size={18} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Behance-style full project viewer (all case studies) */}
      {selectedProject && (
        <div
          className="fixed inset-0 z-50 overflow-y-auto overscroll-contain bg-black/85 animate-fade-in"
          onClick={() => closeProject()}
          id="project-detail-modal"
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-project-title"
        >
          <div
            className="relative mx-auto min-h-full w-full max-w-7xl bg-white border-x-2 border-black animate-scale-up"
            onClick={(e) => e.stopPropagation()}
            id="modal-content"
          >
            <div className="neo-window-bar sticky top-0 z-20 border-b-2 border-black bg-slate-100">
              <div className="flex space-x-1.5">
                <span
                  className="h-2.5 w-2.5 rounded-full bg-red-400 border border-black inline-block cursor-pointer"
                  onClick={() => closeProject()}
                />
                <span className="h-2.5 w-2.5 rounded-full bg-yellow-400 border border-black inline-block" />
                <span className="h-2.5 w-2.5 rounded-full bg-emerald-400 border border-black inline-block" />
              </div>
              <span id="modal-project-title" className="font-bold truncate">
                {selectedProject.title.toUpperCase()}
              </span>
              <button
                onClick={() => closeProject()}
                className="rounded-full bg-black text-white p-1.5 hover:bg-red-500 transition-colors cursor-pointer"
                id="modal-close-btn"
                aria-label={t.closeModal}
              >
                <X size={16} />
              </button>
            </div>

            <div id="modal-body">
              <div className="flex flex-col" id="modal-grid-top">
                <div
                  className="relative overflow-hidden border-b-2 border-black group/carousel bg-slate-100"
                  id="modal-hero-img-wrapper"
                >
                  <img
                    key={gallery[carouselIndex]}
                    src={gallery[carouselIndex]}
                    alt={t.captureAlt(selectedProject.title, carouselIndex + 1)}
                    className="w-full aspect-[16/10] md:aspect-[21/9] object-cover"
                    referrerPolicy="no-referrer"
                  />

                  {gallery.length > 1 && (
                    <>
                      <button
                        type="button"
                        onClick={() => goToSlide(carouselIndex - 1)}
                        className="absolute left-4 md:left-6 top-1/2 -translate-y-1/2 flex h-11 w-11 items-center justify-center rounded-full border-2 border-black bg-white text-black hover:bg-slate-100 transition-colors cursor-pointer"
                        aria-label={t.prevImage}
                        id="carousel-prev-btn"
                      >
                        <ChevronLeft size={22} strokeWidth={2.5} />
                      </button>
                      <button
                        type="button"
                        onClick={() => goToSlide(carouselIndex + 1)}
                        className="absolute right-4 md:right-6 top-1/2 -translate-y-1/2 flex h-11 w-11 items-center justify-center rounded-full border-2 border-black bg-white text-black hover:bg-slate-100 transition-colors cursor-pointer"
                        aria-label={t.nextImage}
                        id="carousel-next-btn"
                      >
                        <ChevronRight size={22} strokeWidth={2.5} />
                      </button>

                      <div
                        className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-2"
                        id="carousel-dots"
                      >
                        {gallery.map((_, idx) => (
                          <button
                            key={idx}
                            type="button"
                            onClick={() => goToSlide(idx)}
                            aria-label={t.goToSlide(idx + 1)}
                            className={`h-2.5 rounded-full border-2 border-black transition-all cursor-pointer ${
                              idx === carouselIndex
                                ? 'w-7 bg-[#8F9DE2]'
                                : 'w-2.5 bg-white hover:bg-slate-200'
                            }`}
                            id={`carousel-dot-${idx}`}
                          />
                        ))}
                      </div>

                      <span
                        className="absolute top-4 right-4 font-sans text-[10px] font-bold border-2 border-black bg-white text-black px-2.5 py-1 rounded-full"
                        id="carousel-counter"
                      >
                        {carouselIndex + 1} / {gallery.length}
                      </span>
                    </>
                  )}
                </div>

                <div className="py-10 md:py-14 space-y-10 md:space-y-12 w-full">
                  <div className="px-6 md:px-12 lg:px-16 max-w-5xl mx-auto w-full">
                  <div
                    className="flex flex-col gap-8"
                    id="modal-project-meta"
                  >
                    <div className="space-y-5 w-full">
                      <div
                        className="grid grid-cols-1 sm:grid-cols-3 gap-4"
                        id="modal-highlight-pills"
                      >
                        {(selectedProject.meta?.length
                          ? selectedProject.meta.slice(0, 3)
                          : [{ label: t.myRole, value: selectedProject.role }]
                        ).map((item, idx) => {
                          const pillBg = ['bg-[#8F9DE2]', 'bg-[#fbcfe8]', 'bg-[#bae6fd]'][idx % 3];
                          return (
                            <div key={`${item.label}-${idx}`} id={`modal-highlight-${idx}`}>
                              <span className="block text-xs font-black uppercase tracking-wider text-black mb-1">
                                {item.label}
                              </span>
                              <span
                                className={`text-sm font-bold text-black ${pillBg} px-3 py-1 rounded-full inline-block`}
                              >
                                {item.value}
                              </span>
                            </div>
                          );
                        })}
                      </div>
                      <div>
                        <span className="block text-xs font-black uppercase tracking-wider text-black mb-1">
                          {t.specialties}
                        </span>
                        <div className="flex flex-wrap gap-1.5 mt-1">
                          {selectedProject.tags.map((tag, idx) => (
                            <span
                              key={idx}
                              className={`inline-flex items-center px-3.5 py-1 rounded-full text-xs font-extrabold uppercase tracking-wider text-black ${tagPillClass(tag)}`}
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    {selectedProject.metrics && (
                      <div
                        className="rounded-xl bg-[#a7f3d0] p-5 space-y-3 text-black w-full"
                        id="modal-metrics-box"
                      >
                        <div className="flex items-center space-x-2 text-black">
                          <Trophy size={18} />
                          <span className="text-xs font-black uppercase tracking-wider">
                            {t.measurableResults}
                          </span>
                        </div>
                        <div className="grid grid-cols-3 gap-2" id="metrics-grid">
                          {selectedProject.metrics.map((metric, mIdx) => {
                            const Icon = metric.icon ? METRIC_ICONS[metric.icon] : null;
                            return (
                            <div
                              key={mIdx}
                              className="text-center bg-white rounded-lg p-2"
                              id={`metric-cell-${mIdx}`}
                            >
                              {Icon ? (
                                <span className="mx-auto mb-1 flex h-8 items-center justify-center text-black" aria-hidden>
                                  <Icon size={28} strokeWidth={2.25} />
                                </span>
                              ) : (
                                <span className="block text-xl font-black text-black">{metric.value}</span>
                              )}
                              <span className="text-[10px] font-bold text-slate-700 leading-tight block">
                                {metric.label}
                              </span>
                            </div>
                            );
                          })}
                        </div>
                      </div>
                    )}
                  </div>
                  </div>

                  <div
                    className="space-y-3 px-6 md:px-12 lg:px-16 py-6 md:py-8 w-full bg-white text-black"
                    id="modal-challenge-section"
                  >
                    <h4 className="font-display text-xl font-black flex items-center space-x-2">
                      <span>{selectedProject.challengeTitle ?? t.challenge}</span>
                    </h4>
                    {selectedProject.challengeSubtitle ? (
                      <p className="text-xs font-black uppercase tracking-wider text-black">
                        {selectedProject.challengeSubtitle}
                      </p>
                    ) : null}
                    <div className="font-sans text-sm md:text-base leading-relaxed font-medium max-w-none space-y-6">
                      <p>{selectedProject.challenge}</p>
                      {selectedProject.challengeFollowUp?.map((block, idx) => {
                        const columns =
                          block.columns ??
                          block.body
                            ?.split('\n')
                            .map((p) => p.trim())
                            .filter(Boolean)
                            .map((text) => ({ text })) ??
                          [];
                        return (
                          <div key={idx} className="space-y-3">
                            {block.title ? (
                              <p className="text-xs font-black uppercase tracking-wider text-black">
                                {block.title}
                              </p>
                            ) : null}
                            <div
                              className={
                                columns.length >= 3
                                  ? 'grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6'
                                  : 'space-y-3'
                              }
                            >
                              {columns.map((col, cIdx) => (
                                <div key={cIdx} className="space-y-2">
                                  {col.heading ? (
                                    <p className="text-xs font-black uppercase tracking-wider text-black">
                                      {col.heading}
                                    </p>
                                  ) : null}
                                  {col.text ? <p>{col.text}</p> : null}
                                </div>
                              ))}
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  <div className="px-6 md:px-12 lg:px-16 max-w-5xl mx-auto w-full space-y-10 md:space-y-12">
                  <div className="space-y-4" id="modal-process-section">
                    <h4 className="font-display text-xl font-black text-black">{t.processTitle}</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4" id="process-grid">
                      {selectedProject.process.map((step, sIdx) => (
                        <div
                          key={sIdx}
                          className="flex space-x-3 p-5 rounded-xl bg-white"
                          id={`process-step-${sIdx}`}
                        >
                          <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#8F9DE2] text-black text-xs font-black">
                            {sIdx + 1}
                          </div>
                          <p className="text-sm font-semibold text-black leading-relaxed">{step}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div
                    className="space-y-2 p-6 md:p-8 rounded-xl bg-[#bae6fd] text-black"
                    id="modal-solution-section"
                  >
                    <h4 className="font-display text-xl font-black flex items-center space-x-2">
                      <span>{t.solution}</span>
                    </h4>
                    <p className="font-sans text-sm md:text-base leading-relaxed font-medium">
                      {selectedProject.solution}
                    </p>
                  </div>
                  </div>
                </div>
              </div>
            </div>

            <div
              className="sticky bottom-0 border-t-2 border-black px-6 md:px-12 py-4 bg-slate-100 flex items-center justify-between"
              id="modal-footer"
            >
              <span className="text-xs font-sans font-bold text-black">
                {selectedProject.title}
              </span>
              <button onClick={() => closeProject()} className="neo-btn-black" id="modal-cta-btn">
                <span>{t.closeView}</span>
                <ArrowRight size={14} />
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

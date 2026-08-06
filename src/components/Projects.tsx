import { useEffect, useState } from 'react';
import { Project, type CaseStudyIconId } from '../types';
import { useLocalizedContent } from '../i18n/useI18n';
import {
  ArrowRight,
  Eye,
  Trophy,
  ChevronRight,
  X,
  Timer,
  ShieldCheck,
  Bot,
  UserCog,
  Scale,
  Landmark,
  LayoutPanelLeft,
  Users,
  MessageSquareText,
  Boxes,
  Layers,
  BadgeDollarSign,
  ListChecks,
  Eraser,
  Zap,
  ScanEye,
  Target,
  Lightbulb,
  Map,
  Search,
  FlaskConical,
  Palette,
  Smartphone,
  CheckCircle2,
  Rocket,
  AlertTriangle,
  Route,
  ClipboardList,
  PenTool,
  Gauge,
  Sparkles,
  HeartHandshake,
  Building2,
  type LucideIcon,
} from 'lucide-react';

const METRIC_ICONS: Record<'timer' | 'shield-check' | 'bot', LucideIcon> = {
  timer: Timer,
  'shield-check': ShieldCheck,
  bot: Bot,
};

const CASE_ICONS: Record<CaseStudyIconId, LucideIcon> = {
  timer: Timer,
  'shield-check': ShieldCheck,
  bot: Bot,
  'user-cog': UserCog,
  scale: Scale,
  landmark: Landmark,
  'layout-panel': LayoutPanelLeft,
  users: Users,
  'message-square': MessageSquareText,
  boxes: Boxes,
  layers: Layers,
  currency: BadgeDollarSign,
  'list-checks': ListChecks,
  eraser: Eraser,
  zap: Zap,
  'scan-eye': ScanEye,
  target: Target,
  lightbulb: Lightbulb,
  map: Map,
  search: Search,
  flask: FlaskConical,
  palette: Palette,
  smartphone: Smartphone,
  'check-circle': CheckCircle2,
  rocket: Rocket,
  alert: AlertTriangle,
  route: Route,
  clipboard: ClipboardList,
  'pen-tool': PenTool,
  gauge: Gauge,
  sparkles: Sparkles,
  'heart-handshake': HeartHandshake,
  building: Building2,
};

const SECTION_ACCENT = {
  white: 'bg-white',
  pink: 'bg-[#fbcfe8]',
  cyan: 'bg-[#bae6fd]',
  mint: 'bg-[#a7f3d0]',
  lilac: 'bg-[#ddd6fe]',
} as const;

export default function Projects() {
  const { projects, t, lang } = useLocalizedContent();
  const [selectedProjectId, setSelectedProjectId] = useState<string | null>(null);
  const [filter, setFilter] = useState<string>('All');

  const categoryLabel = (cat: string) => {
    if (cat === 'All') return t.filterAll;
    if (cat === 'Banca') return t.catBanking;
    if (cat === 'Traveltech') return t.catTraveltech;
    if (cat === 'E-Commerce') return t.catEcommerce;
    return cat;
  };

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
    setSelectedProjectId(project.id);
  };

  const closeProject = () => setSelectedProjectId(null);

  return (
    <div className="space-y-10 pt-0 pb-2 md:pb-6" id="projects-section-container">
      {/* Header and Filter Buttons */}
      <div className="flex flex-col md:flex-row md:items-start justify-between gap-4" id="projects-header-group">
        <h2 className="font-display text-3xl font-black tracking-tight text-black" id="featured-title">
          {t.featuredWork}
        </h2>
        
        {/* Category Filters */}
        <div className="flex flex-wrap gap-2 md:justify-end" id="filter-tabs">
          {categories.map((cat) => {
            const isActive = filter === cat;
            const activeBg = categoryPillBgOnActive[cat] || 'bg-[#8F9DE2]';
            const bgClass = isActive
              ? activeBg
              : 'bg-white hover:bg-slate-100';
            return (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`rounded-full px-4 py-1.5 text-xs font-black uppercase tracking-wider transition-transform hover:scale-105 cursor-pointer border-2 border-black text-black ${bgClass}`}
                id={`filter-btn-${cat.toLowerCase()}`}
              >
                {categoryLabel(cat)}
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
                className="relative aspect-16/10 w-full overflow-hidden bg-slate-100 cursor-pointer border-b-2 border-black "
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
                  className="font-display text-2xl font-black text-black hover:text-[#7A8AD9] transition-colors cursor-pointer inline-block leading-tight tracking-tight"
                  onClick={() => openProject(project)}
                  id={`project-title-${project.id}`}
                >
                  {project.title}
                </h3>

                {/* Description */}
                <div
                  className="font-sans text-sm md:text-base leading-relaxed text-slate-800 space-y-3"
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
                  className={`relative overflow-hidden border-b-2 border-black bg-slate-100 ${
                    selectedProject.galleryLayout === 'phone'
                      ? 'flex justify-center items-center py-6 md:py-8'
                      : ''
                  }`}
                  id="modal-hero-img-wrapper"
                >
                  <img
                    src={selectedProject.image}
                    alt={selectedProject.title}
                    className={
                      selectedProject.galleryLayout === 'phone'
                        ? 'h-[min(70vh,667px)] w-auto max-w-full object-contain'
                        : 'w-full aspect-[16/10] md:aspect-[21/9] object-cover'
                    }
                    referrerPolicy="no-referrer"
                  />
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

                  {selectedProject.caseStudySections?.length ? (
                    <div className="w-full" id="modal-case-study-sections" key={lang}>
                      {selectedProject.caseStudySections.map((section) => (
                        <section
                          key={section.number}
                          className={`px-6 md:px-12 lg:px-16 py-10 md:py-14 text-black ${
                            SECTION_ACCENT[section.accent ?? 'white']
                          }`}
                          id={`case-study-section-${section.number}`}
                        >
                          <div className="mx-auto max-w-5xl space-y-7">
                            <div className="flex flex-col gap-3">
                              <span className="w-fit rounded-full border-2 border-black bg-white px-3 py-1 font-display text-xs font-black">
                                {section.number}
                              </span>
                              {section.kicker ? (
                                <p className="text-xs font-black uppercase tracking-wider">
                                  {section.kicker}
                                </p>
                              ) : null}
                              <h4 className="font-display text-2xl md:text-3xl font-black leading-tight">
                                {section.title}
                              </h4>
                            </div>

                            {section.image && section.imagePlacement !== 'after' ? (
                              <div className="overflow-hidden bg-white">
                                <img
                                  src={section.image}
                                  alt=""
                                  className={
                                    section.imageContain
                                      ? 'w-full h-auto object-contain'
                                      : `w-full aspect-[16/9] object-cover ${section.imageObjectPosition ?? 'object-top'}`
                                  }
                                  referrerPolicy="no-referrer"
                                />
                              </div>
                            ) : section.imagePlaceholder && section.imagePlacement !== 'after' ? (
                              <div
                                className="w-full aspect-[16/9] border-2 border-dashed border-black/30 bg-transparent"
                                aria-hidden
                              />
                            ) : null}

                            {section.body ? (
                              <div className="w-full space-y-4 font-sans text-sm md:text-base font-medium leading-relaxed whitespace-pre-line">
                                {section.body.split('\n\n').map((paragraph, idx) => (
                                  <p key={idx} className="w-full max-w-none">
                                    {paragraph}
                                  </p>
                                ))}
                              </div>
                            ) : null}

                            {section.imagePlacement === 'after' ? (
                              section.image ? (
                                <div className="overflow-hidden">
                                  <img
                                    src={section.image}
                                    alt=""
                                    className="w-full h-auto object-contain"
                                    referrerPolicy="no-referrer"
                                  />
                                </div>
                              ) : section.imagePlaceholder ? (
                                <div
                                  className="w-full aspect-[16/9] border-2 border-dashed border-black/40 bg-white"
                                  id={`case-study-img-placeholder-${section.number}`}
                                  aria-label="Espacio para imagen"
                                />
                              ) : null
                            ) : null}

                            {section.gallery?.length ? (
                              section.galleryUnified ? (
                                <div
                                  className={`overflow-hidden bg-white ${
                                    section.galleryBorderless ? '' : 'border-2 border-black'
                                  }`}
                                >
                                  <div
                                    className={`grid gap-2 p-3 md:p-4 ${
                                      section.gallery.length >= 4
                                        ? 'grid-cols-2 md:grid-cols-4'
                                        : section.gallery.length === 3
                                          ? 'grid-cols-1 md:grid-cols-3'
                                          : section.gallery.length === 2
                                            ? 'grid-cols-2'
                                            : 'grid-cols-1'
                                    }`}
                                  >
                                    {section.gallery.map((src) => (
                                      <img
                                        key={src}
                                        src={src}
                                        alt=""
                                        className="w-full h-auto object-contain"
                                        referrerPolicy="no-referrer"
                                      />
                                    ))}
                                  </div>
                                </div>
                              ) : (
                                <div
                                  className={`grid gap-3 ${
                                    section.gallery.length >= 4
                                      ? 'grid-cols-2 md:grid-cols-4'
                                      : section.gallery.length === 2
                                        ? 'grid-cols-2'
                                        : section.gallery.length === 3
                                          ? 'grid-cols-1 md:grid-cols-3'
                                          : section.galleryFullWidthIndexes?.includes(0)
                                            ? 'grid-cols-1'
                                            : 'grid-cols-1 max-w-xs'
                                  }`}
                                >
                                  {section.gallery.map((src, galleryIdx) => {
                                    const fullWidth =
                                      section.galleryFullWidthIndexes?.includes(galleryIdx) ??
                                      false;
                                    return (
                                      <div
                                        key={src}
                                        className={`overflow-hidden bg-white ${
                                          section.galleryBorderless
                                            ? ''
                                            : 'border-2 border-black'
                                        } ${fullWidth && section.gallery.length > 1 ? 'col-span-2' : ''}`}
                                      >
                                        <img
                                          src={src}
                                          alt=""
                                          className={
                                            fullWidth
                                              ? 'w-full max-h-[360px] object-contain object-center bg-white'
                                              : 'w-full h-auto object-contain'
                                          }
                                          referrerPolicy="no-referrer"
                                        />
                                      </div>
                                    );
                                  })}
                                </div>
                              )
                            ) : null}

                            {section.itemsTitle ? (
                              <h5 className="font-display text-lg font-black">{section.itemsTitle}</h5>
                            ) : null}

                            {section.items?.length ? (
                              <div
                                className={`grid grid-cols-1 gap-4 ${
                                  section.items.length === 4
                                    ? 'md:grid-cols-2 lg:grid-cols-4'
                                    : section.items.length >= 3
                                      ? 'md:grid-cols-3'
                                      : 'md:grid-cols-2'
                                }`}
                              >
                                {section.items.map((item, itemIdx) => {
                                  const Icon = item.icon ? CASE_ICONS[item.icon] : null;
                                  return (
                                    <article
                                      key={`${item.title}-${itemIdx}`}
                                      className={`bg-white p-5 space-y-4 ${
                                        section.itemsBorderless
                                          ? ''
                                          : 'border-2 border-black'
                                      }`}
                                    >
                                      {Icon ? (
                                        <span
                                          className="flex h-11 w-11 items-center justify-center rounded-full border-2 border-black bg-[#8F9DE2]"
                                          style={item.iconBg ? { backgroundColor: item.iconBg } : undefined}
                                          aria-hidden
                                        >
                                          <Icon size={23} strokeWidth={2.25} />
                                        </span>
                                      ) : (
                                        <span className="inline-flex h-9 min-w-9 items-center justify-center rounded-full border-2 border-black bg-[#fef08a] px-2 font-display text-xs font-black">
                                          {String(itemIdx + 1).padStart(2, '0')}
                                        </span>
                                      )}
                                      <div className="space-y-2">
                                        <h5 className="font-display text-base font-black leading-tight">
                                          {item.title}
                                        </h5>
                                        <p className="font-sans text-sm font-medium leading-relaxed">
                                          {item.text}
                                        </p>
                                      </div>
                                    </article>
                                  );
                                })}
                              </div>
                            ) : null}

                            {section.groups?.map((group) => (
                              <div key={group.title} className="space-y-4">
                                <h5 className="font-display text-lg font-black">{group.title}</h5>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                  {group.items.map((item, itemIdx) => {
                                    const Icon = item.icon ? CASE_ICONS[item.icon] : null;
                                    return (
                                      <article
                                        key={`${group.title}-${item.title}-${itemIdx}`}
                                        className="flex gap-4 border-2 border-black bg-white p-5"
                                      >
                                        {Icon ? (
                                          <span
                                            className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border-2 border-black bg-[#8F9DE2]"
                                            aria-hidden
                                          >
                                            <Icon size={23} strokeWidth={2.25} />
                                          </span>
                                        ) : null}
                                        <div className="space-y-2">
                                          <h6 className="font-display text-base font-black leading-tight">
                                            {item.title}
                                          </h6>
                                          <p className="font-sans text-sm font-medium leading-relaxed">
                                            {item.text}
                                          </p>
                                        </div>
                                      </article>
                                    );
                                  })}
                                </div>
                              </div>
                            ))}

                            {section.href ? (
                              <a
                                href={section.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 neo-btn-primary"
                              >
                                <span>{section.hrefLabel ?? section.href}</span>
                                <ArrowRight size={16} />
                              </a>
                            ) : null}

                            {section.processSteps?.length ? (
                              <div className="bg-transparent px-0 py-2 md:py-3 space-y-4">
                                {section.processLabel ? (
                                  <p className="text-center text-xs font-black uppercase tracking-wider">
                                    {section.processLabel}
                                  </p>
                                ) : null}
                                <ol className="flex flex-col items-center gap-3 md:flex-row md:flex-wrap md:justify-center md:items-center md:gap-x-2 md:gap-y-3">
                                  {section.processSteps.map((step, idx) => {
                                    const StepIcon = CASE_ICONS[step.icon];
                                    return (
                                      <li
                                        key={`${step.title}-${idx}`}
                                        className="flex items-center gap-2"
                                      >
                                        <div className="flex items-center gap-2.5 min-w-0">
                                          <span
                                            className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border-2 border-black bg-[#8F9DE2]"
                                            aria-hidden
                                          >
                                            <StepIcon size={18} strokeWidth={2.25} />
                                          </span>
                                          <span className="font-display text-sm font-black leading-tight">
                                            {step.title}
                                          </span>
                                        </div>
                                        {idx < section.processSteps!.length - 1 ? (
                                          <ChevronRight
                                            className="hidden md:block mx-1.5 shrink-0 opacity-70"
                                            size={18}
                                            strokeWidth={2.5}
                                            aria-hidden
                                          />
                                        ) : null}
                                      </li>
                                    );
                                  })}
                                </ol>
                              </div>
                            ) : section.footnote ? (
                              <p className="text-xs md:text-sm font-bold leading-relaxed border-2 border-black bg-white px-4 py-3">
                                {section.footnote}
                              </p>
                            ) : null}
                          </div>
                        </section>
                      ))}
                    </div>
                  ) : (
                    <>
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
                    </>
                  )}
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

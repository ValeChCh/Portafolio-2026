import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { ActiveTab } from '../types';
import { useLanguage } from '../i18n/LanguageContext';
import { useT } from '../i18n/useI18n';

interface HeaderProps {
  activeTab: ActiveTab;
  setActiveTab: (tab: ActiveTab) => void;
}

export default function Header({ activeTab, setActiveTab }: HeaderProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { lang, setLang } = useLanguage();
  const t = useT();

  const navItems: { label: string; id: ActiveTab }[] = [
    { label: t.navWork, id: 'work' },
    { label: t.navAbout, id: 'about' },
    { label: t.navResume, id: 'resume' },
    { label: t.navContact, id: 'contact' },
  ];

  return (
    <header className="sticky top-0 z-40 w-full border-b-2 border-black bg-white/95 backdrop-blur-md transition-colors duration-300 no-print" id="app-header">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <div
          className="flex items-center space-x-3 cursor-pointer group"
          onClick={() => setActiveTab('work')}
          id="branding-logo"
        >
          <div className="flex space-x-1 hidden sm:flex">
            <span className="h-3 w-3 rounded-full bg-red-400 border border-black inline-block" />
            <span className="h-3 w-3 rounded-full bg-yellow-400 border border-black inline-block" />
            <span className="h-3 w-3 rounded-full bg-emerald-400 border border-black inline-block" />
          </div>
          <span className="font-display text-lg font-black tracking-tight text-black group-hover:text-[#7A8AD9] transition-colors">
            Valeria Charco _ {t.productDesigner}
          </span>
        </div>

        <nav className="hidden md:flex items-center space-x-3" id="desktop-nav">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={`font-sans text-xs font-extrabold uppercase tracking-wider transition-transform px-4 py-1.5 rounded-full cursor-pointer hover:scale-105 ${
                activeTab === item.id
                  ? 'bg-[#8F9DE2] text-black border-2 border-black'
                  : 'text-black hover:bg-slate-100'
              }`}
              id={`nav-${item.id}`}
            >
              {item.label}
            </button>
          ))}
        </nav>

        <div className="flex items-center space-x-3" id="header-controls">
          <div
            className="inline-flex items-center rounded-full border-2 border-black bg-white p-0.5"
            role="group"
            aria-label={t.langSwitchLabel}
            id="lang-switch"
          >
            <button
              type="button"
              onClick={() => setLang('es')}
              className={`min-w-9 rounded-full px-2.5 py-1 font-sans text-[11px] font-black tracking-wider transition-colors cursor-pointer focus-visible:outline focus-visible:outline-4 focus-visible:outline-offset-2 focus-visible:outline-black ${
                lang === 'es'
                  ? 'bg-[#FC982C] text-black'
                  : 'bg-transparent text-slate-500 hover:text-black'
              }`}
              aria-pressed={lang === 'es'}
              title="Español"
              id="lang-es-btn"
            >
              ES
            </button>
            <button
              type="button"
              onClick={() => setLang('en')}
              className={`min-w-9 rounded-full px-2.5 py-1 font-sans text-[11px] font-black tracking-wider transition-colors cursor-pointer focus-visible:outline focus-visible:outline-4 focus-visible:outline-offset-2 focus-visible:outline-black ${
                lang === 'en'
                  ? 'bg-[#FC982C] text-black'
                  : 'bg-transparent text-slate-500 hover:text-black'
              }`}
              aria-pressed={lang === 'en'}
              title="English"
              id="lang-en-btn"
            >
              EN
            </button>
          </div>

          <button
            onClick={() => setActiveTab('about')}
            className="relative h-9 w-9 overflow-hidden rounded-full border-2 border-black hover:scale-105 transition-all cursor-pointer"
            title={t.aboutValeria}
            id="avatar-nav-btn"
          >
            <img
              src="/images/valeria_avatar.jpg"
              alt="Valeria Profile"
              className="h-full w-full object-cover object-[50%_22%]"
              referrerPolicy="no-referrer"
            />
          </button>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="rounded-lg border-2 border-black p-1.5 bg-[#fbcfe8] text-black md:hidden transition-all cursor-pointer"
            aria-label={t.openMenu}
            id="mobile-menu-toggle"
          >
            {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="border-b-2 border-black bg-[#f7f5f0] px-4 py-4 md:hidden animate-fade-in" id="mobile-menu-panel">
          <div className="flex flex-col space-y-2">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  setActiveTab(item.id);
                  setIsMobileMenuOpen(false);
                }}
                className={`flex w-full items-center px-4 py-2.5 rounded-full text-xs font-black uppercase tracking-wider border-2 border-black transition-transform hover:scale-105 ${
                  activeTab === item.id
                    ? 'bg-[#8F9DE2] text-black'
                    : 'bg-white text-black'
                }`}
                id={`mobile-nav-${item.id}`}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}

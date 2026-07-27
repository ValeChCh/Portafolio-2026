import { useState, useEffect } from 'react';
import { Moon, Sun, Menu, X } from 'lucide-react';
import { ActiveTab } from '../types';

interface HeaderProps {
  activeTab: ActiveTab;
  setActiveTab: (tab: ActiveTab) => void;
  darkMode: boolean;
  setDarkMode: (dark: boolean) => void;
}

export default function Header({ activeTab, setActiveTab, darkMode, setDarkMode }: HeaderProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Apply dark class to html element
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  const navItems: { label: string; id: ActiveTab }[] = [
    { label: 'Work', id: 'work' },
    { label: 'About', id: 'about' },
    { label: 'Resume', id: 'resume' },
    { label: 'Contact', id: 'contact' }
  ];

  return (
    <header className="sticky top-0 z-40 w-full border-b-2 border-black bg-white/95 backdrop-blur-md dark:border-white dark:bg-slate-900/95 transition-colors duration-300 no-print" id="app-header">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Left branding with window controls */}
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
          <span className="font-display text-lg font-black tracking-tight text-black dark:text-white group-hover:text-amber-500 transition-colors">
            Valeria <span className="font-mono text-xs font-normal px-2 py-0.5 rounded-full border border-black bg-[#fef08a] text-black dark:border-white">UX/Product</span>
          </span>
        </div>

        {/* Center/Right Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-3" id="desktop-nav">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={`font-sans text-xs font-extrabold uppercase tracking-wider transition-all px-4 py-1.5 rounded-full cursor-pointer ${
                activeTab === item.id
                  ? 'bg-[#fef08a] text-black border-2 border-black dark:bg-amber-400 dark:text-black'
                  : 'text-black dark:text-white hover:bg-slate-100 dark:hover:bg-slate-800'
              }`}
              id={`nav-${item.id}`}
            >
              {item.label}
            </button>
          ))}
        </nav>

        {/* Right Controls */}
        <div className="flex items-center space-x-3" id="header-controls">
          {/* Dark Mode Toggle */}
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="rounded-full border-2 border-black p-1.5 bg-white text-black dark:bg-slate-800 dark:text-white dark:border-white transition-all cursor-pointer"
            title={darkMode ? 'Cambiar a modo claro' : 'Cambiar a modo oscuro'}
            aria-label="Toggle dark mode"
            id="theme-toggle-btn"
          >
            {darkMode ? <Sun size={18} className="text-amber-400" /> : <Moon size={18} />}
          </button>

          {/* Valeria's small avatar */}
          <button
            onClick={() => setActiveTab('about')}
            className="relative h-9 w-9 overflow-hidden rounded-full border-2 border-black dark:border-white hover:scale-105 transition-all cursor-pointer"
            title="Sobre Valeria"
            id="avatar-nav-btn"
          >
            <img
              src="/src/assets/images/valeria_avatar_1784586297194.jpg"
              alt="Valeria Profile"
              className="h-full w-full object-cover"
              referrerPolicy="no-referrer"
            />
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="rounded-lg border-2 border-black p-1.5 bg-[#fbcfe8] text-black md:hidden transition-all cursor-pointer"
            aria-label="Abrir menú"
            id="mobile-menu-toggle"
          >
            {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Panel */}
      {isMobileMenuOpen && (
        <div className="border-b-2 border-black bg-[#f7f5f0] px-4 py-4 dark:border-white dark:bg-slate-900 md:hidden animate-fade-in" id="mobile-menu-panel">
          <div className="flex flex-col space-y-2">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  setActiveTab(item.id);
                  setIsMobileMenuOpen(false);
                }}
                className={`flex w-full items-center px-4 py-2.5 rounded-full text-xs font-black uppercase tracking-wider border-2 border-black transition-colors ${
                  activeTab === item.id
                    ? 'bg-[#fef08a] text-black'
                    : 'bg-white text-black dark:bg-slate-800 dark:text-white dark:border-white'
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

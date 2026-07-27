import { useState } from 'react';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Projects from './components/Projects';
import About from './components/About';
import Resume from './components/Resume';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { ActiveTab } from './types';
import { motion, AnimatePresence } from 'motion/react';

export default function App() {
  const [activeTab, setActiveTab] = useState<ActiveTab>('work');
  const [darkMode, setDarkMode] = useState<boolean>(false);

  // Render content based on the active tab
  const renderTabContent = () => {
    switch (activeTab) {
      case 'work':
        return (
          <motion.div
            key="work"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.35, ease: 'easeOut' }}
            className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12"
            id="work-tab-content"
          >
            {/* Left Column: Introducción & Core Skills (33% on large screens) */}
            <aside className="lg:col-span-4 lg:sticky lg:top-24 h-fit" id="left-sidebar-aside">
              <Sidebar />
            </aside>

            {/* Right Column: Trabajos destacados (67% on large screens) */}
            <main className="lg:col-span-8" id="right-projects-main">
              <Projects />
            </main>
          </motion.div>
        );

      case 'about':
        return (
          <motion.div
            key="about"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.35, ease: 'easeOut' }}
            id="about-tab-content"
          >
            <About />
          </motion.div>
        );

      case 'resume':
        return (
          <motion.div
            key="resume"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.35, ease: 'easeOut' }}
            id="resume-tab-content"
          >
            <Resume />
          </motion.div>
        );

      case 'contact':
        return (
          <motion.div
            key="contact"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.35, ease: 'easeOut' }}
            id="contact-tab-content"
          >
            <Contact />
          </motion.div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#f0f2f5] text-slate-900 dark:bg-[#0b0f19] dark:text-slate-100 transition-colors duration-300" id="portfolio-app-root">
      {/* Navigation Header */}
      <Header 
        activeTab={activeTab} 
        setActiveTab={setActiveTab} 
        darkMode={darkMode} 
        setDarkMode={setDarkMode} 
      />

      {/* Main Content Area */}
      <div className="flex-grow mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 py-10 md:py-16" id="main-content-container">
        <AnimatePresence mode="wait">
          {renderTabContent()}
        </AnimatePresence>
      </div>

      {/* Footer copyright and links */}
      <Footer />
    </div>
  );
}

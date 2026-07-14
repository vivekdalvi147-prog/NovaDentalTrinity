import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Globe, Calendar, Phone, CheckCircle } from 'lucide-react';
import { Language, TRANSLATIONS } from '../types';

interface NavbarProps {
  currentLang: Language;
  onLangChange: (lang: Language) => void;
  onNavigate: (sectionId: string) => void;
  activeSection: string;
  onOpenBookingsModal: () => void;
  activeBookingsCount: number;
}

export default function Navbar({
  currentLang,
  onLangChange,
  onNavigate,
  activeSection,
  onOpenBookingsModal,
  activeBookingsCount
}: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLangDropdownOpen, setIsLangDropdownOpen] = useState(false);

  const t = TRANSLATIONS[currentLang];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'home', label: t.nav.home },
    { id: 'about', label: t.nav.about },
    { id: 'services', label: t.nav.services },
    { id: 'team', label: t.nav.team },
    { id: 'gallery', label: t.nav.gallery },
    { id: 'testimonials', label: t.nav.testimonials },
    { id: 'faq', label: t.nav.faq },
    { id: 'contact', label: t.nav.contact }
  ];

  const handleNavItemClick = (id: string) => {
    setIsMobileMenuOpen(false);
    onNavigate(id);
  };

  const languages: { code: Language; label: string; flag: string }[] = [
    { code: 'en', label: 'English', flag: '🇺🇸' },
    { code: 'es', label: 'Español', flag: '🇪🇸' },
    { code: 'pt', label: 'Português', flag: '🇧🇷' }
  ];

  return (
    <>
      {/* Top micro-bar for direct premium contact */}
      <div className="bg-slate-900 text-slate-300 text-xs py-2 px-4 border-b border-slate-800 hidden md:block">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-6">
            <span className="flex items-center gap-1.5 font-mono">
              <Phone className="w-3.5 h-3.5 text-teal-400" />
              <a href="tel:7278356001" className="hover:text-white transition-colors">{t.common.phone1}</a>
            </span>
            <span className="flex items-center gap-1.5 font-mono">
              <Phone className="w-3.5 h-3.5 text-teal-400" />
              <a href="tel:7274390885" className="hover:text-white transition-colors">{t.common.phone2}</a>
            </span>
          </div>
          <div className="flex items-center space-x-4">
            <span className="text-slate-400">{t.common.openHours}</span>
            <span className="h-3 w-px bg-slate-700" />
            <button
              onClick={onOpenBookingsModal}
              className="flex items-center gap-1.5 text-teal-400 hover:text-teal-300 font-medium transition-colors"
            >
              <CheckCircle className="w-3.5 h-3.5" />
              <span>{t.common.viewAppts}</span>
              {activeBookingsCount > 0 && (
                <span className="bg-teal-500 text-slate-950 text-[10px] px-1.5 py-0.5 rounded-full font-bold animate-pulse">
                  {activeBookingsCount}
                </span>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Main Sticky Navbar */}
      <header
        id="main-header"
        className={`sticky top-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-slate-950/90 backdrop-blur-md border-b border-slate-800 shadow-lg py-3'
            : 'bg-slate-950/40 backdrop-blur-sm border-b border-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 md:px-6 flex justify-between items-center">
          
          {/* Logo / Brand Title */}
          <button
            onClick={() => handleNavItemClick('home')}
            className="flex items-center space-x-2 text-left group"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-teal-500 to-sky-600 flex items-center justify-center text-white shadow-md shadow-teal-500/20 group-hover:scale-105 transition-transform">
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" />
                <path d="M12 6c-3.31 0-6 2.69-6 6s2.69 6 6 6 6-2.69 6-6-2.69-6-6-6zm0 10c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4z" />
              </svg>
            </div>
            <div>
              <span className="block font-sans text-lg font-bold text-slate-100 tracking-wider uppercase leading-none">
                Nova Dental
              </span>
              <span className="block text-[11px] font-mono font-medium tracking-widest text-teal-400 uppercase leading-none mt-1">
                Trinity & NPR
              </span>
            </div>
          </button>

          {/* Desktop Navigation Link Menu */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavItemClick(item.id)}
                className={`px-3 py-1.5 rounded-lg text-sm font-medium tracking-wide transition-colors ${
                  activeSection === item.id
                    ? 'text-teal-400 bg-teal-950/40 border-b-2 border-teal-500/50 rounded-b-none'
                    : 'text-slate-300 hover:text-white hover:bg-slate-800/40'
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Desktop Actions Area (Lang Picker & CTA Book Now Button) */}
          <div className="hidden lg:flex items-center space-x-4">
            
            {/* Language Selector */}
            <div className="relative">
              <button
                onClick={() => setIsLangDropdownOpen(!isLangDropdownOpen)}
                onBlur={() => setTimeout(() => setIsLangDropdownOpen(false), 200)}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 hover:text-white transition-colors text-sm"
              >
                <Globe className="w-4 h-4 text-teal-400" />
                <span className="uppercase font-semibold">{currentLang}</span>
                <span className="text-[10px]">▼</span>
              </button>
              
              <AnimatePresence>
                {isLangDropdownOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="absolute right-0 mt-2 w-36 bg-slate-950 border border-slate-800 rounded-xl shadow-2xl py-1.5 z-50 overflow-hidden"
                  >
                    {languages.map((lang) => (
                      <button
                        key={lang.code}
                        onClick={() => {
                          onLangChange(lang.code);
                          setIsLangDropdownOpen(false);
                        }}
                        className={`w-full flex items-center gap-2.5 px-4 py-2 text-left text-sm transition-colors ${
                          currentLang === lang.code
                            ? 'bg-teal-950/60 text-teal-400 font-medium'
                            : 'text-slate-300 hover:bg-slate-900 hover:text-white'
                        }`}
                      >
                        <span className="text-base leading-none">{lang.flag}</span>
                        <span>{lang.label}</span>
                      </button>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Sticky CTA Book Button */}
            <button
              onClick={() => handleNavItemClick('contact')}
              className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-teal-500 hover:bg-teal-400 text-slate-950 font-semibold text-sm tracking-wide shadow-md shadow-teal-500/20 transition-all hover:-translate-y-0.5"
            >
              <Calendar className="w-4 h-4" />
              <span>{t.nav.bookNow}</span>
            </button>
          </div>

          {/* Mobile Right Bar (Appointments trigger, Lang, and hamburger) */}
          <div className="flex items-center space-x-2.5 lg:hidden">
            
            {/* View appointments mobile quick trigger */}
            <button
              onClick={onOpenBookingsModal}
              className="relative p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 hover:text-white"
              title={t.common.viewAppts}
            >
              <CheckCircle className="w-5 h-5 text-teal-400" />
              {activeBookingsCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-teal-500 text-slate-950 text-[9px] w-4.5 h-4.5 rounded-full flex items-center justify-center font-bold">
                  {activeBookingsCount}
                </span>
              )}
            </button>

            {/* Quick Lang Switcher cycle for mobile */}
            <button
              onClick={() => {
                const order: Language[] = ['en', 'es', 'pt'];
                const nextIndex = (order.indexOf(currentLang) + 1) % order.length;
                onLangChange(order[nextIndex]);
              }}
              className="flex items-center justify-center p-2 rounded-lg bg-slate-900 border border-slate-800 text-xs font-bold text-slate-300 uppercase"
              title="Change Language"
            >
              <span className="text-teal-400 mr-1"><Globe className="w-4 h-4 inline" /></span>
              {currentLang}
            </button>

            {/* Menu Open/Close trigger */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 hover:text-white"
            >
              {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>
      </header>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden fixed top-[73px] inset-x-0 bg-slate-950 border-b border-slate-800 z-30 shadow-2xl overflow-hidden"
          >
            <div className="px-4 py-6 space-y-3 max-h-[80vh] overflow-y-auto">
              <nav className="flex flex-col space-y-1">
                {navItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => handleNavItemClick(item.id)}
                    className={`w-full text-left px-4 py-2.5 rounded-xl text-sm font-medium transition-colors ${
                      activeSection === item.id
                        ? 'text-teal-400 bg-teal-950/40 font-semibold'
                        : 'text-slate-300 hover:text-white hover:bg-slate-900'
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </nav>

              <div className="pt-4 border-t border-slate-800 flex flex-col space-y-3">
                <div className="flex flex-col text-xs text-slate-400 font-mono space-y-1.5 px-4">
                  <a href="tel:7278356001" className="flex items-center gap-2 hover:text-white">
                    <Phone className="w-3.5 h-3.5 text-teal-400" /> Trinity: {t.common.phone1}
                  </a>
                  <a href="tel:7274390885" className="flex items-center gap-2 hover:text-white">
                    <Phone className="w-3.5 h-3.5 text-teal-400" /> NPR: {t.common.phone2}
                  </a>
                  <span className="block mt-2 text-[10px] text-slate-500">{t.common.openHours}</span>
                </div>

                <button
                  onClick={() => handleNavItemClick('contact')}
                  className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-teal-500 hover:bg-teal-400 text-slate-950 font-bold text-sm tracking-wide transition-colors shadow-lg shadow-teal-500/10"
                >
                  <Calendar className="w-4 h-4" />
                  <span>{t.nav.bookNow}</span>
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

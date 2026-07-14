import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { HelpCircle, ChevronDown, Search, Inbox } from 'lucide-react';
import { Language, FAQS_LIST, TRANSLATIONS } from '../types';

interface FAQProps {
  currentLang: Language;
}

export default function FAQ({ currentLang }: FAQProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<'all' | 'general' | 'treatments' | 'payment'>('all');
  const [openId, setOpenId] = useState<string | null>('faq-1'); // Default open first one

  const t = TRANSLATIONS[currentLang];

  const toggleAccordion = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  // Filter FAQs based on active category and search input
  const filteredFAQs = FAQS_LIST.filter((item) => {
    // Check Category
    if (selectedCategory !== 'all' && item.category !== selectedCategory) {
      return false;
    }

    // Check Search Query
    const q = t.faq[item.id.replace('faq-', 'q')].question.toLowerCase();
    const a = t.faq[item.id.replace('faq-', 'q')].answer.toLowerCase();
    const s = searchQuery.toLowerCase();

    return q.includes(s) || a.includes(s);
  });

  return (
    <section id="faq" className="py-24 bg-slate-950 relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 md:px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="text-teal-400 text-xs font-bold tracking-widest uppercase block font-mono">
            {t.nav.faq}
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            {t.faq.title}
          </h2>
          <p className="text-sm text-slate-400 leading-relaxed max-w-xl mx-auto">
            {t.faq.subtitle}
          </p>
        </div>

        {/* Search Bar & Categories Switcher */}
        <div className="space-y-6 mb-12">
          {/* Search Box */}
          <div className="relative">
            <Search className="absolute top-1/2 left-4 transform -translate-y-1/2 w-5 h-5 text-slate-500" />
            <input
              type="text"
              placeholder={t.faq.searchPlaceholder}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-4 rounded-2xl bg-slate-900 border border-slate-800 text-slate-100 placeholder-slate-500 text-sm focus:outline-none focus:border-teal-500/50 focus:ring-1 focus:ring-teal-500/20 transition-all font-sans"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute top-1/2 right-4 transform -translate-y-1/2 text-xs font-semibold uppercase text-teal-400 hover:text-teal-300"
              >
                Clear
              </button>
            )}
          </div>

          {/* Categories Tab Selector */}
          <div className="flex flex-wrap justify-center items-center gap-2">
            {[
              { id: 'all', label: t.faq.categories.all },
              { id: 'general', label: t.faq.categories.general },
              { id: 'treatments', label: t.faq.categories.treatments },
              { id: 'payment', label: t.faq.categories.payment }
            ].map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id as any)}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all uppercase ${
                  selectedCategory === cat.id
                    ? 'bg-sky-500 text-slate-950 shadow-md shadow-sky-500/10'
                    : 'bg-slate-900 border border-slate-800 text-slate-400 hover:text-white'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Accordions List */}
        <div className="space-y-4">
          <AnimatePresence mode="popLayout">
            {filteredFAQs.length > 0 ? (
              filteredFAQs.map((item) => {
                const question = t.faq[item.id.replace('faq-', 'q')].question;
                const answer = t.faq[item.id.replace('faq-', 'q')].answer;
                const isOpen = openId === item.id;

                return (
                  <motion.div
                    layout
                    key={item.id}
                    initial={{ opacity: 0, y: 5 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -5 }}
                    className={`rounded-2xl border transition-all duration-300 ${
                      isOpen
                        ? 'bg-slate-900/80 border-slate-800 shadow-xl'
                        : 'bg-slate-900/30 border-slate-850/60 hover:border-slate-800'
                    }`}
                  >
                    {/* Header Trigger */}
                    <button
                      onClick={() => toggleAccordion(item.id)}
                      className="w-full flex items-center justify-between p-5 md:p-6 text-left"
                    >
                      <div className="flex gap-3.5 items-start">
                        <HelpCircle className={`w-5 h-5 mt-0.5 shrink-0 ${isOpen ? 'text-teal-400' : 'text-slate-500'}`} />
                        <span className="text-sm md:text-base font-bold text-slate-200 leading-snug">
                          {question}
                        </span>
                      </div>
                      <ChevronDown className={`w-5 h-5 text-slate-400 transition-transform duration-300 shrink-0 ${isOpen ? 'transform rotate-180 text-teal-400' : ''}`} />
                    </button>

                    {/* Expandable Body */}
                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3, ease: 'easeInOut' }}
                          className="overflow-hidden border-t border-slate-850"
                        >
                          <div className="p-5 md:p-6 text-slate-350 text-xs md:text-sm leading-relaxed font-sans font-medium">
                            {answer}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                );
              })
            ) : (
              // Empty search state
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="p-12 text-center rounded-3xl bg-slate-900/20 border border-dashed border-slate-850 flex flex-col items-center space-y-4"
              >
                <Inbox className="w-10 h-10 text-slate-600" />
                <p className="text-sm text-slate-400 font-mono">
                  {t.faq.noResults}
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}

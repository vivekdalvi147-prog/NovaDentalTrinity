import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import * as LucideIcons from 'lucide-react';
import { Language, SERVICES_LIST, Service, TRANSLATIONS } from '../types';

interface ServicesProps {
  currentLang: Language;
  onBookService: (serviceId: string) => void;
}

export default function Services({ currentLang, onBookService }: ServicesProps) {
  const [selectedService, setSelectedService] = useState<Service | null>(null);
  const t = TRANSLATIONS[currentLang];

  // Dynamic icon helper to safely map strings to Lucide icons
  const renderIcon = (iconName: string) => {
    const IconComponent = (LucideIcons as any)[iconName];
    if (!IconComponent) return <LucideIcons.Heart className="w-6 h-6 text-teal-400" />;
    
    // Choose color scheme depending on the icon category
    const isOdd = iconName.length % 2 === 0;
    return <IconComponent className={`w-6 h-6 ${isOdd ? 'text-teal-400' : 'text-sky-400'}`} />;
  };

  return (
    <section id="services" className="py-24 bg-slate-950 relative overflow-hidden">
      {/* Decorative backdrop gradients */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-teal-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-sky-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 md:px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="text-teal-400 text-xs font-bold tracking-widest uppercase block font-mono">
            {t.nav.services}
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            {t.services.title}
          </h2>
          <p className="text-sm text-slate-400 leading-relaxed max-w-xl mx-auto">
            {t.services.subtitle}
          </p>
        </div>

        {/* 10-Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5">
          {SERVICES_LIST.map((service) => {
            const title = t[service.titleKey.split('.')[0]][service.titleKey.split('.')[1]][service.titleKey.split('.')[2]];
            const shortDesc = t[service.shortDescKey.split('.')[0]][service.shortDescKey.split('.')[1]][service.shortDescKey.split('.')[2]];

            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, scale: 0.98 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                whileHover={{ y: -4 }}
                transition={{ duration: 0.3 }}
                className="flex flex-col justify-between p-5 rounded-2xl bg-slate-900 border border-slate-800 hover:border-teal-500/20 hover:bg-slate-900/80 transition-all duration-300 group"
              >
                <div>
                  <div className="w-11 h-11 rounded-xl bg-slate-950 border border-slate-850 flex items-center justify-center mb-5 group-hover:scale-105 transition-transform">
                    {renderIcon(service.iconName)}
                  </div>
                  
                  <h3 className="text-base font-bold text-slate-100 tracking-wide mb-2 line-clamp-1 group-hover:text-teal-400 transition-colors">
                    {title}
                  </h3>
                  
                  <p className="text-xs text-slate-400 leading-relaxed line-clamp-3">
                    {shortDesc}
                  </p>
                </div>

                <div className="mt-5 pt-3 border-t border-slate-850 flex items-center justify-between">
                  <span className="text-[10px] font-mono font-medium tracking-wider text-slate-500">
                    {service.duration}
                  </span>
                  
                  <button
                    onClick={() => setSelectedService(service)}
                    className="text-xs text-teal-400 hover:text-teal-300 font-bold flex items-center gap-1 transition-colors"
                  >
                    <span>{t.common.learnMore}</span>
                    <LucideIcons.ArrowUpRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>

      {/* Deep-Dive Service Details Sliding Modal */}
      <AnimatePresence>
        {selectedService && (() => {
          const title = t[selectedService.titleKey.split('.')[0]][selectedService.titleKey.split('.')[1]][selectedService.titleKey.split('.')[2]];
          const detailedDesc = t[selectedService.detailedDescKey.split('.')[0]][selectedService.detailedDescKey.split('.')[1]][selectedService.detailedDescKey.split('.')[2]];
          const steps = t[selectedService.detailedDescKey.split('.')[0]][selectedService.detailedDescKey.split('.')[1]].stages || [];
          const recovery = t[selectedService.detailedDescKey.split('.')[0]][selectedService.detailedDescKey.split('.')[1]].recovery || '';
          const benefits = t[selectedService.detailedDescKey.split('.')[0]][selectedService.detailedDescKey.split('.')[1]].benefits || [];

          return (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
              {/* Dimmed backdrop overlay */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setSelectedService(null)}
                className="absolute inset-0 bg-slate-950/80 backdrop-blur-md"
              />

              {/* Modal Box */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 15 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 15 }}
                transition={{ type: 'spring', damping: 25, stiffness: 350 }}
                className="relative bg-slate-900 border border-slate-850 rounded-3xl max-w-2xl w-full max-h-[85vh] overflow-y-auto p-6 md:p-8 shadow-2xl z-10 text-left scrollbar-thin"
              >
                {/* Close Button */}
                <button
                  onClick={() => setSelectedService(null)}
                  className="absolute top-4 right-4 p-2 rounded-xl bg-slate-950 border border-slate-800 text-slate-400 hover:text-white transition-colors"
                >
                  <LucideIcons.X className="w-5 h-5" />
                </button>

                {/* Header Content */}
                <div className="flex items-center space-x-3.5 mb-6">
                  <div className="w-12 h-12 rounded-2xl bg-slate-950 border border-slate-800 flex items-center justify-center shadow-inner">
                    {renderIcon(selectedService.iconName)}
                  </div>
                  <div>
                    <h3 className="text-xl md:text-2xl font-extrabold text-white tracking-tight">
                      {title}
                    </h3>
                    <div className="flex items-center gap-3 mt-1 text-xs text-slate-400 font-mono">
                      <span className="flex items-center gap-1 text-teal-400">
                        <LucideIcons.Clock className="w-3.5 h-3.5" />
                        {t.services.durationLabel} {selectedService.duration}
                      </span>
                      <span className="text-slate-700">•</span>
                      <span className="flex items-center gap-1 text-sky-400">
                        <LucideIcons.DollarSign className="w-3.5 h-3.5" />
                        {t.services.costLabel} {selectedService.priceRange}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Detailed Narrative */}
                <div className="space-y-6 text-sm text-slate-300 leading-relaxed font-sans">
                  <p className="border-l-2 border-teal-500/40 pl-4 py-1.5 bg-slate-950/40 rounded-r-xl pr-3">
                    {detailedDesc}
                  </p>

                  {/* Expected Treatment Steps */}
                  {steps.length > 0 && (
                    <div className="space-y-3">
                      <h4 className="text-xs font-bold uppercase text-slate-200 tracking-wider flex items-center gap-1.5">
                        <LucideIcons.ListChecks className="w-4 h-4 text-teal-400" />
                        {t.services.stepsLabel}
                      </h4>
                      <ol className="grid grid-cols-1 sm:grid-cols-2 gap-3 pl-1">
                        {steps.map((step: string, idx: number) => (
                          <li key={idx} className="flex gap-2.5 items-start p-2.5 rounded-xl bg-slate-950/30 border border-slate-850">
                            <span className="w-5 h-5 rounded-md bg-teal-500/10 border border-teal-500/20 text-teal-400 text-xs font-mono font-bold flex items-center justify-center shrink-0">
                              {idx + 1}
                            </span>
                            <span className="text-xs font-medium text-slate-300 leading-tight">{step}</span>
                          </li>
                        ))}
                      </ol>
                    </div>
                  )}

                  {/* Clinical Benefits */}
                  {benefits.length > 0 && (
                    <div className="space-y-2.5 pt-2">
                      <h4 className="text-xs font-bold uppercase text-slate-200 tracking-wider flex items-center gap-1.5">
                        <LucideIcons.Sparkles className="w-4 h-4 text-sky-400" />
                        {t.services.benefitsLabel}
                      </h4>
                      <ul className="space-y-2 pl-1">
                        {benefits.map((benefit: string, idx: number) => (
                          <li key={idx} className="flex gap-2.5 items-center text-xs text-slate-300">
                            <LucideIcons.Check className="w-4 h-4 text-emerald-400 shrink-0" />
                            <span>{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Recovery Period info */}
                  {recovery && (
                    <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-850 flex gap-3 items-center">
                      <LucideIcons.Heart className="w-5 h-5 text-teal-400 shrink-0" />
                      <div>
                        <span className="block text-xs font-bold text-slate-300 uppercase tracking-wide leading-none">{t.services.recoveryLabel}</span>
                        <span className="block text-xs text-slate-400 mt-1">{recovery}</span>
                      </div>
                    </div>
                  )}
                </div>

                {/* Modal footer action */}
                <div className="mt-8 pt-5 border-t border-slate-850 flex flex-col sm:flex-row gap-3 justify-end">
                  <button
                    onClick={() => setSelectedService(null)}
                    className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-slate-950 text-slate-400 hover:text-white border border-slate-850 transition-colors text-xs font-semibold"
                  >
                    {t.common.close}
                  </button>
                  <button
                    onClick={() => {
                      onBookService(selectedService.id);
                      setSelectedService(null);
                    }}
                    className="w-full sm:w-auto px-6 py-2.5 rounded-xl bg-teal-500 hover:bg-teal-400 text-slate-950 transition-all font-bold text-xs flex items-center justify-center gap-1.5 shadow-md shadow-teal-500/10"
                  >
                    <LucideIcons.Calendar className="w-4 h-4" />
                    <span>{t.services.bookThis}</span>
                  </button>
                </div>

              </motion.div>
            </div>
          );
        })()}
      </AnimatePresence>
    </section>
  );
}

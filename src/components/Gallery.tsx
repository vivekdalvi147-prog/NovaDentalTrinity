import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Image, X, ZoomIn, Info } from 'lucide-react';
import { Language, GALLERY_LIST, GalleryItem, TRANSLATIONS } from '../types';

interface GalleryProps {
  currentLang: Language;
}

export default function Gallery({ currentLang }: GalleryProps) {
  const [activeTab, setActiveTab] = useState<'all' | 'clinic' | 'tech' | 'patients'>('all');
  const [selectedImage, setSelectedImage] = useState<GalleryItem | null>(null);

  const t = TRANSLATIONS[currentLang];

  const filteredItems = activeTab === 'all'
    ? GALLERY_LIST
    : GALLERY_LIST.filter(item => item.category === activeTab);

  const getTabLabel = (tab: typeof activeTab) => {
    switch (tab) {
      case 'all': return t.gallery.tabs.all;
      case 'clinic': return t.gallery.tabs.clinic;
      case 'tech': return t.gallery.tabs.tech;
      case 'patients': return t.gallery.tabs.patients;
    }
  };

  const getAltText = (item: GalleryItem) => {
    const key = item.altKey;
    const parts = key.split('.');
    return t[parts[0]][parts[1]].alt;
  };

  return (
    <section id="gallery" className="py-24 bg-slate-950 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="text-teal-400 text-xs font-bold tracking-widest uppercase block font-mono">
            {t.nav.gallery}
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            {t.gallery.title}
          </h2>
          <p className="text-sm text-slate-400 leading-relaxed max-w-xl mx-auto">
            {t.gallery.subtitle}
          </p>
        </div>

        {/* Filter Navigation Tabs */}
        <div className="flex flex-wrap justify-center items-center gap-2.5 mb-12">
          {(['all', 'clinic', 'tech', 'patients'] as const).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4.5 py-2 rounded-xl text-xs font-bold tracking-wide transition-all uppercase ${
                activeTab === tab
                  ? 'bg-teal-500 text-slate-950 shadow-lg shadow-teal-500/10'
                  : 'bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:border-slate-700'
              }`}
            >
              {getTabLabel(tab)}
            </button>
          ))}
        </div>

        {/* Images Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item) => (
              <motion.div
                layout
                key={item.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                onClick={() => setSelectedImage(item)}
                className="relative aspect-4/3 rounded-3xl bg-slate-900 border border-slate-850 overflow-hidden cursor-pointer group shadow-lg"
              >
                <img
                  src={item.image}
                  alt={getAltText(item)}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                
                {/* Micro interactive overlays on hover */}
                <div className="absolute inset-0 bg-slate-950/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between p-5">
                  <div className="flex justify-end">
                    <div className="w-8 h-8 rounded-lg bg-teal-500 text-slate-950 flex items-center justify-center shadow">
                      <ZoomIn className="w-4 h-4" />
                    </div>
                  </div>
                  
                  <div className="space-y-1.5 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                    <span className="inline-block text-[9px] font-mono font-bold tracking-wider uppercase text-teal-400">
                      {item.category === 'clinic' ? 'Nova Environment' : item.category === 'tech' ? 'Advanced Dentistry' : 'Patient Smile'}
                    </span>
                    <p className="text-xs font-bold text-slate-100">
                      {getAltText(item)}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

      </div>

      {/* Lightbox Modal Overlay */}
      <AnimatePresence>
        {selectedImage && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Dim Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedImage(null)}
              className="absolute inset-0 bg-slate-950/95 backdrop-blur-md"
            />

            {/* Expansive Image view Container */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.3 }}
              className="relative max-w-4xl w-full max-h-[80vh] flex flex-col items-center justify-center z-10"
            >
              {/* Floating Close */}
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute -top-12 right-0 p-2 text-slate-400 hover:text-white bg-slate-900 border border-slate-800 rounded-xl transition-colors"
                title={t.common.close}
              >
                <X className="w-5 h-5" />
              </button>

              <div className="relative rounded-3xl overflow-hidden border border-slate-800 bg-slate-900 max-h-[70vh] flex items-center justify-center">
                <img
                  src={selectedImage.image}
                  alt={getAltText(selectedImage)}
                  className="max-w-full max-h-[70vh] object-contain"
                  referrerPolicy="no-referrer"
                />
              </div>

              {/* Informational Footer Strip inside Lightbox */}
              <div className="w-full mt-4 p-4.5 rounded-2xl bg-slate-900 border border-slate-800 flex items-center gap-3">
                <Info className="w-5 h-5 text-teal-400 shrink-0" />
                <p className="text-xs text-slate-300 font-medium">
                  {getAltText(selectedImage)}
                </p>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}

import { useState } from 'react';
import { motion } from 'motion/react';
import { Star, Quote, Heart, CheckCircle2 } from 'lucide-react';
import { Language, TESTIMONIALS_LIST, TRANSLATIONS } from '../types';

interface TestimonialsProps {
  currentLang: Language;
}

export default function Testimonials({ currentLang }: TestimonialsProps) {
  const [selectedFilter, setSelectedFilter] = useState<'all' | 'implants' | 'veneers' | 'whitening' | 'emergency'>('all');
  const t = TRANSLATIONS[currentLang];

  const filteredReviews = selectedFilter === 'all'
    ? TESTIMONIALS_LIST
    : TESTIMONIALS_LIST.filter(item => item.treatmentKey.includes(selectedFilter));

  const getReviewText = (id: string) => {
    switch (id) {
      case 't1': return currentLang === 'en'
        ? 'Dr. Marcos Silva completely changed my life with custom dental implants! The surgery was 100% painless, and the final porcelain crowns look so natural. The whole clinical environment in Trinity is pristine and luxurious.'
        : currentLang === 'es'
        ? '¡El Dr. Marcos Silva cambió completamente mi vida con implantes dentales personalizados! La cirugía fue 100% indolora y las coronas de porcelana finales se ven muy naturales. Todo el entorno clínico en Trinity es impecable y lujoso.'
        : 'O Dr. Marcos Silva mudou completamente minha vida com implantes dentários personalizados! A cirurgia foi 100% livre de dor e as coroas de porcelana finais parecem muito naturais. Todo o ambiente clínico em Trinity é impecável e luxuoso.';
      case 't2': return currentLang === 'en'
        ? 'I flew from Miami specifically to get my porcelain veneers done by Dr. Rostova. The digital smile simulation was spot-on, and my teeth look stunning. Absolute perfectionists!'
        : currentLang === 'es'
        ? 'Volé desde Miami específicamente para hacerme las carillas de porcelana con la Dra. Rostova. La simulación digital de la sonrisa fue perfecta y mis dientes lucen impresionantes. ¡Perfeccionistas absolutos!'
        : 'Voei de Miami especificamente para fazer minhas lentes de contato de porcelana com a Dra. Rostova. A simulação digital do sorriso foi perfeita e meus dentes parecem impressionantes. Perfeccionistas absolutos!';
      case 't3': return currentLang === 'en'
        ? 'Sarah is the gentlest hygienist on the planet! I used to have dental phobia, but her calming demeanor and the memory foam massage chair made my deep teeth cleaning a relaxing breeze. Highly recommend Nova!'
        : currentLang === 'es'
        ? '¡Sarah es la higienista más delicada del planeta! Solía tener fobia dental, pero su actitud tranquila y el sillón de masajes de espuma viscoelástica hicieron que mi limpieza profunda fuera una brisa relajante. ¡Recomiendo mucho a Nova!'
        : 'A Sarah é a higienista mais gentil do planeta! Eu costumava ter fobia de dentista, mas a sua postura calma e a cadeira de massagem com espuma de memória tornaram minha profilaxia profunda incrivelmente relaxante. Recomendo demais a Nova!';
      case 't4': return currentLang === 'en'
        ? 'Had an agonizing toothache late on a Thursday. They booked me in immediately, did a root canal treatment, and eliminated my extreme pain within 45 minutes. Truly compassionate, outstanding professionals.'
        : currentLang === 'es'
        ? 'Tuve un dolor de muela insoportable un jueves por la noche. Me atendieron de inmediato, me hicieron una endodoncia y eliminaron mi dolor extremo en 45 minutos. Profesionales verdaderamente compasivos y excepcionales.'
        : 'Tive uma dor de dente agonizante tarde na quinta-feira. Eles me agendaram imediatamente, fizeram um tratamento de canal e eliminaram minha dor extrema em 45 minutos. Profissionais verdadeiramente compassivos e brilhantes.';
      default: return '';
    }
  };

  const getTreatmentLabel = (key: string) => {
    const parts = key.split('.');
    return t[parts[0]][parts[1]][parts[2]];
  };

  return (
    <section id="testimonials" className="py-24 bg-slate-900/40 border-y border-slate-900 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="text-sky-400 text-xs font-bold tracking-widest uppercase block font-mono">
            {t.nav.testimonials}
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Loved By Our Patients
          </h2>
          <p className="text-sm text-slate-400 leading-relaxed max-w-xl mx-auto">
            Discover real experiences of families who transformed their dental wellness and confidence at Nova.
          </p>
        </div>

        {/* Filter Chips */}
        <div className="flex flex-wrap justify-center items-center gap-2 mb-12">
          {[
            { id: 'all', label: 'All Reviews' },
            { id: 'implants', label: 'Implants' },
            { id: 'veneers', label: 'Veneers' },
            { id: 'whitening', label: 'Whitening' },
            { id: 'emergency', label: 'Emergency Care' }
          ].map((chip) => (
            <button
              key={chip.id}
              onClick={() => setSelectedFilter(chip.id as any)}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all uppercase ${
                selectedFilter === chip.id
                  ? 'bg-teal-500 text-slate-950 font-extrabold'
                  : 'bg-slate-900 border border-slate-800 text-slate-400 hover:text-white'
              }`}
            >
              {chip.label}
            </button>
          ))}
        </div>

        {/* Reviews Masonry-like Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {filteredReviews.map((item) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="p-6 md:p-8 rounded-3xl bg-slate-950 border border-slate-800 flex flex-col justify-between relative overflow-hidden group shadow-lg"
            >
              {/* Top aesthetic quote marker */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-teal-500/5 to-transparent rounded-full flex items-center justify-center">
                <Quote className="w-10 h-10 text-slate-800/40 group-hover:text-teal-500/10 transition-colors" />
              </div>

              <div className="space-y-4">
                {/* Stars and verified status */}
                <div className="flex items-center justify-between">
                  <div className="flex space-x-1">
                    {[...Array(item.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current text-amber-400" />
                    ))}
                  </div>
                  
                  <span className="flex items-center gap-1 text-[10px] text-teal-400 font-mono uppercase font-bold tracking-wider">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    Verified Patient
                  </span>
                </div>

                {/* Main commentary text */}
                <p className="text-sm text-slate-300 leading-relaxed font-sans italic">
                  "{getReviewText(item.id)}"
                </p>
              </div>

              {/* Patient Bio Info */}
              <div className="mt-8 pt-5 border-t border-slate-850 flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-11 h-11 rounded-full object-cover border border-slate-800 shrink-0"
                    referrerPolicy="no-referrer"
                  />
                  <div>
                    <span className="block text-sm font-bold text-slate-200">
                      {item.name}
                    </span>
                    <span className="block text-[10px] text-slate-500 font-mono mt-0.5">
                      {item.date}
                    </span>
                  </div>
                </div>

                {/* Treatment received badge */}
                <span className="py-1 px-3.5 rounded-lg bg-slate-900 border border-slate-850 text-[10px] font-semibold text-sky-400 uppercase tracking-wider">
                  {getTreatmentLabel(item.treatmentKey)}
                </span>
              </div>

            </motion.div>
          ))}
        </div>

        {/* Dynamic customer trust statement */}
        <div className="mt-16 text-center max-w-xl mx-auto p-4 bg-teal-500/5 rounded-2xl border border-teal-500/10 flex items-center justify-center gap-3">
          <Heart className="w-5 h-5 text-teal-400 shrink-0 animate-pulse" />
          <p className="text-xs text-slate-400 font-medium">
            Over <span className="text-white font-extrabold">2,450+ five-star reviews</span> across Google, Healthgrades, and Yelp in Pinellas and Pasco counties.
          </p>
        </div>

      </div>
    </section>
  );
}

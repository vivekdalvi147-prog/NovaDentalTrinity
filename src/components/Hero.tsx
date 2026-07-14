import { motion } from 'motion/react';
import { Calendar, Phone, Award, ThumbsUp, Users, MapPin, Star } from 'lucide-react';
import { Language, TRANSLATIONS } from '../types';

interface HeroProps {
  currentLang: Language;
  onNavigate: (sectionId: string) => void;
}

export default function Hero({ currentLang, onNavigate }: HeroProps) {
  const t = TRANSLATIONS[currentLang];

  const stats = [
    {
      id: 'stat-patients',
      icon: <Users className="w-5 h-5 text-teal-400" />,
      value: '10,000+',
      label: t.hero.happyPatients
    },
    {
      id: 'stat-experience',
      icon: <Award className="w-5 h-5 text-sky-400" />,
      value: '15+ Years',
      label: t.hero.yearsExp
    },
    {
      id: 'stat-satisfaction',
      icon: <ThumbsUp className="w-5 h-5 text-teal-400" />,
      value: '99.8%',
      label: t.hero.satisfactionRate
    },
    {
      id: 'stat-branches',
      icon: <MapPin className="w-5 h-5 text-sky-400" />,
      value: '2 Branches',
      label: t.hero.branchesCount
    }
  ];

  return (
    <section
      id="home"
      className="relative min-h-[90vh] flex items-center justify-center pt-20 pb-16 overflow-hidden bg-slate-950"
    >
      {/* Visual background image with dark overlay to keep high-contrast readability */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=1920&q=80"
          alt="Luxury modern dental clinic"
          className="w-full h-full object-cover object-center opacity-25"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/80 to-slate-950/50" />
        
        {/* Subtle decorative lights to create clinical premium glow */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-sky-500/10 rounded-full blur-3xl animate-pulse" />
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-6 relative z-10 w-full text-center lg:text-left">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Headline and CTAs (Col size: 7) */}
          <div className="lg:col-span-7 flex flex-col justify-center space-y-6 md:space-y-8">
            
            {/* Accreditation Badge */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center space-x-1.5 px-3 py-1.5 rounded-full bg-teal-950/60 border border-teal-500/20 text-teal-400 text-xs font-semibold tracking-wide self-center lg:self-start"
            >
              <Star className="w-3.5 h-3.5 fill-current text-amber-400" />
              <span>Ranked #1 Dental Clinic in Trinity, FL</span>
            </motion.div>

            {/* Main Title */}
            <motion.h1
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.6 }}
              className="text-4xl sm:text-5xl md:text-6xl font-sans tracking-tight text-white font-extrabold leading-tight"
            >
              {t.hero.headline.split(' ').map((word: string, idx: number) => {
                if (idx >= 2) {
                  return <span key={idx} className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-sky-400">{word} </span>;
                }
                return word + ' ';
              })}
            </motion.h1>

            {/* Subtitle description */}
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-sans font-medium"
            >
              {t.hero.subtitle}
            </motion.p>

            {/* Action CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4"
            >
              <button
                onClick={() => onNavigate('contact')}
                className="w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-4 rounded-2xl bg-teal-500 hover:bg-teal-400 text-slate-950 font-bold text-base tracking-wide transition-all shadow-xl shadow-teal-500/20 hover:-translate-y-1"
              >
                <Calendar className="w-5 h-5" />
                <span>{t.hero.bookCTA}</span>
              </button>

              <a
                href="tel:7278356001"
                className="w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-4 rounded-2xl bg-slate-900 hover:bg-slate-800 border border-slate-800 text-slate-100 font-bold text-base tracking-wide transition-all hover:-translate-y-1"
              >
                <Phone className="w-5 h-5 text-sky-400" />
                <span>{t.hero.callCTA}</span>
              </a>
            </motion.div>

          </div>

          {/* Luxury Floating Card & Branch Quick-Viewer (Col size: 5) */}
          <div className="lg:col-span-5 relative flex justify-center">
            
            {/* Main glass card with interactive design */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="w-full max-w-sm rounded-3xl bg-slate-900/60 border border-slate-800 backdrop-blur-md p-6 sm:p-8 relative overflow-hidden shadow-2xl text-left"
            >
              <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-teal-500/10 to-transparent rounded-full" />
              
              <h3 className="text-lg font-bold text-slate-100 tracking-wide uppercase mb-5 font-sans border-b border-slate-800 pb-3 flex items-center justify-between">
                <span>{t.common.branches}</span>
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
              </h3>

              <div className="space-y-6">
                {/* Branch 1 */}
                <div className="flex gap-3">
                  <div className="w-9 h-9 rounded-xl bg-teal-500/10 border border-teal-500/30 flex items-center justify-center shrink-0">
                    <MapPin className="w-4 h-4 text-teal-400" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-200 uppercase tracking-wide">{t.common.trinityBranch}</h4>
                    <p className="text-xs text-slate-400 mt-1">{t.common.address1}</p>
                    <a href="tel:7278356001" className="text-xs text-teal-400 hover:underline inline-block mt-1 font-mono">
                      (727) 835-6001
                    </a>
                  </div>
                </div>

                {/* Branch 2 */}
                <div className="flex gap-3">
                  <div className="w-9 h-9 rounded-xl bg-sky-500/10 border border-sky-500/30 flex items-center justify-center shrink-0">
                    <MapPin className="w-4 h-4 text-sky-400" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-200 uppercase tracking-wide">{t.common.nprBranch}</h4>
                    <p className="text-xs text-slate-400 mt-1">{t.common.address2}</p>
                    <a href="tel:7274390885" className="text-xs text-sky-400 hover:underline inline-block mt-1 font-mono">
                      (727) 439-0885
                    </a>
                  </div>
                </div>

                {/* Operating hours disclaimer */}
                <div className="bg-slate-950/60 rounded-xl p-3 border border-slate-800 text-xs text-slate-400 text-center font-mono">
                  {t.common.openHours}
                </div>
              </div>

            </motion.div>
          </div>

        </div>

        {/* Floating statistics row at bottom */}
        <div className="mt-16 md:mt-24">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 bg-slate-900/40 border border-slate-800/80 backdrop-blur-sm rounded-3xl p-6 md:p-8">
            {stats.map((stat, idx) => (
              <motion.div
                key={stat.id}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 + idx * 0.1, duration: 0.5 }}
                className="flex flex-col items-center justify-center text-center p-3"
              >
                <div className="mb-2 p-2 bg-slate-950 rounded-xl border border-slate-800">
                  {stat.icon}
                </div>
                <span className="block text-2xl md:text-3xl font-extrabold text-white tracking-tight">
                  {stat.value}
                </span>
                <span className="block text-[11px] md:text-xs text-slate-400 font-medium uppercase tracking-widest mt-1">
                  {stat.label}
                </span>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}

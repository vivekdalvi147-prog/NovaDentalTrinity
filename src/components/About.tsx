import { motion } from 'motion/react';
import { Award, Cpu, Heart, ClipboardCheck, Clock, CreditCard, ShieldCheck } from 'lucide-react';
import { Language, TRANSLATIONS } from '../types';

interface AboutProps {
  currentLang: Language;
}

export default function About({ currentLang }: AboutProps) {
  const t = TRANSLATIONS[currentLang];

  const whyChooseFeatures = [
    {
      id: 'dentists',
      icon: <Award className="w-6 h-6 text-teal-400" />,
      title: t.about.features.dentists.title,
      desc: t.about.features.dentists.desc
    },
    {
      id: 'equipment',
      icon: <Cpu className="w-6 h-6 text-sky-400" />,
      title: t.about.features.equipment.title,
      desc: t.about.features.equipment.desc
    },
    {
      id: 'gentle',
      icon: <Heart className="w-6 h-6 text-teal-400" />,
      title: t.about.features.gentle.title,
      desc: t.about.features.gentle.desc
    },
    {
      id: 'personalized',
      icon: <ClipboardCheck className="w-6 h-6 text-sky-400" />,
      title: t.about.features.personalized.title,
      desc: t.about.features.personalized.desc
    },
    {
      id: 'flexible',
      icon: <Clock className="w-6 h-6 text-teal-400" />,
      title: t.about.features.flexible.title,
      desc: t.about.features.flexible.desc
    },
    {
      id: 'affordable',
      icon: <CreditCard className="w-6 h-6 text-sky-400" />,
      title: t.about.features.affordable.title,
      desc: t.about.features.affordable.desc
    }
  ];

  return (
    <section id="about" className="py-24 bg-slate-900/40 border-y border-slate-900 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        
        {/* Intro Section: Headline and Details */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-24">
          
          {/* Text content left (Col size: 7) */}
          <div className="lg:col-span-7 space-y-6">
            <div className="space-y-2">
              <span className="text-teal-400 text-xs font-bold tracking-widest uppercase block font-mono">
                {t.nav.about}
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                {t.about.title}
              </h2>
              <p className="text-lg font-medium text-teal-300 font-sans tracking-wide">
                {t.about.subtitle}
              </p>
            </div>

            <div className="space-y-4 text-slate-300 leading-relaxed font-sans">
              <p>{t.about.p1}</p>
              <p>{t.about.p2}</p>
            </div>

            {/* Micro Accents of Multi-language comfort */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <span className="text-xs font-mono uppercase text-slate-400 font-semibold">{`We speak:`}</span>
              <span className="px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-slate-200 text-xs flex items-center gap-1">
                🇺🇸 English
              </span>
              <span className="px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-slate-200 text-xs flex items-center gap-1">
                🇧🇷 Português
              </span>
              <span className="px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-slate-200 text-xs flex items-center gap-1">
                🇪🇸 Español
              </span>
            </div>
          </div>

          {/* Graphic Side Right (Col size: 5) */}
          <div className="lg:col-span-5 relative flex justify-center">
            <div className="relative w-full max-w-sm aspect-4/3 rounded-3xl overflow-hidden shadow-2xl group border border-slate-800">
              <img
                src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=800&q=80"
                alt="Nova Dental Trinity treatment environment"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent" />
              
              {/* Floating review card overlay */}
              <div className="absolute bottom-4 left-4 right-4 p-4 rounded-2xl bg-slate-900/90 border border-slate-800 backdrop-blur-md flex items-center space-x-3">
                <div className="w-10 h-10 rounded-xl bg-teal-500/10 border border-teal-500/30 flex items-center justify-center shrink-0">
                  <ShieldCheck className="w-5 h-5 text-teal-400" />
                </div>
                <div>
                  <span className="block text-xs font-bold text-slate-200 uppercase tracking-wide">ADA Certified Care</span>
                  <span className="block text-[10px] text-teal-400 font-mono mt-0.5">Gold Standard Sterilization</span>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Why Choose Us: Title and Subtitle */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="text-sky-400 text-xs font-bold tracking-widest uppercase block font-mono">
            {t.about.whyTitle}
          </span>
          <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            Nova Clinical Principles
          </h3>
          <p className="text-sm text-slate-400 leading-relaxed max-w-xl mx-auto">
            {t.about.whySubtitle}
          </p>
        </div>

        {/* 6 Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {whyChooseFeatures.map((feature, idx) => (
            <motion.div
              key={feature.id}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.08, duration: 0.5 }}
              className="p-6 md:p-8 rounded-2xl bg-slate-950/60 border border-slate-800/80 hover:border-teal-500/30 hover:bg-slate-950 transition-all duration-300 flex flex-col justify-between group relative overflow-hidden shadow-md"
            >
              <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl from-teal-500/5 to-transparent rounded-full" />
              
              <div>
                <div className="w-12 h-12 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center mb-6 group-hover:scale-105 transition-transform">
                  {feature.icon}
                </div>
                <h4 className="text-lg font-bold text-slate-100 tracking-wide mb-3 group-hover:text-teal-400 transition-colors">
                  {feature.title}
                </h4>
                <p className="text-sm text-slate-400 leading-relaxed">
                  {feature.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}

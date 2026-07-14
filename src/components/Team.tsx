import { motion } from 'motion/react';
import { Calendar, Award, Star, Check } from 'lucide-react';
import { Language, TEAM_LIST, TRANSLATIONS } from '../types';

interface TeamProps {
  currentLang: Language;
  onBookDentist: (dentistId: string) => void;
}

export default function Team({ currentLang, onBookDentist }: TeamProps) {
  const t = TRANSLATIONS[currentLang];

  return (
    <section id="team" className="py-24 bg-slate-900/40 border-y border-slate-900/80 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="text-sky-400 text-xs font-bold tracking-widest uppercase block font-mono">
            {t.nav.team}
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            {t.team.title}
          </h2>
          <p className="text-sm text-slate-400 leading-relaxed max-w-xl mx-auto">
            {t.team.subtitle}
          </p>
        </div>

        {/* Clinicians Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {TEAM_LIST.map((member, idx) => {
            const role = t.team[member.id.replace('dr-', '').replace('-hygienist', '')]?.role || '';
            const bio = t.team[member.id.replace('dr-', '').replace('-hygienist', '')]?.bio || '';

            return (
              <motion.div
                key={member.id}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.5 }}
                className="rounded-3xl bg-slate-950 border border-slate-800 overflow-hidden shadow-xl flex flex-col group"
              >
                {/* Profile Image with overlay elements */}
                <div className="relative aspect-square overflow-hidden bg-slate-900">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />
                  
                  {/* Experience Badge */}
                  <div className="absolute top-4 left-4 py-1.5 px-3 rounded-xl bg-slate-950/85 border border-slate-800 text-[10px] font-mono tracking-widest uppercase text-teal-400 font-bold">
                    {t.team.experience} {member.experience}
                  </div>

                  {/* Rating Badge */}
                  <div className="absolute bottom-4 right-4 py-1 px-2.5 rounded-lg bg-teal-500 text-slate-950 text-[10px] font-extrabold tracking-wider uppercase flex items-center gap-1">
                    <Star className="w-3 h-3 fill-current" />
                    <span>5.0 rating</span>
                  </div>
                </div>

                {/* Info and Description */}
                <div className="p-6 md:p-8 flex-grow flex flex-col justify-between space-y-6">
                  <div className="space-y-4 text-left">
                    <div className="space-y-1">
                      <h3 className="text-lg font-bold text-slate-100 tracking-wide">
                        {member.name}
                      </h3>
                      <span className="block text-xs font-mono font-medium tracking-wide text-teal-400 uppercase">
                        {role}
                      </span>
                    </div>

                    <p className="text-xs text-slate-400 leading-relaxed">
                      {bio}
                    </p>

                    {/* Checkmark features of quality */}
                    <div className="space-y-1.5 pt-2">
                      <div className="flex items-center gap-2 text-[11px] text-slate-300">
                        <Check className="w-3.5 h-3.5 text-teal-400 shrink-0" />
                        <span>Accepting new patient bookings</span>
                      </div>
                      <div className="flex items-center gap-2 text-[11px] text-slate-300">
                        <Check className="w-3.5 h-3.5 text-teal-400 shrink-0" />
                        <span>Fluent in multi-language care</span>
                      </div>
                    </div>
                  </div>

                  {/* Direct Book Specialist Action */}
                  <button
                    onClick={() => onBookDentist(member.id)}
                    className="w-full flex items-center justify-center gap-1.5 py-3 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-800 hover:border-slate-700 text-slate-200 hover:text-white text-xs font-bold transition-all"
                  >
                    <Calendar className="w-4 h-4 text-sky-400" />
                    <span>Book with {member.name.split(' ')[1]}</span>
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

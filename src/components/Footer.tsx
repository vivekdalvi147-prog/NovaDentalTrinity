import { Calendar, Heart, Shield, HelpCircle, Phone, MapPin } from 'lucide-react';
import { Language, SERVICES_LIST, TRANSLATIONS } from '../types';

interface FooterProps {
  currentLang: Language;
  onNavigate: (sectionId: string) => void;
  onOpenPrivacyModal: () => void;
  onOpenTermsModal: () => void;
}

export default function Footer({ currentLang, onNavigate, onOpenPrivacyModal, onOpenTermsModal }: FooterProps) {
  const t = TRANSLATIONS[currentLang];

  const handleServiceClick = (serviceId: string) => {
    // Navigate to contact and focus / fill is triggered by component state
    onNavigate('services');
  };

  return (
    <footer className="bg-slate-950 border-t border-slate-900 pt-20 pb-10 text-left text-slate-400 font-sans">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        
        {/* Main Columns Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 pb-16 border-b border-slate-900">
          
          {/* Col 1: Brand intro (Size: 4) */}
          <div className="lg:col-span-4 space-y-6">
            <div className="flex items-center space-x-2">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-teal-500 to-sky-600 flex items-center justify-center text-white font-bold">
                N
              </div>
              <span className="font-sans text-base font-bold text-slate-100 tracking-wider uppercase">
                Nova Dental Trinity
              </span>
            </div>

            <p className="text-xs text-slate-400 leading-relaxed font-sans font-medium">
              A luxury boutique dental environment. We provide standard general, cosmetic, emergency, and implant oral medicine across Tampa Bay. Fluent in multilingual care for English, Portuguese, and Spanish families.
            </p>

            <div className="flex items-center gap-1 text-[11px] font-medium text-teal-400">
              <Shield className="w-4 h-4 shrink-0" />
              <span>Full compliance with ADA & OSHA Standards</span>
            </div>
          </div>

          {/* Col 2: Services Quick Links (Size: 3) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs font-bold text-slate-100 uppercase tracking-widest font-mono">
              Core Treatments
            </h4>
            <ul className="space-y-2.5 text-xs">
              {SERVICES_LIST.slice(0, 5).map((service) => {
                const title = t.services[service.id].title;
                return (
                  <li key={service.id}>
                    <button
                      onClick={() => handleServiceClick(service.id)}
                      className="hover:text-teal-400 hover:underline transition-all text-left"
                    >
                      {title}
                    </button>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Col 3: Navigation Quick Links (Size: 2) */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-xs font-bold text-slate-100 uppercase tracking-widest font-mono">
              Quick Navigation
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li>
                <button onClick={() => onNavigate('home')} className="hover:text-teal-400 hover:underline transition-colors">{t.nav.home}</button>
              </li>
              <li>
                <button onClick={() => onNavigate('about')} className="hover:text-teal-400 hover:underline transition-colors">{t.nav.about}</button>
              </li>
              <li>
                <button onClick={() => onNavigate('services')} className="hover:text-teal-400 hover:underline transition-colors">{t.nav.services}</button>
              </li>
              <li>
                <button onClick={() => onNavigate('team')} className="hover:text-teal-400 hover:underline transition-colors">{t.nav.team}</button>
              </li>
              <li>
                <button onClick={() => onNavigate('gallery')} className="hover:text-teal-400 hover:underline transition-colors">{t.nav.gallery}</button>
              </li>
              <li>
                <button onClick={() => onNavigate('testimonials')} className="hover:text-teal-400 hover:underline transition-colors">{t.nav.testimonials}</button>
              </li>
            </ul>
          </div>

          {/* Col 4: Dual Branches Info (Size: 3) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs font-bold text-slate-100 uppercase tracking-widest font-mono">
              Contact Concierge
            </h4>
            
            <div className="space-y-4 text-xs">
              {/* Branch 1 */}
              <div className="flex gap-2">
                <MapPin className="w-4 h-4 text-teal-400 shrink-0 mt-0.5" />
                <div>
                  <span className="block font-bold text-slate-300 uppercase text-[10px] tracking-wide">Trinity Office:</span>
                  <p className="text-slate-400 mt-0.5">{t.common.address1}</p>
                  <a href="tel:7278356001" className="text-teal-400 mt-1 block font-mono hover:underline font-semibold">(727) 835-6001</a>
                </div>
              </div>

              {/* Branch 2 */}
              <div className="flex gap-2">
                <MapPin className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
                <div>
                  <span className="block font-bold text-slate-300 uppercase text-[10px] tracking-wide">NPR Office:</span>
                  <p className="text-slate-400 mt-0.5">{t.common.address2}</p>
                  <a href="tel:7274390885" className="text-sky-400 mt-1 block font-mono hover:underline font-semibold">(727) 439-0885</a>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom micro-bar (Privacy, Terms, and Credits) */}
        <div className="pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs">
          
          <div className="text-center md:text-left">
            <p>&copy; {new Date().getFullYear()} Nova Dental Trinity. {t.common.allRightsReserved}</p>
            <p className="text-[10px] text-slate-500 mt-1 font-mono">Certified Dental Surgeons FL License #DN184592 • ADA Member</p>
          </div>

          {/* Legal Dialog triggers */}
          <div className="flex flex-wrap justify-center gap-6 text-slate-400">
            <button
              onClick={onOpenPrivacyModal}
              className="hover:text-teal-400 hover:underline transition-colors text-[11px] font-mono uppercase"
            >
              Privacy Policy
            </button>
            <button
              onClick={onOpenTermsModal}
              className="hover:text-teal-400 hover:underline transition-colors text-[11px] font-mono uppercase"
            >
              Terms & Conditions
            </button>
          </div>

          {/* Loving developer trace */}
          <div className="flex flex-col sm:flex-row items-center gap-2 text-[11px] text-slate-500 font-mono text-center sm:text-left">
            <span className="flex items-center gap-1">
              Made with <Heart className="w-3 h-3 text-teal-400 fill-current animate-pulse" /> for healthy smiles
            </span>
            <span className="hidden sm:inline text-slate-800">|</span>
            <span>Developed by <span className="text-teal-400 font-semibold">Vivek Dalvi</span></span>
          </div>

        </div>

      </div>
    </footer>
  );
}

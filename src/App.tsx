import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Shield, FileText, CheckCircle, Trash2, Calendar, Sparkles, X, Info } from 'lucide-react';
import { Language, Appointment, TRANSLATIONS, SERVICES_LIST, TEAM_LIST } from './types';

// Components
import LoadingScreen from './components/LoadingScreen';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Team from './components/Team';
import Gallery from './components/Gallery';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import FloatingActions from './components/FloatingActions';
import Footer from './components/Footer';

export default function App() {
  // Multilingual State
  const [currentLang, setCurrentLang] = useState<Language>(() => {
    const saved = localStorage.getItem('nova_lang');
    return (saved === 'en' || saved === 'es' || saved === 'pt') ? saved : 'en';
  });

  const t = TRANSLATIONS[currentLang];

  // Scroll active section tracking
  const [activeSection, setActiveSection] = useState('home');

  // Booking preselections
  const [preselectedServiceId, setPreselectedServiceId] = useState<string | null>(null);
  const [preselectedDentistId, setPreselectedDentistId] = useState<string | null>(null);

  // Appointments DB
  const [appointments, setAppointments] = useState<Appointment[]>(() => {
    const saved = localStorage.getItem('nova_appointments');
    return saved ? JSON.parse(saved) : [];
  });

  // Modal displays
  const [isPrivacyOpen, setIsPrivacyOpen] = useState(false);
  const [isTermsOpen, setIsTermsOpen] = useState(false);
  const [isBookingsModalOpen, setIsBookingsModalOpen] = useState(false);

  // Sync state to local storages
  useEffect(() => {
    localStorage.setItem('nova_lang', currentLang);
  }, [currentLang]);

  useEffect(() => {
    localStorage.setItem('nova_appointments', JSON.stringify(appointments));
  }, [appointments]);

  // Section highlighters on scroll
  useEffect(() => {
    const sections = ['home', 'about', 'services', 'team', 'gallery', 'testimonials', 'faq', 'contact'];
    
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200; // Offset for sticky header
      
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Custom Navigation Action
  const handleNavigate = (sectionId: string) => {
    setActiveSection(sectionId);
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Pre-fill triggers
  const handleBookService = (serviceId: string) => {
    setPreselectedServiceId(serviceId);
    handleNavigate('contact');
  };

  const handleBookDentist = (dentistId: string) => {
    setPreselectedDentistId(dentistId);
    handleNavigate('contact');
  };

  // Appointment Actions
  const handleAddAppointment = (appt: Omit<Appointment, 'id' | 'createdAt' | 'status'>) => {
    const newAppt: Appointment = {
      ...appt,
      id: `appt-${Date.now()}`,
      status: 'confirmed',
      createdAt: new Date().toISOString().split('T')[0]
    };
    setAppointments(prev => [...prev, newAppt]);
  };

  const handleCancelAppointment = (id: string) => {
    setAppointments(prev =>
      prev.map(item => item.id === id ? { ...item, status: 'cancelled' } : item)
    );
  };

  const activeBookingsCount = appointments.filter(a => a.status === 'confirmed').length;

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 selection:bg-teal-500 selection:text-slate-950">
      
      {/* 1. Animated Preloader screen */}
      <LoadingScreen />

      {/* 2. Sticky multilingual navigation header */}
      <Navbar
        currentLang={currentLang}
        onLangChange={setCurrentLang}
        onNavigate={handleNavigate}
        activeSection={activeSection}
        onOpenBookingsModal={() => setIsBookingsModalOpen(true)}
        activeBookingsCount={activeBookingsCount}
      />

      {/* 3. Main Clinical Landing Sections */}
      <main>
        {/* Hero */}
        <Hero currentLang={currentLang} onNavigate={handleNavigate} />

        {/* About & Why Choose us */}
        <About currentLang={currentLang} />

        {/* Interactive Services panel grids */}
        <Services currentLang={currentLang} onBookService={handleBookService} />

        {/* Doctor profiles & credentials */}
        <Team currentLang={currentLang} onBookDentist={handleBookDentist} />

        {/* High contrast visual portfolio gallery */}
        <Gallery currentLang={currentLang} />

        {/* Patient Reviews bricks */}
        <Testimonials currentLang={currentLang} />

        {/* Interactive accordion FAQ and text-search */}
        <FAQ currentLang={currentLang} />

        {/* Real schedule portal, dual offices cards, and glow map */}
        <Contact
          currentLang={currentLang}
          preselectedServiceId={preselectedServiceId}
          preselectedDentistId={preselectedDentistId}
          onClearPreselections={() => {
            setPreselectedServiceId(null);
            setPreselectedDentistId(null);
          }}
          appointments={appointments}
          onAddAppointment={handleAddAppointment}
          onCancelAppointment={handleCancelAppointment}
        />
      </main>

      {/* 4. Luxury Footer */}
      <Footer
        currentLang={currentLang}
        onNavigate={handleNavigate}
        onOpenPrivacyModal={() => setIsPrivacyOpen(true)}
        onOpenTermsModal={() => setIsTermsOpen(true)}
      />

      {/* 5. Floating Call & WhatsApp Widgets */}
      <FloatingActions currentLang={currentLang} />


      {/* Modal A: Patients Bookings Cabinet */}
      <AnimatePresence>
        {isBookingsModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsBookingsModalOpen(false)}
              className="absolute inset-0 bg-slate-950/80 backdrop-blur-md"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="relative bg-slate-900 border border-slate-800 rounded-3xl p-6 md:p-8 max-w-2xl w-full max-h-[80vh] overflow-y-auto shadow-2xl z-10 text-left font-sans"
            >
              <button
                onClick={() => setIsBookingsModalOpen(false)}
                className="absolute top-4 right-4 p-2 rounded-xl bg-slate-950 border border-slate-800 text-slate-400 hover:text-white transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="space-y-4 mb-6">
                <span className="text-teal-400 text-[10px] font-mono tracking-widest uppercase font-bold">Patient Cabinet</span>
                <h3 className="text-xl md:text-2xl font-extrabold text-white tracking-tight flex items-center gap-2">
                  <Calendar className="w-6 h-6 text-teal-400" />
                  {t.common.viewAppts}
                </h3>
                <p className="text-xs text-slate-400 font-sans leading-normal">
                  Your requests are registered locally. Our concierge desk reviews and calls to lock in exact requested times within 2 hours.
                </p>
              </div>

              {appointments.length > 0 ? (
                <div className="space-y-4 pt-2">
                  {appointments.map((appt) => {
                    const svc = SERVICES_LIST.find(s => s.id === appt.serviceId);
                    const serviceTitle = svc ? t.services[svc.id].title : 'Dental Care';
                    const doc = TEAM_LIST.find(d => d.id === appt.dentistId);
                    const docName = doc ? doc.name.split(',')[0] : 'Dentist';

                    return (
                      <div
                        key={appt.id}
                        className={`p-4.5 rounded-2xl border flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 ${
                          appt.status === 'confirmed'
                            ? 'bg-slate-950 border-slate-850'
                            : 'bg-slate-950/40 border-slate-900 opacity-60'
                        }`}
                      >
                        <div className="space-y-2">
                          <div className="flex items-center gap-2">
                            <span className="text-xs font-extrabold text-white">{appt.name}</span>
                            <span className="text-slate-700">•</span>
                            <span className="text-[10px] font-mono font-bold uppercase text-sky-400 bg-sky-950/30 px-2 py-0.5 rounded-md border border-sky-900/30">
                              {serviceTitle}
                            </span>
                          </div>

                          <div className="text-xs text-slate-400 font-mono space-y-0.5">
                            <p>Specialist: <span className="text-slate-300 font-semibold">{docName}</span></p>
                            <p>Preferred: <span className="text-teal-400 font-semibold uppercase">{appt.date} • {appt.time === 'morning' ? 'Morning Slot' : 'Afternoon Slot'}</span></p>
                          </div>
                        </div>

                        <div className="flex items-center gap-3 w-full sm:w-auto justify-end border-t border-slate-900 pt-3 sm:border-0 sm:pt-0">
                          {appt.status === 'confirmed' ? (
                            <>
                              <span className="text-[9px] px-2.5 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-900/20 uppercase font-mono font-bold flex items-center gap-1">
                                <CheckCircle className="w-3 h-3" /> Requested
                              </span>
                              <button
                                onClick={() => handleCancelAppointment(appt.id)}
                                className="text-xs text-rose-400 hover:text-rose-300 font-bold flex items-center gap-1 transition-colors pl-2 py-1"
                              >
                                <Trash2 className="w-3.5 h-3.5" />
                                <span>Cancel</span>
                              </button>
                            </>
                          ) : (
                            <span className="text-[10px] text-slate-500 font-mono italic uppercase">Cancelled</span>
                          )}
                        </div>
                      </div>
                    );
                  })}
                </div>
              ) : (
                <div className="py-12 text-center rounded-2xl bg-slate-950/40 border border-slate-850/60 flex flex-col items-center justify-center space-y-3">
                  <Calendar className="w-8 h-8 text-slate-600" />
                  <p className="text-xs text-slate-400 font-mono">No appointments scheduled yet. Let's design your perfect smile!</p>
                  <button
                    onClick={() => {
                      setIsBookingsModalOpen(false);
                      handleNavigate('contact');
                    }}
                    className="text-xs font-bold text-teal-400 hover:underline"
                  >
                    Schedule Now
                  </button>
                </div>
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Modal B: Privacy Policy Dialog */}
      <AnimatePresence>
        {isPrivacyOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsPrivacyOpen(false)}
              className="absolute inset-0 bg-slate-950/80 backdrop-blur-md"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="relative bg-slate-900 border border-slate-800 rounded-3xl p-6 md:p-8 max-w-xl w-full max-h-[75vh] overflow-y-auto shadow-2xl z-10 text-left font-sans"
            >
              <button
                onClick={() => setIsPrivacyOpen(false)}
                className="absolute top-4 right-4 p-2 rounded-xl bg-slate-950 border border-slate-800 text-slate-400 hover:text-white transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="space-y-4 mb-6">
                <span className="text-teal-400 text-[10px] font-mono tracking-widest uppercase font-bold">Legal Compliance</span>
                <h3 className="text-xl font-extrabold text-white tracking-tight flex items-center gap-2">
                  <Shield className="w-5.5 h-5.5 text-teal-400" />
                  HIPAA Privacy Policy
                </h3>
              </div>

              <div className="space-y-5 text-slate-300 text-xs md:text-sm leading-relaxed scrollbar-thin">
                <p className="text-slate-400 font-semibold font-mono">Last Updated: July 14, 2026</p>
                <p>
                  At Nova Dental Trinity, we prioritize patient confidentiality. In strict compliance with the **Health Insurance Portability and Accountability Act (HIPAA)**, we protect all Protected Health Information (PHI) entered on this scheduling portal.
                </p>
                
                <h4 className="font-bold text-slate-200">1. Information We Collect</h4>
                <p>
                  We collect names, emails, phone numbers, requested dental treatments, preferred specialists, and scheduling dates. This details are only utilized to coordinate clinical appointments and process insurance coverage.
                </p>

                <h4 className="font-bold text-slate-200">2. Secure Handling & Storage</h4>
                <p>
                  All scheduling data is stored securely using advanced server security. No information is sold, leased, or shared with third-party advertising companies. Your local data remains under your absolute control via standard web storage.
                </p>

                <h4 className="font-bold text-slate-200">3. Contact Inquiries</h4>
                <p>
                  If you have concerns regarding our medical records security protocols, please reach out to our Compliance Officer at **(727) 835-6001** or email **privacy@novadentaltrinity.com**.
                </p>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Modal C: Terms & Conditions Dialog */}
      <AnimatePresence>
        {isTermsOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsTermsOpen(false)}
              className="absolute inset-0 bg-slate-950/80 backdrop-blur-md"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="relative bg-slate-900 border border-slate-800 rounded-3xl p-6 md:p-8 max-w-xl w-full max-h-[75vh] overflow-y-auto shadow-2xl z-10 text-left font-sans"
            >
              <button
                onClick={() => setIsTermsOpen(false)}
                className="absolute top-4 right-4 p-2 rounded-xl bg-slate-950 border border-slate-800 text-slate-400 hover:text-white transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="space-y-4 mb-6">
                <span className="text-sky-400 text-[10px] font-mono tracking-widest uppercase font-bold">Policy Agreements</span>
                <h3 className="text-xl font-extrabold text-white tracking-tight flex items-center gap-2">
                  <FileText className="w-5.5 h-5.5 text-sky-400" />
                  Terms & Conditions
                </h3>
              </div>

              <div className="space-y-5 text-slate-300 text-xs md:text-sm leading-relaxed scrollbar-thin">
                <p className="text-slate-400 font-semibold font-mono">Last Updated: July 14, 2026</p>
                <p>
                  By accessing and submitting requests on the **Nova Dental Trinity** portal, you agree to comply with our general clinic treatment policies outlined below.
                </p>

                <h4 className="font-bold text-slate-200">1. Pre-appointment Requests</h4>
                <p>
                  Any appointment booked via this application is a "preferred slot request". Our receptionists will reach out to verify, synchronize with dental insurance (PPO), and establish formal booking confirmation.
                </p>

                <h4 className="font-bold text-slate-200">2. Cancellation Policy</h4>
                <p>
                  We strive to respect all patients’ time. We request a **24-hour advanced notice** if you need to reschedule or cancel your booked slot, to avoid a standard late cancellation fee.
                </p>

                <h4 className="font-bold text-slate-200">3. Insurance & Payments</h4>
                <p>
                  Patients are responsible for co-payments or deductibles. We offer CareCredit and Proceed Finance, which must be approved prior to launching surgical or restorative treatments.
                </p>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </div>
  );
}


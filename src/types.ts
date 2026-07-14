export type Language = 'en' | 'es' | 'pt';

export interface Service {
  id: string;
  iconName: string;
  titleKey: string; // Key in translations
  shortDescKey: string;
  detailedDescKey: string;
  duration: string;
  priceRange: string;
}

export interface TeamMember {
  id: string;
  name: string;
  roleKey: string;
  bioKey: string;
  image: string;
  experience: string;
}

export interface Testimonial {
  id: string;
  name: string;
  rating: number;
  treatmentKey: string;
  textKey: string;
  image: string;
  date: string;
}

export interface FAQItem {
  id: string;
  questionKey: string;
  answerKey: string;
  category: 'general' | 'treatments' | 'payment';
}

export interface GalleryItem {
  id: string;
  category: 'clinic' | 'tech' | 'patients';
  image: string;
  altKey: string;
}

export interface Appointment {
  id: string;
  name: string;
  email: string;
  phone: string;
  serviceId: string;
  dentistId: string;
  date: string;
  time: string;
  message?: string;
  status: 'confirmed' | 'cancelled';
  createdAt: string;
}

export const SERVICES_LIST: Service[] = [
  {
    id: 'implants',
    iconName: 'Shield',
    titleKey: 'services.implants.title',
    shortDescKey: 'services.implants.short',
    detailedDescKey: 'services.implants.detailed',
    duration: '60-120 min',
    priceRange: '$$$$'
  },
  {
    id: 'crowns',
    iconName: 'Sparkles',
    titleKey: 'services.crowns.title',
    shortDescKey: 'services.crowns.short',
    detailedDescKey: 'services.crowns.detailed',
    duration: '45-90 min',
    priceRange: '$$$'
  },
  {
    id: 'rootcanal',
    iconName: 'Activity',
    titleKey: 'services.rootcanal.title',
    shortDescKey: 'services.rootcanal.short',
    detailedDescKey: 'services.rootcanal.detailed',
    duration: '60-90 min',
    priceRange: '$$$'
  },
  {
    id: 'general',
    iconName: 'HeartPulse',
    titleKey: 'services.general.title',
    shortDescKey: 'services.general.short',
    detailedDescKey: 'services.general.detailed',
    duration: '30-60 min',
    priceRange: '$$'
  },
  {
    id: 'cleaning',
    iconName: 'Sparkle',
    titleKey: 'services.cleaning.title',
    shortDescKey: 'services.cleaning.short',
    detailedDescKey: 'services.cleaning.detailed',
    duration: '45 min',
    priceRange: '$'
  },
  {
    id: 'whitening',
    iconName: 'Sun',
    titleKey: 'services.whitening.title',
    shortDescKey: 'services.whitening.short',
    detailedDescKey: 'services.whitening.detailed',
    duration: '60 min',
    priceRange: '$$'
  },
  {
    id: 'veneers',
    iconName: 'Gem',
    titleKey: 'services.veneers.title',
    shortDescKey: 'services.veneers.short',
    detailedDescKey: 'services.veneers.detailed',
    duration: '90-120 min',
    priceRange: '$$$$'
  },
  {
    id: 'emergency',
    iconName: 'Flame',
    titleKey: 'services.emergency.title',
    shortDescKey: 'services.emergency.short',
    detailedDescKey: 'services.emergency.detailed',
    duration: '30-60 min',
    priceRange: '$$'
  },
  {
    id: 'cosmetic',
    iconName: 'Smile',
    titleKey: 'services.cosmetic.title',
    shortDescKey: 'services.cosmetic.short',
    detailedDescKey: 'services.cosmetic.detailed',
    duration: '45-90 min',
    priceRange: '$$$'
  },
  {
    id: 'family',
    iconName: 'Users',
    titleKey: 'services.family.title',
    shortDescKey: 'services.family.short',
    detailedDescKey: 'services.family.detailed',
    duration: '45-60 min',
    priceRange: '$$'
  }
];

export const TEAM_LIST: TeamMember[] = [
  {
    id: 'dr-marcos',
    name: 'Dr. Marcos S. Silva, DDS',
    roleKey: 'team.dr-marcos.role',
    bioKey: 'team.dr-marcos.bio',
    image: 'https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&w=600&q=80',
    experience: '16 Years'
  },
  {
    id: 'dr-elena',
    name: 'Dr. Elena Rostova, DMD',
    roleKey: 'team.dr-elena.role',
    bioKey: 'team.dr-elena.bio',
    image: 'https://images.unsplash.com/photo-1594824813573-246434e33963?auto=format&fit=crop&w=600&q=80',
    experience: '12 Years'
  },
  {
    id: 'sarah-hygienist',
    name: 'Sarah Jenkins, RDH',
    roleKey: 'team.sarah.role',
    bioKey: 'team.sarah.bio',
    image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=600&q=80',
    experience: '8 Years'
  }
];

export const GALLERY_LIST: GalleryItem[] = [
  {
    id: 'g1',
    category: 'clinic',
    image: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=1200&q=80',
    altKey: 'gallery.item1.alt'
  },
  {
    id: 'g2',
    category: 'tech',
    image: 'https://images.unsplash.com/photo-1579684389782-64d84b5e901a?auto=format&fit=crop&w=800&q=80',
    altKey: 'gallery.item2.alt'
  },
  {
    id: 'g3',
    category: 'patients',
    image: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=800&q=80',
    altKey: 'gallery.item3.alt'
  },
  {
    id: 'g4',
    category: 'clinic',
    image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=1200&q=80',
    altKey: 'gallery.item4.alt'
  },
  {
    id: 'g5',
    category: 'tech',
    image: 'https://images.unsplash.com/photo-1461530751191-4536752da2b4?auto=format&fit=crop&w=800&q=80',
    altKey: 'gallery.item5.alt'
  },
  {
    id: 'g6',
    category: 'patients',
    image: 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=800&q=80',
    altKey: 'gallery.item6.alt'
  }
];

export const TESTIMONIALS_LIST: Testimonial[] = [
  {
    id: 't1',
    name: 'Carolina M.',
    rating: 5,
    treatmentKey: 'services.implants.title',
    textKey: 'testimonials.t1.text',
    image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=200&q=80',
    date: '2026-05-10'
  },
  {
    id: 't2',
    name: 'Carlos R.',
    rating: 5,
    treatmentKey: 'services.veneers.title',
    textKey: 'testimonials.t2.text',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80',
    date: '2026-06-15'
  },
  {
    id: 't3',
    name: 'Aline S.',
    rating: 5,
    treatmentKey: 'services.whitening.title',
    textKey: 'testimonials.t3.text',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&q=80',
    date: '2026-07-02'
  },
  {
    id: 't4',
    name: 'Robert K.',
    rating: 5,
    treatmentKey: 'services.emergency.title',
    textKey: 'testimonials.t4.text',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80',
    date: '2026-07-11'
  }
];

export const FAQS_LIST: FAQItem[] = [
  {
    id: 'faq-1',
    questionKey: 'faq.q1.question',
    answerKey: 'faq.q1.answer',
    category: 'general'
  },
  {
    id: 'faq-2',
    questionKey: 'faq.q2.question',
    answerKey: 'faq.q2.answer',
    category: 'treatments'
  },
  {
    id: 'faq-3',
    questionKey: 'faq.q3.question',
    answerKey: 'faq.q3.answer',
    category: 'payment'
  },
  {
    id: 'faq-4',
    questionKey: 'faq.q4.question',
    answerKey: 'faq.q4.answer',
    category: 'treatments'
  },
  {
    id: 'faq-5',
    questionKey: 'faq.q5.question',
    answerKey: 'faq.q5.answer',
    category: 'general'
  }
];

export const TRANSLATIONS: Record<Language, any> = {
  en: {
    common: {
      phone1: '(727) 835-6001',
      phone2: '(727) 439-0885',
      address1: '3203 Trinity Blvd, Trinity, FL 34655',
      address2: '4122 Rowan Rd, New Port Richey, FL 34653',
      branches: 'Our Branches',
      trinityBranch: 'Trinity Main Office',
      nprBranch: 'New Port Richey Office',
      openHours: 'Mon - Fri: 8:00 AM - 5:00 PM',
      satHours: 'Saturday: By Appointment Only',
      sunHours: 'Sunday: Closed',
      allRightsReserved: 'All rights reserved.',
      learnMore: 'Learn More',
      close: 'Close',
      submitting: 'Booking your slot...',
      success: 'Appointment Requested!',
      successMsg: 'Thank you! Our concierge team will call you within 2 hours to confirm your absolute preferred time.',
      requiredError: 'Please fill in all fields with asterisks (*).',
      activeStatus: 'Confirmed Request',
      cancelledStatus: 'Cancelled',
      cancelAppt: 'Cancel Appointment',
      viewAppts: 'My Booked Appointments',
      whatsAppFloat: 'Chat with Us on WhatsApp',
      callFloat: 'Call our Clinic'
    },
    nav: {
      home: 'Home',
      about: 'About',
      services: 'Services',
      team: 'Meet Our Team',
      testimonials: 'Reviews',
      gallery: 'Gallery',
      faq: 'FAQ',
      contact: 'Contact',
      bookNow: 'Book Appointment'
    },
    hero: {
      headline: 'Healthy Smiles Start Here',
      subtitle: 'Providing advanced dental care with modern technology, gentle treatments, and personalized care for the entire family.',
      bookCTA: 'Book Appointment',
      callCTA: 'Call Now',
      satisfactionRate: 'Patient Satisfaction',
      yearsExp: 'Years of Smiles',
      happyPatients: 'Happy Patients',
      branchesCount: 'Modern Branches'
    },
    about: {
      title: 'Welcome to Nova Dental Trinity',
      subtitle: 'Where Premium Technology Meets Gentle, Trustworthy Care',
      p1: 'At Nova Dental Trinity, we believe a visit to the dentist should be restorative, luxurious, and completely stress-free. Our boutique clinic blends advanced general, cosmetic, and emergency dental science with an atmosphere of absolute comfort and calm.',
      p2: 'Whether you need a routine preventative cleaning, customized dental implants, or a transformative smile design, Dr. Marcos Silva, Dr. Elena Rostova, and our expert staff treat you like family. We proudly serve our patients in English, Portuguese (Português), and Spanish (Español).',
      whyTitle: 'Why Choose Us',
      whySubtitle: 'An elevated approach to standard oral medicine, dedicated to patient comfort and structural precision.',
      features: {
        dentists: {
          title: 'Experienced Dentists',
          desc: 'Our specialized clinicians bring over 25+ combined years of continuing dental surgery education.'
        },
        equipment: {
          title: 'Modern Equipment',
          desc: 'We utilize low-radiation 3D digital X-rays, intraoral scanners, and micro-dentistry machinery.'
        },
        gentle: {
          title: 'Gentle & Comfortable Care',
          desc: 'Equipped with memory foam chairs, warm blankets, and painless anesthesia injection tools.'
        },
        personalized: {
          title: 'Personalized Treatment',
          desc: 'We map out custom wellness paths with crystal-clear treatment stages and detailed cost analysis.'
        },
        flexible: {
          title: 'Flexible Appointments',
          desc: 'Offering early morning, evening, and weekend booking blocks to seamlessly fit your calendar.'
        },
        affordable: {
          title: 'Affordable Payment Options',
          desc: 'We accept all major PPO insurance plans, CareCredit financing, and custom in-house discount clubs.'
        }
      }
    },
    services: {
      title: 'Our Premium Services',
      subtitle: 'Explore our full spectrum of state-of-the-art general, cosmetic, and restorative dental treatments.',
      durationLabel: 'Duration:',
      costLabel: 'Cost Tier:',
      stepsLabel: 'Expected Stages of Care',
      recoveryLabel: 'Typical Recovery Window',
      benefitsLabel: 'Core Clinical Benefits',
      bookThis: 'Book this Treatment',
      implants: {
        title: 'Dental Implants',
        short: 'Permanent, premium titanium dental roots that look, feel, and function exactly like natural teeth.',
        detailed: 'Dental implants are the gold standard for missing teeth. A biocompatible titanium post is gently placed into the jawbone, acting as a structural anchor for a custom hand-milled ceramic crown. This process fully restores chewing force, prevents facial bone loss, and preserves neighboring teeth.',
        stages: ['Comprehensive 3D Scan & Digital Mapping', 'Biocompatible Implant Post Placement', 'Healing Period (Osseointegration)', 'Custom Porcelain Abutment & Crown Fitting'],
        recovery: '3 - 7 days for minor discomfort, total bone integration in 3-4 months.',
        benefits: ['Stops natural bone absorption & facial sagging', 'Lasts a lifetime with proper oral hygiene', 'Restores full 100% biting strength']
      },
      crowns: {
        title: 'Dental Crowns',
        short: 'Custom-fit, metal-free porcelain caps engineered to restore and strengthen compromised teeth.',
        detailed: 'Nova dental crowns are individually crafted from top-tier dental porcelain or zirconia. This treatment completely encases a cracked, decayed, or root-canaled tooth, restoring its original anatomical structure, color, and lasting durability.',
        stages: ['Decay removal & conservative tooth shaping', 'High-precision digital optical impression', 'Temporary crown placement for immediate cover', 'Permanent medical-grade ceramic crown placement'],
        recovery: 'Virtually instant. Minor temperature sensitivity for 48 hours.',
        benefits: ['Protects weakened teeth from fracturing further', 'Seamless visual integration with neighboring enamel', 'Durability of 15+ years with custom dental ceramic']
      },
      rootcanal: {
        title: 'Root Canal Treatment',
        short: 'Advanced, pain-free endodontic therapy designed to save deeply infected teeth from extraction.',
        detailed: 'A root canal is a crucial, tooth-saving procedure. By carefully removing infected, inflamed dental pulp from inside the tooth canal, cleaning and sealing the interior chamber, we instantly alleviate dental pain and eliminate harmful bacterial colonies.',
        stages: ['Local localized pain block & isolation', 'Microscope-guided access to the inner pulp', 'Thorough irrigation and sanitizing of neural canals', 'Sterile filling with gutta-percha & temporary seal'],
        recovery: '1 - 3 days. Any tender feelings are easily managed with mild OTC relief.',
        benefits: ['Direct, immediate termination of throbbing dental pain', 'Saves the natural tooth and prevents jaw bone atrophy', 'Eliminates systemic bacterial infections in the jaw']
      },
      general: {
        title: 'General Dentistry',
        short: 'Comprehensive checkups, digital diagnostics, cavity fillings, and full oral health assessments.',
        detailed: 'The foundation of lifelong oral health. Our general dentistry services include comprehensive oral cancer screenings, digital high-resolution radiographs, tooth-colored composite fillings, and complete preventative guidance for patients of all ages.',
        stages: ['Complete digital dental charting', 'High-resolution bite-wing digital diagnostics', 'Ultrasonic tartar removal & scaling', 'Conservative tooth-colored filling application'],
        recovery: 'Instant. No downtime required.',
        benefits: ['Early detection of oral cancer and bone disease', 'Elimination of tooth decay via biocompatible white composites', 'Protects systemic cardiac and diabetic health']
      },
      cleaning: {
        title: 'Teeth Cleaning',
        short: 'Deep prophylaxis treatments that eliminate stubborn plaque and restore gum health.',
        detailed: 'Professional hygiene therapy is crucial for avoiding periodontal (gum) disease. Our hygienists use painless ultrasonic scalers to strip away accumulated hard calculus, polish away external organic stains, and deliver restorative fluoride minerals.',
        stages: ['Periodontal pocket measurement', 'Ultrasonic scaling of teeth above and below gumline', 'Air-flow fine polishing to eradicate coffee/tea stains', 'Fortifying mineral paint application'],
        recovery: 'Immediate. Teeth feel refreshingly smooth and clean.',
        benefits: ['Halts bleeding gums and active gingivitis', 'Guarantees fresh breath (combats halitosis)', 'Reverses early surface enamel demineralization']
      },
      whitening: {
        title: 'Teeth Whitening',
        short: 'Advanced professional whitening systems that safely brighten smiles up to 8 shades in an hour.',
        detailed: 'Dull, stained, or aged teeth are dramatically revitalized using our clinical-grade in-office bleaching systems. We apply a protective barrier over sensitive gums, apply a specialized pH-balanced hydrogen peroxide gel, and accelerate the process with a safe therapeutic light.',
        stages: ['Shade guide matching & lips isolation', 'Gum protection resin barrier curing', 'Three 15-minute cycles of high-potency bleaching gel', 'Desensitizing mineral wash'],
        recovery: 'None. Slight sensitivity to iced drinks for 24 hours.',
        benefits: ['Removes stubborn coffee, red wine, and smoking stains', 'Safe, non-abrasive formula that protects natural enamel', 'Instant psychological confidence boost']
      },
      veneers: {
        title: 'Porcelain Veneers',
        short: 'Ultra-thin, handmade shells bonded to the front of teeth for a flawless cosmetic smile.',
        detailed: 'Porcelain veneers are the ultimate cosmetic dental upgrade. Individually tailored to your ideal shape, symmetry, and brightness, these durable ceramic shells are securely bonded to the front of your teeth, hiding cracks, gaps, crowding, and permanent discoloration.',
        stages: ['Aesthetic smile consultation & mock-up', 'Minimal, conservative enamel preparation', 'Digital mapping & custom master ceramist crafting', 'Permanent resin-bond cementation and finish'],
        recovery: '2 - 3 days as gums adjust to new margins.',
        benefits: ['Corrects gaps, chips, and crooked teeth instantly', 'Highly resistant to future coffee or nicotine staining', 'Provides an natural-looking Hollywood smile makeover']
      },
      emergency: {
        title: 'Emergency Dental Care',
        short: 'Immediate, same-day relief for toothaches, knocked-out teeth, jaw injuries, or broken restorations.',
        detailed: 'We dedicate priority booking slots daily to handle dental crises immediately. If you have a severe toothache, bleeding, a knocked-out tooth, or a broken crown, our team is equipped to diagnose and relieve your severe pain on the exact same day.',
        stages: ['Immediate clinical emergency examination', 'Focused digital single-tooth X-ray', 'Direct clinical pain-relief therapy', 'Formulation of permanent treatment solution'],
        recovery: 'Varies by emergency type; immediate pain relief is always prioritized.',
        benefits: ['Saves knocked-out teeth if treated within gold hour', 'Prevents dental infections from spreading to face/bloodstream', 'Immediate peace of mind and comfort']
      },
      cosmetic: {
        title: 'Cosmetic Dentistry',
        short: 'Artistic dental enhancements including bonding, contouring, and full smile smile makeovers.',
        detailed: 'Transform your look and confidence with custom cosmetic dentistry. Combining state-of-the-art dental lasers, high-definition bonding resins, and artistic eye-contouring, we craft the beautiful smile you have always envisioned.',
        stages: ['Cosmetic digital smile design photography', 'Aesthetic contour modeling', 'Laser gum lifting or composite bonding', 'High-gloss polishing and bite harmonization'],
        recovery: 'Instant to 24 hours depending on the procedure.',
        benefits: ['Balances facial symmetry and tooth proportions', 'Virtually painless treatments with instant results', 'Uses highly durable, tooth-colored materials']
      },
      family: {
        title: 'Family Dentistry',
        short: 'Caring, educational, and fun dental experiences tailored for infants, children, teens, and seniors.',
        detailed: 'We make family oral health seamless. From a toddler’s first happy dental checkup to modern orthodontic guidance for teenagers and gentle care for aging grandparents, we ensure every generation receives comfortable, stress-free care under one roof.',
        stages: ['Pediatric orientation & happy-visit play', 'Comprehensive developmental jaw growth analysis', 'Painless protective tooth sealants', 'Senior dry-mouth & restoration review'],
        recovery: 'Instant. Children leave with prizes and a smile.',
        benefits: ['Instills positive dental habits early in children', 'Convenient block bookings for entire families together', 'Comprehensive lifetime tracking of oral growth']
      }
    },
    team: {
      title: 'Meet Our Experts',
      subtitle: 'A dedicated team of award-winning dentists, hygienists, and support specialists committed to your care.',
      experience: 'Experience:',
      drMarcos: {
        role: 'Founder & Chief Implantologist',
        bio: 'Dr. Marcos Silva, DDS, received his Doctorate in Dental Surgery with honors. With 16+ years of clinical practice, he specializes in advanced dental implants, full-mouth reconstruction, and minimally invasive bone grafting. He is fluent in English, Spanish, and Portuguese.'
      },
      drElena: {
        role: 'Director of Cosmetic Dentistry',
        bio: 'Dr. Elena Rostova, DMD, is a master of cosmetic smiles. Having designed over 1,500 porcelain veneer makeovers, she blends medical science with true aesthetic artistry. She is active in the American Academy of Cosmetic Dentistry.'
      },
      sarah: {
        role: 'Lead Registered Dental Hygienist',
        bio: 'Sarah is beloved by our patients for her incredibly gentle touch and clinical precision. She specializes in advanced deep cleaning, periodontal health maintenance, and preventative pediatric education.'
      }
    },
    gallery: {
      title: 'Our Clinic Gallery',
      subtitle: 'Take a virtual tour of our premium Trinity and New Port Richey clinical environments, advanced technology, and real happy patient results.',
      tabs: {
        all: 'All Photos',
        clinic: 'Our Clinic',
        tech: 'Technology',
        patients: 'Smiling Patients'
      },
      item1: { alt: 'State-of-the-art patient clinic treatment room' },
      item2: { alt: 'High-definition digital 3D dental scanning suite' },
      item3: { alt: 'Happy patient showing her bright confident smile' },
      item4: { alt: 'Luxury clinic reception desk and check-in lobby' },
      item5: { alt: 'Advanced dental lasers and micro-surgery equipment' },
      item6: { alt: 'A cheerful family sharing healthy smiles' }
    },
    faq: {
      title: 'Frequently Asked Questions',
      subtitle: 'Got questions? We have clear, professional answers. Explore helpful topics or call our team anytime.',
      searchPlaceholder: 'Search FAQs in your language...',
      noResults: 'No FAQs matched your search. Please try other keywords or call our support line!',
      categories: {
        all: 'All Questions',
        general: 'General',
        treatments: 'Treatments',
        payment: 'Payments & Insurance'
      },
      q1: {
        question: 'Are you accepting new patients? Do you take dental insurance?',
        answer: 'Yes! We are absolutely welcoming new patients of all ages. We accept nearly all major PPO dental insurances (such as Delta Dental, Cigna, MetLife, Guardian, and Aetna). Our dedicated concierge team will file all claims for you to maximize your benefits.'
      },
      q2: {
        question: 'What is the recovery period for a dental implant?',
        answer: 'Most patients return to school or normal work activities the very next day! Any slight localized gums tenderness is easily handled with mild ibuprofen. The underlying dental bone takes 3 to 4 months to fully fuse with the biocompatible titanium post, after which we place your permanent ceramic crown.'
      },
      q3: {
        question: 'Do you offer payment plans or financial assistance?',
        answer: 'Absolutely. We believe pristine oral health should be accessible. We offer 0% interest monthly payment options through CareCredit and Proceed Finance. We also offer an exclusive in-house "Nova Wellness Club" which covers all cleanings, X-rays, and grants 15% off all complex restorative procedures.'
      },
      q4: {
        question: 'How often should I get a professional dental cleaning?',
        answer: 'For a healthy adult, we strongly recommend professional cleanings and examinations every 6 months. However, if you show early signs of periodontal gum disease, we may advise cleanings every 3 to 4 months to prevent bone damage and maintain pristine breath.'
      },
      q5: {
        question: 'What languages does your staff speak?',
        answer: 'Nova Dental Trinity is a highly multicultural clinic. Dr. Silva and our nursing staff speak English, Portuguese (Português), and Spanish (Español) fluently. We can conduct your complete dental examination, consent forms, and treatment plans in your preferred language.'
      }
    },
    bookingForm: {
      title: 'Schedule Your Premium Appointment',
      subtitle: 'Book your slot today. Our friendly concierge team will contact you within 2 business hours to finalize your absolute preferred appointment time.',
      labels: {
        fullName: 'Full Name *',
        email: 'Email Address *',
        phone: 'Phone Number *',
        service: 'Select Service *',
        dentist: 'Select Preferred Doctor',
        date: 'Preferred Date *',
        time: 'Preferred Time Block *',
        message: 'Special Requests / Health Concerns',
        submit: 'Schedule Appointment',
        anyDentist: 'Any Available Specialist',
        selectServicePrompt: 'Choose a Treatment...',
        morning: 'Morning (8:00 AM - 12:00 PM)',
        afternoon: 'Afternoon (12:00 PM - 5:00 PM)'
      },
      validation: {
        success: 'Appointment Requested Successfully!',
        msg: 'We have logged your preferred slot in our database. We will reach out shortly to coordinate and confirm.'
      }
    }
  },
  es: {
    common: {
      phone1: '(727) 835-6001',
      phone2: '(727) 439-0885',
      address1: '3203 Trinity Blvd, Trinity, FL 34655',
      address2: '4122 Rowan Rd, New Port Richey, FL 34653',
      branches: 'Nuestras Sucursales',
      trinityBranch: 'Oficina Principal de Trinity',
      nprBranch: 'Oficina de New Port Richey',
      openHours: 'Lun - Vie: 8:00 AM - 5:00 PM',
      satHours: 'Sábado: Solo con Cita Previa',
      sunHours: 'Domingo: Cerrado',
      allRightsReserved: 'Todos los derechos reservados.',
      learnMore: 'Saber Más',
      close: 'Cerrar',
      submitting: 'Reservando su espacio...',
      success: '¡Cita Solicitada!',
      successMsg: '¡Gracias! Nuestro equipo de consejería le llamará en un plazo de 2 horas para confirmar su hora preferida.',
      requiredError: 'Por favor rellene todos los campos con asteriscos (*).',
      activeStatus: 'Solicitud Confirmada',
      cancelledStatus: 'Cancelada',
      cancelAppt: 'Cancelar Cita',
      viewAppts: 'Mis Citas Programadas',
      whatsAppFloat: 'Chatea con nosotros por WhatsApp',
      callFloat: 'Llama a nuestra clínica'
    },
    nav: {
      home: 'Inicio',
      about: 'Nosotros',
      services: 'Servicios',
      team: 'Nuestro Equipo',
      testimonials: 'Reseñas',
      gallery: 'Galería',
      faq: 'Preguntas Frecuentes',
      contact: 'Contacto',
      bookNow: 'Reservar Cita'
    },
    hero: {
      headline: 'Sonrisas Saludables Comienzan Aquí',
      subtitle: 'Ofreciendo atención dental avanzada con tecnología moderna, tratamientos delicados y cuidado personalizado para toda la familia.',
      bookCTA: 'Reservar Cita',
      callCTA: 'Llamar Ahora',
      satisfactionRate: 'Satisfacción del Paciente',
      yearsExp: 'Años de Sonrisas',
      happyPatients: 'Pacientes Felices',
      branchesCount: 'Sucursales Modernas'
    },
    about: {
      title: 'Bienvenidos a Nova Dental Trinity',
      subtitle: 'Donde la Tecnología Premium se Une con un Cuidado Delicado y Confiable',
      p1: 'En Nova Dental Trinity, creemos que una visita al dentista debe ser restauradora, lujosa y completamente libre de estrés. Nuestra clínica boutique combina la ciencia dental general, cosmética y de emergencia más avanzada con una atmósfera de absoluto confort y tranquilidad.',
      p2: 'Ya sea que necesite una limpieza preventiva de rutina, implantes dentales personalizados o un diseño de sonrisa transformador, el Dr. Marcos Silva, la Dra. Elena Rostova y nuestro personal experto lo tratarán como a su familia. Servimos con orgullo a nuestros pacientes en inglés, portugués (Português) y español (Español).',
      whyTitle: 'Por Qué Elegirnos',
      whySubtitle: 'Un enfoque elevado de la medicina oral estándar, dedicado a la comodidad del paciente y la precisión estructural.',
      features: {
        dentists: {
          title: 'Dentistas Experimentados',
          desc: 'Nuestros médicos especialistas aportan más de 25 años de educación continua en cirugía dental combinada.'
        },
        equipment: {
          title: 'Equipamiento Moderno',
          desc: 'Utilizamos radiografías digitales en 3D de baja radiación, escáneres intraorales y maquinaria de microodontología.'
        },
        gentle: {
          title: 'Cuidado Delicado y Cómodo',
          desc: 'Equipado con sillones de espuma viscoelástica, mantas cálidas y herramientas de inyección de anestesia sin dolor.'
        },
        personalized: {
          title: 'Tratamiento Personalizado',
          desc: 'Diseñamos planes de bienestar personalizados con etapas de tratamiento nítidas y un análisis de costos detallado.'
        },
        flexible: {
          title: 'Citas Flexibles',
          desc: 'Ofrecemos bloques de reserva por la mañana temprano, por la tarde y los fines de semana para adaptarnos a su agenda.'
        },
        affordable: {
          title: 'Opciones de Pago Accesibles',
          desc: 'Aceptamos los principales planes de seguro PPO, financiamiento de CareCredit y clubes de descuento internos personalizados.'
        }
      }
    },
    services: {
      title: 'Nuestros Servicios Premium',
      subtitle: 'Explore nuestra gama completa de tratamientos dentales generales, cosméticos y restauradores de última generación.',
      durationLabel: 'Duración:',
      costLabel: 'Nivel de Costo:',
      stepsLabel: 'Etapas Esperadas del Cuidado',
      recoveryLabel: 'Ventana de Recuperación Típica',
      benefitsLabel: 'Beneficios Clínicos Clave',
      bookThis: 'Reservar este Tratamiento',
      implants: {
        title: 'Implantes Dentales',
        short: 'Raíces dentales de titanio premium permanentes que lucen, se sienten y funcionan exactamente como los dientes naturales.',
        detailed: 'Los implantes dentales son el estándar de oro para los dientes perdidos. Se coloca suavemente un poste de titanio biocompatible en el hueso de la mandíbula, que actúa como un ancla estructural para una corona cerámica personalizada. Este proceso restaura completamente la fuerza de masticación, previene la pérdida de hueso facial y preserva los dientes vecinos.',
        stages: ['Escaneo 3D completo y mapeo digital', 'Colocación del poste de implante biocompatible', 'Período de curación (osteointegración)', 'Colocación de pilar y corona de porcelana personalizados'],
        recovery: 'De 3 a 7 días para molestias menores, integración ósea total en 3-4 meses.',
        benefits: ['Detiene la reabsorción ósea natural y la flacidez facial', 'Dura toda la vida con una higiene oral adecuada', 'Restaura el 100% de la fuerza de mordida']
      },
      crowns: {
        title: 'Coronas Dentales',
        short: 'Fundas de porcelana sin metal hechas a medida y diseñadas para restaurar y fortalecer dientes comprometidos.',
        detailed: 'Las coronas dentales de Nova se fabrican individualmente con porcelana o circonio de primer nivel. Este tratamiento encierra por completo un diente agrietado, cariado o tratado con endodoncia, restaurando su estructura anatómica original, color y durabilidad duradera.',
        stages: ['Eliminación de caries y moldeado conservador del diente', 'Impresión óptica digital de alta precisión', 'Colocación de corona temporal para cobertura inmediata', 'Colocación permanente de la corona cerámica de grado médico'],
        recovery: 'Prácticamente instantáneo. Sensibilidad menor a la temperatura por 48 horas.',
        benefits: ['Protege los dientes debilitados de futuras fracturas', 'Integración visual perfecta con el esmalte vecino', 'Durabilidad de más de 15 años con cerámica dental personalizada']
      },
      rootcanal: {
        title: 'Tratamiento de Conducto',
        short: 'Terapia endodóntica avanzada y sin dolor diseñada para salvar dientes profundamente infectados de la extracción.',
        detailed: 'Un tratamiento de conducto es un procedimiento crucial que salva el diente. Al retirar con cuidado la pulpa dental infectada e inflamada del interior del conducto radicular, limpiar y sellar la cámara interior, aliviamos instantáneamente el dolor dental y eliminamos las colonias bacterianas dañinas.',
        stages: ['Bloqueo del dolor local localizado y aislamiento', 'Acceso guiado por microscopio a la pulpa interna', 'Irrigación y desinfección profunda de los conductos neuronales', 'Relleno estéril con gutapercha y sellado temporal'],
        recovery: 'De 1 a 3 días. Cualquier sensación de sensibilidad se controla fácilmente con analgésicos leves de venta libre.',
        benefits: ['Terminación directa e inmediata del dolor dental punzante', 'Salva el diente natural y evita la atrofia del hueso mandibular', 'Elimina infecciones bacterianas sistémicas en la mandíbula']
      },
      general: {
        title: 'Odontología General',
        short: 'Chequeos completos, diagnóstico digital, empastes de resina y evaluaciones completas de la salud oral.',
        detailed: 'La base de una salud bucal para toda la vida. Nuestros servicios de odontología general incluyen exámenes de detección de cáncer oral, radiografías digitales de alta resolución, empastes de composite del color del diente y orientación preventiva completa para pacientes de todas las edades.',
        stages: ['Registro dental digital completo', 'Diagnóstico digital de mordida de alta resolución', 'Eliminación de sarro ultrasónica', 'Aplicación conservadora de empastes del color del diente'],
        recovery: 'Instantáneo. No requiere tiempo de inactividad.',
        benefits: ['Detección temprana de cáncer oral y enfermedades óseas', 'Eliminación de caries mediante composites blancos biocompatibles', 'Protege la salud cardiovascular y diabética sistémica']
      },
      cleaning: {
        title: 'Limpieza Dental',
        short: 'Tratamientos de profilaxis profunda que eliminan la placa persistente y restauran la salud de las encías.',
        detailed: 'La terapia de higiene profesional es crucial para evitar la enfermedad periodontal (de las encías). Nuestros higienistas utilizan raspadores ultrasónicos indoloros para eliminar el cálculo duro acumulado, pulir las manchas orgánicas externas y proporcionar minerales de flúor restauradores.',
        stages: ['Medición de bolsas periodontales', 'Raspado ultrasónico de dientes por encima y debajo de la línea de las encías', 'Pulido fino con flujo de aire para erradicar manchas de café/té', 'Aplicación de barniz mineral fortalecedor'],
        recovery: 'Inmediato. Los dientes se sienten refrescantemente suaves y limpios.',
        benefits: ['Detiene el sangrado de encías y la gingivitis activa', 'Garantiza un aliento fresco (combate la halitosis)', 'Revierte la desmineralización temprana del esmalte superficial']
      },
      whitening: {
        title: 'Blanqueamiento Dental',
        short: 'Sistemas de blanqueamiento profesional avanzados que aclaran las sonrisas de forma segura hasta 8 tonos en una hora.',
        detailed: 'Los dientes opacos, manchados o envejecidos se revitalizan drásticamente con nuestro sistema de blanqueamiento clínico en el consultorio. Aplicamos una barrera protectora sobre las encías sensibles, colocamos un gel de peróxido de hidrógeno con pH balanceado y aceleramos el proceso con una luz terapéutica segura.',
        stages: ['Alineación con guía de tonos y aislamiento de labios', 'Curado de barrera de resina protectora de encías', 'Tres ciclos de 15 minutos de gel blanqueador de alta potencia', 'Lavado mineral desensibilizante'],
        recovery: 'Ninguno. Ligera sensibilidad a bebidas heladas por 24 horas.',
        benefits: ['Elimina manchas persistentes de café, vino tinto y tabaco', 'Fórmula segura y no abrasiva que protege el esmalte natural', 'Aumento instantáneo de la confianza psicológica']
      },
      veneers: {
        title: 'Carillas de Porcelana',
        short: 'Carillas ultrafinas hechas a mano y adheridas al frente de los dientes para una sonrisa cosmética perfecta.',
        detailed: 'Las carillas de porcelana son la mejora cosmética dental definitiva. Diseñadas individualmente para adaptarse a su forma, simetría y brillo ideales, estas carillas cerámicas duraderas se adhieren de forma segura al frente de sus dientes, ocultando grietas, espacios, apiñamiento y decoloración permanente.',
        stages: ['Consulta de sonrisa estética y maqueta de prueba', 'Preparación mínima y conservadora del esmalte', 'Mapeo digital y diseño por un maestro ceramista personalizado', 'Cementación con resina de unión permanente y acabado'],
        recovery: 'De 2 a 3 días a medida que las encías se adaptan a los nuevos márgenes.',
        benefits: ['Corrige espacios, astillas y dientes torcidos al instante', 'Altamente resistente a futuras manchas de café o nicotina', 'Proporciona un cambio de sonrisa estilo Hollywood de aspecto natural']
      },
      emergency: {
        title: 'Atención Dental de Emergencia',
        short: 'Alivio inmediato el mismo día para dolores de muela, dientes caídos por golpes, lesiones en la mandíbula o restauraciones rotas.',
        detailed: 'Dedicamos espacios de reserva prioritarios todos los días para atender crisis dentales de inmediato. Si tiene un dolor de muela severo, sangrado, un diente roto o una corona caída, nuestro equipo está preparado para diagnosticar y aliviar su dolor el mismo día.',
        stages: ['Examen de emergencia clínica inmediato', 'Radiografía digital enfocada en un solo diente', 'Terapia clínica de alivio del dolor directo', 'Formulación de una solución de tratamiento permanente'],
        recovery: 'Varía según el tipo de emergencia; el alivio del dolor siempre es prioritario.',
        benefits: ['Salva dientes caídos por golpes si se trata en la hora de oro', 'Evita que las infecciones dentales se propaguen al torrente sanguíneo', 'Tranquilidad y comodidad inmediatas']
      },
      cosmetic: {
        title: 'Odontología Cosmética',
        short: 'Mejoras dentales artísticas que incluyen adhesión, contorneado y transformaciones de sonrisa completas.',
        detailed: 'Transforme su aspecto y su confianza con la odontología estética personalizada. Combinando láseres dentales de última generación, resinas de unión de alta definición y un contorneado visual artístico, diseñamos la hermosa sonrisa que siempre ha deseado.',
        stages: ['Fotografía de diseño de sonrisa digital cosmética', 'Modelado de contorno estético', 'Elevación de encías con láser o unión de composite', 'Pulido de alto brillo y armonización de la mordida'],
        recovery: 'De inmediato a 24 horas según el procedimiento.',
        benefits: ['Equilibra la simetría facial y las proporciones dentales', 'Tratamientos prácticamente indoloros con resultados instantáos', 'Utiliza materiales duraderos del color del diente']
      },
      family: {
        title: 'Odontología Familiar',
        short: 'Experiencias dentales cariñosas, educativas y divertidas diseñadas para bebés, niños, adolescentes y personas mayores.',
        detailed: 'Hacemos que la salud bucal familiar sea sencilla. Desde el primer control dental feliz de un niño pequeño hasta la guía de ortodoncia moderna para adolescentes y la atención delicada para abuelos mayores, garantizamos que todas las generaciones reciban una atención cómoda y sin estrés bajo un mismo techo.',
        stages: ['Orientación pediátrica y cita de juego feliz', 'Análisis del desarrollo del crecimiento mandibular', 'Selladores protectores indoloros para los dientes', 'Revisión de boca seca y restauración para personas mayores'],
        recovery: 'Instantáneo. Los niños se van con premios y una sonrisa.',
        benefits: ['Inculca hábitos dentales positivos desde temprano en los niños', 'Cómodas reservas en bloque para toda la familia junta', 'Seguimiento completo del crecimiento bucal de por vida']
      }
    },
    team: {
      title: 'Conozca a Nuestros Expertos',
      subtitle: 'Un equipo dedicado de dentistas galardonados, higienistas y especialistas de apoyo comprometidos con su bienestar.',
      experience: 'Experiencia:',
      drMarcos: {
        role: 'Fundador e Implantólogo Jefe',
        bio: 'El Dr. Marcos Silva, DDS, recibió su Doctorado en Cirugía Dental con honores. Con más de 16 años de práctica clínica, se especializa en implantes dentales avanzados, reconstrucción de boca completa e injerto óseo mínimamente invasivo. Habla inglés, español y portugués con fluidez.'
      },
      drElena: {
        role: 'Directora de Odontología Cosmética',
        bio: 'La Dra. Elena Rostova, DMD, es una maestra de las sonrisas cosméticas. Habiendo diseñado más de 1,500 carillas de porcelana, combina la ciencia médica con el verdadero arte estético. Es miembro activo de la Academia Americana de Odontología Cosmética.'
      },
      sarah: {
        role: 'Higienista Dental Registrada Principal',
        bio: 'Sarah es adorada por nuestros pacientes por su tacto increíblemente suave y su precisión clínica. Se especializa en limpiezas profundas avanzadas, mantenimiento de la salud periodontal y educación preventiva pediátrica.'
      }
    },
    gallery: {
      title: 'Galería de Nuestra Clínica',
      subtitle: 'Realice un recorrido virtual por nuestros entornos clínicos premium en Trinity y New Port Richey, tecnología avanzada y los resultados reales de nuestros pacientes.',
      tabs: {
        all: 'Todas las Fotos',
        clinic: 'Nuestra Clínica',
        tech: 'Tecnología',
        patients: 'Pacientes Sonrientes'
      }
    },
    faq: {
      title: 'Preguntas Frecuentes',
      subtitle: '¿Tiene preguntas? Tenemos respuestas claras y profesionales. Explore temas útiles o llame a nuestro equipo.',
      searchPlaceholder: 'Buscar preguntas frecuentes...',
      noResults: 'No se encontraron preguntas frecuentes. ¡Intente con otras palabras clave o llame a nuestra línea de atención!',
      categories: {
        all: 'Todas las Preguntas',
        general: 'Generales',
        treatments: 'Tratamientos',
        payment: 'Pagos y Seguros'
      },
      q1: {
        question: '¿Están aceptando nuevos pacientes? ¿Aceptan seguros dentales?',
        answer: '¡Sí! Damos la bienvenida absoluta a nuevos pacientes de todas las edades. Aceptamos casi todos los principales seguros dentales PPO (como Delta Dental, Cigna, MetLife, Guardian y Aetna). Nuestro equipo de consejería se encargará de tramitar todas las reclamaciones por usted para maximizar sus beneficios.'
      },
      q2: {
        question: '¿Cuál es el período de recuperación de un implante dental?',
        answer: '¡La mayoría de los pacientes regresan a sus actividades normales al día siguiente! Cualquier ligera molestia localizada en las encías se controla fácilmente con ibuprofeno. El hueso dental subyacente tarda entre 3 y 4 meses en fusionarse por completo con el poste de titanio, después de lo cual colocamos la corona definitiva.'
      },
      q3: {
        question: '¿Ofrecen planes de pago o asistencia financiera?',
        answer: 'Absolutamente. Creemos que una salud oral impecable debe ser accesible. Ofrecemos opciones de pago mensual con 0% de interés a través de CareCredit y Proceed Finance. También ofrecemos un exclusivo "Club de Bienestar Nova" que cubre limpiezas, radiografías y otorga un 15% de descuento en tratamientos complejos.'
      },
      q4: {
        question: '¿Con qué frecuencia debo hacerme una limpieza dental profesional?',
        answer: 'Para un adulto sano, recomendamos encarecidamente limpiezas y exámenes profesionales cada 6 meses. Sin embargo, si muestra signos tempranos de enfermedad periodontal de las encías, podemos aconsejarle limpiezas cada 3 o 4 meses para evitar daños óseos y mantener un aliento fresco.'
      },
      q5: {
        question: '¿Qué idiomas habla su personal?',
        answer: 'Nova Dental Trinity es una clínica altamente multicultural. El Dr. Silva y nuestro personal de enfermería hablan inglés, portugués (Português) y español (Español) con fluidez. Podemos realizar su examen dental completo, formularios de consentimiento y planes de tratamiento en su idioma de preferencia.'
      }
    },
    bookingForm: {
      title: 'Reserve Su Cita Premium',
      subtitle: 'Reserve su espacio hoy mismo. Nuestro amable equipo de consejería se comunicará con usted dentro de las próximas 2 horas hábiles para coordinar su cita definitiva.',
      labels: {
        fullName: 'Nombre Completo *',
        email: 'Correo Electrónico *',
        phone: 'Teléfono de Contacto *',
        service: 'Seleccionar Servicio *',
        dentist: 'Seleccionar Dentista Preferido',
        date: 'Fecha Preferida *',
        time: 'Horario Preferido *',
        message: 'Solicitudes Especiales / Alergias o Salud',
        submit: 'Programar Cita',
        anyDentist: 'Cualquier Especialista Disponible',
        selectServicePrompt: 'Seleccione un tratamiento...',
        morning: 'Mañana (8:00 AM - 12:00 PM)',
        afternoon: 'Tarde (12:00 PM - 5:00 PM)'
      },
      validation: {
        success: '¡Cita Solicitada con Éxito!',
        msg: 'Hemos registrado su espacio preferido en nuestro sistema. Nos comunicaremos con usted a la brevedad para confirmar.'
      }
    }
  },
  pt: {
    common: {
      phone1: '(727) 835-6001',
      phone2: '(727) 439-0885',
      address1: '3203 Trinity Blvd, Trinity, FL 34655',
      address2: '4122 Rowan Rd, New Port Richey, FL 34653',
      branches: 'Nossas Filiais',
      trinityBranch: 'Escritório Principal de Trinity',
      nprBranch: 'Escritório de New Port Richey',
      openHours: 'Seg - Sex: 8:00 AM - 5:00 PM',
      satHours: 'Sábado: Apenas com Hora Marcada',
      sunHours: 'Domingo: Fechado',
      allRightsReserved: 'Todos os direitos reservados.',
      learnMore: 'Saiba Mais',
      close: 'Fechar',
      submitting: 'Agendando sua vaga...',
      success: 'Consulta Solicitada!',
      successMsg: 'Obrigado! Nossa equipe de atendimento ligará para você dentro de 2 horas para confirmar seu horário de preferência.',
      requiredError: 'Por favor, preencha todos os campos com asterisco (*).',
      activeStatus: 'Solicitação Confirmada',
      cancelledStatus: 'Cancelada',
      cancelAppt: 'Cancelar Consulta',
      viewAppts: 'Minhas Consultas Agendadas',
      whatsAppFloat: 'Converse conosco pelo WhatsApp',
      callFloat: 'Ligue para nossa clínica'
    },
    nav: {
      home: 'Início',
      about: 'Sobre Nós',
      services: 'Serviços',
      team: 'Nossa Equipe',
      testimonials: 'Avaliações',
      gallery: 'Galeria',
      faq: 'Perguntas Frequentes',
      contact: 'Contato',
      bookNow: 'Marcar Consulta'
    },
    hero: {
      headline: 'Sorrisos Saudáveis Começam Aqui',
      subtitle: 'Oferecendo tratamento odontológico avançado com tecnologia moderna, procedimentos humanizados e atendimento personalizado para toda a família.',
      bookCTA: 'Marcar Consulta',
      callCTA: 'Ligar Agora',
      satisfactionRate: 'Satisfação do Paciente',
      yearsExp: 'Anos de Sorrisos',
      happyPatients: 'Pacientes Felizes',
      branchesCount: 'Filiais Modernas'
    },
    about: {
      title: 'Bem-vindo à Nova Dental Trinity',
      subtitle: 'Onde a Tecnologia Premium se Une ao Cuidado Humanizado e Confiável',
      p1: 'Na Nova Dental Trinity, acreditamos que uma visita ao dentista deve ser restauradora, luxuosa e totalmente livre de estresse. Nossa clínica boutique combina a ciência odontológica geral, cosmética e de emergência mais avançada com uma atmosfera de absoluto conforto e tranquilidade.',
      p2: 'Quer você precise de uma limpeza preventiva de rotina, implantes dentários personalizados ou uma transformação completa do sorriso, o Dr. Marcos Silva, a Dra. Elena Rostova e nossa equipe de especialistas tratam você como parte da família. Atendemos com orgulho em inglês, português e espanhol.',
      whyTitle: 'Por Que Nos Escolher',
      whySubtitle: 'Uma abordagem elevada da odontologia padrão, dedicada ao conforto do paciente e à precisão clínica.',
      features: {
        dentists: {
          title: 'Dentistas Experientes',
          desc: 'Nossos dentistas seniores trazem mais de 25 anos de experiência e educação continuada em cirurgias de alta complexidade.'
        },
        equipment: {
          title: 'Equipamento Moderno',
          desc: 'Utilizamos radiografias digitais 3D de baixa radiação, escâneres intraorais e equipamentos de micro-odontologia.'
        },
        gentle: {
          title: 'Cuidado Delicado e Confortável',
          desc: 'Equipado com cadeiras de espuma de memória, cobertores aquecidos e ferramentas de anestesia indolor.'
        },
        personalized: {
          title: 'Tratamento Personalizado',
          desc: 'Desenvolvemos planos de saúde bucal sob medida, com etapas de tratamento transparentes e análise de custos detalhada.'
        },
        flexible: {
          title: 'Horários Flexíveis',
          desc: 'Oferecemos blocos de agendamento de manhã cedo, à noite e aos finais de semana para se ajustar à sua rotina.'
        },
        affordable: {
          title: 'Opções de Pagamento Acessíveis',
          desc: 'Aceitamos os principais planos de seguro PPO, financiamento via CareCredit e planos de desconto internos exclusivos.'
        }
      }
    },
    services: {
      title: 'Nossos Serviços Premium',
      subtitle: 'Explore o nosso espectro completo de tratamentos odontológicos gerais, estéticos e restauradores de última geração.',
      durationLabel: 'Duração:',
      costLabel: 'Faixa de Custo:',
      stepsLabel: 'Etapas de Cuidado Esperadas',
      recoveryLabel: 'Tempo de Recuperação Típico',
      benefitsLabel: 'Principais Benefícios Clínicos',
      bookThis: 'Agendar este Tratamento',
      implants: {
        title: 'Implantes Dentários',
        short: 'Raízes de titânio permanentes e premium que parecem, funcionam e têm a sensação de dentes naturais.',
        detailed: 'Os implantes dentários são o padrão-ouro para dentes ausentes. Um pino de titânio biocompatível é suavemente posicionado no osso maxilar, servindo como âncora estrutural para uma coroa de cerâmica personalizada. Este processo restaura completamente a força de mastigação, previne a perda óssea facial e protege os dentes vizinhos.',
        stages: ['Escaneamento 3D completo e mapeamento digital', 'Instalação do pino de implante biocompatível', 'Período de cura (osteointegração)', 'Colocação de pilar personalizado e coroa de porcelana'],
        recovery: 'De 3 a 7 dias para pequenos desconfortos, integração óssea total em 3-4 meses.',
        benefits: ['Impede a reabsorção óssea natural e flacidez facial', 'Dura toda a vida com higiene oral adequada', 'Restaura 100% da força de mordida']
      },
      crowns: {
        title: 'Coroas Dentárias',
        short: 'Capas de porcelana livre de metal feitas sob medida para restaurar e fortalecer dentes danificados.',
        detailed: 'As coroas dentárias da Nova são fabricadas individualmente com porcelana de alta resistência ou zircônia. Este tratamento envolve completamente um dente trincado, cariado ou canalizado, devolvendo sua anatomia original, cor e durabilidade.',
        stages: ['Remoção da cárie e moldagem conservadora do dente', 'Escaneamento digital óptico de alta precisão', 'Colocação de coroa provisória para proteção imediata', 'Colocação final da coroa cerâmica de grau médico'],
        recovery: 'Praticamente imediata. Leve sensibilidade térmica por 48 horas.',
        benefits: ['Protege dentes enfraquecidos contra fraturas futuras', 'Integração visual perfeita com os dentes vizinhos', 'Durabilidade superior a 15 anos com cerâmica de alta qualidade']
      },
      rootcanal: {
        title: 'Tratamento de Canal',
        short: 'Tratamento endodôntico moderno e livre de dor, projetado para salvar dentes severamente infeccionados.',
        detailed: 'O tratamento de canal é um procedimento essencial que salva o dente. Ao remover cuidadosamente a polpa dentária infectada e inflamada de dentro dos canais radiculares, higienizando e selando o interior, aliviamos imediatamente as dores e eliminamos focos de infecção bacteriana.',
        stages: ['Bloqueio anestésico local e isolamento', 'Acesso aos canais guiado por microscópio clínico', 'Irrigação profunda e sanitização dos canais', 'Preenchimento estéril com guta-percha e selagem temporária'],
        recovery: 'De 1 a 3 dias. Qualquer sensibilidade residual é facilmente controlada com analgésicos leves comuns.',
        benefits: ['Fim imediato e definitivo de dores de dente intensas', 'Salva o dente natural e previne atrofia óssea', 'Elimina focos infecciosos prejudiciais à saúde geral']
      },
      general: {
        title: 'Odontologia Geral',
        short: 'Exames completos, diagnósticos digitais, restaurações de resina e check-ups de saúde bucal.',
        detailed: 'A base da saúde bucal para toda a vida. Nossos serviços gerais incluem exames preventivos contra o câncer bucal, radiografias digitais em alta resolução, restaurações com resina composta biocompatível e orientações completas para pacientes de todas as idades.',
        stages: ['Mapeamento odontológico digital completo', 'Radiografias digitais de alta resolução', 'Limpeza de tártaro ultrassônica', 'Aplicação de restauração estética da cor do dente'],
        recovery: 'Imediata. Sem necessidade de repouso.',
        benefits: ['Detecção precoce de lesões e doenças ósseas', 'Eliminação de cáries com materiais estéticos da cor do esmalte', 'Proteção da saúde cardiovascular e metabólica geral']
      },
      cleaning: {
        title: 'Limpeza e Profilaxia',
        short: 'Tratamento profilático profundo que elimina a placa bacteriana persistente e restaura a saúde das gengivas.',
        detailed: 'A higiene profissional é indispensável para prevenir a doença periodontal (gengiva). Nossas higienistas utilizam raspadores ultrassônicos suaves para remover tártaros profundos, realizar o polimento de manchas externas e aplicar minerais de flúor protetores.',
        stages: ['Exame clínico e medição periodontal', 'Raspagem ultrassônica acima e abaixo da linha gengival', 'Polimento a jato de ar para remover manchas de café, chá ou tabaco', 'Aplicação de verniz mineral fortificante'],
        recovery: 'Imediata. Sensação de dentes perfeitamente limpos e lisos.',
        benefits: ['Combate o sangramento gengival e a gengivite ativa', 'Combate o mau hálito persistente (halitose)', 'Fortalece e remineraliza o esmalte superficial']
      },
      whitening: {
        title: 'Clareamento Dental',
        short: 'Sistemas avançados de clareamento profissional que iluminam o sorriso em até 8 tons em uma hora.',
        detailed: 'Dentes amarelados ou manchados são profundamente revitalizados em nossa clínica. Protegemos as gengivas sensíveis, aplicamos um gel clareador de alta potência com pH balanceado e aceleramos o processo com segurança através de luz terapêutica especial.',
        stages: ['Mapeamento de tonalidade e isolamento dos lábios', 'Aplicação de barreira de resina fotopolimerizável nas gengivas', 'Três sessões de 15 minutos com gel clareador concentrado', 'Aplicação de dessensibilizante mineral'],
        recovery: 'Nenhuma. Ligeira sensibilidade térmica nas primeiras 24 horas.',
        benefits: ['Remove manchas profundas de café, vinho e nicotina', 'Fórmula totalmente segura que não agride o esmalte natural', 'Aumento imediato da autoestima e autoconfiança']
      },
      veneers: {
        title: 'Lentes de Contato de Porcelana',
        short: 'Lâminas ultrafinas de cerâmica feitas à mão e aderidas aos dentes para um sorriso estético perfeito.',
        detailed: 'As lentes de contato de porcelana são o ápice da odontologia estética. Personalizadas conforme o formato, simetria e brilho desejados, estas lâminas resistentes são aderidas com segurança sobre o dente, corrigindo diastemas, dentes lascados e manchas permanentes.',
        stages: ['Consulta estética e modelagem de mockup (teste)', 'Preparação mínima e conservadora do esmalte dental', 'Mapeamento digital e confecção em laboratório de alta tecnologia', 'Cimentação definitiva com resina de alta performance'],
        recovery: 'De 2 a 3 dias para a gengiva se ajustar perfeitamente.',
        benefits: ['Corrige espaçamentos, lascas e desalinhamentos em poucos dias', 'Altamente resistente a manchas de café, chá e tabaco', 'Proporciona o sorriso perfeito das celebridades de forma natural']
      },
      emergency: {
        title: 'Atendimento de Emergência',
        short: 'Alívio imediato no mesmo dia para dor de dente severa, dentes quebrados, acidentes ou coroas soltas.',
        detailed: 'Reservamos horários prioritários diariamente em nossa agenda para urgências dentárias. Se você está sofrendo com dor de dente severa, sangramento, trauma ou próteses quebradas, nossa equipe estará pronta para aliviar seu sofrimento no mesmo dia.',
        stages: ['Exame clínico de urgência focado', 'Radiografia digital localizada imediata', 'Procedimento clínico de alívio rápido da dor', 'Definição das etapas de tratamento definitivas'],
        recovery: 'Varia conforme o caso, mas o alívio da dor é imediato.',
        benefits: ['Pode salvar um dente que sofreu trauma se atendido na hora de ouro', 'Evita a propagação de infecções graves para o organismo', 'Conforto e acolhimento em momentos de crise']
      },
      cosmetic: {
        title: 'Odontologia Estética',
        short: 'Aprimoramentos estéticos personalizados, incluindo restaurações de bordas, plástica gengival e facetas.',
        detailed: 'Transforme o seu visual com a odontologia estética avançada. Unindo tecnologia laser, resinas de alta definição e design personalizado, criamos o sorriso harmônico e radiante que você sempre sonhou.',
        stages: ['Fotografia digital para planejamento do sorriso', 'Modelagem estética computadorizada', 'Plástica gengival a laser ou fechamento de espaços', 'Polimento de alto brilho e ajuste de mordida'],
        recovery: 'De imediato a 24 horas, conforme o procedimento realizado.',
        benefits: ['Melhora a simetria facial e as proporções dos dentes', 'Procedimentos confortáveis e com resultados imediatos', 'Utiliza materiais biocompatíveis de altíssima durabilidade']
      },
      family: {
        title: 'Odontologia Familiar',
        short: 'Cuidado atencioso, educativo e acolhedor para bebês, crianças, adolescentes e idosos.',
        detailed: 'Tornamos os cuidados bucais da família extremamente práticos. Da primeira consulta acolhedora de um bebê ao acompanhamento de adolescentes e o tratamento cuidadoso e humanizado de avós e idosos, oferecemos soluções completas para todas as idades sob o mesmo teto.',
        stages: ['Acolhimento infantil e consulta lúdica', 'Análise de desenvolvimento ósseo e crescimento dos dentes', 'Aplicação de selantes protetores contra cáries', 'Acompanhamento geriátrico de saúde gengival e próteses'],
        recovery: 'Imediata. As crianças saem felizes com presentes e bexigas.',
        benefits: ['Gera hábitos de saúde bucal positivos desde a infância', 'Agendamentos em bloco facilitados para toda a família no mesmo dia', 'Acompanhamento preventivo completo ao longo de toda a vida']
      }
    },
    team: {
      title: 'Conheça Nossos Especialistas',
      subtitle: 'Uma equipe dedicada de dentistas premiados, higienistas e especialistas focados em oferecer o melhor atendimento.',
      experience: 'Experiência:',
      drMarcos: {
        role: 'Fundador e Implantodontista-Chefe',
        bio: 'O Dr. Marcos Silva, DDS, obteve seu Doutorado em Cirurgia Dentária com honras. Com mais de 16 anos de prática clínica, é especialista em implantes dentários avançados, reabilitação oral completa e enxertos ósseos minimamente invasivos. Fala fluentemente inglês, espanhol e português.'
      },
      drElena: {
        role: 'Diretora de Odontologia Estética',
        bio: 'A Dra. Elena Rostova, DMD, é mestre em estética bucal. Tendo planejado e entregue mais de 1.500 transformações com lentes de porcelana, ela une precisão clínica com verdadeira arte visual. Membro ativo da Academia Americana de Odontologia Estética.'
      },
      sarah: {
        role: 'Higienista Dental Registrada Principal',
        bio: 'Sarah é extremamente querida pelos nossos pacientes por seu toque incrivelmente gentil e precisão clínica. É especialista em terapias preventivas profundas, saúde periodontal e educação preventiva infantil.'
      }
    },
    gallery: {
      title: 'Galeria da Clínica',
      subtitle: 'Faça um tour virtual pelos nossos ambientes premium em Trinity e New Port Richey, tecnologia de ponta e sorrisos reais de nossos pacientes.',
      tabs: {
        all: 'Todas as Fotos',
        clinic: 'Nossa Clínica',
        tech: 'Tecnologia',
        patients: 'Pacientes Satisfeitos'
      }
    },
    faq: {
      title: 'Perguntas Frequentes',
      subtitle: 'Dúvidas? Temos respostas claras e profissionais. Explore os tópicos abaixo ou ligue diretamente para nós.',
      searchPlaceholder: 'Buscar perguntas frequentes...',
      noResults: 'Nenhuma pergunta encontrada para sua busca. Tente outras palavras ou ligue para nossa linha de atendimento!',
      categories: {
        all: 'Todas as Perguntas',
        general: 'Gerais',
        treatments: 'Tratamentos',
        payment: 'Pagamentos e Convênios'
      },
      q1: {
        question: 'Vocês estão aceitando novos pacientes? Aceitam convênios?',
        answer: 'Sim! Estamos de portas abertas para novos pacientes de todas as idades. Aceitamos praticamente todas as principais seguradoras odontológicas PPO (como Delta Dental, Cigna, MetLife, Guardian e Aetna). Nossa equipe cuidará de todo o faturamento administrativo para você aproveitar ao máximo seus benefícios.'
      },
      q2: {
        question: 'Como funciona a recuperação de um implante dentário?',
        answer: 'A maioria dos pacientes retorna às suas atividades normais ou trabalho já no dia seguinte! Qualquer sensibilidade leve e temporária na gengiva é facilmente controlada com analgésicos simples. O osso leva de 3 a 4 meses para cicatrizar e se integrar perfeitamente ao pino de titânio biocompatível, quando instalamos sua coroa definitiva.'
      },
      q3: {
        question: 'Existem opções de parcelamento ou planos de pagamento?',
        answer: 'Com certeza. Acreditamos que a saúde bucal deve ser acessível a todos. Oferecemos opções de financiamento com juros zero através do CareCredit e do Proceed Finance. Também dispomos do exclusivo "Nova Wellness Club", um clube interno que cobre limpezas, raio-X anuais e concede 15% de desconto em procedimentos complexos.'
      },
      q4: {
        question: 'Com que frequência devo fazer uma limpeza dental profissional?',
        answer: 'Para adultos saudáveis, recomendamos limpezas e exames periódicos a cada 6 meses. No entanto, se houver sinais iniciais de doença gengival (periodontite), podemos recomendar limpezas a cada 3 ou 4 meses para evitar danos ósseos e manter o hálito sempre fresco.'
      },
      q5: {
        question: 'Quais idiomas a equipe de atendimento fala?',
        answer: 'A Nova Dental Trinity orgulha-se de ser uma clínica multicultural. O Dr. Silva e nossa equipe de enfermagem e recepção falam inglês, português e espanhol fluentemente. Toda a sua consulta, termos de consentimento e planejamentos podem ser conduzidos em seu idioma preferido.'
      }
    },
    bookingForm: {
      title: 'Agende Sua Consulta Premium',
      subtitle: 'Marque o seu horário hoje mesmo. Nossa equipe de concierge entrará em contato dentro de 2 horas úteis para finalizar o agendamento de sua preferência.',
      labels: {
        fullName: 'Nome Completo *',
        email: 'E-mail para Contato *',
        phone: 'Telefone Celular *',
        service: 'Selecionar Serviço *',
        dentist: 'Dentista de Preferência',
        date: 'Data de Preferência *',
        time: 'Período de Preferência *',
        message: 'Solicitações Especiais / Saúde ou Alergias',
        submit: 'Agendar Consulta',
        anyDentist: 'Qualquer Profissional Disponível',
        selectServicePrompt: 'Selecione um tratamento...',
        morning: 'Manhã (8:00 AM - 12:00 PM)',
        afternoon: 'Tarde (12:00 PM - 5:00 PM)'
      },
      validation: {
        success: 'Consulta Solicitada com Sucesso!',
        msg: 'Registramos seu horário de preferência em nosso sistema. Entraremos em contato em breve para confirmar seu agendamento.'
      }
    }
  }
};

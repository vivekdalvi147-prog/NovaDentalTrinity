import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MapPin, Phone, Clock, Mail, ShieldCheck, Trash2, CalendarCheck2, Globe, Sparkles, CheckCircle } from 'lucide-react';
import { Language, SERVICES_LIST, TEAM_LIST, Appointment, TRANSLATIONS } from '../types';

interface ContactProps {
  currentLang: Language;
  preselectedServiceId: string | null;
  preselectedDentistId: string | null;
  onClearPreselections: () => void;
  appointments: Appointment[];
  onAddAppointment: (appt: {
    name: string;
    email: string;
    phone: string;
    serviceId: string;
    dentistId: string;
    date: string;
    time: string;
    message?: string;
  }) => void;
  onCancelAppointment: (id: string) => void;
}

export default function Contact({
  currentLang,
  preselectedServiceId,
  preselectedDentistId,
  onClearPreselections,
  appointments,
  onAddAppointment,
  onCancelAppointment
}: ContactProps) {
  const t = TRANSLATIONS[currentLang];

  // Form Fields State
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [serviceId, setServiceId] = useState('');
  const [dentistId, setDentistId] = useState('dr-marcos');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('morning');
  const [message, setMessage] = useState('');

  // Status Alerts
  const [errorMessage, setErrorMessage] = useState('');
  const [showSuccessModal, setShowSuccessModal] = useState(false);

  // Sync Preselected values when changed from Services / Team clicks
  useEffect(() => {
    if (preselectedServiceId) {
      setServiceId(preselectedServiceId);
    }
  }, [preselectedServiceId]);

  useEffect(() => {
    if (preselectedDentistId) {
      setDentistId(preselectedDentistId);
    }
  }, [preselectedDentistId]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!fullName || !email || !phone || !serviceId || !date || !time) {
      setErrorMessage(t.common.requiredError);
      return;
    }

    setErrorMessage('');
    
    // Dispatch
    onAddAppointment({
      name: fullName,
      email,
      phone,
      serviceId,
      dentistId,
      date,
      time,
      message
    });

    // Reset Form Fields (except user contact info for easier re-booking)
    setServiceId('');
    setDate('');
    setMessage('');
    onClearPreselections();

    // Trigger Success feedback
    setShowSuccessModal(true);
  };

  // Get service title by ID
  const getServiceTitle = (id: string) => {
    const s = SERVICES_LIST.find((item) => item.id === id);
    if (!s) return 'Dental Care';
    const key = s.titleKey;
    const parts = key.split('.');
    return t[parts[0]][parts[1]][parts[2]];
  };

  // Get doctor name by ID
  const getDoctorName = (id: string) => {
    if (id === 'any') return t.bookingForm.labels.anyDentist;
    const d = TEAM_LIST.find((item) => item.id === id);
    return d ? d.name : 'Dentist';
  };

  return (
    <section id="contact" className="py-24 bg-slate-900/40 border-t border-slate-900 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        
        {/* Dual Info layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-24">
          
          {/* Contact Details & Interactive Maps (Col size: 5) */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-3">
              <span className="text-teal-400 text-xs font-bold tracking-widest uppercase block font-mono">
                {t.nav.contact}
              </span>
              <h2 className="text-3xl font-extrabold text-white tracking-tight">
                Connect With Nova
              </h2>
              <p className="text-sm text-slate-400 leading-relaxed font-sans">
                Visit one of our luxury offices or contact our clinical concierge team. We speak English, Portuguese, and Spanish fluently.
              </p>
            </div>

            {/* Quick Contacts cards */}
            <div className="space-y-4">
              {/* Phones Card */}
              <div className="p-5 rounded-2xl bg-slate-950 border border-slate-800 flex gap-4">
                <div className="w-10 h-10 rounded-xl bg-teal-500/10 border border-teal-500/30 flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5 text-teal-400" />
                </div>
                <div>
                  <h4 className="text-xs font-bold uppercase text-slate-400 tracking-wide">Patient Hotlines</h4>
                  <div className="mt-1.5 space-y-1 font-mono text-sm font-semibold">
                    <a href="tel:7278356001" className="block text-slate-200 hover:text-teal-400">
                      Trinity: (727) 835-6001
                    </a>
                    <a href="tel:7274390885" className="block text-slate-200 hover:text-teal-400">
                      New Port Richey: (727) 439-0885
                    </a>
                  </div>
                </div>
              </div>

              {/* Hours Card */}
              <div className="p-5 rounded-2xl bg-slate-950 border border-slate-800 flex gap-4">
                <div className="w-10 h-10 rounded-xl bg-sky-500/10 border border-sky-500/30 flex items-center justify-center shrink-0">
                  <Clock className="w-5 h-5 text-sky-400" />
                </div>
                <div>
                  <h4 className="text-xs font-bold uppercase text-slate-400 tracking-wide">Clinic Operating Hours</h4>
                  <div className="mt-2 space-y-1 text-xs text-slate-300 font-mono">
                    <p>{t.common.openHours}</p>
                    <p>{t.common.satHours}</p>
                    <p className="text-rose-400/80">{t.common.sunHours}</p>
                  </div>
                </div>
              </div>

              {/* Email Card */}
              <div className="p-5 rounded-2xl bg-slate-950 border border-slate-800 flex gap-4">
                <div className="w-10 h-10 rounded-xl bg-teal-500/10 border border-teal-500/30 flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5 text-teal-400" />
                </div>
                <div>
                  <h4 className="text-xs font-bold uppercase text-slate-400 tracking-wide">Electronic Inquiries</h4>
                  <a href="mailto:concierge@novadentaltrinity.com" className="block mt-1 text-sm text-slate-300 hover:text-teal-400 font-medium">
                    concierge@novadentaltrinity.com
                  </a>
                </div>
              </div>
            </div>

            {/* Premium Interactive Vector Map Placeholder */}
            <div className="p-5 rounded-3xl bg-slate-950 border border-slate-800/80 space-y-4">
              <div className="flex items-center justify-between">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-200 flex items-center gap-1.5 font-mono">
                  <Globe className="w-4 h-4 text-sky-400 animate-spin-slow" />
                  Tampa Bay Area Branches
                </h4>
                <span className="text-[9px] px-2 py-0.5 rounded-md bg-emerald-500/10 text-emerald-400 font-bold uppercase">
                  Local
                </span>
              </div>

              {/* Interactive Vector Map Grid */}
              <div className="relative h-44 rounded-2xl bg-slate-900 border border-slate-850 overflow-hidden flex items-center justify-center">
                {/* Simulated high-contrast map coordinates roads */}
                <svg className="absolute inset-0 w-full h-full text-slate-850" xmlns="http://www.w3.org/2000/svg">
                  <path d="M-20 60 H400 M-20 120 H400 M100 -20 V200 M260 -20 V200 M-20 10 Q150 150 400 180" fill="none" stroke="currentColor" strokeWidth="1" strokeDasharray="3 3" />
                  <path d="M-20 90 L400 90 M200 -20 L200 200" fill="none" stroke="currentColor" strokeWidth="1.5" />
                  {/* Pasco County label */}
                  <text x="35" y="30" fill="#64748b" fontSize="9" fontWeight="bold" fontFamily="monospace">PASCO COUNTY</text>
                  {/* Pinellas County label */}
                  <text x="35" y="160" fill="#64748b" fontSize="9" fontWeight="bold" fontFamily="monospace">PINELLAS CO.</text>
                </svg>

                {/* Branch Pin 1 (Trinity) */}
                <div className="absolute top-[35%] left-[65%] flex flex-col items-center">
                  <span className="absolute -top-10 px-2 py-1 rounded bg-teal-500 text-slate-950 text-[9px] font-bold uppercase whitespace-nowrap shadow border border-teal-300/20">
                    Trinity Main
                  </span>
                  <div className="w-3.5 h-3.5 rounded-full bg-teal-400 flex items-center justify-center animate-pulse shadow-lg shadow-teal-500/50">
                    <div className="w-1.5 h-1.5 rounded-full bg-slate-950" />
                  </div>
                </div>

                {/* Branch Pin 2 (NPR) */}
                <div className="absolute top-[55%] left-[30%] flex flex-col items-center">
                  <span className="absolute -top-10 px-2 py-1 rounded bg-sky-500 text-slate-950 text-[9px] font-bold uppercase whitespace-nowrap shadow border border-sky-300/20">
                    N. Port Richey
                  </span>
                  <div className="w-3.5 h-3.5 rounded-full bg-sky-400 flex items-center justify-center animate-pulse shadow-lg shadow-sky-500/50">
                    <div className="w-1.5 h-1.5 rounded-full bg-slate-950" />
                  </div>
                </div>

                {/* Coastline indicator */}
                <div className="absolute left-0 top-0 bottom-0 w-8 bg-sky-950/20 border-r border-sky-500/10 flex items-center justify-center">
                  <span className="transform -rotate-90 text-[8px] tracking-widest text-sky-500/40 uppercase font-mono">Gulf of Mexico</span>
                </div>
              </div>

              {/* Addresses Info panel */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs text-slate-400 pt-1">
                <div>
                  <span className="block font-bold text-slate-300 uppercase text-[10px]">Trinity Office:</span>
                  <p className="mt-0.5 font-sans">3203 Trinity Blvd, FL 34655</p>
                </div>
                <div>
                  <span className="block font-bold text-slate-300 uppercase text-[10px]">New Port Richey:</span>
                  <p className="mt-0.5 font-sans">4122 Rowan Rd, FL 34653</p>
                </div>
              </div>
            </div>
          </div>

          {/* Form Scheduler Block (Col size: 7) */}
          <div className="lg:col-span-7 rounded-3xl bg-slate-950 border border-slate-800 p-6 md:p-8 shadow-xl relative overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-teal-500 to-sky-500" />
            
            <div className="space-y-2 mb-8 text-left">
              <h3 className="text-xl md:text-2xl font-extrabold text-white tracking-tight flex items-center gap-2">
                <CalendarCheck2 className="w-6 h-6 text-teal-400" />
                {t.bookingForm.title}
              </h3>
              <p className="text-xs text-slate-400 leading-relaxed font-sans">
                {t.bookingForm.subtitle}
              </p>
            </div>

            {/* Error Indicator */}
            {errorMessage && (
              <div className="mb-6 p-4 rounded-xl bg-rose-500/10 border border-rose-500/20 text-rose-400 text-xs font-semibold">
                ⚠️ {errorMessage}
              </div>
            )}

            {/* Booking Form HTML */}
            <form onSubmit={handleSubmit} className="space-y-5 text-left font-sans">
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {/* Full Name */}
                <div className="space-y-2">
                  <label className="block text-xs font-bold text-slate-300 uppercase tracking-wide">
                    {t.bookingForm.labels.fullName}
                  </label>
                  <input
                    type="text"
                    required
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-slate-800 text-slate-100 text-sm focus:outline-none focus:border-teal-500/50 focus:ring-1 focus:ring-teal-500/10 transition-colors"
                  />
                </div>

                {/* Email */}
                <div className="space-y-2">
                  <label className="block text-xs font-bold text-slate-300 uppercase tracking-wide">
                    {t.bookingForm.labels.email}
                  </label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail}
                    // Since it has key elements, let's bind it
                    className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-slate-800 text-slate-100 text-sm focus:outline-none focus:border-teal-500/50 focus:ring-1 focus:ring-teal-500/10 transition-colors"
                    // Fix standard state issue
                    onInput={(e: React.FormEvent<HTMLInputElement>) => setEmail(e.currentTarget.value)}
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {/* Phone */}
                <div className="space-y-2">
                  <label className="block text-xs font-bold text-slate-300 uppercase tracking-wide">
                    {t.bookingForm.labels.phone}
                  </label>
                  <input
                    type="tel"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="(727) ___-____"
                    className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-slate-800 text-slate-100 text-sm focus:outline-none focus:border-teal-500/50 focus:ring-1 focus:ring-teal-500/10 transition-colors font-mono"
                  />
                </div>

                {/* Service */}
                <div className="space-y-2">
                  <label className="block text-xs font-bold text-slate-300 uppercase tracking-wide">
                    {t.bookingForm.labels.service}
                  </label>
                  <select
                    required
                    value={serviceId}
                    onChange={(e) => setServiceId(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 text-sm focus:outline-none focus:border-teal-500/50 focus:ring-1 focus:ring-teal-500/10 transition-colors appearance-none"
                  >
                    <option value="">{t.bookingForm.labels.selectServicePrompt}</option>
                    {SERVICES_LIST.map((service) => {
                      const label = t.services[service.id].title;
                      return (
                        <option key={service.id} value={service.id}>
                          {label} ({service.duration})
                        </option>
                      );
                    })}
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                {/* Dentist Choice */}
                <div className="space-y-2 md:col-span-1">
                  <label className="block text-xs font-bold text-slate-300 uppercase tracking-wide">
                    {t.bookingForm.labels.dentist}
                  </label>
                  <select
                    value={dentistId}
                    onChange={(e) => setDentistId(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 text-sm focus:outline-none focus:border-teal-500/50 focus:ring-1 focus:ring-teal-500/10 transition-colors"
                  >
                    <option value="any">{t.bookingForm.labels.anyDentist}</option>
                    {TEAM_LIST.map((dentist) => (
                      <option key={dentist.id} value={dentist.id}>
                        {dentist.name.split(',')[0]}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Date */}
                <div className="space-y-2 md:col-span-1">
                  <label className="block text-xs font-bold text-slate-300 uppercase tracking-wide">
                    {t.bookingForm.labels.date}
                  </label>
                  <input
                    type="date"
                    required
                    min={new Date().toISOString().split('T')[0]}
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 text-sm focus:outline-none focus:border-teal-500/50 focus:ring-1 focus:ring-teal-500/10 transition-colors font-mono"
                  />
                </div>

                {/* Time Block */}
                <div className="space-y-2 md:col-span-1">
                  <label className="block text-xs font-bold text-slate-300 uppercase tracking-wide">
                    {t.bookingForm.labels.time}
                  </label>
                  <div className="flex gap-2">
                    <button
                      type="button"
                      onClick={() => setTime('morning')}
                      className={`flex-1 py-3 text-xs font-bold rounded-xl transition-all border uppercase tracking-wider ${
                        time === 'morning'
                          ? 'bg-teal-500 text-slate-950 border-teal-500'
                          : 'bg-slate-900 text-slate-400 border-slate-800 hover:text-white'
                      }`}
                    >
                      {`AM`}
                    </button>
                    <button
                      type="button"
                      onClick={() => setTime('afternoon')}
                      className={`flex-1 py-3 text-xs font-bold rounded-xl transition-all border uppercase tracking-wider ${
                        time === 'afternoon'
                          ? 'bg-sky-500 text-slate-950 border-sky-500'
                          : 'bg-slate-900 text-slate-400 border-slate-800 hover:text-white'
                      }`}
                    >
                      {`PM`}
                    </button>
                  </div>
                </div>
              </div>

              {/* Message */}
              <div className="space-y-2">
                <label className="block text-xs font-bold text-slate-300 uppercase tracking-wide">
                  {t.bookingForm.labels.message}
                </label>
                <textarea
                  rows={3}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-slate-800 text-slate-100 text-sm focus:outline-none focus:border-teal-500/50 focus:ring-1 focus:ring-teal-500/10 transition-colors"
                />
              </div>

              {/* Submit CTA */}
              <button
                type="submit"
                className="w-full py-4 rounded-xl bg-teal-500 hover:bg-teal-400 text-slate-950 font-extrabold text-sm tracking-widest uppercase transition-all shadow-lg shadow-teal-500/10 flex items-center justify-center gap-2 mt-2 hover:-translate-y-0.5"
              >
                <ShieldCheck className="w-4 h-4" />
                <span>{t.bookingForm.labels.submit}</span>
              </button>

            </form>
          </div>

        </div>

        {/* Patient Dashboard / Active Bookings Tracker */}
        {appointments.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            className="p-6 md:p-8 rounded-3xl bg-slate-950 border border-slate-800 text-left space-y-6"
          >
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 border-b border-slate-850 pb-4">
              <div>
                <h4 className="text-base font-extrabold text-white tracking-tight flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 inline-block animate-ping" />
                  {t.common.viewAppts}
                </h4>
                <p className="text-xs text-slate-400 mt-0.5">
                  Manage your preferred clinical bookings from this browser.
                </p>
              </div>
              <span className="text-[10px] py-1 px-3.5 rounded-full bg-slate-900 border border-slate-800 text-teal-400 font-mono font-bold tracking-wider uppercase">
                {appointments.filter(a => a.status === 'confirmed').length} Active
              </span>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs font-sans">
                <thead>
                  <tr className="border-b border-slate-850 text-slate-400 font-bold uppercase tracking-wider font-mono">
                    <th className="pb-3.5 pl-4">Patient Name</th>
                    <th className="pb-3.5">Treatment Requested</th>
                    <th className="pb-3.5">Preferred Specialist</th>
                    <th className="pb-3.5">Requested Slot</th>
                    <th className="pb-3.5">Status</th>
                    <th className="pb-3.5 text-right pr-4">Action</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-900">
                  {appointments.map((appt) => (
                    <tr key={appt.id} className="text-slate-200 hover:bg-slate-900/40 transition-colors">
                      <td className="py-4 pl-4 font-semibold text-slate-100">{appt.name}</td>
                      <td className="py-4">
                        <span className="px-2.5 py-1 rounded-md bg-slate-900 border border-slate-800 text-sky-400 font-medium">
                          {getServiceTitle(appt.serviceId)}
                        </span>
                      </td>
                      <td className="py-4 text-slate-300 font-medium">{getDoctorName(appt.dentistId).split(',')[0]}</td>
                      <td className="py-4 font-mono text-slate-300 font-semibold uppercase">
                        {appt.date} • {appt.time === 'morning' ? 'AM Slot' : 'PM Slot'}
                      </td>
                      <td className="py-4">
                        {appt.status === 'confirmed' ? (
                          <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 font-bold uppercase text-[9px] font-mono tracking-wider">
                            <CheckCircle className="w-3 h-3" />
                            {t.common.activeStatus}
                          </span>
                        ) : (
                          <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-slate-800 text-slate-500 font-bold uppercase text-[9px] font-mono tracking-wider">
                            {t.common.cancelledStatus}
                          </span>
                        )}
                      </td>
                      <td className="py-4 text-right pr-4">
                        {appt.status === 'confirmed' ? (
                          <button
                            onClick={() => onCancelAppointment(appt.id)}
                            className="p-1.5 rounded-lg text-slate-500 hover:text-rose-400 hover:bg-rose-500/5 border border-transparent hover:border-rose-500/10 transition-all"
                            title={t.common.cancelAppt}
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        ) : (
                          <span className="text-[10px] text-slate-600 font-mono italic">Void</span>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>
        )}

      </div>

      {/* Success Modal Confirmation Dialog */}
      <AnimatePresence>
        {showSuccessModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowSuccessModal(false)}
              className="absolute inset-0 bg-slate-950/80 backdrop-blur-md"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="relative bg-slate-900 border border-slate-850 rounded-3xl p-6 md:p-8 max-w-md w-full shadow-2xl text-center z-10 space-y-6"
            >
              {/* Animated checks icon */}
              <div className="w-16 h-16 rounded-full bg-teal-500/10 border border-teal-500/30 flex items-center justify-center mx-auto shadow-inner text-teal-400">
                <Sparkles className="w-8 h-8 animate-pulse" />
              </div>

              <div className="space-y-2">
                <h3 className="text-xl font-extrabold text-white tracking-tight">
                  {t.common.success}
                </h3>
                <p className="text-sm text-slate-300 leading-relaxed font-sans">
                  {t.common.successMsg}
                </p>
              </div>

              {/* Direct schedule confirmation table display */}
              {appointments.length > 0 && (() => {
                const latest = appointments[appointments.length - 1];
                return (
                  <div className="p-4 rounded-xl bg-slate-950 border border-slate-850 text-left text-xs font-mono text-slate-400 space-y-2.5">
                    <div className="flex justify-between border-b border-slate-900 pb-1.5">
                      <span>Service:</span>
                      <span className="text-white font-bold">{getServiceTitle(latest.serviceId)}</span>
                    </div>
                    <div className="flex justify-between border-b border-slate-900 pb-1.5">
                      <span>Doctor:</span>
                      <span className="text-white font-bold">{getDoctorName(latest.dentistId).split(',')[0]}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Preferred:</span>
                      <span className="text-teal-400 font-bold uppercase">{latest.date} • {latest.time === 'morning' ? 'Morning Slot' : 'Afternoon Slot'}</span>
                    </div>
                  </div>
                );
              })()}

              <button
                onClick={() => setShowSuccessModal(false)}
                className="w-full py-3 rounded-xl bg-teal-500 hover:bg-teal-400 text-slate-950 font-bold text-sm tracking-wider uppercase transition-colors"
              >
                Okay, Perfect
              </button>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}

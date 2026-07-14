import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Phone, MessageSquare, Send, X, AlertCircle } from 'lucide-react';
import { Language, TRANSLATIONS } from '../types';

interface FloatingActionsProps {
  currentLang: Language;
}

export default function FloatingActions({ currentLang }: FloatingActionsProps) {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [isCallOpen, setIsCallOpen] = useState(false);
  const [chatMessage, setChatMessage] = useState('');

  const t = TRANSLATIONS[currentLang];

  const handleSendWhatsApp = (e: React.FormEvent) => {
    e.preventDefault();
    if (!chatMessage) return;

    // Direct redirection to real API endpoint with sanitized pre-filled message
    const formattedMessage = encodeURIComponent(chatMessage);
    const whatsappUrl = `https://wa.me/17278356001?text=${formattedMessage}`;
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
    
    setChatMessage('');
    setIsChatOpen(false);
  };

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end space-y-4 font-sans">
      
      {/* Floating Call Panel */}
      <div className="relative">
        <AnimatePresence>
          {isCallOpen && (
            <motion.div
              initial={{ opacity: 0, y: 15, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 15, scale: 0.95 }}
              className="absolute bottom-16 right-0 mb-2 bg-slate-950 border border-slate-800 rounded-2xl p-4.5 shadow-2xl w-60 text-left space-y-3.5"
            >
              <div className="flex justify-between items-center border-b border-slate-900 pb-2">
                <span className="text-xs font-bold uppercase text-slate-400 tracking-wider">Select Location</span>
                <button onClick={() => setIsCallOpen(false)} className="text-slate-500 hover:text-white">
                  <X className="w-4 h-4" />
                </button>
              </div>

              <div className="space-y-3 font-sans text-xs">
                {/* Branch 1 Phone */}
                <div className="p-2.5 rounded-xl bg-slate-900 border border-slate-850 hover:border-slate-800 transition-colors">
                  <span className="block font-bold text-slate-300 uppercase text-[10px] tracking-wide">Trinity Main Office</span>
                  <a href="tel:7278356001" className="block text-sm font-semibold text-teal-400 font-mono mt-0.5 hover:underline">
                    (727) 835-6001
                  </a>
                </div>

                {/* Branch 2 Phone */}
                <div className="p-2.5 rounded-xl bg-slate-900 border border-slate-850 hover:border-slate-800 transition-colors">
                  <span className="block font-bold text-slate-300 uppercase text-[10px] tracking-wide">New Port Richey Office</span>
                  <a href="tel:7274390885" className="block text-sm font-semibold text-sky-400 font-mono mt-0.5 hover:underline">
                    (727) 439-0885
                  </a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Floating Call Action Button */}
        <button
          onClick={() => {
            setIsCallOpen(!isCallOpen);
            setIsChatOpen(false);
          }}
          className="w-14 h-14 rounded-full bg-slate-950 text-sky-400 hover:text-white border border-slate-800 flex items-center justify-center shadow-2xl transition-all duration-300 hover:scale-105"
          title={t.common.callFloat}
        >
          {isCallOpen ? <X className="w-6 h-6 text-sky-400" /> : <Phone className="w-6 h-6 animate-pulse" />}
        </button>
      </div>

      {/* Floating WhatsApp Panel */}
      <div className="relative">
        <AnimatePresence>
          {isChatOpen && (
            <motion.div
              initial={{ opacity: 0, y: 15, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 15, scale: 0.95 }}
              className="absolute bottom-16 right-0 mb-2 bg-slate-950 border border-slate-800 rounded-3xl p-5 shadow-2xl w-80 text-left space-y-4"
            >
              {/* Header Box */}
              <div className="flex gap-3 items-center border-b border-slate-900 pb-3">
                <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center">
                  <MessageSquare className="w-5 h-5 text-emerald-400" />
                </div>
                <div className="flex-grow">
                  <h4 className="text-sm font-bold text-slate-200">Clinical Concierge</h4>
                  <span className="block text-[10px] text-emerald-400 font-mono flex items-center gap-1 mt-0.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 inline-block animate-ping" />
                    Typically replies in 5m
                  </span>
                </div>
                <button onClick={() => setIsChatOpen(false)} className="text-slate-500 hover:text-white p-1">
                  <X className="w-4 h-4" />
                </button>
              </div>

              {/* Simulated chat bubble */}
              <div className="space-y-3 max-h-48 overflow-y-auto pr-1">
                <div className="p-3 rounded-2xl rounded-tl-none bg-slate-900 border border-slate-850 text-xs text-slate-300 leading-normal font-sans font-medium">
                  Hi there! Welcome to Nova Dental Trinity. How can our concierge team assist your smile today?
                </div>

                {/* Helpful templates */}
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {[
                    'Book Dental Implants',
                    'Emergency Toothache help',
                    'Veneers cost consultation'
                  ].map((tpl) => (
                    <button
                      key={tpl}
                      type="button"
                      onClick={() => setChatMessage(tpl)}
                      className="text-[10px] px-2.5 py-1.5 rounded-lg bg-slate-900 border border-slate-850 text-slate-400 hover:text-white hover:border-slate-800 transition-colors"
                    >
                      {tpl}
                    </button>
                  ))}
                </div>
              </div>

              {/* Chat Input form */}
              <form onSubmit={handleSendWhatsApp} className="relative mt-2">
                <input
                  type="text"
                  placeholder="Type a message to our clinic..."
                  value={chatMessage}
                  onChange={(e) => setChatMessage(e.target.value)}
                  className="w-full pl-4 pr-11 py-3 rounded-xl bg-slate-900 border border-slate-850 text-slate-200 placeholder-slate-500 text-xs focus:outline-none focus:border-emerald-500/50"
                />
                <button
                  type="submit"
                  className="absolute top-1/2 right-2 transform -translate-y-1/2 w-8 h-8 rounded-lg bg-emerald-500 text-slate-950 flex items-center justify-center hover:bg-emerald-400 transition-colors"
                >
                  <Send className="w-3.5 h-3.5" />
                </button>
              </form>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Floating WhatsApp Action Button */}
        <button
          onClick={() => {
            setIsChatOpen(!isChatOpen);
            setIsCallOpen(false);
          }}
          className="w-14 h-14 rounded-full bg-emerald-500 text-slate-950 hover:bg-emerald-400 flex items-center justify-center shadow-2xl transition-all duration-300 hover:scale-105"
          title={t.common.whatsAppFloat}
        >
          {isChatOpen ? <X className="w-6 h-6 text-slate-950" /> : <MessageSquare className="w-6 h-6 fill-current text-slate-950" />}
        </button>
      </div>

    </div>
  );
}

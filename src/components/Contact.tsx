'use client';

import { useState } from 'react';
import { useLang } from '@/context/LanguageContext';

export default function Contact() {
  const { t } = useLang();
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
    setForm({ name: '', email: '', message: '' });
  };

  const contactInfo = [
    {
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
      ),
      label: t.contact.info.phone,
      value: '+9647702501154',
    },
    {
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      label: t.contact.info.email,
      value: 'info@jawharatalwirath.com',
    },
    {
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      label: t.contact.info.location,
      value: 'العراق',
    },
    {
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      label: t.contact.info.hours,
      value: t.contact.info.hoursValue,
    },
  ];

  return (
    <section id="contact" className="bg-[#080808] py-24 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#8b1a1a]/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 text-[20rem] font-bold text-[#f0c040]/3 select-none leading-none">联</div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-[#f0c040]/10 border border-[#f0c040]/20 rounded-full px-5 py-2 mb-6">
            <span className="w-2 h-2 rounded-full bg-[#f0c040] animate-pulse" />
            <span className="text-[#f0c040] text-sm font-medium">{t.contact.badge}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            {t.contact.title}
          </h2>
          <p className="text-white/50 text-base max-w-xl mx-auto">
            {t.contact.subtitle}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div>
            <div className="space-y-5 mb-10">
              {contactInfo.map((info, i) => (
                <div key={i} className="flex items-center gap-4 group">
                  <div className="w-12 h-12 rounded-xl bg-[#8b1a1a]/20 border border-[#8b1a1a]/30 flex items-center justify-center text-[#f0c040] flex-shrink-0 group-hover:bg-[#8b1a1a]/40 transition-colors">
                    {info.icon}
                  </div>
                  <div>
                    <div className="text-white/40 text-xs mb-0.5">{info.label}</div>
                    <div className="text-white font-medium text-sm">{info.value}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>


          <div>
            {/* Map placeholder */}
            <div className="rounded-2xl bg-[#111111] border border-white/5 h-56 flex items-center justify-center overflow-hidden relative">
              <div className="absolute inset-0 opacity-20">
                <div className="w-full h-full" style={{
                  backgroundImage: `repeating-linear-gradient(0deg, transparent, transparent 30px, #f0c040 30px, #f0c040 31px), repeating-linear-gradient(90deg, transparent, transparent 30px, #f0c040 30px, #f0c040 31px)`,
                  backgroundSize: '31px 31px',
                }} />
              </div>
              <div className="relative z-10 text-center">
                <div className="w-10 h-10 rounded-full bg-[#8b1a1a] border-4 border-[#f0c040] mx-auto mb-3 flex items-center justify-center">
                  <div className="w-2 h-2 rounded-full bg-white" />
                </div>
                <span className="text-white/60 text-sm">جوهرة الوراث</span>
              </div>
            </div>
          
          </div>

        </div>
      </div>
    </section>
  );


}

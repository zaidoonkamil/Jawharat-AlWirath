'use client';

import { useLang } from '@/context/LanguageContext';

const features = [
  {
    key: 'authentic' as const,
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
      </svg>
    ),
    color: 'from-[#f0c040] to-[#c8972a]',
    borderColor: 'border-[#f0c040]/20',
    hoverBg: 'hover:bg-[#f0c040]/5',
  },
  {
    key: 'premium' as const,
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
      </svg>
    ),
    color: 'from-[#8b1a1a] to-[#c8392a]',
    borderColor: 'border-[#8b1a1a]/30',
    hoverBg: 'hover:bg-[#8b1a1a]/5',
  },
  {
    key: 'custom' as const,
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
    color: 'from-[#1a3a8b] to-[#2a5ac8]',
    borderColor: 'border-[#1a3a8b]/30',
    hoverBg: 'hover:bg-[#1a3a8b]/5',
  },
  {
    key: 'fresh' as const,
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    color: 'from-[#1a6b4a] to-[#2ac870]',
    borderColor: 'border-[#1a6b4a]/30',
    hoverBg: 'hover:bg-[#1a6b4a]/5',
  },
];

export default function WhyUs() {
  const { t } = useLang();

  return (
    <section id="why-us" className="bg-[#0a0a0a] py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full border border-[#f0c040]/5" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full border border-[#f0c040]/5" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full border border-[#f0c040]/5" />
      </div>

      {/* Chinese characters */}
      <div className="absolute bottom-10 right-10 text-6xl font-bold text-[#f0c040]/5 select-none">品质</div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-[#8b1a1a]/20 border border-[#8b1a1a]/30 rounded-full px-5 py-2 mb-6">
            <span className="w-2 h-2 rounded-full bg-[#f0c040]" />
            <span className="text-[#f0c040] text-sm font-medium">{t.whyUs.badge}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            {t.whyUs.title}
          </h2>
          <p className="text-white/50 text-base max-w-2xl mx-auto">
            {t.whyUs.subtitle}
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feat) => {
            const item = t.whyUs.features[feat.key];
            return (
              <div
                key={feat.key}
                className={`group relative bg-[#111111] border ${feat.borderColor} rounded-2xl p-8 ${feat.hoverBg} transition-all duration-500 hover:-translate-y-2 hover:shadow-xl`}
              >
                {/* Icon */}
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${feat.color} p-0.5 mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <div className="w-full h-full rounded-[10px] bg-[#111111] flex items-center justify-center text-white">
                    {feat.icon}
                  </div>
                </div>

                <h3 className="text-white font-bold text-lg mb-3">
                  {item.title}
                </h3>
                <p className="text-white/50 text-sm leading-relaxed">
                  {item.desc}
                </p>

                {/* Hover indicator */}
                <div className={`absolute bottom-0 left-6 right-6 h-0.5 bg-gradient-to-r ${feat.color} scale-x-0 group-hover:scale-x-100 transition-transform duration-300 rounded-full`} />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

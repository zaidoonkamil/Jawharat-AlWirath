'use client';

import { useLang } from '@/context/LanguageContext';

export default function About() {
  const { t } = useLang();

  const features = [
    {
      key: 'quality' as const,
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
        </svg>
      ),
    },
    {
      key: 'variety' as const,
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
        </svg>
      ),
    },
    {
      key: 'delivery' as const,
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0" />
        </svg>
      ),
    },
  ];

  return (
    <section id="about" className="bg-[#0a0a0a] py-24 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#8b1a1a]/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#c8972a]/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Visual Side */}
          <div className="relative order-2 lg:order-1">
            {/* Main decorative block */}
            <div className="relative">
              <div className="w-full aspect-square max-w-md mx-auto relative">
                {/* Outer ring */}
                <div className="absolute inset-0 rounded-full border-2 border-[#f0c040]/10 animate-spin" style={{ animationDuration: '20s' }} />
                <div className="absolute inset-4 rounded-full border border-[#8b1a1a]/20" />

                {/* Center piece */}
                <div className="absolute inset-8 rounded-full bg-gradient-to-br from-[#1a0a0a] to-[#0a0a0a] border border-[#f0c040]/20 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-8xl mb-4">🍡</div>
                    <div className="text-[#f0c040] font-bold text-xl">
                      {/* ornament */}
                    </div>
                  </div>
                </div>

                {/* Floating elements */}
                <div className="absolute top-4 right-12 w-14 h-14 rounded-full bg-[#8b1a1a]/80 border border-[#f0c040]/30 flex items-center justify-center text-2xl">
                  🥮
                </div>
                <div className="absolute bottom-4 left-12 w-14 h-14 rounded-full bg-[#1a0a0a] border border-[#f0c040]/30 flex items-center justify-center text-2xl">
                  🍭
                </div>
                <div className="absolute left-0 top-1/2 -translate-y-1/2 w-14 h-14 rounded-full bg-[#1a1a0a] border border-[#f0c040]/30 flex items-center justify-center text-2xl">
                  🧁
                </div>
                <div className="absolute right-0 top-1/2 -translate-y-1/2 w-14 h-14 rounded-full bg-[#0a1a1a] border border-[#f0c040]/30 flex items-center justify-center text-2xl">
                  🍬
                </div>

                {/* Chinese characters around */}
                <div className="absolute top-1/4 left-2 text-[#f0c040]/20 font-bold text-2xl">福</div>
                <div className="absolute top-1/4 right-2 text-[#f0c040]/20 font-bold text-2xl">禄</div>
                <div className="absolute bottom-1/4 left-2 text-[#f0c040]/20 font-bold text-2xl">寿</div>
                <div className="absolute bottom-1/4 right-2 text-[#f0c040]/20 font-bold text-2xl">喜</div>
              </div>
            </div>

            {/* Years badge */}
            <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-[#c8972a] to-[#f0c040] text-black font-bold px-8 py-3 rounded-full shadow-xl">
              +10 {t.stats.experience}
            </div>
          </div>

          {/* Text Side */}
          <div className="order-1 lg:order-2">
            <div className="inline-flex items-center gap-2 bg-[#8b1a1a]/20 border border-[#8b1a1a]/30 rounded-full px-5 py-2 mb-6">
              <span className="w-2 h-2 rounded-full bg-[#f0c040]" />
              <span className="text-[#f0c040] text-sm font-medium">{t.about.badge}</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
              {t.about.title}
            </h2>

            <p className="text-white/60 text-base leading-relaxed mb-6">
              {t.about.description1}
            </p>
            <p className="text-white/60 text-base leading-relaxed mb-10">
              {t.about.description2}
            </p>

            {/* Feature list */}
            <div className="space-y-5">
              {features.map((feat) => (
                <div key={feat.key} className="flex items-start gap-4 group">
                  <div className="w-12 h-12 rounded-xl bg-[#8b1a1a]/20 border border-[#8b1a1a]/30 flex items-center justify-center text-[#f0c040] flex-shrink-0 group-hover:bg-[#8b1a1a]/40 transition-colors">
                    {feat.icon}
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-1">{t.about.features[feat.key]}</h4>
                    <p className="text-white/50 text-sm">{t.about.features[`${feat.key}Desc` as keyof typeof t.about.features]}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

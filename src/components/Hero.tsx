'use client';

import { useLang } from '@/context/LanguageContext';

export default function Hero() {
  const { t } = useLang();

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#0a0a0a]"
    >
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23f0c040' fill-opacity='1'%3E%3Cpath d='M30 0L60 30L30 60L0 30z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            backgroundSize: '60px 60px',
          }}
        />
      </div>

      {/* Gradient blobs */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-[#8b1a1a]/20 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-[#c8972a]/15 rounded-full blur-3xl" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#8b1a1a]/10 rounded-full blur-3xl" />

      {/* Decorative Chinese elements */}
      <div className="absolute top-20 right-10 opacity-10 text-[#f0c040] text-8xl font-bold select-none">福</div>
      <div className="absolute bottom-20 left-10 opacity-10 text-[#f0c040] text-8xl font-bold select-none">甜</div>
      <div className="absolute top-40 left-1/4 opacity-5 text-[#f0c040] text-6xl font-bold select-none">喜</div>
      <div className="absolute bottom-40 right-1/4 opacity-5 text-[#f0c040] text-6xl font-bold select-none">美</div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-[#f0c040]/10 border border-[#f0c040]/30 rounded-full px-5 py-2 mb-8">
          <span className="w-2 h-2 rounded-full bg-[#f0c040] animate-pulse" />
          <span className="text-[#f0c040] text-sm font-medium tracking-wide">{t.hero.badge}</span>
        </div>

        {/* Title */}
        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-white mb-4 leading-tight">
          {t.hero.title}
        </h1>

        {/* Subtitle */}
        <div className="flex items-center justify-center gap-4 mb-8">
          <div className="h-px w-16 bg-gradient-to-r from-transparent to-[#f0c040]" />
          <h2 className="text-[#f0c040] text-lg sm:text-xl font-medium tracking-widest uppercase">
            {t.hero.subtitle}
          </h2>
          <div className="h-px w-16 bg-gradient-to-l from-transparent to-[#f0c040]" />
        </div>

        {/* Description */}
        <p className="text-white/60 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed mb-12">
          {t.hero.description}
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#products"
            className="group relative px-8 py-4 bg-gradient-to-r from-[#c8972a] to-[#f0c040] text-black font-bold rounded-full overflow-hidden transition-all duration-300 hover:shadow-[0_0_30px_rgba(240,192,64,0.4)] hover:scale-105 text-sm sm:text-base"
          >
            <span className="relative z-10">{t.hero.cta}</span>
          </a>
          <a
            href="#contact"
            className="px-8 py-4 border border-white/20 text-white rounded-full font-medium hover:border-[#f0c040]/50 hover:text-[#f0c040] transition-all duration-300 text-sm sm:text-base"
          >
            {t.hero.ctaSecondary}
          </a>
        </div>

        {/* Scroll indicator */}
        <div className="mt-16 flex flex-col items-center gap-2 animate-bounce">
          <span className="text-white/30 text-xs">
            {/* scroll */}
          </span>
          <div className="w-5 h-8 border border-white/20 rounded-full flex items-start justify-center p-1">
            <div className="w-1 h-2 bg-[#f0c040] rounded-full animate-bounce" />
          </div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0a0a0a] to-transparent" />
    </section>
  );
}

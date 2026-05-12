'use client';

import { useLang } from '@/context/LanguageContext';

const products = [
  {
    key: 'mooncake' as const,
    emoji: '🥮',
    gradient: 'from-[#8b1a1a] to-[#c8972a]',
    bgGlow: 'bg-[#8b1a1a]',
  },
  {
    key: 'mochi' as const,
    emoji: '🍡',
    gradient: 'from-[#1a3a8b] to-[#3a6ac8]',
    bgGlow: 'bg-[#1a3a8b]',
  },
  {
    key: 'dragonsBeard' as const,
    emoji: '🧵',
    gradient: 'from-[#2a6b1a] to-[#4ac83a]',
    bgGlow: 'bg-[#2a6b1a]',
  },
  {
    key: 'nougat' as const,
    emoji: '🍬',
    gradient: 'from-[#6b1a6b] to-[#c83ac8]',
    bgGlow: 'bg-[#6b1a6b]',
  },
  {
    key: 'candy' as const,
    emoji: '🍭',
    gradient: 'from-[#6b4a1a] to-[#c8903a]',
    bgGlow: 'bg-[#6b4a1a]',
  },
  {
    key: 'jelly' as const,
    emoji: '🍵',
    gradient: 'from-[#1a6b4a] to-[#3ac890]',
    bgGlow: 'bg-[#1a6b4a]',
  },
];

export default function Products() {
  const { t } = useLang();

  return (
    <section id="products" className="bg-[#080808] py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-1/4 w-64 h-64 rounded-full bg-[#f0c040] blur-3xl" />
        <div className="absolute bottom-20 right-1/4 w-64 h-64 rounded-full bg-[#8b1a1a] blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-[#f0c040]/10 border border-[#f0c040]/20 rounded-full px-5 py-2 mb-6">
            <span className="w-2 h-2 rounded-full bg-[#f0c040]" />
            <span className="text-[#f0c040] text-sm font-medium">{t.products.badge}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            {t.products.title}
          </h2>
          <p className="text-white/50 text-base max-w-2xl mx-auto">
            {t.products.subtitle}
          </p>

          {/* Decorative divider */}
          <div className="flex items-center justify-center gap-4 mt-6">
            <div className="h-px w-16 bg-gradient-to-r from-transparent to-[#f0c040]/50" />
            <div className="text-[#f0c040] text-xl">✦</div>
            <div className="h-px w-16 bg-gradient-to-l from-transparent to-[#f0c040]/50" />
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => {
            const item = t.products.items[product.key];
            return (
              <div
                key={product.key}
                className="group relative bg-[#111111] border border-white/5 rounded-2xl overflow-hidden hover:border-[#f0c040]/20 transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl"
              >
                {/* Top gradient bar */}
                <div className={`h-1 w-full bg-gradient-to-r ${product.gradient}`} />

                {/* Glow effect */}
                <div className={`absolute top-0 left-1/2 -translate-x-1/2 w-32 h-32 ${product.bgGlow}/20 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

                <div className="p-8">
                  {/* Tag */}
                  <div className="flex items-start justify-between mb-6">
                    <span className={`text-xs font-semibold px-3 py-1 rounded-full bg-gradient-to-r ${product.gradient} text-white`}>
                      {item.tag}
                    </span>
                    {/* Emoji */}
                    <div className="text-4xl group-hover:scale-125 transition-transform duration-500">
                      {product.emoji}
                    </div>
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#f0c040] transition-colors">
                    {item.name}
                  </h3>
                  <p className="text-white/50 text-sm leading-relaxed">
                    {item.desc}
                  </p>

                  {/* Bottom line */}
                  <div className="mt-6 pt-6 border-t border-white/5 flex items-center justify-between">
                    <div className="flex gap-1">
                      {[...Array(5)].map((_, i) => (
                        <span key={i} className="text-[#f0c040] text-xs">★</span>
                      ))}
                    </div>
                    <button className={`text-xs font-medium px-4 py-2 rounded-full bg-gradient-to-r ${product.gradient} text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300`}>
                      {/* View */}→
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

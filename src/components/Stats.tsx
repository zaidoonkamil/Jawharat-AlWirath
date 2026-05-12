'use client';

import { useLang } from '@/context/LanguageContext';

const statsData = [
  { value: '200+', key: 'products' as const, icon: '🍬' },
  { value: '10+', key: 'experience' as const, icon: '⭐' },
  { value: '5000+', key: 'clients' as const, icon: '😊' },
  { value: '100%', key: 'quality' as const, icon: '✓' },
];

export default function Stats() {
  const { t } = useLang();

  return (
    <section className="bg-gradient-to-r from-[#8b1a1a] via-[#a82020] to-[#8b1a1a] py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {statsData.map((stat) => (
            <div key={stat.key} className="text-center group">
              <div className="text-4xl mb-2">{stat.icon}</div>
              <div className="text-4xl sm:text-5xl font-bold text-[#f0c040] mb-2 group-hover:scale-110 transition-transform duration-300">
                {stat.value}
              </div>
              <div className="text-white/80 text-sm font-medium">
                {t.stats[stat.key]}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

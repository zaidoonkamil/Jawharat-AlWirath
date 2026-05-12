import type { Metadata } from "next";
import { Cairo, Noto_Serif_SC } from "next/font/google";
import "./globals.css";

const cairo = Cairo({
  variable: "--font-cairo",
  subsets: ["arabic", "latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

const notoSerifSC = Noto_Serif_SC({
  variable: "--font-chinese",
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "جوهرة الوراث | Jawharat Al Warath - حلويات صينية أصيلة",
  description:
    "جوهرة الوراث للتجارة العامة ذ.م.م - أرقى وأشهى الحلويات الصينية الأصيلة. Jawharat Al Warath General Trading Company LLC - Premium authentic Chinese confectionery.",
  keywords: "حلويات صينية, Chinese sweets, جوهرة الوراث, Jawharat Al Warath, موتشي, كعكة القمر, Mochi, Mooncake",
  openGraph: {
    title: "جوهرة الوراث | Jawharat Al Warath",
    description: "أرقى الحلويات الصينية الأصيلة - Premium authentic Chinese confectionery",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ar"
      className={`${cairo.variable} ${notoSerifSC.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[#0a0a0a]">{children}</body>
    </html>
  );
}

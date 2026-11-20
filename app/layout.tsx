import type { Metadata } from "next";
import { Cairo } from "next/font/google";
import "./globals.css";
import { AppProvider } from "./context/AppContext";
import { Analytics } from "@vercel/analytics/next";

const cairo = Cairo({
  variable: "--font-cairo",
  subsets: ["arabic", "latin"],
});

import type { Metadata } from "next";
import { Cairo } from "next/font/google";
import "./globals.css";
import { AppProvider } from "./context/AppContext";
import { Analytics } from "@vercel/analytics/next";

const cairo = Cairo({
  variable: "--font-cairo",
  subsets: ["arabic", "latin"],
});

/*
  تحديد الرابط الأساسي للموقع (Base URL):
  - يعتمد أولاً على متغير البيئة NEXT_PUBLIC_SITE_URL إذا تم تعيينه.
  - يعتمد تلقائياً على دومين الاستضافة عند الرفع على Vercel.
  - يعتمد على الدومين الافتراضي https://meayar.com كخيار احتياطي.
  - ضروري جداً لتوليد الروابط المطلقة لشعار الموقع (og:image) حتى يتعرف عليها الواتساب وفيسبوك وتيليجرام تلقائياً.
*/
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL
  ? process.env.NEXT_PUBLIC_SITE_URL
  : process.env.VERCEL_PROJECT_PRODUCTION_URL
  ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
  : process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : 'https://meayar.com';

/*
  بيانات الميتا والمشاركة عبر وسائل التواصل (Open Graph / WhatsApp / Twitter):
  - تضمن ظهور شعار مؤسسة معيار الرسمي بحجم ووضوح مثالي عند إرسال الرابط في واتساب وتطبيقات المحادثة.
  - تظهر عنوان الموقع والتعريف المختصر بأنشطة وخدمات المؤسسة.
*/
export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "معيار | للحلول الهندسية والبرمجية المتكاملة",
    template: "%s | معيار",
  },
  description: "مؤسسة معيار - خبراء في تقديم الحلول الهندسية والبرمجية المتكاملة: تصميم أنظمة المباني (MEP)، دراسة وتوريد خطوط الإنتاج، تصنيع قطع الغيار، وتصميم وتطوير مواقع الويب.",
  keywords: [
    "معيار",
    "مؤسسة معيار",
    "حلول هندسية",
    "تصميم مواقع الويب",
    "برمجة مواقع",
    "أنظمة MEP",
    "خطوط إنتاج",
    "استشارات ميكانيكية",
    "قطع غيار مخصصة",
    "صيانة عن بعد",
  ],
  authors: [{ name: "مؤسسة معيار" }],
  creator: "مؤسسة معيار",
  publisher: "مؤسسة معيار",
  openGraph: {
    type: "website",
    locale: "ar_SA",
    url: siteUrl,
    siteName: "مؤسسة معيار للحلول الهندسية والبرمجية",
    title: "معيار | للحلول الهندسية والبرمجية المتكاملة",
    description: "مؤسسة معيار - خبراء في تقديم الحلول الهندسية والبرمجية المتكاملة: تصميم أنظمة المباني (MEP)، خطوط الإنتاج، وتطوير وتصميم مواقع الويب.",
    images: [
      {
        url: "/og-image.jpg",
        width: 800,
        height: 800,
        alt: "شعار مؤسسة معيار للحلول الهندسية والبرمجية",
        type: "image/jpeg",
      },
    ],
  },
  twitter: {
    card: "summary",
    title: "معيار | للحلول الهندسية والبرمجية المتكاملة",
    description: "مؤسسة معيار - خبراء في تقديم الحلول الهندسية والبرمجية المتكاملة: تصميم أنظمة المباني (MEP)، خطوط الإنتاج، وتطوير وتصميم مواقع الويب.",
    images: ["/og-image.jpg"],
  },
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/icon-192.png", sizes: "192x192", type: "image/png" },
      { url: "/icon-512.png", sizes: "512x512", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl" suppressHydrationWarning className={`${cairo.variable}`}>
      <body className="min-h-screen flex flex-col font-sans bg-background text-foreground antialiased transition-colors duration-200">
        <AppProvider>
          {children}
        </AppProvider>
        <Analytics />
      </body>
    </html>
  );
}

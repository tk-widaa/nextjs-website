import type { Metadata } from "next";
import { Cairo } from "next/font/google";
import "./globals.css";
import { AppProvider } from "./context/AppContext";
import { Analytics } from "@vercel/analytics/next";

const cairo = Cairo({
  variable: "--font-cairo",
  subsets: ["arabic", "latin"],
});

export const metadata: Metadata = {
  title: "معيار | للحلول الهندسية والبرمجية المتكاملة",
  description: "خبراء في تقديم الحلول الهندسية المتكاملة في مجال أنظمة المباني وخطوط الإنتاج وتطوير البرمجيات.",
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

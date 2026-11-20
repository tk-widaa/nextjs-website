"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useApp } from './context/AppContext';

export default function Home() {
  const { language, theme, toggleLanguage, toggleTheme, t } = useApp();

  // Mobile Menu State
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Scroll & UI States
  const [isScrolled, setIsScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [showBackToTop, setShowBackToTop] = useState(false);

  // Calculators State
  const [hvacArea, setHvacArea] = useState<number | ''>('');
  const [hvacResult, setHvacResult] = useState<number | null>(null);

  const [fireArea, setFireArea] = useState<number | ''>('');
  const [fireResult, setFireResult] = useState<number | null>(null);

  // Contact Form State
  const [clientService, setClientService] = useState('');
  const [clientDetails, setClientDetails] = useState('');
  const [sendMethod, setSendMethod] = useState<'whatsapp' | 'gmail'>('whatsapp');

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;

      // 1. Navbar Scrolled Style
      if (scrollY > 30) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // 2. Scroll Progress Bar
      const docHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrollPercent = docHeight > 0 ? (scrollY / docHeight) * 100 : 0;
      setScrollProgress(scrollPercent);

      // 3. Back to Top Button
      if (scrollY > 350) {
        setShowBackToTop(true);
      } else {
        setShowBackToTop(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Professional Scroll Reveal Animation
  useEffect(() => {
    const elements = document.querySelectorAll(
      'main h1, main h2, main h3, main h4, main p, main .btn-primary, main #services .grid > a, main #tools .grid > div, main section img'
    );

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('reveal-visible');
          } else {
            entry.target.classList.remove('reveal-visible');
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -30px 0px',
      }
    );

    elements.forEach((element) => {
      element.classList.add('reveal-element');

      if (element.matches('#services .grid > a, #tools .grid > div')) {
        const cardIndex = Array.from(element.parentElement?.children || []).indexOf(element);
        element.classList.add('reveal-card');
        (element as HTMLElement).style.setProperty('--reveal-delay', `${cardIndex * 90}ms`);
      }

      observer.observe(element);
    });

    return () => observer.disconnect();
  }, [language]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const calculateHvac = () => {
    if (typeof hvacArea === 'number' && hvacArea > 0) {
      setHvacResult(Number((hvacArea / 12).toFixed(1)));
    } else {
      setHvacResult(null);
    }
  };

  const calculateFireExtinguisher = () => {
    if (typeof fireArea === 'number' && fireArea > 0) {
      setFireResult(Math.ceil(fireArea / 200));
    } else {
      setFireResult(null);
    }
  };

  const handleSubmitOrder = (e: React.FormEvent) => {
    e.preventDefault();

    const isAr = language === 'ar';
    const message = isAr
      ? `السلام عليكم، أود طلب خدمة هندسية:\n\n[نوع الخدمة]: ${clientService || 'غير محدد'}\n[التفاصيل]: ${clientDetails || 'لا توجد تفاصيل إضافية'}`
      : `Hello, I would like to request an engineering service:\n\n[Service Type]: ${clientService || 'Not specified'}\n[Details]: ${clientDetails || 'No additional details'}`;

    if (sendMethod === 'whatsapp') {
      const encodedMessage = encodeURIComponent(message);
      window.open(`https://wa.me/249116613320?text=${encodedMessage}`, '_blank', 'noopener,noreferrer');
    } else {
      const subject = encodeURIComponent(isAr ? 'طلب خدمة هندسية جديدة' : 'New Engineering Service Request');
      const body = encodeURIComponent(message);
      window.location.href = `mailto:hamzaelzain.eng@gmail.com?subject=${subject}&body=${body}`;
    }
  };

  return (
    <div className="w-full bg-background text-foreground font-sans relative selection:bg-primary/20 transition-colors duration-200">
      {/* Scroll Progress Bar */}
      <div
        className="fixed top-0 left-0 h-1 bg-primary z-60 transition-all duration-150 ease-out"
        style={{ width: `${scrollProgress}%` }}
      />

      {/* Enhanced Top Navigation Bar */}
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-white/95 dark:bg-slate-900/95 backdrop-blur-md shadow-md py-3'
            : 'bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm py-4'
        } border-b border-gray-100 dark:border-slate-800`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10 flex justify-between items-center">
          {/* Brand Logo & Name */}
          <Link href="/" className="flex items-center gap-3 transition-opacity hover:opacity-85 group">
            <div className="relative w-9 h-9 rounded-full overflow-hidden shrink-0 ring-2 ring-primary/20 group-hover:ring-primary transition-all">
              <Image
                src="/images/Profile/logo.jpg"
                alt={t('brandName')}
                fill
                sizes="36px"
                className="object-cover"
                priority
              />
            </div>
            <div className="flex flex-col">
              <span className="text-xl md:text-2xl font-black text-primary tracking-tight">
                {t('brandName')}
              </span>
              <span className="text-[10px] text-gray-500 dark:text-gray-400 font-medium leading-none hidden sm:inline">
                {t('brandSub')}
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            <Link
              href="#about"
              className="px-3 py-1.5 rounded-lg text-sm font-semibold text-gray-700 dark:text-gray-200 hover:text-primary dark:hover:text-primary hover:bg-gray-100/70 dark:hover:bg-slate-800/70 transition-all"
            >
              {t('navAbout')}
            </Link>
            <Link
              href="#services"
              className="px-3 py-1.5 rounded-lg text-sm font-semibold text-gray-700 dark:text-gray-200 hover:text-primary dark:hover:text-primary hover:bg-gray-100/70 dark:hover:bg-slate-800/70 transition-all"
            >
              {t('navServices')}
            </Link>
            <Link
              href="#tools"
              className="px-3 py-1.5 rounded-lg text-sm font-semibold text-gray-700 dark:text-gray-200 hover:text-primary dark:hover:text-primary hover:bg-gray-100/70 dark:hover:bg-slate-800/70 transition-all"
            >
              {t('navTools')}
            </Link>
            <Link
              href="#portfolio"
              className="px-3 py-1.5 rounded-lg text-sm font-semibold text-gray-700 dark:text-gray-200 hover:text-primary dark:hover:text-primary hover:bg-gray-100/70 dark:hover:bg-slate-800/70 transition-all"
            >
              {t('navPortfolio')}
            </Link>
            <Link
              href="#contact"
              className="px-3 py-1.5 rounded-lg text-sm font-semibold text-gray-700 dark:text-gray-200 hover:text-primary dark:hover:text-primary hover:bg-gray-100/70 dark:hover:bg-slate-800/70 transition-all"
            >
              {t('navContact')}
            </Link>
          </nav>

          {/* Desktop Controls (Language + Theme + CTA) */}
          <div className="hidden md:flex items-center gap-3">
            {/* Language Switcher */}
            <button
              onClick={toggleLanguage}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-gray-200 dark:border-slate-700 bg-white/70 dark:bg-slate-800/70 text-xs font-bold text-gray-700 dark:text-gray-200 hover:border-primary dark:hover:border-primary hover:text-primary transition-all cursor-pointer shadow-xs"
              title={language === 'ar' ? 'Switch to English' : 'التحويل إلى العربية'}
              aria-label="Toggle language"
            >
              <svg className="w-3.5 h-3.5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
              </svg>
              <span>{language === 'ar' ? 'English' : 'العربية'}</span>
            </button>

            {/* Theme Switcher */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg border border-gray-200 dark:border-slate-700 bg-white/70 dark:bg-slate-800/70 text-gray-700 dark:text-gray-200 hover:border-primary dark:hover:border-primary hover:text-primary transition-all cursor-pointer shadow-xs"
              title={theme === 'light' ? t('switchThemeDark') : t('switchThemeLight')}
              aria-label="Toggle theme"
            >
              {theme === 'light' ? (
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                </svg>
              ) : (
                <svg className="w-4 h-4 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              )}
            </button>

            {/* CTA Button */}
            <Link
              href="#contact"
              className="btn-primary text-xs font-bold py-2 px-4 shadow-sm"
            >
              {t('navRequestService')}
            </Link>
          </div>

          {/* Mobile Actions: Language + Theme + Menu Hamburger */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={toggleLanguage}
              className="px-2 py-1 rounded border border-gray-200 dark:border-slate-700 text-xs font-bold text-gray-700 dark:text-gray-200"
              aria-label="Language"
            >
              {language === 'ar' ? 'EN' : 'عربي'}
            </button>

            <button
              onClick={toggleTheme}
              className="p-1.5 rounded border border-gray-200 dark:border-slate-700 text-gray-700 dark:text-gray-200"
              aria-label="Theme"
            >
              {theme === 'light' ? (
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                </svg>
              ) : (
                <svg className="w-4 h-4 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              )}
            </button>

            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-primary p-2 focus:outline-none active:scale-95 transition-transform"
              aria-label="Menu"
            >
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                <path d="M4 6H20" className={`transition-all duration-300 origin-center ${isMenuOpen ? "translate-y-[6px] rotate-45" : ""}`} />
                <path d="M4 12H20" className={`transition-all duration-300 ${isMenuOpen ? "opacity-0 scale-0" : "opacity-100"}`} />
                <path d="M4 18H20" className={`transition-all duration-300 origin-center ${isMenuOpen ? "-translate-y-[6px] -rotate-45" : ""}`} />
              </svg>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Drawer */}
      <div
        className={`fixed inset-0 z-40 md:hidden transition-all duration-500 ease-in-out ${
          isMenuOpen ? 'visible opacity-100' : 'invisible opacity-0 pointer-events-none'
        }`}
      >
        <div
          onClick={() => setIsMenuOpen(false)}
          className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        />

        <div
          className={`absolute top-0 end-0 h-full w-[80%] max-w-sm bg-white dark:bg-slate-900 shadow-2xl pt-24 px-6 transition-transform duration-500 ease-in-out ${
            isMenuOpen ? 'translate-x-0' : 'rtl:translate-x-full ltr:-translate-x-full'
          } border-s border-gray-100 dark:border-slate-800 flex flex-col`}
        >
          <div className="flex flex-col gap-5 text-lg font-bold text-gray-800 dark:text-gray-100">
            <Link href="#about" onClick={() => setIsMenuOpen(false)} className="hover:text-primary transition-colors py-1">
              {t('navAbout')}
            </Link>
            <Link href="#services" onClick={() => setIsMenuOpen(false)} className="hover:text-primary transition-colors py-1">
              {t('navServices')}
            </Link>
            <Link href="#tools" onClick={() => setIsMenuOpen(false)} className="hover:text-primary transition-colors py-1">
              {t('navTools')}
            </Link>
            <Link href="#portfolio" onClick={() => setIsMenuOpen(false)} className="hover:text-primary transition-colors py-1">
              {t('navPortfolio')}
            </Link>
            <Link href="#contact" onClick={() => setIsMenuOpen(false)} className="hover:text-primary transition-colors py-1">
              {t('navContact')}
            </Link>

            <Link
              href="#contact"
              onClick={() => setIsMenuOpen(false)}
              className="btn-primary mt-4 w-full text-center py-3"
            >
              {t('navRequestService')}
            </Link>
          </div>
        </div>
      </div>

      <main className="pt-24 md:pt-28">
        {/* Hero Section */}
        <section className="px-6 md:px-10 py-16 md:py-28 border-b border-gray-100 dark:border-slate-800 bg-white dark:bg-slate-900 overflow-hidden relative min-h-[70vh] flex items-center">
          <div className="absolute md:hidden inset-0 z-0 overflow-hidden">
            <Image
              src="/paper.webp"
              alt="Background"
              fill
              className="object-cover opacity-60 dark:opacity-20"
              sizes="100vw"
              priority
            />
            {/* 
              تدرج لوني أبيض مخصص لشاشات الجوال:
              - يبدأ باللون الأبيض الكثيف (الغامق) من الأسفل حيث تتركز النصوص والأزرار.
              - يتدرج صعوداً إلى اللون الفاتح والشفاف في الأعلى.
              - الوظيفة البرمجية: عزل خلفية المخطط الهندسي تماماً أسفل الشاشة لجعل نصوص الترحيب والأزرار واضحة وسهلة القراءة للمستخدم بدون أي تشويش.
              - يدعم الوضع الداكن تلقائياً بتدرج لوني ملائم (dark:from-slate-900).
            */}
            <div className="absolute inset-0 bg-gradient-to-t from-white via-white/85 to-transparent dark:from-slate-900 dark:via-slate-900/85 dark:to-transparent pointer-events-none" />
          </div>

          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center relative z-10 w-full">
            <div className="fade-in-up">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 dark:text-white leading-[1.25] mb-6">
                {t('heroTitleStart')}{' '}
                <span className="text-primary">{t('heroTitleHighlight')}</span>
              </h1>
              <p className="text-base md:text-xl text-gray-700 dark:text-gray-300 mb-8 leading-relaxed max-w-xl">
                {t('heroDescription')}
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="#contact" className="btn-primary text-base md:text-lg px-8 py-3.5">
                  {t('heroCtaPrimary')}
                </Link>
                <Link
                  href="#services"
                  className="px-6 py-3.5 border-2 border-primary text-primary font-bold rounded-lg hover:bg-primary/5 dark:hover:bg-primary/10 transition-colors text-base md:text-lg inline-flex items-center justify-center"
                >
                  {t('heroCtaSecondary')}
                </Link>
              </div>
            </div>

            <div className="hidden md:block relative h-[460px] w-full fade-in-up delay-200">
              <Image
                src="/paper.webp"
                alt="Engineering blueprints"
                fill
                className="object-cover rounded-2xl shadow-xl border border-gray-100 dark:border-slate-800"
                sizes="50vw"
                priority
              />
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-16 md:py-24 px-6 md:px-10 max-w-7xl mx-auto text-center">
          <h2 className="text-xs md:text-sm font-bold text-primary mb-2 uppercase tracking-widest">
            {t('aboutTag')}
          </h2>
          <h3 className="text-2xl md:text-4xl font-bold mb-6 text-gray-900 dark:text-white">
            {t('aboutHeading')}
          </h3>
          <p className="text-base md:text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            {t('aboutDescription')}
          </p>
        </section>

        {/* Services Section with Creative Thematic Background Cards */}
        <section id="services" className="py-16 md:py-24 bg-gray-50 dark:bg-slate-950 border-y border-gray-100 dark:border-slate-800 px-6 md:px-10">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-xs md:text-sm font-bold text-primary mb-2 uppercase tracking-widest">
                {t('servicesTag')}
              </h2>
              <h3 className="text-2xl md:text-4xl font-bold text-gray-900 dark:text-white">
                {t('servicesHeading')}
              </h3>
            </div>

            {/* The 6 Services Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Card 1: MEP */}
              <Link
                href="/services/mep"
                className="relative overflow-hidden bg-gradient-to-br from-white via-white to-blue-50/50 dark:from-slate-900 dark:via-slate-900 dark:to-blue-950/25 p-8 card-hover shadow-soft border border-gray-200/80 dark:border-slate-800 flex flex-col group block"
              >
                {/* Decorative Thematic Background - Airflow, HVAC & Piping */}
                <div className="absolute -bottom-8 -end-8 w-44 h-44 bg-blue-500/10 dark:bg-blue-400/10 rounded-full blur-2xl group-hover:bg-blue-500/20 transition-all pointer-events-none" />
                <div className="absolute -bottom-5 -end-5 w-40 h-40 text-primary/10 dark:text-primary/15 group-hover:text-primary/25 group-hover:scale-110 transition-all duration-500 pointer-events-none select-none">
                  <svg viewBox="0 0 160 160" fill="none" stroke="currentColor" className="w-full h-full">
                    <circle cx="120" cy="120" r="100" strokeWidth="1" strokeDasharray="4 4" />
                    <circle cx="120" cy="120" r="75" strokeWidth="1.5" />
                    <circle cx="120" cy="120" r="50" strokeWidth="1" strokeDasharray="3 3" />
                    <circle cx="120" cy="120" r="25" strokeWidth="2" />
                    <path d="M 20 120 L 120 120 L 120 20" strokeWidth="2" strokeLinecap="round" />
                    <path d="M 40 100 L 100 100 L 100 40" strokeWidth="1.5" strokeDasharray="6 3" />
                    <path d="M 60 70 L 75 55 L 90 70" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M 75 55 L 75 90" strokeWidth="2" strokeLinecap="round" />
                  </svg>
                </div>

                <div className="relative z-10 flex flex-col h-full">
                  <div className="w-12 h-12 bg-blue-50 dark:bg-blue-950/60 text-primary rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                    <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 3v18m9-9H3m15.364-6.364l-12.728 12.728m0-12.728l12.728 12.728" />
                    </svg>
                  </div>
                  <div className="border-r-4 border-primary pr-3.5 rtl:border-r-4 rtl:pr-3.5 rtl:border-l-0 ltr:border-l-4 ltr:pl-3.5 ltr:border-r-0 mb-4">
                    <h4 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">
                      {t('serviceMepTitle')}
                    </h4>
                    <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                      {t('serviceMepDesc')}
                    </p>
                  </div>
                  <div className="mt-auto pt-4 flex rtl:justify-end ltr:justify-start">
                    <span className="text-xs font-bold text-primary bg-primary/10 dark:bg-primary/20 px-3 py-1 rounded-full group-hover:bg-primary group-hover:text-white transition-all">
                      {t('clickToBrowse')}
                    </span>
                  </div>
                </div>
              </Link>

              {/* Card 2: Production Lines */}
              <Link
                href="/services/production-lines"
                className="relative overflow-hidden bg-gradient-to-br from-white via-white to-blue-50/50 dark:from-slate-900 dark:via-slate-900 dark:to-blue-950/25 p-8 card-hover shadow-soft border border-gray-200/80 dark:border-slate-800 flex flex-col group block"
              >
                {/* Decorative Thematic Background - Production Gears & Conveyors */}
                <div className="absolute -bottom-8 -end-8 w-44 h-44 bg-blue-500/10 dark:bg-blue-400/10 rounded-full blur-2xl group-hover:bg-blue-500/20 transition-all pointer-events-none" />
                <div className="absolute -bottom-5 -end-5 w-40 h-40 text-primary/10 dark:text-primary/15 group-hover:text-primary/25 group-hover:scale-110 transition-all duration-500 pointer-events-none select-none">
                  <svg viewBox="0 0 160 160" fill="none" stroke="currentColor" className="w-full h-full">
                    <g transform="translate(110, 110)">
                      <circle cx="0" cy="0" r="38" strokeWidth="2" />
                      <circle cx="0" cy="0" r="16" strokeWidth="2" strokeDasharray="4 2" />
                      <rect x="-6" y="-48" width="12" height="12" rx="2" fill="currentColor" fillOpacity="0.3" stroke="none" />
                      <rect x="-6" y="36" width="12" height="12" rx="2" fill="currentColor" fillOpacity="0.3" stroke="none" />
                      <rect x="-48" y="-6" width="12" height="12" rx="2" fill="currentColor" fillOpacity="0.3" stroke="none" />
                      <rect x="36" y="-6" width="12" height="12" rx="2" fill="currentColor" fillOpacity="0.3" stroke="none" />
                      <rect x="-34" y="-34" width="12" height="12" rx="2" transform="rotate(45)" fill="currentColor" fillOpacity="0.3" stroke="none" />
                      <rect x="24" y="-34" width="12" height="12" rx="2" transform="rotate(45)" fill="currentColor" fillOpacity="0.3" stroke="none" />
                      <rect x="-34" y="24" width="12" height="12" rx="2" transform="rotate(45)" fill="currentColor" fillOpacity="0.3" stroke="none" />
                      <rect x="24" y="24" width="12" height="12" rx="2" transform="rotate(45)" fill="currentColor" fillOpacity="0.3" stroke="none" />
                    </g>
                    <path d="M 10 135 L 70 135 L 90 115" strokeWidth="2" strokeDasharray="6 4" strokeLinecap="round" />
                    <path d="M 20 80 L 60 80 L 80 100" strokeWidth="1.5" strokeLinecap="round" />
                  </svg>
                </div>

                <div className="relative z-10 flex flex-col h-full">
                  <div className="w-12 h-12 bg-blue-50 dark:bg-blue-950/60 text-primary rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                    <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div className="border-r-4 border-primary pr-3.5 rtl:border-r-4 rtl:pr-3.5 rtl:border-l-0 ltr:border-l-4 ltr:pl-3.5 ltr:border-r-0 mb-4">
                    <h4 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">
                      {t('serviceProdTitle')}
                    </h4>
                    <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                      {t('serviceProdDesc')}
                    </p>
                  </div>
                  <div className="mt-auto pt-4 flex rtl:justify-end ltr:justify-start">
                    <span className="text-xs font-bold text-primary bg-primary/10 dark:bg-primary/20 px-3 py-1 rounded-full group-hover:bg-primary group-hover:text-white transition-all">
                      {t('clickToBrowse')}
                    </span>
                  </div>
                </div>
              </Link>

              {/* Card 3: Custom Parts */}
              <Link
                href="/services/custom-parts"
                className="relative overflow-hidden bg-gradient-to-br from-white via-white to-blue-50/50 dark:from-slate-900 dark:via-slate-900 dark:to-blue-950/25 p-8 card-hover shadow-soft border border-gray-200/80 dark:border-slate-800 flex flex-col group block"
              >
                {/* Decorative Thematic Background - 3D CAD & Geometry */}
                <div className="absolute -bottom-8 -end-8 w-44 h-44 bg-blue-500/10 dark:bg-blue-400/10 rounded-full blur-2xl group-hover:bg-blue-500/20 transition-all pointer-events-none" />
                <div className="absolute -bottom-5 -end-5 w-40 h-40 text-primary/10 dark:text-primary/15 group-hover:text-primary/25 group-hover:scale-110 transition-all duration-500 pointer-events-none select-none">
                  <svg viewBox="0 0 160 160" fill="none" stroke="currentColor" className="w-full h-full">
                    <g transform="translate(100, 100)">
                      <polygon points="0,-40 35,-20 35,20 0,0" strokeWidth="1.5" />
                      <polygon points="0,-40 -35,-20 -35,20 0,0" strokeWidth="1.5" />
                      <polygon points="0,0 35,20 0,40 -35,20" strokeWidth="2" />
                      <line x1="0" y1="0" x2="0" y2="-60" strokeWidth="1" strokeDasharray="3 3" />
                      <line x1="0" y1="0" x2="55" y2="30" strokeWidth="1" strokeDasharray="3 3" />
                      <line x1="0" y1="0" x2="-55" y2="30" strokeWidth="1" strokeDasharray="3 3" />
                    </g>
                    <path d="M 30 70 L 30 130" strokeWidth="1" strokeDasharray="4 2" />
                    <path d="M 25 70 L 35 70" strokeWidth="1" />
                    <path d="M 25 130 L 35 130" strokeWidth="1" />
                  </svg>
                </div>

                <div className="relative z-10 flex flex-col h-full">
                  <div className="w-12 h-12 bg-blue-50 dark:bg-blue-950/60 text-primary rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                    <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                    </svg>
                  </div>
                  <div className="border-r-4 border-primary pr-3.5 rtl:border-r-4 rtl:pr-3.5 rtl:border-l-0 ltr:border-l-4 ltr:pl-3.5 ltr:border-r-0 mb-4">
                    <h4 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">
                      {t('servicePartsTitle')}
                    </h4>
                    <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                      {t('servicePartsDesc')}
                    </p>
                  </div>
                  <div className="mt-auto pt-4 flex rtl:justify-end ltr:justify-start">
                    <span className="text-xs font-bold text-primary bg-primary/10 dark:bg-primary/20 px-3 py-1 rounded-full group-hover:bg-primary group-hover:text-white transition-all">
                      {t('clickToBrowse')}
                    </span>
                  </div>
                </div>
              </Link>

              {/* Card 4: Engineering Consulting */}
              <Link
                href="/services/consulting"
                className="relative overflow-hidden bg-gradient-to-br from-white via-white to-blue-50/50 dark:from-slate-900 dark:via-slate-900 dark:to-blue-950/25 p-8 card-hover shadow-soft border border-gray-200/80 dark:border-slate-800 flex flex-col group block"
              >
                {/* Decorative Thematic Background - Compass & Blueprint Grid */}
                <div className="absolute -bottom-8 -end-8 w-44 h-44 bg-blue-500/10 dark:bg-blue-400/10 rounded-full blur-2xl group-hover:bg-blue-500/20 transition-all pointer-events-none" />
                <div className="absolute -bottom-5 -end-5 w-40 h-40 text-primary/10 dark:text-primary/15 group-hover:text-primary/25 group-hover:scale-110 transition-all duration-500 pointer-events-none select-none">
                  <svg viewBox="0 0 160 160" fill="none" stroke="currentColor" className="w-full h-full">
                    <g transform="translate(105, 105)">
                      <circle cx="0" cy="0" r="50" strokeWidth="1" strokeDasharray="5 3" />
                      <circle cx="0" cy="0" r="30" strokeWidth="1.5" />
                      <circle cx="0" cy="0" r="10" strokeWidth="2" />
                      <line x1="-60" y1="0" x2="60" y2="0" strokeWidth="1" strokeDasharray="4 4" />
                      <line x1="0" y1="-60" x2="0" y2="60" strokeWidth="1" strokeDasharray="4 4" />
                      <path d="M 0 -45 L -25 35" strokeWidth="2" strokeLinecap="round" />
                      <path d="M 0 -45 L 25 35" strokeWidth="2" strokeLinecap="round" />
                      <circle cx="0" cy="-45" r="5" strokeWidth="2" fill="currentColor" fillOpacity="0.2" />
                    </g>
                  </svg>
                </div>

                <div className="relative z-10 flex flex-col h-full">
                  <div className="w-12 h-12 bg-blue-50 dark:bg-blue-950/60 text-primary rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                    <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                    </svg>
                  </div>
                  <div className="border-r-4 border-primary pr-3.5 rtl:border-r-4 rtl:pr-3.5 rtl:border-l-0 ltr:border-l-4 ltr:pl-3.5 ltr:border-r-0 mb-4">
                    <h4 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">
                      {t('serviceConsultingTitle')}
                    </h4>
                    <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                      {t('serviceConsultingDesc')}
                    </p>
                  </div>
                  <div className="mt-auto pt-4 flex rtl:justify-end ltr:justify-start">
                    <span className="text-xs font-bold text-primary bg-primary/10 dark:bg-primary/20 px-3 py-1 rounded-full group-hover:bg-primary group-hover:text-white transition-all">
                      {t('clickToBrowse')}
                    </span>
                  </div>
                </div>
              </Link>

              {/* Card 5: Maintenance & Operations */}
              <Link
                href="/services/online-maintenance"
                className="relative overflow-hidden bg-gradient-to-br from-white via-white to-blue-50/50 dark:from-slate-900 dark:via-slate-900 dark:to-blue-950/25 p-8 card-hover shadow-soft border border-gray-200/80 dark:border-slate-800 flex flex-col group block"
              >
                {/* Decorative Thematic Background - Telemetry Wave & Diagnostic Hex */}
                <div className="absolute -bottom-8 -end-8 w-44 h-44 bg-blue-500/10 dark:bg-blue-400/10 rounded-full blur-2xl group-hover:bg-blue-500/20 transition-all pointer-events-none" />
                <div className="absolute -bottom-5 -end-5 w-40 h-40 text-primary/10 dark:text-primary/15 group-hover:text-primary/25 group-hover:scale-110 transition-all duration-500 pointer-events-none select-none">
                  <svg viewBox="0 0 160 160" fill="none" stroke="currentColor" className="w-full h-full">
                    <polygon points="105,70 130,85 130,115 105,130 80,115 80,85" strokeWidth="1.5" strokeDasharray="4 2" />
                    <polygon points="135,115 160,130 160,160 135,175 110,160 110,130" strokeWidth="1" />
                    <path d="M 15 105 L 45 105 L 55 85 L 65 125 L 75 75 L 85 115 L 95 105 L 145 105" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                    <circle cx="105" cy="100" r="18" strokeWidth="1.5" strokeDasharray="3 3" />
                    <circle cx="105" cy="100" r="5" fill="currentColor" fillOpacity="0.4" stroke="none" />
                  </svg>
                </div>

                <div className="relative z-10 flex flex-col h-full">
                  <div className="w-12 h-12 bg-blue-50 dark:bg-blue-950/60 text-primary rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                    <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                    </svg>
                  </div>
                  <div className="border-r-4 border-primary pr-3.5 rtl:border-r-4 rtl:pr-3.5 rtl:border-l-0 ltr:border-l-4 ltr:pl-3.5 ltr:border-r-0 mb-4">
                    <h4 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">
                      {t('serviceMaintenanceTitle')}
                    </h4>
                    <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                      {t('serviceMaintenanceDesc')}
                    </p>
                  </div>
                  <div className="mt-auto pt-4 flex rtl:justify-end ltr:justify-start">
                    <span className="text-xs font-bold text-primary bg-primary/10 dark:bg-primary/20 px-3 py-1 rounded-full group-hover:bg-primary group-hover:text-white transition-all">
                      {t('clickToBrowse')}
                    </span>
                  </div>
                </div>
              </Link>

              {/* Card 6: Web Design & Development */}
              <Link
                href="/services/software"
                className="relative overflow-hidden bg-gradient-to-br from-white via-white to-blue-50/50 dark:from-slate-900 dark:via-slate-900 dark:to-blue-950/25 p-8 card-hover shadow-soft border border-gray-200/80 dark:border-slate-800 flex flex-col group block"
              >
                {/* Decorative Thematic Background - Code Brackets & Web Grid */}
                <div className="absolute -bottom-8 -end-8 w-44 h-44 bg-blue-500/10 dark:bg-blue-400/10 rounded-full blur-2xl group-hover:bg-blue-500/20 transition-all pointer-events-none" />
                <div className="absolute -bottom-5 -end-5 w-40 h-40 text-primary/10 dark:text-primary/15 group-hover:text-primary/25 group-hover:scale-110 transition-all duration-500 pointer-events-none select-none">
                  <svg viewBox="0 0 160 160" fill="none" stroke="currentColor" className="w-full h-full">
                    <g transform="translate(90, 95)">
                      <path d="M -15 -18 L -35 0 L -15 18" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M 8 -24 L -8 24" strokeWidth="2" strokeLinecap="round" />
                      <path d="M 15 -18 L 35 0 L 15 18" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                    </g>
                    <rect x="50" y="45" width="95" height="70" rx="8" strokeWidth="1.5" strokeDasharray="4 2" />
                    <line x1="50" y1="62" x2="145" y2="62" strokeWidth="1.5" />
                    <circle cx="62" cy="54" r="2.5" fill="currentColor" fillOpacity="0.5" stroke="none" />
                    <circle cx="70" cy="54" r="2.5" fill="currentColor" fillOpacity="0.5" stroke="none" />
                    <circle cx="78" cy="54" r="2.5" fill="currentColor" fillOpacity="0.5" stroke="none" />
                  </svg>
                </div>

                <div className="relative z-10 flex flex-col h-full">
                  <div className="w-12 h-12 bg-blue-50 dark:bg-blue-950/60 text-primary rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                    <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                    </svg>
                  </div>
                  <div className="border-r-4 border-primary pr-3.5 rtl:border-r-4 rtl:pr-3.5 rtl:border-l-0 ltr:border-l-4 ltr:pl-3.5 ltr:border-r-0 mb-4">
                    <h4 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">
                      {t('serviceSoftwareTitle')}
                    </h4>
                    <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                      {t('serviceSoftwareDesc')}
                    </p>
                  </div>
                  <div className="mt-auto pt-4 flex rtl:justify-end ltr:justify-start">
                    <span className="text-xs font-bold text-primary bg-primary/10 dark:bg-primary/20 px-3 py-1 rounded-full group-hover:bg-primary group-hover:text-white transition-all">
                      {t('clickToBrowse')}
                    </span>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </section>

        {/* Interactive Tools */}
        <section id="tools" className="py-16 md:py-24 px-6 md:px-10 max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-xs md:text-sm font-bold text-primary mb-2 uppercase tracking-widest">
              {t('toolsTag')}
            </h2>
            <h3 className="text-2xl md:text-4xl font-bold text-gray-900 dark:text-white">
              {t('toolsHeading')}
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mt-3 text-sm md:text-base">
              {t('toolsSubtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {/* HVAC Calculator */}
            <div className="bg-white dark:bg-slate-900 border border-gray-200 dark:border-slate-800 rounded-2xl p-8 shadow-soft">
              <h4 className="text-xl md:text-2xl font-bold mb-2 text-gray-900 dark:text-white">
                {t('hvacCalcTitle')}
              </h4>
              <p className="text-xs md:text-sm text-gray-500 dark:text-gray-400 mb-6">
                {t('hvacCalcDesc')}
              </p>
              <div className="flex flex-col gap-4">
                <div>
                  <label className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-1">
                    {t('areaLabel')}
                  </label>
                  <input
                    type="number"
                    min="1"
                    step="0.1"
                    value={hvacArea}
                    onChange={(e) => setHvacArea(e.target.value === '' ? '' : Number(e.target.value))}
                    placeholder={t('areaPlaceholder')}
                    className="w-full border border-gray-300 dark:border-slate-700 rounded-lg px-4 py-3 focus:ring-2 focus:ring-primary focus:outline-none bg-white dark:bg-slate-800 text-gray-900 dark:text-white"
                  />
                </div>
                <button onClick={calculateHvac} className="btn-primary w-full mt-2 cursor-pointer">
                  {t('calcButton')}
                </button>

                {hvacResult !== null && (
                  <div className="mt-5 p-5 bg-blue-50/60 dark:bg-blue-950/40 text-primary rounded-xl border border-primary/20 text-center animate-fade-in">
                    <p className="text-sm mb-2 text-gray-700 dark:text-gray-300">{t('hvacResultLabel')}</p>
                    <div className="text-3xl font-black">
                      {hvacResult}
                      <span className="text-lg mx-2">{t('tonCooling')}</span>
                    </div>
                    <p className="text-xs mt-3 text-gray-500 dark:text-gray-400">
                      {t('calcNote')}
                    </p>
                  </div>
                )}
              </div>
            </div>

            {/* Fire Extinguisher Calculator */}
            <div className="bg-white dark:bg-slate-900 border border-gray-200 dark:border-slate-800 rounded-2xl p-8 shadow-soft">
              <h4 className="text-xl md:text-2xl font-bold mb-2 text-gray-900 dark:text-white">
                {t('fireCalcTitle')}
              </h4>
              <p className="text-xs md:text-sm text-gray-500 dark:text-gray-400 mb-6">
                {t('fireCalcDesc')}
              </p>
              <div className="flex flex-col gap-4">
                <div>
                  <label className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-1">
                    {t('fireAreaLabel')}
                  </label>
                  <input
                    type="number"
                    min="1"
                    step="1"
                    value={fireArea}
                    onChange={(e) => setFireArea(e.target.value === '' ? '' : Number(e.target.value))}
                    placeholder={t('fireAreaPlaceholder')}
                    className="w-full border border-gray-300 dark:border-slate-700 rounded-lg px-4 py-3 focus:ring-2 focus:ring-primary focus:outline-none bg-white dark:bg-slate-800 text-gray-900 dark:text-white"
                  />
                </div>
                <button onClick={calculateFireExtinguisher} className="btn-primary w-full mt-2 cursor-pointer">
                  {t('calcFireButton')}
                </button>

                {fireResult !== null && (
                  <div className="mt-5 p-5 bg-blue-50/60 dark:bg-blue-950/40 text-primary rounded-xl border border-primary/20 text-center animate-fade-in">
                    <p className="text-sm mb-2 text-gray-700 dark:text-gray-300">{t('fireResultLabel')}</p>
                    <div className="text-3xl font-black">
                      {fireResult}
                      <span className="text-sm mx-2 font-bold">{t('extinguishersUnit')}</span>
                    </div>
                    <p className="text-xs mt-3 text-gray-500 dark:text-gray-400">
                      {t('calcNote')}
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* Portfolio Section */}
        <section id="portfolio" className="py-16 md:py-24 bg-gray-50 dark:bg-slate-950 border-t border-gray-100 dark:border-slate-800 px-6 md:px-10">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-xs md:text-sm font-bold text-primary mb-2 uppercase tracking-widest">
                {t('portfolioTag')}
              </h2>
              <h3 className="text-2xl md:text-4xl font-bold text-gray-900 dark:text-white">
                {t('portfolioHeading')}
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Portfolio Item 1 */}
              <div className="bg-white dark:bg-slate-900 rounded-2xl overflow-hidden shadow-soft border border-gray-200/80 dark:border-slate-800 flex flex-col">
                <div className="relative h-48 w-full bg-slate-100 dark:bg-slate-800">
                  <Image
                    src="/images/mep/5978737632046943510.jpg"
                    alt={t('portfolioItem1Title')}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <span className="text-xs font-bold text-primary mb-2">MEP & HVAC</span>
                  <h4 className="text-lg font-bold mb-2 text-gray-900 dark:text-white">{t('portfolioItem1Title')}</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">{t('portfolioItem1Desc')}</p>
                </div>
              </div>

              {/* Portfolio Item 2 */}
              <div className="bg-white dark:bg-slate-900 rounded-2xl overflow-hidden shadow-soft border border-gray-200/80 dark:border-slate-800 flex flex-col">
                <div className="relative h-48 w-full bg-slate-100 dark:bg-slate-800">
                  <Image
                    src="/images/production_lines/5978737632046943518.jpg"
                    alt={t('portfolioItem2Title')}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <span className="text-xs font-bold text-primary mb-2">Production Automation</span>
                  <h4 className="text-lg font-bold mb-2 text-gray-900 dark:text-white">{t('portfolioItem2Title')}</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">{t('portfolioItem2Desc')}</p>
                </div>
              </div>

              {/* Portfolio Item 3 */}
              <div className="bg-white dark:bg-slate-900 rounded-2xl overflow-hidden shadow-soft border border-gray-200/80 dark:border-slate-800 flex flex-col">
                <div className="relative h-48 w-full bg-slate-100 dark:bg-slate-800">
                  <Image
                    src="/images/mep/5978737632046943511.jpg"
                    alt={t('portfolioItem3Title')}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <span className="text-xs font-bold text-primary mb-2">Fire Protection</span>
                  <h4 className="text-lg font-bold mb-2 text-gray-900 dark:text-white">{t('portfolioItem3Title')}</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">{t('portfolioItem3Desc')}</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20 bg-slate-900 dark:bg-black text-white px-6 md:px-10 border-t border-slate-800">
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16">
            <div>
              <span className="text-xs md:text-sm font-bold text-blue-400 uppercase tracking-widest block mb-2">
                {t('contactTag')}
              </span>
              <h2 className="text-3xl md:text-5xl font-bold mb-6">
                {t('contactHeading')}
              </h2>
              <p className="text-gray-300 text-base md:text-lg mb-8 leading-relaxed">
                {t('contactDesc')}
              </p>

              <div className="flex flex-col gap-5">
                <a
                  href="mailto:hamzaelzain.eng@gmail.com"
                  className="text-lg md:text-xl font-bold flex items-center gap-3 text-gray-200 hover:text-blue-400 transition-colors"
                >
                  <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center shrink-0">
                    <svg className="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <span>{t('contactEmailAddress')}</span>
                </a>

                <a
                  href="https://wa.me/249116613320"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-lg md:text-xl font-bold flex items-center gap-3 text-emerald-400 hover:text-emerald-300 transition-colors"
                >
                  <div className="w-10 h-10 rounded-lg bg-emerald-500/10 flex items-center justify-center shrink-0">
                    <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                      <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.007c.106.005.249-.04.39.298.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.354.101.174.449.741.964 1.201.662.591 1.221.774 1.394.86s.274.072.376-.043c.101-.116.433-.506.549-.68.116-.173.231-.145.39-.087s1.011.477 1.184.564.289.13.332.202c.043.073.043.419-.101.824z" />
                      <path d="M12 2C6.477 2 2 6.477 2 12c0 1.891.524 3.66 1.436 5.176L2 22l4.982-1.397A9.957 9.957 0 0012 22c5.523 0 10-4.477 10-10S17.523 2 12 2zm0 18.2c-1.637 0-3.153-.49-4.42-1.328l-.317-.209-2.964.83.844-2.888-.225-.337A8.17 8.17 0 013.8 12c0-4.521 3.679-8.2 8.2-8.2 4.521 0 8.2 3.679 8.2 8.2 0 4.521-3.679 8.2-8.2 8.2z" />
                    </svg>
                  </div>
                  <span>{t('contactWhatsappNumber')}</span>
                </a>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white/10 dark:bg-white/5 p-8 rounded-2xl backdrop-blur-md border border-white/15">
              <h3 className="text-xl md:text-2xl font-bold mb-6 text-white">{t('orderFormTitle')}</h3>
              <form onSubmit={handleSubmitOrder} className="flex flex-col gap-4 text-gray-800">
                <select
                  value={clientService}
                  onChange={(e) => setClientService(e.target.value)}
                  className="w-full bg-white dark:bg-slate-800 text-gray-900 dark:text-white border border-gray-300 dark:border-slate-700 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary"
                >
                  <option value="">{t('selectServicePlaceholder')}</option>
                  <option value="تصميم أنظمة MEP">{t('serviceOption1')}</option>
                  <option value="خطوط الإنتاج">{t('serviceOption2')}</option>
                  <option value="تصميم أجزاء مخصصة">{t('serviceOption3')}</option>
                  <option value="استشارة هندسية">{t('serviceOption4')}</option>
                  <option value="الصيانة والتشغيل">{t('serviceOption5')}</option>
                  <option value="تطوير و تصميم مواقع الويب">{t('serviceOption6')}</option>
                </select>

                <textarea
                  placeholder={t('orderDetailsPlaceholder')}
                  rows={4}
                  value={clientDetails}
                  onChange={(e) => setClientDetails(e.target.value)}
                  className="w-full bg-white dark:bg-slate-800 text-gray-900 dark:text-white border border-gray-300 dark:border-slate-700 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary"
                />

                <div className="flex flex-col gap-2 mt-2 bg-white/5 p-3.5 rounded-xl border border-white/10 text-white">
                  <span className="text-xs font-semibold text-gray-300">{t('sendMethodLabel')}</span>
                  <div className="flex gap-6">
                    <label className="flex items-center gap-2 cursor-pointer text-sm">
                      <input
                        type="radio"
                        name="sendMethod"
                        value="whatsapp"
                        checked={sendMethod === 'whatsapp'}
                        onChange={() => setSendMethod('whatsapp')}
                        className="accent-primary"
                      />
                      {t('methodWhatsapp')}
                    </label>
                    <label className="flex items-center gap-2 cursor-pointer text-sm">
                      <input
                        type="radio"
                        name="sendMethod"
                        value="gmail"
                        checked={sendMethod === 'gmail'}
                        onChange={() => setSendMethod('gmail')}
                        className="accent-primary"
                      />
                      {t('methodGmail')}
                    </label>
                  </div>
                </div>

                <button type="submit" className="btn-primary mt-2 cursor-pointer justify-center py-3.5 text-base">
                  {t('submitOrderButton')}
                </button>
              </form>
            </div>
          </div>

          <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4 text-xs md:text-sm text-gray-400">
            <span>&copy; {new Date().getFullYear()} {t('footerRights')}</span>
            <div className="flex gap-4">
              <Link href="#about" className="hover:text-white transition-colors">{t('navAbout')}</Link>
              <Link href="#services" className="hover:text-white transition-colors">{t('navServices')}</Link>
              <Link href="#contact" className="hover:text-white transition-colors">{t('navContact')}</Link>
            </div>
          </div>
        </section>

        {/* Clean Back to Top Floating Button (Clean SVG, No letter n) */}
        <button
          onClick={scrollToTop}
          className={`fixed bottom-6 end-6 z-40 w-11 h-11 rounded-full bg-primary text-white shadow-lg shadow-primary/30 flex items-center justify-center transition-all duration-300 hover:scale-110 active:scale-95 cursor-pointer ${
            showBackToTop ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 translate-y-8 pointer-events-none'
          }`}
          aria-label={t('backToTop')}
          title={t('backToTop')}
        >
          <svg className="w-5 h-5 transition-transform duration-200 group-hover:-translate-y-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 15l7-7 7 7" />
          </svg>
        </button>
      </main>
    </div>
  );
}

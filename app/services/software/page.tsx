"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useApp } from '../../context/AppContext';

interface WebsiteService {
  id: number;
  title: { ar: string; en: string };
  category: { ar: string; en: string };
  categoryKey: string;
  description: { ar: string; en: string };
  features: { ar: string[]; en: string[] };
  image: string;
  whatsappMessage: { ar: string; en: string };
}

const websiteServices: WebsiteService[] = [
  {
    id: 1,
    title: { ar: 'مواقع الشركات والمؤسسات', en: 'Corporate & Enterprise Websites' },
    category: { ar: 'أعمال ومؤسسات', en: 'Business' },
    categoryKey: 'business',
    description: {
      ar: 'للتعريف بالشركات وعرض خدماتها وهويتها ومعلومات التواصل.',
      en: 'Showcasing corporate brand identity, services portfolio, team, and contact information.',
    },
    features: {
      ar: ['هوية رقمية متناسقة', 'صفحات الخدمات وفريق العمل', 'نموذج تواصل وخريطة تفاعلية'],
      en: ['Cohesive digital branding', 'Services & leadership profiles', 'Interactive contact forms & maps'],
    },
    image: '/images/software/corporate.svg',
    whatsappMessage: {
      ar: 'السلام عليكم، أود طلب تصميم وبرمجة موقع للشركات والمؤسسات من مؤسسة معيار.',
      en: "Hello, I would like to request corporate website design and development from Mea'yar.",
    },
  },
  {
    id: 2,
    title: { ar: 'المتاجر الإلكترونية', en: 'E-Commerce Stores' },
    category: { ar: 'تجارة ومتاجر', en: 'E-Commerce' },
    categoryKey: 'ecommerce',
    description: {
      ar: 'لبيع المنتجات، عرض الأسعار، إدارة الطلبات والعملاء.',
      en: 'Product cataloging, dynamic pricing, order management, and secure customer checkout.',
    },
    features: {
      ar: ['سلة تسوق وبوابات دفع إلكتروني', 'لوحة تحكم لإدارة المنتجات والطلبات', 'إشعارات الشحن ومتابعة المخزون'],
      en: ['Shopping cart & payment gateways', 'Admin inventory & order dashboard', 'Order tracking & notifications'],
    },
    image: '/images/software/ecommerce.svg',
    whatsappMessage: {
      ar: 'السلام عليكم، أود طلب تصميم وبرمجة متجر إلكتروني متكامل من مؤسسة معيار.',
      en: "Hello, I would like to request an e-commerce online store from Mea'yar.",
    },
  },
  {
    id: 3,
    title: { ar: 'المواقع الشخصية والبورتفوليو', en: 'Personal & Portfolio Websites' },
    category: { ar: 'أعمال ومؤسسات', en: 'Business' },
    categoryKey: 'business',
    description: {
      ar: 'للمهندسين والمبرمجين والمصممين وأصحاب الأعمال.',
      en: 'Tailored for engineers, developers, designers, and entrepreneurs to exhibit projects and credentials.',
    },
    features: {
      ar: ['معرض أعمال بتصميم تفاعلي', 'استعراض السيرة الذاتية والخبرات', 'ربط فوري بحسابات التواصل المهني'],
      en: ['Interactive work showcases', 'Resume & credentials timeline', 'Direct professional socials integration'],
    },
    image: '/images/software/portfolio.svg',
    whatsappMessage: {
      ar: 'السلام عليكم، أود طلب تصميم وبرمجة موقع شخصي (بورتفوليو) من مؤسسة معيار.',
      en: "Hello, I would like to request a personal portfolio website from Mea'yar.",
    },
  },
  {
    id: 4,
    title: { ar: 'المواقع التعليمية', en: 'Educational Platforms & LMS' },
    category: { ar: 'خدمات وحجوزات', en: 'Services' },
    categoryKey: 'services',
    description: {
      ar: 'للمدارس والجامعات والمنصات التعليمية والدورات.',
      en: 'For schools, universities, course academies, and e-learning platforms.',
    },
    features: {
      ar: ['بث الدروس والمسارات التعليمية', 'نظام إدارة الطلاب والاختبارات', 'إصدار الشهادات وبوابات الاشتراك'],
      en: ['Video curriculum playback', 'Student tracking & quizzes', 'Certificates & course enrollments'],
    },
    image: '/images/software/education.svg',
    whatsappMessage: {
      ar: 'السلام عليكم، أود طلب تصميم وبرمجة منصة / موقع تعليمي من مؤسسة معيار.',
      en: "Hello, I would like to request an educational platform/LMS website from Mea'yar.",
    },
  },
  {
    id: 5,
    title: { ar: 'مواقع المطاعم والكافيهات', en: 'Restaurant & Cafe Websites' },
    category: { ar: 'خدمات وحجوزات', en: 'Services' },
    categoryKey: 'services',
    description: {
      ar: 'لعرض قائمة الطعام والأسعار والطلبات والحجوزات.',
      en: 'Digital dynamic menus, pricing tables, online orders, and table reservation systems.',
    },
    features: {
      ar: ['منيو إلكتروني تفاعلي مع باركود QR', 'نظام حجز الطاولات المسبق', 'استقبال طلبات التوصيل والاستلام'],
      en: ['Digital QR menu integration', 'Table booking reservation system', 'Online takeaway & delivery orders'],
    },
    image: '/images/software/restaurant.svg',
    whatsappMessage: {
      ar: 'السلام عليكم، أود طلب تصميم وبرمجة موقع مطعم / كافيه مع قائمة طعام وحجوزات من مؤسسة معيار.',
      en: "Hello, I would like to request a restaurant/cafe website with menu & bookings from Mea'yar.",
    },
  },
  {
    id: 6,
    title: { ar: 'المواقع العقارية', en: 'Real Estate Websites' },
    category: { ar: 'خدمات وحجوزات', en: 'Services' },
    categoryKey: 'services',
    description: {
      ar: 'لعرض العقارات والشقق والأراضي مع الصور والتفاصيل.',
      en: 'Listing residential, commercial, and land properties with rich photo galleries and specs.',
    },
    features: {
      ar: ['محرك بحث وفلاتر بحسب المنطقة والسعر', 'معرض صور تفصيلي ومخططات هندسية', 'طلب معاينة الموقع وتواصل مباشر'],
      en: ['Area, type & price search filters', 'Detailed photo galleries & floorplans', 'Inspection bookings & broker chat'],
    },
    image: '/images/software/real-estate.svg',
    whatsappMessage: {
      ar: 'السلام عليكم، أود طلب تصميم وبرمجة موقع عقاري لعرض العقارات وحجز المعاينات من مؤسسة معيار.',
      en: "Hello, I would like to request a real estate website from Mea'yar.",
    },
  },
  {
    id: 7,
    title: { ar: 'المواقع الطبية', en: 'Medical & Clinic Websites' },
    category: { ar: 'خدمات وحجوزات', en: 'Services' },
    categoryKey: 'services',
    description: {
      ar: 'للعيادات والمراكز الطبية والمستشفيات وحجز المواعيد.',
      en: 'For specialized clinics, medical centers, and hospitals with appointment scheduling.',
    },
    features: {
      ar: ['حجز المواعيد الطبية أونلاين', 'دليل الأطباء والتخصصات والخدمات', 'أوقات العمل وأرقام الطوارئ السريعة'],
      en: ['Online doctor appointment booking', 'Specialists directory & service list', 'Clinic timings & emergency hotlines'],
    },
    image: '/images/software/medical.svg',
    whatsappMessage: {
      ar: 'السلام عليكم، أود طلب تصميم وبرمجة موقع طبي / مركز عيادات وحجز مواعيد من مؤسسة معيار.',
      en: "Hello, I would like to request a medical/clinic website from Mea'yar.",
    },
  },
  {
    id: 8,
    title: { ar: 'مواقع السياحة والسفر', en: 'Travel & Tourism Websites' },
    category: { ar: 'خدمات وحجوزات', en: 'Services' },
    categoryKey: 'services',
    description: {
      ar: 'للفنادق وشركات السفر والسياحة والحجوزات.',
      en: 'For hotels, travel agencies, and tour operators with package inquiries and booking.',
    },
    features: {
      ar: ['عرض الباقات السياحية والرحلات', 'نظام الاستفسار وحجز الفنادق والطيران', 'معرض الوجهات السياحية وتقييمات العملاء'],
      en: ['Tour packages & itinerary display', 'Hotel & flight inquiry booking engine', 'Destinations gallery & traveler reviews'],
    },
    image: '/images/software/travel.svg',
    whatsappMessage: {
      ar: 'السلام عليكم، أود طلب تصميم وبرمجة موقع سياحة وسفر وحجوزات فندقية من مؤسسة معيار.',
      en: "Hello, I would like to request a travel & tourism website from Mea'yar.",
    },
  },
  {
    id: 9,
    title: { ar: 'المدونات والمواقع الإخبارية', en: 'Blogs & News Portals' },
    category: { ar: 'محتوى وإعلام', en: 'Media' },
    categoryKey: 'media',
    description: {
      ar: 'لنشر المقالات والأخبار والمحتوى المتخصص.',
      en: 'Publishing articles, investigative journalism, and specialized editorial content with high speed.',
    },
    features: {
      ar: ['إدارة متقدمة للمقالات والتصنيفات', 'تهيئة كاملة لمحركات البحث SEO', 'سرعة تصفح فائقة ومشاركة عبر الشبكات'],
      en: ['Advanced CMS categories & authoring', 'Full SEO indexing optimization', 'Ultra-fast reading & social sharing'],
    },
    image: '/images/software/blog.svg',
    whatsappMessage: {
      ar: 'السلام عليكم، أود طلب تصميم وبرمجة مدونة / موقع إخباري ومحتوى متخصص من مؤسسة معيار.',
      en: "Hello, I would like to request a blog/news portal website from Mea'yar.",
    },
  },
  {
    id: 10,
    title: { ar: 'صفحات الهبوط (Landing Pages)', en: 'High-Converting Landing Pages' },
    category: { ar: 'تجارة ومتاجر', en: 'E-Commerce' },
    categoryKey: 'ecommerce',
    description: {
      ar: 'للتسويق للمنتجات والخدمات والحملات الإعلانية.',
      en: 'Conversion-focused promotional pages for product launches and ad campaigns.',
    },
    features: {
      ar: ['تصميم عالي التحويل (High Conversion)', 'متجاوب تماما مع إعلانات السوشيال ميديا', 'تكامل مع نماذج جمع بيانات العملاء (Leads)'],
      en: ['High conversion rate layout', 'Ad-campaign mobile optimization', 'Lead capture & analytics integration'],
    },
    image: '/images/software/landing-page.svg',
    whatsappMessage: {
      ar: 'السلام عليكم، أود طلب تصميم وبرمجة صفحة هبوط تسويقية (Landing Page) لحملة إعلانية من مؤسسة معيار.',
      en: "Hello, I would like to request a high-converting landing page from Mea'yar.",
    },
  },
];

export default function SoftwareServicesPage() {
  const { language, theme, toggleLanguage, toggleTheme, t } = useApp();
  const isAr = language === 'ar';

  useEffect(() => {
    document.title = isAr ? 'معيار | تطوير وتصميم مواقع الويب' : "Mea'yar | Web Design & Development";
  }, [isAr]);

  const [selectedKey, setSelectedKey] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const filterTabs = [
    { key: 'all', label: isAr ? 'الكل' : 'All' },
    { key: 'business', label: isAr ? 'أعمال ومؤسسات' : 'Business' },
    { key: 'ecommerce', label: isAr ? 'تجارة ومتاجر' : 'E-Commerce' },
    { key: 'services', label: isAr ? 'خدمات وحجوزات' : 'Services' },
    { key: 'media', label: isAr ? 'محتوى وإعلام' : 'Media' },
  ];

  const filteredServices = websiteServices.filter((service) => {
    const matchesCategory = selectedKey === 'all' || service.categoryKey === selectedKey;
    const titleText = isAr ? service.title.ar : service.title.en;
    const descText = isAr ? service.description.ar : service.description.en;
    const matchesSearch =
      titleText.toLowerCase().includes(searchQuery.toLowerCase()) ||
      descText.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const handleOrderClick = (msg: { ar: string; en: string }) => {
    const text = isAr ? msg.ar : msg.en;
    const whatsappUrl = `https://wa.me/249116613320?text=${encodeURIComponent(text)}`;
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="w-full bg-background text-foreground font-sans min-h-screen flex flex-col selection:bg-primary/20 transition-colors duration-200">
      {/* Navigation */}
      <nav className="p-4 md:px-10 border-b border-gray-100 dark:border-slate-800 bg-white/90 dark:bg-slate-900/90 sticky top-0 z-50 shadow-xs backdrop-blur-md flex justify-between items-center">
        <Link href="/" className="flex items-center gap-2.5 text-2xl font-bold text-primary transition-opacity hover:opacity-80">
          <div className="relative w-8 h-8 rounded-full overflow-hidden shrink-0 ring-1 ring-primary/20">
            <Image
              src="/images/Profile/logo.jpg"
              alt={t('brandName')}
              fill
              sizes="32px"
              className="object-cover"
              priority
            />
          </div>
          <span className="font-black">{t('brandName')}</span>
        </Link>

        <div className="hidden md:flex gap-6 text-sm font-semibold text-gray-700 dark:text-gray-200">
          <Link href="/" className="hover:text-primary transition-colors">{t('navHome')}</Link>
          <Link href="/#services" className="hover:text-primary transition-colors">{t('navServices')}</Link>
          <Link href="/#tools" className="hover:text-primary transition-colors">{t('navTools')}</Link>
          <Link href="/#contact" className="hover:text-primary transition-colors">{t('navContact')}</Link>
        </div>

        <div className="flex items-center gap-2.5">
          {/* Language Switch */}
          <button
            onClick={toggleLanguage}
            className="flex items-center gap-1 px-2.5 py-1.5 rounded-lg border border-gray-200 dark:border-slate-700 text-xs font-bold text-gray-700 dark:text-gray-200 hover:border-primary transition-all cursor-pointer"
            aria-label="Toggle Language"
          >
            <span>{isAr ? 'EN' : 'عربي'}</span>
          </button>

          {/* Theme Switch */}
          <button
            onClick={toggleTheme}
            className="p-1.5 rounded-lg border border-gray-200 dark:border-slate-700 text-gray-700 dark:text-gray-200 hover:border-primary transition-all cursor-pointer"
            aria-label="Toggle Theme"
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

          <Link
            href="/#contact"
            className="btn-primary text-xs py-2 px-4"
          >
            {t('navRequestService')}
          </Link>
        </div>
      </nav>

      {/* Main Content */}
      <main className="flex-grow">
        {/* Header Hero Section */}
        <header className="relative bg-gradient-to-b from-blue-50/60 via-white to-gray-50/50 dark:from-slate-900 dark:via-slate-900/80 dark:to-slate-950 py-16 md:py-24 px-6 text-center border-b border-gray-100 dark:border-slate-800 overflow-hidden">
          <div className="max-w-4xl mx-auto relative z-10">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-xs md:text-sm font-bold mb-6">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
              </svg>
              <span>{isAr ? 'خدمات البرمجة وتطوير الويب' : 'Web Engineering & Development'}</span>
            </div>

            <h1 className="text-3xl md:text-5xl font-black mb-6 text-gray-900 dark:text-white leading-tight">
              {isAr ? 'تطوير وتصميم ' : 'Web Design & '}
              <span className="text-primary">{isAr ? 'مواقع الويب' : 'Development'}</span>
            </h1>

            <p className="text-base md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed mb-8">
              {isAr
                ? 'نُحوّل أفكارك إلى مواقع ويب احترافية تجمع بين التصميم العصري والبرمجة المتقنة؛ لنمنح مشروعك واجهة رقمية سريعة، متجاوبة، ومصممة خصيصاً لتحقيق النمو والتميز.'
                : 'We transform your vision into high-performing websites blending modern UI/UX with clean code; giving your enterprise a fast, responsive digital presence built for growth.'}
            </p>

            {/* Highlights Bar */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 max-w-3xl mx-auto text-xs md:text-sm text-gray-700 dark:text-gray-300">
              <div className="bg-white dark:bg-slate-800 p-3 rounded-xl border border-gray-100 dark:border-slate-700 shadow-sm flex items-center justify-center gap-2">
                <svg className="w-4 h-4 text-primary shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" />
                </svg>
                <span>{isAr ? 'تصميم متجاوب بالكامل' : '100% Responsive'}</span>
              </div>
              <div className="bg-white dark:bg-slate-800 p-3 rounded-xl border border-gray-100 dark:border-slate-700 shadow-sm flex items-center justify-center gap-2">
                <svg className="w-4 h-4 text-primary shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" />
                </svg>
                <span>{isAr ? 'سرعة وأداء فائق' : 'High Performance'}</span>
              </div>
              <div className="bg-white dark:bg-slate-800 p-3 rounded-xl border border-gray-100 dark:border-slate-700 shadow-sm flex items-center justify-center gap-2">
                <svg className="w-4 h-4 text-primary shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" />
                </svg>
                <span>{isAr ? 'تهيئة محركات البحث SEO' : 'SEO Optimized'}</span>
              </div>
              <div className="bg-white dark:bg-slate-800 p-3 rounded-xl border border-gray-100 dark:border-slate-700 shadow-sm flex items-center justify-center gap-2">
                <svg className="w-4 h-4 text-primary shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" />
                </svg>
                <span>{isAr ? 'دعم فني وصيانة' : 'Ongoing Support'}</span>
              </div>
            </div>
          </div>
        </header>

        {/* Section Heading & Filter Tabs */}
        <section className="py-12 md:py-20 px-6 md:px-10 max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-10">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-2">
                {isAr ? 'أنواع المواقع التي تصممها وتطورها الشركة' : 'Types of Websites We Design & Develop'}
              </h2>
              <p className="text-gray-500 dark:text-gray-400 text-sm md:text-base">
                {isAr
                  ? 'اختر نوع الموقع المناسب لنشاطك، وتواصل معنا مباشرة للبدء في تنفيذه.'
                  : 'Select the website type matching your industry, and reach out directly to start building.'}
              </p>
            </div>

            {/* Search Input */}
            <div className="relative w-full md:w-72">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder={isAr ? 'ابحث عن نوع الموقع...' : 'Search website types...'}
                className="w-full bg-white dark:bg-slate-800 border border-gray-200 dark:border-slate-700 rounded-xl pr-10 pl-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all text-gray-900 dark:text-white placeholder-gray-400"
              />
              <svg
                className="w-4 h-4 text-gray-400 absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
          </div>

          {/* Filter Tabs */}
          <div className="flex flex-wrap gap-2 mb-10 pb-2 border-b border-gray-100 dark:border-slate-800">
            {filterTabs.map((tab) => (
              <button
                key={tab.key}
                onClick={() => setSelectedKey(tab.key)}
                className={`px-4 py-2 rounded-xl text-sm font-semibold transition-all cursor-pointer ${
                  selectedKey === tab.key
                    ? 'bg-primary text-white shadow-md shadow-primary/25'
                    : 'bg-white dark:bg-slate-800 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-slate-700 border border-gray-200 dark:border-slate-700'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Cards Grid */}
          {filteredServices.length === 0 ? (
            <div className="text-center py-16 bg-white dark:bg-slate-900 rounded-2xl border border-gray-100 dark:border-slate-800">
              <svg className="w-12 h-12 text-gray-300 dark:text-gray-600 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <p className="text-gray-500 dark:text-gray-400 font-medium">{isAr ? 'لم يتم العثور على نتائج مطابقة لبحثك.' : 'No matching results found.'}</p>
              <button
                onClick={() => {
                  setSelectedKey('all');
                  setSearchQuery('');
                }}
                className="mt-4 text-primary text-sm font-semibold hover:underline"
              >
                {isAr ? 'إعادة ضبط الفلاتر' : 'Reset filters'}
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredServices.map((service) => (
                <div
                  key={service.id}
                  className="bg-white dark:bg-slate-900 rounded-2xl border border-gray-200/80 dark:border-slate-800 shadow-soft hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col overflow-hidden group"
                >
                  {/* Card Illustration */}
                  <div className="relative h-52 w-full overflow-hidden bg-slate-50 dark:bg-slate-800/50 border-b border-gray-100 dark:border-slate-800">
                    <Image
                      src={service.image}
                      alt={isAr ? service.title.ar : service.title.en}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-contain p-3 group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-3 right-3 bg-white/90 dark:bg-slate-900/90 backdrop-blur-sm text-xs font-bold text-gray-700 dark:text-gray-200 px-2.5 py-1 rounded-md border border-gray-200 dark:border-slate-700 shadow-xs">
                      {isAr ? service.category.ar : service.category.en}
                    </div>
                  </div>

                  {/* Card Content with Blue Right Bar */}
                  <div className="p-6 flex flex-col flex-grow">
                    <div className="border-r-4 border-primary pr-3 rtl:border-r-4 rtl:pr-3 rtl:border-l-0 ltr:border-l-4 ltr:pl-3 ltr:border-r-0 mb-4">
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-primary transition-colors">
                        {isAr ? service.title.ar : service.title.en}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mt-1">
                        {isAr ? service.description.ar : service.description.en}
                      </p>
                    </div>

                    {/* Features list */}
                    <ul className="space-y-2 mb-6 mt-auto text-xs text-gray-600 dark:text-gray-400">
                      {(isAr ? service.features.ar : service.features.en).map((feature, idx) => (
                        <li key={idx} className="flex items-center gap-2">
                          <svg className="w-3.5 h-3.5 text-primary shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" />
                          </svg>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Order on WhatsApp Button */}
                    <button
                      onClick={() => handleOrderClick(service.whatsappMessage)}
                      className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3 px-4 rounded-xl shadow-md hover:shadow-emerald-600/25 transition-all duration-200 flex items-center justify-center gap-2.5 cursor-pointer active:scale-98"
                    >
                      <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                        <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.007c.106.005.249-.04.39.298.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.354.101.174.449.741.964 1.201.662.591 1.221.774 1.394.86s.274.072.376-.043c.101-.116.433-.506.549-.68.116-.173.231-.145.39-.087s1.011.477 1.184.564.289.13.332.202c.043.073.043.419-.101.824z" />
                        <path d="M12 2C6.477 2 2 6.477 2 12c0 1.891.524 3.66 1.436 5.176L2 22l4.982-1.397A9.957 9.957 0 0012 22c5.523 0 10-4.477 10-10S17.523 2 12 2zm0 18.2c-1.637 0-3.153-.49-4.42-1.328l-.317-.209-2.964.83.844-2.888-.225-.337A8.17 8.17 0 013.8 12c0-4.521 3.679-8.2 8.2-8.2 4.521 0 8.2 3.679 8.2 8.2 0 4.521-3.679 8.2-8.2 8.2z" />
                      </svg>
                      <span>{isAr ? 'اطلب هذا الموقع' : 'Request this website'}</span>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </section>

        {/* Custom Order & Back Navigation */}
        <section className="bg-gray-50 dark:bg-slate-950 border-t border-gray-100 dark:border-slate-800 py-16 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-2xl md:text-3xl font-bold mb-4 text-gray-900 dark:text-white">
              {isAr ? 'هل تبحث عن موقع مخصص بمواصفات خاصة؟' : 'Need a Tailored Custom Website?'}
            </h3>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-8 leading-relaxed text-sm md:text-base">
              {isAr
                ? 'فريقنا الهندسي والبرمجي جاهز لتحويل أي فكرة أو منصة برمجية معقدة إلى واقع ملموس وبأعلى معايير الأمان والسرعة.'
                : 'Our software engineering team is primed to turn complex bespoke workflows and platforms into reality with top security and speed.'}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() =>
                  handleOrderClick({
                    ar: 'السلام عليكم، أرغب في استشارة برمجية لتصميم وتطوير موقع مخصص بمواصفات محددة من مؤسسة معيار.',
                    en: "Hello, I would like an engineering consultation for a custom web platform from Mea'yar.",
                  })
                }
                className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold px-8 py-3.5 rounded-xl shadow-lg transition-all inline-flex items-center justify-center gap-2 cursor-pointer"
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.007c.106.005.249-.04.39.298.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.354.101.174.449.741.964 1.201.662.591 1.221.774 1.394.86s.274.072.376-.043c.101-.116.433-.506.549-.68.116-.173.231-.145.39-.087s1.011.477 1.184.564.289.13.332.202c.043.073.043.419-.101.824z" />
                  <path d="M12 2C6.477 2 2 6.477 2 12c0 1.891.524 3.66 1.436 5.176L2 22l4.982-1.397A9.957 9.957 0 0012 22c5.523 0 10-4.477 10-10S17.523 2 12 2zm0 18.2c-1.637 0-3.153-.49-4.42-1.328l-.317-.209-2.964.83.844-2.888-.225-.337A8.17 8.17 0 013.8 12c0-4.521 3.679-8.2 8.2-8.2 4.521 0 8.2 3.679 8.2 8.2 0 4.521-3.679 8.2-8.2 8.2z" />
                </svg>
                <span>{isAr ? 'تواصل عبر واتساب (+249 11 661 3320)' : 'Chat on WhatsApp (+249 11 661 3320)'}</span>
              </button>
              <Link
                href="/#services"
                className="px-6 py-3.5 bg-white dark:bg-slate-900 border border-gray-300 dark:border-slate-700 text-gray-700 dark:text-gray-200 font-bold rounded-xl hover:bg-gray-100 dark:hover:bg-slate-800 transition-colors inline-flex items-center justify-center gap-2"
              >
                <span>{isAr ? 'العودة لقائمة الخدمات' : 'Back to Services'}</span>
                <span>{isAr ? '←' : '→'}</span>
              </Link>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="py-8 bg-gray-900 dark:bg-black text-gray-400 text-center text-sm border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p>© {new Date().getFullYear()} {t('footerRights')}</p>
          <div className="flex gap-6 text-xs text-gray-400">
            <Link href="/" className="hover:text-white transition-colors">{t('navHome')}</Link>
            <Link href="/#services" className="hover:text-white transition-colors">{t('navServices')}</Link>
            <Link href="/#contact" className="hover:text-white transition-colors">{t('navContact')}</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}

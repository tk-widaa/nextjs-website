"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

interface WebsiteService {
  id: number;
  title: string;
  category: string;
  description: string;
  features: string[];
  image: string;
  whatsappMessage: string;
}

const websiteServices: WebsiteService[] = [
  {
    id: 1,
    title: 'مواقع الشركات والمؤسسات',
    category: 'أعمال ومؤسسات',
    description: 'للتعريف بالشركات وعرض خدماتها وهويتها ومعلومات التواصل.',
    features: ['هوية رقمية متناسقة', 'صفحات الخدمات وفريق العمل', 'نموذج تواصل وخريطة تفاعلية'],
    image: '/images/software/corporate.svg',
    whatsappMessage: 'السلام عليكم، أود طلب تصميم وبرمجة موقع للشركات والمؤسسات من مؤسسة معيار.',
  },
  {
    id: 2,
    title: 'المتاجر الإلكترونية',
    category: 'تجارة ومتاجر',
    description: 'لبيع المنتجات، عرض الأسعار، إدارة الطلبات والعملاء.',
    features: ['سلة تسوق وبوابات دفع إلكتروني', 'لوحة تحكم لإدارة المنتجات والطلبات', 'إشعارات الشحن ومتابعة المخزون'],
    image: '/images/software/ecommerce.svg',
    whatsappMessage: 'السلام عليكم، أود طلب تصميم وبرمجة متجر إلكتروني متكامل من مؤسسة معيار.',
  },
  {
    id: 3,
    title: 'المواقع الشخصية والبورتفوليو',
    category: 'أعمال ومؤسسات',
    description: 'للمهندسين والمبرمجين والمصممين وأصحاب الأعمال.',
    features: ['معرض أعمال بتصميم تفاعلي', 'استعراض السيرة الذاتية والخبرات', 'ربط فوري بحسابات التواصل المهني'],
    image: '/images/software/portfolio.svg',
    whatsappMessage: 'السلام عليكم، أود طلب تصميم وبرمجة موقع شخصي (بورتفوليو) من مؤسسة معيار.',
  },
  {
    id: 4,
    title: 'المواقع التعليمية',
    category: 'خدمات وحجوزات',
    description: 'للمدارس والجامعات والمنصات التعليمية والدورات.',
    features: ['بث الدروس والمسارات التعليمية', 'نظام إدارة الطلاب والاختبارات', 'إصدار الشهادات وبوابات الاشتراك'],
    image: '/images/software/education.svg',
    whatsappMessage: 'السلام عليكم، أود طلب تصميم وبرمجة منصة / موقع تعليمي من مؤسسة معيار.',
  },
  {
    id: 5,
    title: 'مواقع المطاعم والكافيهات',
    category: 'خدمات وحجوزات',
    description: 'لعرض قائمة الطعام والأسعار والطلبات والحجوزات.',
    features: ['منيو إلكتروني تفاعلي مع باركود QR', 'نظام حجز الطاولات المسبق', 'استقبال طلبات التوصيل والاستلام'],
    image: '/images/software/restaurant.svg',
    whatsappMessage: 'السلام عليكم، أود طلب تصميم وبرمجة موقع مطعم / كافيه مع قائمة طعام وحجوزات من مؤسسة معيار.',
  },
  {
    id: 6,
    title: 'المواقع العقارية',
    category: 'خدمات وحجوزات',
    description: 'لعرض العقارات والشقق والأراضي مع الصور والتفاصيل.',
    features: ['محرك بحث وفلاتر بحسب المنطقة والسعر', 'معرض صور تفصيلي ومخططات هندسية', 'طلب معاينة الموقع وتواصل مباشر'],
    image: '/images/software/real-estate.svg',
    whatsappMessage: 'السلام عليكم، أود طلب تصميم وبرمجة موقع عقاري لعرض العقارات وحجز المعاينات من مؤسسة معيار.',
  },
  {
    id: 7,
    title: 'المواقع الطبية',
    category: 'خدمات وحجوزات',
    description: 'للعيادات والمراكز الطبية والمستشفيات وحجز المواعيد.',
    features: ['حجز المواعيد الطبية أونلاين', 'دليل الأطباء والتخصصات والخدمات', 'أوقات العمل وأرقام الطوارئ السريعة'],
    image: '/images/software/medical.svg',
    whatsappMessage: 'السلام عليكم، أود طلب تصميم وبرمجة موقع طبي / مركز عيادات وحجز مواعيد من مؤسسة معيار.',
  },
  {
    id: 8,
    title: 'مواقع السياحة والسفر',
    category: 'خدمات وحجوزات',
    description: 'للفنادق وشركات السفر والسياحة والحجوزات.',
    features: ['عرض الباقات السياحية والرحلات', 'نظام الاستفسار وحجز الفنادق والطيران', 'معرض الوجهات السياحية وتقييمات العملاء'],
    image: '/images/software/travel.svg',
    whatsappMessage: 'السلام عليكم، أود طلب تصميم وبرمجة موقع سياحة وسفر وحجوزات فندقية من مؤسسة معيار.',
  },
  {
    id: 9,
    title: 'المدونات والمواقع الإخبارية',
    category: 'محتوى وإعلام',
    description: 'لنشر المقالات والأخبار والمحتوى المتخصص.',
    features: ['إدارة متقدمة للمقالات والتصنيفات', 'تهيئة كاملة لمحركات البحث SEO', 'سرعة تصفح فائقة ومشاركة عبر الشبكات'],
    image: '/images/software/blog.svg',
    whatsappMessage: 'السلام عليكم، أود طلب تصميم وبرمجة مدونة / موقع إخباري ومحتوى متخصص من مؤسسة معيار.',
  },
  {
    id: 10,
    title: 'صفحات الهبوط (Landing Pages)',
    category: 'تجارة ومتاجر',
    description: 'للتسويق للمنتجات والخدمات والحملات الإعلانية.',
    features: ['تصميم عالي التحويل (High Conversion)', 'متجاوب تماما مع إعلانات السوشيال ميديا', 'تكامل مع نماذج جمع بيانات العملاء (Leads)'],
    image: '/images/software/landing-page.svg',
    whatsappMessage: 'السلام عليكم، أود طلب تصميم وبرمجة صفحة هبوط تسويقية (Landing Page) لحملة إعلانية من مؤسسة معيار.',
  },
];

const categories = ['الكل', 'أعمال ومؤسسات', 'تجارة ومتاجر', 'خدمات وحجوزات', 'محتوى وإعلام'];

export default function SoftwareServicesPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>('الكل');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const filteredServices = websiteServices.filter((service) => {
    const matchesCategory = selectedCategory === 'الكل' || service.category === selectedCategory;
    const matchesSearch =
      service.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      service.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const handleOrderClick = (message: string) => {
    const whatsappUrl = `https://wa.me/249116613320?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="w-full bg-background text-foreground font-sans min-h-screen flex flex-col selection:bg-primary/20">
      {/* Navigation */}
      <nav className="p-4 md:px-10 border-b border-gray-100 bg-white/95 sticky top-0 z-50 shadow-sm backdrop-blur-md flex justify-between items-center">
        <Link href="/" className="flex items-center gap-2 text-2xl font-bold text-primary transition-opacity hover:opacity-80">
          <div className="relative w-8 h-8 rounded-full overflow-hidden flex-shrink-0">
            <Image
              src="/images/Profile/logo.jpg"
              alt="شعار معيار"
              fill
              sizes="32px"
              className="object-cover"
              priority
            />
          </div>
          <span>معيار</span>
        </Link>

        <div className="hidden md:flex gap-6 text-sm font-semibold text-gray-700">
          <Link href="/" className="hover:text-primary transition-colors">الرئيسية</Link>
          <Link href="/#services" className="hover:text-primary transition-colors">خدماتنا</Link>
          <Link href="/#tools" className="hover:text-primary transition-colors">أدوات هندسية</Link>
          <Link href="/#contact" className="hover:text-primary transition-colors">تواصل معنا</Link>
        </div>

        <Link
          href="/#contact"
          className="btn-primary text-sm py-2 px-5"
        >
          طلب استشارة
        </Link>
      </nav>

      {/* Main Content */}
      <main className="flex-grow">
        {/* Header Hero Section */}
        <header className="relative bg-gradient-to-b from-blue-50/60 via-white to-gray-50/50 py-16 md:py-24 px-6 text-center border-b border-gray-100 overflow-hidden">
          <div className="max-w-4xl mx-auto relative z-10">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-xs md:text-sm font-bold mb-6">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
              </svg>
              <span>خدمات البرمجة وتطوير الويب</span>
            </div>

            <h1 className="text-3xl md:text-5xl font-black mb-6 text-gray-900 leading-tight">
              تطوير وتصميم <span className="text-primary">مواقع الويب</span>
            </h1>

            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-8">
              نُحوّل أفكارك إلى مواقع ويب احترافية تجمع بين التصميم العصري والبرمجة المتقنة؛ لنمنح مشروعك واجهة رقمية سريعة، متجاوبة، ومصممة خصيصا لتحقيق النمو والتميز.
            </p>

            {/* Quick Guarantees / Highlights */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 max-w-3xl mx-auto text-xs md:text-sm text-gray-700">
              <div className="bg-white p-3 rounded-xl border border-gray-100 shadow-sm flex items-center justify-center gap-2">
                <svg className="w-4 h-4 text-primary shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" />
                </svg>
                <span>تصميم متجاوب بالكامل</span>
              </div>
              <div className="bg-white p-3 rounded-xl border border-gray-100 shadow-sm flex items-center justify-center gap-2">
                <svg className="w-4 h-4 text-primary shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" />
                </svg>
                <span>سرعة وأداء فائق</span>
              </div>
              <div className="bg-white p-3 rounded-xl border border-gray-100 shadow-sm flex items-center justify-center gap-2">
                <svg className="w-4 h-4 text-primary shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" />
                </svg>
                <span>تهيئة محركات البحث SEO</span>
              </div>
              <div className="bg-white p-3 rounded-xl border border-gray-100 shadow-sm flex items-center justify-center gap-2">
                <svg className="w-4 h-4 text-primary shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" />
                </svg>
                <span>دعم فني وصيانة</span>
              </div>
            </div>
          </div>
        </header>

        {/* Filter and Content Section */}
        <section className="py-12 md:py-20 px-6 md:px-10 max-w-7xl mx-auto">
          {/* Section Heading & Category Filters */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
                أنواع المواقع التي تصممها وتطورها الشركة
              </h2>
              <p className="text-gray-500 text-sm md:text-base">
                اختر نوع الموقع المناسب لنشاطك، وتواصل معنا مباشرة للبدء في تنفيذه.
              </p>
            </div>

            {/* Search Input */}
            <div className="relative w-full md:w-72">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="ابحث عن نوع الموقع..."
                className="w-full bg-white border border-gray-200 rounded-lg pr-10 pl-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all text-gray-900 placeholder-gray-400"
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

          {/* Category Tabs */}
          <div className="flex flex-wrap gap-2 mb-10 pb-2 border-b border-gray-100">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all cursor-pointer ${selectedCategory === category
                    ? 'bg-primary text-white shadow-md shadow-primary/25'
                    : 'bg-white text-gray-600 hover:bg-gray-100 border border-gray-200'
                  }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* 10 Services Cards Grid */}
          {filteredServices.length === 0 ? (
            <div className="text-center py-16 bg-white rounded-2xl border border-gray-100">
              <svg className="w-12 h-12 text-gray-300 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <p className="text-gray-500 font-medium">لم يتم العثور على نتائج مطابقة لبحثك.</p>
              <button
                onClick={() => {
                  setSelectedCategory('الكل');
                  setSearchQuery('');
                }}
                className="mt-4 text-primary text-sm font-semibold hover:underline"
              >
                إعادة ضبط الفلاتر
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredServices.map((service) => (
                <div
                  key={service.id}
                  className="bg-white rounded-2xl border border-gray-200/80 shadow-soft hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col overflow-hidden group"
                >
                  {/* Card Image (صورة توضيحية لتصميم الموقع) */}
                  <div className="relative h-52 w-full overflow-hidden bg-slate-50 border-b border-gray-100">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-contain p-3 group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm text-xs font-bold text-gray-700 px-2.5 py-1 rounded-md border border-gray-200 shadow-xs">
                      {service.category}
                    </div>
                  </div>

                  {/* Card Content */}
                  <div className="p-6 flex flex-col flex-grow">
                    {/* اسم نوع الموقع */}
                    <div className="flex items-center gap-2 mb-3">
                      <span className="w-2 h-2 rounded-full bg-primary shrink-0" />
                      <h3 className="text-xl font-bold text-gray-900 group-hover:text-primary transition-colors">
                        {service.title}
                      </h3>
                    </div>

                    {/* وصف مختصر */}
                    <p className="text-gray-600 text-sm leading-relaxed mb-5">
                      {service.description}
                    </p>

                    {/* Key features bullets */}
                    <ul className="space-y-2 mb-6 mt-auto text-xs text-gray-600">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center gap-2">
                          <svg className="w-3.5 h-3.5 text-primary shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" />
                          </svg>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>

                    {/* زر «اطلب هذا الموقع» */}
                    <button
                      onClick={() => handleOrderClick(service.whatsappMessage)}
                      className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3 px-4 rounded-xl shadow-md hover:shadow-emerald-600/25 transition-all duration-200 flex items-center justify-center gap-2.5 cursor-pointer active:scale-98"
                    >
                      {/* WhatsApp SVG Icon */}
                      <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                        <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.007c.106.005.249-.04.39.298.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.354.101.174.449.741.964 1.201.662.591 1.221.774 1.394.86s.274.072.376-.043c.101-.116.433-.506.549-.68.116-.173.231-.145.39-.087s1.011.477 1.184.564.289.13.332.202c.043.073.043.419-.101.824z" />
                        <path d="M12 2C6.477 2 2 6.477 2 12c0 1.891.524 3.66 1.436 5.176L2 22l4.982-1.397A9.957 9.957 0 0012 22c5.523 0 10-4.477 10-10S17.523 2 12 2zm0 18.2c-1.637 0-3.153-.49-4.42-1.328l-.317-.209-2.964.83.844-2.888-.225-.337A8.17 8.17 0 013.8 12c0-4.521 3.679-8.2 8.2-8.2 4.521 0 8.2 3.679 8.2 8.2 0 4.521-3.679 8.2-8.2 8.2z" />
                      </svg>
                      <span>اطلب هذا الموقع</span>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </section>

        {/* Custom Order & Contact Section */}
        <section className="bg-gray-50 border-t border-gray-100 py-16 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-2xl md:text-3xl font-bold mb-4 text-gray-900">
              هل تبحث عن فكرة موقع مخصص بمواصفات خاصة؟
            </h3>
            <p className="text-gray-600 max-w-2xl mx-auto mb-8 leading-relaxed">
              فريقنا الهندسي والبرمجي جاهز لتحويل أي فكرة أو منصة برمجية معقدة إلى واقع ملموس وبأعلى معايير الأمان والسرعة.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() =>
                  handleOrderClick(
                    'السلام عليكم، أرغب في استشارة برمجية لتصميم وتطوير موقع مخصص بمواصفات محددة من مؤسسة معيار.'
                  )
                }
                className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold px-8 py-3.5 rounded-xl shadow-lg transition-all inline-flex items-center justify-center gap-2 cursor-pointer"
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.007c.106.005.249-.04.39.298.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.354.101.174.449.741.964 1.201.662.591 1.221.774 1.394.86s.274.072.376-.043c.101-.116.433-.506.549-.68.116-.173.231-.145.39-.087s1.011.477 1.184.564.289.13.332.202c.043.073.043.419-.101.824z" />
                  <path d="M12 2C6.477 2 2 6.477 2 12c0 1.891.524 3.66 1.436 5.176L2 22l4.982-1.397A9.957 9.957 0 0012 22c5.523 0 10-4.477 10-10S17.523 2 12 2zm0 18.2c-1.637 0-3.153-.49-4.42-1.328l-.317-.209-2.964.83.844-2.888-.225-.337A8.17 8.17 0 013.8 12c0-4.521 3.679-8.2 8.2-8.2 4.521 0 8.2 3.679 8.2 8.2 0 4.521-3.679 8.2-8.2 8.2z" />
                </svg>
                <span> إضغط للتواصل عبر واتساب </span>
              </button>
              <Link
                href="/#services"
                className="px-6 py-3.5 bg-white border border-gray-300 text-gray-700 font-bold rounded-xl hover:bg-gray-100 transition-colors inline-flex items-center justify-center gap-2"
              >
                <span>العودة لقائمة الخدمات</span>
                <span>←</span>
              </Link>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="py-8 bg-gray-900 text-gray-400 text-center text-sm border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p>© {new Date().getFullYear()} مؤسسة معيار للحلول الهندسية والبرمجية. جميع الحقوق محفوظة.</p>
          <div className="flex gap-6 text-xs text-gray-400">
            <Link href="/" className="hover:text-white transition-colors">الرئيسية</Link>
            <Link href="/#services" className="hover:text-white transition-colors">خدماتنا</Link>
            <Link href="/#contact" className="hover:text-white transition-colors">اتصل بنا</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}


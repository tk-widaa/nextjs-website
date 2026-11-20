"use client";

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

export type Language = 'ar' | 'en';
export type Theme = 'light' | 'dark';

interface AppContextType {
  language: Language;
  theme: Theme;
  toggleLanguage: () => void;
  setLanguage: (lang: Language) => void;
  toggleTheme: () => void;
  setTheme: (theme: Theme) => void;
  t: (key: string) => string;
}

const translations: Record<string, Record<Language, string>> = {
  // Brand
  brandName: { ar: 'معيار', en: "Mea'yar" },
  brandSub: { ar: 'للحلول الهندسية والبرمجية', en: 'Engineering & Software Solutions' },

  // Navigation
  navAbout: { ar: 'من نحن', en: 'About Us' },
  navServices: { ar: 'خدماتنا', en: 'Services' },
  navTools: { ar: 'أدوات هندسية', en: 'Engineering Tools' },
  navPortfolio: { ar: 'أعمالنا', en: 'Portfolio' },
  navContact: { ar: 'تواصل معنا', en: 'Contact' },
  navRequestService: { ar: 'اطلب خدمة', en: 'Request Service' },
  navHome: { ar: 'الرئيسية', en: 'Home' },

  // Theme & Language
  switchThemeLight: { ar: 'الوضع الفاتح', en: 'Light Mode' },
  switchThemeDark: { ar: 'الوضع الداكن', en: 'Dark Mode' },
  languageLabel: { ar: 'English', en: 'العربية' },

  // Hero
  heroTitleStart: { ar: 'حلول هندسية متكاملة لضمان', en: 'Integrated Engineering Solutions for' },
  heroTitleHighlight: { ar: 'الكفاءة والجودة.', en: 'Efficiency & Quality.' },
  heroDescription: {
    ar: 'مؤسسة معيار بقيادة المهندس / حمزة متخصصة في تقديم الحلول الهندسية المتكاملة في مجالات أنظمة المباني وخطوط الإنتاج، ننهض بمشاريعك بحلول مبتكرة وعملية.',
    en: "Mea'yar Institution, led by Eng. Hamza, specializes in delivering integrated engineering solutions across building systems and production lines, empowering your projects with innovative and practical solutions.",
  },
  heroCtaPrimary: { ar: 'استشارة مجانية', en: 'Free Consultation' },
  heroCtaSecondary: { ar: 'تصفح خدماتنا', en: 'Browse Services' },

  // About
  aboutTag: { ar: 'من نحن', en: 'About Us' },
  aboutHeading: { ar: 'نؤمن أن كل مشكلة هندسية لها حل ذكي', en: 'We believe every engineering challenge has a smart solution' },
  aboutDescription: {
    ar: 'نحن فريق هندسي بقيادة مهندس ميكانيكي متخصص، نمتلك خبرة واسعة في أنظمة التكييف والتهوية (HVAC)، أنظمة مكافحة الحريق، الأنظمة الصحية، وأنظمة السلامة. مهمتنا هي الوصول للحل بأعلى كفاءة وأقل تكلفة.',
    en: 'We are an engineering team led by a specialized mechanical engineer, possessing extensive expertise in HVAC, firefighting systems, plumbing, and safety standards. Our mission is to achieve the best solution with highest efficiency and lowest cost.',
  },

  // Services
  servicesTag: { ar: 'خدماتنا', en: 'Our Services' },
  servicesHeading: { ar: 'الحلول الهندسية والبرمجية الشاملة', en: 'Comprehensive Engineering & Software Solutions' },
  clickToBrowse: { ar: 'اضغط لتتصفحني', en: 'Click to explore' },

  // Service 1: MEP
  serviceMepTitle: { ar: 'تصميم أنظمة MEP', en: 'MEP Systems Design' },
  serviceMepDesc: {
    ar: 'تصميم أنظمة التكييف والتهوية (HVAC)، مكافحة الحريق (Firefighting)، الأنظمة الصحية، والسلامة.',
    en: 'Design of HVAC, Firefighting, Plumbing, and Life Safety systems with precision and global codes.',
  },

  // Service 2: Production Lines
  serviceProdTitle: { ar: 'خطوط الإنتاج', en: 'Production Lines' },
  serviceProdDesc: {
    ar: 'تصميم وتطوير خطوط الإنتاج، تحليل الأعطال وإيجاد الحلول الجبرية لتحسين كفاءة التشغيل.',
    en: 'Design and optimization of production lines, breakdown troubleshooting, and enhancing operational efficiency.',
  },

  // Service 3: Custom Parts
  servicePartsTitle: { ar: 'تصميم أجزاء مخصصة', en: 'Custom Parts Design' },
  servicePartsDesc: {
    ar: 'تصميم قطع ميكانيكية حسب الطلب وتعديل تصميمات قائمة لحل مشاكل فنية.',
    en: 'On-demand mechanical component CAD design and modifying existing parts to solve technical failures.',
  },

  // Service 4: Consulting
  serviceConsultingTitle: { ar: 'الاستشارات الهندسية', en: 'Engineering Consulting' },
  serviceConsultingDesc: {
    ar: 'مراجعة التصميمات بدقة، تقديم حلول فنية للمشاكل الهندسية ودعم المشاريع بالخبرات.',
    en: 'Detailed technical plan auditing, providing engineering solutions to complex site problems and expert advisory.',
  },

  // Service 5: Maintenance
  serviceMaintenanceTitle: { ar: 'الصيانة والتشغيل', en: 'Maintenance & Operations' },
  serviceMaintenanceDesc: {
    ar: 'تشخيص الأعطال المعقدة عن بعد، دعم فني مباشر فعال، ومتابعة تشغيل الأنظمة.',
    en: 'Remote diagnostic support for complex breakdowns, proactive technical guidance, and operational uptime.',
  },

  // Service 6: Software
  serviceSoftwareTitle: { ar: 'تطوير و تصميم مواقع الويب', en: 'Web Design & Development' },
  serviceSoftwareDesc: {
    ar: 'نُحوّل أفكارك إلى مواقع ويب احترافية تجمع بين التصميم العصري والبرمجة المتقنة؛ لنمنح مشروعك واجهة رقمية سريعة، متجاوبة، ومصممة خصيصاً لتحقيق النمو والتميز.',
    en: 'Transforming your vision into high-performing websites blending modern UI/UX with clean code; giving your enterprise a fast, responsive digital presence built for growth.',
  },

  // Tools
  toolsTag: { ar: 'أدوات هندسية', en: 'Engineering Tools' },
  toolsHeading: { ar: 'حاسبات سريعة لتقدير الأحمال', en: 'Quick Load Estimation Calculators' },
  toolsSubtitle: { ar: 'استخدم هذه الأدوات كتقدير مبدئي قبل الاستشارة الهندسية.', en: 'Use these tools as preliminary estimates prior to detailed engineering review.' },

  hvacCalcTitle: { ar: 'حاسبة حمل التكييف التقديري', en: 'HVAC Capacity Calculator' },
  hvacCalcDesc: { ar: 'احسب السعة التقريبية للمكيف المطلوبة بناءً على المساحة (يفترض ارتفاع قياسي).', en: 'Calculate approximate AC capacity required based on floor area (standard ceiling height).' },
  areaLabel: { ar: 'المساحة (متر مربع):', en: 'Area (square meters):' },
  areaPlaceholder: { ar: 'مثال: 50', en: 'Example: 50' },
  calcButton: { ar: 'احسب السعة', en: 'Calculate Capacity' },
  hvacResultLabel: { ar: 'السعة التقديرية المطلوبة', en: 'Estimated Required Capacity' },
  tonCooling: { ar: 'طن تبريد', en: 'TR (Tons of Refrigeration)' },
  calcNote: { ar: 'هذه نتيجة مبدئية وتحتاج إلى مراجعة هندسية.', en: 'This is a preliminary estimate requiring engineering validation.' },

  fireCalcTitle: { ar: 'حاسبة طفايات الحريق التقريبية', en: 'Fire Extinguisher Estimator' },
  fireCalcDesc: { ar: 'احسب العدد التقريبي لطفايات الحريق اليدوية بناءً على المساحة.', en: 'Calculate approximate number of portable fire extinguishers based on area.' },
  fireAreaLabel: { ar: 'المساحة الإجمالية للمكان (متر مربع):', en: 'Total Area (square meters):' },
  fireAreaPlaceholder: { ar: 'مثال: 250', en: 'Example: 250' },
  calcFireButton: { ar: 'احسب العدد', en: 'Calculate Quantity' },
  fireResultLabel: { ar: 'العدد التقديري لطفايات الحريق', en: 'Estimated Fire Extinguishers' },
  extinguishersUnit: { ar: 'طفايات حريق (بودرة متعددة الأغراض)', en: 'Fire Extinguishers (Multi-purpose Dry Powder)' },

  // Portfolio
  portfolioTag: { ar: 'سجل الإنجازات', en: 'Track Record' },
  portfolioHeading: { ar: 'نماذج من أعمالنا الهندسية', en: 'Highlights of Our Engineering Work' },

  portfolioItem1Title: { ar: 'تصميم أنظمة التكييف لمجمع تجاري', en: 'HVAC Design for Commercial Complex' },
  portfolioItem1Desc: { ar: 'حساب الأحمال الحرارية وتوزيع مجاري الهواء لأنظمة الشيلر والباكج.', en: 'Cooling load calculations and duct layout for chiller and packaged rooftop units.' },
  portfolioItem2Title: { ar: 'تطوير خط إنتاج وتعبئة أوتوماتيكي', en: 'Automated Packaging Line Optimization' },
  portfolioItem2Desc: { ar: 'إعادة تصميم منظومة النواقل ودمج حساسات ذكية لتقليل وقت التوقف بنسبة 35%.', en: 'Conveyor redesign and smart sensors integration reducing line downtime by 35%.' },
  portfolioItem3Title: { ar: 'شبكة مكافحة الحريق لمستودعات مركزية', en: 'Fire Protection Network for Warehouses' },
  portfolioItem3Desc: { ar: 'تصميم شبكات الرشاشات الأوتوماتيكية ومحطة مضخات الحريق وفق معايير NFPA.', en: 'Automatic sprinkler system design and fire pump station compliant with NFPA codes.' },

  // Contact
  contactTag: { ar: 'تواصل معنا', en: 'Get In Touch' },
  contactHeading: { ar: 'جاهزون لمناقشة مشروعك القادم', en: 'Ready to Discuss Your Next Project' },
  contactDesc: {
    ar: 'سواء كنت بحاجة إلى استشارة سريعة، تصميم نظام متكامل، أو تحسين خطوط الإنتاج، نحن هنا لتقديم الدعم الهندسي الموثوق.',
    en: 'Whether you require an immediate technical consultation, a turnkey MEP design, or production line optimization, our engineers are ready.',
  },
  contactDirectTitle: { ar: 'تواصل مباشر:', en: 'Direct Communication:' },
  contactWhatsappNumber: { ar: 'واتساب (+249 11 661 3320)', en: 'WhatsApp (+249 11 661 3320)' },
  contactEmailAddress: { ar: 'hamzaelzain.eng@gmail.com', en: 'hamzaelzain.eng@gmail.com' },
  contactHoursTitle: { ar: 'ساعات العمل:', en: 'Working Hours:' },
  contactHoursValue: { ar: 'السبت - الخميس: 8:00 صباحاً - 6:00 مساءً', en: 'Saturday - Thursday: 8:00 AM - 6:00 PM' },

  orderFormTitle: { ar: 'طلب خدمة', en: 'Request a Service' },
  selectServicePlaceholder: { ar: 'نوع الخدمة...', en: 'Service Type...' },
  serviceOption1: { ar: 'تصميم أنظمة MEP', en: 'MEP Systems Design' },
  serviceOption2: { ar: 'خطوط الإنتاج', en: 'Production Lines' },
  serviceOption3: { ar: 'تصميم أجزاء مخصصة', en: 'Custom Parts Design' },
  serviceOption4: { ar: 'استشارة هندسية', en: 'Engineering Consultation' },
  serviceOption5: { ar: 'الصيانة والتشغيل', en: 'Maintenance & Operations' },
  serviceOption6: { ar: 'تطوير و تصميم مواقع الويب', en: 'Web Design & Development' },
  orderDetailsPlaceholder: { ar: 'تفاصيل الطلب...', en: 'Order details and project requirements...' },
  sendMethodLabel: { ar: 'اختر طريقة إرسال الطلب:', en: 'Choose submission channel:' },
  methodWhatsapp: { ar: 'واتساب', en: 'WhatsApp' },
  methodGmail: { ar: 'البريد الإلكتروني (Gmail)', en: 'Email (Gmail)' },
  submitOrderButton: { ar: 'إرسال الطلب', en: 'Submit Request' },

  // Footer & Back to top
  footerRights: { ar: 'مؤسسة معيار للحلول الهندسية والبرمجية. جميع الحقوق محفوظة.', en: "Mea'yar Institution for Engineering & Software Solutions. All rights reserved." },
  backToTop: { ar: 'العودة للأعلى', en: 'Back to top' },
};

const AppContext = createContext<AppContextType | undefined>(undefined);

export function AppProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>('ar');
  const [theme, setThemeState] = useState<Theme>('light');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // Read persisted theme
    const savedTheme = localStorage.getItem('site_theme') as Theme | null;
    if (savedTheme === 'dark' || savedTheme === 'light') {
      setThemeState(savedTheme);
      applyTheme(savedTheme);
    } else {
      const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
      const initialTheme = prefersDark ? 'dark' : 'light';
      setThemeState(initialTheme);
      applyTheme(initialTheme);
    }

    // Read persisted language
    const savedLang = localStorage.getItem('site_lang') as Language | null;
    if (savedLang === 'en' || savedLang === 'ar') {
      setLanguageState(savedLang);
      applyLanguage(savedLang);
    } else {
      applyLanguage('ar');
    }

    setMounted(true);
  }, []);

  const applyTheme = (t: Theme) => {
    const root = document.documentElement;
    if (t === 'dark') {
      root.classList.add('dark');
      root.style.colorScheme = 'dark';
    } else {
      root.classList.remove('dark');
      root.style.colorScheme = 'light';
    }
  };

  const applyLanguage = (lang: Language) => {
    const root = document.documentElement;
    root.setAttribute('lang', lang);
    root.setAttribute('dir', lang === 'ar' ? 'rtl' : 'ltr');
  };

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem('site_lang', lang);
    applyLanguage(lang);
  };

  const toggleLanguage = () => {
    const nextLang: Language = language === 'ar' ? 'en' : 'ar';
    setLanguage(nextLang);
  };

  const setTheme = (t: Theme) => {
    setThemeState(t);
    localStorage.setItem('site_theme', t);
    applyTheme(t);
  };

  const toggleTheme = () => {
    const nextTheme: Theme = theme === 'light' ? 'dark' : 'light';
    setTheme(nextTheme);
  };

  const t = (key: string): string => {
    const entry = translations[key];
    if (!entry) return key;
    return entry[language] || entry['ar'] || key;
  };

  return (
    <AppContext.Provider
      value={{
        language,
        theme,
        toggleLanguage,
        setLanguage,
        toggleTheme,
        setTheme,
        t,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export function useApp() {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
}


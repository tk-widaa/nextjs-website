"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
  // Mobile Menu State
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Calculators State
  const [hvacArea, setHvacArea] = useState<number | ''>('');
  const [hvacResult, setHvacResult] = useState<number | null>(null);

  const [fireArea, setFireArea] = useState<number | ''>('');
  const [fireResult, setFireResult] = useState<number | null>(null);

  // Contact Form State (تم حذف حقول الاسم ورقم الهاتف)
  const [clientService, setClientService] = useState('');
  const [clientDetails, setClientDetails] = useState('');
  const [sendMethod, setSendMethod] = useState<'whatsapp' | 'gmail'>('whatsapp');

  const calculateHvac = () => {
    if (hvacArea && typeof hvacArea === 'number') {
      setHvacResult(Number((hvacArea / 12).toFixed(1)));
    }
  };

  const calculateFireExtinguisher = () => {
    if (fireArea && typeof fireArea === 'number') {
      setFireResult(Math.ceil(fireArea / 200));
    }
  };

  const handleSubmitOrder = (e: React.FormEvent) => {
    e.preventDefault();

    // تجهيز نص الطلب جاهزاً بدون الحاجة للاسم ورقم الهاتف
    const message = `السلام عليكم، أود طلب خدمة هندسية:\n\n` +
      `⚙️ نوع الخدمة: ${clientService || 'غير محدد'}\n` +
      `📝 التفاصيل: ${clientDetails || 'لا توجد تفاصيل إضافية'}`;

    if (sendMethod === 'whatsapp') {
      const encodedMessage = encodeURIComponent(message);
      window.open(`https://wa.me/249116613320?text=${encodedMessage}`, '_blank');
    } else {
      const subject = encodeURIComponent(`طلب خدمة هندسية جديدة`);
      const body = encodeURIComponent(message);
      window.location.href = `mailto:hamzaelzain.eng@gmail.com?subject=${subject}&body=${body}`;
    }
  };

  return (
    <div className="w-full bg-background text-foreground font-sans">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 w-full p-4 md:px-10 flex justify-between items-center z-50 bg-white/95 backdrop-blur-sm shadow-soft border-b border-gray-100">
        <Link href="/" className="text-2xl font-bold text-primary transition-opacity hover:opacity-80">
          حمزة
        </Link>
        <div className="hidden md:flex gap-6 text-sm font-semibold text-gray-700">
          <Link href="#about" className="hover:text-primary transition-colors">من نحن</Link>
          <Link href="#services" className="hover:text-primary transition-colors">خدماتنا</Link>
          <Link href="#tools" className="hover:text-primary transition-colors">أدوات هندسية</Link>
          <Link href="#portfolio" className="hover:text-primary transition-colors">أعمالنا</Link>
          <Link href="#contact" className="hover:text-primary transition-colors">تواصل معنا</Link>
        </div>
        <a href="#contact" className="btn-primary text-sm hidden md:flex">
          اطلب خدمة
        </a>
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden text-primary font-bold p-2 focus:outline-none"
          aria-label="القائمة"
        >
          {isMenuOpen ? "إغلاق" : "القائمة"}
        </button>
      </nav>

      {/* Mobile Menu Overlay */}
      <div className={`fixed inset-0 z-40 bg-white transition-transform duration-300 ease-in-out transform ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'} md:hidden pt-24`}>
        <div className="flex flex-col items-center gap-8 text-xl font-bold text-gray-800">
          <Link href="#about" onClick={() => setIsMenuOpen(false)}>من نحن</Link>
          <Link href="#services" onClick={() => setIsMenuOpen(false)}>خدماتنا</Link>
          <Link href="#tools" onClick={() => setIsMenuOpen(false)}>أدوات هندسية</Link>
          <Link href="#portfolio" onClick={() => setIsMenuOpen(false)}>أعمالنا</Link>
          <Link href="#contact" onClick={() => setIsMenuOpen(false)}>تواصل معنا</Link>
          <a href="#contact" onClick={() => setIsMenuOpen(false)} className="btn-primary mt-4">اطلب خدمة</a>
        </div>
      </div>

      <main className="pt-24 md:pt-32">
        {/* Hero Section */}
        <section className="px-6 md:px-10 py-20 md:py-32 border-b border-gray-100 bg-white overflow-hidden relative min-h-[70vh] flex items-center">
          <div className="absolute md:hidden inset-0 z-0">
            <Image
              src="/paper.webp"
              alt="Background"
              fill
              className="object-cover opacity-60"
              sizes="100vw"
              priority
            />
          </div>

          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center relative z-10 w-full">
            <div className="fade-in-up">
              <h1 className="text-4xl md:text-6xl font-black text-foreground leading-[1.2] mb-6">
                حلول هندسية متكاملة لضمان <span className="text-primary">الكفاءة والجودة.</span>
              </h1>
              <p className="text-lg md:text-xl text-gray-700 mb-8 leading-relaxed max-w-xl">
                مؤسسة "حمزة" متخصصة في تقديم الحلول الهندسية المتكاملة في مجالات أنظمة المباني وخطوط الإنتاج. ننهض بمشاريعك بحلول مبتكرة وعملية.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="#contact" className="btn-primary text-lg px-8">
                  استشارة مجانية
                </Link>
                <Link href="#services" className="px-6 py-3 border-2 border-primary text-primary font-bold rounded-md hover:bg-primary/5 transition-colors text-lg inline-flex items-center justify-center">
                  تصفح خدماتنا
                </Link>
              </div>
            </div>

            <div className="hidden md:block relative h-[500px] w-full fade-in-up delay-200">
              <Image
                src="/paper.webp"
                alt="مخططات هندسية"
                fill
                className="object-cover rounded-2xl shadow-xl border border-gray-100"
                sizes="50vw"
                priority
              />
            </div>
          </div>
        </section>

        {/* About Us */}
        <section id="about" className="py-16 md:py-24 px-6 md:px-10 max-w-7xl mx-auto text-center">
          <h2 className="text-sm font-bold text-primary mb-2 uppercase tracking-widest">من نحن</h2>
          <h3 className="text-3xl md:text-4xl font-bold mb-8">نؤمن أن كل مشكلة هندسية لها حل ذكي</h3>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed mb-6">
            نحن فريق هندسي بقيادة مهندس ميكانيكي متخصص، نمتلك خبرة واسعة في أنظمة التكييف والتهوية (HVAC)، أنظمة مكافحة الحريق، الأنظمة الصحية، وأنظمة السلامة. مهمتنا هي الوصول للحل بأعلى كفاءة وأقل تكلفة.
          </p>
        </section>

        {/* Services */}
        <section id="services" className="py-16 md:py-24 bg-gray-50 border-y border-gray-100 px-6 md:px-10">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-sm font-bold text-primary mb-2 uppercase tracking-widest">خدماتنا</h2>
              <h3 className="text-3xl md:text-4xl font-bold">الحلول الهندسية الشاملة</h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Link href="/services/mep" className="bg-white p-8 card-hover shadow-soft border border-gray-100 flex flex-col group block">
                <div className="w-12 h-12 bg-accent text-primary rounded-lg flex items-center justify-center mb-6 text-2xl group-hover:scale-110 transition-transform">❄️</div>
                <h4 className="text-xl font-bold mb-4 flex items-center justify-between">
                  تصميم أنظمة MEP
                  <span className="text-primary opacity-0 group-hover:opacity-100 transition-opacity transform group-hover:-translate-x-2">←</span>
                </h4>
                <p className="text-gray-600 mb-4 flex-grow">تصميم أنظمة التكييف والتهوية (HVAC)، مكافحة الحريق (Firefighting)، الأنظمة الصحية، والسلامة.</p>
              </Link>

              <Link href="/services/production-lines" className="bg-white p-8 card-hover shadow-soft border border-gray-100 flex flex-col group block">
                <div className="w-12 h-12 bg-accent text-primary rounded-lg flex items-center justify-center mb-6 text-2xl group-hover:scale-110 transition-transform">⚙️</div>
                <h4 className="text-xl font-bold mb-4 flex items-center justify-between">
                  خطوط الإنتاج
                  <span className="text-primary opacity-0 group-hover:opacity-100 transition-opacity transform group-hover:-translate-x-2">←</span>
                </h4>
                <p className="text-gray-600 mb-4 flex-grow">تصميم وتطوير خطوط الإنتاج، تحليل الأعطال وإيجاد الحلول الجبرية لتحسين كفاءة التشغيل.</p>
              </Link>

              <Link href="/services/custom-parts" className="bg-white p-8 card-hover shadow-soft border border-gray-100 flex flex-col group block">
                <div className="w-12 h-12 bg-accent text-primary rounded-lg flex items-center justify-center mb-6 text-2xl group-hover:scale-110 transition-transform">🧩</div>
                <h4 className="text-xl font-bold mb-4 flex items-center justify-between">
                  تصميم أجزاء مخصصة
                  <span className="text-primary opacity-0 group-hover:opacity-100 transition-opacity transform group-hover:-translate-x-2">←</span>
                </h4>
                <p className="text-gray-600 mb-4 flex-grow">تصميم قطع ميكانيكية حسب الطلب وتعديل تصميمات قائمة لحل مشاكل فنية.</p>
              </Link>

              <Link href="/services/consulting" className="bg-white p-8 card-hover shadow-soft border border-gray-100 flex flex-col group block">
                <div className="w-12 h-12 bg-accent text-primary rounded-lg flex items-center justify-center mb-6 text-2xl group-hover:scale-110 transition-transform">🧠</div>
                <h4 className="text-xl font-bold mb-4 flex items-center justify-between">
                  الاستشارات الهندسية
                  <span className="text-primary opacity-0 group-hover:opacity-100 transition-opacity transform group-hover:-translate-x-2">←</span>
                </h4>
                <p className="text-gray-600 mb-4 flex-grow">مراجعة التصميمات بدقة، تقديم حلول فنية للمشاكل الهندسية ودعم المشاريع بالخبرات.</p>
              </Link>

              <Link href="/services/online-maintenance" className="bg-white p-8 card-hover shadow-soft border border-gray-100 flex flex-col group block">
                <div className="w-12 h-12 bg-accent text-primary rounded-lg flex items-center justify-center mb-6 text-2xl group-hover:scale-110 transition-transform">🛠️</div>
                <h4 className="text-xl font-bold mb-4 flex items-center justify-between">
                  الصيانة والتشغيل
                  <span className="text-primary opacity-0 group-hover:opacity-100 transition-opacity transform group-hover:-translate-x-2">←</span>
                </h4>
                <p className="text-gray-600 mb-4 flex-grow">تشخيص الأعطال المعقدة عن بعد، دعم فني مباشر فعال، ومتابعة تشغيل الأنظمة.</p>
              </Link>
            </div>
          </div>
        </section>

        {/* Interactive Tools */}
        <section id="tools" className="py-16 md:py-24 px-6 md:px-10 max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-sm font-bold text-primary mb-2 uppercase tracking-widest">أدوات هندسية</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-foreground">حاسبات سريعة لتقدير الأحمال</h3>
            <p className="text-gray-600 mt-4">استخدم هذه الأدوات كتقدير مبدئي قبل الاستشارة الهندسية.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {/* HVAC Calculator */}
            <div className="bg-white border border-gray-200 rounded-xl p-8 shadow-soft">
              <h4 className="text-2xl font-bold mb-2">حاسبة حمل التكييف التقديري</h4>
              <p className="text-sm text-gray-500 mb-6">احسب السعة التقريبية للمكيف المطلوبة بناءً على المساحة (يفترض ارتفاع قياسي).</p>
              <div className="flex flex-col gap-4">
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-1">المساحة (متر مربع):</label>
                  <input
                    type="number"
                    value={hvacArea}
                    onChange={(e) => setHvacArea(e.target.value === '' ? '' : Number(e.target.value))}
                    placeholder="مثال: 50"
                    className="w-full border border-gray-300 rounded px-4 py-2 focus:ring-2 focus:ring-primary focus:outline-none bg-white"
                  />
                </div>
                <button onClick={calculateHvac} className="btn-primary w-full mt-2">احسب السعة</button>
                {hvacResult !== null && (
                  <div className="mt-4 p-4 bg-accent text-primary rounded-md border border-primary/20 text-center text-lg">
                    السعة المطلوبة تقريباً: <span className="font-bold text-2xl mx-1">{hvacResult}</span> طن تبريد
                  </div>
                )}
              </div>
            </div>

            {/* Fire Extinguisher Calculator */}
            <div className="bg-white border border-gray-200 rounded-xl p-8 shadow-soft">
              <h4 className="text-2xl font-bold mb-2">حاسبة طفايات الحريق التقريبية</h4>
              <p className="text-sm text-gray-500 mb-6">احسب العدد التقريبي لطفايات الحريق اليدوية بناءً على المساحة.</p>
              <div className="flex flex-col gap-4">
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-1">المساحة الإجمالية للمكان (متر مربع):</label>
                  <input
                    type="number"
                    value={fireArea}
                    onChange={(e) => setFireArea(e.target.value === '' ? '' : Number(e.target.value))}
                    placeholder="مثال: 1000"
                    className="w-full border border-gray-300 rounded px-4 py-2 focus:ring-2 focus:ring-primary focus:outline-none bg-white"
                  />
                </div>
                <button onClick={calculateFireExtinguisher} className="btn-primary w-full mt-2">احسب العدد</button>
                {fireResult !== null && (
                  <div className="mt-4 p-4 bg-accent text-primary rounded-md border border-primary/20 text-center text-lg">
                    العدد التقديري: <span className="font-bold text-2xl mx-1">{fireResult}</span> طفايات حريق
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* Contact/Footer */}
        <section id="contact" className="py-20 bg-foreground text-white px-6 md:px-10">
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">لنتحدث حول مشروعك.</h2>
              <p className="text-gray-300 text-lg mb-8">
                سواء كنت تحتاج لتصميم أنظمة ذكية، حل مشكلة فنية، أو استشارة سريعة، فريقنا الهندسي جاهز لخدمتك.
              </p>
              <div className="flex flex-col gap-4">
                <a href="mailto:hamzaelzain.eng@gmail.com" className="text-xl font-bold flex items-center gap-3 hover:text-primary transition-colors">
                  ✉️ hamzaelzain.eng@gmail.com
                </a>
                <a href="https://wa.me/249116613320" target="_blank" rel="noopener noreferrer" className="text-green-400 text-xl font-bold flex items-center gap-3 hover:text-green-300 transition-colors">
                  📱 تواصل واتساب (+249 11 661 3320)
                </a>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white/10 p-8 rounded-xl backdrop-blur-sm border border-white/20">
              <h3 className="text-2xl font-bold mb-6">طلب خدمة</h3>
              <form onSubmit={handleSubmitOrder} className="flex flex-col gap-4 text-gray-800">
                <select
                  value={clientService}
                  onChange={(e) => setClientService(e.target.value)}
                  className="w-full bg-white border border-gray-500 rounded px-4 py-3 focus:outline-none focus:border-primary"
                >
                  <option value="">نوع الخدمة...</option>
                  <option value="تصميم أنظمة MEP">تصميم أنظمة MEP</option>
                  <option value="خطوط الإنتاج">خطوط الإنتاج</option>
                  <option value="تصميم أجزاء مخصصة">تصميم أجزاء مخصصة</option>
                  <option value="استشارة هندسية">استشارة هندسية</option>
                  <option value="الصيانة والتشغيل">الصيانة والتشغيل</option>
                </select>
                <textarea
                  placeholder="تفاصيل الطلب..."
                  rows={4}
                  value={clientDetails}
                  onChange={(e) => setClientDetails(e.target.value)}
                  className="w-full bg-white border border-gray-500 rounded px-4 py-3 focus:outline-none focus:border-primary"
                ></textarea>

                {/* اختيار وسيلة الإرسال */}
                <div className="flex flex-col gap-2 mt-2 bg-white/5 p-3 rounded border border-white/10 text-white">
                  <span className="text-sm font-semibold text-gray-200">اختر طريقة إرسال الطلب:</span>
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
                      واتساب
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
                      البريد الإلكتروني (Gmail)
                    </label>
                  </div>
                </div>

                <button type="submit" className="btn-primary mt-2 cursor-pointer">إرسال الطلب</button>
              </form>
            </div>
          </div>

          <div className="max-w-7xl mx-auto mt-20 pt-8 border-t border-gray-700 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-400">
            <span>&copy; {new Date().getFullYear()} مؤسسة حمزة للحلول الهندسية. جميع الحقوق محفوظة.</span>
          </div>
        </section>
      </main>
    </div>
  );
}

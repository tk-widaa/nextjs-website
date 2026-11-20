import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import ServiceNav from '../../components/ServiceNav';

export const metadata: Metadata = {
  title: 'معيار | تصنيع وتوريد قطع الغيار المخصصة',
  description: 'تصميم وتعديل القطع الميكانيكية المعقدة لتلائم احتياجاتك التشغيلية الخاصة.',
};

export default function CustomPartsService() {
  return (
    <div className="w-full bg-background text-foreground font-sans min-h-screen flex flex-col transition-colors duration-200">
      <ServiceNav />
      
      <main className="flex-grow">
        <header className="bg-blue-50/50 dark:bg-slate-900 py-16 px-6 text-center border-b border-gray-100 dark:border-slate-800">
          <h1 className="text-3xl md:text-5xl font-black mb-4 text-gray-900 dark:text-white">تصميم أجزاء مخصصة</h1>
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed">
            تصميم وتعديل القطع الميكانيكية المعقدة لتلائم احتياجاتك التشغيلية الخاصة.
          </p>
        </header>

        {/* Feature 1 */}
        <section className="flex flex-col md:flex-row gap-10 items-center py-20 px-6 max-w-7xl mx-auto border-b border-gray-100 dark:border-slate-800">
          <div className="w-full md:w-1/2">
            <h3 className="text-2xl md:text-3xl font-bold mb-6 border-r-4 border-primary pr-4 text-gray-900 dark:text-white">التصميم الميكانيكي 3D (CAD)</h3>
            <p className="text-base md:text-xl text-gray-700 dark:text-gray-300 leading-relaxed">
              نترجم التحديات الميكانيكية إلى نماذج ثلاثية الأبعاد تفصيلية ودقيقة. باستخدام أقوى برمجيات التصميم الهندسي (SolidWorks, AutoCAD)، نصل إلى الشكل الهندسي الأمثل للقطعة مع مراعاة كافة التفاوتات المسموحة (Tolerances) المطلوبة في بيئة العمل.
            </p>
          </div>
          <div className="w-full md:w-1/2 relative h-[360px] md:h-[480px] rounded-2xl overflow-hidden shadow-xl border border-gray-100 dark:border-slate-800">
            <Image src="/images/custom_parts/5978737632046943522.jpg" alt="3D Mechanical CAD" fill className="object-cover hover:scale-105 transition-transform duration-500" sizes="(max-width: 768px) 100vw, 50vw" />
          </div>
        </section>

        {/* Feature 2 */}
        <section className="flex flex-col md:flex-row-reverse gap-10 items-center py-20 px-6 max-w-7xl mx-auto border-b border-gray-100 dark:border-slate-800 bg-gray-50/50 dark:bg-slate-950/40">
          <div className="w-full md:w-1/2">
            <h3 className="text-2xl md:text-3xl font-bold mb-6 border-r-4 border-primary pr-4 text-gray-900 dark:text-white">التحليل الحركي والإجهادات (FEA)</h3>
            <p className="text-base md:text-xl text-gray-700 dark:text-gray-300 leading-relaxed">
              لا نكتفي بالشكل وحسب، بل نعرض القطع لاختبارات محاكاة حاسوبية قاسية قبل تصنيعها. نحسب الإجهادات الحرارية والتمزق والميكانيكا الحركية باستخدام أساليب العناصر المحدودة (Finite Element Analysis) لنضمن عدم حدوث انهيار تحت الضغط العالي.
            </p>
          </div>
          <div className="w-full md:w-1/2 relative h-[360px] md:h-[480px] rounded-2xl overflow-hidden shadow-xl border border-gray-100 dark:border-slate-800">
            <Image src="/images/custom_parts/5978737632046943523.jpg" alt="Finite Element Analysis" fill className="object-cover hover:scale-105 transition-transform duration-500" sizes="(max-width: 768px) 100vw, 50vw" />
          </div>
        </section>

        {/* Feature 3 */}
        <section className="flex flex-col md:flex-row gap-10 items-center py-20 px-6 max-w-7xl mx-auto border-b border-gray-100 dark:border-slate-800">
          <div className="w-full md:w-1/2">
            <h3 className="text-2xl md:text-3xl font-bold mb-6 border-r-4 border-primary pr-4 text-gray-900 dark:text-white">تصنيع القطع المعقدة (الهندسة العكسية)</h3>
            <p className="text-base md:text-xl text-gray-700 dark:text-gray-300 leading-relaxed">
              عند تلف قطعة غيار نادرة ومكلفة جداً، نتدخل لإنقاذ الموقف عبر استخراج القياسات والأبعاد منها بدقة (Reverse Engineering). نعيد إنتاج رسومات هندسية قابلة للتنفيذ الفوري لتصنيع القطعة البديلة بمواد أقوى وعمر افتراضي أطول محلياً.
            </p>
          </div>
          <div className="w-full md:w-1/2 relative h-[360px] md:h-[480px] rounded-2xl overflow-hidden shadow-xl border border-gray-100 dark:border-slate-800">
            <Image src="/images/custom_parts/5978737632046943524.jpg" alt="Reverse Engineering" fill className="object-cover hover:scale-105 transition-transform duration-500" sizes="(max-width: 768px) 100vw, 50vw" />
          </div>
        </section>

        {/* Feature 4 */}
        <section className="flex flex-col md:flex-row-reverse gap-10 items-center py-20 px-6 max-w-7xl mx-auto border-b border-gray-100 dark:border-slate-800 bg-gray-50/50 dark:bg-slate-950/40">
          <div className="w-full md:w-1/2">
            <h3 className="text-2xl md:text-3xl font-bold mb-6 border-r-4 border-primary pr-4 text-gray-900 dark:text-white">اختيار المواد وتوافق التصنيع (DFM)</h3>
            <p className="text-base md:text-xl text-gray-700 dark:text-gray-300 leading-relaxed">
              لكل بيئة صناعية متطلبات خاصة من صلابة ومقاومة للتآكل. نوجهك لاختيار المعادن والسبائك المثالية لقطعتك (Stainless Steel, Aluminum, Polymers)، مع مراعاة ملاءمة التصميم لعمليات التشغيل الميكانيكي (CNC Machining) لتقليل تكلفة الإنتاج.
            </p>
          </div>
          <div className="w-full md:w-1/2 relative h-[360px] md:h-[480px] rounded-2xl overflow-hidden shadow-xl border border-gray-100 dark:border-slate-800">
            <Image src="/images/custom_parts/5978737632046943525.jpg" alt="Design for Manufacturing" fill className="object-cover hover:scale-105 transition-transform duration-500" sizes="(max-width: 768px) 100vw, 50vw" />
          </div>
        </section>

        <div className="text-center py-20 bg-white dark:bg-slate-900">
          <Link href="/#contact" className="btn-primary text-lg md:text-xl px-10 py-4 shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all inline-block">
            اطلب تصنيع قطعتك
          </Link>
          <Link href="/#services" className="block mt-6 text-primary font-bold hover:underline transition-all">
            العودة لقائمة الخدمات ←
          </Link>
        </div>
      </main>
    </div>
  );
}

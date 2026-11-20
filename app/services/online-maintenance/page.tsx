import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import ServiceNav from '../../components/ServiceNav';

export const metadata: Metadata = {
  title: 'الصيانة والتشخيص الهندسي عن بعد | معيار',
  description: 'تشخيص الأعطال الميكانيكية المعقدة عن بعد ودعم فني هندسي مستمر لحماية استثماراتك.',
  openGraph: {
    title: 'الصيانة والتشخيص الهندسي عن بعد | معيار',
    description: 'تشخيص الأعطال الميكانيكية المعقدة عن بعد ودعم فني هندسي مستمر لحماية استثماراتك.',
    images: [{ url: '/og-image.jpg', width: 800, height: 800, alt: 'الصيانة والتشخيص الهندسي عن بعد | معيار' }],
  },
};

export default function OnlineMaintenanceService() {
  return (
    <div className="w-full bg-background text-foreground font-sans min-h-screen flex flex-col transition-colors duration-200">
      <ServiceNav />
      
      <main className="flex-grow">
        <header className="bg-blue-50/50 dark:bg-slate-900 py-16 px-6 text-center border-b border-gray-100 dark:border-slate-800">
          <h1 className="text-3xl md:text-5xl font-black mb-4 text-gray-900 dark:text-white">الصيانة والتشغيل</h1>
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed">
            تشخيص الأعطال المعقدة عن بعد ودعم فني هندسي مستمر لحماية استثماراتك.
          </p>
        </header>

        {/* Feature 1 */}
        <section className="flex flex-col md:flex-row gap-10 items-center py-20 px-6 max-w-7xl mx-auto border-b border-gray-100 dark:border-slate-800">
          <div className="w-full md:w-1/2">
            <h3 className="text-2xl md:text-3xl font-bold mb-6 border-r-4 border-primary pr-4 text-gray-900 dark:text-white">المراقبة والتشخيص الذكي عن بعد (IoT)</h3>
            <p className="text-base md:text-xl text-gray-700 dark:text-gray-300 leading-relaxed">
              تدارك الأعطال قبل وقوعها هو جوهر الصيانة الحديثة. عبر ربط أنظمتك ومعداتك بمستشعرات ذكية (IoT)، نستقبل قراءات درجات الحرارة والاهتزازات وسرعة المحركات بشكل لحظي لنحللها هندسياً ونوجه فرق الصيانة لديك بالخطوات الدقيقة.
            </p>
          </div>
          <div className="w-full md:w-1/2 relative h-[360px] md:h-[480px] rounded-2xl overflow-hidden shadow-xl border border-gray-100 dark:border-slate-800">
            <Image src="/images/maintenance_and_operation/5978737632046943526.jpg" alt="Remote Monitoring IoT" fill className="object-cover hover:scale-105 transition-transform duration-500" sizes="(max-width: 768px) 100vw, 50vw" />
          </div>
        </section>

        {/* Feature 2 */}
        <section className="flex flex-col md:flex-row-reverse gap-10 items-center py-20 px-6 max-w-7xl mx-auto border-b border-gray-100 dark:border-slate-800 bg-gray-50/50 dark:bg-slate-950/40">
          <div className="w-full md:w-1/2">
            <h3 className="text-2xl md:text-3xl font-bold mb-6 border-r-4 border-primary pr-4 text-gray-900 dark:text-white">خطط الصيانة الوقائية والتنبؤية (PdM)</h3>
            <p className="text-base md:text-xl text-gray-700 dark:text-gray-300 leading-relaxed">
              التوقف المفاجئ يعني خسائر فادحة. نضع لك جداول صيانة وقائية مبرمجة ومبنية على ساعات التشغيل الفعلية وتوصيات المصنع، تضمن استبدال القطع المستهلكة في وقتها المناسب وإجراء عمليات التشحيم والمعايرة بدقة متناهية.
            </p>
          </div>
          <div className="w-full md:w-1/2 relative h-[360px] md:h-[480px] rounded-2xl overflow-hidden shadow-xl border border-gray-100 dark:border-slate-800">
            <Image src="/images/maintenance_and_operation/5978737632046943527.jpg" alt="Predictive Maintenance" fill className="object-cover hover:scale-105 transition-transform duration-500" sizes="(max-width: 768px) 100vw, 50vw" />
          </div>
        </section>

        {/* Feature 3 */}
        <section className="flex flex-col md:flex-row gap-10 items-center py-20 px-6 max-w-7xl mx-auto border-b border-gray-100 dark:border-slate-800">
          <div className="w-full md:w-1/2">
            <h3 className="text-2xl md:text-3xl font-bold mb-6 border-r-4 border-primary pr-4 text-gray-900 dark:text-white">الدعم الفني المباشر لحالات الطوارئ</h3>
            <p className="text-base md:text-xl text-gray-700 dark:text-gray-300 leading-relaxed">
              عند حدوث عطل معقد يوقف العمل، يكون خبراؤنا متاحين عبر جلسات اتصال فيديو واتصال مباشر لدراسة المؤشرات والرموز الصادرة عن لوحات التحكم وإرشاد الفريق الميداني خطوة بخطوة حتى إعادة النظام إلى الخدمة بأمان.
            </p>
          </div>
          <div className="w-full md:w-1/2 relative h-[360px] md:h-[480px] rounded-2xl overflow-hidden shadow-xl border border-gray-100 dark:border-slate-800">
            <Image src="/images/maintenance_and_operation/5978737632046943528.jpg" alt="Direct Support" fill className="object-cover hover:scale-105 transition-transform duration-500" sizes="(max-width: 768px) 100vw, 50vw" />
          </div>
        </section>

        {/* Feature 4 */}
        <section className="flex flex-col md:flex-row-reverse gap-10 items-center py-20 px-6 max-w-7xl mx-auto border-b border-gray-100 dark:border-slate-800 bg-gray-50/50 dark:bg-slate-950/40">
          <div className="w-full md:w-1/2">
            <h3 className="text-2xl md:text-3xl font-bold mb-6 border-r-4 border-primary pr-4 text-gray-900 dark:text-white">تحليل أسباب الانهيار الجذري (RCA)</h3>
            <p className="text-base md:text-xl text-gray-700 dark:text-gray-300 leading-relaxed">
              إصلاح العطل السطحي لا يمنع تكراره. نجري تحقيقات هندسية معمقة لتحديد السبب الجذري لانهيار المكونات (Root Cause Analysis)، ونقدم توصيات هندسية وتعديلات تشغيلية تضمن استئصال المشكلة نهائياً ومنع تكرارها مستقبلاً.
            </p>
          </div>
          <div className="w-full md:w-1/2 relative h-[360px] md:h-[480px] rounded-2xl overflow-hidden shadow-xl border border-gray-100 dark:border-slate-800">
            <Image src="/images/maintenance_and_operation/5978737632046943529.jpg" alt="Root Cause Analysis" fill className="object-cover hover:scale-105 transition-transform duration-500" sizes="(max-width: 768px) 100vw, 50vw" />
          </div>
        </section>

        <div className="text-center py-20 bg-white dark:bg-slate-900">
          <Link href="/#contact" className="btn-primary text-lg md:text-xl px-10 py-4 shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all inline-block">
            اطلب دعم الصيانة الآن
          </Link>
          <Link href="/#services" className="block mt-6 text-primary font-bold hover:underline transition-all">
            العودة لقائمة الخدمات ←
          </Link>
        </div>
      </main>
    </div>
  );
}

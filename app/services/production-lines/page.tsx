import Link from 'next/link';
import Image from 'next/image';
import ServiceNav from '../../components/ServiceNav';

export default function ProductionLinesService() {
  return (
    <div className="w-full bg-background text-foreground font-sans min-h-screen flex flex-col transition-colors duration-200">
      <ServiceNav />
      
      <main className="flex-grow">
        <header className="bg-blue-50/50 dark:bg-slate-900 py-16 px-6 text-center border-b border-gray-100 dark:border-slate-800">
          <h1 className="text-3xl md:text-5xl font-black mb-4 text-gray-900 dark:text-white">خطوط الإنتاج</h1>
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed">
            تحليل وتطوير خطوط الإنتاج التصنيعية لرفع الجودة وتحسين كفاءة التشغيل.
          </p>
        </header>

        {/* Feature 1 */}
        <section className="flex flex-col md:flex-row gap-10 items-center py-20 px-6 max-w-7xl mx-auto border-b border-gray-100 dark:border-slate-800">
          <div className="w-full md:w-1/2">
            <h3 className="text-2xl md:text-3xl font-bold mb-6 border-r-4 border-primary pr-4 text-gray-900 dark:text-white">تصميم وبناء خطوط ذكية</h3>
            <p className="text-base md:text-xl text-gray-700 dark:text-gray-300 leading-relaxed">
              نبدأ معك من الصفر لترجمة أفكارك الصناعية إلى خطوط إنتاج فعلية تعمل بتزامن مثالي. نقوم باختيار الآلات، وحساب الطاقات الإنتاجية، وضبط الإيقاع (Takt Time) لضمان تسلسل سلس بين مراحل التصنيع المختلفة وبدون أي عنق زجاجة.
            </p>
          </div>
          <div className="w-full md:w-1/2 relative h-[360px] md:h-[480px] rounded-2xl overflow-hidden shadow-xl border border-gray-100 dark:border-slate-800">
            <Image src="/images/production_lines/5978737632046943518.jpg" alt="Production Setup" fill className="object-cover hover:scale-105 transition-transform duration-500" sizes="(max-width: 768px) 100vw, 50vw" />
          </div>
        </section>

        {/* Feature 2 */}
        <section className="flex flex-col md:flex-row-reverse gap-10 items-center py-20 px-6 max-w-7xl mx-auto border-b border-gray-100 dark:border-slate-800 bg-gray-50/50 dark:bg-slate-950/40">
          <div className="w-full md:w-1/2">
            <h3 className="text-2xl md:text-3xl font-bold mb-6 border-r-4 border-primary pr-4 text-gray-900 dark:text-white">الروبوتات والتحكم الآلي</h3>
            <p className="text-base md:text-xl text-gray-700 dark:text-gray-300 leading-relaxed">
              أتمتة العمليات (Automation) أصبحت ضرورة للبقاء في المنافسة. نطور حلول تحكم ذكية وبرمجة حركية للروبوتات، ليتم تقليل التدخل البشري في المهام الخطرة والمتكررة، مما ينعكس على سلامة العمال ودقة المنتج النهائي بشكل كبير.
            </p>
          </div>
          <div className="w-full md:w-1/2 relative h-[360px] md:h-[480px] rounded-2xl overflow-hidden shadow-xl border border-gray-100 dark:border-slate-800">
            <Image src="/images/production_lines/5978737632046943519.jpg" alt="Robotics and Automation" fill className="object-cover hover:scale-105 transition-transform duration-500" sizes="(max-width: 768px) 100vw, 50vw" />
          </div>
        </section>

        {/* Feature 3 */}
        <section className="flex flex-col md:flex-row gap-10 items-center py-20 px-6 max-w-7xl mx-auto border-b border-gray-100 dark:border-slate-800">
          <div className="w-full md:w-1/2">
            <h3 className="text-2xl md:text-3xl font-bold mb-6 border-r-4 border-primary pr-4 text-gray-900 dark:text-white">تحليل وتقليل الفواقد (Lean)</h3>
            <p className="text-base md:text-xl text-gray-700 dark:text-gray-300 leading-relaxed">
              نطبق مبادئ التصنيع الرشيق (Lean Manufacturing) لاكتشاف الهدر المخفي في الوقت، الطاقة، أو المواد الخام. من خلال خوارزميات حسابية وأدوات إحصائية، نُعيد توازن الخط لنصل بك إلى تصنيع مرن يستجيب لطلبات السوق فوراً.
            </p>
          </div>
          <div className="w-full md:w-1/2 relative h-[360px] md:h-[480px] rounded-2xl overflow-hidden shadow-xl border border-gray-100 dark:border-slate-800">
            <Image src="/images/production_lines/5978737632046943520.jpg" alt="Lean Manufacturing" fill className="object-cover hover:scale-105 transition-transform duration-500" sizes="(max-width: 768px) 100vw, 50vw" />
          </div>
        </section>

        {/* Feature 4 */}
        <section className="flex flex-col md:flex-row-reverse gap-10 items-center py-20 px-6 max-w-7xl mx-auto border-b border-gray-100 dark:border-slate-800 bg-gray-50/50 dark:bg-slate-950/40">
          <div className="w-full md:w-1/2">
            <h3 className="text-2xl md:text-3xl font-bold mb-6 border-r-4 border-primary pr-4 text-gray-900 dark:text-white">السلامة والتوافق مع المعايير الدولية</h3>
            <p className="text-base md:text-xl text-gray-700 dark:text-gray-300 leading-relaxed">
              بيئة التصنيع الآمنة أساس الاستدامة. نزود خطوط الإنتاج بكافة وسائل الحماية والمستشعرات الضوئية وأزرار التوقف الطارئ (E-Stop)، مع تصميم متوافق مع معايير السلامة المهنية (OSHA, CE).
            </p>
          </div>
          <div className="w-full md:w-1/2 relative h-[360px] md:h-[480px] rounded-2xl overflow-hidden shadow-xl border border-gray-100 dark:border-slate-800">
            <Image src="/images/production_lines/5978737632046943521.jpg" alt="Industrial Safety" fill className="object-cover hover:scale-105 transition-transform duration-500" sizes="(max-width: 768px) 100vw, 50vw" />
          </div>
        </section>

        <div className="text-center py-20 bg-white dark:bg-slate-900">
          <Link href="/#contact" className="btn-primary text-lg md:text-xl px-10 py-4 shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all inline-block">
            طور خط إنتاجك معنا
          </Link>
          <Link href="/#services" className="block mt-6 text-primary font-bold hover:underline transition-all">
            العودة لقائمة الخدمات ←
          </Link>
        </div>
      </main>
    </div>
  );
}

import Link from 'next/link';
import Image from 'next/image';
import ServiceNav from '../../components/ServiceNav';

export default function ConsultingService() {
  return (
    <div className="w-full bg-background text-foreground font-sans min-h-screen flex flex-col transition-colors duration-200">
      <ServiceNav />
      
      <main className="flex-grow">
        <header className="bg-blue-50/50 dark:bg-slate-900 py-16 px-6 text-center border-b border-gray-100 dark:border-slate-800">
          <h1 className="text-3xl md:text-5xl font-black mb-4 text-gray-900 dark:text-white">الاستشارات الهندسية</h1>
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed">
            خبرات ميكانيكية احترافية تضع مشروعك على طريق النجاح من اليوم الأول.
          </p>
        </header>

        {/* Feature 1 */}
        <section className="flex flex-col md:flex-row gap-10 items-center py-20 px-6 max-w-7xl mx-auto border-b border-gray-100 dark:border-slate-800">
          <div className="w-full md:w-1/2">
            <h3 className="text-2xl md:text-3xl font-bold mb-6 border-r-4 border-primary pr-4 text-gray-900 dark:text-white">المراجعة والتدقيق الفني للمخططات</h3>
            <p className="text-base md:text-xl text-gray-700 dark:text-gray-300 leading-relaxed">
              تدارك الأخطاء على الورق يوفر آلاف الدولارات في موقع العمل. يقوم خبراؤنا بالتدقيق المعمق في الرسومات الهندسية، وحسابات الأحمال، ومخططات التنفيذ لضمان خلوها من أي تعارض ميكانيكي وكهربي ولمطابقتها مع الأكواد القياسية.
            </p>
          </div>
          <div className="w-full md:w-1/2 relative h-[360px] md:h-[480px] rounded-2xl overflow-hidden shadow-xl border border-gray-100 dark:border-slate-800">
            <Image src="/images/engineering_consultancy/5978737632046943530.jpg" alt="Technical Review" fill className="object-cover hover:scale-105 transition-transform duration-500" sizes="(max-width: 768px) 100vw, 50vw" />
          </div>
        </section>

        {/* Feature 2 */}
        <section className="flex flex-col md:flex-row-reverse gap-10 items-center py-20 px-6 max-w-7xl mx-auto border-b border-gray-100 dark:border-slate-800 bg-gray-50/50 dark:bg-slate-950/40">
          <div className="w-full md:w-1/2">
            <h3 className="text-2xl md:text-3xl font-bold mb-6 border-r-4 border-primary pr-4 text-gray-900 dark:text-white">الإشراف على مشاريع البنية التحتية</h3>
            <p className="text-base md:text-xl text-gray-700 dark:text-gray-300 leading-relaxed">
              الجودة ليست مجرد توصيات بل متابعة يومية بالموقع. نقدم إشرافاً دقيقاً على مقاولي التنفيذ للتأكد من استخدام المواد المحددة سلفاً في كراسة الشروط وتركيبها بأسلوب هندسي صحيح يضمن الأمان وطول عمر النظام في المشاريع الحساسة.
            </p>
          </div>
          <div className="w-full md:w-1/2 relative h-[360px] md:h-[480px] rounded-2xl overflow-hidden shadow-xl border border-gray-100 dark:border-slate-800">
            <Image src="/images/engineering_consultancy/5978737632046943531.jpg" alt="Project Supervision" fill className="object-cover hover:scale-105 transition-transform duration-500" sizes="(max-width: 768px) 100vw, 50vw" />
          </div>
        </section>

        {/* Feature 3 */}
        <section className="flex flex-col md:flex-row gap-10 items-center py-20 px-6 max-w-7xl mx-auto border-b border-gray-100 dark:border-slate-800">
          <div className="w-full md:w-1/2">
            <h3 className="text-2xl md:text-3xl font-bold mb-6 border-r-4 border-primary pr-4 text-gray-900 dark:text-white">دراسات الجدوى الفنية وتقييم المخاطر</h3>
            <p className="text-base md:text-xl text-gray-700 dark:text-gray-300 leading-relaxed">
              قبل ضخ استثمارات رأسمالية كبيرة في إضاءة منشأة، خط إنتاج، أو تكنولوجيا صناعية مستجدة، نقدم دراسة جدوى فنية عميقة. نحلل قدرات المعدات مقارنة باحتياجات السوق الحقيقية ونلخص لك دراسة العائد التقني على المدى الطويل (ROI).
            </p>
          </div>
          <div className="w-full md:w-1/2 relative h-[360px] md:h-[480px] rounded-2xl overflow-hidden shadow-xl border border-gray-100 dark:border-slate-800">
            <Image src="/images/engineering_consultancy/5978737632046943532.jpg" alt="Feasibility Studies" fill className="object-cover hover:scale-105 transition-transform duration-500" sizes="(max-width: 768px) 100vw, 50vw" />
          </div>
        </section>

        {/* Feature 4 */}
        <section className="flex flex-col md:flex-row-reverse gap-10 items-center py-20 px-6 max-w-7xl mx-auto border-b border-gray-100 dark:border-slate-800 bg-gray-50/50 dark:bg-slate-950/40">
          <div className="w-full md:w-1/2">
            <h3 className="text-2xl md:text-3xl font-bold mb-6 border-r-4 border-primary pr-4 text-gray-900 dark:text-white">هندسة القيمة لخفض التكاليف (Value Engineering)</h3>
            <p className="text-base md:text-xl text-gray-700 dark:text-gray-300 leading-relaxed">
              نعيد تقييم التصميمات لتحقيق نفس الأهداف الوظيفية والجمالية والجودة ولكن بتكلفة أقل. عن طريق استبدال المواد الباهظة أو الاستغناء عن الأجزاء التي لا تقدم فائدة حقيقية للمستخدم النهائي، نوفر ميزانيات ضخمة لعملائنا.
            </p>
          </div>
          <div className="w-full md:w-1/2 relative h-[360px] md:h-[480px] rounded-2xl overflow-hidden shadow-xl border border-gray-100 dark:border-slate-800">
            <Image src="/images/engineering_consultancy/5978737632046943533.jpg" alt="Value Engineering" fill className="object-cover hover:scale-105 transition-transform duration-500" sizes="(max-width: 768px) 100vw, 50vw" />
          </div>
        </section>

        <div className="text-center py-20 bg-white dark:bg-slate-900">
          <Link href="/#contact" className="btn-primary text-lg md:text-xl px-10 py-4 shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all inline-block">
            احجز موعد استشارة
          </Link>
          <Link href="/#services" className="block mt-6 text-primary font-bold hover:underline transition-all">
            العودة لقائمة الخدمات ←
          </Link>
        </div>
      </main>
    </div>
  );
}

import Link from 'next/link';
import Image from 'next/image';
import ServiceNav from '../../components/ServiceNav';

export default function MEPService() {
  return (
    <div className="w-full bg-background text-foreground font-sans min-h-screen flex flex-col transition-colors duration-200">
      <ServiceNav />
      
      <main className="flex-grow">
        <header className="bg-blue-50/50 dark:bg-slate-900 py-16 px-6 text-center border-b border-gray-100 dark:border-slate-800">
          <h1 className="text-3xl md:text-5xl font-black mb-4 text-gray-900 dark:text-white">تصميم أنظمة MEP</h1>
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed">
            حلول هندسية متكاملة لضمان كفاءة أنظمة المباني من تكييف ومكافحة حريق وصرف صحي.
          </p>
        </header>

        {/* Feature 1 */}
        <section className="flex flex-col md:flex-row gap-10 items-center py-20 px-6 max-w-7xl mx-auto border-b border-gray-100 dark:border-slate-800">
          <div className="w-full md:w-1/2">
            <h3 className="text-2xl md:text-3xl font-bold mb-6 border-r-4 border-primary pr-4 text-gray-900 dark:text-white">أنظمة التكييف والتهوية (HVAC)</h3>
            <p className="text-base md:text-xl text-gray-700 dark:text-gray-300 leading-relaxed">
              نقوم بتصميم أنظمة تكييف هواء حديثة توفر أقصى سبل الراحة بأعلى كفاءة في استهلاك الطاقة. سواء كانت مساحات تجارية ضخمة أو مجمعات صناعية، نضمن لك تدفق هواء نقي وحرارة مثالية في جميع الأوقات باستخدام أرقى المعايير الهندسية (ASHRAE).
            </p>
          </div>
          <div className="w-full md:w-1/2 relative h-[360px] md:h-[480px] rounded-2xl overflow-hidden shadow-xl border border-gray-100 dark:border-slate-800">
            <Image src="/images/mep/5978737632046943510.jpg" alt="HVAC Systems" fill className="object-cover hover:scale-105 transition-transform duration-500" sizes="(max-width: 768px) 100vw, 50vw" />
          </div>
        </section>

        {/* Feature 2 */}
        <section className="flex flex-col md:flex-row-reverse gap-10 items-center py-20 px-6 max-w-7xl mx-auto border-b border-gray-100 dark:border-slate-800 bg-gray-50/50 dark:bg-slate-950/40">
          <div className="w-full md:w-1/2">
            <h3 className="text-2xl md:text-3xl font-bold mb-6 border-r-4 border-primary pr-4 text-gray-900 dark:text-white">هندسة الحماية من الحرائق والسلامة</h3>
            <p className="text-base md:text-xl text-gray-700 dark:text-gray-300 leading-relaxed">
              في مجالات الحماية والسلامة، لا يوجد مجال للارتجال. نحن نصمم وننفذ منظومات متكاملة لمكافحة الحريق والإنذار المبكر، تخضع لمعايير هندسية صارمة وكودات عالمية (NFPA). هدفنا ليس فقط تلبية اشتراطات الدفاع المدني، بل إخضاع المخاطر لسيطرة تامة، لضمان حماية أرواحكم وممتلكاتكم بأعلى درجات الدقة والجاهزية.
            </p>
          </div>
          
          <div className="w-full md:w-1/2 grid grid-cols-2 gap-4">
            <div className="relative h-[280px] md:h-[380px] rounded-2xl overflow-hidden shadow-lg border border-gray-200 dark:border-slate-800 group">
              <Image 
                src="/images/mep/5978737632046943511.jpg" 
                alt="Firefighting Systems Main" 
                fill 
                className="object-cover group-hover:scale-105 transition-transform duration-500" 
                sizes="(max-width: 768px) 50vw, 25vw" 
              />
            </div>
            <div className="relative h-[280px] md:h-[380px] rounded-2xl overflow-hidden shadow-lg border border-gray-200 dark:border-slate-800 group mt-6 md:mt-10">
              <Image 
                src="/images/mep/IMG_20261118_103644_722.jpg" 
                alt="Firefighting Systems Detail" 
                fill 
                className="object-cover group-hover:scale-105 transition-transform duration-500" 
                sizes="(max-width: 768px) 50vw, 25vw" 
              />
            </div>
          </div>
        </section>

        {/* Feature 3 */}
        <section className="flex flex-col md:flex-row gap-10 items-center py-20 px-6 max-w-7xl mx-auto border-b border-gray-100 dark:border-slate-800">
          <div className="w-full md:w-1/2">
            <h3 className="text-2xl md:text-3xl font-bold mb-6 border-r-4 border-primary pr-4 text-gray-900 dark:text-white">الأنظمة الصحية وتمديدات المياه</h3>
            <p className="text-base md:text-xl text-gray-700 dark:text-gray-300 leading-relaxed">
              تصميم هندسي دقيق لشبكات المياه والصرف الصحي (Plumbing) يضمن عدم حدوث أي اختناقات أو تسريبات مستقبلية. نركز على استدامة المياه وتوزيعها الأمثل في المباني السكنية والتجارية والمستشفيات، مع تصميم محطات ضخ قادرة على تلبية أي أحمال.
            </p>
          </div>
          <div className="w-full md:w-1/2 relative h-[360px] md:h-[480px] rounded-2xl overflow-hidden shadow-xl border border-gray-100 dark:border-slate-800">
            <Image src="/images/mep/5978737632046943512.jpg" alt="Plumbing Systems" fill className="object-cover hover:scale-105 transition-transform duration-500" sizes="(max-width: 768px) 100vw, 50vw" />
          </div>
        </section>

        {/* Feature 4 */}
        <section className="flex flex-col md:flex-row-reverse gap-10 items-center py-20 px-6 max-w-7xl mx-auto border-b border-gray-100 dark:border-slate-800 bg-gray-50/50 dark:bg-slate-950/40">
          <div className="w-full md:w-1/2">
            <h3 className="text-2xl md:text-3xl font-bold mb-6 border-r-4 border-primary pr-4 text-gray-900 dark:text-white">حلول كفاءة الطاقة في المباني</h3>
            <p className="text-base md:text-xl text-gray-700 dark:text-gray-300 leading-relaxed">
              نهتم بتقاطع الميكانيكا مع الكهرباء والأنظمة الذكية (BMS) لنصل بمشروعك إلى أعلى مستويات كفاءة استهلاك الموارد. تساعد أنظمتنا على خفض التكاليف التشغيلية للمبنى بشكل ملحوظ مع مراعاة المعايير البيئية وشهادات المباني الخضراء.
            </p>
          </div>
          <div className="w-full md:w-1/2 relative h-[360px] md:h-[480px] rounded-2xl overflow-hidden shadow-xl border border-gray-100 dark:border-slate-800">
            <Image src="/images/mep/5978737632046943513.jpg" alt="Energy Efficiency" fill className="object-cover hover:scale-105 transition-transform duration-500" sizes="(max-width: 768px) 100vw, 50vw" />
          </div>
        </section>

        <div className="text-center py-20 bg-white dark:bg-slate-900">
          <Link href="/#contact" className="btn-primary text-lg md:text-xl px-10 py-4 shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all inline-block">
            اطلب هذه الخدمة الآن
          </Link>
          <Link href="/#services" className="block mt-6 text-primary font-bold hover:underline transition-all">
            العودة لقائمة الخدمات ←
          </Link>
        </div>
      </main>
    </div>
  );
}

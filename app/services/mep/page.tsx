import Link from 'next/link';
import Image from 'next/image';

export default function MEPService() {
  return (
    <div className="w-full bg-background text-foreground font-sans min-h-screen flex flex-col">
      <nav className="p-4 md:px-10 border-b border-gray-100 bg-white/95 sticky top-0 z-50 shadow-sm">
        <Link href="/" className="text-2xl font-bold text-primary">حمزة</Link>
      </nav>
      
      <main className="flex-grow">
        <header className="bg-accent/30 py-16 px-6 text-center border-b border-gray-100">
            <h1 className="text-4xl md:text-5xl font-black mb-4">تصميم أنظمة MEP</h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
              حلول هندسية متكاملة لضمان كفاءة أنظمة المباني من تكييف ومكافحة حريق وصرف صحي.
            </p>
        </header>

        {/* Feature 1 */}
        <section className="flex flex-col md:flex-row gap-10 items-center py-20 px-6 max-w-7xl mx-auto border-b border-gray-100">
           <div className="w-full md:w-1/2">
             <h3 className="text-3xl font-bold mb-6 border-r-4 border-primary pr-4">أنظمة التكييف والتهوية (HVAC)</h3>
             <p className="text-xl text-gray-700 leading-relaxed">
               نقوم بتصميم أنظمة تكييف هواء حديثة توفر أقصى سبل الراحة بأعلى كفاءة في استهلاك الطاقة. سواء كانت مساحات تجارية ضخمة أو مجمعات صناعية، نضمن لك تدفق هواء نقي وحرارة مثالية في جميع الأوقات باستخدام أرقى المعايير الهندسية (ASHRAE).
             </p>
           </div>
           <div className="w-full md:w-1/2 relative h-[400px] md:h-[500px] rounded-2xl overflow-hidden shadow-xl border border-gray-100">
             <Image src="/images/mep/5978737632046943510.jpg" alt="HVAC Systems" fill className="object-cover hover:scale-105 transition-transform duration-500" sizes="(max-width: 768px) 100vw, 50vw" />
           </div>
        </section>

        {/* Feature 2: Reversed */}
        <section className="flex flex-col md:flex-row-reverse gap-10 items-center py-20 px-6 max-w-7xl mx-auto border-b border-gray-100 bg-gray-50/50">
           <div className="w-full md:w-1/2">
             <h3 className="text-3xl font-bold mb-6 border-r-4 border-primary pr-4">هندسة الحماية من الحرائق.. دقة التنفيذ، وهيبة الالتزام.</h3>
             <p className="text-xl text-gray-700 leading-relaxed">
               حماية الأرواح والممتلكات هي الأولوية القصوى. نصمم شبكات حريق متكاملة (رشاشات، صناديق حريق، وأنظمة غازية) متطابقة مع كود NFPA وكود الدفاع المدني لضمان الجاهزية التامة في حالات الطوارئ والسيطرة السريعة على أي خطر.
             </p>
           </div>
           <div className="w-full md:w-1/2 relative h-[400px] md:h-[500px] rounded-2xl overflow-hidden shadow-xl border border-gray-100">
             <Image src="/images/mep/5978737632046943511.jpg" alt="Firefighting Systems" fill className="object-cover hover:scale-105 transition-transform duration-500" sizes="(max-width: 768px) 100vw, 50vw" />
           </div>
        </section>

        {/* Feature 3 */}
        <section className="flex flex-col md:flex-row gap-10 items-center py-20 px-6 max-w-7xl mx-auto border-b border-gray-100">
           <div className="w-full md:w-1/2">
             <h3 className="text-3xl font-bold mb-6 border-r-4 border-primary pr-4">الأنظمة الصحية وتمديدات المياه</h3>
             <p className="text-xl text-gray-700 leading-relaxed">
               تصميم هندسي دقيق لشبكات المياه والصرف الصحي (Plumbing) يضمن عدم حدوث أي اختناقات أو تسريبات مستقبلية. نركز على استدامة المياه وتوزيعها الأمثل في المباني السكنية والتجارية والمستشفيات، مع تصميم محطات ضخ قادرة على تلبية أي أحمال.
             </p>
           </div>
           <div className="w-full md:w-1/2 relative h-[400px] md:h-[500px] rounded-2xl overflow-hidden shadow-xl border border-gray-100">
             <Image src="/images/mep/5978737632046943512.jpg" alt="Plumbing Systems" fill className="object-cover hover:scale-105 transition-transform duration-500" sizes="(max-width: 768px) 100vw, 50vw" />
           </div>
        </section>

        {/* Feature 4: Reversed */}
        <section className="flex flex-col md:flex-row-reverse gap-10 items-center py-20 px-6 max-w-7xl mx-auto border-b border-gray-100 bg-gray-50/50">
           <div className="w-full md:w-1/2">
             <h3 className="text-3xl font-bold mb-6 border-r-4 border-primary pr-4">حلول كفاءة الطاقة في المباني</h3>
             <p className="text-xl text-gray-700 leading-relaxed">
               نهتم بتقاطع الميكانيكا مع الكهرباء والأنظمة الذكية (BMS) لنصل بمشروعك إلى أعلى مستويات كفاءة استهلاك الموارد. تساعد أنظمتنا على خفض التكاليف التشغيلية للمبنى بشكل ملحوظ مع مراعاة المعايير البيئية وشهادات المباني الخضراء.
             </p>
           </div>
           <div className="w-full md:w-1/2 relative h-[400px] md:h-[500px] rounded-2xl overflow-hidden shadow-xl border border-gray-100">
             <Image src="/images/mep/5978737632046943513.jpg" alt="Energy Efficiency" fill className="object-cover hover:scale-105 transition-transform duration-500" sizes="(max-width: 768px) 100vw, 50vw" />
           </div>
        </section>

        <div className="text-center py-24 bg-white">
           <Link href="/#contact" className="btn-primary text-xl px-10 py-4 shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all inline-block">
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

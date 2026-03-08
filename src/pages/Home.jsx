import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Home() {
  const whatsappNumber = "963940589052";

  const handleWhatsAppSubmit = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const msg = e.target.message.value;
    const finalMsg = `مرحباً بلال، أنا ${name}. أرغب في التواصل بخصوص: ${msg}`;
    window.open(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(finalMsg)}`, '_blank');
  };

  return (
    <div className="text-white bg-[#0a0f1a] min-h-screen font-sans selection:bg-pink-500 selection:text-white relative overflow-hidden">
      
      {/* --- BACKGROUND DECORATION --- */}
      {/* بقع ضوئية لكسر عتمة الخلفية */}
      <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-purple-600/10 blur-[150px] rounded-full -z-0"></div>
      <div className="absolute bottom-[20%] right-[-5%] w-[400px] h-[400px] bg-blue-600/10 blur-[150px] rounded-full -z-0"></div>

      <Navbar />

      {/* --- HERO SECTION --- */}
      <section dir="rtl" className="relative min-h-[90vh] flex flex-col justify-center items-center text-center px-6">
        <div className="inline-block px-4 py-1.5 mb-8 border border-white/10 rounded-full bg-white/5 text-slate-300 text-[10px] md:text-xs font-bold tracking-[0.2em] uppercase">
          Digital Excellence • Content Creator
        </div>

        <h1 className="text-7xl md:text-9xl font-black mb-8 leading-tight tracking-tighter bg-gradient-to-b from-white to-slate-500 bg-clip-text text-transparent">
          بلال <span className="text-pink-500">رفاعي</span>
        </h1>

        <p className="text-lg md:text-xl text-slate-400 max-w-2xl mb-12 font-medium leading-relaxed">
          أصنع محتوى يدمج بين الفن والترفيه، لبناء مجتمع متفاعل يضم أكثر من 
          <span className="text-white mx-1 font-bold border-b-2 border-pink-500">293 ألف</span> متابع.
        </p>

        <div className="flex flex-col sm:flex-row gap-6">
          <a
            href="https://instagram.com/bilal.rifay"
            target="_blank"
            className="bg-white text-black hover:bg-pink-500 hover:text-white transition-all duration-300 px-12 py-5 rounded-2xl font-black text-lg shadow-[0_0_40px_rgba(255,255,255,0.1)]"
          >
            استكشف المحتوى
          </a>
          <a
            href="#contact"
            className="bg-slate-900/50 border border-white/10 hover:border-pink-500/50 transition-all px-12 py-5 rounded-2xl font-bold text-lg backdrop-blur-md"
          >
            ابدأ تعاوناً
          </a>
        </div>
      </section>

      {/* --- ABOUT SECTION --- */}
      <section id="about" dir="rtl" className="max-w-6xl mx-auto py-32 px-6">
        <div className="bg-slate-900/30 border border-white/5 p-8 md:p-16 rounded-[4rem] backdrop-blur-sm grid md:grid-cols-2 gap-16 items-center shadow-inner">
          <div className="relative group">
            <div className="aspect-[4/5] bg-gradient-to-br from-slate-800 to-slate-900 rounded-[3rem] border border-white/10 flex items-center justify-center text-8xl shadow-2xl relative z-10">
              🎬
              {/* Overlay shadow for image placeholder */}
              <div className="absolute inset-0 bg-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity rounded-[3rem]"></div>
            </div>
            <div className="absolute -top-4 -right-4 w-full h-full border border-pink-500/10 rounded-[3.5rem] -z-0"></div>
          </div>

          <div>
            <h2 className="text-4xl md:text-5xl font-black mb-8 italic">البداية والقصة.</h2>
            <p className="text-slate-400 leading-loose text-lg mb-10">
              منذ انطلاقتي، ركزت على تحويل اللحظات اليومية العادية إلى قصص بصرية ملهمة. بلال رفاعي هو انعكاس لكل شاب طموح يسعى لترك بصمة في عالم الـ <span className="text-white font-bold tracking-widest">DIGITAL MEDIA</span>.
              <br /><br />
              هنا، الجودة ليست خياراً بل هي الأساس الذي بنيت عليه ثقة مئات الآلاف من المتابعين في العالم العربي.
            </p>
            <div className="flex gap-8">
              <div>
                <p className="text-3xl font-black text-pink-500">10M+</p>
                <p className="text-xs uppercase tracking-widest text-slate-500 font-bold">مشاهدة</p>
              </div>
              <div className="w-[1px] h-12 bg-white/10"></div>
              <div>
                <p className="text-3xl font-black text-white">293K</p>
                <p className="text-xs uppercase tracking-widest text-slate-500 font-bold">متابع</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- CONTACT SECTION --- */}
      <section id="contact" dir="rtl" className="max-w-5xl mx-auto py-32 px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-black mb-4 tracking-tighter">تواصل مباشر</h2>
          <p className="text-slate-400 text-lg">جاهز لتحويل أفكارك إلى واقع رقمي؟</p>
        </div>

        <div className="grid md:grid-cols-3 gap-12 items-start">
          {/* Form Side */}
          <div className="md:col-span-2 bg-white/5 border border-white/10 p-10 rounded-[3rem] shadow-2xl">
            <form onSubmit={handleWhatsAppSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-bold text-slate-500 mr-2 uppercase">الاسم</label>
                  <input name="name" required placeholder="كيف ناديك؟" className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 focus:border-pink-500 outline-none transition-all placeholder:text-slate-700" />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold text-slate-500 mr-2 uppercase">الموضوع</label>
                  <input name="service" placeholder="إعلان، تعاون، استفسار" className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 focus:border-pink-500 outline-none transition-all placeholder:text-slate-700" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-500 mr-2 uppercase">التفاصيل</label>
                <textarea name="message" rows="4" required placeholder="أخبرني المزيد..." className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 focus:border-pink-500 outline-none transition-all placeholder:text-slate-700"></textarea>
              </div>
              <button type="submit" className="w-full bg-pink-600 hover:bg-pink-500 text-white font-black py-5 rounded-2xl text-xl transition-all shadow-lg shadow-pink-600/20 active:scale-95">
                إرسال إلى واتساب
              </button>
            </form>
          </div>

          {/* Info Side */}
          <div className="space-y-6">
            <div className="bg-white/5 border border-white/10 p-8 rounded-[2.5rem]">
              <p className="text-slate-500 text-sm mb-2 font-bold uppercase tracking-widest">رقم التواصل</p>
              <p className="text-xl font-black tracking-widest text-white">+963 940 589 052</p>
            </div>
            <div className="bg-pink-600/10 border border-pink-500/20 p-8 rounded-[2.5rem]">
              <p className="text-pink-500 text-sm mb-2 font-bold uppercase tracking-widest">مقر التواجد</p>
              <p className="text-lg font-bold text-white">الإمارات • سوريا • تركيا</p>
            </div>
          </div>
        </div>
      </section>


      {/* --- FAQ SECTION --- */}
      <section id="faq" dir="rtl" className="max-w-4xl mx-auto py-24 px-6">
        <div className="text-right mb-16">
          <h2 className="text-4xl font-black mb-4">أسئلة شائعة</h2>
          <p className="text-slate-400">كل ما تود معرفته عن التعاون وصناعة المحتوى</p>
        </div>

        <div className="space-y-4">
          {[
            {
              q: "ما هي المناطق التي تغطيها إعلانياً؟",
              a: "أقوم بتغطية الفعاليات والتعاونات التجارية بشكل أساسي في الإمارات، سوريا، وتركيا، مع إمكانية السفر لتغطية الفعاليات العالمية."
            },
            {
              q: "هل تقدم خدمة صناعة الفيديو فقط بدون نشره؟",
              a: "نعم، يمكنني إنتاج محتوى إبداعي (Reels/Ads) لعلامتك التجارية ليتم استخدامه في حساباتكم الخاصة بجودة احترافية."
            },
            {
              q: "كيف يمكنني حجز موعد للإعلان؟",
              a: "يفضل التواصل عبر نموذج الواتساب أدناه قبل أسبوع على الأقل من موعد الحملة لضمان جدولة المحتوى بشكل مناسب."
            }
          ].map((item, index) => (
            <div key={index} className="bg-white/5 border border-white/10 rounded-3xl p-6 md:p-8 hover:bg-white/[0.07] transition-colors group">
              <h3 className="text-xl font-bold mb-4 text-pink-500 flex items-center gap-3">
                <span className="w-2 h-2 bg-pink-500 rounded-full"></span>
                {item.q}
              </h3>
              <p className="text-slate-400 leading-relaxed mr-5">
                {item.a}
              </p>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
}
import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { Icon } from '@iconify/react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import PageWrapper from '../components/PageWrapper';

const fadeUp = { hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0 } };
const stagger = { hidden: {}, visible: { transition: { staggerChildren: 0.1 } } };

const contactMethods = [
  {
    icon: 'mdi:whatsapp',
    label: 'واتساب',
    value: '+963 940 589 052',
    desc: 'الرد خلال ساعات',
    color: '#25D366',
    bg: '#F0FDF4',
    border: '#86EFAC',
    href: 'https://wa.me/963940589052',
  },
  {
    icon: 'mdi:instagram',
    label: 'إنستقرام',
    value: '@bilal.rifay',
    desc: 'رسالة مباشرة',
    color: '#2563EB',
    bg: '#EFF6FF',
    border: '#BFDBFE',
    href: 'https://instagram.com/bilal.rifay',
  },
  {
    icon: 'mdi:email-outline',
    label: 'البريد الإلكتروني',
    value: 'bilal@bilalrefaie.com',
    desc: 'للطلبات الرسمية',
    color: '#F43F5E',
    bg: '#FFF1F2',
    border: '#FECDD3',
    href: 'mailto:bilal@bilalrefaie.com',
  },
];

const projectTypes = [
  'شراكة إعلامية',
  'حملة رقمية',
  'تغطية صحفية',
  'إنتاج محتوى',
  'تعاون إعلاني',
  'أخرى',
];

export default function Contact() {
  const heroRef = useRef(null);
  const heroInView = useInView(heroRef, { once: true });
  const formRef = useRef(null);
  const formInView = useInView(formRef, { once: true, margin: '-80px' });

  const [formData, setFormData] = useState({ name: '', email: '', type: '', message: '' });
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    const msg = `السلام عليكم 👋\n\nالاسم: ${formData.name}\nالبريد: ${formData.email}\nنوع التعاون: ${formData.type}\n\nالرسالة:\n${formData.message}`;
    const url = `https://wa.me/963940589052?text=${encodeURIComponent(msg)}`;
    setTimeout(() => {
      window.open(url, '_blank');
      setLoading(false);
      setSent(true);
      setTimeout(() => setSent(false), 4000);
    }, 600);
  };

  return (
    <PageWrapper>
      <div className="bg-[#F8FAFC] min-h-screen">
        <Navbar />

        {/* ── HERO ── */}
        <section ref={heroRef} className="pt-28 pb-16 bg-gradient-hero relative overflow-hidden">
          <div className="absolute inset-0 bg-dots opacity-30" />
          <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center" dir="rtl">
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={heroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5 }}
              className="badge-primary mx-auto mb-6"
            >
              <Icon icon="mdi:send-outline" className="w-3.5 h-3.5" />
              ابدأ التواصل
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 22 }}
              animate={heroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="heading-xl mb-5"
            >
              تواصل
              <br />
              <span className="text-gradient">معنا</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={heroInView ? { opacity: 1 } : {}}
              transition={{ delay: 0.2 }}
              className="body-lg max-w-xl mx-auto"
            >
              للشراكات الإعلامية، التعاونات الرقمية، والاستفسارات المهنية — نحن هنا
            </motion.p>
          </div>
        </section>

        {/* ── CONTACT METHODS ── */}
        <section className="py-14 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-60px' }}
              variants={stagger}
              className="grid md:grid-cols-3 gap-5"
              dir="rtl"
            >
              {contactMethods.map((m) => (
                <motion.a
                  key={m.label}
                  href={m.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  variants={fadeUp}
                  transition={{ duration: 0.4 }}
                  whileHover={{ y: -6, scale: 1.01, transition: { duration: 0.22 } }}
                  className="card p-7 flex items-center gap-5 hover:shadow-card-hover transition-all cursor-pointer group"
                >
                  <div
                    className="w-14 h-14 rounded-2xl flex items-center justify-center shrink-0 border transition-transform group-hover:scale-110 duration-300"
                    style={{ background: m.bg, borderColor: m.border }}
                  >
                    <Icon icon={m.icon} className="w-7 h-7" style={{ color: m.color }} />
                  </div>
                  <div>
                    <div className="text-[#111827] font-black text-base mb-0.5" style={{ color: m.color }}>
                      {m.label}
                    </div>
                    <div className="text-[#111827] font-bold text-sm mb-1">{m.value}</div>
                    <div className="text-[#9CA3AF] text-xs font-medium">{m.desc}</div>
                  </div>
                  <Icon icon="mdi:arrow-left" className="w-5 h-5 text-[#E5E7EB] mr-auto group-hover:text-[#2563EB] transition-colors" />
                </motion.a>
              ))}
            </motion.div>
          </div>
        </section>

        {/* ── FORM + SIDEBAR ── */}
        <section ref={formRef} className="py-20 bg-[#F8FAFC]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-5 gap-12" dir="rtl">

              {/* Form */}
              <motion.div
                initial="hidden"
                animate={formInView ? 'visible' : 'hidden'}
                variants={fadeUp}
                transition={{ duration: 0.55 }}
                className="lg:col-span-3"
              >
                <div className="section-divider mb-6" />
                <h2 className="heading-md mb-8">أرسل رسالتك</h2>
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-bold text-[#4B5563] mb-2">الاسم الكامل</label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        placeholder="اسمك"
                        className="w-full px-4 py-3 rounded-xl border border-[#E5E7EB] bg-white text-[#111827] text-sm placeholder-[#9CA3AF] focus:outline-none focus:border-[#2563EB] focus:ring-2 focus:ring-[#2563EB]/10 transition-all"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-bold text-[#4B5563] mb-2">البريد الإلكتروني</label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        placeholder="example@email.com"
                        dir="ltr"
                        className="w-full px-4 py-3 rounded-xl border border-[#E5E7EB] bg-white text-[#111827] text-sm placeholder-[#9CA3AF] focus:outline-none focus:border-[#2563EB] focus:ring-2 focus:ring-[#2563EB]/10 transition-all"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-bold text-[#4B5563] mb-2">نوع التعاون</label>
                    <select
                      name="type"
                      value={formData.type}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-xl border border-[#E5E7EB] bg-white text-[#111827] text-sm focus:outline-none focus:border-[#2563EB] focus:ring-2 focus:ring-[#2563EB]/10 transition-all"
                    >
                      <option value="">اختر نوع التعاون</option>
                      {projectTypes.map((t) => (
                        <option key={t} value={t}>{t}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-bold text-[#4B5563] mb-2">الرسالة</label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      placeholder="اكتب تفاصيل مشروعك أو استفسارك هنا..."
                      className="w-full px-4 py-3 rounded-xl border border-[#E5E7EB] bg-white text-[#111827] text-sm placeholder-[#9CA3AF] focus:outline-none focus:border-[#2563EB] focus:ring-2 focus:ring-[#2563EB]/10 transition-all resize-none leading-relaxed"
                    />
                  </div>

                  <motion.button
                    type="submit"
                    disabled={loading || sent}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className={`btn-primary w-full justify-center text-base !py-4 ${
                      sent ? '!bg-green-500 !shadow-none' : ''
                    }`}
                  >
                    {loading ? (
                      <>
                        <Icon icon="mdi:loading" className="w-5 h-5 animate-spin" />
                        جاري الإرسال...
                      </>
                    ) : sent ? (
                      <>
                        <Icon icon="mdi:check-circle-outline" className="w-5 h-5" />
                        تم الإرسال بنجاح!
                      </>
                    ) : (
                      <>
                        <Icon icon="mdi:whatsapp" className="w-5 h-5" />
                        إرسال عبر واتساب
                      </>
                    )}
                  </motion.button>
                </form>
              </motion.div>

              {/* Sidebar */}
              <motion.div
                initial="hidden"
                animate={formInView ? 'visible' : 'hidden'}
                variants={stagger}
                className="lg:col-span-2 space-y-5"
              >
                {/* Availability */}
                <motion.div variants={fadeUp} transition={{ duration: 0.4 }} className="card p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="w-3 h-3 rounded-full bg-green-500 shadow-[0_0_8px_rgba(34,197,94,0.7)]" />
                    <h3 className="text-[#111827] font-black">متاح حالياً</h3>
                  </div>
                  <p className="text-[#4B5563] text-sm leading-relaxed">
                    بلال رفاعي متاح لاستقبال طلبات التعاون الإعلامي والشراكات. الرد في خلال 24 ساعة عادةً.
                  </p>
                </motion.div>

                {/* Location */}
                <motion.div variants={fadeUp} transition={{ duration: 0.4 }} className="card p-6">
                  <h3 className="text-[#111827] font-black mb-4 flex items-center gap-2">
                    <Icon icon="mdi:map-marker-outline" className="w-5 h-5 text-[#2563EB]" />
                    التواجد
                  </h3>
                  <div className="space-y-2.5">
                    {['الإمارات العربية المتحدة', 'سوريا', 'تركيا'].map((loc) => (
                      <div key={loc} className="flex items-center gap-2 text-sm text-[#4B5563]">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#2563EB]" />
                        {loc}
                      </div>
                    ))}
                  </div>
                </motion.div>

                {/* What we offer */}
                <motion.div variants={fadeUp} transition={{ duration: 0.4 }} className="card p-6">
                  <h3 className="text-[#111827] font-black mb-4">خدمات التعاون</h3>
                  <div className="space-y-3">
                    {[
                      { icon: 'mdi:video-outline', label: 'إنتاج محتوى إعلامي' },
                      { icon: 'mdi:microphone-outline', label: 'تقديم وتغطية أحداث' },
                      { icon: 'mdi:chart-line', label: 'حملات رقمية مؤثرة' },
                      { icon: 'mdi:handshake-outline', label: 'شراكات تجارية' },
                    ].map((s) => (
                      <div key={s.label} className="flex items-center gap-3 text-sm text-[#4B5563]">
                        <div className="w-7 h-7 rounded-lg bg-[#EFF6FF] flex items-center justify-center shrink-0">
                          <Icon icon={s.icon} className="w-3.5 h-3.5 text-[#2563EB]" />
                        </div>
                        {s.label}
                      </div>
                    ))}
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </PageWrapper>
  );
}

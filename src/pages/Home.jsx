import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Icon } from '@iconify/react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import PageWrapper from '../components/PageWrapper';
import { AnimatedCounter } from '../components/AnimatedCounter';

// ── Animation helpers ──
const fadeUp = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } };
const stagger = { hidden: {}, visible: { transition: { staggerChildren: 0.1 } } };

function Section({ children, className = '', id = '' }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  return (
    <motion.section
      id={id}
      ref={ref}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      variants={stagger}
      className={className}
    >
      {children}
    </motion.section>
  );
}

// ── Stats data ──
const stats = [
  { icon: 'mdi:instagram', value: 293, suffix: 'K+', label: 'متابع', color: '#2563EB' },
  { icon: 'mdi:eye-outline', value: 10, suffix: 'M+', label: 'مشاهدة', color: '#F43F5E' },
  { icon: 'mdi:newspaper-variant-outline', value: 500, suffix: '+', label: 'منشور', color: '#2563EB' },
  { icon: 'mdi:handshake-outline', value: 50, suffix: '+', label: 'شراكة إعلامية', color: '#F43F5E' },
];

// ── Content preview ──
const previews = [
  { cat: 'محتوى رقمي', title: 'ريلز إبداعية', icon: 'mdi:play-circle-outline', img: '/images/content.webp' },
  { cat: 'تغطيات', title: 'تغطيات ميدانية', icon: 'mdi:microphone-outline', img: '/images/coverage.webp' },
  { cat: 'شراكات', title: 'تعاونات إعلامية', icon: 'mdi:briefcase-outline', img: '/images/collab.webp' },
];

// ── Media identity cards ──
const identities = [
  { icon: 'mdi:newspaper-variant-outline', title: 'صحفي', desc: 'يقدّم تغطيات ميدانية وتقارير إخبارية بأسلوب حديث وموضوعي.' },
  { icon: 'mdi:video-outline', title: 'صانع محتوى', desc: 'ينتج محتوى رقمياً إبداعياً يصل إلى مئات الآلاف عبر المنصات.' },
  { icon: 'mdi:account-tie-outline', title: 'شخصية إعلامية', desc: 'حضور مستمر أمام الكاميرا ومشاركة في الفعاليات الإعلامية الكبرى.' },
];

// ═══════════════════════════════════════════════════
// HERO
// ═══════════════════════════════════════════════════
function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-hero pt-16">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 bg-grid opacity-30" />
      {/* Gradient orb */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-[#2563EB]/6 blur-[100px] rounded-full pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-[#F43F5E]/6 blur-[80px] rounded-full pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Text */}
          <div dir="rtl">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55 }}
              className="badge-primary mb-8"
            >
              <Icon icon="mdi:newspaper-variant-outline" className="w-3.5 h-3.5" />
              صحفي • صانع محتوى • شخصية إعلامية
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="heading-xl mb-6"
            >
              بلال
              <br />
              <span className="text-gradient">رفاعي</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.2 }}
              className="body-lg max-w-xl mb-10 leading-relaxed"
            >
              صحفي وصانع محتوى يقدّم محتوى إعلامياً ورقمياً بأسلوب حديث، ويجمع بين الحضور الإعلامي والتأثير الرقمي لصناعة تجربة قريبة من الناس.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Link to="/content" className="btn-primary text-base !px-8 !py-3.5">
                <Icon icon="mdi:play-circle-outline" className="w-5 h-5" />
                شاهد المحتوى
              </Link>
              <Link to="/contact" className="btn-outline text-base !px-8 !py-3.5">
                <Icon icon="mdi:message-outline" className="w-5 h-5" />
                تواصل الآن
              </Link>
            </motion.div>

            {/* Mini stats */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.55 }}
              className="flex gap-8 mt-12 pt-8 border-t border-[#E5E7EB]"
            >
              {[{ v: '293K+', l: 'متابع' }, { v: '10M+', l: 'مشاهدة' }, { v: '50+', l: 'شراكة' }].map((s) => (
                <div key={s.l}>
                  <div className="text-2xl font-black text-[#111827]">{s.v}</div>
                  <div className="text-xs font-bold text-[#9CA3AF] uppercase tracking-wider">{s.l}</div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96, x: -20 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.25 }}
            className="relative hidden lg:block"
          >
            {/* Decorative elements */}
            <div className="absolute -top-6 -right-6 w-full h-full rounded-[2.5rem] border-2 border-[#2563EB]/12 z-0" />
            <div className="absolute -bottom-4 -left-4 w-[80%] h-[80%] rounded-[2rem] bg-gradient-to-br from-[#EFF6FF] to-[#FFF1F2] z-0" />

            <div className="relative z-10 rounded-[2.5rem] overflow-hidden shadow-card-hover border border-[#E5E7EB]">
              <img
                src="/images/hero.webp"
                alt="بلال رفاعي — صحفي وصانع محتوى"
                className="w-full h-[560px] object-cover object-top"
                fetchpriority="high"
                decoding="async"
              />
              {/* Subtle gradient at bottom */}
              <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white/60 to-transparent" />
            </div>

            {/* Floating badge — top */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute -top-3 left-6 z-20 card px-4 py-2.5 flex items-center gap-2.5"
              dir="rtl"
            >
              <div className="w-8 h-8 rounded-lg bg-[#EFF6FF] flex items-center justify-center">
                <Icon icon="mdi:instagram" className="w-4.5 h-4.5 text-[#2563EB]" />
              </div>
              <div>
                <div className="text-[#111827] font-bold text-xs">293K+ متابع</div>
                <div className="text-[#9CA3AF] text-[10px]">@bilal.rifay</div>
              </div>
            </motion.div>

            {/* Floating badge — bottom */}
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
              className="absolute -bottom-3 right-6 z-20 card px-4 py-2.5 flex items-center gap-2.5"
              dir="rtl"
            >
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              <span className="text-[#111827] font-bold text-xs">متاح للتعاون</span>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// ═══════════════════════════════════════════════════
// STATS
// ═══════════════════════════════════════════════════
function StatsSection() {
  return (
    <Section className="py-20 bg-white" id="stats">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" dir="rtl">
        <motion.div variants={fadeUp} transition={{ duration: 0.5 }} className="text-center mb-12">
          <div className="section-divider mx-auto mb-6" />
          <h2 className="heading-md mb-3">الحضور الرقمي بالأرقام</h2>
          <p className="body-lg">أرقام تعكس مدى التأثير والانتشار</p>
        </motion.div>
        <motion.div
          variants={stagger}
          className="grid grid-cols-2 lg:grid-cols-4 gap-5"
        >
          {stats.map((s, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              transition={{ duration: 0.45 }}
              className="card-hover p-7 text-center"
            >
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-4"
                style={{ background: `${s.color}14`, border: `1.5px solid ${s.color}25` }}
              >
                <Icon icon={s.icon} className="w-6 h-6" style={{ color: s.color }} />
              </div>
              <div className="text-3xl font-black text-[#111827] mb-1">
                <AnimatedCounter end={s.value} suffix={s.suffix} />
              </div>
              <div className="text-[#9CA3AF] text-xs font-bold uppercase tracking-wider">{s.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </Section>
  );
}

// ═══════════════════════════════════════════════════
// MEDIA IDENTITY
// ═══════════════════════════════════════════════════
function MediaIdentitySection() {
  return (
    <Section className="py-20 bg-[#F8FAFC]" id="identity">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" dir="rtl">
        <motion.div variants={fadeUp} transition={{ duration: 0.5 }} className="mb-14">
          <div className="badge-primary mb-4">
            <Icon icon="mdi:account-tie-outline" className="w-3.5 h-3.5" />
            الهوية الإعلامية
          </div>
          <h2 className="heading-lg mb-4">صحفي وصانع محتوى</h2>
          <p className="body-lg max-w-2xl">
            بلال رفاعي يجمع بين العمل الصحفي الميداني وصناعة المحتوى الرقمي في منظومة إعلامية متكاملة.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Cards */}
          <motion.div variants={stagger} className="space-y-4">
            {identities.map((item, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                transition={{ duration: 0.4 }}
                className="card-hover p-6 flex items-start gap-5"
              >
                <div className="w-12 h-12 rounded-xl bg-[#EFF6FF] border border-[#BFDBFE] flex items-center justify-center shrink-0">
                  <Icon icon={item.icon} className="w-6 h-6 text-[#2563EB]" />
                </div>
                <div>
                  <h3 className="text-[#111827] font-black text-lg mb-2">{item.title}</h3>
                  <p className="text-[#4B5563] text-sm leading-relaxed">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Image */}
          <motion.div
            variants={fadeUp}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative rounded-[2rem] overflow-hidden shadow-card-hover border border-[#E5E7EB]">
              <img
                src="/images/about.webp"
                alt="بلال رفاعي في الميدان الإعلامي"
                className="w-full h-[420px] object-cover object-top"
                loading="lazy"
                decoding="async"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-white/50 via-transparent to-transparent" />
            </div>
            {/* Accent dot */}
            <div className="absolute -top-3 -right-3 w-16 h-16 rounded-full bg-[#EFF6FF] border-4 border-white flex items-center justify-center shadow-card">
              <Icon icon="mdi:newspaper-variant-outline" className="w-7 h-7 text-[#2563EB]" />
            </div>
          </motion.div>
        </div>
      </div>
    </Section>
  );
}

// ═══════════════════════════════════════════════════
// CONTENT PREVIEW
// ═══════════════════════════════════════════════════
function ContentPreviewSection() {
  return (
    <Section className="py-20 bg-white" id="content-preview">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" dir="rtl">
        <div className="flex items-end justify-between mb-12 flex-wrap gap-4">
          <div>
            <motion.div variants={fadeUp} className="badge-secondary mb-4">
              <Icon icon="mdi:play-box-multiple-outline" className="w-3.5 h-3.5" />
              المحتوى الأخير
            </motion.div>
            <motion.h2 variants={fadeUp} transition={{ duration: 0.5, delay: 0.05 }} className="heading-lg">
              أبرز الأعمال
            </motion.h2>
          </div>
          <motion.div variants={fadeUp}>
            <Link to="/content" className="btn-ghost">
              <Icon icon="mdi:arrow-left" className="w-4 h-4" />
              عرض الكل
            </Link>
          </motion.div>
        </div>

        <motion.div variants={stagger} className="grid md:grid-cols-3 gap-6">
          {previews.map((item, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              transition={{ duration: 0.45 }}
              className="group card-hover overflow-hidden cursor-pointer"
              whileHover={{ y: -6, transition: { duration: 0.25 } }}
            >
              <div className="relative h-52 overflow-hidden">
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#111827]/60 to-transparent" />
                <div className="absolute bottom-4 right-4">
                  <span className="px-3 py-1 rounded-full bg-white/90 text-[#2563EB] text-xs font-bold">
                    {item.cat}
                  </span>
                </div>
              </div>
              <div className="p-5 flex items-center gap-3">
                <div className="w-9 h-9 rounded-lg bg-[#EFF6FF] flex items-center justify-center shrink-0 group-hover:bg-[#2563EB] transition-colors">
                  <Icon icon={item.icon} className="w-4.5 h-4.5 text-[#2563EB] group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-[#111827] font-black text-base">{item.title}</h3>
                <Icon icon="mdi:arrow-left" className="w-4 h-4 text-[#9CA3AF] mr-auto group-hover:text-[#2563EB] transition-colors" />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </Section>
  );
}

// ═══════════════════════════════════════════════════
// CTA / PARTNERSHIPS
// ═══════════════════════════════════════════════════
function PartnershipCTASection() {
  return (
    <Section className="py-20 bg-[#F8FAFC]" id="partnership">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={fadeUp}
          transition={{ duration: 0.6 }}
          className="relative rounded-[2rem] overflow-hidden bg-[#111827] p-10 md:p-16"
          dir="rtl"
        >
          {/* Gradient accents */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#2563EB]/15 blur-[60px] rounded-full pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-[#F43F5E]/10 blur-[60px] rounded-full pointer-events-none" />
          
          <div className="relative z-10 grid md:grid-cols-2 gap-10 items-center">
            <div>
              <div className="badge-primary mb-6">
                <Icon icon="mdi:handshake-outline" className="w-3.5 h-3.5" />
                شراكات إعلامية
              </div>
              <h2 className="text-3xl md:text-4xl font-black text-white mb-5 leading-tight">
                هل تبحث عن شريك إعلامي موثوق؟
              </h2>
              <p className="text-white/60 leading-loose mb-8">
                أتعاون مع العلامات التجارية والمؤسسات الإعلامية لإنتاج محتوى احترافي يصل إلى جمهور واسع ومتفاعل.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/contact" className="btn-primary !py-3.5">
                  <Icon icon="mdi:send-outline" className="w-5 h-5" />
                  ابدأ التعاون
                </Link>
                <a
                  href="https://wa.me/963940589052"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl border border-white/20 text-white font-bold hover:bg-white/10 transition-all"
                >
                  <Icon icon="mdi:whatsapp" className="w-5 h-5 text-green-400" />
                  واتساب مباشر
                </a>
              </div>
            </div>

            {/* Collab image */}
            <div className="relative rounded-[1.5rem] overflow-hidden shadow-xl border border-white/10">
              <img
                src="/images/collab.webp"
                alt="شراكات بلال رفاعي الإعلامية"
                className="w-full h-[280px] object-cover object-top"
                loading="lazy"
                decoding="async"
              />
              <div className="absolute inset-0 bg-gradient-to-l from-[#111827]/60 to-transparent" />
            </div>
          </div>
        </motion.div>
      </div>
    </Section>
  );
}

// ═══════════════════════════════════════════════════
// HOME PAGE
// ═══════════════════════════════════════════════════
export default function Home() {
  return (
    <PageWrapper>
      <div className="bg-[#F8FAFC] min-h-screen">
        <Navbar />
        <HeroSection />
        <StatsSection />
        <MediaIdentitySection />
        <ContentPreviewSection />
        <PartnershipCTASection />
        <Footer />
      </div>
    </PageWrapper>
  );
}
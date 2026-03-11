import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Icon } from '@iconify/react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import PageWrapper from '../components/PageWrapper';
import { AnimatedCounter } from '../components/AnimatedCounter';

const fadeUp = { hidden: { opacity: 0, y: 28 }, visible: { opacity: 1, y: 0 } };
const stagger = { hidden: {}, visible: { transition: { staggerChildren: 0.09 } } };

const coverageStats = [
  { icon: 'mdi:newspaper-variant-outline', value: 100, suffix: '+', label: 'تغطية منجزة' },
  { icon: 'mdi:account-group-outline', value: 293, suffix: 'K+', label: 'جمهور متفاعل' },
  { icon: 'mdi:map-marker-multiple-outline', value: 5, suffix: '+', label: 'دول مغطاة' },
  { icon: 'mdi:star-outline', value: 3, suffix: 'سنوات', label: 'خبرة إعلامية' },
];

const coverageItems = [
  {
    type: 'ميداني',
    title: 'تغطية مباشرة من قلب الحدث',
    desc: 'تغطيات ميدانية حية للفعاليات والأحداث الإقليمية والدولية بأسلوب صحفي احترافي.',
    icon: 'mdi:broadcast',
    img: '/images/coverage.png',
  },
  {
    type: 'استقصائي',
    title: 'تقارير معمّقة وتحليلية',
    desc: 'تقارير صحفية متعمقة تتناول قضايا المجتمع والإعلام الرقمي بموضوعية ومصداقية.',
    icon: 'mdi:text-search',
    img: '/images/content.png',
  },
  {
    type: 'حوارات',
    title: 'لقاءات مع شخصيات بارزة',
    desc: 'حوارات صحفية مع شخصيات مؤثرة في مجالات الإعلام والأعمال والثقافة.',
    icon: 'mdi:account-voice',
    img: '/images/collab.png',
  },
];

const mediaPresence = [
  { icon: 'mdi:television-play', label: 'ظهور تلفزيوني', desc: 'مشاركات في برامج تلفزيونية محلية وإقليمية' },
  { icon: 'mdi:radio', label: 'حضور إذاعي', desc: 'مقابلات وبرامج إذاعية متنوعة' },
  { icon: 'mdi:web', label: 'إعلام رقمي', desc: 'مقالات ومحتوى على كبرى المنصات الرقمية' },
  { icon: 'mdi:calendar-star', label: 'فعاليات حضورية', desc: 'حضور ومشاركة في مؤتمرات وفعاليات' },
];

function useSV() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-70px' });
  return { ref, inView };
}

export default function Coverage() {
  const heroRef = useRef(null);
  const heroInView = useInView(heroRef, { once: true });
  const stats = useSV();
  const cards = useSV();
  const presence = useSV();

  return (
    <PageWrapper>
      <div className="bg-[#F8FAFC] min-h-screen">
        <Navbar />

        {/* ── HERO ── */}
        <section ref={heroRef} className="pt-28 pb-16 bg-gradient-hero relative overflow-hidden">
          <div className="absolute inset-0 bg-dots opacity-30" />
          <div className="relative z-10 max-w-4xl mx-auto px-4 text-center" dir="rtl">
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={heroInView ? { opacity: 1, y: 0 } : {}}
              className="badge-primary mx-auto mb-6"
            >
              <Icon icon="mdi:microphone-outline" className="w-3.5 h-3.5" />
              الحضور الإعلامي والتغطيات
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 22 }}
              animate={heroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1 }}
              className="heading-xl mb-5"
            >
              التغطيات{' '}
              <span className="text-gradient">الإعلامية</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={heroInView ? { opacity: 1 } : {}}
              transition={{ delay: 0.2 }}
              className="body-lg max-w-2xl mx-auto"
            >
              تغطيات ميدانية، تقارير صحفية، ولقاءات متنوعة — حضور إعلامي احترافي ومستمر
            </motion.p>
          </div>
        </section>

        {/* ── STATS ── */}
        <section ref={stats.ref} className="py-14 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial="hidden"
              animate={stats.inView ? 'visible' : 'hidden'}
              variants={stagger}
              className="grid grid-cols-2 lg:grid-cols-4 gap-5"
              dir="rtl"
            >
              {coverageStats.map((s, i) => (
                <motion.div
                  key={i}
                  variants={fadeUp}
                  transition={{ duration: 0.4 }}
                  className="card-hover p-6 text-center"
                >
                  <div className="w-11 h-11 rounded-xl bg-[#EFF6FF] border border-[#BFDBFE] flex items-center justify-center mx-auto mb-3">
                    <Icon icon={s.icon} className="w-5.5 h-5.5 text-[#2563EB]" />
                  </div>
                  <div className="text-3xl font-black text-[#111827] mb-1">
                    <AnimatedCounter end={s.value} suffix={s.suffix} />
                  </div>
                  <div className="text-[#9CA3AF] text-xs font-bold uppercase tracking-wide">{s.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* ── COVERAGE CARDS ── */}
        <section ref={cards.ref} className="py-20 bg-[#F8FAFC]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" dir="rtl">
            <motion.div
              initial="hidden"
              animate={cards.inView ? 'visible' : 'hidden'}
              variants={fadeUp}
              transition={{ duration: 0.5 }}
              className="mb-12"
            >
              <div className="section-divider mb-6" />
              <h2 className="heading-md mb-3">أنواع التغطيات</h2>
              <p className="body-lg max-w-xl">تنوع في أساليب التغطية والتقديم الإعلامي</p>
            </motion.div>

            <div className="space-y-8">
              {coverageItems.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 24 }}
                  animate={cards.inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: i * 0.13 }}
                  className={`card-hover overflow-hidden grid md:grid-cols-2 gap-0 ${
                    i % 2 === 1 ? 'md:[direction:ltr]' : ''
                  }`}
                >
                  {/* Image */}
                  <div className="relative h-64 md:h-auto overflow-hidden">
                    <img
                      src={item.img}
                      alt={item.title}
                      className="w-full h-full object-cover object-top"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-l from-white/20 to-transparent" />
                    <div className="absolute top-4 right-4">
                      <span className="px-3 py-1 bg-white/90 text-[#2563EB] text-xs font-bold rounded-full border border-[#2563EB]/20">
                        {item.type}
                      </span>
                    </div>
                  </div>

                  {/* Text */}
                  <div className="p-8 md:p-10 flex flex-col justify-center" dir="rtl">
                    <div className="w-11 h-11 rounded-xl bg-[#EFF6FF] flex items-center justify-center mb-5">
                      <Icon icon={item.icon} className="w-5.5 h-5.5 text-[#2563EB]" />
                    </div>
                    <h3 className="heading-md mb-4">{item.title}</h3>
                    <p className="body-lg mb-6">{item.desc}</p>
                    <Link to="/contact" className="btn-outline self-start">
                      <Icon icon="mdi:arrow-left" className="w-4 h-4" />
                      طلب تغطية
                    </Link>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ── MEDIA PRESENCE ── */}
        <section ref={presence.ref} className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" dir="rtl">
            <motion.div
              initial="hidden"
              animate={presence.inView ? 'visible' : 'hidden'}
              variants={fadeUp}
              transition={{ duration: 0.5 }}
              className="text-center mb-12"
            >
              <h2 className="heading-md mb-3">الحضور الإعلامي</h2>
              <p className="body-lg">بلال رفاعي في مختلف وسائل الإعلام</p>
            </motion.div>
            <motion.div
              initial="hidden"
              animate={presence.inView ? 'visible' : 'hidden'}
              variants={stagger}
              className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5"
            >
              {mediaPresence.map((m, i) => (
                <motion.div
                  key={i}
                  variants={fadeUp}
                  transition={{ duration: 0.4 }}
                  className="card-hover p-6 text-center"
                >
                  <div className="w-12 h-12 rounded-xl bg-[#FFF1F2] border border-[#FECDD3] flex items-center justify-center mx-auto mb-4">
                    <Icon icon={m.icon} className="w-6 h-6 text-[#F43F5E]" />
                  </div>
                  <h3 className="text-[#111827] font-black text-base mb-2">{m.label}</h3>
                  <p className="text-[#4B5563] text-sm leading-relaxed">{m.desc}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* ── CTA ── */}
        <section className="py-16 bg-[#F8FAFC]">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="card p-10 md:p-14 text-center bg-[#111827]" dir="rtl">
              <div className="absolute inset-0 rounded-2xl overflow-hidden pointer-events-none">
                <div className="absolute top-0 right-0 w-48 h-48 bg-[#2563EB]/10 blur-[60px] rounded-full" />
              </div>
              <Icon icon="mdi:microphone-outline" className="w-12 h-12 text-[#2563EB] mx-auto mb-5" />
              <h2 className="text-2xl md:text-3xl font-black text-white mb-4">هل تريد تغطية لفعاليتك؟</h2>
              <p className="text-white/60 mb-8 leading-relaxed">
                تواصل معنا وسنبحث في إمكانية التغطية الإعلامية لفعاليتك أو مشروعك.
              </p>
              <Link to="/contact" className="btn-primary">
                <Icon icon="mdi:calendar-check-outline" className="w-5 h-5" />
                طلب تغطية إعلامية
              </Link>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </PageWrapper>
  );
}

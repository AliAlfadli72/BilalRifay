import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Icon } from '@iconify/react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import PageWrapper from '../components/PageWrapper';

const fadeUp = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } };
const stagger = { hidden: {}, visible: { transition: { staggerChildren: 0.1 } } };

const skills = [
  { icon: 'mdi:newspaper-variant-outline', label: 'الصحافة الإلكترونية' },
  { icon: 'mdi:video-outline', label: 'إنتاج الفيديو' },
  { icon: 'mdi:microphone-outline', label: 'التقديم الإعلامي' },
  { icon: 'mdi:camera-outline', label: 'التصوير المهني' },
  { icon: 'mdi:account-group-outline', label: 'إدارة المجتمع الرقمي' },
  { icon: 'mdi:text-box-edit-outline', label: 'الكتابة الصحفية' },
];

const timeline = [
  { year: '2020', title: 'الانطلاقة الرقمية', desc: 'بدأ رحلته في عالم صناعة المحتوى الرقمي.' },
  { year: '2021', title: 'التميز الإعلامي', desc: 'حقق حضوراً إعلامياً واسعاً وتجاوز 100K متابع.' },
  { year: '2022', title: 'الشراكات الكبرى', desc: 'بدأ التعاون مع علامات تجارية محلية وإقليمية.' },
  { year: '2024', title: '293K+ متابع', desc: 'نمو متسارع وتأثير واسع عبر المنصات الرقمية.' },
];

export default function About() {
  const heroRef = useRef(null);
  const heroInView = useInView(heroRef, { once: true });
  const bioRef = useRef(null);
  const bioInView = useInView(bioRef, { once: true, margin: '-80px' });
  const timelineRef = useRef(null);
  const timelineInView = useInView(timelineRef, { once: true, margin: '-80px' });

  return (
    <PageWrapper>
      <div className="bg-[#F8FAFC] min-h-screen">
        <Navbar />

        {/* ── PAGE HERO ── */}
        <section ref={heroRef} className="relative pt-28 pb-16 bg-gradient-hero overflow-hidden">
          <div className="absolute inset-0 bg-dots opacity-40" />
          <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center" dir="rtl">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={heroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.55 }}
              className="badge-primary mx-auto mb-6"
            >
              <Icon icon="mdi:account-circle-outline" className="w-3.5 h-3.5" />
              نبذة شخصية
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={heroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="heading-xl mb-5"
            >
              بلال <span className="text-gradient">رفاعي</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={heroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.55, delay: 0.2 }}
              className="body-lg max-w-2xl mx-auto"
            >
              صحفي وصانع محتوى رقمي — شخصية إعلامية تجمع بين المصداقية والحضور الرقمي
            </motion.p>
          </div>
        </section>

        {/* ── BIO SECTION ── */}
        <section ref={bioRef} className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-5 gap-14 items-start">

              {/* Image */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={bioInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.65 }}
                className="lg:col-span-2 relative"
                dir="rtl"
              >
                <div className="relative rounded-[2rem] overflow-hidden shadow-card-hover border border-[#E5E7EB]">
                  <img
                    src="/images/about.webp"
                    alt="بلال رفاعي — صحفي وصانع محتوى"
                    className="w-full h-[480px] object-cover object-top"
                    loading="lazy"
                    decoding="async"
                  />
                  <div className="absolute bottom-0 inset-x-0 h-28 bg-gradient-to-t from-white/70 to-transparent" />
                </div>
                {/* Credential card */}
                <div className="absolute -bottom-4 -left-4 card p-4 flex items-center gap-3" dir="rtl">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#2563EB] to-[#F43F5E] flex items-center justify-center shadow-primary-glow">
                    <Icon icon="mdi:shield-star-outline" className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <div className="text-[#111827] font-black text-sm">شخصية إعلامية</div>
                    <div className="text-[#9CA3AF] text-xs">صحفي معتمد • صانع محتوى</div>
                  </div>
                </div>
              </motion.div>

              {/* Bio text */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={bioInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.65, delay: 0.15 }}
                className="lg:col-span-3"
                dir="rtl"
              >
                <div className="section-divider mb-6" />
                <h2 className="heading-md mb-6">السيرة والمسيرة</h2>
                <div className="space-y-4 body-lg">
                  <p>
                    <strong className="text-[#111827]">بلال رفاعي</strong> هو صحفي وصانع محتوى يقدّم محتوى يجمع بين الحضور الإعلامي والطرح الرقمي الحديث، مع اهتمام بإيصال الفكرة بأسلوب بصري واضح وقريب من الجمهور.
                  </p>
                  <p>
                    يركز في أعماله على تقديم محتوى معاصر، تغطيات، وحضور رقمي يعكس شخصية إعلامية احترافية. استطاع خلال مسيرته بناء جمهور وفي يتجاوز <strong className="text-[#2563EB]">293 ألف متابع</strong>، ويستمر في النمو والتوسع.
                  </p>
                  <p>
                    يتنقل بين الإمارات وسوريا وتركيا، ويغطي الفعاليات الإعلامية والثقافية، ويتعاون مع علامات تجارية محلية وإقليمية ودولية في إنتاج محتوى ذي قيمة.
                  </p>
                </div>

                {/* Skills */}
                <div className="mt-9">
                  <h3 className="text-[#111827] font-black text-lg mb-4">المهارات والتخصصات</h3>
                  <div className="flex flex-wrap gap-3">
                    {skills.map((skill) => (
                      <div
                        key={skill.label}
                        className="flex items-center gap-2 px-4 py-2 bg-[#F8FAFC] border border-[#E5E7EB] rounded-xl text-sm text-[#4B5563] font-medium hover:border-[#2563EB]/40 hover:text-[#2563EB] transition-all"
                      >
                        <Icon icon={skill.icon} className="w-4 h-4" />
                        {skill.label}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex gap-4 mt-9">
                  <Link to="/contact" className="btn-primary">
                    <Icon icon="mdi:message-outline" className="w-5 h-5" />
                    تواصل معي
                  </Link>
                  <Link to="/content" className="btn-ghost">
                    <Icon icon="mdi:play-circle-outline" className="w-5 h-5" />
                    شاهد المحتوى
                  </Link>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ── TIMELINE ── */}
        <section ref={timelineRef} className="py-20 bg-[#F8FAFC]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" dir="rtl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={timelineInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.55 }}
              className="text-center mb-14"
            >
              <h2 className="heading-md mb-3">المحطات البارزة</h2>
              <p className="body-lg">رحلة من النمو والتأثير المستمر</p>
            </motion.div>

            <div className="relative">
              {/* Vertical line */}
              <div className="absolute right-[calc(50%-1px)] top-0 bottom-0 w-0.5 bg-[#E5E7EB] hidden md:block" />

              <div className="space-y-8">
                {timeline.map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    animate={timelineInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.45, delay: i * 0.12 }}
                    className={`relative flex flex-col md:flex-row gap-6 items-start md:items-center ${
                      i % 2 === 0 ? 'md:flex-row-reverse' : ''
                    }`}
                  >
                    {/* Content */}
                    <div className="flex-1 card p-6 hover:shadow-card-hover transition-all">
                      <div className="text-[#2563EB] font-black text-2xl mb-2">{item.year}</div>
                      <h3 className="text-[#111827] font-black text-lg mb-2">{item.title}</h3>
                      <p className="text-[#4B5563] text-sm leading-relaxed">{item.desc}</p>
                    </div>

                    {/* Dot */}
                    <div className="hidden md:flex w-5 h-5 rounded-full bg-white border-2 border-[#2563EB] shadow-primary-glow shrink-0 z-10" />

                    {/* Empty side */}
                    <div className="flex-1 hidden md:block" />
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </PageWrapper>
  );
}

import { useState, useRef } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { Icon } from '@iconify/react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import PageWrapper from '../components/PageWrapper';

const categories = [
  { id: 'all', label: 'الكل', icon: 'mdi:grid-large' },
  { id: 'digital', label: 'محتوى رقمي', icon: 'mdi:play-circle-outline' },
  { id: 'coverage', label: 'تغطيات', icon: 'mdi:microphone-outline' },
  { id: 'interviews', label: 'لقاءات', icon: 'mdi:account-voice' },
  { id: 'media', label: 'أعمال إعلامية', icon: 'mdi:newspaper-variant-outline' },
  { id: 'collab', label: 'تعاونات', icon: 'mdi:briefcase-outline' },
];

const items = [
  { id: 1, cat: 'digital', title: 'ريل إبداعي — يوم في حياتي', views: '2.1M', likes: '148K', img: '/images/content.png' },
  { id: 2, cat: 'coverage', title: 'تغطية فعالية دبي الكبرى', views: '1.8M', likes: '92K', img: '/images/coverage.png' },
  { id: 3, cat: 'collab', title: 'شراكة مع علامة تجارية رائدة', views: '1.2M', likes: '87K', img: '/images/collab.png' },
  { id: 4, cat: 'digital', title: 'أسلوب حياة المذيع الرقمي', views: '950K', likes: '74K', img: '/images/content.png' },
  { id: 5, cat: 'interviews', title: 'لقاء مع شخصية بارزة', views: '3.2M', likes: '210K', img: '/images/coverage.png' },
  { id: 6, cat: 'media', title: 'تقرير: الإعلام الرقمي في العالم العربي', views: '1.5M', likes: '120K', img: '/images/collab.png' },
  { id: 7, cat: 'coverage', title: 'تغطية مهرجان أبوظبي', views: '870K', likes: '65K', img: '/images/coverage.png' },
  { id: 8, cat: 'collab', title: 'حملة مع علامة تقنية عالمية', views: '1.1M', likes: '90K', img: '/images/content.png' },
  { id: 9, cat: 'digital', title: 'كواليس الإعلام الرقمي', views: '780K', likes: '55K', img: '/images/collab.png' },
];

const fadeUp = { hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0 } };
const stagger = { hidden: {}, visible: { transition: { staggerChildren: 0.07 } } };

export default function Content() {
  const [active, setActive] = useState('all');
  const heroRef = useRef(null);
  const heroInView = useInView(heroRef, { once: true });
  const gridRef = useRef(null);
  const gridInView = useInView(gridRef, { once: true, margin: '-60px' });

  const filtered = active === 'all' ? items : items.filter((i) => i.cat === active);

  return (
    <PageWrapper>
      <div className="bg-[#F8FAFC] min-h-screen">
        <Navbar />

        {/* HERO */}
        <section ref={heroRef} className="pt-28 pb-14 bg-gradient-hero overflow-hidden relative">
          <div className="absolute inset-0 bg-dots opacity-30" />
          <div className="relative z-10 max-w-4xl mx-auto px-4 text-center" dir="rtl">
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={heroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5 }}
              className="badge-secondary mx-auto mb-6"
            >
              <Icon icon="mdi:play-box-multiple-outline" className="w-3.5 h-3.5" />
              معرض المحتوى
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={heroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="heading-xl mb-5"
            >
              عالم{' '}
              <span className="text-gradient">المحتوى</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={heroInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="body-lg max-w-xl mx-auto"
            >
              ريلز، تغطيات، لقاءات وأعمال إعلامية — تجربة بصرية متكاملة
            </motion.p>
          </div>
        </section>

        {/* FILTER */}
        <div className="bg-white border-b border-[#E5E7EB] sticky top-16 md:top-[4.5rem] z-30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center gap-2 py-3 overflow-x-auto scrollbar-hide" dir="rtl">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setActive(cat.id)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-bold whitespace-nowrap border transition-all duration-250 ${
                    active === cat.id
                      ? 'filter-active'
                      : 'border-[#E5E7EB] text-[#4B5563] hover:border-[#2563EB] hover:text-[#2563EB] bg-white'
                  }`}
                >
                  <Icon icon={cat.icon} className="w-4 h-4" />
                  {cat.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* GRID */}
        <section ref={gridRef} className="py-14">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" dir="rtl">
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial="hidden"
                animate={gridInView ? 'visible' : 'hidden'}
                variants={stagger}
                className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5"
              >
                {filtered.map((item) => (
                  <motion.article
                    key={item.id}
                    variants={fadeUp}
                    transition={{ duration: 0.4 }}
                    className="card-hover overflow-hidden group cursor-pointer"
                    whileHover={{ y: -5, transition: { duration: 0.22 } }}
                  >
                    {/* Image */}
                    <div className="relative h-56 overflow-hidden">
                      <img
                        src={item.img}
                        alt={item.title}
                        className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#111827]/50 to-transparent" />
                      {/* Play overlay */}
                      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="w-12 h-12 rounded-full bg-white shadow-lg flex items-center justify-center">
                          <Icon icon="mdi:play" className="w-6 h-6 text-[#2563EB] mr-[-2px]" />
                        </div>
                      </div>
                    </div>

                    {/* Info */}
                    <div className="p-5">
                      <h3 className="text-[#111827] font-black text-base mb-3 line-clamp-2">{item.title}</h3>
                      <div className="flex items-center gap-4 text-xs font-bold text-[#9CA3AF] border-t border-[#F3F4F6] pt-3">
                        <span className="flex items-center gap-1">
                          <Icon icon="mdi:eye-outline" className="w-3.5 h-3.5 text-[#F43F5E]" />
                          {item.views}
                        </span>
                        <span className="flex items-center gap-1">
                          <Icon icon="mdi:heart-outline" className="w-3.5 h-3.5 text-[#2563EB]" />
                          {item.likes}
                        </span>
                        <span className="mr-auto text-[#2563EB] text-[10px] uppercase tracking-wider">
                          {categories.find((c) => c.id === item.cat)?.label}
                        </span>
                      </div>
                    </div>
                  </motion.article>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>
        </section>

        <Footer />
      </div>
    </PageWrapper>
  );
}

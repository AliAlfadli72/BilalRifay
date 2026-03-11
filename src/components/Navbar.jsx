import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Icon } from '@iconify/react';
import { motion, AnimatePresence } from 'framer-motion';

const navLinks = [
  { href: '/', label: 'الرئيسية' },
  { href: '/about', label: 'نبذة' },
  { href: '/content', label: 'المحتوى' },
  { href: '/coverage', label: 'التغطيات' },
  { href: '/contact', label: 'تواصل' },
];

const socials = [
  { icon: 'mdi:instagram', href: 'https://instagram.com/bilal.rifay', label: 'Instagram', color: '#2563EB' },
  { icon: 'mdi:youtube', href: 'https://youtube.com', label: 'YouTube', color: '#FF0000' },
  { icon: 'simple-icons:tiktok', href: 'https://tiktok.com', label: 'TikTok', color: '#111827' },
  { icon: 'mdi:whatsapp', href: 'https://wa.me/963940589052', label: 'WhatsApp', color: '#25D366' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 16);
    window.addEventListener('scroll', fn);
    return () => window.removeEventListener('scroll', fn);
  }, []);

  useEffect(() => { setMobileOpen(false); }, [location]);

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.55, ease: 'easeOut' }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-400 ${
          scrolled ? 'bg-white/95 backdrop-blur-xl border-b border-[#E5E7EB] shadow-nav' : 'bg-white/80 backdrop-blur-sm'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center h-16 md:h-18 gap-4">

            {/* Logo — rightmost in RTL */}
            <Link to="/" className="flex items-center gap-2.5 group flex-shrink-0">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-[#2563EB] to-[#F43F5E] flex items-center justify-center shadow-primary-glow">
                <span className="text-white font-black text-sm leading-none">ب</span>
              </div>
              <div className="leading-none">
                <div className="text-[#111827] font-black text-sm tracking-tight">بلال رفاعي</div>
                <div className="text-[#2563EB] text-[9px] font-bold tracking-[0.15em] uppercase">BILAL REFAIE</div>
              </div>
            </Link>

            {/* Desktop nav — center */}
            <nav className="hidden md:flex items-center gap-0.5 mx-auto">
              {navLinks.map((link) => {
                const active = location.pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    to={link.href}
                    className={`relative px-4 py-2 text-sm font-bold rounded-xl transition-all duration-250 ${
                      active
                        ? 'text-[#2563EB]'
                        : 'text-[#4B5563] hover:text-[#111827] hover:bg-[#F3F4F6]'
                    }`}
                  >
                    {active && (
                      <motion.span
                        layoutId="navPill"
                        className="absolute inset-0 bg-[#EFF6FF] rounded-xl"
                        style={{ zIndex: -1 }}
                      />
                    )}
                    {link.label}
                  </Link>
                );
              })}
            </nav>

            {/* Social + CTA */}
            <div className="hidden md:flex items-center gap-2 flex-shrink-0">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="w-8 h-8 flex items-center justify-center rounded-lg text-[#9CA3AF] hover:text-[#2563EB] hover:bg-[#EFF6FF] transition-all duration-250"
                >
                  <Icon icon={s.icon} className="w-4.5 h-4.5" />
                </a>
              ))}
              <Link
                to="/contact"
                className="mr-2 btn-primary text-sm !px-5 !py-2"
              >
                تواصل الآن
              </Link>
            </div>

            {/* Mobile toggle */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="md:hidden mr-auto w-9 h-9 flex items-center justify-center rounded-xl border border-[#E5E7EB] text-[#4B5563] hover:border-[#2563EB] hover:text-[#2563EB] transition-all"
              aria-label="القائمة"
            >
              <Icon icon={mobileOpen ? 'mdi:close' : 'mdi:menu'} className="w-5 h-5" />
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="fixed top-16 left-0 right-0 z-40 bg-white/98 backdrop-blur-xl border-b border-[#E5E7EB] shadow-xl p-4"
          >
            <div className="flex flex-col gap-1 mb-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  className={`px-4 py-3 rounded-xl text-sm font-bold transition-all ${
                    location.pathname === link.href
                      ? 'bg-[#EFF6FF] text-[#2563EB]'
                      : 'text-[#4B5563] hover:bg-[#F3F4F6] hover:text-[#111827]'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </div>
            <div className="flex items-center gap-2 pt-4 border-t border-[#E5E7EB]">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 flex items-center justify-center rounded-lg border border-[#E5E7EB] text-[#9CA3AF] hover:text-[#2563EB] hover:border-[#2563EB] transition-all"
                  aria-label={s.label}
                >
                  <Icon icon={s.icon} className="w-4.5 h-4.5" />
                </a>
              ))}
              <Link to="/contact" className="btn-primary mr-auto text-sm !py-2 !px-4">
                تواصل الآن
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
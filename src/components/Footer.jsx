import { Link } from 'react-router-dom';
import { Icon } from '@iconify/react';

const navLinks = [
  { href: '/', label: 'الرئيسية' },
  { href: '/about', label: 'نبذة' },
  { href: '/content', label: 'المحتوى' },
  { href: '/coverage', label: 'التغطيات' },
  { href: '/contact', label: 'تواصل' },
];

const socials = [
  { icon: 'mdi:instagram', href: 'https://instagram.com/bilal.rifay', label: 'Instagram' },
  { icon: 'mdi:youtube', href: 'https://youtube.com', label: 'YouTube' },
  { icon: 'simple-icons:tiktok', href: 'https://tiktok.com', label: 'TikTok' },
  { icon: 'mdi:whatsapp', href: 'https://wa.me/963940589052', label: 'WhatsApp' },
];

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-[#111827] text-white mt-24">
      {/* Top accent */}
      <div className="h-1 bg-gradient-to-l from-[#2563EB] to-[#F43F5E]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid md:grid-cols-3 gap-10 mb-12">

          {/* Brand */}
          <div>
            <Link to="/" className="inline-flex items-center gap-3 mb-5">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#2563EB] to-[#F43F5E] flex items-center justify-center">
                <span className="text-white font-black text-base">ب</span>
              </div>
              <div>
                <div className="text-white font-black text-base">بلال رفاعي</div>
                <div className="text-[#2563EB] text-[10px] font-bold tracking-[0.15em] uppercase">BILAL REFAIE</div>
              </div>
            </Link>
            <p className="text-white/50 text-sm leading-relaxed max-w-xs">
              صحفي وصانع محتوى رقمي — يجمع بين الحضور الإعلامي والتأثير الرقمي.
            </p>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-white/60 text-xs uppercase tracking-widest font-bold mb-5">روابط سريعة</h3>
            <ul className="space-y-2.5">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-white/50 hover:text-[#2563EB] text-sm transition-colors flex items-center gap-2"
                  >
                    <span className="w-1 h-1 rounded-full bg-[#2563EB]/50" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social + Contact */}
          <div>
            <h3 className="text-white/60 text-xs uppercase tracking-widest font-bold mb-5">تابعني</h3>
            <div className="flex gap-2 mb-6">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="w-10 h-10 rounded-xl border border-white/10 flex items-center justify-center text-white/50 hover:text-[#2563EB] hover:border-[#2563EB]/50 transition-all"
                >
                  <Icon icon={s.icon} className="w-5 h-5" />
                </a>
              ))}
            </div>
            <div className="space-y-2 text-sm text-white/40">
              <div className="flex items-center gap-2">
                <Icon icon="mdi:map-marker-outline" className="w-4 h-4 text-[#2563EB]" />
                الإمارات • سوريا • تركيا
              </div>
              <div className="flex items-center gap-2">
                <Icon icon="mdi:phone-outline" className="w-4 h-4 text-[#2563EB]" />
                +963 940 589 052
              </div>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-white/8 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-white/30 text-xs">
            © {year} بلال رفاعي — Bilal Refaie. جميع الحقوق محفوظة.
          </p>
          <div className="flex items-center gap-2 text-xs text-white/30">
            <span className="w-2 h-2 rounded-full bg-green-400 shadow-[0_0_6px_rgba(74,222,128,0.8)]" />
            متاح للتعاون الإعلامي
          </div>
        </div>
      </div>
    </footer>
  );
}
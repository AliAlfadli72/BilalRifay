export default function Navbar() {
  return (
    <nav dir="rtl" className="fixed top-0 w-full z-50 backdrop-blur-xl bg-black/60 border-b border-white/5">
      <div className="max-w-6xl mx-auto flex justify-between items-center p-5">
        <h1 className="text-xl font-black bg-gradient-to-r from-pink-500 to-orange-400 bg-clip-text text-transparent tracking-tighter">
          بلال رفاعي
        </h1>

        <div className="flex gap-6 md:gap-10 text-sm font-bold text-slate-400">
          <a href="#about" className="hover:text-pink-500 transition-colors uppercase tracking-widest">نبذة</a>
          <a href="#services" className="hover:text-pink-500 transition-colors uppercase tracking-widest">خدماتي</a>
          <a href="#contact" className="hover:text-pink-500 transition-colors uppercase tracking-widest">تواصل</a>
        </div>
      </div>
    </nav>
  )
}
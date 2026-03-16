import Link from 'next/link';
import { Dispatch, SetStateAction, useState } from 'react';
import { Menu, X } from 'lucide-react';

interface NavbarProps {
  language: 'es' | 'en';
  setLanguage: Dispatch<SetStateAction<'es' | 'en'>>;
  t: {
    prop: string;
    specs: string;
    cta: string;
  };
}

export default function Navbar({ language, setLanguage, t }: NavbarProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 bg-white/90 backdrop-blur-md border-b border-[#002D72]/10">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <Link href="/" className="text-xl font-black tracking-tighter uppercase text-[#002D72]">
          Valle Muégano
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          <Link href="#value" className="text-xs uppercase tracking-widest text-black/60 hover:text-[#002D72] transition-colors font-bold">
            {t.prop}
          </Link>
          <Link href="#specs" className="text-xs uppercase tracking-widest text-black/60 hover:text-[#002D72] transition-colors font-bold">
            {t.specs}
          </Link>
          
          <div className="flex items-center border border-[#002D72]/20 rounded-full p-1 bg-[#F0F4F8]/50">
            <button 
              onClick={() => setLanguage('es')}
              className={`px-3 py-1 text-[10px] font-bold transition-all rounded-full ${language === 'es' ? 'bg-[#002D72] text-white' : 'text-[#002D72]/50 hover:text-[#002D72]'}`}
            >
              ES
            </button>
            <button 
              onClick={() => setLanguage('en')}
              className={`px-3 py-1 text-[10px] font-bold transition-all rounded-full ${language === 'en' ? 'bg-[#002D72] text-white' : 'text-[#002D72]/50 hover:text-[#002D72]'}`}
            >
              EN
            </button>
          </div>

          <button className="bg-[#002D72] text-white text-[10px] uppercase font-bold tracking-[0.2em] px-6 py-3 hover:bg-[#001D4A] transition-all duration-300">
            {t.cta}
          </button>
        </div>

        {/* Mobile menu button */}
        <div className="md:hidden flex items-center gap-4">
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-[#002D72] p-2"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div className={`md:hidden absolute top-20 left-0 w-full bg-white border-b border-[#002D72]/10 transition-all duration-300 overflow-hidden ${isMenuOpen ? 'max-h-[400px] opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className="p-6 flex flex-col gap-6">
          <Link 
            href="#value" 
            onClick={() => setIsMenuOpen(false)}
            className="text-xs uppercase tracking-widest text-black/60 hover:text-[#002D72] transition-colors font-bold"
          >
            {t.prop}
          </Link>
          <Link 
            href="#specs" 
            onClick={() => setIsMenuOpen(false)}
            className="text-xs uppercase tracking-widest text-black/60 hover:text-[#002D72] transition-colors font-bold"
          >
            {t.specs}
          </Link>
          
          <div className="flex items-center w-fit border border-[#002D72]/20 rounded-full p-1 bg-[#F0F4F8]/50">
            <button 
              onClick={() => setLanguage('es')}
              className={`px-4 py-2 text-[10px] font-bold transition-all rounded-full ${language === 'es' ? 'bg-[#002D72] text-white' : 'text-[#002D72]/50 hover:text-[#002D72]'}`}
            >
              ES
            </button>
            <button 
              onClick={() => setLanguage('en')}
              className={`px-4 py-2 text-[10px] font-bold transition-all rounded-full ${language === 'en' ? 'bg-[#002D72] text-white' : 'text-[#002D72]/50 hover:text-[#002D72]'}`}
            >
              EN
            </button>
          </div>

          <button className="w-full bg-[#002D72] text-white text-[10px] uppercase font-bold tracking-[0.2em] px-6 py-4 hover:bg-[#001D4A] transition-all duration-300">
            {t.cta}
          </button>
        </div>
      </div>
    </nav>
  );
}

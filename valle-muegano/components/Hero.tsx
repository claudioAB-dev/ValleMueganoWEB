import Image from 'next/image';
import { ArrowRight } from 'lucide-react';

interface HeroProps {
  t: {
    tag: string;
    title1: string;
    title2: string;
    title3: string;
    desc: string;
    primaryCTA: string;
    secondaryCTA: string;
  };
}

export default function Hero({ t }: HeroProps) {
  return (
    <section className="relative min-h-[90vh] flex flex-col items-center justify-center section-padding pt-32 overflow-hidden bg-white">
      <div className="absolute inset-0 z-0 opacity-[0.03]">
        <Image 
          src="/assets/hero.jpg" 
          alt="Textura de Muégano" 
          fill 
          className="object-cover grayscale"
        />
      </div>
      
      <div className="relative z-10 max-w-5xl w-full text-center">
        <p className="text-[#002D72] text-xs uppercase tracking-[0.4em] font-bold mb-6 animate-fade-in">
          {t.tag}
        </p>
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter uppercase mb-8 leading-[0.9] text-[#1A1A1A]">
          {t.title1} <br />
          <span className="text-[#002D72]">{t.title2}</span> <br />
          {t.title3}
        </h1>
        <p className="text-lg md:text-xl text-neutral-600 max-w-2xl mx-auto mb-12 font-medium leading-relaxed">
          {t.desc}
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
          <button className="w-full sm:w-auto bg-[#002D72] text-white px-10 py-5 text-xs font-bold uppercase tracking-widest hover:bg-[#001A44] transition-all flex items-center justify-center gap-2 group shadow-xl shadow-blue-900/10">
            {t.primaryCTA}
            <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
          </button>
          <button className="w-full sm:w-auto border border-[#002D72]/20 text-[#002D72] px-10 py-5 text-xs font-bold uppercase tracking-widest hover:bg-[#002D72]/5 transition-all">
            {t.secondaryCTA}
          </button>
        </div>
      </div>

      <div className="mt-20 relative w-full aspect-[21/9] max-w-7xl border border-[#002D72]/10 bg-[#F0F4F8] talavera-border overflow-hidden">
        <Image 
          src="/assets/detail.webp" 
          alt="Valle Muégano Producto" 
          fill 
          className="object-cover object-center"
        />
        <div className="absolute inset-x-0 bottom-0 h-1/4 bg-gradient-to-t from-white to-transparent"></div>
      </div>
    </section>
  );
}

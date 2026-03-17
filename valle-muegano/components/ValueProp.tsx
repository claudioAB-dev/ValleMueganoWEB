interface ValuePropProps {
  t: {
    title1: string;
    title2: string;
    p1: string;
    p2: string;
    badge1_tag: string;
    badge1_title: string;
    badge2_tag: string;
    badge2_title: string;
  };
}

export default function ValueProp({ t }: ValuePropProps) {
  return (
    <section id="value" className="py-24 md:py-32 bg-[#FAFAFA] border-y border-slate-100">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
        <div>
          <h2 className="text-4xl md:text-6xl font-black tracking-tighter uppercase mb-10 leading-[0.9] text-[#1A1A1A]">
            {t.title1} <br />
            <span className="text-[#002D72]">{t.title2}</span>
          </h2>
          <div className="space-y-8 text-lg text-slate-600 font-medium leading-[1.8] opacity-90">
            <p>
              {t.p1}
            </p>
            <p>
              {t.p2}
            </p>
          </div>
        </div>
        
        <div className="grid grid-cols-2 gap-8 h-full">
          <div className="aspect-[3/4] bg-white border border-blue-100/30 relative overflow-hidden group shadow-2xl shadow-blue-900/5 hover:shadow-blue-900/10 transition-all duration-500 hover:-translate-y-2">
            <div className="absolute inset-0 bg-gradient-to-tr from-white to-transparent/5 z-10"></div>
            <div className="absolute bottom-8 left-8 z-20">
              <span className="text-[10px] uppercase tracking-[0.3em] text-[#002D72]/60 font-bold mb-2 block">{t.badge1_tag}</span>
              <p className="font-black text-xl text-[#1A1A1A] uppercase tracking-tighter leading-none">{t.badge1_title}</p>
            </div>
          </div>
          <div className="aspect-[3/4] bg-white border border-blue-100/30 mt-12 relative overflow-hidden group shadow-2xl shadow-blue-900/5 hover:shadow-blue-900/10 transition-all duration-500 hover:-translate-y-2">
             <div className="absolute inset-0 bg-gradient-to-tr from-white to-transparent/5 z-10"></div>
            <div className="absolute bottom-8 left-8 z-20">
              <span className="text-[10px] uppercase tracking-[0.3em] text-[#002D72]/60 font-bold mb-2 block">{t.badge2_tag}</span>
              <p className="font-black text-xl text-[#1A1A1A] uppercase tracking-tighter leading-none">{t.badge2_title}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

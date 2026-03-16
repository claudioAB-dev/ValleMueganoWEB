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
    <section id="value" className="section-padding bg-[#FAFAFA]">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        <div>
          <h2 className="text-4xl md:text-5xl font-black tracking-tighter uppercase mb-8 leading-[1.1] text-[#1A1A1A]">
            {t.title1} <br />
            <span className="text-[#002D72]">{t.title2}</span>
          </h2>
          <div className="space-y-6 text-lg text-neutral-600 font-medium leading-relaxed">
            <p>
              {t.p1}
            </p>
            <p>
              {t.p2}
            </p>
          </div>
        </div>
        
        <div className="grid grid-cols-2 gap-4 h-full">
          <div className="aspect-[3/4] bg-white border border-[#002D72]/10 relative overflow-hidden group talavera-border">
            <div className="absolute inset-0 bg-gradient-to-tr from-white to-transparent/10 z-10"></div>
            <div className="absolute bottom-6 left-6 z-20">
              <span className="text-xs uppercase tracking-widest text-[#002D72]/60 font-bold">{t.badge1_tag}</span>
              <p className="font-bold text-[#1A1A1A] uppercase tracking-tighter">{t.badge1_title}</p>
            </div>
          </div>
          <div className="aspect-[3/4] bg-white border border-[#002D72]/10 mt-8 relative overflow-hidden group talavera-border">
             <div className="absolute inset-0 bg-gradient-to-tr from-white to-transparent/10 z-10"></div>
            <div className="absolute bottom-6 left-6 z-20">
              <span className="text-xs uppercase tracking-widest text-[#002D72]/60 font-bold">{t.badge2_tag}</span>
              <p className="font-bold text-[#1A1A1A] uppercase tracking-tighter">{t.badge2_title}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

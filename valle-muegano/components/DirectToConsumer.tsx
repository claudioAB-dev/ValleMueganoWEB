import { ExternalLink } from 'lucide-react';

interface DirectToConsumerProps {
  t: {
    title: string;
    desc: string;
    cta: string;
  };
}

export default function DirectToConsumer({ t }: DirectToConsumerProps) {
  return (
    <section className="py-24 md:py-32 bg-[#002D72] text-white overflow-hidden relative px-6">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white opacity-[0.03] rounded-full blur-3xl -mr-64 -mt-64 translate-x-1/4"></div>
      
      <div className="max-w-7xl mx-auto relative z-10 flex flex-col md:flex-row items-center justify-between gap-16">
        <div className="max-w-2xl text-center md:text-left">
          <h2 className="text-4xl md:text-6xl font-black tracking-tighter uppercase mb-8 leading-[0.95]">
            {t.title}
          </h2>
          <p className="text-xl md:text-2xl text-white/70 font-medium leading-relaxed mb-8 max-w-xl">
            {t.desc}
          </p>
          <div className="h-0.5 w-24 bg-white/20 mx-auto md:mx-0"></div>
        </div>
        
        <div className="flex-shrink-0 w-full md:w-auto">
          <button className="w-full md:w-auto bg-[#FF9900] text-black hover:bg-[#FFB033] px-14 py-7 text-[11px] font-black uppercase tracking-[0.3em] transition-all duration-300 flex items-center justify-center gap-4 shadow-[0_20px_50px_rgba(255,153,0,0.2)] hover:shadow-[0_30px_60px_rgba(255,153,0,0.3)] group hover:scale-105 active:scale-95 hover:-translate-y-1">
            {t.cta}
            <ExternalLink size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  );
}

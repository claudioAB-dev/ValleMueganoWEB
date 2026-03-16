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
    <section className="section-padding bg-[#002D72] text-white overflow-hidden relative">
      {/* Background patterns could go here */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -mr-32 -mt-32"></div>
      
      <div className="max-w-7xl mx-auto relative z-10 flex flex-col md:flex-row items-center justify-between gap-12">
        <div className="max-w-2xl">
          <h2 className="text-3xl md:text-5xl font-black tracking-tighter uppercase mb-6 leading-tight">
            {t.title}
          </h2>
          <p className="text-xl text-white/80 font-medium leading-relaxed mb-4">
            {t.desc}
          </p>
          <div className="h-1 w-20 bg-white opacity-20"></div>
        </div>
        
        <div className="flex-shrink-0">
          <button className="bg-[#FF9900] text-black hover:bg-[#FF8C00] px-12 py-5 text-sm font-black uppercase tracking-widest rounded-sm transition-all flex items-center gap-3 shadow-2xl shadow-orange-950/20 group">
            {t.cta}
            <ExternalLink size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  );
}

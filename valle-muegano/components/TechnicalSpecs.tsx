import { Package, Clock } from 'lucide-react';

interface TechnicalSpecsProps {
  t: {
    tag: string;
    title: string;
    items: {
      title: string;
      desc: string;
    }[];
  };
}

export default function TechnicalSpecs({ t }: TechnicalSpecsProps) {
  const icons = [
    <Target key="target" size={24} className="text-[#002D72]" />,
    <Clock key="clock" size={24} className="text-[#002D72]" />,
    <Package key="package" size={24} className="text-[#002D72]" />
  ];

  return (
    <section id="specs" className="py-24 md:py-32 bg-white px-6">
      <div className="max-w-7xl mx-auto">
        <div className="mb-20 text-center md:text-left">
          <span className="text-[#002D72] text-[10px] uppercase tracking-[0.6em] font-bold block mb-6 opacity-70">{t.tag}</span>
          <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter text-[#1A1A1A] leading-tight">{t.title}</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border-t border-slate-100">
          {t.items.map((item, index) => (
            <div key={index} className="p-10 md:p-16 border-b md:border-b-0 md:border-r border-slate-100 last:border-r-0 hover:bg-[#F8FAFC] transition-all duration-500 group relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-[2px] bg-[#002D72] scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
              <div className="mb-10 p-5 border border-slate-100 w-fit group-hover:border-[#002D72]/30 transition-all duration-500 group-hover:shadow-lg shadow-blue-900/5 bg-white">
                {icons[index]}
              </div>
              <h3 className="text-[10px] uppercase tracking-[0.3em] font-black text-[#002D72] mb-6">{item.title}</h3>
              <p className="text-slate-600 text-[15px] leading-loose font-medium opacity-80">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Target({ size, className }: { size: number, className: string }) {
    return (
        <svg 
            xmlns="http://www.w3.org/2000/svg" 
            width={size} 
            height={size} 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            className={className}
        >
            <circle cx="12" cy="12" r="10" />
            <circle cx="12" cy="12" r="6" />
            <circle cx="12" cy="12" r="2" />
        </svg>
    )
}

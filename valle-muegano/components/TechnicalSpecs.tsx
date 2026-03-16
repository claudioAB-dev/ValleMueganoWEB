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
    <section id="specs" className="section-padding bg-white border-y border-[#002D72]/10">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <span className="text-[#002D72] text-[10px] uppercase tracking-[0.5em] font-bold block mb-4">{t.tag}</span>
          <h2 className="text-3xl font-black uppercase tracking-tighter text-[#1A1A1A]">{t.title}</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border-l border-[#002D72]/10">
          {t.items.map((item, index) => (
            <div key={index} className="p-12 border-r border-b md:border-b-0 border-[#002D72]/10 hover:bg-[#F0F4F8]/30 transition-colors group">
              <div className="mb-8 p-4 border border-[#002D72]/10 w-fit group-hover:border-[#002D72] transition-colors">
                {icons[index]}
              </div>
              <h3 className="text-lg font-bold uppercase tracking-widest text-[#002D72] mb-4">{item.title}</h3>
              <p className="text-neutral-500 text-sm leading-relaxed">
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

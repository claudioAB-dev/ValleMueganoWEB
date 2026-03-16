interface FooterProps {
  t: {
    desc: string;
    rights: string;
    contact: string;
    legal: string;
    privacy: string;
  };
}

export default function Footer({ t }: FooterProps) {
  return (
    <footer className="py-20 px-6 md:px-24 bg-black border-t border-white/5">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-12">
        <div>
          <h3 className="text-lg font-black uppercase tracking-tighter text-white mb-2">Valle Muégano</h3>
          <p className="text-xs text-neutral-600 uppercase tracking-widest leading-loose">
            {t.desc} <br />
            {t.rights}
          </p>
        </div>
        
        <div className="flex flex-col md:flex-row gap-8 md:gap-16">
          <div className="space-y-4">
            <span className="text-[10px] uppercase tracking-widest font-bold text-neutral-500">{t.contact}</span>
            <p className="text-xs text-neutral-400">hola@vallemuegano.com</p>
          </div>
          <div className="space-y-4">
            <span className="text-[10px] uppercase tracking-widest font-bold text-neutral-500">{t.legal}</span>
            <p className="text-xs text-neutral-400 hover:text-white transition-colors cursor-pointer">{t.privacy}</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

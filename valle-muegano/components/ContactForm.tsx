'use client';

export default function ContactForm() {
  return (
    <section id="contact" className="section-padding bg-[#FFFFFF]">
      <div className="max-w-3xl mx-auto border border-[#002D72]/10 bg-[#F0F4F8]/30 p-12 md:p-20 shadow-2xl relative overflow-hidden talavera-border">
        <div className="absolute top-0 left-0 w-1 h-full bg-[#002D72]"></div>
        
        <div className="mb-16">
          <h2 className="text-4xl font-black uppercase tracking-tighter text-[#1A1A1A] mb-4">Consulta Corporativa</h2>
          <p className="text-neutral-600 font-medium">
            Solicite información técnica o un muestrario para su hotel o restaurante. Un asesor especializado responderá a su solicitud.
          </p>
        </div>

        <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-2">
              <label className="text-[10px] uppercase tracking-[0.2em] font-bold text-[#002D72]">Nombre Completo</label>
              <input 
                type="text" 
                placeholder="Ej. Carlos Mendoza"
                className="w-full bg-transparent border-b border-[#002D72]/20 py-3 text-[#1A1A1A] focus:outline-none focus:border-[#002D72] transition-colors placeholder:text-neutral-400"
              />
            </div>
            <div className="space-y-2">
              <label className="text-[10px] uppercase tracking-[0.2em] font-bold text-[#002D72]">Cargo</label>
              <input 
                type="text" 
                placeholder="Ej. Gerente de Alimentos y Bebidas"
                className="w-full bg-transparent border-b border-[#002D72]/20 py-3 text-[#1A1A1A] focus:outline-none focus:border-[#002D72] transition-colors placeholder:text-neutral-400"
              />
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-[10px] uppercase tracking-[0.2em] font-bold text-[#002D72]">Establecimiento</label>
            <input 
              type="text" 
              placeholder="Nombre del Hotel o Restaurante"
              className="w-full bg-transparent border-b border-[#002D72]/20 py-3 text-[#1A1A1A] focus:outline-none focus:border-[#002D72] transition-colors placeholder:text-neutral-400"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-2">
              <label className="text-[10px] uppercase tracking-[0.2em] font-bold text-[#002D72]">Correo Corporativo</label>
              <input 
                type="email" 
                placeholder="ejemplo@corporativo.com"
                className="w-full bg-transparent border-b border-[#002D72]/20 py-3 text-[#1A1A1A] focus:outline-none focus:border-[#002D72] transition-colors placeholder:text-neutral-400"
              />
            </div>
            <div className="space-y-2">
              <label className="text-[10px] uppercase tracking-[0.2em] font-bold text-[#002D72]">Ciudad</label>
              <input 
                type="text" 
                placeholder="Ej. CDMX, Cancún, Riviera Maya"
                className="w-full bg-transparent border-b border-[#002D72]/20 py-3 text-[#1A1A1A] focus:outline-none focus:border-[#002D72] transition-colors placeholder:text-neutral-400"
              />
            </div>
          </div>

          <button className="w-full bg-[#002D72] text-white py-6 text-xs font-black uppercase tracking-[0.3em] hover:bg-[#001D4A] transition-all duration-500 mt-8 shadow-xl shadow-blue-900/10">
            Contactar a un asesor
          </button>
        </form>
      </div>
    </section>
  );
}

'use client';

import { useState } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import ValueProp from '@/components/ValueProp';
import TechnicalSpecs from '@/components/TechnicalSpecs';
import ContactForm from '@/components/ContactForm';
import DirectToConsumer from '@/components/DirectToConsumer';
import Footer from '@/components/Footer';

const translations = {
  es: {
    nav: {
      prop: "Propuesta",
      specs: "Especificaciones",
      cta: "Solicitar Muestrario"
    },
    hero: {
      tag: "Artesanía de Tehuacán · Patrimonio Gastronómico",
      title1: "La tradición",
      title2: "elevada a la",
      title3: "Alta Mesa.",
      desc: "Suministramos identidad local y sofisticación para los hoteles y restaurantes más exigentes del país. Calidad premium en cada pieza.",
      primaryCTA: "Solicitar Información",
      secondaryCTA: "Ver Catálogo B2B"
    },
    value: {
      title1: "Más que un dulce,",
      title2: "una distinción local.",
      p1: "Tanto en un turndown service de lujo como en el cierre de una cena de autor, el detalle final define la memoria del comensal y el huésped.",
      p2: "Valle Muégano es el aliado estratégico para restaurantes y hoteles que buscan ofrecer una experiencia de identidad poblana con estándares internacionales de calidad y frescura.",
      badge1_tag: "Reserva",
      badge1_title: "Artesanal",
      badge2_tag: "Destino",
      badge2_title: "Alta Gama"
    },
    specs: {
      tag: "Ingeniería del Sabor",
      title: "Especificaciones B2B",
      items: [
        {
          title: "Estandarización",
          desc: "Dimensiones y gramaje uniformes para asegurar una experiencia consistente en cada habitación o mesa de postres."
        },
        {
          title: "Vida de Anaquel",
          desc: "90 días de conservación óptima, facilitando el manejo de inventarios en cocinas y almacenes operativos."
        },
        {
          title: "Empaque Listos",
          desc: "Diseños optimizados para facilitar el servicio inmediato o la venta controlada en centros de consumo."
        }
      ]
    },
    dtc: {
      title: "¿Probaste Valle Muégano en tu viaje?",
      desc: "Lleva la tradición de Tehuacán directamente a tu mesa. Recibe la misma frescura y calidad premium en la puerta de tu casa.",
      cta: "Comprar en Amazon"
    },
    footer: {
      desc: "Tradición de Tehuacán para el mundo.",
      rights: "© 2026 Valle Muégano. Todos los derechos reservados.",
      contact: "Contacto",
      legal: "Legal",
      privacy: "Aviso de Privacidad"
    }
  },
  en: {
    nav: {
      prop: "Proposition",
      specs: "Specifications",
      cta: "Request Samples"
    },
    hero: {
      tag: "Tehuacán Craftsmanship · Gastronomic Heritage",
      title1: "Tradition",
      title2: "elevated to the",
      title3: "High Table.",
      desc: "We provide local identity and sophistication for the country's most demanding hotels and restaurants. Premium quality in every piece.",
      primaryCTA: "Request Information",
      secondaryCTA: "View B2B Catalog"
    },
    value: {
      title1: "More than a sweet,",
      title2: "a local distinction.",
      p1: "Whether in a luxury turndown service or the closing of a signature dinner, the final detail defines the guest's memory.",
      p2: "Valle Muégano is the strategic ally for restaurants and hotels seeking to offer a Pueblan identity experience with international standards of quality and freshness.",
      badge1_tag: "Reserve",
      badge1_title: "Artisanal",
      badge2_tag: "Destination",
      badge2_title: "High End"
    },
    specs: {
      tag: "Flavor Engineering",
      title: "B2B Specifications",
      items: [
        {
          title: "Standardization",
          desc: "Uniform dimensions and weight to ensure a consistent experience in every room or dessert table."
        },
        {
          title: "Shelf Life",
          desc: "90 days of optimal preservation, facilitating inventory management in professional kitchens and warehouses."
        },
        {
          title: "Ready Packaging",
          desc: "Optimized designs to facilitate immediate service or controlled sale in consumption centers."
        }
      ]
    },
    dtc: {
      title: "Did you try Valle Muégano on your trip?",
      desc: "Bring the Tehuacán tradition directly to your table. Receive the same freshness and premium quality at your doorstep.",
      cta: "Buy on Amazon"
    },
    footer: {
      desc: "Tehuacán tradition for the world.",
      rights: "© 2026 Valle Muégano. All rights reserved.",
      contact: "Contact",
      legal: "Legal",
      privacy: "Privacy Policy"
    }
  }
};

export default function Home() {
  const [language, setLanguage] = useState<'es' | 'en'>('es');
  const t = translations[language];

  return (
    <main className="min-h-screen bg-background">
      <Navbar language={language} setLanguage={setLanguage} t={t.nav} />
      <Hero t={t.hero} />
      <ValueProp t={t.value} />
      <TechnicalSpecs t={t.specs} />
      <ContactForm />
      <DirectToConsumer t={t.dtc} />
      <Footer t={t.footer} />
    </main>
  );
}

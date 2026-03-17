'use client'
import Image from 'next/image'
import { useLang } from '@/context/LanguageContext'
import { t } from '@/lib/translations'

export default function ValueSection() {
  const { lang } = useLang()
  const tx = t[lang]

  return (
    <section id="value">
      <div className="container value-section">
        <div className="value-image-wrap reveal hover-scale">
          <div className="value-image">
            <Image
              src="/assets/detail.webp"
              alt="Valle Muégano Producto"
              fill
              quality={80}
              style={{ objectFit: 'cover' }}
              className="img-target"
            />
          </div>
          <div className="value-image-border"></div>
        </div>
        
        <div className="value-content reveal">
          <span className="subtitle-label">{tx.value.label}</span>
          <h2>{tx.value.h2}</h2>
          
          <p>
            {tx.value.p1}
          </p>
          <p style={{ marginTop: '20px' }}>
            {tx.value.p2}
          </p>

          <div className="tag-chips">
            <span className="chip">Reserva</span>
            <span className="chip">Artesanal</span>
            <span className="chip">Destino</span>
            <span className="chip">Alta Gama</span>
            <span className="chip">Ingeniería del Sabor</span>
          </div>
        </div>
      </div>
    </section>
  )
}

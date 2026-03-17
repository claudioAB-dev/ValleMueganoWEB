'use client'
import { useLang } from '@/context/LanguageContext'
import { t } from '@/lib/translations'

export default function SpecsSection() {
  const { lang } = useLang()
  const tx = t[lang]

  return (
    <section id="specs" className="specs-bg">
      <div className="container">
        <div className="text-center reveal">
          <span className="subtitle-label">{tx.specs.label}</span>
          <h2 style={{ marginTop: '10px' }}>{tx.specs.h2}</h2>
        </div>

        <div className="specs-grid">
          {tx.specs.items.map((item, index) => (
            <div key={index} className="spec-item reveal">
              <span className="spec-num">{String(index + 1).padStart(2, '0')}</span>
              <div className="spec-content">
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

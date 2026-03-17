'use client'
import { useLang } from '@/context/LanguageContext'
import { t } from '@/lib/translations'

export default function AmazonSection() {
  const { lang } = useLang()
  const tx = t[lang]

  return (
    <section id="amazon" className="amazon-section no-decorator">
      <div className="container reveal">
        <span className="subtitle-label">{tx.amazon.label}</span>
        <h2 className="amazon-title">{tx.amazon.h2}</h2>
        <p style={{ maxWidth: '600px', margin: '0 auto 40px', color: 'var(--text-secondary)' }}>
          {tx.amazon.desc}
        </p>
        <a href="#" className="btn btn-ghost">{tx.amazon.cta} <span style={{ marginLeft: '10px' }}>→</span></a>
      </div>
    </section>
  )
}

'use client'
import { useLang } from '@/context/LanguageContext'
import { t } from '@/lib/translations'

export default function QuoteSection() {
  const { lang } = useLang()
  const tx = t[lang]

  return (
    <section className="quote-section no-decorator">
      <div className="container reveal">
        <p className="quote">{tx.quote}</p>
      </div>
    </section>
  )
}

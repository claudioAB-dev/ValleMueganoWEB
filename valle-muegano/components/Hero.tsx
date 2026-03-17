'use client'
import Image from 'next/image'
import { useLang } from '@/context/LanguageContext'
import { t } from '@/lib/translations'

export default function Hero() {
  const { lang } = useLang()
  const tx = t[lang]

  return (
    <header className="hero">
      <div className="hero-bg">
        <Image
          src="/assets/muegano-tehuacanero.jpg"
          alt="Textura de Muégano"
          fill
          priority
          quality={90}
          style={{ objectFit: 'cover', objectPosition: 'center' }}
          className="img-target"
        />
      </div>
      <div className="hero-content reveal">
        <div className="hero-title-wrap">
          <div className="hero-line"></div>
          <h1 dangerouslySetInnerHTML={{ __html: tx.hero.h1.replace(' - ', '<br />') }} />
          <div className="hero-line"></div>
        </div>

        <div className="hero-badge">
          {tx.hero.badge}
        </div>

        <p className="hero-desc">
          {tx.hero.desc}
        </p>

        <div className="hero-ctas">
          <button
            className="btn btn-solid"
            onClick={() =>
              document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth', block: 'start' })
            }
          >
            {tx.hero.cta1}
          </button>
          <a href="#" className="btn btn-ghost">{tx.hero.cta2}</a>
        </div>
      </div>
    </header>
  )
}

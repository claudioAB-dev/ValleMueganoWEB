'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import { useLang } from '@/context/LanguageContext'
import { t } from '@/lib/translations'

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const { lang, toggleLang } = useLang()
  const tx = t[lang]

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav id="navbar" className={isScrolled ? 'scrolled' : ''}>
      <div className="nav-container">

        {/* Links izquierda — ocultos en mobile */}
        <ul className="nav-links nav-links-left">
          <li><Link href="#value">{tx.nav.propuesta}</Link></li>
          <li className="nav-separator">·</li>
          <li><Link href="#specs">{tx.nav.specs}</Link></li>
        </ul>

        {/* Logo centrado */}
        <Link href="/" className="logo">Valle Muégano</Link>

        {/* Derecha: lang switch + CTA + hamburger */}
        <div className="nav-right">
          <button
            onClick={toggleLang}
            aria-label="Cambiar idioma"
            style={{
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '4px',
              padding: '4px 0',
            }}
          >
            <span className={`lang-option ${lang === 'es' ? 'lang-active' : ''}`}>ES</span>
            <span className="lang-divider"> · </span>
            <span className={`lang-option ${lang === 'en' ? 'lang-active' : ''}`}>EN</span>
          </button>

          <button
            className="subtitle-label nav-cta"
            onClick={() => {
              setMenuOpen(false)
              document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth', block: 'start' })
            }}
            style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 0 }}
          >
            {tx.nav.cta}
          </button>

          {/* Hamburger — solo visible en mobile */}
          <button
            className="hamburger"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Menú"
          >
            <span className={`ham-line ${menuOpen ? 'open' : ''}`} />
            <span className={`ham-line ${menuOpen ? 'open' : ''}`} />
            <span className={`ham-line ${menuOpen ? 'open' : ''}`} />
          </button>
        </div>

      </div>

      {/* Menú mobile desplegable */}
      <div className={`mobile-menu ${menuOpen ? 'mobile-menu-open' : ''}`}>
        <ul>
          <li><Link href="#value" onClick={() => setMenuOpen(false)}>{tx.nav.propuesta}</Link></li>
          <li><Link href="#specs" onClick={() => setMenuOpen(false)}>{tx.nav.specs}</Link></li>
          <li>
            <button
              className="mobile-menu-link"
              onClick={() => {
                setMenuOpen(false)
                document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth', block: 'start' })
              }}
              style={{
                display: 'block',
                width: '100%',
                textAlign: 'left',
                padding: '16px 0',
                fontFamily: 'var(--font-montserrat), sans-serif',
                fontSize: '12px',
                letterSpacing: '0.2em',
                textTransform: 'uppercase',
                color: 'var(--text-secondary)',
                background: 'none',
                border: 'none',
                cursor: 'pointer'
              }}
            >
              {tx.nav.cta}
            </button>
          </li>
        </ul>
      </div>
    </nav>
  )
}

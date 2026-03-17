'use client'
import { useLang } from '@/context/LanguageContext'
import { t } from '@/lib/translations'

export default function Footer() {
  const { lang } = useLang()
  const tx = t[lang]

  return (
    <footer>
      <div className="container">
        <p className="footer-tagline">{tx.footer.tagline}</p>
        
        <div className="footer-grid">
          <div className="footer-col">
            <span className="subtitle-label" style={{ display: 'block', marginBottom: '15px' }}>{tx.footer.location}</span>
            <p style={{ fontSize: '14px', color: 'var(--text-secondary)' }}>Tehuacán, Puebla<br />México</p>
          </div>
          <div className="footer-col">
            <span className="subtitle-label" style={{ display: 'block', marginBottom: '15px' }}>{tx.footer.contact}</span>
            <p style={{ fontSize: '14px', color: 'var(--text-secondary)' }}>
              <a href="mailto:hola@vallemuegano.com" style={{ color: 'inherit', textDecoration: 'none' }}>hola@vallemuegano.com</a><br />
              +52 (238) 000 0000
            </p>
          </div>
          <div className="footer-col">
            <span className="subtitle-label" style={{ display: 'block', marginBottom: '15px' }}>{tx.footer.social}</span>
            <p style={{ fontSize: '14px', color: 'var(--text-secondary)' }}>Instagram<br />LinkedIn</p>
          </div>
        </div>

        <p className="copyright">
          {tx.footer.rights}
        </p>
      </div>
    </footer>
  )
}

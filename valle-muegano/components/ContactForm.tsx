'use client'
import { useState } from 'react'
import { useLang } from '@/context/LanguageContext'
import { t } from '@/lib/translations'

type FormState = 'idle' | 'sending' | 'success' | 'error'

interface FormData {
  name: string
  role: string
  place: string
  email: string
  city: string
}

export default function ContactForm() {
  const { lang } = useLang()
  const tx = t[lang]

  const [formState, setFormState] = useState<FormState>('idle')
  const [errorMsg, setErrorMsg] = useState('')
  const [formData, setFormData] = useState<FormData>({
    name: '', role: '', place: '', email: '', city: '',
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setFormState('sending')
    setErrorMsg('')

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })

      const data = await res.json()

      if (!res.ok) {
        throw new Error(data.error || 'Error desconocido')
      }

      setFormState('success')

    } catch (err: any) {
      setFormState('error')
      setErrorMsg(err.message || 'Ocurrió un error. Intenta de nuevo.')
    }
  }

  // ── Estado SUCCESS ──────────────────────────────────────────────
  if (formState === 'success') {
    return (
      <section id="contact">
        <div className="container">
          <div className="form-container reveal active" style={{ textAlign: 'center' }}>
            <div className="success-icon">✦</div>
            <h3 className="success-title">
              {lang === 'es' ? 'Mensaje enviado.' : 'Message sent.'}
            </h3>
            <p className="success-desc">
              {lang === 'es'
                ? 'Un asesor de Valle Muégano se pondrá en contacto contigo en menos de 24 horas.'
                : 'A Valle Muégano advisor will reach out to you within 24 hours.'}
            </p>
            <button
              className="btn btn-ghost"
              style={{ marginTop: '32px' }}
              onClick={() => {
                setFormState('idle')
                setFormData({ name: '', role: '', place: '', email: '', city: '' })
              }}
            >
              {lang === 'es' ? 'Enviar otra consulta' : 'Send another inquiry'} →
            </button>
          </div>
        </div>
      </section>
    )
  }

  // ── Estado IDLE / SENDING / ERROR ───────────────────────────────
  return (
    <section id="contact">
      <div className="container">
        <div className="reveal active" style={{ textAlign: 'center', marginBottom: '60px' }}>
          <span className="subtitle-label">{tx.contact.label}</span>
          <h2 style={{ marginTop: '10px' }}>{tx.contact.h2}</h2>
          <p style={{ maxWidth: '600px', margin: '20px auto 0', color: 'var(--text-secondary)' }}>
            {tx.contact.desc}
          </p>
        </div>

        <div className="form-container reveal active">
          <span className="form-badge">{tx.contact.badge}</span>

          <form onSubmit={handleSubmit}>
            <div className="form-grid">

              <div className="form-group">
                <label>{tx.contact.fields.name}</label>
                <input
                  type="text"
                  name="name"
                  placeholder={lang === 'es' ? 'EJ. CARLOS MENDOZA' : 'E.G. JOHN SMITH'}
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label>{tx.contact.fields.role}</label>
                <input
                  type="text"
                  name="role"
                  placeholder={lang === 'es' ? 'EJ. DIRECTOR DE A&B' : 'E.G. F&B DIRECTOR'}
                  value={formData.role}
                  onChange={handleChange}
                />
              </div>

              <div className="form-group full-width">
                <label>{tx.contact.fields.place}</label>
                <input
                  type="text"
                  name="place"
                  placeholder={lang === 'es' ? 'NOMBRE DEL HOTEL O RESTAURANTE' : 'HOTEL OR RESTAURANT NAME'}
                  value={formData.place}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label>{tx.contact.fields.email}</label>
                <input
                  type="email"
                  name="email"
                  placeholder={lang === 'es' ? 'EJEMPLO@CORPORATIVO.COM' : 'EXAMPLE@CORPORATE.COM'}
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label>{tx.contact.fields.city}</label>
                <input
                  type="text"
                  name="city"
                  placeholder={lang === 'es' ? 'EJ. CANCÚN, RIVIERA MAYA' : 'E.G. CANCÚN, RIVIERA MAYA'}
                  value={formData.city}
                  onChange={handleChange}
                />
              </div>

              {/* Mensaje de error */}
              {formState === 'error' && (
                <div className="full-width form-error">
                  ⚠ {errorMsg}
                </div>
              )}

              <div className="form-group full-width" style={{ marginBottom: 0 }}>
                <button
                  type="submit"
                  className="btn btn-solid"
                  style={{ width: '100%' }}
                  disabled={formState === 'sending'}
                >
                  {formState === 'sending'
                    ? (lang === 'es' ? 'ENVIANDO...' : 'SENDING...')
                    : tx.contact.submit}
                </button>
              </div>

            </div>
          </form>
        </div>
      </div>
    </section>
  )
}

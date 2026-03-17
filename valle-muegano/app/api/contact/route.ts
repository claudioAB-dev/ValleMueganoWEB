import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const { name, role, place, email, city } = body

    // Validación básica
    if (!name || !email || !place) {
      return NextResponse.json(
        { error: 'Faltan campos obligatorios.' },
        { status: 400 }
      )
    }

    const { error } = await resend.emails.send({
      from: 'Valle Muégano <claudio@contact.axiomaerp.com>',

      to: [process.env.RESEND_TO_EMAIL!],
      replyTo: email,
      subject: `Nueva consulta corporativa — ${place}`,
      html: `
        <div style="font-family: Georgia, serif; max-width: 560px; margin: 0 auto; padding: 40px 32px; background: #FAF6F0; color: #2A1F0E;">
          <h2 style="font-size: 24px; font-weight: 300; letter-spacing: 0.08em; margin-bottom: 32px; border-bottom: 1px solid rgba(155,107,26,0.3); padding-bottom: 16px;">
            Nueva Consulta Corporativa
          </h2>
          <table style="width: 100%; border-collapse: collapse; font-size: 15px; line-height: 1.8;">
            <tr>
              <td style="padding: 8px 0; color: #7A5C3A; width: 40%; font-size: 11px; letter-spacing: 0.1em; text-transform: uppercase;">Nombre</td>
              <td style="padding: 8px 0;">${name}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #7A5C3A; font-size: 11px; letter-spacing: 0.1em; text-transform: uppercase;">Cargo</td>
              <td style="padding: 8px 0;">${role || '—'}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #7A5C3A; font-size: 11px; letter-spacing: 0.1em; text-transform: uppercase;">Establecimiento</td>
              <td style="padding: 8px 0;">${place}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #7A5C3A; font-size: 11px; letter-spacing: 0.1em; text-transform: uppercase;">Correo</td>
              <td style="padding: 8px 0;"><a href="mailto:${email}" style="color: #9B6B1A;">${email}</a></td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #7A5C3A; font-size: 11px; letter-spacing: 0.1em; text-transform: uppercase;">Ciudad</td>
              <td style="padding: 8px 0;">${city || '—'}</td>
            </tr>
          </table>
          <p style="margin-top: 32px; font-size: 11px; color: #A8896A; letter-spacing: 0.1em; text-transform: uppercase;">
            Valle Muégano · Sistema de contacto corporativo
          </p>
        </div>
      `,
    })

    if (error) {
      console.error('Resend error:', error)
      return NextResponse.json({ error: 'Error al enviar el mensaje.' }, { status: 500 })
    }

    return NextResponse.json({ success: true })

  } catch (err) {
    console.error('API error:', err)
    return NextResponse.json({ error: 'Error interno del servidor.' }, { status: 500 })
  }
}

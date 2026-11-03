import { ContactAside } from './components/ContactAside'
import { useSearchParams } from 'react-router-dom'
import { useEffect, useRef } from 'react'
import { PageIntro } from '@/components/sections'
import { Arrow } from '@/components/ui'
import { services } from '@/data/company'
import { useContactForm } from './hooks/useContactForm'
export function ContactPage() {
  const [params] = useSearchParams()
  const { error, busy, draft, submit, clearDraft } = useContactForm()
  const resultRef = useRef<HTMLDivElement>(null)
  useEffect(() => {
    if (draft) resultRef.current?.focus()
  }, [draft])
  return (
    <>
      <PageIntro
        label="Contacto y cotizaciones"
        title="Hablemos de su proyecto."
        text="Comparta su requerimiento de fabricación, reparación o desarrollo. Empecemos por la información técnica."
        image="/img/banner-contacto.webp"
      />
      <section className="contact-stage">
        <div className="wrap contact-layout">
          <ContactAside />
          <div className="contact-main">
            <div className="contact-heading">
              <h2>Solicite una cotización.</h2>
              <p>Comparta su requerimiento y prepararemos su solicitud.</p>
            </div>
            <form className="contact-form" onSubmit={submit} onChange={clearDraft}>
              <div className="field-row">
                <label>
                  Nombre y apellidos *
                  <input
                    name="name"
                    required
                    autoComplete="name"
                    maxLength={120}
                    placeholder="Su nombre completo"
                  />
                </label>
                <label>
                  Empresa *
                  <input
                    name="company"
                    required
                    autoComplete="organization"
                    maxLength={160}
                    placeholder="Nombre de su empresa"
                  />
                </label>
              </div>
              <div className="field-row">
                <label>
                  Correo corporativo *
                  <input
                    name="email"
                    required
                    type="email"
                    autoComplete="email"
                    maxLength={200}
                    placeholder="nombre@empresa.com"
                  />
                </label>
                <label>
                  Teléfono
                  <input
                    name="phone"
                    type="tel"
                    autoComplete="tel"
                    maxLength={30}
                    placeholder="Número de contacto"
                  />
                </label>
              </div>
              <label>
                Servicio requerido *
                <select name="service" required defaultValue={params.get('servicio') || ''}>
                  <option value="" disabled>
                    Seleccione una línea de servicio
                  </option>
                  {services.map((service) => (
                    <option key={service.slug} value={service.slug}>
                      {service.title}
                    </option>
                  ))}
                  <option value="otro">Otro requerimiento industrial</option>
                </select>
              </label>
              <input name="sector" type="hidden" value={params.get('sector') || ''} />
              {params.get('sector') && (
                <p className="form-context">
                  Consulta para el sector: <strong>{params.get('sector')}</strong>
                </p>
              )}
              <label>
                Descripción del requerimiento *
                <textarea
                  name="message"
                  rows={3}
                  required
                  maxLength={5000}
                  defaultValue={
                    params.get('consulta') === 'referencias'
                      ? 'Quisiera consultar referencias de fabricación para el siguiente requerimiento: '
                      : ''
                  }
                  placeholder="Indique tipo de pieza o equipo, material, dimensiones, cantidad y condiciones de trabajo."
                />
              </label>
              <p className="small-note quote-explanation">Prepare un borrador y envíelo desde su correo.</p>
              <button className="button" type="submit" disabled={busy}>
                {busy ? 'Preparando solicitud…' : 'Preparar solicitud'}
                <Arrow diagonal />
              </button>
              {error && (
                <p className="form-error" role="alert">
                  {error}
                </p>
              )}
            </form>
            {draft && (
              <div className="quote-result" tabIndex={-1} ref={resultRef}>
                <p className="section-label">Solicitud preparada</p>
                <h3>Revise y envíe desde su correo.</h3>
                <p>
                  Descargue el borrador y ábralo en una aplicación compatible con archivos EML, como
                  Outlook o Thunderbird.
                </p>
                <details>
                  <summary>Revisar contenido de la solicitud</summary>
                  <pre>{draft.body}</pre>
                </details>
                <a className="button" href={draft.url} download="Solicitud-Metales-Camacho.eml">
                  Descargar solicitud
                  <Arrow />
                </a>
                {draft.mailto.length < 1800 && (
                  <a className="text-link" href={draft.mailto}>
                    Abrir en mi correo
                    <Arrow diagonal />
                  </a>
                )}
                <p className="small-note">La solicitud todavía no se ha enviado.</p>
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  )
}

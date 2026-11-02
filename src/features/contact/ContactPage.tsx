import { ContactAside } from './components/ContactAside'
import { Link, useSearchParams } from 'react-router-dom'
import { useEffect, useRef } from 'react'
import { PageIntro } from '@/components/sections'
import { Arrow } from '@/components/ui'
import { services } from '@/data/company'
import { useContactForm } from './hooks/useContactForm'
export function ContactPage() {
  const [params] = useSearchParams()
  const { files, error, busy, draft, selectFiles, submit, clearDraft } = useContactForm()
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
      <section className="wrap contact-layout section-space">
        <div>
          <p className="section-label">Solicitar cotización</p>
          <h2>Cuéntenos qué necesita.</h2>
          <p>Los campos con asterisco son obligatorios.</p>
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
                rows={5}
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
            <div className="attachment-field">
              <label htmlFor="technical-files">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <path
                    d="m8 13 7-7a3 3 0 0 1 4 4l-9 9a5 5 0 0 1-7-7l9-9"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  />
                </svg>
                <strong>Planos y documentos técnicos</strong>
                <span>PDF, JPG, PNG, DWG, DXF o STEP. Hasta 5 archivos y 10 MB en total.</span>
              </label>
              <input
                id="technical-files"
                type="file"
                multiple
                accept=".pdf,.jpg,.jpeg,.png,.dwg,.dxf,.step,.stp"
                onChange={selectFiles}
                aria-describedby="files-help"
              />
              {files.length > 0 && (
                <ul className="file-list">
                  {files.map((file, index) => (
                    <li key={`${file.name}-${index}`}>
                      {file.name}
                      <span>{(file.size / 1024).toFixed(0)} KB</span>
                    </li>
                  ))}
                </ul>
              )}
              <p id="files-help">
                Los archivos se incluirán en el borrador descargable. Usted decide cuándo enviarlo
                desde su correo.
              </p>
            </div>
            <label className="checkbox-label">
              <input type="checkbox" required name="privacy" />
              <span>
                He leído el{' '}
                <Link to="/privacidad" target="_blank" rel="noopener">
                  aviso de privacidad
                </Link>{' '}
                y deseo preparar esta consulta.
              </span>
            </label>
            <p className="small-note">
              Este formulario prepara su solicitud en el navegador. El envío se completa desde su
              aplicación de correo.
            </p>
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
                Outlook o Thunderbird. Incluye los documentos seleccionados.
              </p>
              <details>
                <summary>Revisar contenido de la solicitud</summary>
                <pre>{draft.body}</pre>
              </details>
              <a className="button" href={draft.url} download="Solicitud-Metales-Camacho.eml">
                Descargar solicitud{files.length > 0 ? ' con adjuntos' : ''}
                <Arrow />
              </a>
              {files.length === 0 && draft.mailto.length < 1800 && (
                <a className="text-link" href={draft.mailto}>
                  Abrir en mi correo
                  <Arrow diagonal />
                </a>
              )}
              <p className="small-note">La solicitud todavía no se ha enviado.</p>
            </div>
          )}
        </div>
        <ContactAside />
      </section>
    </>
  )
}

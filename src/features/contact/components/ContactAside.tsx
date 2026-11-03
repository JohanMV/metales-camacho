import { company } from '@/data/company'

export function ContactAside() {
  return (
    <aside className="contact-aside">
      <p className="section-label">Contacto</p>
      <h2>Hablemos de<br />su proyecto.</h2>
      <p className="contact-aside-intro">Cuéntenos sus necesidades y conversemos sobre la solución para su operación.</p>
      <div className="contact-detail">
        <svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><rect x="3" y="5" width="18" height="14" rx="1"/><path d="m4 7 8 6 8-6"/></svg>
        <a href={`mailto:${company.email}`}>{company.email}</a>
      </div>
      <div className="contact-detail">
        <svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M6.6 3.5 9 7.9 7.3 9.6a15.7 15.7 0 0 0 7.1 7.1l1.7-1.7 4.4 2.4-.8 3c-.2.7-.8 1.1-1.5 1C10.1 20.3 3.7 13.9 2.6 5.8c-.1-.7.3-1.3 1-1.5l3-.8Z"/></svg>
        <a href={company.phoneHref}>{company.phone}</a>
      </div>
      <iframe
        className="contact-map"
        title="Mapa de ubicación de Metales Camacho"
        src={`https://maps.google.com/maps?q=${encodeURIComponent(company.address + ', Perú')}&output=embed`}
        loading="lazy"
        referrerPolicy="strict-origin-when-cross-origin"
      />
    </aside>
  )
}

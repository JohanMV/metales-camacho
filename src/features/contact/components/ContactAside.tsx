import { Arrow } from '@/components/ui'
import { company } from '@/data/company'
export function ContactAside() {
  return (
    <aside className="contact-aside">
      <p className="section-label">Contacto directo</p>
      <h2>Conversemos.</h2>
      <div>
        <span>Correo comercial</span>
        <a href={`mailto:${company.email}`}>
          {company.email}
          <Arrow diagonal />
        </a>
      </div>
      <div>
        <span>Teléfono publicado</span>
        <a href={company.phoneHref}>
          {company.phone}
          <Arrow diagonal />
        </a>
      </div>
      <div>
        <span>Dirección publicada</span>
        <p>{company.address}, Perú</p>
        <a
          className="text-link"
          href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(company.address + ', Perú')}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          Consultar ubicación
          <Arrow diagonal />
        </a>
      </div>
      <div>
        <span>Horario publicado</span>
        <p>
          Lunes a viernes
          <br />
          8:00 a. m. a 5:00 p. m.
        </p>
      </div>
      <p className="small-note">
        Coordine su visita con el equipo comercial para confirmar dirección y disponibilidad de
        atención.
      </p>
      <div className="contact-help">
        <h3>Para evaluar su proyecto</h3>
        <p>Planos, medidas, materiales y cantidades nos ayudan a comprender su requerimiento.</p>
      </div>
    </aside>
  )
}

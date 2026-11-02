import { Link } from 'react-router-dom'
import { Arrow, Reveal } from '@/components/ui'
import { IndustrialImage } from './Shared'
export function QualitySection() {
  return (
    <section className="wrap quality-section section-space">
      <Reveal image>
        <IndustrialImage
          src="/img/precision.webp"
          alt="Medición de una pieza industrial con calibrador"
        />
      </Reveal>
      <Reveal className="quality-copy">
        <p className="section-label">Calidad y seguridad</p>
        <h2>
          El detalle
          <br />
          también cuenta.
        </h2>
        <p>
          Inspección dimensional, documentación técnica y trazabilidad de materiales, de acuerdo con
          las condiciones de cada proyecto.
        </p>
        <p>Definamos desde el inicio los controles y entregables que requiere su operación.</p>
        <Link className="text-link" to="/empresa/calidad">
          Nuestro compromiso
          <Arrow diagonal />
        </Link>
      </Reveal>
    </section>
  )
}

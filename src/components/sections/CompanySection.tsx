import { Link } from 'react-router-dom'
import { Arrow, Reveal } from '@/components/ui'
import { companyTeamImage } from '@/data/company'
import { IndustrialImage } from './Shared'
export function CompanySection() {
  return (
    <section className="wrap company-section section-space">
      <Reveal image className="company-image">
        <IndustrialImage
          src={companyTeamImage}
          alt="Trabajadores con cascos de seguridad abrazados en equipo"
        />
        <div className="image-caption-block">
          Fabricación metalmecánica<span>Soluciones para la industria</span>
        </div>
      </Reveal>
      <Reveal className="company-copy">
        <p className="section-label">Conozca Metales Camacho</p>
        <h2>
          El conocimiento
          <br />
          toma forma.
        </h2>
        <p className="lead">
          Somos una empresa peruana que convierte requerimientos técnicos en soluciones
          metalmecánicas.
        </p>
        <p>
          Integramos matricería, estructuras metálicas y maestranza industrial para fabricar y
          recuperar los componentes que cada operación necesita.
        </p>
        <Link className="text-link" to="/empresa">
          Conocer nuestra empresa
          <Arrow diagonal />
        </Link>
      </Reveal>
    </section>
  )
}

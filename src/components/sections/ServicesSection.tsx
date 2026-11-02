import { Link } from 'react-router-dom'
import { Arrow, Reveal } from '@/components/ui'
import type { Service } from '@/data/company'
export interface ServicesSectionProps {
  services: Service[]
}
export function ServicesSection({ services }: ServicesSectionProps) {
  return (
    <section className="services-section section-space">
      <div className="wrap">
        <div className="section-heading">
          <div>
            <p className="section-label">Lo que hacemos</p>
            <h2>Soluciones industriales.</h2>
          </div>
          <Link className="text-link" to="/servicios">
            Todos los servicios
            <Arrow diagonal />
          </Link>
        </div>
        <div className="service-grid">
          {services.map((service, index) => (
            <Reveal key={service.slug} delay={index * 0.08}>
              <article className="service-card">
                <Link
                  className="service-card-image"
                  to={`/servicios/${service.slug}`}
                  tabIndex={-1}
                  aria-hidden="true"
                >
                  <img src={service.image} alt="" loading="lazy" width="640" height="480" />
                  <span className="image-arrow">
                    <Arrow diagonal />
                  </span>
                </Link>
                <div className="service-card-copy">
                  <h3>
                    <Link to={`/servicios/${service.slug}`}>{service.title}</Link>
                  </h3>
                  <p>{service.description}</p>
                  <Link
                    className="text-link"
                    to={`/servicios/${service.slug}`}
                    aria-label={`Conocer el servicio de ${service.title}`}
                  >
                    Conocer servicio
                    <Arrow />
                  </Link>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

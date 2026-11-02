import { Link, useParams } from 'react-router-dom'
import { services } from '@/data/company'
import { ContactCTA, IndustrialImage, PageIntro } from '@/components/sections'
import { Arrow } from '@/components/ui'

export function ServicePage() {
  const { slug } = useParams()
  const service = services.find((item) => item.slug === slug)
  if (!service)
    return (
      <PageIntro
        label="Servicios"
        title="Servicio no encontrado."
        text="Explore nuestras líneas de matricería, estructuras metálicas y maestranza industrial desde el menú de servicios."
        image="/img/banner-servicios.webp"
      />
    )
  return (
    <div className={`service-detail service-${service.slug}`}>
      <PageIntro
        label={`Servicios / ${service.title}`}
        title={service.title}
        text={service.intro}
        image={
          service.slug === 'matriceria'
            ? '/img/banner-matriceria.webp'
            : service.slug === 'estructuras'
              ? '/img/soldadura.webp'
              : '/img/torneado.webp'
        }
      />
      <section className="wrap detail-feature section-space">
        <IndustrialImage src={service.image} alt={service.imageAlt} eager />
        <div>
          <p className="section-label">{service.short}</p>
          <h2>
            {service.slug === 'matriceria'
              ? 'Cada superficie cuenta.'
              : service.slug === 'estructuras'
                ? 'Estructuras para operar.'
                : 'Fabricar. Recuperar. Operar.'}
          </h2>
          <ul className="capability-list">
            {service.items.map((item) => (
              <li key={item}>
                <span className="motif-dot" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>
      <section className="muted-section">
        <div className="wrap editorial-split">
          <h2>
            {service.slug === 'matriceria'
              ? 'Del plano al componente.'
              : service.slug === 'estructuras'
                ? 'Fabricación y montaje.'
                : 'La función define la solución.'}
          </h2>
          <div>
            <p>{service.processes}</p>
            <Link className="text-link" to="/empresa/capacidad">
              Procesos y equipamiento
              <Arrow diagonal />
            </Link>
          </div>
        </div>
      </section>
      <section className="wrap technical-brief section-space">
        <div>
          <p className="section-label">Preparemos su cotización</p>
          <h2>
            Conozcamos
            <br />
            su requerimiento.
          </h2>
        </div>
        <div>
          <p>Envíenos la información disponible para evaluar su requerimiento:</p>
          <ul className="plain-list">
            <li>Planos o fotografías de referencia.</li>
            <li>Material, medidas y cantidad de piezas.</li>
            <li>Condiciones de operación y función.</li>
            <li>Necesidades de recuperación o montaje.</li>
          </ul>
          <p className="small-note">
            La viabilidad, los controles y los entregables se acuerdan para cada trabajo.
          </p>
        </div>
      </section>
      <div className="wrap related-services">
        <h3>Otras líneas de servicio</h3>
        {services
          .filter((item) => item.slug !== service.slug)
          .map((item) => (
            <Link to={`/servicios/${item.slug}`} key={item.slug}>
              {item.title}
              <Arrow diagonal />
            </Link>
          ))}
      </div>
      <ContactCTA
        service={service.slug}
        title={
          service.slug === 'matriceria'
            ? 'Cotizar matricería.'
            : service.slug === 'estructuras'
              ? 'Cotizar estructuras.'
              : 'Cotizar maestranza.'
        }
      />
    </div>
  )
}

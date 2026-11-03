import { useParams } from 'react-router-dom'
import { services } from '@/data/company'
import { ContactCTA, PageIntro } from '@/components/sections'
import { ServiceExperience } from './ServiceExperience'

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
      <ServiceExperience key={service.slug} service={service} />
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

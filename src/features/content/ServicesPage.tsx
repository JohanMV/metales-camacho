import { Link } from 'react-router-dom'
import { useRef, useState } from 'react'
import { services } from '@/data/company'
import { ContactCTA, IndustrialImage, PageIntro } from '@/components/sections'
import { Arrow } from '@/components/ui'

export function ServicesPage() {
  const carouselRef = useRef<HTMLDivElement>(null)
  const [active, setActive] = useState(0)
  const navigate = (index: number) => {
    const carousel = carouselRef.current
    if (!carousel) return
    carousel.scrollTo({ left: carousel.clientWidth * index, behavior: 'smooth' })
    setActive(index)
  }
  return (
    <>
      <PageIntro
        label="Servicios"
        title="Soluciones industriales."
        text="Tres líneas de trabajo para fabricar, recuperar y desarrollar los componentes que necesita su operación."
        image="/img/banner-servicios.webp"
      />
      <section className="wrap service-directory section-space">
        <div
          ref={carouselRef}
          className="service-carousel"
          aria-label="Servicios"
          onScroll={(event) => {
            const carousel = event.currentTarget
            setActive(Math.round(carousel.scrollLeft / carousel.clientWidth))
          }}
        >
        {services.map((service, index) => (
          <div className="service-slide" key={service.slug} role="group" aria-label={`${index + 1} de ${services.length}: ${service.title}`}>
            <article className="service-row">
              <IndustrialImage src={service.image} alt={service.imageAlt} />
              <div>
                <p className="section-label">{service.short}</p>
                <h2>{service.title}</h2>
                <p>{service.intro}</p>
                <ul className="plain-list">
                  {service.items.slice(0, 3).map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
                <Link className="text-link" to={`/servicios/${service.slug}`}>
                  Explorar servicio
                  <Arrow diagonal />
                </Link>
              </div>
            </article>
          </div>
        ))}
        </div>
        <div className="service-carousel-controls">
          <span aria-live="polite">{String(active + 1).padStart(2, '0')} / {String(services.length).padStart(2, '0')}</span>
          <div>
            <button type="button" onClick={() => navigate(active - 1)} disabled={active === 0} aria-label="Servicio anterior"><Arrow className="service-arrow-previous" /></button>
            <button type="button" onClick={() => navigate(active + 1)} disabled={active === services.length - 1} aria-label="Servicio siguiente"><Arrow /></button>
          </div>
        </div>
      </section>
      <section className="muted-section">
        <div className="wrap editorial-split">
          <h2>
            Un alcance
            <br />a su medida.
          </h2>
          <div>
            <p>
              El mecanizado, la ingeniería, la recuperación de equipos y el montaje se integran
              según las necesidades del trabajo.
            </p>
            <p>
              Para procesos complementarios, como fundición o mantenimiento en planta, consulte el
              alcance y la disponibilidad aplicables a su proyecto.
            </p>
            <Link className="text-link" to="/empresa/capacidad">
              Conocer capacidades
              <Arrow />
            </Link>
          </div>
        </div>
      </section>
      <ContactCTA />
    </>
  )
}

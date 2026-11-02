import { Link } from 'react-router-dom'
import { useRef, useState } from 'react'
import { industries } from '@/data/company'
import { Arrow } from '@/components/ui'
import { ContactCTA, IndustrialImage, PageIntro } from '@/components/sections'

export function IndustriesPage() {
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
        label="Industrias"
        title="Soluciones por industria."
        text="Capacidades metalmecánicas que se adaptan a las necesidades de fabricación, mantenimiento y operación de cada sector."
        image="/img/estructuras.webp"
      />
      <section className="wrap service-directory section-space">
        <div ref={carouselRef} className="service-carousel" aria-label="Industrias" onScroll={(event) => {
          const carousel = event.currentTarget
          setActive(Math.round(carousel.scrollLeft / carousel.clientWidth))
        }}>
        {industries.map((industry, index) => (
          <div className="service-slide" key={industry.id} role="group" aria-label={`${index + 1} de ${industries.length}: ${industry.title}`}>
          <article className="service-row industry-entry">
            <IndustrialImage src={industry.image} alt={industry.alt} />
            <div>
              <h2>{industry.title}</h2>
              <p>{industry.description}</p>
              <ul className="plain-list">
                {industry.applications.map((application) => (
                  <li key={application}>{application}</li>
                ))}
              </ul>
              <Link
                className="text-link"
                to={`/contacto?sector=${encodeURIComponent(industry.title)}`}
              >
                Consultar para mi operación
                <Arrow diagonal />
              </Link>
            </div>
          </article>
          </div>
        ))}
        </div>
        <div className="service-carousel-controls">
          <span aria-live="polite">{String(active + 1).padStart(2, '0')} / {String(industries.length).padStart(2, '0')}</span>
          <div>
            <button type="button" onClick={() => navigate(active - 1)} disabled={active === 0} aria-label="Industria anterior"><Arrow className="service-arrow-previous" /></button>
            <button type="button" onClick={() => navigate(active + 1)} disabled={active === industries.length - 1} aria-label="Industria siguiente"><Arrow /></button>
          </div>
        </div>
      </section>
      <ContactCTA title="Hablemos de su operación." />
    </>
  )
}

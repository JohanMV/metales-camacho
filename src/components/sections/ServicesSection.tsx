import { Link } from 'react-router-dom'
import { useRef, useState } from 'react'
import { Arrow, Reveal } from '@/components/ui'
import type { Service } from '@/data/company'
export interface ServicesSectionProps {
  services: Service[]
}
export function ServicesSection({ services }: ServicesSectionProps) {
  const carouselRef = useRef<HTMLDivElement>(null)
  const [active, setActive] = useState(0)
  const navigate = (index: number) => {
    const carousel = carouselRef.current
    const slide = carousel?.children.item(index) as HTMLElement | null
    const firstSlide = carousel?.firstElementChild as HTMLElement | null
    if (!carousel || !slide || !firstSlide) return
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    carousel.scrollTo({ left: slide.offsetLeft - firstSlide.offsetLeft, behavior: reduceMotion ? 'instant' : 'smooth' })
  }
  return (
    <section className="services-section section-space">
      <div className="wrap">
        <div className="section-heading">
          <div>
            <p className="section-label">Lo que hacemos</p>
            <h2>Soluciones industriales.</h2>
          </div>
        </div>
        <div
          className="service-grid"
          ref={carouselRef}
          aria-label="Servicios industriales"
          onScroll={(event) => {
            const carousel = event.currentTarget
            const firstSlide = carousel.firstElementChild as HTMLElement | null
            if (!firstSlide) return
            const slides = Array.from(carousel.children) as HTMLElement[]
            const nearest = slides.reduce((best, slide, index) =>
              Math.abs(slide.offsetLeft - firstSlide.offsetLeft - carousel.scrollLeft) <
              Math.abs(slides[best].offsetLeft - firstSlide.offsetLeft - carousel.scrollLeft)
                ? index : best, 0)
            setActive(nearest)
          }}
        >
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
        <div className="service-carousel-controls home-service-controls">
          <span aria-live="polite">{String(active + 1).padStart(2, '0')} / {String(services.length).padStart(2, '0')}</span>
          <div>
            <button type="button" onClick={() => navigate(active - 1)} disabled={active === 0} aria-label="Servicio anterior"><Arrow className="service-arrow-previous" /></button>
            <button type="button" onClick={() => navigate(active + 1)} disabled={active === services.length - 1} aria-label="Servicio siguiente"><Arrow /></button>
          </div>
        </div>
      </div>
    </section>
  )
}

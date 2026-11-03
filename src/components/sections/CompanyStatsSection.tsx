import { useEffect, useRef, useState } from 'react'

// Editar aquí las cifras y sus textos. Los 25 años están pendientes de validación con la empresa.
const companyStats = [
  { value: 25, unit: 'años', description: 'De actividad formal en el sector industrial.' },
  { value: 3, unit: 'líneas', description: 'De servicios metalmecánicos especializados.' },
  { value: 5, unit: 'sectores', description: 'Industriales contemplados en nuestra oferta.' },
] as const

const duration = 1500

export function CompanyStatsSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const [progress, setProgress] = useState(0)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const section = sectionRef.current
    if (!section) return

    let frame = 0
    let started = false
    const observer = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting || started) return
      started = true
      observer.disconnect()
      setIsVisible(true)

      if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        setProgress(1)
        return
      }

      let startTime: number | undefined
      const animate = (time: number) => {
        startTime ??= time
        const elapsed = Math.min((time - startTime) / duration, 1)
        setProgress(1 - (1 - elapsed) ** 3)
        if (elapsed < 1) frame = window.requestAnimationFrame(animate)
      }
      frame = window.requestAnimationFrame(animate)
    }, { threshold: 0.2 })

    observer.observe(section)
    return () => {
      observer.disconnect()
      window.cancelAnimationFrame(frame)
    }
  }, [])

  return (
    <section ref={sectionRef} className={`company-stats${isVisible ? ' is-visible' : ''}`} aria-label="Metales Camacho en cifras">
      <div className="wrap">
        <ul className="company-stats-grid">
          {companyStats.map(({ value, unit, description }) => (
            <li key={unit} className="company-stat">
              <div className="company-stat-heading">
                <span className="company-stat-number">{String(Math.round(value * progress)).padStart(2, '0')}</span>
                <span className="company-stat-unit">{unit}</span>
              </div>
              <p>{description}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

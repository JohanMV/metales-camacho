import { useId, useState } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'motion/react'
import { Link } from 'react-router-dom'
import { Arrow } from '@/components/ui'
import type { Industry } from '@/data/company'
export interface IndustriesExplorerProps {
  industries: Industry[]
  active: number
  onChange: (index: number) => void
}
export function IndustriesExplorer({ industries, active, onChange }: IndustriesExplorerProps) {
  const id = useId()
  const [openIndustry, setOpenIndustry] = useState<number | null>(null)
  const reducedMotion = useReducedMotion()
  const selected = industries[active]
  return (
    <>
    <div className="industries-accordion">
      {industries.map((industry, index) => {
        const isOpen = openIndustry === index
        return (
          <div className="industry-accordion-item" key={industry.id}>
            <h3>
              <button type="button" className="industry-accordion-trigger" aria-expanded={isOpen} aria-controls={`${id}-accordion-panel-${index}`} onClick={() => setOpenIndustry(isOpen ? null : index)}>
                <span>{industry.title}</span>
                <span className="industry-accordion-symbol" aria-hidden="true">{isOpen ? '−' : '+'}</span>
              </button>
            </h3>
            <div id={`${id}-accordion-panel-${index}`} className="industry-accordion-panel" inert={!isOpen}>
              <AnimatePresence initial={false}>
                {isOpen && <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: reducedMotion ? 0 : 0.3, ease: [0.16, 1, 0.3, 1] }}
                  style={{ overflow: 'hidden' }}
                >
                  <img src={industry.image} alt={industry.alt} loading="lazy" width="800" height="560" />
                  <div className="industry-accordion-copy">
                    <p>{industry.description}</p>
                    <Link to={`/contacto?sector=${encodeURIComponent(industry.title)}`} className="text-link">
                      Consultar aplicación <Arrow diagonal />
                    </Link>
                  </div>
                </motion.div>}
              </AnimatePresence>
            </div>
          </div>
        )
      })}
    </div>
    <div className="industries-explorer">
      <div className="industry-selector">
        <div role="tablist" aria-label="Sectores industriales" aria-orientation="vertical">
          {industries.map((industry, index) => (
            <button
              key={industry.id}
              type="button"
              id={`${id}-tab-${index}`}
              role="tab"
              aria-selected={active === index}
              aria-controls={`${id}-panel`}
              tabIndex={active === index ? 0 : -1}
              onClick={() => onChange(index)}
              onKeyDown={(event) => {
                const directions: Record<string, number> = {
                  ArrowDown: (index + 1) % industries.length,
                  ArrowUp: (index - 1 + industries.length) % industries.length,
                  Home: 0,
                  End: industries.length - 1,
                }
                const next = directions[event.key]
                if (next !== undefined) {
                  event.preventDefault()
                  onChange(next)
                  document.getElementById(`${id}-tab-${next}`)?.focus()
                }
              }}
            >
              <span>{industry.title}</span>
              <Arrow diagonal />
            </button>
          ))}
        </div>
      </div>
      <div
        className="industry-panel"
        id={`${id}-panel`}
        role="tabpanel"
        aria-labelledby={`${id}-tab-${active}`}
        tabIndex={0}
      >
        <img
          key={selected.image}
          src={selected.image}
          alt={selected.alt}
          loading="lazy"
          width="800"
          height="560"
        />
        <div className="industry-panel-content">
          {industries.map((industry, index) => (
            <div className="industry-panel-copy" key={industry.id} aria-hidden={index !== active} inert={index !== active}>
              <h3>{industry.title}</h3>
              <p>{industry.description}</p>
              <Link to={`/contacto?sector=${encodeURIComponent(industry.title)}`} className="text-link">
                Consultar aplicación
                <Arrow diagonal />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
    </>
  )
}

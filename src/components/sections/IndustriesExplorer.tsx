import { useId } from 'react'
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
  const selected = industries[active]
  return (
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
        <Link className="text-link" to="/industrias">
          Conocer las industrias
          <Arrow />
        </Link>
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
        <div className="industry-panel-copy">
          <h3>{selected.title}</h3>
          <p>{selected.description}</p>
          <Link to={`/contacto?sector=${encodeURIComponent(selected.title)}`} className="text-link">
            Consultar aplicación
            <Arrow diagonal />
          </Link>
        </div>
      </div>
    </div>
  )
}

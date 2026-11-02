import { Link } from 'react-router-dom'
import { Arrow, Reveal } from '@/components/ui'
import { IndustrialImage } from './Shared'
export function CapacitySection() {
  const capabilities = [
    {
      title: 'Mecanizado CNC',
      description: 'Procesos de torneado, fresado y rectificado de componentes.',
    },
    {
      title: 'Fabricación a medida',
      description: 'Piezas, equipos y estructuras según requerimientos técnicos.',
    },
    {
      title: 'Inspección dimensional',
      description: 'Verificaciones técnicas y controles definidos para cada proyecto.',
    },
  ]

  return (
    <section className="capacity-section">
      <div className="wrap">
        <Reveal className="capacity-heading">
          <div>
            <p className="section-label">Capacidad industrial</p>
            <h2>Precisión en cada proceso.</h2>
          </div>
          <p>
            Procesos y equipamiento para mecanizar, fabricar y recuperar componentes industriales.
          </p>
        </Reveal>

        <div className="capacity-layout">
          <Reveal image className="capacity-image">
            <Link to="/empresa/capacidad" aria-label="Explorar nuestra capacidad industrial">
              <IndustrialImage
                src="/img/mecanizado.webp"
                alt="Centro de mecanizado CNC trabajando un componente industrial"
              />
              <span className="capacity-image-label">Ingeniería y fabricación industrial</span>
              <span className="capacity-image-action" aria-hidden="true">
                <Arrow diagonal />
              </span>
            </Link>
          </Reveal>

          <Reveal className="capacity-details">
            <ol className="capacity-facts">
              {capabilities.map((capability, index) => (
                <li key={capability.title}>
                  <span className="capacity-fact-number">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <div>
                    <strong>{capability.title}</strong>
                    <span>{capability.description}</span>
                  </div>
                </li>
              ))}
            </ol>
            <Link className="text-link" to="/empresa/capacidad">
              Explorar nuestra capacidad industrial
              <Arrow diagonal />
            </Link>
          </Reveal>
        </div>

      </div>
    </section>
  )
}

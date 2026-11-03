import { Link } from 'react-router-dom'
import { useState } from 'react'
import { Arrow, Reveal } from '@/components/ui'
export function CapacitySection() {
  const [activeCapability, setActiveCapability] = useState(0)
  const capabilities = [
    {
      title: 'Mecanizado CNC',
      description: 'Procesos de torneado, fresado y rectificado de componentes.',
      image: '/img/capacidad-mecanizado.png',
      alt: 'Fresadora CNC mecanizando un componente de acero de precisión',
    },
    {
      title: 'Fabricación a medida',
      description: 'Piezas, equipos y estructuras según requerimientos técnicos.',
      image: '/img/capacidad-fabricacion.png',
      alt: 'Fabricador soldando una estructura metálica a medida',
    },
    {
      title: 'Inspección dimensional',
      description: 'Verificaciones técnicas y controles definidos para cada proyecto.',
      image: '/img/capacidad-inspeccion.png',
      alt: 'Técnico midiendo una pieza mecanizada con un calibrador digital',
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
              <figure className="industrial-image capacity-image-stack">
                {capabilities.map((capability, index) => (
                  <img
                    key={capability.image}
                    className={index === activeCapability ? 'is-active' : ''}
                    src={capability.image}
                    alt={index === activeCapability ? capability.alt : ''}
                    aria-hidden={index !== activeCapability}
                    loading="lazy"
                    width="1536"
                    height="1024"
                  />
                ))}
              </figure>
              <span className="capacity-image-label">{capabilities[activeCapability].title}</span>
              <span className="capacity-image-action" aria-hidden="true">
                <Arrow diagonal />
              </span>
            </Link>
          </Reveal>

          <Reveal className="capacity-details">
            <ol className="capacity-facts" aria-label="Capacidades industriales">
              {capabilities.map((capability, index) => (
                <li key={capability.title}>
                  <button type="button" className="capacity-fact-trigger" aria-pressed={activeCapability === index} onClick={() => setActiveCapability(index)}>
                    <span className="capacity-fact-number">{String(index + 1).padStart(2, '0')}</span>
                    <span className="capacity-fact-copy">
                      <strong>{capability.title}</strong>
                      <span>{capability.description}</span>
                    </span>
                  </button>
                </li>
              ))}
            </ol>
            <Link className="button capacity-action" to="/empresa/capacidad">
              Explorar nuestra capacidad industrial
              <Arrow diagonal />
            </Link>
          </Reveal>
        </div>

      </div>
    </section>
  )
}

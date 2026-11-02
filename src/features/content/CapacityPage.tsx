import { Link } from 'react-router-dom'
import { ContactCTA, IndustrialImage, PageIntro } from '@/components/sections'
import { Arrow } from '@/components/ui'

export function CapacityPage() {
  const machines = [
    ['Mecanizado y fresado', 'HAAS VF3-YT · TM1 · TM-3P'],
    ['Torneado CNC', 'HAAS SL20 · ST30'],
    ['Mandrinado', 'TOS W100'],
    ['Rectificado', 'Rectificadora tangencial'],
  ]
  return (
    <>
      <PageIntro
        label="Empresa / Capacidad industrial"
        title="Capacidad para fabricar."
        text="Procesos y equipamiento para transformar un requerimiento técnico en componentes y conjuntos industriales."
        image="/img/torneado.webp"
      />
      <section className="wrap detail-feature section-space">
        <div>
          <p className="section-label">Procesos metalmecánicos</p>
          <h2>
            Del material
            <br />
            al componente.
          </h2>
          <p>
            El mecanizado CNC, el torneado, el fresado y el rectificado permiten abordar trabajos
            con distintas geometrías y funciones.
          </p>
          <p>
            La fabricación estructural, la soldadura y la recuperación complementan las
            posibilidades de atención. La capacidad aplicable se evalúa para cada pieza.
          </p>
        </div>
        <IndustrialImage
          src="/img/mecanizado.webp"
          alt="Centro de mecanizado industrial"
        />
      </section>
      <section className="equipment-section muted-section">
        <div className="wrap equipment-layout">
          <div>
            <p className="section-label">Equipamiento</p>
            <h2>Procesos y equipos.</h2>
            <p>
              Referencias de equipos incluidas en la información corporativa. Consulte
              disponibilidad y características para su requerimiento.
            </p>
          </div>
          <div className="equipment-list">
            {machines.map(([type, model]) => (
              <article key={type}>
                <h3>{type}</h3>
                <p>{model}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="wrap quality-section section-space">
        <IndustrialImage
          src="/img/precision.webp"
          alt="Inspección dimensional de una pieza"
        />
        <div>
          <p className="section-label">Control y precisión</p>
          <h2>
            Especificaciones
            <br />
            claras.
          </h2>
          <p>
            Materiales, dimensiones, geometría y condiciones de operación determinan el proceso de
            trabajo.
          </p>
          <p>
            Los controles dimensionales, registros e información técnica de entrega se establecen
            según los requerimientos del proyecto.
          </p>
          <Link className="text-link" to="/empresa/calidad">
            Calidad y documentación
            <Arrow />
          </Link>
        </div>
      </section>
      <ContactCTA title="Consulte su proyecto." />
    </>
  )
}

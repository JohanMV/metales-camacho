import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Arrow } from '@/components/ui'
import { services, type Service } from '@/data/company'
import './service-experience.css'

const visuals: Record<string, { image: string; description: string }[]> = {
  matriceria: [
    { image: '/img/banner-matriceria.webp', description: 'Desarrollo y recuperación de matrices según la pieza y las necesidades de su proceso productivo.' },
    { image: '/img/rectificado-plano.webp', description: 'Trabajo de superficies planas y tangenciales, con el alcance definido a partir de las características de la pieza.' },
    { image: '/img/evaluacion-tecnica.webp', description: 'Fabricación de placas y bases a partir de planos, muestras y especificaciones de aplicación.' },
    { image: '/img/precision.webp', description: 'Componentes mecanizados según material, geometría y condiciones de uso.' },
  ],
  estructuras: [
    { image: '/img/estructuras.webp', description: 'Elementos de acceso y operación para instalaciones industriales, según el alcance de su proyecto.' },
    { image: '/img/soldadura.webp', description: 'Fabricación de elementos estructurales según planos y requerimientos de instalación.' },
    { image: '/img/capacidad-fabricacion.png', description: 'Conjuntos metálicos para almacenamiento y manejo de materiales, sujetos a evaluación técnica.' },
    { image: '/img/evaluacion-tecnica.webp', description: 'Componentes a medida para integrarse a los sistemas de transporte de su operación.' },
  ],
  maestranza: [
    { image: '/img/mecanizado.webp', description: 'Fabricación de equipos especiales según la función y las condiciones de su operación.' },
    { image: '/img/evaluacion-tecnica.webp', description: 'Desarrollo de piezas y repuestos a partir de planos, referencias o muestras.' },
    { image: '/img/torneado.webp', description: 'Procesos de mecanizado definidos según el material y la geometría de cada componente.' },
    { image: '/img/capacidad-inspeccion.png', description: 'Evaluación de piezas y equipos para definir las posibilidades de reparación o recuperación.' },
  ],
}

export function ServiceExperience({ service }: { service: Service }) {
  const [active, setActive] = useState(0)
  const items = visuals[service.slug]
  const selected = items[active]
  const stages = [
    { title: 'Su plano o muestra', text: 'Revisamos la referencia y las condiciones de uso.', image: '/img/evaluacion-tecnica.webp', alt: 'Evaluación de un plano mecánico y una pieza de muestra' },
    { title: 'El trabajo a medida', text: 'Definimos materiales, procesos y alcance técnico.', image: service.slug === 'estructuras' ? '/img/capacidad-fabricacion.png' : '/img/capacidad-mecanizado.png', alt: service.slug === 'estructuras' ? 'Fabricación de una estructura metálica' : 'Mecanizado de un componente metálico' },
    { title: 'Los controles acordados', text: 'Establecemos las verificaciones y los entregables de su proyecto.', image: '/img/capacidad-inspeccion.png', alt: 'Inspección dimensional de una pieza industrial' },
  ]
  return <>
    <section className="sx-showcase">
      <div className="wrap">
        <header className="sx-heading">
          <div><p className="section-label">Soluciones de {service.title.toLowerCase()}</p><h2>¿Qué necesita desarrollar?</h2></div>
          <p>Explore nuestras aplicaciones y encuentre el punto de partida para su proyecto.</p>
        </header>
        <div className="sx-explorer">
          <div className="sx-options" role="group" aria-label="Aplicaciones del servicio">
            {service.items.map((title, index) => <button key={title} type="button" aria-pressed={active === index} aria-controls="service-application" onClick={() => setActive(index)}>
              <img src={items[index].image} alt="" loading="lazy" />
              <span><small>{String(index + 1).padStart(2, '0')}</small><strong>{title}</strong></span><Arrow diagonal />
            </button>)}
          </div>
          <div className="sx-display" id="service-application" role="region" aria-label={service.items[active]}>
            <img key={selected.image} className="sx-display-photo" src={selected.image} alt={service.items[active]} />
            <div className="sx-display-copy">
              <h3>{service.items[active]}</h3><p>{selected.description}</p>
              <Link className="button button-white" to={`/contacto?servicio=${service.slug}`}>Consultar aplicación <Arrow diagonal /></Link>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section className="sx-process">
      <div className="wrap">
        <header className="sx-heading">
          <div><p className="section-label">El punto de partida es su necesidad</p><h2>Del requerimiento al trabajo.</h2></div>
          <Link className="text-link" to="/empresa/capacidad">Ver capacidad industrial <Arrow diagonal /></Link>
        </header>
        <ol className="sx-stages">
          {stages.map((stage, index) => <li key={stage.title}>
            <div className="sx-stage-image"><img src={stage.image} alt={stage.alt} loading="lazy" /><span>{String(index + 1).padStart(2, '0')}</span></div>
            <h3>{stage.title}</h3><p>{stage.text}</p>
          </li>)}
        </ol>
        <details className="sx-preparation">
          <summary><span>¿Qué información necesita para cotizar?</span><span className="sx-plus" aria-hidden="true">+</span></summary>
          <div className="sx-preparation-content">
            <p>{service.processes}</p>
            <ul><li>Planos, fotografías o una muestra de referencia.</li><li>Material, medidas y cantidad de piezas.</li><li>Condiciones de operación y función.</li><li>Necesidades de recuperación o montaje.</li></ul>
            <p className="small-note">La viabilidad, los controles y los entregables se acuerdan para cada trabajo.</p>
          </div>
        </details>
      </div>
    </section>
    <nav className="sx-related wrap" aria-label="Otras líneas de servicio">
      <p className="section-label">También podemos ayudarle con</p>
      <div>{services.filter(item => item.slug !== service.slug).map(item => <Link key={item.slug} to={`/servicios/${item.slug}`}><img src={item.image} alt="" loading="lazy" /><span>{item.title}</span><Arrow diagonal /></Link>)}</div>
    </nav>
  </>
}

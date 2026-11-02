import { Link } from 'react-router-dom'
import { Arrow } from '@/components/ui'
export function HeroSection() {
  return (
      <section className="hero">
        <img
          className="hero-background"
          src="/img/torneado.webp"
          alt="Torneado de una pieza metálica"
          width="1920"
          height="1080"
          fetchPriority="high"
        />
        <div className="hero-shade" />
        <div className="wrap hero-content">
          <div className="hero-copy">
            <p className="hero-context">Ingeniería y fabricación industrial</p>
            <h1>
              Ingeniería
              <br />
              metalmecánica.
            </h1>
            <p className="hero-description">
              Fabricamos, mecanizamos y reparamos componentes y equipos a la medida de su operación.
            </p>
            <div className="actions">
              <Link className="button" to="/contacto">
                Solicitar cotización
                <Arrow diagonal />
              </Link>
              <Link className="hero-secondary" to="/servicios">
                Conocer servicios
                <Arrow />
              </Link>
            </div>
          </div>
          <div className="hero-bottom">
            <span>Soluciones a medida. Criterio técnico.</span>
            <span>Lima, Perú</span>
          </div>
        </div>
      </section>
  )
}

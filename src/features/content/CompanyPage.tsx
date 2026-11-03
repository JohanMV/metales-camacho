import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { useReducedMotion } from 'motion/react'
import { ContactCTA, PageIntro } from '@/components/sections'
import { Arrow, Reveal } from '@/components/ui'

const historyPhotos = [
  { src: '/img/historia-equipo-fachada.webp', alt: 'Grupo de trabajadores frente a una instalación industrial' },
  { src: '/img/historia-equipo-taller.webp', alt: 'Grupo de personas en un taller de mecanizado' },
  { src: '/img/historia-equipo-planta.webp', alt: 'Grupo de trabajadores en una planta industrial' },
]

function HistoryPhotos() {
  const [active, setActive] = useState(0)
  const reducedMotion = useReducedMotion()
  useEffect(() => {
    if (reducedMotion) return
    const timer = window.setTimeout(() => setActive((current) => (current + 1) % historyPhotos.length), 4000)
    return () => window.clearTimeout(timer)
  }, [active, reducedMotion])
  return (
    <div className="history-photos" role="group" aria-label="Fotografías de la empresa">
      <figure className="industrial-image history-photos-images">
        {historyPhotos.map((photo, index) => (
          <img key={photo.src} src={photo.src} alt={index === active ? photo.alt : ''} aria-hidden={index !== active} className={index === active ? 'is-active' : ''} loading="lazy" width="1536" height="1024" />
        ))}
      </figure>
      <div className="history-photos-controls">
        <button type="button" aria-label="Fotografía anterior" onClick={() => setActive((current) => (current + historyPhotos.length - 1) % historyPhotos.length)}><Arrow className="service-arrow-previous" /></button>
        <button type="button" aria-label="Fotografía siguiente" onClick={() => setActive((current) => (current + 1) % historyPhotos.length)}><Arrow /></button>
      </div>
    </div>
  )
}

export function CompanyPage() {
  return (
    <>
      <PageIntro
        label="Empresa"
        title="Metales Camacho."
        text="Ingeniería y metalmecánica para las necesidades de la industria peruana."
        image="/img/banner-empresa.webp"
      />
      <section className="wrap detail-feature section-space">
        <HistoryPhotos />
        <div>
          <p className="section-label">Nuestra historia</p>
          <h2>
            Experiencia que
            <br />
            toma forma.
          </h2>
          <p className="lead">
            Nuestra trayectoria en ingeniería y metalmecánica se remonta a 1992.
          </p>
          <p>
            Desde Los Olivos, Lima, nuestro equipo atiende requerimientos industriales a través de
            la matricería, las estructuras metálicas y la maestranza industrial.
          </p>
          <Link className="text-link" to="/empresa/capacidad">
            Explorar nuestra capacidad
            <Arrow diagonal />
          </Link>
        </div>
      </section>
      <section className="company-purpose">
        <div className="wrap company-purpose-inner">
          <div className="company-purpose-heading">
            <h2>Lo que nos guía.</h2>
            <Link className="button" to="/empresa/calidad">
              Calidad y seguridad <Arrow diagonal />
            </Link>
          </div>

          <div className="purpose-cards-grid">
            {/* Misión */}
            <Reveal delay={0.04}>
              <article className="purpose-card">
                <div className="purpose-card-body">
                  <h3 className="purpose-card-label">Nuestra misión</h3>
                  <div className="purpose-card-copy">
                    <p className="purpose-card-text">Ofrecer soluciones metalmecánicas de calidad que generen valor para nuestros clientes y proveedores.</p>
                    <p className="purpose-card-text">Escuchamos cada requerimiento para desarrollar, fabricar y recuperar componentes y estructuras que respondan a las necesidades de la industria.</p>
                  </div>
                </div>
              </article>
            </Reveal>

            {/* Visión */}
            <Reveal delay={0.1}>
              <article className="purpose-card">
                <div className="purpose-card-body">
                  <h3 className="purpose-card-label">Nuestra visión</h3>
                  <div className="purpose-card-copy">
                    <p className="purpose-card-text">Ser una empresa referente en soluciones metalmecánicas, reconocida por su compromiso y calidad.</p>
                    <p className="purpose-card-text">Aspiramos a crecer con ética, fortalecer nuestras capacidades y llevar la marca Metales Camacho a nuevos mercados.</p>
                  </div>
                </div>
              </article>
            </Reveal>

            {/* Valores */}
            <Reveal delay={0.16}>
              <article className="purpose-card">
                <div className="purpose-card-body">
                  <h3 className="purpose-card-label">Nuestros valores</h3>
                  <ul className="purpose-card-values">
                    {[
                      'Honestidad',
                      'Responsabilidad',
                      'Calidad',
                      'Pasión',
                      'Competitividad',
                      'Trabajo en equipo',
                      'Orientación al cliente',
                      'Lealtad',
                    ].map((v) => (
                      <li key={v}>{v}</li>
                    ))}
                  </ul>
                </div>
              </article>
            </Reveal>
          </div>
        </div>
      </section>
      <ContactCTA />
    </>
  )
}

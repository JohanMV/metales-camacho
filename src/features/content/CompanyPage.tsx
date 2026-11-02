import { Link } from 'react-router-dom'
import { ContactCTA, IndustrialImage, PageIntro } from '@/components/sections'
import { Arrow, Reveal } from '@/components/ui'
import { companyTeamImage } from '@/data/company'

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
        <IndustrialImage
          src={companyTeamImage}
          alt="Trabajadores con cascos de seguridad abrazados en equipo"
        />
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
            <Link className="company-quality-link" to="/empresa/calidad">
              Calidad y seguridad <Arrow diagonal />
            </Link>
          </div>

          <div className="purpose-cards-grid">
            {/* Misión */}
            <Reveal delay={0.04}>
              <article className="purpose-card">
                <div className="purpose-card-image">
                  <img
                    src="https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&w=800&q=80"
                    alt="Soldador con equipo de protección trabajando en taller metalmecánico"
                    loading="lazy"
                    width="800"
                    height="500"
                  />
                </div>
                <div className="purpose-card-body">
                  <span className="purpose-card-label">Nuestra misión</span>
                  <p className="purpose-card-text">
                    Soluciones metalmecánicas de calidad que generan valor para clientes y proveedores.
                  </p>
                </div>
              </article>
            </Reveal>

            {/* Visión */}
            <Reveal delay={0.1}>
              <article className="purpose-card">
                <div className="purpose-card-image">
                  <img
                    src="https://images.unsplash.com/photo-1537462715879-360eeb61a0ad?auto=format&fit=crop&w=800&q=80"
                    alt="Máquina CNC de precisión operando en planta industrial"
                    loading="lazy"
                    width="800"
                    height="500"
                  />
                </div>
                <div className="purpose-card-body">
                  <span className="purpose-card-label">Nuestra visión</span>
                  <p className="purpose-card-text">
                    Ser referentes, crecer con ética y llevar nuestra marca al exterior.
                  </p>
                </div>
              </article>
            </Reveal>

            {/* Valores */}
            <Reveal delay={0.16}>
              <article className="purpose-card">
                <div className="purpose-card-image">
                  <img
                    src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80"
                    alt="Equipo de ingeniería revisando planos en planta metalmecánica"
                    loading="lazy"
                    width="800"
                    height="500"
                  />
                </div>
                <div className="purpose-card-body">
                  <span className="purpose-card-label">Nuestros valores</span>
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

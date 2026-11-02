import { projects } from '@/features/projects/data'
import { ProjectGrid } from '@/features/projects/components/ProjectGrid'
import { Link } from 'react-router-dom'

import { Arrow } from '@/components/ui'
import { ContactCTA, IndustrialImage, PageIntro } from '@/components/sections'

export function ProjectsPage() {
  if (projects.length > 0)
    return (
      <>
        <PageIntro
          label="Proyectos"
          title="Nuestros proyectos."
          text="Trabajos documentados de fabricación, recuperación e ingeniería industrial."
          image="/img/mecanizado.webp"
        />
        <ProjectGrid projects={projects} />
        <ContactCTA />
      </>
    )
  return (
    <>
      <PageIntro
        label="Proyectos"
        title="De su plano a la pieza."
        text="Cada trabajo de fabricación parte de una necesidad concreta y de un alcance técnico acordado."
        image="/img/torneado.webp"
      />
      <section className="wrap detail-feature section-space">
        <IndustrialImage
          src="/img/estructuras.webp"
          alt="Conjunto de estructuras industriales"
        />
        <div>
          <p className="section-label">Referencias de fabricación</p>
          <h2>
            Referencias
            <br />
            de fabricación.
          </h2>
          <p>
            Estamos reuniendo fichas técnicas y fotografías autorizadas para presentar proyectos
            documentados de Metales Camacho.
          </p>
          <p>
            Si necesita evaluar un trabajo similar al suyo, consulte al equipo comercial por
            referencias de fabricación disponibles para su requerimiento.
          </p>
          <Link className="button" to="/contacto?consulta=referencias">
            Consultar referencias
            <Arrow diagonal />
          </Link>
        </div>
      </section>
      <section className="muted-section">
        <div className="wrap editorial-split">
          <h2>
            El contexto
            <br />
            define el proceso.
          </h2>
          <div>
            <p>
              La función de una pieza, las condiciones de trabajo y sus especificaciones nos
              permiten evaluar el proceso de fabricación o recuperación.
            </p>
            <p>
              Puede compartir planos, fotografías, materiales y cantidades desde el formulario de
              cotización.
            </p>
            <Link className="text-link" to="/servicios">
              Explorar nuestras líneas
              <Arrow />
            </Link>
          </div>
        </div>
      </section>
      <ContactCTA />
    </>
  )
}

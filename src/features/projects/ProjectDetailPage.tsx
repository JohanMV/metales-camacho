import { Link, useParams } from 'react-router-dom'
import { ContactCTA, PageIntro } from '@/components/sections'
import { projects } from './data'
export function ProjectDetailPage() {
  const { slug } = useParams()
  const project = projects.find((item) => item.slug === slug)
  if (!project)
    return (
      <>
        <PageIntro
          label="Proyectos"
          title="Proyecto no disponible."
          text="Consulte al equipo comercial por referencias de fabricación documentadas para su requerimiento."
          image="/img/banner-servicios.webp"
        />
        <div className="wrap related-services">
          <Link className="text-link" to="/proyectos">
            Volver a proyectos
          </Link>
        </div>
      </>
    )
  return (
    <>
      <PageIntro
        label={`Proyectos / ${project.category}`}
        title={project.title}
        text={project.sector || project.category}
        image={project.cover.src}
      />
      <div className="wrap project-cover">
        <img src={project.cover.src} alt={project.cover.alt} width="1500" height="900" />
      </div>
      <section className="wrap editorial-split section-space">
        <h2>El requerimiento.</h2>
        <p>{project.request}</p>
      </section>
      <section className="muted-section">
        <div className="wrap editorial-split">
          <h2>La solución.</h2>
          <div>
            <p>{project.solution}</p>
            <ul className="plain-list">
              {project.scope.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>
      {project.gallery.length > 0 && (
        <section className="wrap project-grid section-space" aria-label="Fotografías del proyecto">
          {project.gallery.map((image) => (
            <img
              key={image.src}
              src={image.src}
              alt={image.alt}
              loading="lazy"
              width="900"
              height="600"
            />
          ))}
        </section>
      )}
      <section className="wrap editorial-split section-space">
        <h2>El entregable.</h2>
        <p>{project.result}</p>
      </section>
      <ContactCTA />
    </>
  )
}

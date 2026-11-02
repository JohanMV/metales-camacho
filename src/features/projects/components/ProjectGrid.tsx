import { Link } from 'react-router-dom'
import { Arrow } from '@/components/ui'
import type { ProjectCase } from '../data'
export interface ProjectGridProps {
  projects: ProjectCase[]
}
export function ProjectGrid({ projects }: ProjectGridProps) {
  return (
    <section className="wrap section-space">
      <div className="section-heading">
        <h2>Proyectos documentados.</h2>
        <p>Requerimientos, soluciones y alcances de fabricación.</p>
      </div>
      <div className="project-grid">
        {projects.map((project) => (
          <article key={project.slug}>
            <Link to={`/proyectos/${project.slug}`}>
              <img
                src={project.cover.src}
                alt={project.cover.alt}
                loading="lazy"
                width="900"
                height="600"
              />
              <p className="section-label">
                {project.category}
                {project.sector ? ` · ${project.sector}` : ''}
              </p>
              <h3>{project.title}</h3>
              <span className="text-link">
                Conocer el proyecto
                <Arrow diagonal />
              </span>
            </Link>
          </article>
        ))}
      </div>
    </section>
  )
}

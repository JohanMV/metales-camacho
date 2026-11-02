import { useState } from 'react'
import { Link } from 'react-router-dom'
import { services, industries } from '@/data/company'
import { Arrow } from '@/components/ui'
import {
  HeroSection,
  ServicesSection,
  CapacitySection,
  IndustriesExplorer,
  QualitySection,
  ContactCTA,
} from '@/components/sections'

const galleryImages = [
  { title: 'Corte de metal CNC', alt: 'Una máquina CNC cortando una pieza metálica', image: 'photo-1711418235334-8895331a6cf9', author: 'Le Trung', source: 'https://unsplash.com/photos/a-piece-of-metal-being-cut-with-a-machine-fBCQz7OUUww' },
  { title: 'Soldadura de estructuras', alt: 'Soldador trabajando sobre una estructura de acero', image: 'photo-1587407646269-c8ab18a1a9ec', author: 'Kiefer Likens', source: 'https://unsplash.com/photos/man-in-blue-and-black-jacket-smoking-cigarette-sUPiWeqqLt4' },
  { title: 'Trabajo en torno', alt: 'Detalle de un torno para trabajar metal', image: 'photo-1776090188130-26c7253ff423', author: 'LISK OBE', source: 'https://unsplash.com/photos/close-up-of-an-old-metal-lathe-in-a-workshop-_VBsh_IKsD8' },
  { title: 'Preparación de superficies', alt: 'Operario trabajando metal con una amoladora', image: 'photo-1601119462113-bdc0b695988e', author: 'Shoeib Abolhassani', source: 'https://unsplash.com/photos/a-man-working-with-a-grinder-in-a-factory-VPw-wSse8lQ' },
  { title: 'Trabajo de soldadura', alt: 'Soldador uniendo piezas de metal en un taller', image: 'photo-1738162837389-3b02d6dd507b', author: 'Cemrecan Yurtman', source: 'https://unsplash.com/photos/welder-working-on-a-piece-of-metal-in-a-factory-JpzMc-FMUes' },
  { title: 'Acabado de piezas', alt: 'Operario puliendo metal en un banco de trabajo', image: 'photo-1748348812466-8e29e1348f73', author: 'TECNIC', source: 'https://unsplash.com/photos/a-worker-is-grinding-metal-in-a-workshop-FWRAN96aRdA' },
]
export function Home() {
  const [activeIndustry, setActiveIndustry] = useState(0)
  return (
    <>
      <HeroSection />
      <ServicesSection services={services} />
      <section className="project-banner">
        <div className="wrap project-gallery">
          <div className="project-gallery-heading">
            <div>
              <p className="section-label">Proyectos y fabricación</p>
              <h2>Galería de proyectos.</h2>
            </div>
            <Link className="text-link" to="/proyectos">
              Ver proyectos <Arrow diagonal />
            </Link>
          </div>
          <div className="project-gallery-grid">
            {galleryImages.map((item, index) => (
              <figure key={item.image}>
                <div className="project-gallery-image">
                  <img src={`https://images.unsplash.com/${item.image}?auto=format&fit=crop&w=1000&q=80`} alt={item.alt} loading="lazy" width="1000" height="750" />
                </div>
                <figcaption>
                  <span className="project-gallery-number">{String(index + 1).padStart(2, '0')}</span>
                  <span className="project-gallery-caption"><strong>{item.title}</strong></span>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>
      <CapacitySection />
      <section className="wrap industries-section section-space">
        <div className="section-heading">
          <div>
            <p className="section-label">Aplicaciones por sector</p>
            <h2>
              Soluciones
              <br />
              por industria.
            </h2>
          </div>
          <p>
            Cada operación tiene sus propios retos. Explore cómo se aplican nuestras capacidades a
            su sector.
          </p>
        </div>
        <IndustriesExplorer
          industries={industries}
          active={activeIndustry}
          onChange={setActiveIndustry}
        />
      </section>
      <QualitySection />
      <ContactCTA />
    </>
  )
}

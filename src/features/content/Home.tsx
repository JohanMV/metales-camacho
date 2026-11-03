import { useEffect, useRef, useState } from 'react'
import { createPortal } from 'react-dom'
import { AnimatePresence, motion, useReducedMotion } from 'motion/react'
import { Link } from 'react-router-dom'
import { services, industries } from '@/data/company'
import { Arrow } from '@/components/ui'
import {
  HeroSection,
  ServicesSection,
  CapacitySection,
  IndustriesExplorer,
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
      <ProjectGallery />
      <CapacitySection />
      <section className="wrap industries-section section-space">
        <div className="section-heading">
          <div>
            <p className="section-label">Aplicaciones por sector</p>
            <h2>
              Soluciones
              <br />
              {' '}por industria.
            </h2>
          </div>
        </div>
        <p className="industries-description">
          Cada operación tiene sus propios retos. Explore cómo se aplican nuestras capacidades a
          su sector.
        </p>
        <IndustriesExplorer
          industries={industries}
          active={activeIndustry}
          onChange={setActiveIndustry}
        />
        <Link className="button industries-heading-link" to="/industrias">
          Conocer las industrias <Arrow />
        </Link>
      </section>
      <ContactCTA />
    </>
  )
}

export function ProjectGallery({ showLink = true }: { showLink?: boolean }) {
  const [selectedImage, setSelectedImage] = useState<(typeof galleryImages)[number] | null>(null)
  const closeButtonRef = useRef<HTMLButtonElement>(null)
  const reducedMotion = useReducedMotion()
  const renderGalleryImage = (item: (typeof galleryImages)[number], index: number) => (
    <figure key={item.image}>
      <button className="project-gallery-image" type="button" onClick={() => setSelectedImage(item)} aria-label={`Ampliar imagen: ${item.title}`}>
        <img src={`https://images.unsplash.com/${item.image}?auto=format&fit=crop&w=1000&q=80`} alt={item.alt} loading="lazy" width="1000" height="750" />
      </button>
      <figcaption>
        <span className="project-gallery-number">{String(index + 1).padStart(2, '0')}</span>
        <span className="project-gallery-caption"><strong>{item.title}</strong></span>
      </figcaption>
    </figure>
  )

  useEffect(() => {
    if (!selectedImage) return
    const previousFocus = document.activeElement as HTMLElement | null
    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    closeButtonRef.current?.focus()
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setSelectedImage(null)
      if (event.key === 'Tab') {
        event.preventDefault()
        closeButtonRef.current?.focus()
      }
    }
    document.addEventListener('keydown', handleKeyDown)
    return () => {
      document.removeEventListener('keydown', handleKeyDown)
      document.body.style.overflow = previousOverflow
      previousFocus?.focus()
    }
  }, [selectedImage])

  return (
    <>
      <section className="project-banner">
        <div className="wrap project-gallery">
          <div className="project-gallery-heading">
            <div>
              <p className="section-label">Proyectos y fabricación</p>
              <h2>Galería de proyectos.</h2>
            </div>
          </div>
          <div className="project-gallery-grid">{galleryImages.map((item, index) => renderGalleryImage(item, index))}</div>
          {showLink && <Link className="button project-gallery-link" to="/proyectos">
            Ver proyectos <Arrow diagonal />
          </Link>}
        </div>
      </section>
      {createPortal(
        <AnimatePresence>
          {selectedImage && (
            <motion.div
              className="gallery-lightbox"
              role="dialog"
              aria-modal="true"
              aria-label={`Imagen ampliada: ${selectedImage.title}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: reducedMotion ? 0 : 0.25 }}
              onClick={() => setSelectedImage(null)}
            >
              <button ref={closeButtonRef} className="gallery-lightbox-close" type="button" aria-label="Cerrar imagen ampliada" onClick={() => setSelectedImage(null)}>
                <span aria-hidden="true">×</span>
              </button>
              <motion.figure
                className="gallery-lightbox-content"
                initial={reducedMotion ? false : { opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={reducedMotion ? undefined : { opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                onClick={(event) => event.stopPropagation()}
              >
                <img src={`https://images.unsplash.com/${selectedImage.image}?auto=format&fit=max&w=2000&q=85`} alt={selectedImage.alt} />
                <figcaption>{selectedImage.title}</figcaption>
              </motion.figure>
            </motion.div>
          )}
        </AnimatePresence>,
        document.body,
      )}
    </>
  )
}

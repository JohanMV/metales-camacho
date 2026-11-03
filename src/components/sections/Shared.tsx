import { Link } from 'react-router-dom'
import { Arrow } from '@/components/ui'
export interface PageIntroProps {
  label: string
  title: string
  text: string
  image: string
}
export function PageIntro({ label, title, text, image }: PageIntroProps) {
  return (
    <section className="page-intro page-intro-photo">
      <img className="page-intro-background" src={image} alt="" />
      <div className="wrap page-intro-inner">
        <div className="breadcrumb">
          <Link to="/">Inicio</Link>
          <span aria-hidden="true">/</span>
          <span>{label}</span>
        </div>
        <h1>{title}</h1>
        <p>{text}</p>
      </div>
    </section>
  )
}
export interface ContactCTAProps {
  title?: string
  text?: string
  service?: string
}
export function ContactCTA({
  title = 'Su proyecto empieza aquí.',
  text = 'Comparta su requerimiento técnico. Conversemos sobre lo que necesita fabricar, reparar o desarrollar.',
  service,
}: ContactCTAProps) {
  return (
    <section className="contact-band contact-band-photo">
      <div className="wrap contact-band-inner">
        <div>
          <p className="section-label">De la necesidad a la solución</p>
          <h2>{title}</h2>
          <p>{text}</p>
        </div>
        <Link
          className="button button-white"
          to={service ? `/contacto?servicio=${service}` : '/contacto'}
        >
          Solicitar cotización
          <Arrow diagonal />
        </Link>
      </div>
    </section>
  )
}
export interface IndustrialImageProps {
  src: string
  alt: string
  className?: string
  eager?: boolean
}
export function IndustrialImage({ src, alt, className = '', eager = false }: IndustrialImageProps) {
  return (
    <figure className={`industrial-image ${className}`}>
      <img src={src} alt={alt} loading={eager ? 'eager' : 'lazy'} width="1536" height="1024" />
    </figure>
  )
}

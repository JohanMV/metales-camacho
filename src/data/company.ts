export const companyTeamImage =
  'https://images.unsplash.com/photo-1759922378222-47ad736a174d?auto=format&fit=crop&w=1600&q=80'

export const company = {
  name: 'Metales Camacho',
  legalName: 'Metal Mecánica Camacho S.A.C.',
  email: 'ventas1@metalescamacho.com',
  phone: '(01) 528-6227',
  phoneHref: 'tel:+5115286227',
  location: 'Industrial Infantas, Los Olivos, Lima, Perú',
  address: 'Jr. El Latón 5579, Urb. Industrial Infantas, Los Olivos, Lima',
}
export interface Service {
  slug: string
  title: string
  short: string
  description: string
  intro: string
  items: string[]
  processes: string
  image: string
  imageAlt: string
}
export const services: Service[] = [
  {
    slug: 'matriceria',
    title: 'Matricería',
    short: 'La precisión que su proceso necesita.',
    description: 'Fabricación y recuperación de matrices, rectificados y componentes de precisión.',
    intro:
      'Fabricamos y recuperamos matrices y componentes para responder a las exigencias de cada proceso productivo.',
    items: [
      'Fabricación y recuperación de matrices',
      'Rectificado plano y tangencial',
      'Placas base y bases de prensa',
      'Componentes de precisión',
    ],
    processes:
      'El rectificado y el mecanizado se definen a partir de las características de la pieza. Comparta sus planos, muestras y condiciones de uso para evaluar la solución aplicable.',
    image: '/img/precision.webp',
    imageAlt: 'Medición de un componente mecanizado con un calibrador',
  },
  {
    slug: 'estructuras',
    title: 'Estructuras metálicas',
    short: 'Fabricación para la escala industrial.',
    description: 'Fabricación y montaje de estructuras, plataformas y componentes industriales.',
    intro:
      'Desarrollamos estructuras y conjuntos metálicos para instalaciones industriales, con un alcance de fabricación y montaje definido para cada proyecto.',
    items: [
      'Plataformas, barandas y escaleras',
      'Vigas especiales y grating',
      'Tanques, silos y tolvas',
      'Componentes para transporte industrial',
    ],
    processes:
      'Evaluamos la aplicación, los planos, las condiciones de instalación y el alcance de montaje. Las especificaciones de materiales y los controles se acuerdan para cada trabajo.',
    image: '/img/soldadura.webp',
    imageAlt: 'Soldadura de un conjunto de vigas de acero',
  },
  {
    slug: 'maestranza',
    title: 'Maestranza industrial',
    short: 'Componentes para seguir operando.',
    description: 'Fabricación, mecanizado y reparación de equipos, piezas y repuestos especiales.',
    intro:
      'Fabricamos, reparamos y recuperamos equipos y repuestos según los requerimientos particulares de su operación.',
    items: [
      'Maquinaria y equipos especiales',
      'Repuestos y componentes a medida',
      'Torneado, fresado y mecanizado',
      'Reparación y recuperación de equipos',
    ],
    processes:
      'La oferta de fabricación incluye molinos, zarandas, mezcladores, transportadores y tornillos helicoidales. Consulte la viabilidad y el alcance técnico de su requerimiento.',
    image: '/img/mecanizado.webp',
    imageAlt: 'Mecanizado de un componente industrial',
  },
]
export interface Industry {
  id: string
  title: string
  description: string
  applications: string[]
  image: string
  alt: string
}
export const industries: Industry[] = [
  {
    id: 'mineria',
    title: 'Minería',
    description:
      'Componentes y conjuntos metálicos para las exigencias de las operaciones mineras.',
    applications: [
      'Tolvas y componentes de transporte',
      'Repuestos y recuperación de equipos',
      'Plataformas y estructuras industriales',
    ],
    image: '/img/estructuras.webp',
    alt: 'Estructuras de acero para aplicaciones industriales',
  },
  {
    id: 'construccion',
    title: 'Construcción e infraestructura',
    description:
      'Fabricación estructural adaptada a los planos y a las condiciones de cada instalación.',
    applications: [
      'Vigas especiales y plataformas',
      'Barandas, escaleras y grating',
      'Fabricación y montaje según alcance',
    ],
    image: '/img/soldadura.webp',
    alt: 'Fabricación de una estructura metálica',
  },
  {
    id: 'manufactura',
    title: 'Manufactura',
    description:
      'Matrices, piezas y equipos que se integran a los procesos de producción industrial.',
    applications: [
      'Fabricación y recuperación de matrices',
      'Componentes mecanizados',
      'Repuestos según plano o muestra',
    ],
    image: '/img/precision.webp',
    alt: 'Componente de precisión durante una medición',
  },
  {
    id: 'energia',
    title: 'Energía e hidrocarburos',
    description:
      'Soluciones de fabricación y recuperación sujetas a las especificaciones técnicas de cada operación.',
    applications: [
      'Componentes especiales',
      'Conjuntos y estructuras metálicas',
      'Mecanizado y recuperación de piezas',
    ],
    image: '/img/torneado.webp',
    alt: 'Torneado de una pieza de acero',
  },
  {
    id: 'pesca',
    title: 'Pesca y procesamiento',
    description:
      'Equipos y componentes para el transporte y la transformación de materiales en planta.',
    applications: [
      'Transportadores y tornillos helicoidales',
      'Mezcladores y componentes de proceso',
      'Reparación de equipos industriales',
    ],
    image: '/img/mecanizado.webp',
    alt: 'Proceso de fabricación de un componente industrial',
  },
]
export const navigation = [
  { label: 'Inicio', path: '/' },
  {
    label: 'Empresa',
    path: '/empresa',
    children: [
      { label: 'Nosotros', path: '/empresa' },
      { label: 'Capacidad industrial', path: '/empresa/capacidad' },
      { label: 'Calidad y seguridad', path: '/empresa/calidad' },
    ],
  },
  {
    label: 'Servicios',
    path: '/servicios',
    children: [
      { label: 'Todos los servicios', path: '/servicios' },
      ...services.map((service) => ({ label: service.title, path: `/servicios/${service.slug}` })),
    ],
  },
  { label: 'Industrias', path: '/industrias' },
  { label: 'Proyectos', path: '/proyectos' },
  { label: 'Contacto', path: '/contacto' },
]

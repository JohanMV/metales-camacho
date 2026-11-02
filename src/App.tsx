import { Suspense, lazy, useEffect } from 'react'
import { BrowserRouter, Link, Route, Routes, useLocation } from 'react-router-dom'
import { Header, Footer } from '@/components/layout/SiteLayout'
import { Home } from '@/features/content/Home'
const ServicesPage = lazy(() =>
  import('@/features/content/ServicesPages').then((module) => ({ default: module.ServicesPage })),
)
const ServicePage = lazy(() =>
  import('@/features/content/ServicesPages').then((module) => ({ default: module.ServicePage })),
)
const CompanyPage = lazy(() =>
  import('@/features/content/CompanyPages').then((module) => ({ default: module.CompanyPage })),
)
const CapacityPage = lazy(() =>
  import('@/features/content/CompanyPages').then((module) => ({ default: module.CapacityPage })),
)
const QualityPage = lazy(() =>
  import('@/features/content/CompanyPages').then((module) => ({ default: module.QualityPage })),
)
const IndustriesPage = lazy(() =>
  import('@/features/content/OtherPages').then((module) => ({ default: module.IndustriesPage })),
)
const ProjectsPage = lazy(() =>
  import('@/features/content/OtherPages').then((module) => ({ default: module.ProjectsPage })),
)
const PrivacyPage = lazy(() =>
  import('@/features/content/OtherPages').then((module) => ({ default: module.PrivacyPage })),
)
const ProjectDetailPage = lazy(() =>
  import('@/features/projects/ProjectDetailPage').then((module) => ({
    default: module.ProjectDetailPage,
  })),
)
const ContactPage = lazy(() =>
  import('@/features/contact/ContactPage').then((module) => ({ default: module.ContactPage })),
)
const titles: Record<string, string> = {
  '/': 'Ingeniería y fabricación industrial',
  '/empresa': 'Nuestra empresa',
  '/empresa/capacidad': 'Capacidad industrial',
  '/empresa/calidad': 'Calidad y seguridad',
  '/servicios': 'Soluciones industriales',
  '/servicios/matriceria': 'Matricería',
  '/servicios/estructuras': 'Estructuras metálicas',
  '/servicios/maestranza': 'Maestranza industrial',
  '/industrias': 'Industrias',
  '/proyectos': 'Proyectos',
  '/contacto': 'Contacto y cotizaciones',
  '/privacidad': 'Privacidad',
}
function RouteEffects() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' })
    document.title = `${titles[pathname] || 'Página no encontrada'} | Metales Camacho`
    if (pathname !== '/') document.getElementById('main')?.focus({ preventScroll: true })
  }, [pathname])
  return null
}
function App() {
  return (
    <BrowserRouter>
      <RouteEffects />
      <a className="skip-link" href="#main">
        Ir al contenido
      </a>
      <Header />
      <main id="main" tabIndex={-1}>
        <Suspense
          fallback={
            <div className="route-loading wrap" role="status">
              Cargando contenido…
            </div>
          }
        >
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/empresa" element={<CompanyPage />} />
            <Route path="/empresa/capacidad" element={<CapacityPage />} />
            <Route path="/empresa/calidad" element={<QualityPage />} />
            <Route path="/servicios" element={<ServicesPage />} />
            <Route path="/servicios/:slug" element={<ServicePage />} />
            <Route path="/industrias" element={<IndustriesPage />} />
            <Route path="/proyectos" element={<ProjectsPage />} />
            <Route path="/proyectos/:slug" element={<ProjectDetailPage />} />
            <Route path="/contacto" element={<ContactPage />} />
            <Route path="/privacidad" element={<PrivacyPage />} />
            <Route
              path="*"
              element={
                <section className="wrap not-found">
                  <p className="section-label">Error 404</p>
                  <h1>No encontramos esta página.</h1>
                  <p>Puede volver al inicio o explorar nuestros servicios.</p>
                  <Link className="button" to="/">
                    Volver al inicio
                  </Link>
                </section>
              }
            />
          </Routes>
        </Suspense>
      </main>
      <Footer />
    </BrowserRouter>
  )
}
export default App

import { Link, NavLink, useLocation } from 'react-router-dom'
import { Arrow } from '@/components/ui'
import { company, navigation, services } from '@/data/company'
import { useNavigation } from '@/hooks/useNavigation'
export function Header() {
  const { pathname } = useLocation()
  const { open, setOpen, close, headerRef, toggleRef } = useNavigation()
  return (
    <header className={pathname === '/' ? 'header header--over-hero' : 'header'} ref={headerRef}>
      <div className="navbar-surface">
        <div className="wrap header-inner">
          <Link to="/" className="brand" aria-label="Metales Camacho, inicio" onClick={close}>
            <img src="/img/logo.webp" alt="Metales Camacho" width="2056" height="765" />
          </Link>
          <button
            ref={toggleRef}
            className="menu-toggle"
            aria-expanded={open}
            aria-controls="main-nav"
            aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
            onClick={() => setOpen(!open)}
          >
            <span>{open ? 'Cerrar' : 'Menú'}</span>
            <span className={`menu-lines ${open ? 'is-open' : ''}`} aria-hidden="true">
              <i />
              <i />
            </span>
          </button>
          <nav
            id="main-nav"
            className={`navigation ${open ? 'open' : ''}`}
            aria-label="Navegación principal"
            onClick={(event) => {
              if ((event.target as HTMLElement).closest('a')) close()
            }}
          >
            {navigation.map((item) =>
              item.children ? (
                <details key={item.path} name="main-navigation">
                  <summary>
                    {item.label}
                    <svg width="12" height="12" viewBox="0 0 12 12" aria-hidden="true">
                      <path d="m3 4 3 3 3-3" stroke="currentColor" fill="none" strokeWidth="1.4" />
                    </svg>
                  </summary>
                  <div className="dropdown">
                    {item.children.map((child) => (
                      <NavLink key={child.path} to={child.path} end>
                        {child.label}
                        <Arrow diagonal />
                      </NavLink>
                    ))}
                  </div>
                </details>
              ) : (
                <NavLink key={item.path} to={item.path} end={item.path === '/'}>
                  {item.label}
                </NavLink>
              ),
            )}
            <Link className="button nav-cta" to="/contacto">
              Solicitar cotización
              <Arrow diagonal />
            </Link>
          </nav>
        </div>
      </div>
    </header>
  )
}
export function Footer() {
  return (
    <footer className="footer">
      <div className="wrap">
        <div className="footer-brand">
          <Link to="/" aria-label="Metales Camacho, inicio">
            <img src="/img/logo.webp" alt="Metales Camacho" width="2056" height="765" />
          </Link>
          <div>
            <p>Ingeniería y fabricación para los requerimientos de la industria.</p>
          </div>
        </div>
        <div className="footer-top">
          <div>
            <h3>Empresa</h3>
            <Link to="/empresa">Nosotros</Link>
            <Link to="/empresa/capacidad">Capacidad industrial</Link>
            <Link to="/empresa/calidad">Calidad y seguridad</Link>
            <Link to="/industrias">Industrias</Link>
            <Link to="/proyectos">Proyectos</Link>
          </div>
          <div>
            <h3>Soluciones</h3>
            {services.map((service) => (
              <Link key={service.slug} to={`/servicios/${service.slug}`}>
                {service.title}
              </Link>
            ))}
            <Link to="/contacto">
              Solicitar cotización
              <Arrow diagonal />
            </Link>
          </div>
          <div className="footer-contact">
            <h3>Conversemos</h3>
            <a href={`mailto:${company.email}`}>
              {company.email}
              <Arrow diagonal />
            </a>
            <a href={company.phoneHref}>{company.phone}</a>
            <p>{company.location}</p>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© 2026 {company.legalName}</span>
          <Link to="/privacidad">Privacidad</Link>
        </div>
      </div>
    </footer>
  )
}

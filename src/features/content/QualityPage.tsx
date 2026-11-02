import { Link } from 'react-router-dom'
import { ContactCTA, IndustrialImage, PageIntro } from '@/components/sections'
import { Arrow } from '@/components/ui'

export function QualityPage() {
  return (
    <>
      <PageIntro
        label="Empresa / Calidad y seguridad"
        title="Calidad y seguridad."
        text="Inspección, documentación y seguridad: aspectos que se definen desde la evaluación del requerimiento."
        image="/img/precision.webp"
      />
      <section className="wrap quality-section section-space">
        <IndustrialImage
          src="/img/precision.webp"
          alt="Medición de un componente de acero"
        />
        <div>
          <p className="section-label">Control de calidad</p>
          <h2>
            Verificar también
            <br />
            es fabricar.
          </h2>
          <p>
            La información corporativa contempla controles dimensionales, registros de inspección y
            documentación técnica como parte del trabajo industrial.
          </p>
          <p>
            Los controles y los documentos exigibles se acuerdan de acuerdo con el tipo de
            fabricación y las condiciones de cada contrato.
          </p>
        </div>
      </section>
      <section className="muted-section">
        <div className="wrap documentation-layout">
          <div>
            <p className="section-label">Documentación técnica</p>
            <h2>
              Documentación
              <br />
              técnica.
            </h2>
            <p>Según el alcance del proyecto, un dossier puede contemplar:</p>
          </div>
          <ul className="capability-list">
            {[
              'Planes de calidad y puntos de inspección',
              'Registros y controles dimensionales',
              'Certificados y trazabilidad de materiales',
              'Documentación de procedimientos de soldadura',
              'Ensayos y certificados de calibración aplicables',
            ].map((item) => (
              <li key={item}>
                <span className="motif-dot" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>
      <section className="wrap editorial-split section-space">
        <h2>
          Seguridad y<br />
          responsabilidad.
        </h2>
        <div>
          <p>
            La empresa ha publicado políticas sobre calidad, seguridad y salud en el trabajo,
            medioambiente, anticorrupción y ética corporativa.
          </p>
          <p>
            Para procesos de evaluación de proveedores, solicite las versiones vigentes de
            políticas, homologaciones y documentación aplicable directamente al equipo comercial.
          </p>
          <Link className="text-link" to="/contacto">
            Consultar documentación
            <Arrow diagonal />
          </Link>
        </div>
      </section>
      <ContactCTA />
    </>
  )
}

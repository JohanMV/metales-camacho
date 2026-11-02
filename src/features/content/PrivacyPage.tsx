import { Link } from 'react-router-dom'

import { Arrow } from '@/components/ui'
import { PageIntro } from '@/components/sections'

export function PrivacyPage() {
  return (
    <>
      <PageIntro
        label="Privacidad"
        title="Sobre sus datos."
        text="Información sobre el funcionamiento del formulario de consultas de esta versión del sitio."
        image="/img/banner-contacto.webp"
      />
      <section className="wrap privacy-content section-space">
        <h2>Preparación de solicitudes</h2>
        <p>
          El formulario organiza los datos que usted introduce y permite preparar un correo o
          descargar un borrador de solicitud. Esta versión no transmite automáticamente el
          formulario ni los archivos a un servidor.
        </p>
        <h2>Archivos adjuntos</h2>
        <p>
          Los documentos seleccionados se procesan en su navegador para incluirlos en el borrador
          descargable. El envío se realiza únicamente cuando usted decide enviar el correo desde su
          propia aplicación.
        </p>
        <h2>Contacto directo</h2>
        <p>
          Si utiliza los enlaces de correo o teléfono, la comunicación se realiza con el servicio
          que usted elija. Puede consultar a la empresa sobre el tratamiento de la información antes
          de enviar documentación técnica.
        </p>
        <p className="small-note">
          Antes de habilitar la recepción automática de solicitudes se deberá publicar la política
          corporativa correspondiente al tratamiento de datos y al servicio de recepción.
        </p>
        <Link className="text-link" to="/contacto">
          Volver a contacto
          <Arrow />
        </Link>
      </section>
    </>
  )
}

# Metales Camacho

Web corporativa multipágina desarrollada con React 19, TypeScript estricto, Vite, Tailwind CSS v4 y Motion. Los prompts aportados se aplican como especificación de diseño y desarrollo; la ficha corporativa se utiliza como fuente de contenido con sus estados de validación.

## Ejecutar

```sh
pnpm install
pnpm dev
```

```sh
pnpm build
pnpm lint
pnpm exec prettier --check src index.html
```

`dist/` contiene la compilación de producción. El servidor debe resolver las rutas de React Router con `index.html`; se incluye `public/_redirects` para proveedores compatibles con esa convención. Para IIS, Apache, Nginx u otro proveedor configure el fallback SPA equivalente.

## Estructura

- `src/components/ui`: primitivos y animación accesible.
- `src/components/layout`: encabezado y pie compartidos.
- `src/components/sections`: secciones reutilizables con interfaces explícitas.
- `src/features/content`: páginas corporativas y de servicios.
- `src/features/contact`: formulario, hook y generación del borrador de correo.
- `src/features/projects`: colección tipada, cuadrícula y detalle de casos documentados.
- `src/data/company.ts`: información corporativa, navegación, servicios e industrias.
- `src/styles`: tokens, composición y adaptación responsive.

## Contacto y archivos

El formulario valida los campos obligatorios y permite seleccionar hasta cinco documentos, con un máximo conjunto de 10 MB. Prepara un borrador `.eml` descargable con adjuntos para abrir en Outlook, Thunderbird u otra aplicación compatible. Sin archivos y con una consulta corta, también ofrece un enlace `mailto:`. No se envían solicitudes automáticamente, no se suben archivos y no se guardan datos en el servidor. La interfaz informa de ello antes y después de preparar la solicitud.

Para recepción directa se requiere configurar un servicio de envío y almacenamiento y publicar la política corporativa correspondiente. No hay credenciales ni servicios de correo simulados.

## Contenido empresarial pendiente

La dirección exacta, teléfono, correo y horario proceden de la información publicada aportada; requieren confirmación empresarial antes del lanzamiento público. La fecha de 1992 se atribuye expresamente a la reseña corporativa y no se presenta como fecha registral de la S.A.C. Los modelos de maquinaria se presentan como referencias publicadas, con disponibilidad a consultar.

No se publican clientes ni certificaciones vigentes sin autorización y respaldo. No se inventan casos. `src/features/projects/data.ts` contiene una colección vacía: al incorporar casos documentados y fotografías autorizadas, la cuadrícula y las páginas individuales se activan automáticamente. No se publican misión y visión sin versión corporativa confirmada.

## Imágenes y marca

El logotipo oficial original permanece en `public/img/Logo_Metales_Camacho.png`. La web usa una copia WebP optimizada, conservando composición y proporciones. Las cinco escenas industriales son ilustraciones fotográficas generadas con IA, identificadas como referenciales; no representan instalaciones, empleados o trabajos reales de la empresa. Los originales de las escenas están en `.taste-skill/source-images/`; solo sus versiones optimizadas se sirven al visitante.

## Verificación

Se revisaron las páginas en navegador a 1440, 768, 390 y 320 px, el menú y submenús móviles, el selector de industrias y el formulario. Los informes y capturas están en `.taste-skill/review/`. El borrador EML se comprobó con un parser independiente de correo, incluyendo el contenido binario de un adjunto y los caracteres UTF-8. El inspector propio de la skill no pudo iniciar el navegador instalado; se utilizó el navegador integrado para las comprobaciones visuales.

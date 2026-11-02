import { company, services } from '@/data/company'
export interface QuoteRequest {
  name: string
  company: string
  email: string
  phone: string
  service: string
  message: string
  sector: string
}
export function quoteBody(request: QuoteRequest) {
  return [
    'SOLICITUD DE COTIZACIÓN',
    '',
    `Nombre: ${request.name}`,
    `Empresa: ${request.company}`,
    `Correo: ${request.email}`,
    `Teléfono: ${request.phone || 'No indicado'}`,
    `Servicio: ${services.find((service) => service.slug === request.service)?.title || request.service}`,
    ...(request.sector ? [`Sector: ${request.sector}`] : []),
    '',
    'REQUERIMIENTO',
    request.message,
  ].join('\r\n')
}
function toBase64(bytes: Uint8Array): string {
  let binary = ''
  for (let index = 0; index < bytes.length; index += 8192)
    binary += String.fromCharCode(...bytes.subarray(index, index + 8192))
  return btoa(binary)
}
function foldedBase64(bytes: Uint8Array) {
  return (
    toBase64(bytes)
      .match(/.{1,76}/g)
      ?.join('\r\n') || ''
  )
}
/** Produces a local RFC 5322 draft, including attachments, without transmitting data. */
export async function createQuoteDraft(request: QuoteRequest, files: File[]): Promise<Blob> {
  const boundary = `camacho-${crypto.randomUUID()}`
  const encodedSubject = `=?UTF-8?B?${toBase64(new TextEncoder().encode('Solicitud de cotización — ' + request.company.replace(/[\r\n]/g, ' ')))}?=`
  const parts = [
    `To: ${company.email}`,
    `Subject: ${encodedSubject}`,
    'X-Unsent: 1',
    'MIME-Version: 1.0',
    `Content-Type: multipart/mixed; boundary="${boundary}"`,
    '',
    `--${boundary}`,
    'Content-Type: text/plain; charset=UTF-8',
    'Content-Transfer-Encoding: base64',
    '',
    foldedBase64(new TextEncoder().encode(quoteBody(request))),
  ]
  for (const file of files) {
    const filename = encodeURIComponent(file.name.replace(/[\r\n]/g, ''))
    parts.push(
      `--${boundary}`,
      'Content-Type: application/octet-stream',
      `Content-Disposition: attachment; filename*=UTF-8''${filename}`,
      'Content-Transfer-Encoding: base64',
      '',
      foldedBase64(new Uint8Array(await file.arrayBuffer())),
    )
  }
  parts.push(`--${boundary}--`, '')
  return new Blob([parts.join('\r\n')], { type: 'message/rfc822' })
}
export function quoteMailto(request: QuoteRequest) {
  return `mailto:${company.email}?subject=${encodeURIComponent('Solicitud de cotización — ' + request.company)}&body=${encodeURIComponent(quoteBody(request))}`
}

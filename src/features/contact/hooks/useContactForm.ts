import { useEffect, useState, type ChangeEvent, type FormEvent } from 'react'
import { createQuoteDraft, quoteBody, quoteMailto, type QuoteRequest } from '../services/quoteDraft'
export interface PreparedQuote {
  url: string
  body: string
  mailto: string
}
const allowedExtensions = /\.(pdf|png|jpe?g|dwg|dxf|step|stp)$/i
export function useContactForm() {
  const [files, setFiles] = useState<File[]>([])
  const [error, setError] = useState('')
  const [busy, setBusy] = useState(false)
  const [draft, setDraft] = useState<PreparedQuote | null>(null)
  useEffect(
    () => () => {
      if (draft) URL.revokeObjectURL(draft.url)
    },
    [draft],
  )
  function selectFiles(event: ChangeEvent<HTMLInputElement>) {
    const selected = Array.from(event.target.files || [])
    setDraft(null)
    if (
      selected.length > 5 ||
      selected.reduce((total, file) => total + file.size, 0) > 10 * 1024 * 1024
    ) {
      setError('Seleccione hasta 5 archivos con un tamaño total máximo de 10 MB.')
      setFiles([])
      event.target.value = ''
      return
    }
    if (selected.some((file) => !allowedExtensions.test(file.name))) {
      setError('Use archivos PDF, JPG, PNG, DWG, DXF, STEP o STP.')
      setFiles([])
      event.target.value = ''
      return
    }
    setError('')
    setFiles(selected)
  }
  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const data = new FormData(event.currentTarget)
    const field = (key: string) => String(data.get(key) || '').trim()
    const request: QuoteRequest = {
      name: field('name'),
      company: field('company'),
      email: field('email'),
      phone: field('phone'),
      service: field('service'),
      message: field('message'),
      sector: field('sector'),
    }
    if (
      !request.name ||
      !request.company ||
      !request.email ||
      !request.service ||
      !request.message
    ) {
      setError('Complete todos los campos obligatorios.')
      return
    }
    setBusy(true)
    setError('')
    try {
      const blob = await createQuoteDraft(request, files)
      setDraft({
        url: URL.createObjectURL(blob),
        body: quoteBody(request),
        mailto: quoteMailto(request),
      })
    } catch {
      setError(
        'No se pudo preparar el archivo. Inténtelo nuevamente o escríbanos directamente por correo.',
      )
    } finally {
      setBusy(false)
    }
  }
  return { files, error, busy, draft, selectFiles, submit, clearDraft: () => setDraft(null) }
}

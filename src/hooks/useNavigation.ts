import { useEffect, useRef, useState } from 'react'
export function useNavigation() {
  const [open, setOpen] = useState(false)
  const headerRef = useRef<HTMLElement>(null)
  const toggleRef = useRef<HTMLButtonElement>(null)
  const close = () => {
    setOpen(false)
    headerRef.current
      ?.querySelectorAll('details[open]')
      .forEach((element) => element.removeAttribute('open'))
  }
  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (event.key !== 'Escape') return
      const focusedSummary = headerRef.current?.querySelector(
        'details[open] > summary',
      ) as HTMLElement | null
      setOpen(false)
      headerRef.current
        ?.querySelectorAll('details[open]')
        .forEach((element) => element.removeAttribute('open'))
      if (open) toggleRef.current?.focus()
      else focusedSummary?.focus()
    }
    const outside = (event: PointerEvent) => {
      if (headerRef.current && !headerRef.current.contains(event.target as Node)) {
        setOpen(false)
        headerRef.current
          .querySelectorAll('details[open]')
          .forEach((element) => element.removeAttribute('open'))
      }
    }
    document.addEventListener('keydown', onKey)
    document.addEventListener('pointerdown', outside)
    return () => {
      document.removeEventListener('keydown', onKey)
      document.removeEventListener('pointerdown', outside)
    }
  }, [open])
  return { open, setOpen, close, headerRef, toggleRef }
}

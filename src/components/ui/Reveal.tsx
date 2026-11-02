import { motion, useReducedMotion } from 'motion/react'
import type { ReactNode } from 'react'
export interface RevealProps {
  children: ReactNode
  className?: string
  delay?: number
  image?: boolean
}
export function Reveal({ children, className, delay = 0, image = false }: RevealProps) {
  const reduce = useReducedMotion()
  return (
    <motion.div
      className={className}
      initial={false}
      whileInView={reduce ? undefined : { y: [image ? 14 : 22, 0], opacity: [0.65, 1] }}
      viewport={{ once: true, amount: 0.12 }}
      transition={{ duration: image ? 0.9 : 0.65, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.div>
  )
}

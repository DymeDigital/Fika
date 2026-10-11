import type { CSSProperties, ReactNode } from 'react'

interface RevealProps {
  children: ReactNode
  /** Travel distance in px for the rise-in (default 24). */
  y?: number
  className?: string
  /** Accepted for backwards compatibility; no longer used. */
  delay?: number
}

/**
 * Entrance wrapper. Pure CSS scroll-driven animation (see `.reveal` in
 * globals.css) — renders as a plain server component with no JS cost.
 */
export default function Reveal({ children, y, className }: RevealProps) {
  return (
    <div
      className={className ? `reveal ${className}` : 'reveal'}
      style={y != null ? ({ '--reveal-y': `${y}px` } as CSSProperties) : undefined}
    >
      {children}
    </div>
  )
}

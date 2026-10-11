interface SectionHeaderProps {
  label?: string
  title: string
  subtitle?: string
  center?: boolean
  light?: boolean
}

export default function SectionHeader({ label, title, subtitle, center = false, light = false }: SectionHeaderProps) {
  return (
    <div className={`${center ? 'text-center' : ''} mb-12 reveal`}>
      {label && (
        <p className={`section-label mb-3 ${light ? 'text-white/40' : ''}`}
          style={light ? { color: 'rgba(255,255,255,0.5)' } : {}}>
          {label}
        </p>
      )}
      <h2 className={`display-md ${light ? 'text-white' : 'text-finka-black'}`}
        style={{ color: light ? 'white' : '#0D0D0D' }}>
        {title}
      </h2>
      {subtitle && (
        <p className={`mt-3 text-base max-w-xl leading-relaxed ${center ? 'mx-auto' : ''}`}
          style={{ color: light ? 'rgba(255,255,255,0.6)' : '#737370' }}>
          {subtitle}
        </p>
      )}
      <div className={`mt-5 section-divider ${center ? 'mx-auto' : ''}`} />
    </div>
  )
}

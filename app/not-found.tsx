import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center" style={{ background: '#FAFAF9' }}>
      <div className="text-center px-6">
        <p className="section-label mb-4">404</p>
        <h1 className="display-lg mb-4" style={{ color: '#0D0D0D' }}>Page not found</h1>
        <p className="text-base mb-8" style={{ color: '#737370' }}>
          The page you&apos;re looking for doesn&apos;t exist.
        </p>
        <Link href="/" className="btn-primary">
          Back to Home
        </Link>
      </div>
    </div>
  )
}

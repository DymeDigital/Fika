import { ImageResponse } from 'next/og'
import { SITE } from '@/lib/constants'

export const dynamic = 'force-static'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'
export const alt = `${SITE.name} — ${SITE.tagline}`

export default function TwitterImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          justifyContent: 'center',
          padding: '80px 100px',
          background: '#116242',
          color: 'white',
          fontFamily: 'sans-serif',
          position: 'relative',
        }}
      >
        <div
          style={{
            display: 'flex',
            width: 84,
            height: 84,
            borderRadius: 12,
            background: 'rgba(255,255,255,0.12)',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: 44,
            fontWeight: 800,
            marginBottom: 40,
          }}
        >
          F
        </div>
        <div style={{ display: 'flex', fontSize: 72, fontWeight: 800, lineHeight: 1.05 }}>
          {SITE.name}
        </div>
        <div
          style={{
            display: 'flex',
            fontSize: 32,
            fontWeight: 400,
            marginTop: 20,
            color: 'rgba(255,255,255,0.8)',
          }}
        >
          {SITE.tagline}
        </div>
        <div
          style={{
            display: 'flex',
            position: 'absolute',
            bottom: 0,
            left: 0,
            width: '100%',
            height: 14,
            background: '#03341E',
          }}
        />
      </div>
    ),
    { ...size }
  )
}

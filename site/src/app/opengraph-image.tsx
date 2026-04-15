import { ImageResponse } from 'next/og'

export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          background: '#0c0c0c',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: '72px 80px',
          fontFamily: 'sans-serif',
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
          }}
        >
          <span
            style={{
              color: '#555555',
              fontSize: 14,
              letterSpacing: '0.15em',
              textTransform: 'uppercase',
            }}
          >
            antval.dev
          </span>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
          <div
            style={{
              color: '#e8e8e8',
              fontSize: 72,
              fontWeight: 500,
              letterSpacing: '-2px',
              lineHeight: 1,
            }}
          >
            Luis Valerio
          </div>
          <div
            style={{
              color: '#888888',
              fontSize: 28,
              fontWeight: 400,
              letterSpacing: '-0.5px',
            }}
          >
            Principal Architect
          </div>
          <div
            style={{
              color: '#555555',
              fontSize: 18,
              fontWeight: 400,
              marginTop: 8,
            }}
          >
            Commerce platforms · Distributed systems · Cloud-native delivery
          </div>
        </div>
      </div>
    ),
    { ...size }
  )
}

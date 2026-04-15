import { ImageResponse } from 'next/og'

export const size = { width: 32, height: 32 }
export const contentType = 'image/png'

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          background: '#0c0c0c',
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          border: '1px solid #1f1f1f',
        }}
      >
        <span
          style={{
            color: '#e8e8e8',
            fontSize: 13,
            fontWeight: 500,
            letterSpacing: '-0.5px',
            fontFamily: 'sans-serif',
          }}
        >
          LV
        </span>
      </div>
    ),
    { ...size }
  )
}

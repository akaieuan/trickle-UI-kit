import { ImageResponse } from 'next/og';

export const alt = 'trickle — text animation kit for React';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

const LINES = [
  { width: 96, color: '#fafafa' },
  { width: 72, color: '#fafafa' },
  { width: 48, color: '#fafafa' },
  { width: 24, color: '#69b47f' }
];

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          width: '100%',
          height: '100%',
          padding: 80,
          background: '#060606'
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
            gap: 10
          }}
        >
          {LINES.map((line, i) => (
            <div
              key={i}
              style={{
                display: 'flex',
                width: line.width,
                height: 14,
                borderRadius: 7,
                background: line.color
              }}
            />
          ))}
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
          <div style={{ display: 'flex', alignItems: 'baseline', gap: 14 }}>
            <div
              style={{
                display: 'flex',
                fontSize: 104,
                letterSpacing: -4,
                color: '#fafafa'
              }}
            >
              trickle
            </div>
            <div
              style={{
                display: 'flex',
                fontSize: 104,
                letterSpacing: -4,
                color: '#5a5a5a'
              }}
            >
              kit
            </div>
          </div>
          <div
            style={{
              display: 'flex',
              fontSize: 34,
              lineHeight: 1.35,
              color: '#a1a1a1'
            }}
          >
            Pure-CSS text animations for React. Zero animation runtime, SSR-safe,
            copy-paste install.
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
            <div style={{ display: 'flex', fontSize: 26, color: '#69b47f' }}>
              47 components
            </div>
            <div style={{ display: 'flex', fontSize: 26, color: '#5a5a5a' }}>
              tricklekit.dev
            </div>
          </div>
        </div>
      </div>
    ),
    size
  );
}

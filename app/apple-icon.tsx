import { ImageResponse } from 'next/og';

export const size = { width: 180, height: 180 };
export const contentType = 'image/png';

// Mirrors app/icon.svg: a decaying 5-bar waveform, final bar in the accent green.
const BARS = [
  { height: 135, color: '#fafafa' },
  { height: 101, color: '#fafafa' },
  { height: 73, color: '#fafafa' },
  { height: 51, color: '#fafafa' },
  { height: 34, color: '#69b47f' }
];

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          display: 'flex',
          width: '100%',
          height: '100%',
          alignItems: 'center',
          justifyContent: 'center',
          gap: 11,
          background: '#060606',
          borderRadius: 40
        }}
      >
        {BARS.map((bar, i) => (
          <div
            key={i}
            style={{
              display: 'flex',
              width: 19,
              height: bar.height,
              borderRadius: 10,
              background: bar.color
            }}
          />
        ))}
      </div>
    ),
    size
  );
}

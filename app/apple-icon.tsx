import { ImageResponse } from 'next/og';

export const size = { width: 180, height: 180 };
export const contentType = 'image/png';

// Mirrors app/icon.svg: four text lines trickling down, the last one in the accent green.
const LINES = [
  { width: 112, color: '#fafafa' },
  { width: 84, color: '#fafafa' },
  { width: 56, color: '#fafafa' },
  { width: 28, color: '#69b47f' }
];

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          width: '100%',
          height: '100%',
          alignItems: 'center',
          justifyContent: 'center',
          gap: 14,
          background: '#060606'
        }}
      >
        {LINES.map((line, i) => (
          <div
            key={i}
            style={{
              display: 'flex',
              alignSelf: 'flex-start',
              marginLeft: 34,
              width: line.width,
              height: 16,
              borderRadius: 8,
              background: line.color
            }}
          />
        ))}
      </div>
    ),
    size
  );
}

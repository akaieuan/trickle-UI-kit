import type { NextConfig } from 'next';

const config: NextConfig = {
  reactStrictMode: true,
  async headers() {
    return [
      {
        source: '/r/:path*',
        headers: [
          { key: 'Access-Control-Allow-Origin', value: '*' },
          { key: 'Access-Control-Allow-Methods', value: 'GET, OPTIONS' },
          {
            key: 'Cache-Control',
            value: 'public, max-age=300, s-maxage=86400, stale-while-revalidate=604800'
          }
        ]
      }
    ];
  }
};

export default config;

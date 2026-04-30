import type { Metadata } from 'next';
import { SiteHeader } from '@/components/site/header';
import { SiteFooter } from '@/components/site/footer';
import './globals.css';

export const metadata: Metadata = {
  title: {
    default: 'trickle — text animation kit for React',
    template: '%s · trickle'
  },
  description:
    'Open-source, server-optimized text animation kit for React/Next.js. Pure CSS keyframes, zero animation runtime, shadcn-style copy-paste registry.',
  metadataBase: new URL('https://trickle.dev'),
  openGraph: {
    title: 'trickle — text animation kit for React',
    description: 'Pure CSS keyframes. Zero animation runtime. SSR-safe. Shadcn-style copy-paste.',
    url: 'https://trickle.dev',
    siteName: 'trickle',
    type: 'website'
  }
};

const themeInitScript = `(function(){try{var t=localStorage.getItem('theme');var d=t==='dark'||(!t&&window.matchMedia('(prefers-color-scheme: dark)').matches);if(d)document.documentElement.classList.add('dark');}catch(e){}})();`;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en' suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
      </head>
      <body className='flex min-h-screen flex-col bg-background text-foreground antialiased'>
        <SiteHeader />
        <main className='flex-1'>{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}

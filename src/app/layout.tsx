import type { Metadata } from 'next';
import './globals.css';

// SEO and Meta Configuration
export const metadata: Metadata = {
  title: 'Fitness900 - Coming Soon',
  description: 'Fitness900 is coming soon. Stay tuned for exciting updates and launch announcements.',
  keywords: [
    'Fitness900',
    'fitness',
    'gym',
    'workout',
    'health',
    'exercise',
    'coming soon',
  ],
  authors: [{ name: 'Fitness900 Team' }],
  creator: 'Fitness900',
  publisher: 'Fitness900',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    title: 'Fitness900 - Coming Soon',
    description: 'Fitness900 is coming soon. Stay tuned for exciting updates and launch announcements.',
    url: 'https://fitness900.com',
    siteName: 'Fitness900',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Fitness900 - Coming Soon',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Fitness900 - Coming Soon',
    description: 'Fitness900 is coming soon. Stay tuned for exciting updates and launch announcements.',
    images: ['/images/twitter-card.jpg'],
  },
  verification: {
    // Add verification codes when available
    // google: '',
    // yandex: '',
    // yahoo: '',
    // other: {},
  },
  alternates: {
    canonical: 'https://fitness900.com',
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png',
    other: {
      rel: 'apple-touch-icon-precomposed',
      url: '/apple-touch-icon-precomposed.png',
    },
  },
  manifest: '/site.webmanifest',
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
    userScalable: false,
  },
  themeColor: '#000000',
  colorScheme: 'dark light',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* Preconnect to external domains for performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        
        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Organization',
              name: 'Fitness900',
              url: 'https://fitness900.com',
              logo: 'https://fitness900.com/images/logo.png',
              description: 'Fitness900 - Your fitness journey starts here',
              sameAs: [
                // Add social media URLs when available
                // 'https://facebook.com/fitness900',
                // 'https://instagram.com/fitness900',
                // 'https://twitter.com/fitness900',
              ],
            }),
          }}
        />
      </head>
      <body className="antialiased">
        <div id="root">
          {children}
        </div>
      </body>
    </html>
  );
}
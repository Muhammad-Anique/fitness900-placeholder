import type { Metadata, Viewport } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: '#FF6B35',
};

export const metadata: Metadata = {
  title: {
    default: 'Fitness900 - Your Premier Fitness Destination',
    template: '%s | Fitness900',
  },
  description: 'Discover the ultimate fitness experience at Fitness900. Professional training, modern equipment, and a supportive community to help you achieve your wellness goals.',
  keywords: [
    'fitness',
    'gym',
    'workout',
    'health',
    'wellness',
    'training',
    'exercise',
    'nutrition',
    'lifestyle',
    'fitness900',
  ],
  authors: [{ name: 'Fitness900 Team' }],
  creator: 'Muhammad Anique',
  publisher: 'Fitness900',
  
  // Open Graph
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://fitness900.com',
    title: 'Fitness900 - Your Premier Fitness Destination',
    description: 'Discover the ultimate fitness experience with professional training, modern equipment, and a supportive community.',
    siteName: 'Fitness900',
    images: [
      {
        url: 'https://fitness900.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Fitness900 - Premium Fitness Experience',
      },
    ],
  },
  
  // Twitter
  twitter: {
    card: 'summary_large_image',
    title: 'Fitness900 - Your Premier Fitness Destination',
    description: 'Discover the ultimate fitness experience with professional training, modern equipment, and a supportive community.',
    images: ['https://fitness900.com/twitter-image.jpg'],
    creator: '@fitness900',
  },
  
  // Robots
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: false,
      noimageindex: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  
  // Icons
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png',
  },
  
  // Manifest
  manifest: '/site.webmanifest',
  
  // Other
  category: 'fitness',
  classification: 'Fitness & Wellness',
  referrer: 'origin-when-cross-origin',
  
  // Verification (add your verification codes)
  verification: {
    google: 'your-google-verification-code',
    yandex: 'your-yandex-verification-code',
  },
};

// Structured Data (JSON-LD)
const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Fitness900',
  description: 'Your premier destination for fitness and wellness',
  url: 'https://fitness900.com',
  logo: 'https://fitness900.com/logo.png',
  sameAs: [
    'https://facebook.com/fitness900',
    'https://instagram.com/fitness900',
    'https://twitter.com/fitness900',
  ],
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: '+1-800-FITNESS',
    contactType: 'customer service',
    availableLanguage: 'English',
  },
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Coming Soon',
    addressLocality: 'Your City',
    addressRegion: 'Your State',
    postalCode: '00000',
    addressCountry: 'US',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        
        {/* Preconnect to external domains */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        
        {/* DNS prefetch for better performance */}
        <link rel="dns-prefetch" href="https://vercel.live" />
        <link rel="dns-prefetch" href="https://vitals.vercel-analytics.com" />
      </head>
      <body className="font-inter antialiased">
        {/* Skip to main content for accessibility */}
        <a 
          href="#main-content" 
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-primary text-white px-4 py-2 rounded-md z-50 transition-all"
        >
          Skip to main content
        </a>
        
        <div id="root">
          {children}
        </div>
        
        {/* Global no-script fallback */}
        <noscript>
          <div className="noscript-banner">
            <p>This website requires JavaScript to function properly. Please enable JavaScript in your browser.</p>
          </div>
        </noscript>
      </body>
    </html>
  );
}
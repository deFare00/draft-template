import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://optibiz.com'),
  title: 'Optibiz - Where The Expertise Creates Excellence | Finance Consulting',
  description:
    'Optibiz provides premier financial and business consulting, strategic planning, tax advisory, and wealth management services to elevate your business destiny.',
  keywords: [
    'Financial Consulting',
    'Business Strategy',
    'Tax Advisory',
    'Wealth Management',
    'Optibiz',
    'Corporate Advisory',
  ],
  authors: [{ name: 'Optibiz Consulting' }],
  openGraph: {
    title: 'Optibiz - Where The Expertise Creates Excellence',
    description: 'Premier financial and business consulting services.',
    url: 'https://optibiz.com',
    siteName: 'Optibiz',
    images: [
      {
        url: '/images/hero-mockup.png',
        width: 1200,
        height: 630,
        alt: 'Optibiz Financial Consulting',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body>{children}</body>
    </html>
  );
}

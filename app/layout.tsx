import './globals.css';
import type { Metadata } from 'next';
import { Inter, Fira_Code } from 'next/font/google';
import { ThemeProvider } from '@/components/theme-provider';
import Header from '@/components/header';
import Footer from '@/components/footer';

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
});

const firaCode = Fira_Code({
  subsets: ['latin'],
  variable: '--font-fira',
});

export const metadata: Metadata = {
  title: 'Aliyan Arif | Full-Stack Web Developer',
  description: 'Full-stack web developer with expertise in building modern, scalable, and user-friendly web applications using React, Next.js, Node.js, and MongoDB.',
  icons: {
    icon: '/favicon.ico',
  },
  keywords: [
    'Aliyan Arif',
    'Aliyan',
    'Arif',
    'Aliyan Developer',
    'Aliyan Full Stack Developer',
    'Full Stack Developer',
    'MERN Developer',
    'React Developer',
    'Next.js',
    'Node.js',
    'MongoDB',
    'Frontend Developer',
    'Backend Developer',
    'Web Developer',
    'Full Stack Web Developer Pakistan',
    'React Developer Pakistan',
    'MERN Developer Pakistan'
  ],
  authors: [{ name: 'Aliyan Arif' }],
  creator: 'Aliyan Arif',
  publisher: 'Aliyan Arif',
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
    type: 'website',
    locale: 'en_US',
    url: 'https://yourdomain.com',
    title: 'Aliyan Arif | Full-Stack Web Developer',
    description: 'Full-stack web developer specializing in React, Next.js, Node.js, and MongoDB. Passionate about building modern and scalable web apps.',
    siteName: 'Aliyan Portfolio',
    images: [
      {
        url: '/logo.png',
        width: 1200,
        height: 630,
        alt: 'Aliyan Arif - Full-Stack Developer',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Aliyan Arif | Full-Stack Web Developer',
    description: 'Full-stack web developer with expertise in React, Next.js, Node.js, and MongoDB.',
    creator: '@yourhandle',
    images: ['/twitter-image.jpg'],
  },
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
  },
  verification: {
    google: 'your-google-site-verification',
    yandex: 'your-yandex-verification',
    yahoo: 'your-yahoo-verification',
  },
  alternates: {
    canonical: 'https://yourdomain.com',
  },
};


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"
        />
      </head>
      <body className={`${inter.variable} ${firaCode.variable} font-sans bg-background text-foreground min-h-screen`}>
        <ThemeProvider 
          attribute="class" 
          defaultTheme="dark" 
          enableSystem={true}
          storageKey="theme"
        >
          <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex-grow">{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
import type { AppProps } from 'next/app';
import { Inter, Merriweather } from 'next/font/google';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import '@/app/globals.css';

// Import the same fonts as your App Router
const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

const merriweather = Merriweather({ 
  weight: ['400', '700', '900'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-merriweather',
});

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className={`${inter.variable} ${merriweather.variable}`}>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow bg-white">
          <Component {...pageProps} />
        </main>
        <Footer />
      </div>
    </div>
  );
}

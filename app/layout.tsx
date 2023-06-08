import './globals.css';
import { Lato, Montserrat } from 'next/font/google';

const lato = Lato({ subsets: ['latin'], weight: '400', variable: '--font-lato' });
const montserrat = Montserrat({ subsets: ['latin'], variable: '--font-montserrat' });

export const metadata = {
  title: 'Listed - Capital for creators',
  description: 'listed.fans',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en' className={`${montserrat.variable} ${lato.variable}`}>
      <body className='font-montserrat'>{children}</body>
    </html>
  );
}

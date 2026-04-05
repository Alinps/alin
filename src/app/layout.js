import './globals.css';
import {Inter} from 'next/font/google';
import Navbar from './components/Navbar/Navbar';
import Cursor from './components/Cursor/Cursor';

const inter = Inter({subsets: ['latin']});

export const metadata = {
  title: "Alin | Developer",
};

export default function RootLayout({children}){
  return (
    <html lang="en">
      <body className={inter.className}>
        <Cursor />
        <Navbar />
        {children}
        </body>
    </html>
  )
}

import './globals.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer.js';
import { Poppins } from 'next/font/google';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  display: 'swap',
});

export const metadata = {
  title: 'Science and Technology Website',
  description: 'Science Facts and Fascinating Wonders of the World',
  icons:{
    icon:"/informationcave-icon.png",
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={poppins.className}>
      <body style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', margin: 0 }}>
        <Navbar />
        <main style={{ flex: 1 }}>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}

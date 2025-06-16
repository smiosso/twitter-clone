'use client';

import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import Sidebar from '@/components/Sidebar';
import { AuthProvider } from '@/contexts/AuthContext';
import { usePathname } from 'next/navigation';
import { Copse } from 'next/font/google';

const copse = Copse({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-copse',
});


const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

// export const metadata = {
//   title: 'Twitter',
//   description: 'a crazy project',
// };

export default function RootLayout({ children }) {
  const pathname = usePathname();

  // Define rotas públicas onde NÃO quer o Sidebar
  const publicRoutes = ['/login', '/register'];

  const isPublicRoute = publicRoutes.includes(pathname);

  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} ${copse.variable} font-sans`}>
        <AuthProvider>
          <div className="flex">
            {!isPublicRoute && <Sidebar />}
            <main className={!isPublicRoute ? 'ml-[20%] w-[80%]' : 'w-full'}>
              {children}
            </main>
          </div>
        </AuthProvider>
      </body>
    </html>
  );
}

import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import Sidebar from "@/components/Sidebar";
import { AuthProvider } from '@/contexts/AuthContext';



const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Twitter",
  description: "a crazy project",
};



export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className="flex ">
          
          <Sidebar />

          <main className="ml-[20%] w-[80%]">
          <AuthProvider>
          {children}
          </AuthProvider>
            </main>
        </div>
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});


export const metadata: Metadata = {
  title: "British Academy | مستقبل التعليم  الامني",
  description: "الأكاديمية البريطانية - بوابتك لاحتراف مهارات المستقبل بأحدث التقنيات.",
  icons: {
    icon: "/logo.webp",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ar"
      dir="rtl" 
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background selection:bg-gold/30 selection:text-navy transition-colors duration-300">
   
        <div className="grow">
          {children}
        </div>

      </body>
    </html>
  );
}
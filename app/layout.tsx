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
  title: "Joenel | Full-Stack Developer Portfolio",
  description: "Showcasing my projects and expertise in web development.",
  icons: {
    icon: [
      { url: "/portfolio-logo.png", type: "image/png", sizes: "32x32" }, // Favicon
      { url: "/portfolio-logo.png", type: "image/png", sizes: "192x192" }, // Android
    ],
    apple: "/portfolio-logo.png", // Apple Touch Icon
  },
  openGraph: {
    title: "Joenel | Full-Stack Developer Portfolio",
    description: "Explore my projects, skills, and journey in web development.",
    url: "joenel.vercel.app", 
    type: "website",
    images: [
      {
        url: "/portfolio-logo.png", // Social media preview image (1200x630 recommended)
        width: 1200,
        height: 630,
        alt: "Joenel's Portfolio Preview",
      },
    ],
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}

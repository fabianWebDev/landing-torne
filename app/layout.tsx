import type { Metadata } from "next";
import { Bebas_Neue, Inter } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/NavBar";
import WhatsAppButton from "@/components/WhatsAppButton";

const bebasNeue = Bebas_Neue({
  variable: "--font-bebas-neue",
  subsets: ["latin"],
  weight: ["400"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Seminario David García Torné",
  description: "Seminario David García Torné",
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: "Seminario David García Torné",
    description: "Seminario David García Torné",
    images: "/og-image.png",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${bebasNeue.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <NavBar />
        {children}
        <WhatsAppButton />
      </body>
    </html>
  );
}

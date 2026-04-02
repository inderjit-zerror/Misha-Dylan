import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import LenisProvider from "@/components/common/LenisProvider";
import Footer from "@/components/common/Footer";
import NavBar from "@/components/common/NavBar";
import { Const } from "@/components/utils/Constants";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  metadataBase: new URL(Const?.ClientLink || ""),

  title: {
    default: Const.Brand,
    template: "%s | " + Const.Brand,
  },

  description: Const.Desc,

  keywords: Const.keywords.join(", "),

  authors: [{ name: Const.Brand }],
  publisher: Const.Brand,

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
    },
  },

  alternates: {
    canonical: "/", // auto-resolves via metadataBase
    languages: {
      "en-IN": "/",
    },
  },

  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: Const.Brand,
    title: Const.Brand,
    description: Const.Desc,
    url: Const.ClientLink,
    images: [
      {
        url: "/imgs/logo/og.png", // fallback OG image
        width: 1200,
        height: 630,
        alt: Const.Brand,
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: Const.Brand,
    description: Const.Desc,
    images: ["/imgs/logo/og.png"],
  },

  icons: {
    icon: [
      { url: "/favicon/favicon-32x32.png", sizes: "96x96", type: "image/png" },
      { url: "/favicon/favicon.svg", type: "image/svg+xml" },
    ],
    apple: "/favicon/apple-touch-icon.png",
    shortcut: "/favicon.ico",
  },


  manifest: "/favicon/site.webmanifest",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        cz-shortcut-listen="true"
      >
        <LenisProvider>
          <NavBar />
  

          {children}
    
          <Footer />
        </LenisProvider>
      </body>
    </html>
  );
}

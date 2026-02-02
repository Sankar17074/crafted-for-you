import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next"
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  metadataBase: new URL("https://craftedbysankar.com"),
  title: "Crafted by Sankar | happiness & joy",
  description:
    "Sankar Dass is a Frontend Developer who scribbles ideas into code — crafting calm, thoughtful, and intuitively designed digital experiences.",
 alternates: {
    canonical: "https://craftedbysankar.com",
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },

  openGraph: {
    title: "Crafted by Sankar",
    description:
      "Where quiet scribbles turn into purposeful code. A handcrafted frontend portfolio shaped by detail, patience, and thoughtful design.",
    url: "https://craftedbysankar.com",
    siteName: "Crafted by Sankar",
    images: [
      {
        url: "https://craftedbysankar.com/og.png",
        width: 1200,
        height: 630,
        alt: "Crafted by Sankar Portfolio",
      },
    ],
    type: "website",
  },
};


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Sankar Dass",
              url: "https://craftedbysankar.com",
              jobTitle: "Frontend Developer",
              description:
                "Frontend Developer crafting calm, thoughtful, and handcrafted digital experiences.",
            }),
          }}
        />
        {children}
        <Analytics />
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import { Playfair_Display, Poppins, Great_Vibes } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const greatVibes = Great_Vibes({
  variable: "--font-great-vibes",
  subsets: ["latin"],
  weight: ["400"],
});

export const metadata: Metadata = {
  title: "Aurelia Events by Aleena | Luxury Wedding Planner",
  description: "From the first 'yes' to forever. Turning Your Dream Wedding Into Timeless Memories.",
  icons: {
    icon: "/logo.png",
  },
  openGraph: {
    title: "Aurelia Events by Aleena",
    description: "Turning Your Dream Wedding Into Timeless Memories.",
    url: "https://aureliaevents.com", // Adjust domain when known
    siteName: "Aurelia Events",
    images: [
      {
        url: "/about.png",
        width: 1200,
        height: 630,
        alt: "Aurelia Events by Aleena",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Aurelia Events by Aleena",
    description: "Turning Your Dream Wedding Into Timeless Memories.",
    images: ["/about.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${poppins.variable} ${greatVibes.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-poppins text-dark-text bg-background-white">
        {children}
      </body>
    </html>
  );
}

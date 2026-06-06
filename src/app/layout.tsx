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
  metadataBase: new URL("https://www.aureliaeventsbyaleena.com"),
  title: "Aurelia Events by Aleena | Luxury Wedding Planner",
  description: "From the first 'yes' to forever. Turning Your Dream Wedding Into Timeless Memories.",
  keywords: ["wedding planner", "luxury wedding planner", "Aurelia Events", "Aleena", "event management", "destination weddings"],
  authors: [{ name: "Aleena" }],
  icons: {
    icon: "/logo.png",
  },
  openGraph: {
    title: "Aurelia Events by Aleena | Luxury Wedding Planner",
    description: "Turning Your Dream Wedding Into Timeless Memories. From venue selection to the final farewell, Aurelia Events by Aleena manages every detail.",
    url: "https://www.aureliaeventsbyaleena.com",
    siteName: "Aurelia Events by Aleena",
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
    title: "Aurelia Events by Aleena | Luxury Wedding Planner",
    description: "Turning Your Dream Wedding Into Timeless Memories.",
    images: ["/about.png"],
  },
  alternates: {
    canonical: "https://www.aureliaeventsbyaleena.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "Aurelia Events by Aleena",
    description: "Turning Your Dream Wedding Into Timeless Memories. Luxury wedding planning services.",
    url: "https://www.aureliaeventsbyaleena.com",
    telephone: "+916282211630",
    logo: "https://www.aureliaeventsbyaleena.com/logo.png",
    image: "https://www.aureliaeventsbyaleena.com/about.png",
    sameAs: [
      "https://www.instagram.com/aurelia.eventss"
    ]
  };

  return (
    <html
      lang="en"
      className={`${playfair.variable} ${poppins.variable} ${greatVibes.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-poppins text-dark-text bg-background-white">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}

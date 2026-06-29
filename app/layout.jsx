import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { business } from "@/data/site";

export const metadata = {
  metadataBase: new URL("https://steadyhandcontractors.com"),
  title: {
    default: business.name,
    template: `%s | ${business.shortName}`,
  },
  description:
    "Tile, stone, carpentry, hardscaping, plant installation, and handyman services serving Charleston and surrounding Lowcountry areas.",
  icons: {
    icon: [
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-192x192.png", sizes: "192x192", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
  },
  openGraph: {
    title: business.name,
    description:
      "Professional craftsmanship rooted in precision, integrity, and care for every home project, inside and out.",
    url: "/",
    siteName: business.name,
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}

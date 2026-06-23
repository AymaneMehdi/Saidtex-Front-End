import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "./components/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "SAIDTEX",
  description: "Saidtex, le leader de l'industrie textile au Maroc. Avec plus de 50 ans d'expertise, nous offrons des solutions de pointe en filature, finissage, tissage et bonneterie. En tant que partenaire privilégié, nous sommes fiers de servir nos clients locaux et internationaux avec un accent fort sur la qualité et le service. Explorez notre gamme de produits et bénéficiez de notre expérience inégalée dès aujourd'hui.",
  keywords: [
    "Machines textiles",
    "Filature Maroc",
    "Finissage Maroc",
    "Bonneterie Maroc",
    "Tissage Maroc",
    "Équipement textile Maroc",
    "Machines neuves",
    "Machines anciennes",
    "Industrie textile",
    "Maroc",
    "Machines Maroc",
  ],
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        <Footer />
      </body>
    </html>
  );
}

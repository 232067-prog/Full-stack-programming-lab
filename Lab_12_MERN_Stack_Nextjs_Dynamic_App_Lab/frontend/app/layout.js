import { Playfair_Display, Source_Sans_3 } from "next/font/google";
import "./globals.css";
import Providers from "../components/Providers";
import Header from "../components/Header";
import Footer from "../components/Footer";

const display = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-display"
});

const bodyFont = Source_Sans_3({
  subsets: ["latin"],
  variable: "--font-body"
});

export const metadata = {
  title: "Rustik Plank",
  description: "Rustik Plank handcrafted furniture storefront"
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${display.variable} ${bodyFont.variable}`}>
      <body>
        <Providers>
          <div className="site-shell">
            <Header />
            <main className="min-h-screen">{children}</main>
            <Footer />
          </div>
        </Providers>
      </body>
    </html>
  );
}

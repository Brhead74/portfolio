import { Archivo, Manrope } from "next/font/google";
import "./globals.css";
import Header from "./_componnents/Header";
import Footer from "./_componnents/Footer";
import { LocaleProvider } from "./i18n/LocaleContext";

// Archivo (headings/display) + Manrope (body) — matches the type system
// used on maxconst_cv.pdf rather than the generic default Geist pairing.
const archivo = Archivo({
  subsets: ["latin"],
  weight: ["500", "700", "800", "900"],
  variable: "--font-display",
  display: "swap",
});
const manrope = Manrope({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-body",
  display: "swap",
});

export const metadata = {
  title: "Max.C // Portfolio",
  description: "Portfolio de créateur multimédia",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body
        className={`${archivo.variable} ${manrope.variable} antialiased`}
      >
        <noscript>
          <style>{`.card { opacity: 1 !important; translate: 0 0 !important; }`}</style>
        </noscript>
        <LocaleProvider>
          <Header />
          {children}
          <Footer />
        </LocaleProvider>
      </body>
    </html>
  );
}

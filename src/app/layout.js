import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Portfolio Vanderlei",
  description: "Portfolio de Vanderlei Junio feito com Next.JS",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <link rel="shotcut icon" href="./img/scicon.pgn"></link>
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        {children}
      </body>
    </html>
  );
}

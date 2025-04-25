import { Rubik } from "next/font/google";
import "./globals.css";

const rubik = Rubik({
  subsets: ["latin"],
  variable: "--font-rubik",
});

export const metadata = {
  title: "Mega 2b Engenharia",
  description: "Mega 2b Engenharia",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body
        className={`${rubik.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}

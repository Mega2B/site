import { Rubik } from "next/font/google";
import "./globals.css";
import WhatsAppFloatingButton from "./components/whatsapp";
import GoogleAnalytics from "./components/google";

const rubik = Rubik({
  subsets: ["latin"],
  variable: "--font-rubik",
});

export const metadata = {
  title: "Mega2B Engenharia",
  description: "Qualidade na prestação de serviços elétricos e instalações seguras de qualidade. Conte com a Mega2B Engenharia para soluções elétricas confiáveis e eficientes.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <head>
        <GoogleAnalytics />
      </head>
      <body
        className={`${rubik.variable} antialiased`}
      >
        {children}
        <WhatsAppFloatingButton />
      </body>
    </html>
  );
}

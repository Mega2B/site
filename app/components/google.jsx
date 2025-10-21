import Script from 'next/script';

export default function RootLayout({ children }) {
  return (
    <html lang="pt">
      <body>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-B01G0ETZ8E"
          strategy="afterInteractive"
        />
        <Script id="gtag-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-B01G0ETZ8E');
          `}
        </Script>
        {children}
      </body>
    </html>
  );
}

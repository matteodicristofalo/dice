import { Header } from "@components/header/header";
import { SmoothScroll } from "@components/smooth-scroll";
import "./globals.css";
import "./typography.css";
import "./spacings.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Header />
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}

import { Header } from "@components/header/header";
import { DM_Sans } from "next/font/google";
import "./globals.css";
import "./typography.css";
import "./spacings.css";

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: "normal",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={dmSans.className}>
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import { Roboto } from 'next/font/google';

import "./globals.css";

const roboto = Roboto({
  variable: "--font-roboto",
  weight: ["100", "300","400", "500", "700", "900"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Next Template",
  description: "Nexte Template",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${roboto.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}

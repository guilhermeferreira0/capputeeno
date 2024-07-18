import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Capputeeno",
  description: "E-commerce FrontEnd Challenge",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body>{children}</body>
    </html>
  );
}

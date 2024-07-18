import { Header } from "@/components/header";
import "./globals.css";
import type { Metadata } from "next";
import { Saira } from 'next/font/google'
import { FilterContextProvider } from "@/context/filter-context";

const saira = Saira({
  weight: ['300', '400', '500', '600'],
  subsets: ['latin']
})

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
      <body className={saira.className}>
        <FilterContextProvider>
          <Header />
          {children}
        </FilterContextProvider>
      </body>
    </html>
  );
}

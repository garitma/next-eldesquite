import type { Metadata } from "next";
import { Figtree, Newsreader } from "next/font/google";

import "./globals.css";

const body = Figtree({
  subsets: ["latin"],
  variable: "--font-body",
  weight: ["400", "500", "600", "700"],
});

const display = Newsreader({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: "El Desquite",
  description:
    "El Desquite — escritura de Garitma. Un espacio literario para textos que cobran su cuenta.",
  openGraph: {
    title: "El Desquite",
    description:
      "Escritura de Garitma. Un espacio literario para textos que cobran su cuenta.",
    type: "website",
    locale: "es_ES",
    siteName: "El Desquite",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="es"
      className={`${body.variable} ${display.variable} h-full antialiased`}
    >
      <body className={`${body.className} min-h-full flex flex-col text-gray-12`}>
        {children}
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import { Inter, Outfit, Poppins, Sora } from "next/font/google"; // Adicionado Sora
import "./globals.css";
import { FloatingCTA } from "@/components/ui/FloatingCTA";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "700"],
});

const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://lp.n8flow.com.br"),
  title: {
    default: "Agência n8flow | Automação e Crescimento Digital",
    template: "%s | Agência n8flow",
  },
  description:
    "Transformamos processos manuais em sistemas inteligentes que geram mais pacientes, previsibilidade e crescimento para clínicas e negócios locais.",
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://lp.n8flow.com.br",
    title: "Agência n8flow | Automação e Crescimento Digital",
    description:
      "Transformamos processos manuais em sistemas inteligentes. Escalamos clínicas e negócios locais com Landing Pages de alta conversão, SEO Local e Agentes de IA.",
    siteName: "Agência n8flow",
    images: [
      {
        url: "/og-image.jpg", // A URL da imagem que vai aparecer no WhatsApp (precisa colocar esse arquivo na pasta public/)
        width: 1200,
        height: 630,
        alt: "Agência n8flow - Capa de Apresentação",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Agência n8flow | Automação e Crescimento Digital",
    description:
      "Transformamos processos manuais em sistemas inteligentes para clínicas.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="dark scroll-smooth" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${outfit.variable} ${poppins.variable} ${sora.variable} font-sans antialiased`}
      >
        {children}
        <FloatingCTA />
      </body>
    </html>
  );
}

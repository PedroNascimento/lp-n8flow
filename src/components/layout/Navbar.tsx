import Link from "next/link";
import { Button } from "@/components/ui/button";
import { BrandLogo } from "@/components/ui/BrandLogo";

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/5 bg-background/80 backdrop-blur-md">
      <div className="container mx-auto flex h-20 items-center justify-between px-4 md:px-6">
        <BrandLogo size="lg" showIcon={true} />
        <nav className="hidden md:flex gap-6">
          <Link href="#servicos" className="text-sm font-medium text-muted-foreground transition-colors hover:text-white">
            Serviços
          </Link>
          <Link href="#sobre" className="text-sm font-medium text-muted-foreground transition-colors hover:text-white">
            Sobre
          </Link>
          <Link href="#portfolio" className="text-sm font-medium text-muted-foreground transition-colors hover:text-white">
            Portfólio
          </Link>
          <Link href="#contato" className="text-sm font-medium text-muted-foreground transition-colors hover:text-white">
            Contato
          </Link>
        </nav>
        <div className="flex items-center gap-4">
          <Button asChild className="hidden md:inline-flex bg-primary hover:bg-primary/90 text-white font-medium">
            <Link href="#contato">Falar com Especialista</Link>
          </Button>
          <Button variant="ghost" size="icon" className="md:hidden text-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="4" x2="20" y1="12" y2="12" />
              <line x1="4" x2="20" y1="6" y2="6" />
              <line x1="4" x2="20" y1="18" y2="18" />
            </svg>
            <span className="sr-only">Toggle menu</span>
          </Button>
        </div>
      </div>
    </header>
  );
}

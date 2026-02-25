import Link from "next/link";
import { BrandLogo } from "@/components/ui/BrandLogo";

export function Footer() {
  return (
    <footer className="bg-[#1a1a24] border-t border-white/5 py-12 md:py-16">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div className="col-span-1 md:col-span-1">
            <div className="mb-4">
              <BrandLogo size="lg" showIcon={true} />
            </div>
            <p className="text-sm text-muted-foreground mt-4 max-w-xs">
              Agência de Crescimento Digital e Automação focada em sistemas de
              alta conversão para clínicas e negócios locais.
            </p>
            <p className="text-xs text-muted-foreground/60 mt-4">
              Natal – RN, Brasil
            </p>
          </div>

          <div>
            <h4 className="text-white font-bold mb-4 font-heading">
              Serviços
            </h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link href="#servicos" className="hover:text-primary transition-colors">
                  Landing Pages
                </Link>
              </li>
              <li>
                <Link href="#servicos" className="hover:text-primary transition-colors">
                  Automação de Processos
                </Link>
              </li>
              <li>
                <Link href="#servicos" className="hover:text-primary transition-colors">
                  Agentes de IA
                </Link>
              </li>
              <li>
                <Link href="#servicos" className="hover:text-primary transition-colors">
                  SEO Local
                </Link>
              </li>
              <li>
                <Link href="#servicos" className="hover:text-primary transition-colors">
                  Sistemas Web
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-4 font-heading">Empresa</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link href="#sobre" className="hover:text-primary transition-colors">
                  Sobre Nós
                </Link>
              </li>
              <li>
                <Link href="#portfolio" className="hover:text-primary transition-colors">
                  Casos de Sucesso
                </Link>
              </li>
              <li>
                <Link href="#contato" className="hover:text-primary transition-colors">
                  Contato
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-4 font-heading">
              Fale Conosco
            </h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link
                  href="#contato"
                  className="hover:text-secondary transition-colors flex items-center gap-2"
                >
                  📩 Solicitar Contato
                </Link>
              </li>
              <li>
                <Link href="/politica-de-privacidade" className="hover:text-primary transition-colors">
                  Política de Privacidade
                </Link>
              </li>
              <li>
                <Link href="/termos-de-servico" className="hover:text-primary transition-colors">
                  Termos de Serviço
                </Link>
              </li>
            </ul>
            <p className="text-xs text-muted-foreground/50 mt-4">
              CNPJ: 00.000.000/0001-00
            </p>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-muted-foreground">
          <p>
            © {new Date().getFullYear()} Agência n8flow. Todos os direitos
            reservados.
          </p>
          <div className="flex gap-4">
            <Link href="#" className="hover:text-white transition-colors">
              Instagram
            </Link>
            <Link href="#" className="hover:text-white transition-colors">
              LinkedIn
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

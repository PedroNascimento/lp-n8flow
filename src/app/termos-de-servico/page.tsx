import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { BrandLogo } from "@/components/ui/BrandLogo";

export const metadata: Metadata = {
  title: "Termos de Serviço | Agência n8flow",
  description: "Termos e condições de uso dos serviços da Agência n8flow.",
};

export default function TermsOfServicePage() {
  return (
    <div className="min-h-screen bg-background text-white selection:bg-primary/30 py-24">
      <div className="container mx-auto px-4 md:px-6 max-w-4xl">
        <div className="mb-12 flex justify-between items-center border-b border-white/10 pb-6">
          <Link
            href="/"
            className="inline-flex items-center text-muted-foreground hover:text-white transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Voltar para o Início
          </Link>
          <BrandLogo size="sm" />
        </div>

        <article className="prose prose-invert prose-p:text-muted-foreground prose-a:text-primary max-w-none">
          <h1 className="text-3xl md:text-5xl font-heading font-bold mb-8 text-white">
            Termos de Serviço
          </h1>

          <p className="lead text-xl">
            Ao acessar o site da Agência n8flow e utilizar nossos serviços, você
            concorda em cumprir estes Termos de Serviço, todas as leis e
            regulamentos aplicáveis. Se você não concordar com algum destes
            termos, está proibido de usar ou acessar este site e nossos
            serviços.
          </p>

          <h2 className="text-2xl font-bold mt-12 mb-4 text-white">
            1. Natureza dos Serviços
          </h2>
          <p>
            A Agência n8flow (&quot;n8flow&quot;) presta serviços de consultoria em
            crescimento digital, desenvolvimento de landing pages, otimização de
            SEO local e implementação de sistemas de automação e inteligência
            artificial aplicados a rotinas comerciais (SDR IA).
          </p>

          <h2 className="text-2xl font-bold mt-10 mb-4 text-white">
            2. Obrigações do Cliente
          </h2>
          <p>Para a prestação adequada dos serviços, o cliente se compromete a:</p>
          <ul className="list-disc pl-6 space-y-2 mt-4 text-muted-foreground">
            <li>
              Fornecer informações precisas, completas e atualizadas sobre o seu
              negócio, produtos e serviços;
            </li>
            <li>
              Disponibilizar os acessos necessários (ex: gerenciador de
              anúncios, Google Meu Negócio, hospedagem) de maneira oportuna;
            </li>
            <li>Colaborar pontualmente nas etapas de aprovação de materiais.</li>
          </ul>

          <h2 className="text-2xl font-bold mt-10 mb-4 text-white">
            3. Propriedade Intelectual
          </h2>
          <p>
            Todo o conteúdo criado pela n8flow (códigos, layouts, copys e
            sistemas desenvolvidos de forma customizada) pertence ao cliente
            após a quitação integral do projeto, salvo estipulado o contrário em
            contrato aditivo escrito. A n8flow reserva-se o direito de usar os
            materiais não confidenciais em seu portfólio.
          </p>

          <h2 className="text-2xl font-bold mt-10 mb-4 text-white">
            4. Limitações de Responsabilidade
          </h2>
          <p>
            Em nenhum caso a n8flow será responsável por quaisquer danos diretos,
            indiretos, lucros cessantes ou interrupções de negócios decorrentes
            do uso ou da incapacidade de usar os materiais e serviços fornecidos.
            Os resultados das estratégias de marketing variam e dependem também do
            esforço comercial interno do cliente; não garantimos a venda final de
            produtos, mas sim o volume e a qualificação dos leads gerados, quando
            aplicável.
          </p>

          <h2 className="text-2xl font-bold mt-10 mb-4 text-white">
            5. Prazos e Entregas
          </h2>
          <p>
            Os prazos de entrega estão sujeitos à aprovação pontual por parte do
            cliente em cada etapa do projeto. Atrasos na devolução de feedbacks ou
            envio de materiais podem impactar os cronogramas iniciais acordados.
          </p>

          <h2 className="text-2xl font-bold mt-10 mb-4 text-white">
            6. Modificações
          </h2>
          <p>
            A Agência n8flow pode revisar estes termos de serviço para o seu site
            a qualquer momento, sem aviso prévio. Ao usar este site, você concorda
            em ficar vinculado à versão atual desses Termos de Serviço.
          </p>

          <h2 className="text-2xl font-bold mt-10 mb-4 text-white">
            7. Foro
          </h2>
          <p>
            Quaisquer relamações relacionadas à Agência n8flow serão regidas pelas
            leis da jurisdição em que a agência se encontra sediada (Brasil),
            sem consideração ao seu conflito de disposições legais.
          </p>

          <p className="mt-12 text-sm text-muted-foreground border-t border-white/10 pt-6">
            Última atualização: {new Date().toLocaleDateString("pt-BR")}
          </p>
        </article>
      </div>
    </div>
  );
}

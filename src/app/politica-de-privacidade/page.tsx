import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { BrandLogo } from "@/components/ui/BrandLogo";

export const metadata: Metadata = {
  title: "Política de Privacidade | Agência n8flow",
  description: "Tratamento de dados e política de privacidade da Agência n8flow.",
};

export default function PrivacyPolicyPage() {
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
            Política de Privacidade
          </h1>

          <p className="lead text-xl">
            A Agência n8flow valoriza a sua privacidade e se compromete a
            proteger os seus dados pessoais. Esta Política de Privacidade
            descreve como coletamos, usamos, armazenamos e protegemos as
            suas informações.
          </p>

          <h2 className="text-2xl font-bold mt-12 mb-4 text-white">
            1. Coleta de Informações
          </h2>
          <p>
            Coletamos informações pessoais que você nos fornece voluntariamente
            ao preencher nossos formulários de contato, como: nome, e-mail,
            número de telefone (WhatsApp), nome da empresa e segmento de
            atuação.
          </p>

          <h2 className="text-2xl font-bold mt-10 mb-4 text-white">
            2. Uso das Informações
          </h2>
          <p>As informações coletadas são utilizadas para:</p>
          <ul className="list-disc pl-6 space-y-2 mt-4 text-muted-foreground">
            <li>Fornecer suporte e atendimento personalizado;</li>
            <li>
              Realizar diagnósticos estratégicos e consultorias solicitadas;
            </li>
            <li>
              Enviar comunicações relevantes sobre nossos serviços, atualizações
              e ofertas (com o seu consentimento);
            </li>
            <li>Melhorar a experiência do usuário em nosso site.</li>
          </ul>

          <h2 className="text-2xl font-bold mt-10 mb-4 text-white">
            3. Compartilhamento de Dados
          </h2>
          <p>
            A Agência n8flow <strong>não vende, aluga ou compartilha</strong>{" "}
            seus dados pessoais com terceiros para fins de marketing comercial,
            exceto com parceiros de tecnologia estritamente necessários para a
            operação do nosso negócio (ex: ferramentas de CRM e automação), que
            também são obrigados a manter a confidencialidade das informações de
            acordo com a LGPD.
          </p>

          <h2 className="text-2xl font-bold mt-10 mb-4 text-white">
            4. Segurança dos Dados
          </h2>
          <p>
            Implementamos medidas de segurança técnicas e organizacionais para
            proteger seus dados contra acesso não autorizado, alteração,
            divulgação ou destruição. No entanto, nenhum sistema de segurança é
            100% impenetrável, e não podemos garantir segurança absoluta na
            internet.
          </p>

          <h2 className="text-2xl font-bold mt-10 mb-4 text-white">
            5. Retenção e Exclusão
          </h2>
          <p>
            Armazenaremos seus dados pelo tempo necessário para cumprir as
            finalidades descritas nesta política ou conforme exigido por lei.
            Você tem o direito de solicitar a exclusão dos seus dados a
            qualquer momento, entrando em contato conosco.
          </p>

          <h2 className="text-2xl font-bold mt-10 mb-4 text-white">
            6. Seus Direitos
          </h2>
          <p>
            Conforme a Lei Geral de Proteção de Dados (LGPD), você tem direito
            a:
          </p>
          <ul className="list-disc pl-6 space-y-2 mt-4 text-muted-foreground">
            <li>Acesso às suas informações pessoais;</li>
            <li>Correção de dados incompletos, inexatos ou desatualizados;</li>
            <li>Anonimização, bloqueio ou eliminação de dados desnecessários;</li>
            <li>Revogação do consentimento.</li>
          </ul>

          <h2 className="text-2xl font-bold mt-10 mb-4 text-white">
            7. Contato
          </h2>
          <p>
            Se você tiver dúvidas sobre esta Política de Privacidade ou sobre o
            tratamento de seus dados, entre em contato conosco através do nosso
            site ou pelos canais oficiais de comunicação informados.
          </p>

          <p className="mt-12 text-sm text-muted-foreground border-t border-white/10 pt-6">
            Última atualização: {new Date().toLocaleDateString("pt-BR")}
          </p>
        </article>
      </div>
    </div>
  );
}

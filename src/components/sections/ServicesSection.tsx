"use client";

import { motion } from "framer-motion";
import {
  Code2,
  MonitorSmartphone,
  Workflow,
  BotMessageSquare,
  MapPin,
  Search,
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const services = [
  {
    icon: MonitorSmartphone,
    title: "Landing Pages de Alta Conversão",
    problem: "Seus anúncios geram cliques, mas poucos viram agendamentos.",
    solution:
      "Criamos páginas focadas num único objetivo: transformar visitantes em pacientes agendados — com copy persuasiva, design premium e carregamento ultrarrápido.",
    impact: "Mais agendamentos com o mesmo investimento em tráfego.",
  },
  {
    icon: Workflow,
    title: "Automação Inteligente de Processos",
    problem:
      "Sua equipe gasta horas copiando dados, enviando mensagens e lidando com retrabalho.",
    solution:
      "Conectamos seus sistemas usando n8n e Make, eliminando tarefas manuais e criando fluxos que rodam sozinhos.",
    impact:
      "Redução de custos operacionais e equipe 100% focada em atender pacientes.",
  },
  {
    icon: BotMessageSquare,
    title: "Agentes de IA para Atendimento e SDR",
    problem:
      "Leads esfriam porque demoram horas (ou dias) para serem respondidos.",
    solution:
      "Implementamos assistentes virtuais de IA no WhatsApp que qualificam, respondem e agendam em segundos — 24 horas por dia.",
    impact:
      "Agendamentos garantidos mesmo fora do horário comercial, sem contratar mais secretárias.",
  },
  {
    icon: MapPin,
    title: "SEO Local Avançado",
    problem:
      "Quando alguém pesquisa sua especialidade na região, sua clínica não aparece.",
    solution:
      "Otimizamos seu site e conteúdo para dominar as buscas locais do Google na sua cidade e bairro.",
    impact:
      "Fluxo constante de pacientes orgânicos sem depender exclusivamente de anúncios pagos.",
  },
  {
    icon: Search,
    title: "Otimização do Perfil da Empresa no Google",
    problem:
      "Seu perfil no Google está incompleto, sem avaliações e sem visibilidade.",
    solution:
      "Estruturamos e otimizamos seu Google Business Profile com fotos, categorias, posts e estratégia de avaliações.",
    impact:
      "Mais ligações, mais rotas traçadas e mais autoridade local frente aos concorrentes.",
  },
  {
    icon: Code2,
    title: "Sistemas Web Personalizados",
    problem:
      "Sistemas genéricos não se adequam à rotina real da sua clínica.",
    solution:
      "Desenvolvemos portais, painéis e ferramentas de gestão sob medida, desenhados para a forma como o seu negócio opera.",
    impact:
      "Operação organizada em um sistema exclusivo, feito para as suas regras de negócio.",
  },

];

export function ServicesSection() {
  return (
    <section id="servicos" className="py-24 bg-[#1a1a24] relative">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-bold font-sora text-white mb-6">
            Soluções que Geram{" "}
            <span className="text-primary">Resultado Real</span>
          </h2>
          <p className="text-muted-foreground md:text-lg">
            Cada serviço foi desenhado para resolver um problema específico e
            gerar impacto direto no faturamento da sua clínica.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
            >
              <Card className="bg-background/40 backdrop-blur-md border-white/10 h-full hover:bg-white/10 transition-colors overflow-hidden group">
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <service.icon className="w-6 h-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl text-white">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <span className="text-xs font-semibold text-destructive uppercase tracking-wider">
                      O Problema
                    </span>
                    <p className="text-sm text-muted-foreground mt-1">
                      {service.problem}
                    </p>
                  </div>
                  <div>
                    <span className="text-xs font-semibold text-secondary uppercase tracking-wider">
                      Nossa Solução
                    </span>
                    <p className="text-sm text-muted-foreground mt-1">
                      {service.solution}
                    </p>
                  </div>
                  <div className="pt-4 border-t border-white/10">
                    <span className="text-xs font-semibold text-primary uppercase tracking-wider">
                      Impacto no Negócio
                    </span>
                    <p className="text-sm text-white font-medium mt-1">
                      {service.impact}
                    </p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

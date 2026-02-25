"use client";

import { motion } from "framer-motion";
import { TrendingUp, Target, Users } from "lucide-react";
import { BrandText } from "@/components/ui/BrandLogo";

export function AboutSection() {
  return (
    <section
      id="sobre"
      className="py-24 bg-background relative border-t border-white/5"
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold font-heading text-white mb-6">
              Seu parceiro estratégico de{" "}
              <span className="text-primary">crescimento digital.</span>
            </h2>
            <div className="space-y-6 text-muted-foreground md:text-lg">
              <p>
                A <BrandText /> não é uma agência digital genérica. Somos um parceiro
                de crescimento para clínicas e negócios locais que precisam
                de mais pacientes, mais organização e mais previsibilidade.
              </p>
              <p>
                Combinamos{" "}
                <strong className="text-white font-medium">
                  automação, SEO local e inteligência artificial
                </strong>{" "}
                para construir sistemas que geram receita de verdade — sem
                depender exclusivamente de anúncios e sem sobrecarregar sua
                equipe.
              </p>
            </div>
          </motion.div>

          {/* Value Props */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid gap-6"
          >
            <div className="p-6 rounded-2xl bg-white/5 border border-white/10 flex gap-4">
              <div className="bg-primary/20 text-primary p-3 rounded-xl h-fit">
                <Target className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-2">
                  Captação Previsível de Pacientes
                </h3>
                <p className="text-muted-foreground">
                  Landing pages de alta conversão aliadas a SEO local para gerar
                  um fluxo constante de novos pacientes qualificados.
                </p>
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-white/5 border border-white/10 flex gap-4">
              <div className="bg-secondary/20 text-secondary p-3 rounded-xl h-fit">
                <TrendingUp className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-2">
                  Escala via Automação
                </h3>
                <p className="text-muted-foreground">
                  Eliminamos trabalho manual conectando agenda, CRM e
                  atendimento usando n8n e Make — sua equipe só foca em atender.
                </p>
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-white/5 border border-white/10 flex gap-4">
              <div className="bg-primary/20 text-primary p-3 rounded-xl h-fit">
                <Users className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-2">
                  Atendimento 24/7 com IA
                </h3>
                <p className="text-muted-foreground">
                  Agentes de IA que qualificam leads e agendam consultas mesmo
                  fora do horário comercial — sem contratar mais funcionários.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

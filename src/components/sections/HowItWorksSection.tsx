"use client";

import { motion } from "framer-motion";

const steps = [
  {
    step: "01",
    title: "Diagnóstico Estratégico",
    description:
      "Analisamos sua operação atual, identificamos onde você está perdendo pacientes e dinheiro, e desenhamos a arquitetura da solução ideal para o seu negócio.",
  },
  {
    step: "02",
    title: "Implementação Inteligente",
    description:
      "Construímos sua nova infraestrutura digital: Landing Page, automações (n8n/Make), agentes de IA e SEO — sem interromper sua operação atual.",
  },
  {
    step: "03",
    title: "Escala e Otimização Contínua",
    description:
      "Com o sistema rodando, otimizamos com base em dados reais. Ajustamos campanhas de SEO, fluxos de automação e atendimento para escalar os resultados mês a mês.",
  },
];

export function HowItWorksSection() {
  return (
    <section
      id="como-funciona"
      className="py-24 bg-background relative border-t border-white/5"
    >
      <div className="container mx-auto px-4 md:px-6 max-w-5xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold font-sora text-white mb-6">
            Como Funciona
          </h2>
          <p className="text-muted-foreground md:text-lg max-w-2xl mx-auto">
            Um método testado e validado para transformar a operação da sua
            clínica em uma máquina previsível de captação.
          </p>
        </div>

        <div className="relative">
          {/* Background Orb */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-primary/20 blur-[130px] rounded-full pointer-events-none" />

          {/* Connecting Line */}
          <div className="hidden md:block absolute top-[50px] left-8 right-8 h-[2px] bg-white/10" />

          <div className="grid md:grid-cols-3 gap-8 md:gap-12 relative z-10">
            {steps.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="relative"
              >
                <div className="w-16 h-16 md:w-24 md:h-24 rounded-full bg-background border-2 border-primary text-white flex items-center justify-center text-xl md:text-3xl font-bold font-sora mx-auto mb-6 shadow-[0_0_40px_rgba(110,68,255,0.4)] relative z-10">
                  {item.step}
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-center text-white mb-4">
                  {item.title}
                </h3>
                <p className="text-muted-foreground text-center text-sm md:text-base leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

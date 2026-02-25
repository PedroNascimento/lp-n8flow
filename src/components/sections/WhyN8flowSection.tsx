"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { BrandText } from "@/components/ui/BrandLogo";

const differentiators = [
  { bold: "Não vendemos site.", text: "Vendemos crescimento." },
  { bold: "Não vendemos automação.", text: "Vendemos previsibilidade." },
  { bold: "Não vendemos tecnologia.", text: "Vendemos resultado." },
  {
    bold: "Estratégia personalizada",
    text: "desenhada para a realidade da sua clínica.",
  },
  {
    bold: "Foco real",
    text: "em geração de pacientes e receita recorrente.",
  },
];

export function WhyN8flowSection() {
  return (
    <section className="py-24 bg-background relative border-t border-white/5">
      <div className="container mx-auto px-4 md:px-6 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold font-heading text-white mb-6">
            Por Que Escolher a{" "}
            <BrandText />?
          </h2>
          <p className="text-muted-foreground md:text-lg max-w-2xl mx-auto">
            Existem dezenas de agências digitais. Mas poucas entendem que o
            objetivo final não é entregar software — é{" "}
            <strong className="text-white">gerar receita</strong>.
          </p>
        </motion.div>

        <div className="space-y-5">
          {differentiators.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="flex items-start gap-4 p-5 rounded-xl bg-white/[0.03] border border-white/10"
            >
              <div className="bg-secondary/20 text-secondary p-2 rounded-lg shrink-0 mt-0.5">
                <Check className="w-5 h-5" />
              </div>
              <p className="text-lg text-white">
                <strong className="font-bold">{item.bold}</strong>{" "}
                <span className="text-muted-foreground">{item.text}</span>
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

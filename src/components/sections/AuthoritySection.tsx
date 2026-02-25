"use client";

import { motion } from "framer-motion";
import { Zap, Users, Settings, BarChart3 } from "lucide-react";

const stats = [
  { value: "150+", label: "Processos Automatizados", icon: Settings },
  { value: "40+", label: "Integrações Implementadas", icon: Zap },
  { value: "30+", label: "Empresas Atendidas", icon: Users },
  { value: "98%", label: "Índice de Satisfação", icon: BarChart3 },
];

export function AuthoritySection() {
  return (
    <section className="py-20 bg-[#1a1a24] relative border-t border-white/5">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <h2 className="text-3xl md:text-4xl font-bold font-heading text-white mb-4">
            Números que Falam por Nós
          </h2>
          <p className="text-muted-foreground md:text-lg max-w-xl mx-auto">
            Resultados construídos projeto a projeto, com foco em performance real.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center p-6 md:p-8 rounded-2xl bg-white/[0.03] border border-white/10"
            >
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-primary/10 text-primary mb-4">
                <stat.icon className="w-6 h-6" />
              </div>
              <div className="text-3xl md:text-4xl font-bold font-heading text-white mb-2">
                {stat.value}
              </div>
              <p className="text-sm text-muted-foreground font-medium">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

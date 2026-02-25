"use client";

import { motion } from "framer-motion";
import { BrandText } from "@/components/ui/BrandLogo";
import {
  PhoneOff,
  CalendarX,
  TrendingDown,
  MapPinOff,
  RefreshCcw,
  Unplug,
} from "lucide-react";

const painPoints = [
  { icon: PhoneOff, text: "Secretária sobrecarregada e atendimento lento" },
  { icon: CalendarX, text: "Agendamentos perdidos por falta de resposta rápida" },
  { icon: TrendingDown, text: "Falta de previsibilidade no fluxo de pacientes" },
  { icon: MapPinOff, text: "Perfil do Google mal otimizado e sem visibilidade local" },
  { icon: RefreshCcw, text: "Processos manuais, retrabalho e erros operacionais" },
  { icon: Unplug, text: "Sistemas desconectados que não conversam entre si" },
];

export function PainPointsSection() {
  return (
    <section className="py-24 bg-background relative border-t border-white/5">
      <div className="container mx-auto px-4 md:px-6 max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold font-sora text-white mb-6">
            Sua Clínica Está{" "}
            <span className="text-destructive">Perdendo Oportunidades?</span>
          </h2>
          <p className="text-muted-foreground md:text-lg max-w-2xl mx-auto">
            Se você se identifica com algum desses cenários, sua operação está
            deixando dinheiro na mesa todos os dias.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {painPoints.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              className="flex items-start gap-4 p-5 rounded-xl bg-background/40 backdrop-blur-md border border-white/10 hover:border-destructive/30 transition-colors"
            >
              <div className="bg-destructive/10 text-destructive p-2.5 rounded-lg shrink-0">
                <item.icon className="w-5 h-5" />
              </div>
              <p className="text-white/90 font-medium text-sm md:text-base leading-relaxed">
                {item.text}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-16 text-center"
        >
          <p className="text-xl md:text-2xl font-sora font-bold text-white">
            A <BrandText /> resolve isso com{" "}
            <span className="text-secondary">
              tecnologia aplicada ao crescimento.
            </span>
          </p>
        </motion.div>
      </div>
    </section>
  );
}

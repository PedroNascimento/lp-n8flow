"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, ShieldCheck, Clock, TrendingUp } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden pt-24 pb-32 md:pt-32 md:pb-40">
      {/* Background Gradients */}
      <div className="absolute inset-0 -z-10 bg-[#1a1a24]">
        <div className="absolute top-0 right-0 -translate-y-12 translate-x-1/3 w-[800px] h-[600px] bg-primary/30 blur-[140px] rounded-full" />
        <div className="absolute bottom-0 left-0 translate-y-1/3 -translate-x-1/2 w-[600px] h-[600px] bg-secondary/20 blur-[120px] rounded-full" />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-sm font-medium text-secondary mb-8"
          >
            <ShieldCheck className="w-4 h-4" />
            <span>Parceiro Estratégico de Crescimento Digital</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold font-sora tracking-tight text-white mb-6 leading-tight"
          >
            Mais Pacientes.{" "}
            <span className="text-transparent bg-clip-text bg-linear-to-r from-primary to-secondary">
              Menos Processos Manuais.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl"
          >
            Implementamos sistemas, SEO local e agentes de IA que transformam
            sua operação em uma máquina previsível de crescimento.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
          >
            <Button
              asChild
              size="lg"
              className="h-14 px-8 text-base bg-primary hover:bg-primary/90 text-white shadow-[0_0_35px_rgba(110,68,255,0.5)] rounded-full font-sora transition-transform hover:scale-105"
            >
              <Link href="#contato">
                Agendar Diagnóstico Estratégico
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="h-14 px-8 text-base bg-white/5 border-white/10 hover:bg-white/10 text-white rounded-full font-sora transition-transform hover:scale-105"
            >
              <Link href="#como-funciona">Ver Como Funciona</Link>
            </Button>
          </motion.div>

          {/* Microcopy de confiança */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mt-4 text-sm text-muted-foreground"
          >
            Sem compromisso. Resposta em até 24h.
          </motion.p>

          {/* Trust badges */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="mt-14 flex justify-center gap-8 md:gap-12 flex-wrap text-muted-foreground text-sm font-medium"
          >
            <div className="flex items-center gap-2">
              <TrendingUp className="w-5 h-5 text-secondary" />
              <span>Captação Previsível</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-5 h-5 text-secondary" />
              <span>Atendimento IA 24/7</span>
            </div>
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-secondary" />
              <span>SEO Local Avançado</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

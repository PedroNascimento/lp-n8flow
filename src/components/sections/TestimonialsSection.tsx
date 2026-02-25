"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { BrandText } from "@/components/ui/BrandLogo";

export function TestimonialsSection() {
  return (
    <section id="portfolio" className="py-24 bg-[#1a1a24] relative border-t border-white/5">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold font-heading text-white mb-6">
            O que dizem nossos parceiros
          </h2>
          <p className="text-muted-foreground md:text-lg max-w-2xl mx-auto">
            Empresas que confiaram na <BrandText /> para escalar suas operações.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Placeholder Testimonials */}
          {[1, 2, 3].map((_, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="bg-background/50 border-white/10 h-full">
                <CardContent className="p-8">
                  <div className="flex gap-1 mb-6 text-secondary">
                    <Star className="w-5 h-5 fill-current" />
                    <Star className="w-5 h-5 fill-current" />
                    <Star className="w-5 h-5 fill-current" />
                    <Star className="w-5 h-5 fill-current" />
                    <Star className="w-5 h-5 fill-current" />
                  </div>
                  <p className="text-muted-foreground mb-8 text-lg italic">
                    &quot;Desde que implementamos as automações e a nova Landing Page elaborada pela <BrandText />, nosso custo por lead caiu pela metade e a equipe de vendas só atende quem realmente quer comprar.&quot;
                  </p>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-white font-heading font-bold text-xl">
                      C
                    </div>
                    <div>
                      <h4 className="text-white font-bold">Cliente Parceiro</h4>
                      <p className="text-sm text-primary">Diretor(a) da Clínica</p>
                    </div>
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

"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, MessageSquare } from "lucide-react";
import Link from "next/link";

export function FloatingCTA() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Mostra o botão após rolar 400px para baixo (quando passa do Hero Section)
      if (window.scrollY > 400) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 50, scale: 0.9 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="fixed bottom-6 right-6 md:bottom-8 md:right-8 z-50 pointer-events-auto"
        >
          <div className="relative group">
            <div className="absolute -inset-1 bg-linear-to-r from-primary to-secondary rounded-full blur-lg opacity-60 group-hover:opacity-100 transition duration-500"></div>
            
            {/* Botão Desktop (Maior, com texto) */}
            <Button
              asChild
              className="relative hidden md:flex items-center gap-2 h-14 px-6 rounded-full bg-background border border-white/10 hover:bg-[#1a1a24] text-white font-bold font-sora shadow-2xl transition-transform hover:scale-105"
            >
              <Link href="#contato">
                <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center -ml-2 mr-1">
                  <MessageSquare className="w-4 h-4 text-primary" />
                </div>
                Solicitar Diagnóstico
                <ArrowRight className="w-4 h-4 ml-1 text-muted-foreground group-hover:text-white transition-colors group-hover:translate-x-1" />
              </Link>
            </Button>

            {/* Botão Mobile (Menor, mais focado no ícone) */}
            <Button
              asChild
              size="icon"
              className="relative flex md:hidden h-14 w-14 rounded-full bg-primary hover:bg-primary/90 text-white shadow-[0_0_25px_rgba(110,68,255,0.6)] transition-transform active:scale-95"
            >
              <Link href="#contato">
                <MessageSquare className="w-6 h-6" />
              </Link>
            </Button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

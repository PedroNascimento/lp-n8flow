"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { ArrowRight, ArrowLeft, Lock, Check, CheckCircle2 } from "lucide-react";
import { sendLeadToWebhook } from "@/app/actions";

const TOTAL_STEPS = 3;

const stepVariants = {
  enter: (direction: number) => ({
    x: direction > 0 ? 60 : -60,
    opacity: 0,
  }),
  center: {
    x: 0,
    opacity: 1,
  },
  exit: (direction: number) => ({
    x: direction > 0 ? -60 : 60,
    opacity: 0,
  }),
};

export function ContactSection() {
  const [step, setStep] = useState(1);
  const [direction, setDirection] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const [formData, setFormData] = useState({
    nome: "",
    whatsapp: "",
    empresa: "",
    segmento: "",
    desafio: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.id]: e.target.value,
    }));
  };

  const nextStep = () => {
    setDirection(1);
    setStep((s) => Math.min(s + 1, TOTAL_STEPS));
  };

  const prevStep = () => {
    setDirection(-1);
    setStep((s) => Math.max(s - 1, 1));
  };

  const handleSubmit = async () => {
    setIsSubmitting(true);

    try {
      await sendLeadToWebhook(formData);
      setIsSubmitted(true);
    } catch (error) {
      console.error("Erro ao invocar server action:", error);
      setIsSubmitted(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  const isStepValid = () => {
    switch (step) {
      case 1:
        return formData.nome.trim() !== "" && formData.whatsapp.trim() !== "";
      case 2:
        return formData.empresa.trim() !== "";
      case 3:
        return formData.desafio.trim() !== "";
      default:
        return false;
    }
  };

  const stepLabels = ["Seus dados", "Sua empresa", "Seu desafio"];

  return (
    <section
      id="contato"
      className="py-24 bg-background relative border-t border-white/5"
    >
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 blur-[120px] rounded-full" />
      </div>

      <div className="container mx-auto px-4 md:px-6 max-w-5xl">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-5xl font-bold font-heading text-white mb-6">
              Pronto para atrair mais pacientes no{" "}
              <span className="text-primary">piloto automático?</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              Preencha o formulário e receba um Diagnóstico Estratégico
              Gratuito. Vamos analisar seus processos atuais e mostrar
              exatamente onde sua clínica está perdendo oportunidades.
            </p>
            <ul className="space-y-4 text-white font-medium">
              <li className="flex items-center gap-3">
                <div className="w-6 h-6 rounded-full bg-secondary/20 flex items-center justify-center text-secondary">
                  ✓
                </div>
                Análise completa da sua presença digital
              </li>
              <li className="flex items-center gap-3">
                <div className="w-6 h-6 rounded-full bg-secondary/20 flex items-center justify-center text-secondary">
                  ✓
                </div>
                Mapeamento dos gargalos que travam seu crescimento
              </li>
              <li className="flex items-center gap-3">
                <div className="w-6 h-6 rounded-full bg-secondary/20 flex items-center justify-center text-secondary">
                  ✓
                </div>
                Plano de ação personalizado para a sua clínica
              </li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Card className="bg-[#1a1a24]/80 backdrop-blur-sm border-white/10 shadow-2xl">
              <CardContent className="p-8">
                <AnimatePresence mode="wait">
                  {isSubmitted ? (
                    /* ✅ Tela de Confirmação */
                    <motion.div
                      key="success"
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5, ease: "easeOut" }}
                      className="flex flex-col items-center justify-center text-center py-8"
                    >
                      <div className="w-20 h-20 rounded-full bg-secondary/20 flex items-center justify-center mb-6">
                        <CheckCircle2 className="w-10 h-10 text-secondary" />
                      </div>

                      <h3 className="text-2xl font-bold font-heading text-white mb-3">
                        Recebemos seu diagnóstico!
                      </h3>

                      <p className="text-muted-foreground mb-2 max-w-sm">
                        Em breve, um especialista da nossa equipe entrará em
                        contato pelo <strong className="text-white">WhatsApp</strong> que
                        você informou.
                      </p>

                      <p className="text-xs text-muted-foreground/60 mb-8">
                        Tempo médio de resposta: até 24h úteis.
                      </p>

                      <div className="w-full p-4 rounded-xl bg-white/5 border border-white/10 text-left space-y-2">
                        <p className="text-xs text-muted-foreground uppercase tracking-wider font-semibold mb-3">
                          Resumo do envio
                        </p>
                        <p className="text-sm text-white">
                          <span className="text-muted-foreground">Nome:</span>{" "}
                          {formData.nome}
                        </p>
                        <p className="text-sm text-white">
                          <span className="text-muted-foreground">WhatsApp:</span>{" "}
                          {formData.whatsapp}
                        </p>
                        <p className="text-sm text-white">
                          <span className="text-muted-foreground">Empresa:</span>{" "}
                          {formData.empresa}
                        </p>
                      </div>
                    </motion.div>
                  ) : (
                    /* 📝 Formulário Multi-Step */
                    <motion.div key="form" exit={{ opacity: 0 }}>
                      {/* Progress Bar */}
                      <div className="mb-8">
                        <div className="flex items-center justify-between mb-3">
                          {stepLabels.map((label, i) => (
                            <div
                              key={i}
                              className="flex items-center gap-2 text-xs font-medium"
                            >
                              <div
                                className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold transition-all duration-300 ${
                                  i + 1 < step
                                    ? "bg-secondary text-black"
                                    : i + 1 === step
                                    ? "bg-primary text-white"
                                    : "bg-white/10 text-muted-foreground"
                                }`}
                              >
                                {i + 1 < step ? (
                                  <Check className="w-3.5 h-3.5" />
                                ) : (
                                  i + 1
                                )}
                              </div>
                              <span
                                className={`hidden sm:inline transition-colors ${
                                  i + 1 <= step
                                    ? "text-white"
                                    : "text-muted-foreground"
                                }`}
                              >
                                {label}
                              </span>
                            </div>
                          ))}
                        </div>
                        <div className="h-1.5 bg-white/10 rounded-full overflow-hidden">
                          <motion.div
                            className="h-full bg-linear-to-r from-primary to-secondary rounded-full"
                            initial={{ width: "0%" }}
                            animate={{
                              width: `${(step / TOTAL_STEPS) * 100}%`,
                            }}
                            transition={{ duration: 0.4, ease: "easeInOut" }}
                          />
                        </div>
                      </div>

                      <form>
                        <div className="relative min-h-[220px]">
                          <AnimatePresence mode="wait" custom={direction}>
                            {/* Step 1 */}
                            {step === 1 && (
                              <motion.div
                                key="step1"
                                custom={direction}
                                variants={stepVariants}
                                initial="enter"
                                animate="center"
                                exit="exit"
                                transition={{ duration: 0.3, ease: "easeInOut" }}
                                className="space-y-5"
                              >
                                <div className="space-y-2">
                                  <Label htmlFor="nome" className="text-white">
                                    Qual o seu nome?
                                  </Label>
                                  <Input
                                    id="nome"
                                    value={formData.nome}
                                    onChange={handleChange}
                                    placeholder="João da Silva"
                                    className="bg-background border-white/10 text-white focus:border-primary placeholder:text-muted-foreground/50 h-12"
                                  />
                                </div>
                                <div className="space-y-2">
                                  <Label htmlFor="whatsapp" className="text-white">
                                    Seu WhatsApp (com DDD)
                                  </Label>
                                  <Input
                                    id="whatsapp"
                                    value={formData.whatsapp}
                                    onChange={handleChange}
                                    placeholder="(84) 99999-0000"
                                    className="bg-background border-white/10 text-white focus:border-primary placeholder:text-muted-foreground/50 h-12"
                                  />
                                </div>
                              </motion.div>
                            )}

                            {/* Step 2 */}
                            {step === 2 && (
                              <motion.div
                                key="step2"
                                custom={direction}
                                variants={stepVariants}
                                initial="enter"
                                animate="center"
                                exit="exit"
                                transition={{ duration: 0.3, ease: "easeInOut" }}
                                className="space-y-5"
                              >
                                <div className="space-y-2">
                                  <Label htmlFor="empresa" className="text-white">
                                    Nome da sua Clínica / Empresa
                                  </Label>
                                  <Input
                                    id="empresa"
                                    value={formData.empresa}
                                    onChange={handleChange}
                                    placeholder="Clínica Exemplo"
                                    className="bg-background border-white/10 text-white focus:border-primary placeholder:text-muted-foreground/50 h-12"
                                  />
                                </div>
                                <div className="space-y-2">
                                  <Label htmlFor="segmento" className="text-white">
                                    Segmento de atuação
                                  </Label>
                                  <Input
                                    id="segmento"
                                    value={formData.segmento}
                                    onChange={handleChange}
                                    placeholder="Ex: Odontologia, Estética, Saúde..."
                                    className="bg-background border-white/10 text-white focus:border-primary placeholder:text-muted-foreground/50 h-12"
                                  />
                                </div>
                              </motion.div>
                            )}

                            {/* Step 3 */}
                            {step === 3 && (
                              <motion.div
                                key="step3"
                                custom={direction}
                                variants={stepVariants}
                                initial="enter"
                                animate="center"
                                exit="exit"
                                transition={{ duration: 0.3, ease: "easeInOut" }}
                                className="space-y-5"
                              >
                                <div className="space-y-2">
                                  <Label htmlFor="desafio" className="text-white">
                                    Qual seu principal desafio hoje?
                                  </Label>
                                  <Textarea
                                    id="desafio"
                                    value={formData.desafio}
                                    onChange={handleChange}
                                    placeholder="Ex: Perco muitos agendamentos porque demoro a responder os leads..."
                                    className="bg-background border-white/10 text-white focus:border-primary placeholder:text-muted-foreground/50 min-h-[140px] resize-none"
                                  />
                                </div>
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </div>

                        {/* Navigation Buttons */}
                        <div className="flex items-center gap-3 mt-8 w-full">
                          {step > 1 && (
                            <Button
                              type="button"
                              variant="outline"
                              onClick={prevStep}
                              className="h-12 px-4 sm:px-6 bg-white/5 border-white/10 hover:bg-white/10 text-white shrink-0"
                            >
                              <ArrowLeft className="w-4 h-4 mr-1 sm:mr-2" />
                              <span className="hidden sm:inline">Voltar</span>
                            </Button>
                          )}

                          {step < TOTAL_STEPS ? (
                            <Button
                              type="button"
                              onClick={nextStep}
                              disabled={!isStepValid()}
                              className="flex-1 h-12 bg-primary hover:bg-primary/90 text-white font-bold disabled:opacity-50"
                            >
                              Próximo
                              <ArrowRight className="ml-2 w-4 h-4" />
                            </Button>
                          ) : (
                            <Button
                              type="button"
                              onClick={handleSubmit}
                              disabled={isSubmitting || !isStepValid()}
                              className="flex-1 h-14 sm:h-12 text-sm sm:text-[15px] font-bold bg-primary hover:bg-primary/90 text-white shadow-[0_0_20px_rgba(110,68,255,0.3)] group transition-all disabled:opacity-50 break-words whitespace-normal leading-tight px-3 sm:px-4"
                            >
                              {isSubmitting
                                ? "Enviando..."
                                : "Quero Diagnóstico Gratuito"}
                              {!isSubmitting && (
                                <ArrowRight className="ml-2 w-4 h-4 shrink-0 group-hover:translate-x-1 transition-transform inline-block" />
                              )}
                            </Button>
                          )}
                        </div>

                        <p className="flex items-center justify-center gap-2 text-xs text-muted-foreground text-center mt-4">
                          <Lock className="w-3 h-3" /> Sem spam. Atendimento
                          direto com especialista.
                        </p>
                      </form>
                    </motion.div>
                  )}
                </AnimatePresence>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

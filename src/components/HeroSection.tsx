import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/80 to-primary/40" />

      <div className="container relative z-10 py-32 md:py-0">
        <motion.div
          initial={{ y: 12, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, ease: [0.2, 0.8, 0.2, 1] }}
          className="max-w-2xl"
        >
          <h1 className="text-hero font-display font-bold text-primary-foreground leading-tight">
            Crédito claro.
            <br />
            Decisão rápida.
          </h1>
          <p className="mt-6 text-lg md:text-xl text-primary-foreground/80 text-body-pretty leading-relaxed max-w-lg">
            14 anos ajudando pessoas de Imbituva a transformar crédito em solução real.
          </p>
          <motion.a
            href="https://wa.me/554234364173"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-10 h-14 px-10 rounded-full bg-accent text-accent-foreground font-semibold text-lg inline-flex items-center gap-3 hover:scale-[1.02] active:scale-[0.98] transition-all"
            initial={{ y: 12, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.2, 0.8, 0.2, 1] }}
          >
            <MessageCircle size={22} strokeWidth={1.5} />
            Falar no WhatsApp
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;

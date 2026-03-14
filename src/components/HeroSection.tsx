import { motion } from "framer-motion";
import { MessageCircle, ChevronDown, Shield, Clock, Star } from "lucide-react";
import heroImg from "@/assets/hero-family.jpg";

const badges = [
  { icon: Shield, label: "14 anos de experiência" },
  { icon: Clock, label: "Aprovação ágil" },
  { icon: Star, label: "+5.000 clientes atendidos" },
];

const HeroSection = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background image with parallax feel */}
      <div className="absolute inset-0">
        <img
          src={heroImg}
          alt="Família feliz"
          className="w-full h-full object-cover scale-110"
        />
      </div>

      {/* Rich gradient overlay */}
      <div className="absolute inset-0 gradient-hero-overlay" />

      {/* Decorative elements */}
      <div className="absolute top-20 right-10 w-96 h-96 rounded-full bg-accent/10 blur-[120px]" />
      <div className="absolute bottom-20 left-10 w-72 h-72 rounded-full bg-primary-glow/20 blur-[100px]" />

      {/* Animated geometric shapes */}
      <motion.div
        className="absolute top-1/4 right-1/4 w-3 h-3 rounded-full bg-accent/60"
        animate={{ y: [0, -20, 0], opacity: [0.6, 1, 0.6] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute top-1/3 right-1/3 w-2 h-2 rounded-full bg-primary-foreground/40"
        animate={{ y: [0, -15, 0], opacity: [0.4, 0.8, 0.4] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      />

      <div className="container relative z-10 py-32 md:py-0">
        <div className="max-w-3xl">
          {/* Trust badge */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, ease: [0.2, 0.8, 0.2, 1] }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-foreground/10 backdrop-blur-md border border-primary-foreground/20 mb-8"
          >
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
            <span className="text-sm font-medium text-primary-foreground/90">
              Atendendo Imbituva há 14 anos
            </span>
          </motion.div>

          <motion.h1
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.2, 0.8, 0.2, 1] }}
            className="text-hero font-display font-extrabold text-primary-foreground leading-[1.1]"
          >
            Crédito claro.
            <br />
            <span className="bg-gradient-to-r from-accent to-accent-glow bg-clip-text text-transparent">
              Decisão rápida.
            </span>
          </motion.h1>

          <motion.p
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.2, 0.8, 0.2, 1] }}
            className="mt-6 text-lg md:text-xl text-primary-foreground/75 text-body-pretty leading-relaxed max-w-xl"
          >
            Transformamos a complexidade do crédito em{" "}
            <strong className="text-primary-foreground">soluções simples</strong> que
            mudam a vida de famílias e negócios.
          </motion.p>

          {/* CTA buttons */}
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.3, ease: [0.2, 0.8, 0.2, 1] }}
            className="flex flex-col sm:flex-row gap-4 mt-10"
          >
            <a
              href="https://wa.me/554234364173"
              target="_blank"
              rel="noopener noreferrer"
              className="h-14 px-10 rounded-full gradient-accent text-accent-foreground font-bold text-lg inline-flex items-center justify-center gap-3 hover:scale-[1.03] active:scale-[0.97] transition-all shadow-glow-accent"
            >
              <MessageCircle size={22} strokeWidth={1.5} />
              Falar no WhatsApp
            </a>
            <a
              href="#servicos"
              className="h-14 px-10 rounded-full border-2 border-primary-foreground/30 text-primary-foreground font-semibold text-lg inline-flex items-center justify-center gap-2 hover:bg-primary-foreground/10 transition-all backdrop-blur-sm"
            >
              Conhecer soluções
            </a>
          </motion.div>

          {/* Trust badges */}
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.5, ease: [0.2, 0.8, 0.2, 1] }}
            className="flex flex-wrap gap-6 mt-14"
          >
            {badges.map((badge) => (
              <div key={badge.label} className="flex items-center gap-2">
                <badge.icon size={16} strokeWidth={1.5} className="text-accent" />
                <span className="text-sm text-primary-foreground/60 font-medium">{badge.label}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.a
        href="#processo"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-primary-foreground/50"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <span className="text-xs font-medium">Saiba mais</span>
        <ChevronDown size={20} strokeWidth={1.5} />
      </motion.a>
    </section>
  );
};

export default HeroSection;

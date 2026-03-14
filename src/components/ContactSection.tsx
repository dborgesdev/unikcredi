import { motion } from "framer-motion";
import { MessageCircle, Instagram, ArrowRight } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contato" className="py-24 md:py-32 gradient-section relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/30 to-transparent" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-accent/8 blur-[120px]" />

      <div className="container relative">
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="max-w-3xl mx-auto text-center"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-accent/10 text-accent text-sm font-semibold mb-4">
            Estamos prontos para ajudar
          </span>
          <h2 className="text-section font-display font-extrabold text-foreground">
            Fale diretamente com a{" "}
            <span className="bg-gradient-to-r from-accent to-accent-glow bg-clip-text text-transparent">equipe</span>
          </h2>
          <p className="mt-4 text-muted-foreground text-lg text-body-pretty max-w-xl mx-auto">
            Escolha o canal mais prático e receba orientação rápida e personalizada sobre crédito.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-5 mt-12">
            <motion.a
              href="https://wa.me/554234364173"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="h-16 px-12 rounded-full gradient-accent text-accent-foreground font-bold text-lg inline-flex items-center gap-3 shadow-glow-accent w-full sm:w-auto justify-center"
            >
              <MessageCircle size={24} strokeWidth={1.5} />
              Conversar no WhatsApp
              <ArrowRight size={18} />
            </motion.a>
            <motion.a
              href="https://www.instagram.com/solucoes_financeiras_imbituva"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="h-16 px-12 rounded-full border-2 border-primary text-primary font-bold text-lg inline-flex items-center gap-3 hover:gradient-primary hover:text-primary-foreground hover:border-transparent transition-all w-full sm:w-auto justify-center"
            >
              <Instagram size={24} strokeWidth={1.5} />
              Abrir Instagram
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;

import { motion } from "framer-motion";
import { MessageCircle, Instagram } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contato" className="py-24 md:py-32">
      <div className="container">
        <motion.div
          initial={{ y: 12, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mx-auto text-center"
        >
          <h2 className="text-section font-display font-bold text-foreground">Fale diretamente com a equipe</h2>
          <p className="mt-4 text-muted-foreground text-lg text-body-pretty">
            Escolha o canal mais prático e receba orientação rápida sobre crédito.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10">
            <a
              href="https://wa.me/554234364173"
              target="_blank"
              rel="noopener noreferrer"
              className="h-14 px-10 rounded-full bg-accent text-accent-foreground font-semibold text-lg inline-flex items-center gap-3 hover:scale-[1.02] active:scale-[0.98] transition-all"
            >
              <MessageCircle size={22} strokeWidth={1.5} />
              Conversar no WhatsApp
            </a>
            <a
              href="https://www.instagram.com/solucoes_financeiras_imbituva"
              target="_blank"
              rel="noopener noreferrer"
              className="h-14 px-10 rounded-full border-2 border-primary text-primary font-semibold text-lg inline-flex items-center gap-3 hover:bg-primary hover:text-primary-foreground transition-all"
            >
              <Instagram size={22} strokeWidth={1.5} />
              Abrir Instagram
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;

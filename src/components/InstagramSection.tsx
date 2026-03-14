import { motion } from "framer-motion";
import { Instagram } from "lucide-react";
import feed1 from "@/assets/feed-1.png";
import feed2 from "@/assets/feed-2.png";
import feed3 from "@/assets/feed-3.png";
import feed4 from "@/assets/feed-4.png";

const images = [feed1, feed2, feed3, feed4];

const InstagramSection = () => {
  return (
    <section id="instagram" className="py-24 md:py-32 gradient-section relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/30 to-transparent" />

      <div className="container relative">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-accent/10 text-accent text-sm font-semibold mb-4">
            @solucoes_financeiras_imbituva
          </span>
          <h2 className="text-section font-display font-extrabold text-foreground">
            Acompanhe no{" "}
            <span className="bg-gradient-to-r from-accent to-accent-glow bg-clip-text text-transparent">Instagram</span>
          </h2>
          <p className="mt-4 text-muted-foreground text-lg">Conteúdos, orientações e novidades sobre crédito.</p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 max-w-5xl mx-auto">
          {images.map((img, i) => (
            <motion.a
              key={i}
              href="https://www.instagram.com/solucoes_financeiras_imbituva"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ y: 30, opacity: 0, scale: 0.95 }}
              whileInView={{ y: 0, opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="aspect-square rounded-2xl overflow-hidden shadow-financial group relative"
            >
              <img
                src={img}
                alt={`Post Instagram ${i + 1}`}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/30 transition-colors duration-300 flex items-center justify-center">
                <Instagram size={32} strokeWidth={1.5} className="text-primary-foreground opacity-0 group-hover:opacity-100 transition-all duration-300 scale-50 group-hover:scale-100" />
              </div>
            </motion.a>
          ))}
        </div>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12"
        >
          <a
            href="https://www.instagram.com/solucoes_financeiras_imbituva"
            target="_blank"
            rel="noopener noreferrer"
            className="h-12 px-8 rounded-full gradient-primary text-primary-foreground font-semibold inline-flex items-center gap-2 hover:scale-[1.03] active:scale-[0.97] transition-all shadow-glow-primary"
          >
            <Instagram size={20} strokeWidth={1.5} />
            Seguir no Instagram
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default InstagramSection;

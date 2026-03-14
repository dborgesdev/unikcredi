import { motion } from "framer-motion";
import { Instagram } from "lucide-react";
import feed1 from "@/assets/feed-1.png";
import feed2 from "@/assets/feed-2.png";
import feed3 from "@/assets/feed-3.png";
import feed4 from "@/assets/feed-4.png";

const images = [feed1, feed2, feed3, feed4];

const InstagramSection = () => {
  return (
    <section id="instagram" className="py-24 md:py-32">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-section font-display font-bold text-foreground">Acompanhe no Instagram</h2>
          <p className="mt-4 text-muted-foreground text-lg">Conteúdos, orientações e novidades sobre crédito.</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
          {images.map((img, i) => (
            <motion.div
              key={i}
              initial={{ y: 12, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="aspect-square rounded-2xl overflow-hidden shadow-financial group"
            >
              <img
                src={img}
                alt={`Post Instagram ${i + 1}`}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-10">
          <a
            href="https://www.instagram.com/solucoes_financeiras_imbituva"
            target="_blank"
            rel="noopener noreferrer"
            className="h-12 px-8 rounded-full bg-primary text-primary-foreground font-medium inline-flex items-center gap-2 hover:scale-[1.02] active:scale-[0.98] transition-all"
          >
            <Instagram size={20} strokeWidth={1.5} />
            Seguir no Instagram
          </a>
        </div>
      </div>
    </section>
  );
};

export default InstagramSection;

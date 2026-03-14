import { motion } from "framer-motion";
import { MapPin } from "lucide-react";
import fachada from "@/assets/fachada.jpg";

const LocationSection = () => {
  return (
    <section id="visita" className="py-24 md:py-32 bg-secondary">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
          <motion.div
            initial={{ y: 12, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-2xl overflow-hidden shadow-financial"
          >
            <img src={fachada} alt="Escritório Unik Credi em Imbituva" className="w-full h-80 object-cover" loading="lazy" />
          </motion.div>

          <motion.div
            initial={{ y: 12, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h2 className="text-section font-display font-bold text-foreground">Venha nos conhecer</h2>
            <p className="mt-4 text-muted-foreground text-lg text-body-pretty leading-relaxed">
              Atendimento presencial no centro de Imbituva. Ambiente preparado para explicar cada etapa do crédito com clareza.
            </p>
            <p className="mt-4 text-foreground font-medium">
              Av. Sete de Setembro, 166 — Centro, Imbituva - PR
            </p>
            <a
              href="https://maps.google.com/?q=Av.+Sete+de+Setembro,+166,+Imbituva+PR"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 h-12 px-8 rounded-full bg-primary text-primary-foreground font-medium inline-flex items-center gap-2 hover:scale-[1.02] active:scale-[0.98] transition-all"
            >
              <MapPin size={20} strokeWidth={1.5} />
              Abrir no mapa
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default LocationSection;

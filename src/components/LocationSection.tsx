import { motion } from "framer-motion";
import { MapPin, Clock, Phone } from "lucide-react";
import fachada from "@/assets/fachada.jpg";

const LocationSection = () => {
  return (
    <section id="visita" className="py-24 md:py-32 relative overflow-hidden">
      <div className="absolute -top-40 -right-40 w-80 h-80 rounded-full bg-primary/5 blur-[100px]" />

      <div className="container relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          <motion.div
            initial={{ x: -40, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.2, 0.8, 0.2, 1] }}
            className="relative group"
          >
            <div className="rounded-3xl overflow-hidden shadow-financial-hover relative">
              <img
                src={fachada}
                alt="Escritório Unik Credi em Imbituva"
                className="w-full h-80 lg:h-[420px] object-cover group-hover:scale-105 transition-transform duration-700"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/40 to-transparent" />
            </div>
            {/* Floating badge */}
            <motion.div
              className="absolute -bottom-4 -right-4 lg:right-8 bg-card rounded-2xl p-4 shadow-financial-hover"
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl gradient-accent flex items-center justify-center">
                  <MapPin size={20} strokeWidth={1.5} className="text-accent-foreground" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">Centro de</p>
                  <p className="text-sm font-bold text-foreground">Imbituva, PR</p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ x: 40, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.2, 0.8, 0.2, 1] }}
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-4">
              Atendimento presencial
            </span>
            <h2 className="text-section font-display font-extrabold text-foreground">
              Venha nos{" "}
              <span className="bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">conhecer</span>
            </h2>
            <p className="mt-4 text-muted-foreground text-lg text-body-pretty leading-relaxed">
              Ambiente preparado para explicar cada etapa do crédito com clareza. Atendimento humano e especializado.
            </p>

            <div className="mt-8 space-y-4">
              <div className="flex items-center gap-4 p-4 rounded-xl bg-secondary">
                <MapPin size={20} strokeWidth={1.5} className="text-primary shrink-0" />
                <p className="text-foreground font-medium text-sm">Av. Sete de Setembro, 166 — Centro, Imbituva - PR</p>
              </div>
              <div className="flex items-center gap-4 p-4 rounded-xl bg-secondary">
                <Clock size={20} strokeWidth={1.5} className="text-primary shrink-0" />
                <p className="text-foreground font-medium text-sm">Segunda a Sexta — 09:00 às 18:00</p>
              </div>
              <div className="flex items-center gap-4 p-4 rounded-xl bg-secondary">
                <Phone size={20} strokeWidth={1.5} className="text-primary shrink-0" />
                <p className="text-foreground font-medium text-sm">(42) 3436-4173</p>
              </div>
            </div>

            <a
              href="https://maps.google.com/?q=Av.+Sete+de+Setembro,+166,+Imbituva+PR"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 h-12 px-8 rounded-full gradient-primary text-primary-foreground font-semibold inline-flex items-center gap-2 hover:scale-[1.03] active:scale-[0.97] transition-all shadow-glow-primary"
            >
              <MapPin size={20} strokeWidth={1.5} />
              Abrir no Google Maps
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default LocationSection;

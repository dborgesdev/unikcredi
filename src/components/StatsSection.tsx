import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";

const stats = [
  { value: "14", suffix: "+", label: "Anos de experiência" },
  { value: "5.000", suffix: "+", label: "Clientes atendidos" },
  { value: "98", suffix: "%", label: "Satisfação" },
  { value: "24", suffix: "h", label: "Tempo de resposta" },
];

const StatsSection = () => {
  return (
    <section className="py-20 gradient-dark relative overflow-hidden">
      {/* Decorative glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] rounded-full bg-accent/10 blur-[120px]" />

      <div className="container relative">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="text-center"
            >
              <div className="text-4xl md:text-5xl font-display font-extrabold text-primary-foreground tabular-nums">
                {stat.value}
                <span className="text-accent">{stat.suffix}</span>
              </div>
              <p className="mt-2 text-sm text-primary-foreground/60 font-medium">{stat.label}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-14"
        >
          <a
            href="https://wa.me/554234364173"
            target="_blank"
            rel="noopener noreferrer"
            className="h-14 px-10 rounded-full gradient-accent text-accent-foreground font-bold text-lg inline-flex items-center gap-3 hover:scale-[1.03] active:scale-[0.97] transition-all shadow-glow-accent"
          >
            <MessageCircle size={22} strokeWidth={1.5} />
            Quero meu crédito
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default StatsSection;

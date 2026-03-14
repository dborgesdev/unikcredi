import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import aposentado from "@/assets/aposentado.jpg";
import trabalhadora from "@/assets/trabalhadora.jpg";
import rural from "@/assets/rural.jpg";

const items = [
  {
    problem: "Contas acumulando e sem saída?",
    solution: "Crédito pessoal para reorganizar o orçamento e retomar o controle.",
    image: trabalhadora,
    accent: true,
  },
  {
    problem: "Aposentadoria não está dando conta?",
    solution: "Consignado INSS com as melhores condições do mercado.",
    image: aposentado,
    accent: false,
  },
  {
    problem: "Precisa investir na produção rural?",
    solution: "Crédito rural e Plano Safra para expandir seus resultados.",
    image: rural,
    accent: true,
  },
];

const ProblemSolutionSection = () => {
  return (
    <section id="dores" className="py-24 md:py-32 gradient-section relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />

      <div className="container relative">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-20"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-accent/10 text-accent text-sm font-semibold mb-4">
            Identificamos suas necessidades
          </span>
          <h2 className="text-section font-display font-extrabold text-foreground">
            Situações comuns.{" "}
            <span className="bg-gradient-to-r from-accent to-accent-glow bg-clip-text text-transparent">
              Soluções diretas.
            </span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {items.map((item, i) => (
            <motion.div
              key={item.problem}
              initial={{ y: 40, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: i * 0.15, ease: [0.2, 0.8, 0.2, 1] }}
              className="group relative rounded-3xl overflow-hidden shadow-financial hover:shadow-financial-hover transition-all duration-500"
            >
              {/* Image */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.problem}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/90 via-foreground/30 to-transparent" />
              </div>

              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <p className="text-sm font-medium text-accent mb-1">{item.problem}</p>
                <p className="text-lg font-display font-bold text-primary-foreground leading-snug">{item.solution}</p>
                <a
                  href="https://wa.me/554234364173"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 mt-3 text-sm font-semibold text-accent hover:gap-3 transition-all"
                >
                  Resolver agora <ArrowRight size={16} />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProblemSolutionSection;

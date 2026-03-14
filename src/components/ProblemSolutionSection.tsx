import { motion } from "framer-motion";
import { Receipt, ShieldCheck, HeartHandshake, Zap } from "lucide-react";

const items = [
  { icon: Receipt, problem: "Contas acumulando", solution: "Crédito pessoal para reorganizar o orçamento." },
  { icon: ShieldCheck, problem: "Dificuldade em aprovação", solution: "Linhas de crédito adequadas ao seu perfil." },
  { icon: HeartHandshake, problem: "Aposentadoria limitada", solution: "Consignado INSS com condições previsíveis." },
  { icon: Zap, problem: "Necessidade imediata", solution: "Liberação rápida e atendimento direto." },
];

const ProblemSolutionSection = () => {
  return (
    <section id="dores" className="py-24 md:py-32">
      <div className="container">
        <h2 className="text-section font-display font-bold text-foreground text-center mb-16">
          Situações comuns. Soluções diretas.
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {items.map((item, i) => (
            <motion.div
              key={item.problem}
              initial={{ y: 12, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.08, ease: [0.2, 0.8, 0.2, 1] }}
              className="bg-card rounded-2xl p-6 shadow-financial hover:shadow-financial-hover transition-all group"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center shrink-0 group-hover:bg-accent/20 transition-colors">
                  <item.icon size={24} strokeWidth={1.5} className="text-accent" />
                </div>
                <div>
                  <p className="text-sm font-medium text-muted-foreground">{item.problem}</p>
                  <p className="mt-1 text-base font-display font-semibold text-foreground">{item.solution}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProblemSolutionSection;

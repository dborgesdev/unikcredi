import { motion } from "framer-motion";
import { Search, FileText, CheckCircle, Banknote } from "lucide-react";

const steps = [
  { icon: Search, title: "Análise inteligente", description: "Avaliação rápida das possibilidades de crédito disponíveis para o seu perfil." },
  { icon: FileText, title: "Proposta clara", description: "Simulação direta com valores, taxas e prazos apresentados com transparência." },
  { icon: CheckCircle, title: "Aprovação ágil", description: "Integração com bancos e instituições financeiras para acelerar a liberação." },
  { icon: Banknote, title: "Dinheiro liberado", description: "Após a confirmação, o crédito segue diretamente para sua conta." },
];

const ProcessSection = () => {
  return (
    <section id="processo" className="py-24 md:py-32 bg-secondary">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-section font-display font-bold text-foreground">Como o crédito acontece</h2>
          <p className="mt-4 text-muted-foreground text-lg text-body-pretty">
            Um processo simples, transparente e direto ao ponto.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, i) => (
            <motion.div
              key={step.title}
              initial={{ y: 12, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.1, ease: [0.2, 0.8, 0.2, 1] }}
              className="bg-card rounded-2xl p-6 shadow-financial hover:shadow-financial-hover transition-shadow"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                <step.icon size={24} strokeWidth={1.5} className="text-primary" />
              </div>
              <span className="text-xs font-semibold text-accent tabular-nums">0{i + 1}</span>
              <h3 className="text-lg font-display font-semibold text-foreground mt-1">{step.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground text-body-pretty leading-relaxed">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;

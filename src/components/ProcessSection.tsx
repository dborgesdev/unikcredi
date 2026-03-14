import { motion } from "framer-motion";
import { Search, FileText, CheckCircle, Banknote } from "lucide-react";

const steps = [
  { icon: Search, title: "Análise inteligente", description: "Avaliação rápida das possibilidades de crédito disponíveis para o seu perfil.", color: "from-primary to-primary-glow" },
  { icon: FileText, title: "Proposta clara", description: "Simulação direta com valores, taxas e prazos apresentados com transparência.", color: "from-primary-glow to-primary" },
  { icon: CheckCircle, title: "Aprovação ágil", description: "Integração com bancos e instituições financeiras para acelerar a liberação.", color: "from-accent to-accent-glow" },
  { icon: Banknote, title: "Dinheiro liberado", description: "Após a confirmação, o crédito segue diretamente para sua conta.", color: "from-accent-glow to-accent" },
];

const ProcessSection = () => {
  return (
    <section id="processo" className="py-24 md:py-32 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/30 to-transparent" />
      <div className="absolute -top-40 -right-40 w-80 h-80 rounded-full bg-accent/5 blur-[100px]" />
      <div className="absolute -bottom-40 -left-40 w-80 h-80 rounded-full bg-primary/5 blur-[100px]" />

      <div className="container relative">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-20"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-4">
            Processo simples
          </span>
          <h2 className="text-section font-display font-extrabold text-foreground">
            Como o crédito acontece
          </h2>
          <p className="mt-4 text-muted-foreground text-lg text-body-pretty">
            Um processo transparente e direto ao ponto.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, i) => (
            <motion.div
              key={step.title}
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: i * 0.12, ease: [0.2, 0.8, 0.2, 1] }}
              className="relative group"
            >
              {/* Connector line */}
              {i < 3 && (
                <div className="hidden lg:block absolute top-10 left-[60%] w-[80%] h-px border-t-2 border-dashed border-border" />
              )}

              <div className="bg-card rounded-2xl p-8 shadow-financial hover:shadow-financial-hover transition-all duration-500 h-full border border-transparent hover:border-accent/20 relative overflow-hidden">
                {/* Hover glow */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-accent/5 to-transparent" />

                <div className="relative">
                  <motion.div
                    whileInView={{ scale: [0, 1.1, 1] }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.3 + i * 0.15, ease: [0.2, 0.8, 0.2, 1] }}
                    className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${step.color} flex items-center justify-center mb-5 shadow-lg`}
                  >
                    <step.icon size={26} strokeWidth={1.5} className="text-primary-foreground" />
                  </motion.div>

                  <span className="text-xs font-bold text-accent tabular-nums tracking-wider">PASSO 0{i + 1}</span>
                  <h3 className="text-lg font-display font-bold text-foreground mt-1">{step.title}</h3>
                  <p className="mt-3 text-sm text-muted-foreground text-body-pretty leading-relaxed">{step.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;

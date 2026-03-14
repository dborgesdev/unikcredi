import { motion } from "framer-motion";
import { User, Landmark, Briefcase, PiggyBank, Tractor, Wheat, Car, ArrowRight } from "lucide-react";

const services = [
  { icon: User, name: "Empréstimo pessoal", description: "Crédito direto para reorganizar despesas, investir ou resolver necessidades imediatas.", highlight: false },
  { icon: Landmark, name: "Consignado INSS", description: "Linha de crédito para aposentados e pensionistas com parcelas descontadas no benefício.", highlight: true },
  { icon: Briefcase, name: "Consignado CLT", description: "Crédito para trabalhadores com carteira assinada com condições mais previsíveis.", highlight: false },
  { icon: PiggyBank, name: "Antecipação FGTS", description: "Acesso antecipado ao saldo do saque-aniversário com liberação rápida.", highlight: false },
  { icon: Tractor, name: "Crédito rural", description: "Soluções financeiras voltadas ao produtor rural e às necessidades do campo.", highlight: true },
  { icon: Wheat, name: "Plano Safra", description: "Linhas de crédito para custeio, investimento e expansão agrícola.", highlight: false },
  { icon: Car, name: "Refinanciamento de veículos", description: "Transforme o valor do seu veículo em crédito com parcelas ajustadas.", highlight: false },
];

const ServicesSection = () => {
  return (
    <section id="servicos" className="py-24 md:py-32 relative overflow-hidden">
      <div className="absolute -top-40 right-0 w-[500px] h-[500px] rounded-full bg-primary/5 blur-[120px]" />
      <div className="absolute -bottom-40 left-0 w-[400px] h-[400px] rounded-full bg-accent/5 blur-[100px]" />

      <div className="container relative">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-20"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-4">
            Nossas soluções
          </span>
          <h2 className="text-section font-display font-extrabold text-foreground">
            Crédito pensado para{" "}
            <span className="bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">
              cada momento
            </span>
          </h2>
          <p className="mt-4 text-muted-foreground text-lg text-body-pretty">
            Produtos financeiros pensados para diferentes momentos da vida.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <motion.a
              key={service.name}
              href="https://wa.me/554234364173"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.08, ease: [0.2, 0.8, 0.2, 1] }}
              className={`relative group rounded-2xl p-8 transition-all duration-500 overflow-hidden cursor-pointer ${
                service.highlight
                  ? "gradient-primary text-primary-foreground shadow-glow-primary hover:shadow-lg"
                  : "bg-card shadow-financial hover:shadow-financial-hover border border-transparent hover:border-accent/20"
              }`}
            >
              {/* Hover glow for non-highlight */}
              {!service.highlight && (
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-primary/5 to-accent/5" />
              )}

              {/* Shimmer for highlight */}
              {service.highlight && (
                <div className="absolute inset-0 animate-shimmer pointer-events-none" />
              )}

              <div className="relative">
                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-5 transition-transform duration-300 group-hover:scale-110 ${
                  service.highlight
                    ? "bg-primary-foreground/15"
                    : "bg-gradient-to-br from-primary/10 to-accent/10"
                }`}>
                  <service.icon size={26} strokeWidth={1.5} className={service.highlight ? "text-primary-foreground" : "text-primary"} />
                </div>
                <h3 className={`text-xl font-display font-bold ${service.highlight ? "" : "text-foreground"}`}>
                  {service.name}
                </h3>
                <p className={`mt-3 text-sm leading-relaxed text-body-pretty ${
                  service.highlight ? "text-primary-foreground/75" : "text-muted-foreground"
                }`}>
                  {service.description}
                </p>
                <div className={`inline-flex items-center gap-1.5 mt-4 text-sm font-semibold group-hover:gap-3 transition-all ${
                  service.highlight ? "text-accent" : "text-accent"
                }`}>
                  Solicitar <ArrowRight size={16} />
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;

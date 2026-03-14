import { motion } from "framer-motion";
import { User, Landmark, Briefcase, PiggyBank, Tractor, Wheat, Car } from "lucide-react";

const services = [
  { icon: User, name: "Empréstimo pessoal", description: "Crédito direto para reorganizar despesas, investir ou resolver necessidades imediatas." },
  { icon: Landmark, name: "Consignado INSS", description: "Linha de crédito para aposentados e pensionistas com parcelas descontadas no benefício." },
  { icon: Briefcase, name: "Consignado CLT", description: "Crédito para trabalhadores com carteira assinada com condições mais previsíveis." },
  { icon: PiggyBank, name: "Antecipação FGTS", description: "Acesso antecipado ao saldo do saque-aniversário com liberação rápida." },
  { icon: Tractor, name: "Crédito rural", description: "Soluções financeiras voltadas ao produtor rural e às necessidades do campo." },
  { icon: Wheat, name: "Plano Safra", description: "Linhas de crédito para custeio, investimento e expansão agrícola." },
  { icon: Car, name: "Refinanciamento de veículos", description: "Transforme o valor do seu veículo em crédito com parcelas ajustadas." },
];

const ServicesSection = () => {
  return (
    <section id="servicos" className="py-24 md:py-32 bg-secondary">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-section font-display font-bold text-foreground">Soluções de crédito</h2>
          <p className="mt-4 text-muted-foreground text-lg text-body-pretty">
            Produtos financeiros pensados para diferentes momentos da vida.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={service.name}
              initial={{ y: 12, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.06, ease: [0.2, 0.8, 0.2, 1] }}
              className="bg-card rounded-2xl p-6 shadow-financial hover:shadow-financial-hover transition-all group border-b-2 border-transparent hover:border-accent"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/15 transition-colors">
                <service.icon size={24} strokeWidth={1.5} className="text-primary" />
              </div>
              <h3 className="text-lg font-display font-semibold text-foreground">{service.name}</h3>
              <p className="mt-2 text-sm text-muted-foreground text-body-pretty leading-relaxed">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;

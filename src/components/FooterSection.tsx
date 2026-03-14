import logo from "@/assets/logo.png";

const FooterSection = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-16">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <img src={logo} alt="Unik Cred" className="h-12 mb-4" />
            <p className="text-primary-foreground/70 text-sm leading-relaxed">
              Soluções financeiras com foco em clareza, agilidade e relacionamento.
            </p>
          </div>

          <div>
            <h4 className="font-display font-semibold mb-3">Endereço</h4>
            <p className="text-primary-foreground/70 text-sm leading-relaxed">
              Av. Sete de Setembro, 166<br />
              Centro, Imbituva - PR<br />
              84430-000
            </p>
          </div>

          <div>
            <h4 className="font-display font-semibold mb-3">Horário</h4>
            <p className="text-primary-foreground/70 text-sm leading-relaxed">
              Segunda a Sexta<br />
              09:00 às 18:00
            </p>
          </div>

          <div>
            <h4 className="font-display font-semibold mb-3">Canais</h4>
            <div className="flex flex-col gap-2">
              <a
                href="https://wa.me/554234364173"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary-foreground/70 hover:text-primary-foreground text-sm transition-colors"
              >
                WhatsApp
              </a>
              <a
                href="https://www.instagram.com/solucoes_financeiras_imbituva"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary-foreground/70 hover:text-primary-foreground text-sm transition-colors"
              >
                Instagram
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-primary-foreground/10 text-center">
          <p className="text-primary-foreground/50 text-sm">
            © {new Date().getFullYear()} Unik Credi Soluções Financeiras. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;

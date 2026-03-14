import { MessageCircle, Instagram, Heart } from "lucide-react";
import logo from "@/assets/logo.png";

const FooterSection = () => {
  return (
    <footer className="gradient-dark text-primary-foreground relative overflow-hidden">
      {/* Top glow line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/40 to-transparent" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[300px] h-[2px] bg-accent/50 blur-sm" />

      <div className="container py-16 relative">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <img src={logo} alt="Unik Cred" className="h-14 mb-5" />
            <p className="text-primary-foreground/60 text-sm leading-relaxed">
              Soluções financeiras com foco em clareza, agilidade e relacionamento. Transformando vidas há 14 anos.
            </p>
          </div>

          <div>
            <h4 className="font-display font-bold text-lg mb-4">Endereço</h4>
            <p className="text-primary-foreground/60 text-sm leading-relaxed">
              Av. Sete de Setembro, 166<br />
              Centro, Imbituva - PR<br />
              84430-000
            </p>
          </div>

          <div>
            <h4 className="font-display font-bold text-lg mb-4">Horário</h4>
            <p className="text-primary-foreground/60 text-sm leading-relaxed">
              Segunda a Sexta<br />
              09:00 às 18:00
            </p>
          </div>

          <div>
            <h4 className="font-display font-bold text-lg mb-4">Canais</h4>
            <div className="flex flex-col gap-3">
              <a
                href="https://wa.me/554234364173"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-primary-foreground/60 hover:text-accent text-sm transition-colors group"
              >
                <MessageCircle size={16} strokeWidth={1.5} className="group-hover:text-accent" />
                WhatsApp
              </a>
              <a
                href="https://www.instagram.com/solucoes_financeiras_imbituva"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-primary-foreground/60 hover:text-accent text-sm transition-colors group"
              >
                <Instagram size={16} strokeWidth={1.5} className="group-hover:text-accent" />
                Instagram
              </a>
            </div>
          </div>
        </div>

        <div className="mt-14 pt-8 border-t border-primary-foreground/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-primary-foreground/40 text-sm">
            © {new Date().getFullYear()} Unik Credi Soluções Financeiras. Todos os direitos reservados.
          </p>
          <p className="text-primary-foreground/30 text-xs flex items-center gap-1">
            Feito com <Heart size={12} className="text-accent" /> em Imbituva
          </p>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;

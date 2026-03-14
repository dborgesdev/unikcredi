import { useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "@/assets/logo.png";

const menuItems = [
  { label: "Início", link: "#hero" },
  { label: "Como Funciona", link: "#processo" },
  { label: "Soluções", link: "#servicos" },
  { label: "Localização", link: "#visita" },
  { label: "Contato", link: "#contato" },
];

const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-md border-b border-border">
      <div className="container flex items-center justify-between h-16 md:h-20">
        <a href="#hero" className="flex items-center gap-2">
          <img src={logo} alt="Unik Cred" className="h-10 md:h-12" />
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {menuItems.map((item) => (
            <a
              key={item.link}
              href={item.link}
              className="text-sm font-medium text-foreground/70 hover:text-primary transition-colors"
            >
              {item.label}
            </a>
          ))}
          <a
            href="https://wa.me/554234364173"
            target="_blank"
            rel="noopener noreferrer"
            className="h-12 px-8 rounded-full bg-primary text-primary-foreground font-medium inline-flex items-center hover:scale-[1.02] active:scale-[0.98] transition-all"
          >
            Falar no WhatsApp
          </a>
        </nav>

        <button
          onClick={() => setOpen(!open)}
          className="md:hidden p-2 text-foreground"
          aria-label="Menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-background border-t border-border">
          <nav className="container py-4 flex flex-col gap-4">
            {menuItems.map((item) => (
              <a
                key={item.link}
                href={item.link}
                onClick={() => setOpen(false)}
                className="text-base font-medium text-foreground/70 hover:text-primary py-2"
              >
                {item.label}
              </a>
            ))}
            <a
              href="https://wa.me/554234364173"
              target="_blank"
              rel="noopener noreferrer"
              className="h-12 px-8 rounded-full bg-primary text-primary-foreground font-medium inline-flex items-center justify-center mt-2"
            >
              Falar no WhatsApp
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;

import { useState, useEffect } from "react";
import { Menu, X, MessageCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
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
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.2, 0.8, 0.2, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-background/95 backdrop-blur-xl shadow-financial border-b border-border"
          : "bg-transparent"
      }`}
    >
      <div className="container flex items-center justify-between h-16 md:h-20">
        <a href="#hero" className="flex items-center gap-2 relative z-10">
          <img src={logo} alt="Unik Cred" className="h-10 md:h-12" />
        </a>

        <nav className="hidden lg:flex items-center gap-8">
          {menuItems.map((item) => (
            <a
              key={item.link}
              href={item.link}
              className={`text-sm font-medium transition-colors relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-accent after:scale-x-0 after:origin-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-left ${
                scrolled ? "text-foreground/70 hover:text-foreground" : "text-primary-foreground/80 hover:text-primary-foreground"
              }`}
            >
              {item.label}
            </a>
          ))}
          <a
            href="https://wa.me/554234364173"
            target="_blank"
            rel="noopener noreferrer"
            className="h-12 px-8 rounded-full gradient-accent text-accent-foreground font-semibold inline-flex items-center gap-2 hover:scale-[1.03] active:scale-[0.97] transition-all shadow-glow-accent"
          >
            <MessageCircle size={18} strokeWidth={1.5} />
            WhatsApp
          </a>
        </nav>

        <button
          onClick={() => setOpen(!open)}
          className={`lg:hidden p-2 ${scrolled ? "text-foreground" : "text-primary-foreground"}`}
          aria-label="Menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-background/98 backdrop-blur-xl border-t border-border overflow-hidden"
          >
            <nav className="container py-6 flex flex-col gap-1">
              {menuItems.map((item, i) => (
                <motion.a
                  key={item.link}
                  href={item.link}
                  onClick={() => setOpen(false)}
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: i * 0.05 }}
                  className="text-base font-medium text-foreground/70 hover:text-primary py-3 px-4 rounded-xl hover:bg-primary/5 transition-all"
                >
                  {item.label}
                </motion.a>
              ))}
              <a
                href="https://wa.me/554234364173"
                target="_blank"
                rel="noopener noreferrer"
                className="h-14 px-8 rounded-full gradient-accent text-accent-foreground font-semibold inline-flex items-center justify-center gap-2 mt-4 shadow-glow-accent"
              >
                <MessageCircle size={20} strokeWidth={1.5} />
                Falar no WhatsApp
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Header;

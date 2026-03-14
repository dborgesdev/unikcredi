import { MessageCircle } from "lucide-react";

const WhatsAppFloat = () => {
  return (
    <a
      href="https://wa.me/554234364173"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 w-16 h-16 rounded-full gradient-accent text-accent-foreground flex items-center justify-center shadow-glow-accent animate-pulse-gentle hover:scale-110 active:scale-95 transition-transform"
      aria-label="Falar no WhatsApp"
    >
      <MessageCircle size={30} strokeWidth={1.5} />
    </a>
  );
};

export default WhatsAppFloat;

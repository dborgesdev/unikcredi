import { MessageCircle } from "lucide-react";

const WhatsAppFloat = () => {
  return (
    <a
      href="https://wa.me/554234364173"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-8 right-8 z-50 w-14 h-14 rounded-full bg-accent text-accent-foreground flex items-center justify-center shadow-lg hover:scale-110 active:scale-95 transition-all"
      aria-label="WhatsApp"
    >
      <MessageCircle size={28} strokeWidth={1.5} className="animate-pulse-gentle" />
    </a>
  );
};

export default WhatsAppFloat;

import { MessageCircle, Phone } from "lucide-react";
import { telLink, waLink } from "@/lib/clinic";

export const FloatingButtons = () => {
  return (
    <div className="fixed bottom-5 right-5 z-40 flex flex-col gap-3">
      <a
        href={waLink()}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="h-14 w-14 rounded-full bg-[#25D366] text-white shadow-medium hover:scale-110 transition-smooth flex items-center justify-center animate-float"
      >
        <MessageCircle className="h-6 w-6" />
      </a>
      <a
        href={telLink}
        aria-label="Call clinic"
        className="h-14 w-14 rounded-full bg-primary-gradient text-primary-foreground shadow-medium hover:scale-110 transition-smooth flex items-center justify-center"
      >
        <Phone className="h-6 w-6" />
      </a>
    </div>
  );
};

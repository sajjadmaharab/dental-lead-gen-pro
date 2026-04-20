import { Link } from "react-router-dom";
import { Facebook, MapPin, Phone, Clock, Mail } from "lucide-react";
import logo from "@/assets/logo.png";
import { CLINIC, telLink, waLink } from "@/lib/clinic";
import { SERVICES } from "@/data/services";

export const Footer = () => {
  return (
    <footer className="bg-foreground text-background/85 mt-20">
      <div className="container-page py-14 grid gap-10 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <div className="flex items-center gap-3 mb-4">
            <img src={logo} alt="Motiur's Dental logo" className="h-12 w-12 object-contain" width={48} height={48} />
            <div>
              <div className="font-display font-bold text-lg text-background">Motiur's Dental</div>
              <div className="text-xs text-background/60">Debidwar • Comilla</div>
            </div>
          </div>
          <p className="text-sm text-background/70 leading-relaxed">
            Trusted dental clinic in Debidwar offering modern, affordable care
            for the whole family.
          </p>
          <a href={CLINIC.facebook} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 mt-4 text-sm text-background/80 hover:text-background">
            <Facebook className="h-4 w-4" /> Facebook
          </a>
        </div>

        <div>
          <h3 className="font-display font-semibold text-background mb-4 text-base">Quick Links</h3>
          <ul className="space-y-2.5 text-sm">
            {[
              ["Home", "/"],
              ["Services", "/services"],
              ["Before & After", "/before-after"],
              ["About", "/about"],
              ["Blog", "/blog"],
              ["Contact", "/contact"],
            ].map(([n, p]) => (
              <li key={p}><Link to={p} className="text-background/70 hover:text-background transition-smooth">{n}</Link></li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-display font-semibold text-background mb-4 text-base">Top Services</h3>
          <ul className="space-y-2.5 text-sm">
            {SERVICES.slice(0, 6).map((s) => (
              <li key={s.slug}>
                <Link to={`/services/${s.slug}`} className="text-background/70 hover:text-background transition-smooth">
                  {s.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-display font-semibold text-background mb-4 text-base">Contact</h3>
          <ul className="space-y-3 text-sm text-background/75">
            <li className="flex gap-2.5"><MapPin className="h-4 w-4 mt-0.5 text-secondary shrink-0" /><a href={CLINIC.mapUrl} target="_blank" rel="noopener noreferrer" className="hover:text-background">{CLINIC.address}</a></li>
            <li className="flex gap-2.5"><Phone className="h-4 w-4 mt-0.5 text-secondary shrink-0" /><a href={telLink} className="hover:text-background">{CLINIC.phone}</a></li>
            <li className="flex gap-2.5"><Mail className="h-4 w-4 mt-0.5 text-secondary shrink-0" /><a href={waLink()} target="_blank" rel="noopener noreferrer" className="hover:text-background">WhatsApp</a></li>
            <li className="flex gap-2.5"><Clock className="h-4 w-4 mt-0.5 text-secondary shrink-0" /><span>{CLINIC.hours}</span></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-background/10">
        <div className="container-page py-5 text-xs text-background/60 flex flex-col md:flex-row gap-2 justify-between items-center">
          <span>© {new Date().getFullYear()} Motiur's Dental. All rights reserved.</span>
          <span>Best Dental Clinic in Debidwar, Comilla</span>
        </div>
      </div>
    </footer>
  );
};

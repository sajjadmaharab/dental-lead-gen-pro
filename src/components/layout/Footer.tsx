import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { Facebook, MapPin, Phone, Clock, ChevronUp } from "lucide-react";
import logo from "@/assets/logo.png";
import brandText from "@/assets/motiurs-dental-text.png";
import { CLINIC, telLink, waLink } from "@/lib/clinic";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { SERVICES } from "@/data/services";

const ServicesDropup = () => {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  return (
    <div ref={ref} className="relative">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="text-white/75 hover:text-white transition-smooth text-left inline-flex items-center gap-1"
      >
        Services
        <ChevronUp className={`h-3 w-3 transition-transform ${open ? "rotate-180" : ""}`} />
      </button>
      {open && (
        <div className="absolute bottom-full left-0 mb-2 w-56 rounded-lg bg-gray-100 border border-gray-200 shadow-xl py-2 z-50 max-h-64 overflow-y-auto">
          {SERVICES.map((s) => (
            <Link
              key={s.slug}
              to={`/services/${s.slug}`}
              onClick={() => setOpen(false)}
              className="block px-4 py-2 text-sm text-gray-700 hover:text-gray-900 hover:bg-gray-200/60 transition-smooth"
            >
              {s.name}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export const Footer = () => {
  return (
    <footer className="relative mt-0 bg-[#0b3550] text-white/85">
      <div className="container-page py-14 grid gap-10 md:grid-cols-2 lg:grid-cols-5">
        <div className="lg:col-span-1">
          <div className="flex items-center gap-3 mb-4">
            <img src={logo} alt="Motiur's Dental logo" className="h-14 w-14 object-contain" width={56} height={56} />
            <img src={brandText} alt="Motiur's Dental" className="h-8 w-auto object-contain" />
          </div>
          <a href={CLINIC.facebook} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 mt-2 px-3 py-1.5 bg-[#1877F2] rounded-md text-sm text-white hover:opacity-90">
            <Facebook className="h-4 w-4" /> Facebook
          </a>
        </div>

        <div>
          <h3 className="font-display font-bold text-white mb-4 text-base tracking-wider">VISIT US</h3>
          <ul className="space-y-2.5 text-sm text-white/75">
            <li className="flex gap-2"><MapPin className="h-4 w-4 mt-0.5 text-cta shrink-0" /><a href={CLINIC.mapUrl} target="_blank" rel="noopener noreferrer" className="hover:text-white">{CLINIC.address}</a></li>
            <li className="flex gap-2"><Phone className="h-4 w-4 mt-0.5 text-cta shrink-0" /><a href={telLink} className="hover:text-white">{CLINIC.phone}</a></li>
          </ul>
        </div>

        <div>
          <h3 className="font-display font-bold text-white mb-4 text-base tracking-wider">WORKING HOURS</h3>
          <ul className="space-y-2.5 text-sm text-white/75">
            <li className="flex gap-2"><Clock className="h-4 w-4 mt-0.5 text-cta shrink-0" /><div>Saturday – Thursday<br /><span className="text-white/60">10:00 AM – 7:00 PM</span></div></li>
            <li className="text-white/60 pl-6">Friday — Closed</li>
          </ul>
        </div>

        <div>
          <h3 className="font-display font-bold text-white mb-4 text-base tracking-wider">QUICK LINKS</h3>
          <ul className="space-y-2 text-sm">
            {[
              ["Home", "/"],
              ["Services", "__services__"],
              ["Before & After", "/before-after"],
              ["About Us", "/about"],
              ["Contact Us", "/contact"],
              ["Blog", "/blog"],
            ].map(([n, p]) => (
              <li key={n} className={p === "__services__" ? "relative" : ""}>
                {p === "__services__" ? (
                  <ServicesDropup />
                ) : (
                  <Link to={p} className="text-white/75 hover:text-white transition-smooth">{n}</Link>
                )}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-display font-bold text-white mb-4 text-base tracking-wider">GET IN TOUCH</h3>
          <p className="text-sm text-white/70">Have a question? Send us a message on WhatsApp and we'll respond quickly.</p>
          <a href={waLink()} target="_blank" rel="noopener noreferrer" className="block mt-3">
            <Button variant="cta" className="w-full rounded-full">WhatsApp Us</Button>
          </a>
          <form className="mt-4 flex gap-2" onSubmit={(e) => e.preventDefault()}>
            <Input type="email" placeholder="Your Email" className="bg-white/10 border-white/20 text-white placeholder:text-white/50" />
            <Button type="submit" variant="cta" className="rounded-md">Subscribe</Button>
          </form>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="container-page py-5 text-xs text-white/55 text-center">
          © {new Date().getFullYear()} Motiur's Dental. All rights reserved. Best Dental Clinic in Debidwar, Comilla.
        </div>
      </div>
    </footer>
  );
};

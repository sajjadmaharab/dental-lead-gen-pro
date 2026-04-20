import { Link } from "react-router-dom";
import { Facebook, MapPin, Phone, Clock } from "lucide-react";
import logo from "@/assets/logo.png";
import { CLINIC, telLink, waLink } from "@/lib/clinic";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export const Footer = () => {
  return (
    <footer className="relative mt-0 bg-[#0b3550] text-white/85">
      <div className="container-page py-14 grid gap-10 md:grid-cols-2 lg:grid-cols-5">
        <div className="lg:col-span-1">
          <div className="flex items-center gap-3 mb-4">
            <img src={logo} alt="Motiur's Dental logo" className="h-12 w-12 object-contain" width={48} height={48} />
            <div>
              <div className="font-display font-extrabold text-lg text-white">Motiur's Dental</div>
              <div className="text-xs text-white/60">Debidwar • Comilla</div>
            </div>
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
              ["Services", "/services"],
              ["Before & After", "/before-after"],
              ["About Us", "/about"],
              ["Contact Us", "/contact"],
              ["Blog", "/blog"],
            ].map(([n, p]) => (
              <li key={p}><Link to={p} className="text-white/75 hover:text-white transition-smooth">{n}</Link></li>
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

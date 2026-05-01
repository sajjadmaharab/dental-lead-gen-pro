import { useEffect, useState, useRef } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { ChevronDown, Menu, Phone, X } from "lucide-react";
import logo from "@/assets/logo.png";
import { CLINIC, telLink } from "@/lib/clinic";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { SERVICES } from "@/data/services";
import { openServiceDialog } from "@/components/ServicesDialog";

const links = [
  { to: "/", label: "Home" },
  { to: "__services__", label: "Services" },
  { to: "/before-after", label: "Before & After" },
  { to: "/about", label: "About Us" },
  { to: "/contact", label: "Contact Us" },
  { to: "/blog", label: "Blog" },
];

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const servicesRef = useRef<HTMLDivElement>(null);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => { setOpen(false); setServicesOpen(false); setMobileServicesOpen(false); }, [location.pathname]);

  // Close dropdown on outside click
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (servicesRef.current && !servicesRef.current.contains(e.target as Node)) {
        setServicesOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full transition-smooth",
        scrolled ? "bg-white/90 backdrop-blur-lg shadow-soft" : "bg-white/70 backdrop-blur"
      )}
    >
      <div className="container-page flex h-16 md:h-20 items-center justify-between gap-4">
        <Link to="/" className="flex items-center gap-2.5 shrink-0" aria-label={CLINIC.name}>
          <img src={logo} alt={`${CLINIC.name} logo`} className="h-10 w-10 md:h-12 md:w-12 object-contain" width={48} height={48} />
          <div className="leading-tight">
            <div className="font-display font-extrabold text-base md:text-lg text-primary">Motiur's Dental</div>
            <div className="text-[10px] md:text-xs text-muted-foreground -mt-0.5">Debidwar • Comilla</div>
          </div>
        </Link>

        <nav className="hidden lg:flex items-center gap-1">
          {links.map((l) =>
            l.to === "__services__" ? (
              <div key={l.label} className="relative" ref={servicesRef}>
                <button
                  type="button"
                  onClick={() => setServicesOpen((v) => !v)}
                  onMouseEnter={() => setServicesOpen(true)}
                  className={cn(
                    "px-3.5 py-2 text-sm font-semibold transition-smooth inline-flex items-center gap-1",
                    servicesOpen ? "text-pink" : "text-primary hover:text-pink"
                  )}
                >
                  {l.label}
                  <ChevronDown className={cn("h-3.5 w-3.5 transition-transform", servicesOpen && "rotate-180")} />
                </button>
                {servicesOpen && (
                  <div
                    className="absolute top-full left-0 mt-1 w-80 bg-white rounded-lg shadow-xl border border-border/60 py-2 z-50"
                    onMouseLeave={() => setServicesOpen(false)}
                  >
                    {SERVICES.map((s) => (
                      <Link
                        key={s.slug}
                        to={`/services/${s.slug}`}
                        onClick={() => setServicesOpen(false)}
                        className="block px-5 py-2.5 text-sm text-foreground hover:bg-primary-soft hover:text-primary transition-smooth"
                      >
                        {s.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <NavLink
                key={l.to}
                to={l.to}
                end={l.to === "/"}
                className={({ isActive }) =>
                  cn(
                    "px-3.5 py-2 text-sm font-semibold transition-smooth relative",
                    isActive ? "text-pink" : "text-primary hover:text-pink"
                  )
                }
              >
                {l.label}
              </NavLink>
            )
          )}
        </nav>

        <div className="flex items-center gap-2">
          <a href={telLink} className="hidden sm:inline-flex">
            <Button variant="cta" size="sm" className="gap-2 rounded-full h-10 px-5">
              <Phone className="h-4 w-4" /> Call Now
            </Button>
          </a>
          <button
            className="lg:hidden p-2 rounded-md text-primary"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="lg:hidden border-t border-border/60 bg-white/95 backdrop-blur">
          <nav className="container-page py-3 flex flex-col">
            {links.map((l) =>
              l.to === "__services__" ? (
                <div key={l.label}>
                  <button
                    type="button"
                    onClick={() => setMobileServicesOpen((v) => !v)}
                    className="w-full px-3 py-3 rounded-lg text-base font-semibold text-primary text-left flex items-center justify-between"
                  >
                    {l.label}
                    <ChevronDown className={cn("h-4 w-4 transition-transform", mobileServicesOpen && "rotate-180")} />
                  </button>
                  {mobileServicesOpen && (
                    <div className="pl-6 pb-2 space-y-0.5">
                      {SERVICES.map((s) => (
                        <Link
                          key={s.slug}
                          to={`/services/${s.slug}`}
                          onClick={() => { setOpen(false); setMobileServicesOpen(false); }}
                          className="block px-3 py-2 text-sm text-foreground/80 hover:text-primary rounded-md"
                        >
                          {s.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <NavLink
                  key={l.to}
                  to={l.to}
                  end={l.to === "/"}
                  className={({ isActive }) =>
                    cn("px-3 py-3 rounded-lg text-base font-semibold", isActive ? "text-pink bg-primary-soft" : "text-primary")
                  }
                >
                  {l.label}
                </NavLink>
              )
            )}
            <a href={telLink} className="mt-2">
              <Button variant="cta" className="w-full gap-2 rounded-full">
                <Phone className="h-4 w-4" /> Call {CLINIC.phone}
              </Button>
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

import { Link } from "react-router-dom";
import { ArrowRight, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SEO } from "@/components/SEO";
import { SERVICES } from "@/data/services";
import { telLink } from "@/lib/clinic";

const Services = () => (
  <>
    <SEO
      title="Dental Services in Debidwar & Comilla | Motiur's Dental"
      description="Full range of dental services in Debidwar: implants, root canal, braces, whitening, fillings, extractions and more. Best dentist near Comilla."
      path="/services"
    />
    <section className="bg-hero-gradient py-14 md:py-20">
      <div className="container-page text-center max-w-3xl mx-auto">
        <span className="text-sm font-semibold text-primary">Our Services</span>
        <h1 className="mt-2 text-4xl md:text-5xl font-display font-extrabold">Complete Dental Care in Debidwar</h1>
        <p className="mt-4 text-muted-foreground text-lg">From routine cleaning to advanced implants — everything your smile needs, under one roof.</p>
      </div>
    </section>
    <section className="section-pad">
      <div className="container-page grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {SERVICES.map((s) => (
          <Link key={s.slug} to={`/services/${s.slug}`} className="group bg-card border border-border/60 rounded-2xl p-6 hover:shadow-medium hover:-translate-y-1 hover:border-primary/30 transition-smooth">
            <div className="text-4xl mb-4">{s.icon}</div>
            <h2 className="font-display font-bold text-lg group-hover:text-primary transition-smooth">{s.name}</h2>
            <p className="text-sm text-muted-foreground mt-2">{s.short}</p>
            <div className="mt-4 inline-flex items-center text-sm font-semibold text-primary">
              Learn more <ArrowRight className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-smooth" />
            </div>
          </Link>
        ))}
      </div>
      <div className="container-page mt-12 text-center">
        <a href={telLink}><Button variant="hero" size="lg" className="gap-2"><Phone className="h-5 w-5" />Call to Book — 01816010194</Button></a>
      </div>
    </section>
  </>
);

export default Services;

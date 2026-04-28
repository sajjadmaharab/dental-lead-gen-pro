import { useParams, Link, Navigate } from "react-router-dom";
import { Phone, MessageCircle, Check, ChevronLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { SEO } from "@/components/SEO";
import { SERVICES } from "@/data/services";
import { CLINIC, telLink, waLink } from "@/lib/clinic";

const ServiceDetail = () => {
  const { slug } = useParams();
  const service = SERVICES.find((s) => s.slug === slug);
  if (!service) return <Navigate to="/" replace />;

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: service.faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  return (
    <>
      <SEO
        title={`${service.name} in Debidwar, Comilla | Motiur's Dental`}
        description={`${service.short} Affordable ${service.name.toLowerCase()} at Motiur's Dental, Debidwar. Trusted dentist serving Comilla. Call ${CLINIC.phone}.`}
        path={`/services/${service.slug}`}
        schema={faqSchema}
      />
      <section className="bg-hero-gradient py-12 md:py-16">
        <div className="container-page">
          <Link to="/" className="inline-flex items-center text-sm text-muted-foreground hover:text-primary mb-4">
            <ChevronLeft className="h-4 w-4" /> All Services
          </Link>
          <div className="flex items-start gap-4">
            <div className="text-5xl md:text-6xl">{service.icon}</div>
            <div>
              <h1 className="text-3xl md:text-5xl font-display font-extrabold leading-tight">{service.hero}</h1>
              <p className="mt-3 text-muted-foreground text-lg max-w-2xl">{service.short}</p>
            </div>
          </div>
          <div className="mt-6 flex flex-wrap gap-3">
            <a href={telLink}><Button variant="hero" size="lg" className="gap-2"><Phone className="h-5 w-5" />Call Now</Button></a>
            <a href={waLink(`Hi, I would like to know more about ${service.name} at Motiur's Dental.`)} target="_blank" rel="noopener noreferrer">
              <Button variant="whatsapp" size="lg" className="gap-2"><MessageCircle className="h-5 w-5" />WhatsApp</Button>
            </a>
          </div>
        </div>
      </section>

      <section className="section-pad">
        <div className="container-page grid lg:grid-cols-3 gap-10">
          <div className="lg:col-span-2 space-y-12">
            <div>
              <h2 className="font-display text-2xl md:text-3xl font-bold">About this treatment</h2>
              <p className="mt-3 text-muted-foreground leading-relaxed">{service.description}</p>
            </div>

            <div>
              <h2 className="font-display text-2xl md:text-3xl font-bold">Benefits</h2>
              <ul className="mt-4 grid sm:grid-cols-2 gap-3">
                {service.benefits.map((b) => (
                  <li key={b} className="flex gap-2.5 items-start bg-card border border-border/60 rounded-xl p-4">
                    <Check className="h-5 w-5 text-secondary shrink-0 mt-0.5" />
                    <span className="text-sm">{b}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="font-display text-2xl md:text-3xl font-bold">How the procedure works</h2>
              <ol className="mt-4 space-y-3">
                {service.steps.map((s, i) => (
                  <li key={s} className="flex gap-4 bg-card border border-border/60 rounded-xl p-4">
                    <div className="h-9 w-9 rounded-full bg-primary-gradient text-primary-foreground font-bold flex items-center justify-center shrink-0">{i + 1}</div>
                    <div className="text-sm pt-1.5">{s}</div>
                  </li>
                ))}
              </ol>
            </div>

            <div>
              <h2 className="font-display text-2xl md:text-3xl font-bold">Frequently Asked Questions</h2>
              <Accordion type="single" collapsible className="mt-4">
                {service.faqs.map((f, i) => (
                  <AccordionItem key={i} value={`item-${i}`}>
                    <AccordionTrigger className="text-left text-base">{f.q}</AccordionTrigger>
                    <AccordionContent className="text-muted-foreground">{f.a}</AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>

          <aside className="lg:col-span-1">
            <div className="bg-primary-gradient text-primary-foreground rounded-2xl p-6 sticky top-24 shadow-medium">
              <h3 className="font-display font-bold text-xl">Book {service.name}</h3>
              <p className="text-sm text-primary-foreground/90 mt-2">Call us or send a WhatsApp message for a quick appointment.</p>
              <div className="mt-5 space-y-3">
                <a href={telLink} className="block"><Button variant="secondary" className="w-full gap-2 bg-card text-primary hover:bg-card/90"><Phone className="h-4 w-4" />{CLINIC.phone}</Button></a>
                <a href={waLink(`Hi, I'd like to book ${service.name}.`)} target="_blank" rel="noopener noreferrer" className="block">
                  <Button variant="whatsapp" className="w-full gap-2"><MessageCircle className="h-4 w-4" />WhatsApp Booking</Button>
                </a>
              </div>
              <div className="mt-5 text-xs text-primary-foreground/85 border-t border-primary-foreground/20 pt-4">
                <div className="font-semibold mb-1">Visiting Hours</div>
                <div>Sat–Thu: 10:00 AM – 7:00 PM</div>
                <div>Friday: Closed</div>
              </div>
            </div>

            <div className="mt-6 bg-card border border-border/60 rounded-2xl p-5">
              <h4 className="font-display font-semibold mb-3">Other Services</h4>
              <ul className="space-y-2 text-sm">
                {SERVICES.filter((s) => s.slug !== service.slug).slice(0, 6).map((s) => (
                  <li key={s.slug}>
                    <Link to={`/services/${s.slug}`} className="text-foreground/80 hover:text-primary inline-flex items-center gap-2">
                      <span>{s.icon}</span> {s.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
};

export default ServiceDetail;

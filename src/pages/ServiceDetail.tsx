import { useParams, Link, Navigate } from "react-router-dom";
import { Phone, MessageCircle, ChevronLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SEO } from "@/components/SEO";
import { SERVICES } from "@/data/services";
import { CLINIC, telLink, waLink } from "@/lib/clinic";

const ServiceDetail = () => {
  const { slug } = useParams();
  const service = SERVICES.find((s) => s.slug === slug);
  if (!service) return <Navigate to="/" replace />;

  return (
    <>
      <SEO
        title={`${service.name} in Debidwar, Comilla | Motiur's Dental`}
        description={`${service.short} Affordable ${service.name.toLowerCase()} at Motiur's Dental, Debidwar. Trusted dentist serving Comilla. Call ${CLINIC.phone}.`}
        path={`/services/${service.slug}`}
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

      {/* Article content will be added per service */}
      <section className="section-pad">
        <div className="container-page max-w-4xl mx-auto">
          {/* Custom article text, H1, images will go here */}
        </div>
      </section>
    </>
  );
};

export default ServiceDetail;

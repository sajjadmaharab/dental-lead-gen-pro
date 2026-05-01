import { useParams, Link, Navigate } from "react-router-dom";
import { Phone, MessageCircle, ChevronLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SEO } from "@/components/SEO";
import { SERVICES } from "@/data/services";
import { CLINIC, telLink, waLink } from "@/lib/clinic";
import CosmeticFillingArticle from "@/components/articles/CosmeticFillingArticle";

const CUSTOM_SEO: Record<string, { title: string; description: string }> = {
  "cosmetic-filling": {
    title: "Cosmetic Teeth Filling in Debidwar Comilla | Affordable Dental Filling | Motiur's Dental",
    description: "Looking for affordable cosmetic teeth filling in Debidwar, Comilla? Motiur's Dental offers high-quality composite, amalgam and porcelain fillings at the lowest cost in the area. Call 01816010194.",
  },
};

const CUSTOM_SCHEMA: Record<string, object> = {
  "cosmetic-filling": {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      { "@type": "Question", name: "Is dental filling painful?", acceptedAnswer: { "@type": "Answer", text: "No. We use local anesthesia so you feel little to no discomfort during the procedure." } },
      { "@type": "Question", name: "How long do front teeth fillings last?", acceptedAnswer: { "@type": "Answer", text: "With good oral hygiene and regular checkups, composite fillings on front teeth typically last 5 to 10 years." } },
      { "@type": "Question", name: "What is the cheapest filling option?", acceptedAnswer: { "@type": "Answer", text: "Amalgam fillings are generally the most affordable. However, most patients prefer composite fillings for their natural appearance." } },
      { "@type": "Question", name: "Can I fill the gap between my teeth?", acceptedAnswer: { "@type": "Answer", text: "Yes, in many cases a cosmetic filling is a great option for closing small gaps between front teeth." } },
    ],
  },
};

const ARTICLE_MAP: Record<string, React.ComponentType> = {
  "cosmetic-filling": CosmeticFillingArticle,
};

const ServiceDetail = () => {
  const { slug } = useParams();
  const service = SERVICES.find((s) => s.slug === slug);
  if (!service) return <Navigate to="/" replace />;

  const customSeo = CUSTOM_SEO[service.slug];
  const customSchema = CUSTOM_SCHEMA[service.slug];
  const ArticleComponent = ARTICLE_MAP[service.slug];

  return (
    <>
      <SEO
        title={customSeo?.title ?? `${service.name} in Debidwar, Comilla | Motiur's Dental`}
        description={customSeo?.description ?? `${service.short} Affordable ${service.name.toLowerCase()} at Motiur's Dental, Debidwar. Trusted dentist serving Comilla. Call ${CLINIC.phone}.`}
        path={`/services/${service.slug}`}
        schema={customSchema}
      />

      <section className="section-pad">
        <div className="container-page max-w-4xl mx-auto">
          {ArticleComponent ? <ArticleComponent /> : null}
        </div>
      </section>
    </>
  );
};

export default ServiceDetail;

import { useParams, Link, Navigate } from "react-router-dom";
import { Phone, MessageCircle, ChevronLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SEO } from "@/components/SEO";
import { SERVICES } from "@/data/services";
import { CLINIC, telLink, waLink } from "@/lib/clinic";
import CosmeticFillingArticle from "@/components/articles/CosmeticFillingArticle";
import DentalImplantsArticle from "@/components/articles/DentalImplantsArticle";
import ToothGapArticle from "@/components/articles/ToothGapArticle";

const CUSTOM_SEO: Record<string, { title: string; description: string }> = {
  "cosmetic-filling": {
    title: "Cosmetic Teeth Filling in Debidwar Comilla | Affordable Dental Filling | Motiur's Dental",
    description: "Looking for affordable cosmetic teeth filling in Debidwar, Comilla? Motiur's Dental offers high-quality composite, amalgam and porcelain fillings at the lowest cost in the area. Call 01816010194.",
  },
  "dental-implants": {
    title: "Dental Implants in Debidwar Comilla | Affordable Implant Treatment | Motiur's Dental",
    description: "Looking for affordable dental implants in Debidwar, Comilla? Motiur's Dental offers permanent, natural-looking implant treatment at the lowest cost in the area. Call 01816010194 to book your consultation today.",
  },
  "tooth-gap-treatment": {
    title: "Tooth Gap Treatment in Debidwar Comilla | Fix Gaps Between Teeth | Motiur's Dental",
    description: "Looking for affordable tooth gap treatment in Debidwar, Comilla? Motiur's Dental offers dental bonding, veneers, and clear aligners to close gaps between teeth at the lowest cost in Comilla district. Call 01816010194.",
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
  "dental-implants": {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      { "@type": "Question", name: "Is the dental implant procedure painful?", acceptedAnswer: { "@type": "Answer", text: "The procedure is done under local anesthesia so you will not feel pain during the surgery. Some soreness and swelling afterward is normal and manageable with over-the-counter pain relief." } },
      { "@type": "Question", name: "How long does a dental implant last?", acceptedAnswer: { "@type": "Answer", text: "The implant itself is designed to last a lifetime. The crown on top typically lasts 10 to 15 years before it may need replacing." } },
      { "@type": "Question", name: "What is the dental implant cost in Comilla?", acceptedAnswer: { "@type": "Answer", text: "The cost varies depending on your specific situation. At Motiur's Dental, we offer the most affordable implant pricing in the Debidwar and Comilla area. Call 01816010194 for a consultation." } },
      { "@type": "Question", name: "Is a bone graft always necessary?", acceptedAnswer: { "@type": "Answer", text: "No. Most patients do not need one. A bone graft is only required if your jawbone has lost density." } },
      { "@type": "Question", name: "Can I get implants for all my teeth?", acceptedAnswer: { "@type": "Answer", text: "Yes. Implant-supported full bridges or full dentures are an option for patients who have lost all or most of their teeth." } },
    ],
  },
  "tooth-gap-treatment": {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      { "@type": "Question", name: "Can gaps between teeth be fixed permanently?", acceptedAnswer: { "@type": "Answer", text: "Yes. Dental bonding and porcelain veneers both offer long-lasting results. Veneers can last 10 to 15 years or more. Aligners and braces move teeth permanently with retainer maintenance." } },
      { "@type": "Question", name: "Is tooth gap treatment painful?", acceptedAnswer: { "@type": "Answer", text: "Most treatments are comfortable and require little or no anesthesia. Bonding and contouring involve no injections at all." } },
      { "@type": "Question", name: "What is the cheapest way to fix a gap between teeth?", acceptedAnswer: { "@type": "Answer", text: "Dental bonding is the most affordable option for small to moderate gaps. At Motiur's Dental, our bonding prices are among the lowest in the Comilla area." } },
      { "@type": "Question", name: "What is diastema?", acceptedAnswer: { "@type": "Answer", text: "Diastema is the medical term for a gap between teeth. It is a common condition and can occur between any two teeth, though it is most noticeable between the upper front teeth." } },
      { "@type": "Question", name: "Can I get tooth gap treatment in Debidwar?", acceptedAnswer: { "@type": "Answer", text: "Yes. Motiur's Dental in Debidwar offers the full range of tooth gap treatments including bonding, veneers, and clear aligners." } },
    ],
  },
};

const ARTICLE_MAP: Record<string, React.ComponentType> = {
  "cosmetic-filling": CosmeticFillingArticle,
  "dental-implants": DentalImplantsArticle,
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

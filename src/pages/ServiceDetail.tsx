import { useParams, Link, Navigate } from "react-router-dom";
import { Phone, MessageCircle, ChevronLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SEO } from "@/components/SEO";
import { SERVICES } from "@/data/services";
import { CLINIC, telLink, waLink } from "@/lib/clinic";
import CosmeticFillingArticle from "@/components/articles/CosmeticFillingArticle";
import DentalImplantsArticle from "@/components/articles/DentalImplantsArticle";
import ToothGapArticle from "@/components/articles/ToothGapArticle";
import ScalingWhiteningArticle from "@/components/articles/ScalingWhiteningArticle";
import RootCanalArticle from "@/components/articles/RootCanalArticle";
import WisdomTeethArticle from "@/components/articles/WisdomTeethArticle";
import MinorOralSurgeryArticle from "@/components/articles/MinorOralSurgeryArticle";
import BracesArticle from "@/components/articles/BracesArticle";

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
  "scaling-polishing-whitening": {
    title: "Scaling Polishing and Teeth Whitening in Debidwar Comilla | Motiur's Dental",
    description: "Professional teeth scaling, polishing, and whitening in Debidwar, Comilla at the most affordable prices in the area. Motiur's Dental removes tartar, freshens breath, and brightens your smile. Call 01816010194.",
  },
  "root-canal-treatment": {
    title: "Root Canal Treatment in Debidwar Comilla | Affordable Endodontic Treatment | Motiur's Dental",
    description: "Suffering from tooth pain or infection in Debidwar, Comilla? Motiur's Dental offers professional root canal treatment at the most affordable prices in Comilla district. Save your natural tooth. Call 01816010194.",
  },
  "wisdom-teeth-treatment": {
    title: "Wisdom Teeth Treatment in Debidwar Comilla | Wisdom Tooth Removal | Motiur's Dental",
    description: "Suffering from wisdom tooth pain or infection in Debidwar, Comilla? Motiur's Dental offers professional wisdom tooth removal and treatment at the most affordable prices in Comilla district. Call 01816010194 today.",
  },
  "minor-oral-surgery": {
    title: "Minor Oral Surgery in Debidwar Comilla | Expert Oral Surgery | Motiur's Dental",
    description: "Need minor oral surgery in Debidwar, Comilla? Motiur's Dental offers wisdom tooth extraction, abscess drainage, biopsies, frenectomy, bone grafting and more at affordable prices. Call 01816010194.",
  },
  "braces-orthodontic": {
    title: "Braces Treatment in Debidwar Comilla | Orthodontic Braces | Motiur's Dental",
    description: "Looking for affordable braces treatment in Debidwar, Comilla? Motiur's Dental offers metal braces, ceramic braces, lingual braces, and clear aligners at the lowest prices in Comilla district. Call 01816010194 today.",
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
  "scaling-polishing-whitening": {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      { "@type": "Question", name: "Is scaling and polishing good for your teeth?", acceptedAnswer: { "@type": "Answer", text: "Yes, absolutely. It is one of the most important preventive dental procedures. It removes tartar that causes gum disease and keeps your teeth and gums healthy." } },
      { "@type": "Question", name: "Does scaling whiten teeth?", acceptedAnswer: { "@type": "Answer", text: "Scaling removes tartar and polishing removes surface stains, making teeth look brighter. For genuine whitening of the enamel, a separate whitening treatment is needed." } },
      { "@type": "Question", name: "Is scaling and polishing painful?", acceptedAnswer: { "@type": "Answer", text: "For most patients it is comfortable. You may feel pressure and vibration, and some sensitivity if gums are inflamed. We can use numbing agents if needed." } },
      { "@type": "Question", name: "Should I do scaling before whitening?", acceptedAnswer: { "@type": "Answer", text: "Yes, always. Scaling and polishing before whitening removes tartar and stains that block the whitening gel from reaching the enamel evenly." } },
      { "@type": "Question", name: "How often should I get professional teeth cleaning?", acceptedAnswer: { "@type": "Answer", text: "Every six months is the standard recommendation. Some patients with heavier buildup may benefit from more frequent visits." } },
      { "@type": "Question", name: "Can scaling damage my teeth?", acceptedAnswer: { "@type": "Answer", text: "No. When performed by a trained dental professional, scaling is completely safe and does not damage tooth enamel or root surfaces." } },
    ],
  },
  "root-canal-treatment": {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      { "@type": "Question", name: "Does root canal treatment hurt?", acceptedAnswer: { "@type": "Answer", text: "No. The procedure is performed under local anesthesia so you will not feel pain during the treatment. What root canal treatment actually does is relieve the pain caused by the infection." } },
      { "@type": "Question", name: "How long does a root canal take?", acceptedAnswer: { "@type": "Answer", text: "A straightforward root canal on a front tooth can be completed in one appointment lasting 60 to 90 minutes. More complex cases involving molar teeth with multiple canals may require two appointments." } },
      { "@type": "Question", name: "Do I always need a crown after a root canal?", acceptedAnswer: { "@type": "Answer", text: "For back teeth, a crown is strongly recommended because they bear the brunt of chewing forces. For front teeth, a crown may still be recommended but the urgency is slightly lower." } },
      { "@type": "Question", name: "How long does a root canal treated tooth last?", acceptedAnswer: { "@type": "Answer", text: "With a proper crown and good oral hygiene, a root canal treated tooth can last a lifetime." } },
      { "@type": "Question", name: "What is the cost of root canal treatment in Comilla?", acceptedAnswer: { "@type": "Answer", text: "Costs vary depending on the tooth and complexity. At Motiur's Dental in Debidwar, we offer some of the most affordable root canal prices in the Comilla district. Call 01816010194 for a specific estimate." } },
      { "@type": "Question", name: "Can root canal treatment fail?", acceptedAnswer: { "@type": "Answer", text: "Root canal treatment has a very high success rate when performed properly. In rare cases, reinfection can occur. A retreatment procedure can often resolve the problem." } },
    ],
  },
  "wisdom-teeth-treatment": {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      { "@type": "Question", name: "At what age do wisdom teeth come in?", acceptedAnswer: { "@type": "Answer", text: "Wisdom teeth typically begin erupting between the ages of 17 and 25. Some people experience eruption earlier or later." } },
      { "@type": "Question", name: "Does everyone need their wisdom teeth removed?", acceptedAnswer: { "@type": "Answer", text: "No. If your wisdom teeth erupt fully, are not causing pain, and can be cleaned properly, removal may not be necessary." } },
      { "@type": "Question", name: "Is wisdom tooth removal painful?", acceptedAnswer: { "@type": "Answer", text: "The procedure itself is not painful because it is done under local anesthesia. Some soreness afterward is normal and is managed with medication." } },
      { "@type": "Question", name: "How long is recovery after wisdom tooth removal?", acceptedAnswer: { "@type": "Answer", text: "Most patients feel significantly better within three to four days. Full healing typically takes two to four weeks." } },
      { "@type": "Question", name: "What is dry socket and how do I avoid it?", acceptedAnswer: { "@type": "Answer", text: "Dry socket occurs when the blood clot in the extraction site is dislodged before healing is complete. Avoid smoking, straws, and forceful spitting in the first few days." } },
      { "@type": "Question", name: "What is the cost of wisdom tooth removal in Comilla?", acceptedAnswer: { "@type": "Answer", text: "Costs depend on the complexity of the case. At Motiur's Dental, we offer the most affordable wisdom tooth removal prices in the Debidwar and Comilla area. Call 01816010194 for a personalized estimate." } },
    ],
  },
};

const ARTICLE_MAP: Record<string, React.ComponentType> = {
  "cosmetic-filling": CosmeticFillingArticle,
  "dental-implants": DentalImplantsArticle,
  "tooth-gap-treatment": ToothGapArticle,
  "scaling-polishing-whitening": ScalingWhiteningArticle,
  "root-canal-treatment": RootCanalArticle,
  "wisdom-teeth-treatment": WisdomTeethArticle,
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

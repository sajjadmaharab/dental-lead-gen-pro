import { Link } from "react-router-dom";
import { Phone, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SEO } from "@/components/SEO";
import { telLink, waLink } from "@/lib/clinic";
import { Reveal } from "@/hooks/useScrollReveal";

import fractured1 from "@/assets/fractured-before-after-1.png";
import fractured2 from "@/assets/fractured-before-after-2.jpg";
import toothGap1 from "@/assets/tooth-gap-ab-1.png";
import toothGap2 from "@/assets/tooth-gap-ab-2.png";
import bracesBefore from "@/assets/braces-before-1.jpg";
import bracesAfter from "@/assets/braces-after-1.jpg";
import rootcanal1 from "@/assets/rootcanal-work1.jpg";
import rootcanal2 from "@/assets/rootcanal-work2.jpg";
import cosmeticFilling from "@/assets/cosmetic-filling-before-after.webp";
import dentalFilling from "@/assets/dental-filling-before-after.webp";
import scalingAb1 from "@/assets/scaling-ab-1.webp";
import scalingAb2 from "@/assets/scaling-ab-2.webp";
import bridgeCap1 from "@/assets/bridge-cap-before-after-1.png";
import bridgeCap2 from "@/assets/bridge-cap-before-after-2.png";
import toothGap3 from "@/assets/tooth-gap-ab-3.png";
import toothGap4 from "@/assets/tooth-gap-ab-4.png";

type CaseStudy = {
  title: string;
  slug: string;
  before: { src: string; label: string; desc: string };
  after: { src: string; label: string; desc: string };
};

const CASE_STUDIES: CaseStudy[] = [
  {
    title: "Case Study 1: From Broken to Beautiful. Restoring a Fractured Tooth",
    slug: "fractured-teeth-treatment",
    before: { src: fractured1, label: "Traumatic Tooth Fracture", desc: "A patient with a fractured front tooth after an accident." },
    after: { src: fractured2, label: "Beautiful Smile Restored", desc: "See the amazing results of our treatment." },
  },
  {
    title: "Case Study 2: Gap Be Gone! Same Day Smile Transformation",
    slug: "tooth-gap-treatment",
    before: { src: toothGap1, label: "Unwanted Gap Between Teeth", desc: "Patient concerned about the space between front teeth." },
    after: { src: toothGap2, label: "Beautiful Smile Restored", desc: "See the amazing results of our treatment." },
  },
  {
    title: "Case Study 3: Orthodontic Braces. Fixing Crooked Smiles",
    slug: "braces-orthodontic",
    before: { src: bracesBefore, label: "Crooked, Misaligned Teeth", desc: "Patient with crowded teeth before braces treatment." },
    after: { src: bracesAfter, label: "Seamless Smile Restoration", desc: "Restored teeth for a confident smile." },
  },
  {
    title: "Case Study 4: Root Canal Therapy Relief",
    slug: "root-canal-treatment",
    before: { src: rootcanal1, label: "Pain and Swelling in Lower Jaw", desc: "Patient experiencing discomfort in lower right side." },
    after: { src: rootcanal2, label: "Pain-Free and Smiling Again", desc: "Successful root canal therapy bringing relief." },
  },
  {
    title: "Case Study 5: Tooth Decay Restored to Naturalness Through Cosmetic Restoration",
    slug: "cosmetic-filling",
    before: { src: dentalFilling, label: "Damaged Smile from Decay", desc: "Decay left teeth looking discolored and broken." },
    after: { src: cosmeticFilling, label: "Natural Beauty Restored", desc: "See how cosmetic dentistry transforms smiles." },
  },
  {
    title: "Case Study 6: Professional Scaling and Whitening",
    slug: "scaling-polishing-whitening",
    before: { src: scalingAb1, label: "Stained and Discolored Teeth", desc: "Years of stains built up on teeth surface." },
    after: { src: scalingAb2, label: "Bright, Fresh Smile", desc: "Professional cleaning reveals natural brightness." },
  },
  {
    title: "Case Study 7: Dental Bridge and Cap Restoration",
    slug: "dental-bridges-caps",
    before: { src: bridgeCap1, label: "Missing Teeth Problem", desc: "Patient with gaps from missing teeth." },
    after: { src: bridgeCap2, label: "Complete Smile with Bridge", desc: "Custom bridge restoring full smile." },
  },
  {
    title: "Case Study 8: Restore Smile with Cosmetic Tooth Gap Fillings",
    slug: "tooth-gap-treatment",
    before: { src: toothGap3, label: "Natural Tooth Gap", desc: "The gap impacted her beautiful smile." },
    after: { src: toothGap4, label: "Result After Gap Restoration", desc: "Caring for your new teeth for long-lasting results." },
  },
];

const ImageCard = ({ src, label, desc }: { src: string; label: string; desc: string }) => (
  <div className="relative rounded-2xl overflow-hidden group aspect-[4/3]">
    <img
      src={src}
      alt={label}
      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
      loading="lazy"
    />
    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
    <div className="absolute bottom-0 left-0 right-0 p-4 md:p-5">
      <h3 className="text-white font-display font-bold text-sm md:text-base lg:text-lg leading-tight uppercase tracking-wide">
        {label}
      </h3>
      <p className="text-white/80 text-xs md:text-sm mt-1 leading-snug">{desc}</p>
    </div>
  </div>
);

const BeforeAfter = () => (
  <>
    <SEO
      title="Before & After Dental Cases in Debidwar | Motiur's Dental"
      description="Real smile transformations from Motiur's Dental in Debidwar. Root canal, implants, whitening, braces and more. Best dentist in Comilla."
      path="/before-after"
    />

    {/* Hero */}
    <section className="bg-hero-gradient py-14 md:py-20">
      <div className="container-page text-center max-w-3xl mx-auto">
        <Reveal direction="bottom">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-display font-extrabold text-foreground leading-tight">
            Life-Changing Results Through Expert Care Is{" "}
            <span className="underline decoration-primary decoration-4 underline-offset-4">Our Commitment</span>
          </h1>
        </Reveal>
        <Reveal direction="bottom" delay={0.08}>
          <p className="mt-4 text-primary font-semibold text-sm md:text-base">
            Here Are Some Examples Of <span className="text-primary font-bold">Motiur's Dental</span> Work
          </p>
          <p className="mt-3 text-muted-foreground text-sm md:text-base max-w-2xl mx-auto leading-relaxed">
            We offer personalized, high-quality dental treatments designed to transform your smile and enhance your overall well-being. Don't just imagine your dream smile, see it come to life!
          </p>
        </Reveal>
      </div>
    </section>

    {/* Case Studies */}
    <section className="section-pad">
      <div className="container-page space-y-14 md:space-y-16">
        {CASE_STUDIES.map((cs, i) => (
          <Reveal key={i} direction={i % 2 === 0 ? "left" : "right"} delay={0.05}>
            <h2 className="font-display font-bold text-base md:text-lg text-foreground uppercase tracking-wide mb-4 border-b border-border pb-2">
              {cs.title}
            </h2>
            <Link to={`/services/${cs.slug}`} className="block">
              <div className="grid grid-cols-2 gap-3 md:gap-5">
                <ImageCard {...cs.before} />
                <ImageCard {...cs.after} />
              </div>
              <p className="text-primary text-xs md:text-sm font-semibold mt-2 hover:underline text-center">
                Click here to learn more about this treatment →
              </p>
            </Link>
          </Reveal>
        ))}
      </div>

      {/* CTA */}
      <div className="container-page mt-14">
        <Reveal direction="bottom">
          <div className="rounded-3xl bg-primary-gradient p-8 md:p-12 text-center text-primary-foreground shadow-medium">
            <h2 className="text-2xl md:text-3xl font-display font-bold">Ready for your transformation?</h2>
            <p className="mt-2 text-primary-foreground/90">Book a consultation today and let's plan your perfect smile.</p>
            <div className="mt-6 flex flex-wrap gap-3 justify-center">
              <a href={telLink}><Button variant="secondary" size="lg" className="gap-2 bg-card text-primary hover:bg-card/90"><Phone className="h-5 w-5" />Call Now</Button></a>
              <a href={waLink()} target="_blank" rel="noopener noreferrer"><Button variant="whatsapp" size="lg" className="gap-2"><MessageCircle className="h-5 w-5" />WhatsApp</Button></a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  </>
);

export default BeforeAfter;

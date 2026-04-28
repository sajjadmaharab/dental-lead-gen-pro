import { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import { ChevronLeft, ChevronRight, Phone, MessageCircle, Star, Check, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SEO } from "@/components/SEO";
import { Wave } from "@/components/Wave";
import { CLINIC, telLink, waLink } from "@/lib/clinic";

import { CASES } from "@/data/cases";
import { DOCTORS } from "@/data/doctors";
import { DoctorModal, type Doctor } from "@/components/DoctorModal";
import { HandwritingCTA } from "@/components/ui/handwriting-cta";
import { StaggerTestimonials } from "@/components/ui/stagger-testimonials";
import drShahSultan from "@/assets/dr-shah-sultan.png";
import ctaKid from "@/assets/cta-kid.jpg";
import iconScaling from "@/assets/services/scaling-polishing-whitening.png";
import iconFilling from "@/assets/services/cosmetic-filling.png";
import iconRootCanal from "@/assets/services/root-canal.png";
import iconCapBridge from "@/assets/services/cap-bridge.png";
import iconSpacing from "@/assets/services/spacing-treatment.png";
import iconReplacement from "@/assets/services/teeth-replacement.png";

const HOME_SERVICES = [
  {
    slug: "scaling-polishing-whitening",
    name: "Scaling, Polishing & Teeth Whitening",
    icon: iconScaling,
    description:
      "Revitalize your smile at Motiur's Dental. Our scaling, polishing, and teeth whitening services guarantee a refreshed, plaque-free smile. Experience professional care for a brighter, confident look.",
  },
  {
    slug: "cosmetic-filling",
    name: "Cosmetic Filling",
    icon: iconFilling,
    description:
      "Transform your smile with Cosmetic Filling at Motiur's Dental. Our expert team crafts seamless, natural-looking fillings to enhance your teeth's appearance — durable and beautiful.",
  },
  {
    slug: "root-canal-treatment",
    name: "Root Canal Treatment",
    icon: iconRootCanal,
    description:
      "Experience relief with Root Canal Treatment at Motiur's Dental. Our skilled team employs advanced techniques to alleviate pain and preserve your natural tooth — comfortable and efficient.",
  },
  {
    slug: "dental-bridges-caps",
    name: "Cap & Bridge",
    icon: iconCapBridge,
    description:
      "Restore your smile with custom-made Caps & Bridges at Motiur's Dental. High-quality porcelain and zirconia work that looks natural, lasts long, and protects damaged teeth.",
  },
  {
    slug: "tooth-gap-treatment",
    name: "Treatment Of Spacing in Between Teeth",
    icon: iconSpacing,
    description:
      "Close unwanted gaps between teeth with painless cosmetic bonding, veneers, or orthodontic options at Motiur's Dental. Boost your confidence with a seamless smile.",
  },
  {
    slug: "teeth-replacement",
    name: "Teeth Replacement",
    icon: iconReplacement,
    description:
      "Missing teeth? Choose from dentures, bridges, or implants at Motiur's Dental. Restore chewing, speech, and confidence with long-lasting, natural-looking replacement options.",
  },
];

const Home = () => {
  const [openDoc, setOpenDoc] = useState<Doctor | null>(null);
  const [caseIdx, setCaseIdx] = useState(0);
  const featuredCases = CASES;
  const c = featuredCases[caseIdx];

  const reviews = [
    { name: "Shahida Akter", date: "1 Month Ago", text: "অনেক দিন ধরেই দাঁতের সমস্যায় ভুগছিলাম। মতিউর'স ডেন্টালে এসে সব সমস্যার সমাধান পেলাম। ডাক্তার ও সকল স্টাফ অত্যন্ত আন্তরিক।" },
    { name: "Md Aryan Hossan", date: "2 Months Ago", text: "Alhamdulillah bare onek valo treatment paisi ekhane. Friendly doctors and very clean environment." },
    { name: "Md Nazrul", date: "3 Months Ago", text: "Best braces treatment centre in Debidwar. Highly recommend Motiur's Dental for any orthodontic work." },
    { name: "Rahima Begum", date: "1 Month Ago", text: "Painless root canal in just 2 visits. Very impressed with the modern equipment and the calm, caring approach." },
  ];

  const staggerItems = useMemo(
    () => reviews.map((r, i) => ({ tempId: i, testimonial: r.text, by: `${r.name}, ${r.date}` })),
    []
  );

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "Dentist",
    name: CLINIC.name,
    "@id": CLINIC.url,
    url: CLINIC.url,
    telephone: CLINIC.phoneTel,
    address: { "@type": "PostalAddress", streetAddress: "Ibn Sina Hospital (Pvt.) Ltd", addressLocality: "Debidwar", addressRegion: "Cumilla", addressCountry: "BD" },
    openingHoursSpecification: [{ "@type": "OpeningHoursSpecification", dayOfWeek: ["Saturday","Sunday","Monday","Tuesday","Wednesday","Thursday"], opens: CLINIC.hoursOpen, closes: CLINIC.hoursClose }],
    sameAs: [CLINIC.facebook],
    areaServed: ["Debidwar", "Comilla", "Cumilla"],
  };

  return (
    <>
      <SEO
        title="Best Dental Clinic in Debidwar, Comilla | Motiur's Dental"
        description="Motiur's Dental in Debidwar (Ibn Sina Hospital) offers expert dental care: implants, root canal, braces, whitening & more. Trusted dentist in Comilla. Call 01816010194."
        path="/"
        schema={localBusinessSchema}
      />

      {/* HERO */}
      <section className="relative bg-sky-gradient overflow-hidden">
        <div className="container-page relative pt-10 pb-20 md:pt-14 md:pb-28 grid lg:grid-cols-2 gap-10 items-center">
          <div className="animate-fade-in-up">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-extrabold leading-[1.05] text-primary">
              Your Brightest<br />Smile With<br />
              <span className="text-pink">Motiur's</span> Dental
            </h1>
            <p className="mt-5 text-base md:text-lg text-primary/80 max-w-xl">
              Experience the artistry of our skilled dentists, harnessing advanced technology to craft radiant smiles that transform lives and instil unwavering confidence.
            </p>
            <div className="mt-7">
              <HandwritingCTA buttonText="Book Your Appointment" />
            </div>
          </div>

          {/* Before/After hero card */}
          <div className="relative max-w-xl mx-auto w-full">
            <div className="relative rounded-2xl overflow-hidden shadow-medium bg-card aspect-[4/3]">
              <img src={c.after} alt={`${c.title} after`} className="absolute inset-0 w-1/2 left-0 h-full object-cover" />
              <img src={c.before} alt={`${c.title} before`} className="absolute inset-0 w-1/2 left-1/2 h-full object-cover" />
              <div className="absolute top-3 left-3 bg-white/90 text-primary px-3 py-1 rounded-full text-xs font-bold">After</div>
              <div className="absolute top-3 right-3 bg-white/90 text-primary px-3 py-1 rounded-full text-xs font-bold">Before</div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="bg-primary/85 backdrop-blur-sm text-white p-5 rounded-xl text-center max-w-xs mx-4">
                  <h3 className="font-display font-bold text-lg">{c.title}</h3>
                  <p className="text-xs text-white/85 mt-1.5">{c.description.slice(0, 90)}…</p>
                  <Link to="/before-after"><Button variant="cta" size="sm" className="mt-3 rounded-md">Click Here</Button></Link>
                </div>
              </div>
              <button onClick={() => setCaseIdx((i) => (i - 1 + featuredCases.length) % featuredCases.length)} className="absolute left-2 top-1/2 -translate-y-1/2 h-9 w-9 rounded-full bg-white/90 text-primary flex items-center justify-center shadow-soft hover:bg-white" aria-label="Previous case">
                <ChevronLeft className="h-5 w-5" />
              </button>
              <button onClick={() => setCaseIdx((i) => (i + 1) % featuredCases.length)} className="absolute right-2 top-1/2 -translate-y-1/2 h-9 w-9 rounded-full bg-white/90 text-primary flex items-center justify-center shadow-soft hover:bg-white" aria-label="Next case">
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
        <Wave className="wave-divider-bottom" fill="white" />
      </section>

      {/* GOOGLE REVIEWS */}
      <section className="py-14 md:py-16 bg-white">
        <div className="container-page text-center">
          <div className="text-xs font-bold tracking-widest text-primary/70">EXCELLENT</div>
          <div className="flex justify-center gap-0.5 mt-1.5 text-amber-400">
            {Array.from({ length: 5 }).map((_, i) => <Star key={i} className="h-5 w-5 fill-current" />)}
          </div>
          <div className="text-sm text-primary/70 mt-1">Based on 281 reviews</div>
          <div className="flex justify-center mt-1">
            <span className="text-base font-bold">
              <span className="text-[#4285F4]">G</span><span className="text-[#EA4335]">o</span><span className="text-[#FBBC05]">o</span><span className="text-[#4285F4]">g</span><span className="text-[#34A853]">l</span><span className="text-[#EA4335]">e</span>
            </span>
          </div>

          <div className="mt-10 max-w-6xl mx-auto">
            <StaggerTestimonials items={staggerItems} />
          </div>
        </div>
      </section>

      {/* DOCTOR FEATURE */}
      <section className="py-14 md:py-20 bg-white">
        <div className="container-page grid lg:grid-cols-2 gap-10 items-center">
          <button onClick={() => setOpenDoc(DOCTORS[0])} className="text-left group">
            <div className="rounded-2xl overflow-hidden bg-sky-soft aspect-[4/5] max-w-md mx-auto shadow-card">
              <img src={drShahSultan} alt={`${DOCTORS[0].name} - ${DOCTORS[0].role}`} className="w-full h-full object-cover object-top group-hover:scale-105 transition-smooth" />
            </div>
            <div className="text-center mt-4 max-w-md mx-auto">
              <h3 className="font-display font-bold text-xl text-primary">{DOCTORS[0].name}</h3>
              <p className="text-sm text-pink font-semibold mt-1">BDS (RU) • Dental Surgeon</p>
              <p className="text-xs text-primary/70 mt-1">Specialist in Smile Designing • Cosmetic Filling • Crowns & Bridges</p>
              <p className="text-xs text-muted-foreground mt-2">Senior Dental Surgeon, Dental Department<br />Ibn Sina Hospital (Pvt.) Ltd, Debidwar, Cumilla</p>
            </div>
          </button>

          <div>
            <h2 className="text-3xl md:text-4xl font-display font-extrabold leading-tight">
              Experience top-tier, personalised <span className="text-pink">dental care at Motiur's Dental</span>
            </h2>
            <p className="mt-4 text-foreground/75">Welcome to Motiur's Dental, where modern technology meets compassionate care for patients of all ages. Our commitment is simple — an honest dentist dedicated to your well-being.</p>
            <ul className="mt-5 space-y-3">
              {[
                "Discover trust at Motiur's Dental — an honest approach to your dental well-being.",
                "Honest care, extended hours and special offers — because your smile deserves the best.",
                "Motiur's Dental, your partner in optimal dental care.",
                "Special offer for our new patient exam and X-Ray.",
              ].map((line) => (
                <li key={line} className="flex gap-2.5 items-start"><Check className="h-5 w-5 text-cta shrink-0 mt-0.5" /><span className="text-sm text-foreground/85">{line}</span></li>
              ))}
            </ul>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href={telLink}><Button variant="cta" size="lg" className="gap-2 rounded-md"><Phone className="h-5 w-5" />Call {CLINIC.phone}</Button></a>
              <a href={waLink()} target="_blank" rel="noopener noreferrer"><Button variant="outline" size="lg" className="gap-2 rounded-md"><MessageCircle className="h-5 w-5" />WhatsApp</Button></a>
            </div>
          </div>
        </div>
      </section>

      {/* OUR TOP SERVICES */}
      <section className="relative bg-sky-gradient pt-20 pb-24">
        <Wave className="wave-divider-top" fill="white" />
        <div className="container-page relative z-10">
          <h2 className="text-center font-display font-extrabold text-2xl md:text-3xl tracking-[0.18em] text-primary">OUR TOP SERVICES</h2>
          <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {HOME_SERVICES.map((s) => {
              const words = s.description.split(" ");
              const preview = words.slice(0, 28).join(" ");
              return (
                <Link
                  key={s.slug}
                  to={`/services/${s.slug}`}
                  className="group relative bg-sky-soft/70 backdrop-blur-sm rounded-2xl p-7 shadow-card hover:shadow-medium hover:-translate-y-1 transition-smooth flex flex-col min-h-[360px] overflow-hidden"
                >
                  <div className="flex justify-center mb-5">
                    <img
                      src={s.icon}
                      alt={`${s.name} icon`}
                      className="h-24 w-24 object-contain drop-shadow-sm"
                      loading="lazy"
                    />
                  </div>
                  <h3 className="font-display font-extrabold text-xl md:text-2xl text-primary leading-tight group-hover:text-pink transition-smooth">
                    {s.name}
                  </h3>
                  <p className="text-sm text-foreground/70 mt-3 leading-relaxed">
                    {preview}
                    {words.length > 28 ? "… " : " "}
                    <span className="text-pink font-semibold whitespace-nowrap">Read More..</span>
                  </p>
                </Link>
              );
            })}
          </div>
          <div className="text-center mt-10">
            <Link to="/services"><Button variant="cta" size="lg" className="rounded-md">View All Services</Button></Link>
          </div>
        </div>
        <Wave className="wave-divider-bottom" fill="white" />
      </section>

      {/* FIND US */}
      <section className="py-14 md:py-20 bg-white">
        <div className="container-page">
          <h2 className="text-center font-display font-extrabold text-2xl md:text-3xl tracking-[0.18em] text-primary">FIND US</h2>
          <div className="mt-8 rounded-2xl overflow-hidden border border-border aspect-[16/7] shadow-card">
            <iframe
              title="Motiur's Dental clinic location"
              src={CLINIC.mapEmbed}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
          <div className="mt-4 flex items-center justify-center gap-2 text-sm text-muted-foreground">
            <MapPin className="h-4 w-4 text-pink" />
            <a href={CLINIC.mapUrl} target="_blank" rel="noopener noreferrer" className="hover:text-primary">{CLINIC.address}</a>
          </div>
        </div>
      </section>

      {/* LET US TAKE CARE OF YOU */}
      <section className="bg-sky-soft-gradient py-14 md:py-20">
        <div className="container-page grid md:grid-cols-2 gap-8 items-center">
          <div>
            <div className="text-xs font-bold tracking-[0.2em] text-primary/70">TREAT YOURSELF</div>
            <h2 className="mt-3 text-4xl sm:text-5xl md:text-6xl font-display font-black leading-[1.02] text-primary">LET US TAKE CARE OF YOU</h2>
            <a href={waLink()} target="_blank" rel="noopener noreferrer" className="inline-block mt-7">
              <Button size="lg" className="bg-primary hover:bg-primary-dark text-white rounded-md gap-2 h-12 px-7">
                <Phone className="h-5 w-5" /> Book Your Appointment
              </Button>
            </a>
          </div>
          <div className="rounded-2xl overflow-hidden aspect-square max-w-md mx-auto shadow-medium">
            <img src={ctaKid} alt="Happy child after a dental visit" className="w-full h-full object-cover" loading="lazy" />
          </div>
        </div>
      </section>

      <DoctorModal doctor={openDoc} open={!!openDoc} onOpenChange={(v) => !v && setOpenDoc(null)} />
    </>
  );
};

export default Home;

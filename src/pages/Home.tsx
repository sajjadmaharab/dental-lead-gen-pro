import { useState, useEffect, useCallback, lazy, Suspense } from "react";
import { Link } from "react-router-dom";
import { ChevronLeft, ChevronRight, Phone, MessageCircle, Star, Check, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SEO } from "@/components/SEO";
import { Wave } from "@/components/Wave";
import { CLINIC, telLink, waLink } from "@/lib/clinic";
import { Reveal } from "@/hooks/useScrollReveal";

import { HandwritingCTA } from "@/components/ui/handwriting-cta";
import { GoogleReviewCarousel } from "@/components/GoogleReviewCarousel";
import type { GoogleReview } from "@/components/GoogleReviewCard";
import { openServiceDialog } from "@/components/ServicesDialog";
import drMotiurAbout from "@/assets/dr-motiur-about.png";
import ctaKid from "@/assets/cta-kid.jpg";
import debidwarBg from "@/assets/debidwar-bg.jpeg";
import iconScaling from "@/assets/services/scaling-polishing-whitening.png";
import iconFilling from "@/assets/services/cosmetic-filling.png";
import iconRootCanal from "@/assets/services/root-canal.png";
import iconCapBridge from "@/assets/services/cap-bridge.png";
import iconSpacing from "@/assets/services/spacing-treatment.png";
import iconReplacement from "@/assets/services/teeth-replacement.png";

/* Real before/after images from service pages */
import cosmeticFillingAB from "@/assets/cosmetic-filling-before-after.webp";
import scalingAb1 from "@/assets/scaling-ab-1.webp";
import toothGapAb1 from "@/assets/tooth-gap-ab-1.png";
import bridgeCapAB1 from "@/assets/bridge-cap-before-after-1.png";

const SERVICE_BA_SLIDES = [
  { service: "Cosmetic Filling", title: "Expert Cosmetic Filling", desc: "A flawless cosmetic filling done by Mr Motiur", image: cosmeticFillingAB, slug: "cosmetic-filling" },
  { service: "Scaling & Polishing", title: "Professional Teeth Cleaning", desc: "Scaling and polishing results by Mr Motiur", image: scalingAb1, slug: "scaling-polishing-whitening" },
  { service: "Tooth Gap Treatment", title: "Tooth Gap Correction", desc: "A perfect gap closure treatment done by Mr Motiur", image: toothGapAb1, slug: "tooth-gap-treatment" },
  { service: "Dental Bridge & Cap", title: "Dental Bridge and Cap", desc: "A custom bridge and cap work done by Mr Motiur", image: bridgeCapAB1, slug: "dental-bridges-caps" },
];

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
  const [slideIdx, setSlideIdx] = useState(0);
  const slide = SERVICE_BA_SLIDES[slideIdx];

  /* Auto-slide every 4 seconds */
  const nextSlide = useCallback(() => {
    setSlideIdx((i) => (i + 1) % SERVICE_BA_SLIDES.length);
  }, []);

  useEffect(() => {
    const timer = setInterval(nextSlide, 4000);
    return () => clearInterval(timer);
  }, [nextSlide]);

  const reviews: GoogleReview[] = [
    { name: "Md Aryan Hossan", date: "25 March 2026", text: "Alhamdulillah bare onek valo treatment paisi ekhane. Friendly doctors and very clean environment.", rating: 5 },
    { name: "Md Nazrul", date: "25 March 2026", text: "Best braces treatment centre in Debidwar. Highly recommend Motiur's Dental for any orthodontic work.", rating: 5 },
    { name: "Shahida Akter", date: "20 March 2026", text: "অনেক দিন ধরেই দাঁতের সমস্যায় ভুগছিলাম। মতিউর'স ডেন্টালে এসে সব সমস্যার সমাধান পেলাম। ডাক্তার ও সকল স্টাফ অত্যন্ত আন্তরিক। সবাইকে এখানে আসার জন্য সুপারিশ করছি।", rating: 5 },
    { name: "Rahima Begum", date: "18 March 2026", text: "Painless root canal in just 2 visits. Very impressed with the modern equipment and the calm, caring approach.", rating: 5 },
    { name: "Alif Hassan", date: "25 March 2026", text: "I recently received dental treatment at Motiur's Dental Care, and I'm very satisfied with my experience. The clinic is clean, well-maintained, and equipped with modern technology. The staff was friendly and professional throughout.", rating: 5 },
    { name: "Kamal Uddin", date: "15 March 2026", text: "Very good experience. Doctor is very friendly and professional. Reasonable pricing. Highly recommended for dental care in Debidwar area.", rating: 5 },
  ];

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
        title="Mr Motiur - Expert in preventive Dentistry"
        description="Mr Motiur is an expert in preventive dentistry, offering trusted and comfortable dental care in Comilla Debidwar for over 25 years"
        path="/"
        schema={localBusinessSchema}
      />

      {/* HERO */}
      <section className="relative bg-sky-gradient overflow-hidden">
        <div className="container-page relative pt-10 pb-20 md:pt-14 md:pb-28 grid lg:grid-cols-2 gap-10 items-center">
          <Reveal direction="left">
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
          </Reveal>

          {/* Before/After auto-slide */}
          <Reveal direction="right" delay={0.1}>
            <div className="relative max-w-xl mx-auto w-full">
              <div className="relative rounded-2xl overflow-hidden shadow-medium bg-card aspect-[4/3]">
                <img
                  key={`slide-${slideIdx}`}
                  src={slide.image}
                  alt={`${slide.service} before and after`}
                  className="absolute inset-0 w-full h-full object-cover animate-fade-in"
                  style={{ animation: "slideZoom 4s ease-in-out infinite" }}
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4 pt-10">
                  <h3 className="font-display font-bold text-white text-lg">{slide.service}</h3>
                  <Link to={`/services/${slide.slug}`}>
                    <Button variant="cta" size="sm" className="mt-2 rounded-md text-xs">View Service</Button>
                  </Link>
                </div>
                <button onClick={() => setSlideIdx((i) => (i - 1 + SERVICE_BA_SLIDES.length) % SERVICE_BA_SLIDES.length)} className="absolute left-2 top-1/2 -translate-y-1/2 h-9 w-9 rounded-full bg-white/90 text-primary flex items-center justify-center shadow-soft hover:bg-white" aria-label="Previous">
                  <ChevronLeft className="h-5 w-5" />
                </button>
                <button onClick={() => setSlideIdx((i) => (i + 1) % SERVICE_BA_SLIDES.length)} className="absolute right-2 top-1/2 -translate-y-1/2 h-9 w-9 rounded-full bg-white/90 text-primary flex items-center justify-center shadow-soft hover:bg-white" aria-label="Next">
                  <ChevronRight className="h-5 w-5" />
                </button>
              </div>
              {/* Dots */}
              <div className="flex justify-center gap-2 mt-3">
                {SERVICE_BA_SLIDES.map((_, i) => (
                  <button key={i} onClick={() => setSlideIdx(i)} className={`w-2.5 h-2.5 rounded-full transition-colors ${i === slideIdx ? "bg-primary" : "bg-primary/30"}`} aria-label={`Slide ${i + 1}`} />
                ))}
              </div>
            </div>
          </Reveal>
        </div>
        <Wave className="wave-divider-bottom" fill="white" />
      </section>

      {/* GOOGLE REVIEWS */}
      <section className="py-14 md:py-16 bg-white">
        <div className="container-page text-center">
          <Reveal direction="bottom">
            <div className="text-xs font-bold tracking-widest text-primary/70">EXCELLENT</div>
            <div className="flex justify-center gap-0.5 mt-1.5 text-amber-400">
              {Array.from({ length: 5 }).map((_, i) => <Star key={i} className="h-5 w-5 fill-current" />)}
            </div>
            <div className="text-sm text-primary/70 mt-1">Based on 34 reviews</div>
            <div className="flex justify-center mt-1">
              <span className="text-base font-bold">
                <span className="text-[#4285F4]">G</span><span className="text-[#EA4335]">o</span><span className="text-[#FBBC05]">o</span><span className="text-[#4285F4]">g</span><span className="text-[#34A853]">l</span><span className="text-[#EA4335]">e</span>
              </span>
            </div>
          </Reveal>

          <Reveal direction="bottom" delay={0.1}>
            <div className="mt-10 max-w-6xl mx-auto px-6">
              <GoogleReviewCarousel reviews={reviews} />
            </div>
          </Reveal>
        </div>
      </section>

      {/* DR MOTIUR - ABOUT */}
      <section className="py-14 md:py-20 bg-white">
        <div className="container-page grid lg:grid-cols-2 gap-10 items-center">
          <Reveal direction="left">
            <div className="flex justify-center">
              <div className="rounded-2xl overflow-hidden max-w-md w-full shadow-card">
                <img src={drMotiurAbout} alt="Mr Motiur - Expert in preventive Dentistry" className="w-full h-full object-cover" loading="lazy" />
              </div>
            </div>
          </Reveal>

          <Reveal direction="right" delay={0.1}>
            <h1 style={{ fontFamily: "'Montserrat', sans-serif", fontSize: '23px', fontWeight: 700 }} className="leading-tight font-extrabold text-sky-600">
              Mr Motiur - Expert in preventive Dentistry
            </h1>

            <p className="mt-3 text-foreground/75 text-sm leading-relaxed">
              Mr Motiur brings more than two decades of hands-on experience in dentistry. Over the years he has built strong trust with his patients by focusing on honest advice, gentle treatment and consistent results. At Motiur's Dental his vision is simple - to make quality dental care accessible, reliable and stress free for everyone.
            </p>

            <ul className="mt-3 space-y-2.5">
              {[
                "Uses updated tools and safe dental practices",
                "Founder and CEO of Motiur's Dental",
                "Focuses on comfort and pain free procedures",
                "Known for a patient friendly and caring approach",
                "Takes time to listen and explain every treatment clearly",
                "Trusted by generations of patients",
              ].map((line) => (
                <li key={line} className="flex gap-2.5 items-start">
                  <Check className="h-5 w-5 text-cta shrink-0 mt-0.5" />
                  <span className="text-sm text-foreground/85">{line}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      {/* OUR TOP SERVICES */}
      <section className="relative bg-sky-gradient pt-20 pb-24">
        <Wave className="wave-divider-top" fill="white" />
        <div className="container-page relative z-10">
          <Reveal direction="bottom">
            <h2 className="text-center font-display font-extrabold text-2xl md:text-3xl tracking-[0.18em] text-primary">OUR TOP SERVICES</h2>
          </Reveal>
          <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {HOME_SERVICES.map((s, idx) => {
              const words = s.description.split(" ");
              const preview = words.slice(0, 28).join(" ");
              const dir = idx % 3 === 0 ? "left" : idx % 3 === 2 ? "right" : "bottom";
              return (
                <Reveal key={s.slug} direction={dir as "left" | "right" | "bottom"} delay={idx * 0.06}>
                  <button
                    type="button"
                    onClick={() => openServiceDialog({ slug: s.slug })}
                    className="group relative bg-sky-soft/70 backdrop-blur-sm rounded-2xl p-7 shadow-card hover:shadow-medium hover:-translate-y-1 transition-smooth flex flex-col min-h-[360px] overflow-hidden text-left w-full"
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
                  </button>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* FIND US */}
      <section
        className="relative pt-0 pb-14 md:pb-20 bg-fixed bg-cover bg-center"
        style={{ backgroundImage: `url(${debidwarBg})` }}
      >
        <Wave className="wave-divider-top relative z-10" fill="hsl(195, 90%, 78%)" />
        {/* Subtle overlay */}
        <div className="absolute inset-0 bg-black/20 z-0" />
        <div className="container-page relative z-10">
          <Reveal direction="bottom">
            <h2 className="text-center font-display font-extrabold text-2xl md:text-3xl tracking-[0.18em] text-white">FIND US</h2>
          </Reveal>
          <Reveal direction="bottom" delay={0.1}>
            <div className="mt-8 rounded-2xl overflow-hidden border border-white/20 aspect-[16/7] shadow-card">
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
            <div className="mt-4 flex items-center justify-center gap-2 text-sm text-white/80">
              <MapPin className="h-4 w-4 text-pink" />
              <a href={CLINIC.mapUrl} target="_blank" rel="noopener noreferrer" className="hover:text-white">{CLINIC.address}</a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* LET US TAKE CARE OF YOU */}
      <section className="bg-sky-soft-gradient py-14 md:py-20">
        <div className="container-page grid md:grid-cols-2 gap-8 items-center">
          <Reveal direction="left">
            <div className="text-xs font-bold tracking-[0.2em] text-primary/70">TREAT YOURSELF</div>
            <h2 className="mt-3 text-4xl md:text-6xl font-display leading-[1.02] text-sky-400 sm:text-8xl font-bold">LET US TAKE CARE OF YOU</h2>
            <a href={waLink()} target="_blank" rel="noopener noreferrer" className="inline-block mt-7">
              <Button size="lg" className="bg-primary hover:bg-primary-dark text-white rounded-md gap-2 h-12 px-7">
                <Phone className="h-5 w-5" /> Book Your Appointment
              </Button>
            </a>
          </Reveal>
          <Reveal direction="right" delay={0.1}>
            <div className="rounded-2xl overflow-hidden aspect-square max-w-md mx-auto shadow-medium">
              <img src={ctaKid} alt="Happy child after a dental visit" className="w-full h-full object-cover" loading="lazy" />
            </div>
          </Reveal>
        </div>
      </section>

      
    </>
  );
};

export default Home;

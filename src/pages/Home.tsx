import { useState } from "react";
import { Link } from "react-router-dom";
import { ChevronLeft, ChevronRight, Phone, MessageCircle, Star, Check, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SEO } from "@/components/SEO";
import { Wave } from "@/components/Wave";
import { CLINIC, telLink, waLink } from "@/lib/clinic";
import { SERVICES } from "@/data/services";
import { CASES } from "@/data/cases";
import { DOCTORS } from "@/data/doctors";
import { DoctorModal, type Doctor } from "@/components/DoctorModal";
import drShahSultan from "@/assets/dr-shah-sultan.png";

const Home = () => {
  const [openDoc, setOpenDoc] = useState<Doctor | null>(null);
  const [caseIdx, setCaseIdx] = useState(0);
  const [reviewIdx, setReviewIdx] = useState(0);
  const featuredCases = CASES;
  const c = featuredCases[caseIdx];

  const reviews = [
    { name: "Shahida Akter", date: "1 Month Ago", text: "অনেক দিন ধরেই দাঁতের সমস্যায় ভুগছিলাম। মতিউর'স ডেন্টালে এসে সব সমস্যার সমাধান পেলাম। ডাক্তার ও সকল স্টাফ অত্যন্ত আন্তরিক।" },
    { name: "Md Aryan Hossan", date: "2 Months Ago", text: "Alhamdulillah bare onek valo treatment paisi ekhane. Friendly doctors and very clean environment." },
    { name: "Md Nazrul", date: "3 Months Ago", text: "Best braces treatment centre in Debidwar. Highly recommend Motiur's Dental for any orthodontic work." },
    { name: "Rahima Begum", date: "1 Month Ago", text: "Painless root canal in just 2 visits. Very impressed with the modern equipment and the calm, caring approach." },
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
              <a href={waLink()} target="_blank" rel="noopener noreferrer">
                <Button variant="cta" size="lg" className="gap-2 rounded-md h-12 px-7">
                  <MessageCircle className="h-5 w-5" /> Book Your Appointment
                </Button>
              </a>
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

          <div className="mt-8 grid md:grid-cols-3 gap-4 max-w-5xl mx-auto">
            {reviews.slice(reviewIdx, reviewIdx + 3).concat(reviews.slice(0, Math.max(0, reviewIdx + 3 - reviews.length))).slice(0, 3).map((r, i) => (
              <div key={i} className="bg-white rounded-xl border border-border shadow-card p-5 text-left">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-full bg-sky-soft flex items-center justify-center font-bold text-primary">{r.name[0]}</div>
                  <div className="flex-1">
                    <div className="font-semibold text-sm text-primary">{r.name}</div>
                    <div className="text-[11px] text-muted-foreground">{r.date}</div>
                  </div>
                  <span className="text-base font-bold">G</span>
                </div>
                <div className="flex gap-0.5 mt-2 text-amber-400">
                  {Array.from({ length: 5 }).map((_, k) => <Star key={k} className="h-3.5 w-3.5 fill-current" />)}
                </div>
                <p className="text-sm text-foreground/80 mt-2 line-clamp-3">{r.text}</p>
                <button className="text-xs text-primary font-semibold mt-2">Read more</button>
              </div>
            ))}
          </div>

          <div className="mt-6 flex justify-center gap-2">
            <button onClick={() => setReviewIdx((i) => (i - 1 + reviews.length) % reviews.length)} aria-label="Previous reviews" className="h-9 w-9 rounded-full bg-sky-soft text-primary flex items-center justify-center hover:bg-sky"><ChevronLeft className="h-4 w-4" /></button>
            <button onClick={() => setReviewIdx((i) => (i + 1) % reviews.length)} aria-label="Next reviews" className="h-9 w-9 rounded-full bg-sky-soft text-primary flex items-center justify-center hover:bg-sky"><ChevronRight className="h-4 w-4" /></button>
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
          <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {SERVICES.slice(0, 6).map((s, i) => {
              const tints = [
                "bg-sky-soft text-sky-deep",
                "bg-amber-100 text-amber-600",
                "bg-rose-100 text-rose-500",
                "bg-emerald-100 text-emerald-600",
                "bg-violet-100 text-violet-600",
                "bg-cyan-100 text-cyan-600",
              ];
              return (
                <Link key={s.slug} to={`/services/${s.slug}`} className="group bg-white rounded-2xl p-6 shadow-card hover:shadow-medium hover:-translate-y-1 transition-smooth">
                  <div className={`h-14 w-14 rounded-xl ${tints[i % tints.length]} flex items-center justify-center text-3xl mb-4`}>
                    {s.icon}
                  </div>
                  <h3 className="font-display font-bold text-lg text-primary group-hover:text-pink transition-smooth">{s.name}</h3>
                  <p className="text-sm text-foreground/70 mt-2 line-clamp-4">{s.description.slice(0, 140)}… <span className="text-pink font-semibold">Read More.</span></p>
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
            <img src="/src/assets/cta-kid.jpg" alt="Happy child after a dental visit" className="w-full h-full object-cover" loading="lazy" />
          </div>
        </div>
      </section>

      <DoctorModal doctor={openDoc} open={!!openDoc} onOpenChange={(v) => !v && setOpenDoc(null)} />
    </>
  );
};

export default Home;

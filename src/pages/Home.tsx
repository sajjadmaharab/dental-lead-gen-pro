import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Phone, MessageCircle, Check, ShieldCheck, Users, Sparkles, Award, Star, MapPin, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SEO } from "@/components/SEO";
import { CLINIC, telLink, waLink } from "@/lib/clinic";
import { SERVICES } from "@/data/services";
import { CASES } from "@/data/cases";
import { DOCTORS } from "@/data/doctors";
import { DoctorModal, type Doctor } from "@/components/DoctorModal";
import { ReactCompareSlider, ReactCompareSliderImage } from "react-compare-slider";
import heroImg from "@/assets/hero-smile.jpg";
import clinicImg from "@/assets/clinic-photo.jpeg";

const Home = () => {
  const [openDoc, setOpenDoc] = useState<Doctor | null>(null);

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "Dentist",
    name: CLINIC.name,
    image: heroImg,
    "@id": CLINIC.url,
    url: CLINIC.url,
    telephone: CLINIC.phoneTel,
    address: {
      "@type": "PostalAddress",
      streetAddress: "Ibn Sina Hospital (Pvt.) Ltd",
      addressLocality: "Debidwar",
      addressRegion: "Cumilla",
      addressCountry: "BD",
    },
    geo: { "@type": "GeoCoordinates", latitude: 23.524, longitude: 91.103 },
    openingHoursSpecification: [{
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Saturday","Sunday","Monday","Tuesday","Wednesday","Thursday"],
      opens: CLINIC.hoursOpen, closes: CLINIC.hoursClose,
    }],
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
      <section className="relative overflow-hidden bg-hero-gradient">
        <div className="absolute inset-0 -z-0 opacity-40 pointer-events-none">
          <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-primary/20 blur-3xl" />
          <div className="absolute -bottom-32 -left-32 w-96 h-96 rounded-full bg-secondary/20 blur-3xl" />
        </div>
        <div className="container-page relative z-10 grid lg:grid-cols-2 gap-10 lg:gap-12 items-center pt-12 pb-16 md:pt-16 md:pb-24">
          <div className="animate-fade-in-up">
            <span className="inline-flex items-center gap-2 bg-card/80 backdrop-blur px-4 py-1.5 rounded-full text-xs font-semibold text-primary border border-primary/20">
              <MapPin className="h-3.5 w-3.5" /> {CLINIC.shortAddress}
            </span>
            <h1 className="mt-5 text-4xl sm:text-5xl lg:text-6xl font-display font-extrabold leading-[1.05] text-foreground">
              Life-Changing <span className="gradient-text">Dental Care</span> in Debidwar
            </h1>
            <p className="mt-5 text-lg text-muted-foreground max-w-xl">
              Expert dental treatments for a healthy, confident smile.
              Trusted by families across Debidwar & Comilla.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href={telLink}>
                <Button variant="hero" size="lg" className="gap-2 shadow-medium">
                  <Phone className="h-5 w-5" /> Call Now
                </Button>
              </a>
              <a href={waLink()} target="_blank" rel="noopener noreferrer">
                <Button variant="whatsapp" size="lg" className="gap-2 shadow-soft">
                  <MessageCircle className="h-5 w-5" /> Book Appointment
                </Button>
              </a>
            </div>
            <div className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-sm text-muted-foreground">
              <span className="flex items-center gap-1.5"><Check className="h-4 w-4 text-secondary" /> Experienced Dentists</span>
              <span className="flex items-center gap-1.5"><Check className="h-4 w-4 text-secondary" /> Modern Equipment</span>
              <span className="flex items-center gap-1.5"><Check className="h-4 w-4 text-secondary" /> Affordable Pricing</span>
            </div>
          </div>
          <div className="relative">
            <div className="relative rounded-3xl overflow-hidden shadow-medium aspect-[4/5] max-w-md mx-auto">
              <img src={heroImg} alt="Confident smile after dental treatment in Debidwar" className="w-full h-full object-cover" width={800} height={1000} />
            </div>
            <div className="absolute -bottom-5 -left-2 md:-left-6 bg-card rounded-2xl shadow-medium p-4 flex items-center gap-3 max-w-[220px]">
              <div className="h-10 w-10 rounded-full bg-primary-soft text-primary flex items-center justify-center"><Star className="h-5 w-5 fill-primary" /></div>
              <div>
                <div className="font-semibold text-sm">5★ rated care</div>
                <div className="text-xs text-muted-foreground">Hundreds of happy patients</div>
              </div>
            </div>
            <div className="hidden md:flex absolute -top-4 -right-4 bg-card rounded-2xl shadow-medium p-4 items-center gap-3">
              <div className="h-10 w-10 rounded-full bg-secondary-soft text-secondary flex items-center justify-center"><Clock className="h-5 w-5" /></div>
              <div>
                <div className="font-semibold text-sm">10 AM – 7 PM</div>
                <div className="text-xs text-muted-foreground">Friday Closed</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TRUST */}
      <section className="section-pad">
        <div className="container-page">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-display font-bold">Why Choose Motiur's Dental?</h2>
            <p className="mt-3 text-muted-foreground">Modern dentistry with a personal touch — built around your comfort and confidence.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              { icon: Award, title: "Experienced Doctors", text: "Qualified dental surgeons with years of clinical experience." },
              { icon: Sparkles, title: "Advanced Equipment", text: "Modern tools for safer, faster and pain-free treatments." },
              { icon: Users, title: "Affordable Care", text: "Transparent pricing for families across Debidwar & Comilla." },
              { icon: ShieldCheck, title: "Safe & Hygienic", text: "Strict sterilisation protocols on every instrument." },
            ].map(({ icon: Icon, title, text }) => (
              <div key={title} className="bg-card rounded-2xl p-6 shadow-card border border-border/60 hover:shadow-medium hover:-translate-y-1 transition-smooth">
                <div className="h-12 w-12 rounded-xl bg-primary-soft text-primary flex items-center justify-center mb-4">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="font-display font-semibold text-lg">{title}</h3>
                <p className="text-sm text-muted-foreground mt-1.5">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES PREVIEW */}
      <section className="section-pad bg-soft-gradient">
        <div className="container-page">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
            <div>
              <span className="text-sm font-semibold text-primary">Our Services</span>
              <h2 className="text-3xl md:text-4xl font-display font-bold mt-1">Complete Dental Care, One Clinic</h2>
            </div>
            <Link to="/services"><Button variant="outline" className="gap-2 rounded-full">View All Services <ArrowRight className="h-4 w-4" /></Button></Link>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {SERVICES.slice(0, 8).map((s) => (
              <Link key={s.slug} to={`/services/${s.slug}`} className="group bg-card border border-border/60 rounded-2xl p-5 hover:shadow-medium hover:-translate-y-1 hover:border-primary/30 transition-smooth">
                <div className="text-3xl mb-3">{s.icon}</div>
                <h3 className="font-display font-semibold text-base group-hover:text-primary transition-smooth">{s.name}</h3>
                <p className="text-xs text-muted-foreground mt-1.5 line-clamp-2">{s.short}</p>
                <div className="mt-3 inline-flex items-center text-xs font-semibold text-primary opacity-0 group-hover:opacity-100 transition-smooth">
                  Learn more <ArrowRight className="h-3.5 w-3.5 ml-1" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* BEFORE / AFTER PREVIEW */}
      <section className="section-pad">
        <div className="container-page">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-sm font-semibold text-primary">Real Patient Results</span>
            <h2 className="text-3xl md:text-4xl font-display font-bold mt-1">Smile Transformations</h2>
            <p className="mt-3 text-muted-foreground">Drag the slider to see real before & after results from our clinic.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-5">
            {CASES.slice(0, 3).map((c) => (
              <div key={c.id} className="bg-card rounded-2xl overflow-hidden shadow-card border border-border/60">
                <ReactCompareSlider
                  itemOne={<ReactCompareSliderImage src={c.before} alt={`${c.title} before`} />}
                  itemTwo={<ReactCompareSliderImage src={c.after} alt={`${c.title} after`} />}
                  className="aspect-square"
                />
                <div className="p-4">
                  <div className="text-xs text-primary font-semibold">Case Study {c.id}</div>
                  <h3 className="font-display font-semibold mt-0.5">{c.title}</h3>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link to="/before-after"><Button variant="hero" size="lg" className="gap-2">See All Cases <ArrowRight className="h-4 w-4" /></Button></Link>
          </div>
        </div>
      </section>

      {/* DOCTORS */}
      <section className="section-pad bg-hero-gradient">
        <div className="container-page">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-sm font-semibold text-primary">Meet Our Doctors</span>
            <h2 className="text-3xl md:text-4xl font-display font-bold mt-1">Trusted Hands, Caring Hearts</h2>
            <p className="mt-3 text-muted-foreground">Click on a doctor to view their full profile.</p>
          </div>
          <div className="grid sm:grid-cols-2 gap-6 max-w-3xl mx-auto">
            {DOCTORS.map((d) => (
              <button
                key={d.name}
                onClick={() => setOpenDoc(d)}
                className="group text-left bg-card rounded-3xl overflow-hidden shadow-card border border-border/60 hover:shadow-medium hover:-translate-y-1 transition-smooth"
              >
                <div className="aspect-[4/5] overflow-hidden bg-muted">
                  <img src={d.image} alt={`${d.name} - ${d.role} at Motiur's Dental`} className="w-full h-full object-cover object-top group-hover:scale-105 transition-smooth" loading="lazy" />
                </div>
                <div className="p-5">
                  <h3 className="font-display font-bold text-lg">{d.name}</h3>
                  <div className="text-primary font-medium text-sm">{d.role}</div>
                  <div className="text-xs text-muted-foreground mt-1">{d.qualifications.join(", ")}</div>
                  <div className="mt-3 inline-flex items-center text-sm font-semibold text-primary">
                    View Profile <ArrowRight className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-smooth" />
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="section-pad">
        <div className="container-page">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-sm font-semibold text-primary">Patient Stories</span>
            <h2 className="text-3xl md:text-4xl font-display font-bold mt-1">Loved by Patients in Debidwar</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-5">
            {[
              { name: "Rahima Begum", area: "Debidwar", text: "I had severe tooth pain. The team did my root canal painlessly in 2 visits. Highly recommend Motiur's Dental." },
              { name: "Shahin Alam", area: "Comilla", text: "Dr. Shah Sultan fixed my broken front tooth in one visit. The result looks completely natural — I can smile confidently again." },
              { name: "Nasrin Akter", area: "Debidwar", text: "Got my children's check-ups here. Friendly staff, very clean clinic and affordable prices. Best dentist in our area." },
            ].map((t) => (
              <div key={t.name} className="bg-card border border-border/60 rounded-2xl p-6 shadow-card">
                <div className="flex gap-0.5 mb-3 text-secondary">
                  {Array.from({ length: 5 }).map((_, i) => <Star key={i} className="h-4 w-4 fill-current" />)}
                </div>
                <p className="text-sm text-foreground/85 leading-relaxed">"{t.text}"</p>
                <div className="mt-4 pt-4 border-t border-border/60">
                  <div className="font-semibold text-sm">{t.name}</div>
                  <div className="text-xs text-muted-foreground">{t.area}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-pad">
        <div className="container-page">
          <div className="relative overflow-hidden rounded-3xl bg-primary-gradient p-8 md:p-14 text-center shadow-medium">
            <div className="absolute inset-0 opacity-20 pointer-events-none">
              <div className="absolute -top-20 -left-20 w-72 h-72 rounded-full bg-white/40 blur-3xl" />
              <div className="absolute -bottom-20 -right-20 w-72 h-72 rounded-full bg-secondary/60 blur-3xl" />
            </div>
            <div className="relative">
              <h2 className="text-3xl md:text-4xl font-display font-bold text-primary-foreground">Let Us Take Care of Your Smile</h2>
              <p className="mt-3 text-primary-foreground/90 max-w-xl mx-auto">Book your appointment today — quick, easy and affordable.</p>
              <div className="mt-7 flex flex-wrap gap-3 justify-center">
                <a href={waLink()} target="_blank" rel="noopener noreferrer">
                  <Button variant="whatsapp" size="lg" className="gap-2"><MessageCircle className="h-5 w-5" />Book on WhatsApp</Button>
                </a>
                <a href={telLink}>
                  <Button size="lg" variant="secondary" className="gap-2 bg-card text-primary hover:bg-card/90"><Phone className="h-5 w-5" />{CLINIC.phone}</Button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <DoctorModal doctor={openDoc} open={!!openDoc} onOpenChange={(v) => !v && setOpenDoc(null)} />
    </>
  );
};

export default Home;

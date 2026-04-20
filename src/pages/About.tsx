import { useState } from "react";
import { ArrowRight, ShieldCheck, HeartPulse, Smile } from "lucide-react";
import { SEO } from "@/components/SEO";
import { DOCTORS } from "@/data/doctors";
import { DoctorModal, type Doctor } from "@/components/DoctorModal";
import clinicImg from "@/assets/clinic-photo.jpeg";

const About = () => {
  const [openDoc, setOpenDoc] = useState<Doctor | null>(null);
  return (
    <>
      <SEO
        title="About Motiur's Dental — Trusted Dental Clinic in Debidwar"
        description="Learn about Motiur's Dental, a modern dental clinic in Debidwar (Ibn Sina Hospital) serving Comilla. Meet our experienced doctors and our mission."
        path="/about"
      />
      <section className="bg-hero-gradient py-14 md:py-20">
        <div className="container-page grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <span className="text-sm font-semibold text-primary">About Us</span>
            <h1 className="mt-2 text-4xl md:text-5xl font-display font-extrabold">Caring for Smiles Across Debidwar & Comilla</h1>
            <p className="mt-4 text-muted-foreground text-lg">Motiur's Dental is a modern dental clinic located inside Ibn Sina Hospital (Pvt.) Ltd, Debidwar. We combine experienced dentists, modern equipment and a warm patient experience to deliver dental care you can trust.</p>
          </div>
          <div className="rounded-3xl overflow-hidden shadow-medium aspect-[4/3]">
            <img src={clinicImg} alt="Motiur's Dental clinic in Debidwar" className="w-full h-full object-cover" loading="lazy" />
          </div>
        </div>
      </section>

      <section className="section-pad">
        <div className="container-page grid md:grid-cols-3 gap-5">
          {[
            { icon: HeartPulse, title: "Our Mission", text: "To make high-quality dental care accessible and affordable for every family in Debidwar and Comilla." },
            { icon: Smile, title: "Our Vision", text: "To be the most trusted dental clinic in our region — known for honest advice, modern care and beautiful results." },
            { icon: ShieldCheck, title: "Our Values", text: "Patient safety, transparent pricing, gentle care and continuous learning in modern dentistry." },
          ].map(({ icon: Icon, title, text }) => (
            <div key={title} className="bg-card border border-border/60 rounded-2xl p-6 shadow-card">
              <div className="h-12 w-12 rounded-xl bg-primary-soft text-primary flex items-center justify-center mb-4"><Icon className="h-6 w-6" /></div>
              <h3 className="font-display font-bold text-lg">{title}</h3>
              <p className="text-sm text-muted-foreground mt-2">{text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section-pad bg-soft-gradient">
        <div className="container-page">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-sm font-semibold text-primary">Our Doctors</span>
            <h2 className="text-3xl md:text-4xl font-display font-bold mt-1">Meet the Team</h2>
          </div>
          <div className="grid sm:grid-cols-2 gap-6 max-w-3xl mx-auto">
            {DOCTORS.map((d) => (
              <button key={d.name} onClick={() => setOpenDoc(d)} className="group text-left bg-card rounded-3xl overflow-hidden shadow-card border border-border/60 hover:shadow-medium hover:-translate-y-1 transition-smooth">
                <div className="aspect-[4/5] overflow-hidden bg-muted">
                  <img src={d.image} alt={`${d.name} - ${d.role}`} className="w-full h-full object-cover object-top group-hover:scale-105 transition-smooth" loading="lazy" />
                </div>
                <div className="p-5">
                  <h3 className="font-display font-bold text-lg">{d.name}</h3>
                  <div className="text-primary font-medium text-sm">{d.role}</div>
                  <div className="text-xs text-muted-foreground mt-1">{d.qualifications.join(", ")}</div>
                  <div className="mt-3 inline-flex items-center text-sm font-semibold text-primary">View Profile <ArrowRight className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-smooth" /></div>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      <DoctorModal doctor={openDoc} open={!!openDoc} onOpenChange={(v) => !v && setOpenDoc(null)} />
    </>
  );
};

export default About;

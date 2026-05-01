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

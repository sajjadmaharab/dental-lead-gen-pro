import { ReactCompareSlider, ReactCompareSliderImage } from "react-compare-slider";
import { Phone, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SEO } from "@/components/SEO";
import { CASES } from "@/data/cases";
import { telLink, waLink } from "@/lib/clinic";

const BeforeAfter = () => (
  <>
    <SEO
      title="Before & After Dental Cases in Debidwar | Motiur's Dental"
      description="Real smile transformations from Motiur's Dental in Debidwar — root canal, implants, whitening, braces and more. Best dentist in Comilla."
      path="/before-after"
    />
    <section className="bg-hero-gradient py-14 md:py-20">
      <div className="container-page text-center max-w-3xl mx-auto">
        <span className="text-sm font-semibold text-primary">Smile Gallery</span>
        <h1 className="mt-2 text-4xl md:text-5xl font-display font-extrabold">Real Before & After Cases</h1>
        <p className="mt-4 text-muted-foreground text-lg">Drag the slider on each case to see the transformation. All photos are from real patients treated at Motiur's Dental.</p>
      </div>
    </section>

    <section className="section-pad">
      <div className="container-page grid md:grid-cols-2 gap-8">
        {CASES.map((c) => (
          <article key={c.id} className="bg-card border border-border/60 rounded-2xl overflow-hidden shadow-card">
            <ReactCompareSlider
              itemOne={<ReactCompareSliderImage src={c.before} alt={`${c.title} before treatment`} />}
              itemTwo={<ReactCompareSliderImage src={c.after} alt={`${c.title} after treatment`} />}
              className="aspect-[4/3]"
            />
            <div className="p-5 md:p-6">
              <div className="flex items-center justify-between gap-2">
                <span className="text-xs font-semibold text-primary bg-primary-soft px-2.5 py-1 rounded-full">{c.category}</span>
                <span className="text-xs text-muted-foreground">Case Study {c.id}</span>
              </div>
              <h2 className="mt-3 font-display font-bold text-xl">{c.title}</h2>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{c.description}</p>
            </div>
          </article>
        ))}
      </div>

      <div className="container-page mt-14">
        <div className="rounded-3xl bg-primary-gradient p-8 md:p-12 text-center text-primary-foreground shadow-medium">
          <h2 className="text-2xl md:text-3xl font-display font-bold">Ready for your transformation?</h2>
          <p className="mt-2 text-primary-foreground/90">Book a consultation today and let's plan your perfect smile.</p>
          <div className="mt-6 flex flex-wrap gap-3 justify-center">
            <a href={telLink}><Button variant="secondary" size="lg" className="gap-2 bg-card text-primary hover:bg-card/90"><Phone className="h-5 w-5" />Call Now</Button></a>
            <a href={waLink()} target="_blank" rel="noopener noreferrer"><Button variant="whatsapp" size="lg" className="gap-2"><MessageCircle className="h-5 w-5" />WhatsApp</Button></a>
          </div>
        </div>
      </div>
    </section>
  </>
);

export default BeforeAfter;

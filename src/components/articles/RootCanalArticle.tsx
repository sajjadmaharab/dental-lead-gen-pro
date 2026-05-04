import { Phone, MapPin } from "lucide-react";
import { CLINIC, telLink } from "@/lib/clinic";
import { useState, useEffect } from "react";
import heroImg from "@/assets/rootcanal-hero.jpg";
import pulpDiagramImg from "@/assets/rootcanal-pulp-diagram.jpg";
import signsImg from "@/assets/rootcanal-signs.jpg";
import stepsImg from "@/assets/rootcanal-steps.jpg";
import work1 from "@/assets/rootcanal-work1.jpg";
import work2 from "@/assets/rootcanal-work2.jpg";
import work3 from "@/assets/rootcanal-work3.jpg";
import work4 from "@/assets/rootcanal-work4.jpg";
import work5 from "@/assets/rootcanal-work5.jpg";
import work6 from "@/assets/rootcanal-work6.jpg";
import porcelainCrownImg from "@/assets/rootcanal-porcelain-crown.jpg";
import zirconiaCrownImg from "@/assets/rootcanal-zirconia-crown.jpg";
import metalCrownImg from "@/assets/rootcanal-metal-crown.jpg";

const Bullet = ({ children }: { children: React.ReactNode }) => (
  <li className="relative pl-6 before:content-[''] before:absolute before:left-0 before:top-[10px] before:w-2.5 before:h-2.5 before:rounded-full before:bg-primary/70 before:rotate-3">
    {children}
  </li>
);
const caseStudies = [
  { src: work1, alt: "Root canal case study 1 X-ray at Motiur's Dental Debidwar Comilla", label: "Case Study 1" },
  { src: work2, alt: "Root canal case study 2 X-ray at Motiur's Dental Debidwar", label: "Case Study 2" },
  { src: work3, alt: "Root canal case study 3 X-ray at Motiur's Dental Comilla", label: "Case Study 3" },
  { src: work4, alt: "Root canal case study 4 X-ray at Motiur's Dental", label: "Case Study 4" },
  { src: work5, alt: "Root canal case study 5 X-ray at Motiur's Dental Debidwar", label: "Case Study 5" },
  { src: work6, alt: "Root canal case study 6 X-ray at Motiur's Dental Comilla", label: "Case Study 6" },
];

const CaseStudyCarousel = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % caseStudies.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="my-10" aria-label="Root canal treatment case studies at Motiur's Dental Debidwar Comilla">
      <h2 className="text-2xl md:text-3xl font-display font-bold text-foreground mb-4">Our Root Canal Treatment Results</h2>
      <div className="relative w-full max-w-md mx-auto">
        <div className="rounded-xl overflow-hidden border border-border aspect-square bg-muted">
          <img
            src={caseStudies[current].src}
            alt={caseStudies[current].alt}
            className="w-full h-full object-cover transition-opacity duration-500"
            loading="lazy"
          />
        </div>
        <p className="text-center text-sm font-display font-semibold text-foreground mt-3">
          {caseStudies[current].label}
        </p>
        <div className="flex justify-center gap-2 mt-2">
          {caseStudies.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`w-2.5 h-2.5 rounded-full transition-colors ${i === current ? "bg-primary" : "bg-muted-foreground/30"}`}
              aria-label={`Go to case study ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

const RootCanalArticle = () => {
  return (
    <article className="max-w-none">

      {/* Hero Image */}
      <div className="w-full rounded-2xl overflow-hidden mb-6 max-h-[280px] md:max-h-[340px]">
        <img src={heroImg} alt="Root canal treatment at Motiur's Dental in Debidwar Comilla" className="w-full h-full object-cover" loading="eager" />
      </div>

      <h1 className="text-3xl md:text-4xl lg:text-5xl font-display font-extrabold text-foreground mb-6 leading-tight">
        Root Canal Treatment: Save Your Tooth
      </h1>

      <p className="text-lg leading-relaxed text-foreground/90">
        If you have been dealing with severe tooth pain, sensitivity that does not go away, or swelling around a tooth, there is a good chance the pulp inside that tooth is infected or inflamed. This is exactly the situation root canal treatment is designed to fix. At <strong>Motiur's Dental in Debidwar, Comilla</strong>, we perform root canal treatment regularly and our patients are always surprised by how much more comfortable the procedure is than they expected.
      </p>
      <p className="mt-3 text-lg leading-relaxed text-foreground/90">
        The most important thing to understand about root canal treatment is this: it does not cause pain, it relieves it. The infection inside your tooth is what is causing the pain, and root canal treatment removes that infection completely.
      </p>
      <p className="mt-3 text-lg leading-relaxed text-foreground/90">
        And if cost has been stopping you from seeking treatment, here is something worth knowing. At Motiur's Dental, our root canal treatment prices are among the most affordable in the Comilla district, with no compromise on quality, materials, or technique.
      </p>

      {/* Case Studies - Auto-sliding carousel */}
      <CaseStudyCarousel />

      <div className="bg-primary/5 border border-primary/20 rounded-2xl p-6 my-8 flex flex-col sm:flex-row gap-4 items-start sm:items-center">
        <div className="flex items-center gap-2 text-primary font-semibold">
          <Phone className="h-5 w-5" />
          <a href={telLink} className="hover:underline">Call us today: {CLINIC.phone}</a>
        </div>
        <div className="flex items-center gap-2 text-muted-foreground">
          <MapPin className="h-5 w-5" />
          <span>Debidwar, Comilla, Bangladesh</span>
        </div>
      </div>

      {/* What is Root Canal Treatment? */}
      <h2 className="text-2xl md:text-3xl font-display font-bold mt-12 text-foreground">What is Root Canal Treatment?</h2>
      <div className="mt-4 flex flex-col md:flex-row gap-6 items-start">
        <div className="flex-1">
          <p className="text-foreground/85 leading-relaxed">
            Root canal treatment, also known as <strong>endodontic treatment</strong>, is a dental procedure that targets the inside of the tooth. Specifically, it addresses infection or inflammation in the pulp, which is the soft tissue at the core of every tooth.
          </p>
          <p className="mt-3 text-foreground/85 leading-relaxed">
            The pulp contains nerves, blood vessels, and connective tissue. It runs from the top of the tooth, called the crown, all the way down through the roots. In a healthy tooth, the pulp is protected by the hard outer layers of enamel and dentine. But when decay, a crack, or trauma allows bacteria to reach the pulp, it becomes infected.
          </p>
          <p className="mt-3 text-foreground/85 leading-relaxed">
            The goal of root canal treatment is to remove that infected pulp, clean and disinfect the space thoroughly, seal it to prevent reinfection, and then restore the tooth so it functions normally. The tooth itself is preserved. You keep your natural tooth, your natural bite, and your natural smile.
          </p>
        </div>
        <div className="w-full md:w-56 shrink-0 rounded-xl overflow-hidden border border-border">
          <img src={pulpDiagramImg} alt="Infected and inflamed pulp tissue diagram showing root canal anatomy" className="w-full h-auto object-contain" loading="lazy" />
        </div>
      </div>

      {/* When is Root Canal Treatment Necessary? */}
      <h2 className="text-2xl md:text-3xl font-display font-bold mt-12 text-foreground">When is Root Canal Treatment Necessary?</h2>
      <p className="mt-3 text-foreground/85 leading-relaxed">
        Root canal treatment becomes necessary when the pulp of the tooth has been compromised by infection or significant inflammation. This happens in several situations.
      </p>
      <ul className="space-y-4 my-6 list-none p-0">
        <Bullet>
          <strong>Deep cavities left untreated:</strong> Once bacteria enter the pulp chamber, an infection develops that cannot be treated with antibiotics alone. The infected tissue must be physically removed.
        </Bullet>
        <Bullet>
          <strong>Repeated dental procedures:</strong> If a tooth has had multiple fillings, the cumulative stress on the pulp can eventually lead to inflammation and infection.
        </Bullet>
        <Bullet>
          <strong>Cracks, chips, or fractures:</strong> These create pathways for bacteria to reach the pulp, even if the crack is not immediately visible. This is why cracked teeth should always be evaluated promptly.
        </Bullet>
        <Bullet>
          <strong>Trauma to the tooth:</strong> A hard knock or accident can damage the blood supply to the pulp even without visible external damage. Over time the pulp can die, which may also require root canal treatment.
        </Bullet>
      </ul>
      <p className="mt-3 text-foreground/85 leading-relaxed">
        If an infected tooth is left untreated, the infection does not stay contained. It spreads to surrounding bone and tissue, can form an abscess, and in serious cases can affect your overall health. This is why early treatment matters so much.
      </p>

      {/* Signs You May Need a Root Canal */}
      <h2 className="text-2xl md:text-3xl font-display font-bold mt-12 text-foreground">Signs You May Need a Root Canal</h2>
      <div className="mt-4 flex flex-col md:flex-row gap-6 items-start">
        <div className="flex-1">
          <p className="text-foreground/85 leading-relaxed">
            Many patients at Motiur's Dental come to us after noticing one or more of the following symptoms. If any of these sound familiar, you should book an appointment as soon as possible.
          </p>
          <ul className="space-y-4 my-6 list-none p-0">
            <Bullet>
              <strong>Persistent or worsening tooth pain:</strong> The pain may be throbbing, sharp, or a deep dull ache. Unlike ordinary toothaches that come and go, the pain from an infected pulp tends to linger and often gets worse over time, especially when you bite down or apply pressure to the tooth.
            </Bullet>
            <Bullet>
              <strong>Sensitivity that does not go away:</strong> If your tooth reacts strongly to hot or cold and the sensitivity continues for several seconds or minutes after removing the source, this is a warning sign. Prolonged sensitivity points to nerve involvement.
            </Bullet>
            <Bullet>
              <strong>Swollen or tender gums near the tooth:</strong> The infection irritates the surrounding gum tissue. You may notice swelling, redness, or tenderness in the gum directly next to the affected tooth.
            </Bullet>
            <Bullet>
              <strong>A pimple-like bump on the gum:</strong> This is called a fistula or dental abscess. It often drains pus and is a sign that the infection has become serious and needs immediate attention.
            </Bullet>
            <Bullet>
              <strong>Darkening or discoloration of the tooth:</strong> When the blood supply to the pulp is cut off, the tooth may darken or take on a grey or brownish tint from the inside out.
            </Bullet>
            <Bullet>
              <strong>A loose tooth in an adult:</strong> If a tooth feels unstable without trauma, infection weakening the surrounding bone may be the cause.
            </Bullet>
            <Bullet>
              <strong>Pain that wakes you up at night:</strong> Dental infections tend to cause more pain when lying down because blood pressure to the head increases.
            </Bullet>
          </ul>
        </div>
        <div className="w-full md:w-72 shrink-0 rounded-xl overflow-hidden border border-border">
          <img src={signsImg} alt="8 signs that you need a root canal treatment" className="w-full h-auto object-contain" loading="lazy" />
        </div>
      </div>
      <p className="mt-3 text-foreground/85 leading-relaxed">
        Do not wait if you have any of these symptoms. The longer an infection is left untreated, the more complicated and expensive the treatment becomes. At Motiur's Dental, we can assess your tooth quickly and let you know exactly what is going on.
      </p>

      {/* Why Root Canal Treatment is Better Than Extraction */}
      <h2 className="text-2xl md:text-3xl font-display font-bold mt-12 text-foreground">Why Root Canal Treatment is Better Than Extraction</h2>
      <p className="mt-3 text-foreground/85 leading-relaxed">
        When patients hear they need a root canal, one of the most common questions we get is whether it would just be easier to pull the tooth out. We understand why people think that, but the answer is almost always no.
      </p>
      <ul className="space-y-4 my-6 list-none p-0">
        <Bullet>
          <strong>Your natural teeth are irreplaceable.</strong> Even the best artificial replacement is not as good as your own tooth. Natural teeth have roots that stimulate the jawbone and keep it healthy. When a tooth is extracted, the bone in that area begins to shrink over time.
        </Bullet>
        <Bullet>
          <strong>Extraction seems cheaper at first.</strong> But then you need to replace the missing tooth. A dental implant costs significantly more than a root canal. A bridge requires grinding down the healthy teeth on either side. A denture requires ongoing maintenance.
        </Bullet>
        <Bullet>
          <strong>Root canal saves the tooth you already have.</strong> The cost is a one-time investment and the restored tooth can last the rest of your life with proper care.
        </Bullet>
      </ul>
      <p className="mt-3 text-foreground/85 leading-relaxed">
        At Motiur's Dental, we always try to save the natural tooth first, and root canal treatment is the most reliable way to do that.
      </p>

      {/* The Procedure Step by Step */}
      <h2 className="text-2xl md:text-3xl font-display font-bold mt-12 text-foreground">The Root Canal Treatment Procedure at Motiur's Dental: Step by Step</h2>
      <p className="mt-3 text-foreground/85 leading-relaxed">
        We want our patients to know exactly what happens during the procedure so there are no surprises.
      </p>

      <div className="mt-6 flex flex-col md:flex-row gap-6 items-start">
        <div className="flex-1 grid gap-4">
          {[
            { title: "Step 1: Examination and Diagnosis", desc: "We carry out a thorough examination including dental X-rays to see the shape of the root canals and identify any signs of infection in the surrounding bone. We may also perform sensitivity tests to assess the condition of the pulp accurately." },
            { title: "Step 2: Local Anesthesia", desc: "We numb the area around the affected tooth completely using local anesthesia. Once the anesthesia takes effect, you will not feel pain during the procedure." },
            { title: "Step 3: Isolating the Tooth", desc: "A thin sheet of rubber called a dental dam is placed around the tooth. This keeps the treatment area clean, dry, and free from saliva throughout the procedure." },
            { title: "Step 4: Creating the Access Opening", desc: "A small opening is carefully made through the crown of the tooth to reach the pulp chamber and the root canals below." },
            { title: "Step 5: Removing the Infected Pulp", desc: "Using very fine specialized instruments, the dentist removes the infected or inflamed pulp from the pulp chamber and from each root canal. The canals are shaped carefully to allow thorough cleaning and proper sealing." },
            { title: "Step 6: Cleaning and Disinfecting", desc: "The canals are thoroughly irrigated with disinfecting solutions to eliminate any remaining bacteria. The canal walls are also smoothed and shaped to ensure the filling material will seal them properly." },
            { title: "Step 7: Filling the Canals", desc: "The cleaned canals are filled with a biocompatible rubber-like material called gutta-percha. A sealing cement is used along with the gutta-percha to ensure a tight and complete seal." },
            { title: "Step 8: Temporary Filling", desc: "A temporary filling is placed over the access opening to protect the tooth while it heals. You will return for a separate appointment to have the permanent restoration placed." },
            { title: "Step 9: Crown Placement", desc: "In most cases, a tooth that has had root canal treatment needs a dental crown to protect it. The crown covers the entire tooth, restoring its strength, shape, and appearance." },
          ].map((step) => (
            <div key={step.title} className="bg-card border border-border rounded-xl p-5">
              <h3 className="font-display font-bold text-lg text-foreground">{step.title}</h3>
              <p className="text-muted-foreground mt-1 text-sm">{step.desc}</p>
            </div>
          ))}
        </div>
        <div className="w-full md:w-64 shrink-0 rounded-xl overflow-hidden border border-border md:sticky md:top-24">
          <img src={stepsImg} alt="Step by step root canal treatment procedure diagram" className="w-full h-auto object-contain" loading="lazy" />
        </div>
      </div>

      {/* Why a Crown is Important */}
      <h2 className="text-2xl md:text-3xl font-display font-bold mt-12 text-foreground">Why a Crown is Important After Root Canal Treatment</h2>
      <p className="mt-3 text-foreground/85 leading-relaxed">
        When the pulp is removed from a tooth, the tooth loses its internal moisture supply. Over time this makes the tooth structure more brittle. A crown acts as a protective shell around the tooth, preventing it from cracking under normal biting and chewing pressure.
      </p>
      <p className="mt-3 text-foreground/85 leading-relaxed">
        A crown also creates a tight seal over the treated tooth, preventing bacteria from finding their way back into the root canal system. Without a crown, the temporary filling material can wear down or leak over time, allowing reinfection.
      </p>

      {/* Types of Crowns */}
      <h2 className="text-2xl md:text-3xl font-display font-bold mt-12 text-foreground">Types of Crowns Available at Motiur's Dental After Root Canal</h2>
      <div className="space-y-6 my-6">
        {[
          { title: "Porcelain Crowns", img: porcelainCrownImg, alt: "Porcelain dental crowns showing natural tooth-like appearance at Motiur's Dental", desc: "The most popular choice for front teeth and visible areas. They are crafted to match the color and translucency of natural teeth and look completely natural." },
          { title: "Zirconia Crowns", img: zirconiaCrownImg, alt: "Zirconia dental crowns - metal-free and biocompatible at Motiur's Dental", desc: "One of the strongest materials used in dentistry today. Completely metal-free, highly biocompatible, and offer an excellent natural appearance." },
          { title: "Metal Crowns", img: metalCrownImg, alt: "Metal dental crowns - durable option for back teeth at Motiur's Dental", desc: "The most durable option for back teeth that experience heavy chewing forces. Less commonly used today due to their visible metallic appearance, but an excellent functional choice for molars." },
        ].map((item, idx) => (
          <div key={item.title} className={`flex flex-col md:flex-row ${idx % 2 !== 0 ? 'md:flex-row-reverse' : ''} gap-4 bg-card border border-border rounded-xl overflow-hidden`}>
            <div className="md:w-2/5 flex-shrink-0">
              <img src={item.img} alt={item.alt} className="w-full h-48 md:h-full object-cover" loading="lazy" />
            </div>
            <div className="p-5 flex flex-col justify-center">
              <h3 className="font-display font-bold text-lg text-foreground">{item.title}</h3>
              <p className="text-muted-foreground mt-1 text-sm">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>

      {/* How Long After Root Canal */}
      <h2 className="text-2xl md:text-3xl font-display font-bold mt-12 text-foreground">How Long After Root Canal Treatment Should You Get a Crown?</h2>
      <p className="mt-3 text-foreground/85 leading-relaxed">
        We generally recommend getting your permanent crown within 30 days of completing the root canal. The temporary filling placed at the end of the root canal is not designed for long-term use. The longer you wait, the higher the risk of the temporary filling breaking down or bacteria finding their way back in.
      </p>

      {/* Cost */}
      <h2 className="text-2xl md:text-3xl font-display font-bold mt-12 text-foreground" id="root-canal-cost-comilla">Root Canal Treatment Cost in Debidwar, Comilla</h2>
      <p className="mt-3 text-foreground/85 leading-relaxed">
        The cost of root canal treatment in Bangladesh varies depending on which tooth is being treated, how many canals the tooth has, whether a crown is needed, and the complexity of the case.
      </p>
      <p className="mt-3 text-foreground/85 leading-relaxed">
        Average root canal costs in Bangladesh range from BDT 5,000 to BDT 20,000 depending on these factors. At Motiur's Dental in Debidwar, our prices are at the more affordable end of this range, making us one of the lowest-cost options for root canal treatment in the Comilla district.
      </p>
      <p className="mt-3 text-foreground/85 leading-relaxed">
        We give every patient a clear, honest cost breakdown during the consultation. You will know exactly what the treatment will cost before anything begins.
      </p>
      <p className="mt-3 text-foreground/85 leading-relaxed">
        Patients from Debidwar, Muradnagar, Chandina, Brahmanpara, Burichang, Homna, and Comilla city regularly choose Motiur's Dental specifically because they get professional-quality root canal treatment at a price that other clinics in the area simply cannot match.
      </p>

      <div className="bg-primary/10 rounded-xl p-5 my-6 text-center">
        <p className="font-display font-bold text-lg text-foreground mb-2">Get Your Cost Estimate</p>
        <a href={telLink} className="text-primary font-bold text-xl hover:underline">
          Call {CLINIC.phone}
        </a>
      </div>

      {/* Aftercare */}
      <h2 className="text-2xl md:text-3xl font-display font-bold mt-12 text-foreground">Aftercare: What to Do After Root Canal Treatment</h2>
      <ul className="space-y-4 my-6 list-none p-0">
        <Bullet>
          For the first day or two, you may experience some tenderness around the treated tooth. Over-the-counter pain relievers are usually sufficient to manage this discomfort.
        </Bullet>
        <Bullet>
          Avoid chewing on the treated side until your permanent crown has been placed. The temporary filling is not strong enough to withstand heavy biting forces.
        </Bullet>
        <Bullet>
          Continue brushing and flossing normally throughout your recovery, but be gentle around the treated area.
        </Bullet>
        <Bullet>
          Avoid very hard, crunchy, or sticky foods until the crown has been placed and you have had time to adjust to it.
        </Bullet>
        <Bullet>
          If you notice sudden swelling, severe pain that is getting worse, or the temporary filling comes out, contact Motiur's Dental immediately at <a href={telLink} className="text-primary hover:underline font-semibold">{CLINIC.phone}</a>.
        </Bullet>
      </ul>

      {/* FAQ */}
      <h2 className="text-2xl md:text-3xl font-display font-bold mt-12 text-foreground">Frequently Asked Questions</h2>
      <div className="space-y-4 my-6">
        {[
          { q: "Does root canal treatment hurt?", a: "No. The procedure is performed under local anesthesia so you will not feel pain during the treatment. What root canal treatment actually does is relieve the pain caused by the infection." },
          { q: "How long does a root canal take?", a: "A straightforward root canal on a front tooth can be completed in one appointment lasting 60 to 90 minutes. More complex cases involving molar teeth with multiple canals may require two appointments." },
          { q: "Can I drive after a root canal?", a: "In most cases yes. The local anesthesia does not affect your ability to drive. However, you should wait until the numbness has worn off before eating." },
          { q: "Do I always need a crown after a root canal?", a: "For back teeth, a crown is strongly recommended because they bear the brunt of chewing forces. For front teeth, a crown may still be recommended but the urgency is slightly lower." },
          { q: "How long does a root canal treated tooth last?", a: "With a proper crown and good oral hygiene, a root canal treated tooth can last a lifetime. Many patients keep their treated teeth for decades with no further problems." },
          { q: "What happens if I do not get a root canal when I need one?", a: "The infection will worsen. It can spread to surrounding teeth, the jawbone, and nearby tissue. The tooth will eventually become unrestorable and will need to be extracted." },
          { q: "Is a root canal the same as extraction?", a: "No. A root canal saves your natural tooth. An extraction removes it entirely. We always recommend saving the natural tooth whenever possible." },
          { q: "My tooth stopped hurting on its own. Do I still need a root canal?", a: "Possibly yes. Sometimes the pain subsides when the pulp dies, because the nerve is no longer alive. But the infection itself does not go away. It continues to spread silently." },
          { q: "What is the cost of root canal treatment in Comilla?", a: "Costs vary depending on the tooth and complexity. At Motiur's Dental in Debidwar, we offer some of the most affordable root canal prices in the Comilla district. Call 01816010194 for a specific estimate." },
          { q: "Can root canal treatment fail?", a: "Root canal treatment has a very high success rate when performed properly. In rare cases, reinfection can occur. If this happens, a retreatment procedure can often resolve the problem." },
          { q: "How soon can I eat after a root canal?", a: "Wait until the numbness has completely worn off, which usually takes two to four hours. Eat on the opposite side from the treated tooth until your permanent crown is in place." },
        ].map((faq, i) => (
          <details key={i} className="group bg-card border border-border rounded-xl overflow-hidden">
            <summary className="flex items-center justify-between p-5 cursor-pointer font-display font-semibold text-foreground hover:text-primary transition-colors">
              {faq.q}
              <svg className="h-4 w-4 text-muted-foreground group-open:rotate-90 transition-transform shrink-0" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2"><path d="M6 4l4 4-4 4" /></svg>
            </summary>
            <div className="px-5 pb-5 text-muted-foreground text-sm">{faq.a}</div>
          </details>
        ))}
      </div>

      {/* CTA */}
      <div className="bg-hero-gradient rounded-2xl p-8 text-center my-12">
        <h2 className="font-display font-extrabold text-2xl md:text-3xl text-foreground mb-3">
          Book Your Root Canal Consultation at Motiur's Dental
        </h2>
        <p className="text-muted-foreground max-w-xl mx-auto mb-6">
          If you have tooth pain, sensitivity, swelling, or any of the other signs we discussed, do not put off getting it checked. The earlier an infected tooth is treated, the simpler and less expensive the treatment will be. We serve patients from Debidwar, Muradnagar, Chandina, Brahmanpara, Burichang, Homna, and all across Comilla district.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <a href={telLink} className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-xl font-bold hover:opacity-90 transition">
            <Phone className="h-5 w-5" /> Call {CLINIC.phone}
          </a>
          <a href="https://maps.app.goo.gl/5httN8nCiNWv5weU7" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 border border-border text-foreground px-6 py-3 rounded-xl font-bold hover:bg-muted transition">
            <MapPin className="h-5 w-5" /> Debidwar, Comilla
          </a>
        </div>
      </div>
    </article>
  );
};

export default RootCanalArticle;

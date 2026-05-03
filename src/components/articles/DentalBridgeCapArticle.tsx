import { Phone, MapPin } from "lucide-react";
import { CLINIC, telLink } from "@/lib/clinic";

const Bullet = ({ children }: { children: React.ReactNode }) => (
  <li className="relative pl-6 before:content-[''] before:absolute before:left-0 before:top-[10px] before:w-2.5 before:h-2.5 before:rounded-full before:bg-primary/70 before:rotate-3">
    {children}
  </li>
);

const DentalBridgeCapArticle = () => {
  return (
    <article className="max-w-none">

      <h1 className="text-3xl md:text-4xl lg:text-5xl font-display font-extrabold text-foreground mb-6 leading-tight">
        Dental Bridge and Dental Cap in Debidwar, Comilla
      </h1>

      <p className="text-lg leading-relaxed text-foreground/90">
        Missing teeth and damaged teeth affect far more than just your appearance. They change how you chew, how you speak, and over time they affect the alignment of your remaining teeth, the shape of your face, and the health of your jawbone. At <strong>Motiur's Dental in Debidwar, Comilla</strong>, we restore damaged and missing teeth with high-quality dental caps and dental bridges that look completely natural, function like real teeth, and last for many years with proper care.
      </p>
      <p className="mt-4 text-foreground/85 leading-relaxed">
        Whether you have a single cracked tooth that needs a crown, a gap left by a missing tooth that needs a bridge, or multiple teeth that need restoring, we provide the right solution at prices that are significantly more affordable than other dental clinics in the Comilla district.
      </p>

      <div className="bg-primary/5 border border-primary/20 rounded-2xl p-6 my-8 flex flex-col sm:flex-row gap-4 items-start sm:items-center">
        <div className="flex items-center gap-2 text-primary font-semibold">
          <Phone className="h-5 w-5" />
          <a href={telLink} className="hover:underline">Call us: {CLINIC.phone}</a>
        </div>
        <div className="flex items-center gap-2 text-muted-foreground">
          <MapPin className="h-5 w-5" />
          <span>Debidwar, Comilla, Bangladesh</span>
        </div>
      </div>

      {/* What is a Dental Cap */}
      <h2 className="text-2xl md:text-3xl font-display font-bold mt-12 text-foreground">What is a Dental Cap?</h2>
      <p className="mt-3 text-foreground/85 leading-relaxed">
        A dental cap, also known as a dental crown, is a tooth-shaped covering that fits over an existing damaged tooth. It encases the entire visible portion of the tooth above the gum line, restoring its original shape, size, strength, and appearance.
      </p>
      <p className="mt-3 text-foreground/85 leading-relaxed">
        The procedure involves removing a small layer of enamel from the outer surface of the tooth to create room for the crown. An impression is then taken and a custom crown is fabricated in a dental laboratory. A temporary crown is placed while the permanent one is being made. Once placed, a dental crown looks and functions exactly like a natural tooth.
      </p>

      {/* What Problems Does a Dental Cap Fix */}
      <h2 className="text-2xl md:text-3xl font-display font-bold mt-12 text-foreground">What Problems Does a Dental Cap Fix?</h2>
      <ul className="space-y-4 my-6 list-none p-0">
        <Bullet><strong>Severely cracked or fractured teeth:</strong> A crown holds the tooth together, prevents the crack from spreading, and restores full biting function.</Bullet>
        <Bullet><strong>Severely decayed teeth:</strong> When decay has destroyed so much tooth structure that a filling would not provide adequate support, a crown rebuilds the tooth completely.</Bullet>
        <Bullet><strong>Weak or worn teeth:</strong> Teeth worn down over years of grinding, or structurally weak due to large old fillings, benefit enormously from crown placement.</Bullet>
        <Bullet><strong>Discolored or misshapen teeth:</strong> Teeth that are significantly discolored, peg-shaped, or abnormally formed can be completely transformed with a crown matched to surrounding teeth.</Bullet>
        <Bullet><strong>After root canal treatment:</strong> A tooth that has undergone root canal treatment is more brittle and prone to fracture. Placing a crown is standard practice to protect it.</Bullet>
        <Bullet><strong>Supporting a dental bridge:</strong> Crowns on teeth on either side of a gap serve as anchors for a dental bridge.</Bullet>
      </ul>

      {/* Types of Dental Caps */}
      <h2 className="text-2xl md:text-3xl font-display font-bold mt-12 text-foreground">Types of Dental Caps Available at Motiur's Dental</h2>
      <div className="grid gap-4 my-6">
        {[
          { title: "Zirconia Crowns", desc: "The most popular crown material. Combines exceptional strength with excellent aesthetics. Highly resistant to fracture, completely metal-free, and biocompatible. Suitable for both front and back teeth. Last 15 years or more with proper care." },
          { title: "Porcelain Crowns", desc: "Offer the most natural appearance. The material closely mimics the color, texture, and translucency of natural enamel. Particularly well suited for front teeth where appearance is critical. Typically last 10 to 15 years." },
          { title: "Porcelain-Fused-to-Metal (PFM) Crowns", desc: "Metal inner structure for strength with a porcelain outer layer for aesthetics. Good combination of durability and appearance. A more budget-friendly option, though the metal may show at the gum line over time." },
          { title: "Metal Crowns (Gold or Silver Alloy)", desc: "The most durable option. Require the least removal of natural tooth structure. Withstand biting forces extremely well. Only used on back molars due to their metallic appearance. Often last 20 years or more." },
        ].map((item) => (
          <div key={item.title} className="bg-card border border-border rounded-xl p-5">
            <h3 className="font-display font-bold text-lg text-foreground">{item.title}</h3>
            <p className="text-muted-foreground mt-1 text-sm">{item.desc}</p>
          </div>
        ))}
      </div>

      {/* What is a Dental Bridge */}
      <h2 className="text-2xl md:text-3xl font-display font-bold mt-12 text-foreground">What is a Dental Bridge?</h2>
      <p className="mt-3 text-foreground/85 leading-relaxed">
        A dental bridge is a fixed dental restoration used to replace one or more missing teeth. It literally bridges the gap where teeth are missing, using the natural teeth on either side as anchors. A traditional bridge consists of two dental crowns on the abutment teeth with one or more artificial teeth (pontics) suspended between them. The entire structure is cemented permanently into place.
      </p>

      {/* Why Missing Teeth Must Be Replaced */}
      <h2 className="text-2xl md:text-3xl font-display font-bold mt-12 text-foreground">Why Missing Teeth Must Be Replaced</h2>
      <ul className="space-y-4 my-6 list-none p-0">
        <Bullet>When a tooth is lost, the jawbone in that area begins to lose density. Without root stimulation, the bone gradually shrinks, changing the shape of the jaw.</Bullet>
        <Bullet>Teeth on either side of the gap and the tooth above or below it gradually shift toward the empty space, disrupting alignment and bite.</Bullet>
        <Bullet>A gap at the back affects chewing efficiency, causing uneven stress on the jaw joint. A gap at the front directly affects appearance, confidence, and speech.</Bullet>
        <Bullet>A dental bridge, placed promptly after tooth loss, prevents all of these consequences.</Bullet>
      </ul>

      {/* Types of Dental Bridges */}
      <h2 className="text-2xl md:text-3xl font-display font-bold mt-12 text-foreground">Types of Dental Bridges at Motiur's Dental</h2>
      <div className="grid gap-4 my-6">
        {[
          { title: "Traditional Dental Bridge", desc: "The most commonly used type. Two crowns are placed on the teeth on either side of the gap, anchoring one or more artificial teeth between them. Highly stable and durable." },
          { title: "Cantilever Bridge", desc: "Used when there is only one natural tooth adjacent to the gap. The crown is placed on a single anchor tooth and the pontic extends from it. Appropriate in specific situations." },
          { title: "Maryland Bridge", desc: "A more conservative option primarily for front teeth. Metal or ceramic wings are bonded to the back surfaces of neighboring teeth, preserving more natural tooth structure. Best for areas of lower biting force." },
          { title: "Implant-Supported Bridge", desc: "Uses dental implants rather than natural teeth as anchor points for multiple missing adjacent teeth. Does not require alteration of remaining natural teeth and stimulates the jawbone like natural roots." },
        ].map((item) => (
          <div key={item.title} className="bg-card border border-border rounded-xl p-5">
            <h3 className="font-display font-bold text-lg text-foreground">{item.title}</h3>
            <p className="text-muted-foreground mt-1 text-sm">{item.desc}</p>
          </div>
        ))}
      </div>

      {/* Bridge vs Implant */}
      <h2 className="text-2xl md:text-3xl font-display font-bold mt-12 text-foreground">Dental Bridge vs Dental Implant: Which is Right for You?</h2>
      <p className="mt-3 text-foreground/85 leading-relaxed">
        Both are excellent solutions for replacing missing teeth. A dental implant replaces the entire tooth including the root, stimulates bone preservation, and does not require alteration of neighboring teeth. However, it requires surgery, a healing period of several months, and has a higher upfront cost.
      </p>
      <p className="mt-3 text-foreground/85 leading-relaxed">
        A dental bridge replaces the visible portion without surgery, is faster to complete, and involves a lower upfront cost. The limitation is that it requires neighboring teeth to be prepared with crowns and does not address bone loss below the missing tooth.
      </p>
      <p className="mt-3 text-foreground/85 leading-relaxed">
        At Motiur's Dental, we assess your specific situation and give you an honest recommendation based on your oral health, bone condition, budget, and timeline.
      </p>

      {/* Cap Procedure */}
      <h2 className="text-2xl md:text-3xl font-display font-bold mt-12 text-foreground">The Dental Cap Procedure Step by Step</h2>
      <ol className="space-y-2 my-6 list-decimal list-inside text-foreground/85 marker:text-primary marker:font-bold">
        <li><strong>Consultation and examination:</strong> We examine the tooth, take X-rays, and determine whether a crown is appropriate. We discuss material options and give you a cost estimate.</li>
        <li><strong>Tooth preparation:</strong> We numb the area and reshape the tooth by removing a thin layer of enamel from all surfaces.</li>
        <li><strong>Impressions:</strong> A precise impression is sent to the laboratory where your custom crown is fabricated.</li>
        <li><strong>Temporary crown:</strong> A temporary crown protects the prepared tooth while the permanent one is being made.</li>
        <li><strong>Permanent crown placement:</strong> The permanent crown is tried, checked for fit, appearance, and bite, then cemented permanently.</li>
      </ol>
      <p className="mt-3 text-foreground/85">The entire process typically takes two to three weeks.</p>

      {/* Bridge Procedure */}
      <h2 className="text-2xl md:text-3xl font-display font-bold mt-12 text-foreground">The Dental Bridge Procedure Step by Step</h2>
      <ol className="space-y-2 my-6 list-decimal list-inside text-foreground/85 marker:text-primary marker:font-bold">
        <li><strong>Consultation and assessment:</strong> We examine your mouth, take X-rays, and assess whether a bridge is suitable. We discuss types, materials, and provide a cost estimate.</li>
        <li><strong>Preparation of abutment teeth:</strong> The teeth on either side of the gap are prepared with local anesthesia. A thin layer of enamel is removed.</li>
        <li><strong>Impressions:</strong> A full impression goes to the laboratory where the entire bridge unit is custom fabricated.</li>
        <li><strong>Temporary bridge:</strong> A temporary bridge protects the prepared teeth while the permanent bridge is made.</li>
        <li><strong>Permanent bridge placement:</strong> The permanent bridge is checked for fit, color, and bite alignment, then cemented permanently.</li>
      </ol>

      {/* Care */}
      <h2 className="text-2xl md:text-3xl font-display font-bold mt-12 text-foreground">How to Care for Your Dental Cap or Bridge</h2>
      <ul className="space-y-4 my-6 list-none p-0">
        <Bullet>Brush twice daily with a soft-bristled toothbrush and fluoride toothpaste. Pay attention to the margin where the crown meets the gum line.</Bullet>
        <Bullet>For bridges, use a floss threader or interdental brush to clean under the pontic and around the abutment crowns daily.</Bullet>
        <Bullet>Avoid biting down on extremely hard objects with a crowned tooth, particularly porcelain crowns.</Bullet>
        <Bullet>If you grind your teeth at night, wear a nightguard to protect your crowns and bridges.</Bullet>
        <Bullet>Attend regular checkups at Motiur's Dental so we can monitor the condition of your restoration.</Bullet>
      </ul>

      {/* Cost */}
      <h2 className="text-2xl md:text-3xl font-display font-bold mt-12 text-foreground">Dental Cap and Bridge Cost in Debidwar, Comilla</h2>
      <p className="mt-3 text-foreground/85">
        The cost varies depending on the material chosen, number of teeth involved, and complexity of the case. At Motiur's Dental in Debidwar, we offer dental caps and bridges at prices that are among the most affordable in the Comilla district. Patients from Debidwar, Muradnagar, Chandina, Brahmanpara, Burichung, Homna, and Comilla city regularly choose us for the same quality at a significantly lower cost.
      </p>
      <div className="bg-primary/10 rounded-xl p-5 my-6 text-center">
        <p className="font-display font-bold text-lg text-foreground mb-2">Get Your Cost Estimate</p>
        <a href={telLink} className="text-primary font-bold text-xl hover:underline">
          Call {CLINIC.phone}
        </a>
      </div>

      {/* FAQ */}
      <h2 className="text-2xl md:text-3xl font-display font-bold mt-12 text-foreground">Frequently Asked Questions About Dental Caps and Bridges</h2>
      <div className="space-y-4 my-6">
        {[
          { q: "What is the difference between a dental cap and a dental crown?", a: "There is no difference at all. Dental cap and dental crown are two names for exactly the same restoration." },
          { q: "Is getting a dental cap painful?", a: "The procedure is carried out under local anesthesia so you will not feel pain during treatment. You may experience some mild sensitivity or soreness for a few days afterward, which is normal and manageable." },
          { q: "How long does a dental cap last?", a: "Metal crowns can last 20 years or more. Zirconia crowns typically last 15 years or longer. Porcelain crowns generally last 10 to 15 years. With good oral hygiene and regular checkups, all types can last at the upper end of these ranges." },
          { q: "How long does a dental bridge last?", a: "With proper care including regular cleaning under the bridge and regular dental checkups, most dental bridges last between 10 and 15 years. Some last considerably longer." },
          { q: "Can I eat normally with a dental bridge?", a: "Yes. Once the permanent bridge is cemented and you have adjusted to it, you can eat normally. We advise avoiding extremely hard or sticky foods." },
          { q: "Is a dental bridge better than a dental implant?", a: "Both are effective. A bridge is faster and has a lower upfront cost. An implant is more comprehensive, preserves the jawbone, and does not require altering neighboring teeth. The right choice depends on your specific situation." },
          { q: "Do I need a crown after root canal treatment?", a: "In most cases, yes. Particularly for back teeth that bear chewing forces. A crown protects the brittle tooth from fracturing." },
          { q: "What happens if I do not replace a missing tooth?", a: "Neighboring teeth shift toward the gap, bone loss occurs in the jaw, your bite alignment changes, and chewing efficiency decreases. These changes accumulate over time." },
          { q: "Can I get a bridge if I have multiple missing teeth?", a: "Yes. A bridge can replace multiple adjacent missing teeth. The configuration depends on the number and location of the missing teeth." },
          { q: "What is the cost of a dental crown in Comilla?", a: "Costs vary by material and complexity. At Motiur's Dental in Debidwar, we offer some of the most affordable crown and bridge pricing in the Comilla district. Call 01816010194 for a personalized estimate." },
          { q: "Can I get a dental bridge in Debidwar without going to Comilla city?", a: "Yes, absolutely. Motiur's Dental in Debidwar offers full dental cap and bridge services including all crown materials, all bridge types, and implant-supported bridge options." },
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
          Book Your Dental Cap or Bridge Consultation
        </h2>
        <p className="text-muted-foreground max-w-xl mx-auto mb-6">
          Whether you have a damaged tooth that needs a crown or a gap from a missing tooth that needs a bridge, Motiur's Dental in Debidwar is the right place to start. We serve patients from Debidwar, Muradnagar, Chandina, Brahmanpara, Burichung, Homna, and all across Comilla district.
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

export default DentalBridgeCapArticle;

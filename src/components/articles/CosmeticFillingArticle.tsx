import { Phone, MapPin, CheckCircle2, ChevronRight } from "lucide-react";
import { CLINIC, telLink } from "@/lib/clinic";

const CosmeticFillingArticle = () => {
  return (
    <article className="prose prose-lg max-w-none dark:prose-invert">
      {/* Intro */}
      <p className="text-lg leading-relaxed">
        If you have a chipped, cracked, or discolored tooth, you do not have to live with it. At <strong>Motiur's Dental in Debidwar, Comilla</strong>, we help patients restore their smiles with high-quality <strong>cosmetic teeth fillings</strong> at a cost that is genuinely affordable. We are one of the few dental clinics in the Debidwar and Comilla area where you get professional-grade treatment without paying city-level prices.
      </p>

      <div className="not-prose bg-primary/5 border border-primary/20 rounded-2xl p-6 my-8 flex flex-col sm:flex-row gap-4 items-start sm:items-center">
        <div className="flex items-center gap-2 text-primary font-semibold">
          <Phone className="h-5 w-5" />
          <a href={telLink} className="hover:underline">Call us today: {CLINIC.phone}</a>
        </div>
        <div className="flex items-center gap-2 text-muted-foreground">
          <MapPin className="h-5 w-5" />
          <span>Debidwar, Comilla, Bangladesh</span>
        </div>
      </div>

      {/* What is */}
      <h2 className="text-2xl md:text-3xl font-display font-bold mt-12">What is a Cosmetic Teeth Filling?</h2>
      <p>
        A cosmetic filling, also called a <strong>tooth-colored filling</strong> or <strong>composite filling</strong>, is a dental restoration that repairs a damaged tooth while keeping it looking completely natural. The material used is a composite resin that your dentist matches to the exact shade of your surrounding teeth. Once placed, it blends in so well that most people cannot even tell it is there.
      </p>
      <p>
        This is very different from the old silver amalgam fillings. Those were strong but visible. Cosmetic fillings give you the <em>strength you need</em> and the <em>appearance you want</em>.
      </p>

      {/* What problems */}
      <h2 className="text-2xl md:text-3xl font-display font-bold mt-12">What Problems Can Cosmetic Fillings Fix?</h2>
      <p>At Motiur's Dental, we use cosmetic fillings to treat a wide range of common dental issues:</p>
      <ul className="space-y-3 my-6">
        <li className="flex items-start gap-3">
          <CheckCircle2 className="h-5 w-5 text-primary mt-1 shrink-0" />
          <span><strong>Chipped or cracked teeth</strong> — Whether it happened from an accident or just everyday wear, a cosmetic filling can rebuild the shape and strength of your tooth.</span>
        </li>
        <li className="flex items-start gap-3">
          <CheckCircle2 className="h-5 w-5 text-primary mt-1 shrink-0" />
          <span><strong>Tooth decay and cavities</strong> — Early-stage cavities respond very well to composite fillings. Treating them early also stops the decay from spreading further.</span>
        </li>
        <li className="flex items-start gap-3">
          <CheckCircle2 className="h-5 w-5 text-primary mt-1 shrink-0" />
          <span><strong>Discolored teeth</strong> — If a tooth has mild to moderate staining or discoloration, a filling can cover it and bring back a natural, even look.</span>
        </li>
        <li className="flex items-start gap-3">
          <CheckCircle2 className="h-5 w-5 text-primary mt-1 shrink-0" />
          <span><strong>Gaps between teeth</strong> — Small gaps between front teeth can often be closed with a cosmetic filling, giving you a more uniform smile without needing braces or veneers.</span>
        </li>
      </ul>

      {/* Why choose */}
      <h2 className="text-2xl md:text-3xl font-display font-bold mt-12">Why Choose Motiur's Dental in Debidwar?</h2>
      <p>There are several dental clinics in Comilla district, but here is what makes Motiur's Dental different:</p>
      <ul className="space-y-3 my-6">
        <li className="flex items-start gap-3">
          <ChevronRight className="h-5 w-5 text-primary mt-1 shrink-0" />
          <span><strong>Lowest cost in the area</strong> — Patients from Debidwar, Muradnagar, Chandina, Brahmanpara, and Comilla city regularly choose us because our fees are significantly lower than other clinics, with no drop in quality.</span>
        </li>
        <li className="flex items-start gap-3">
          <ChevronRight className="h-5 w-5 text-primary mt-1 shrink-0" />
          <span><strong>No unnecessary procedures</strong> — We only recommend what you actually need. You will never be pushed into a treatment that is not right for your situation.</span>
        </li>
        <li className="flex items-start gap-3">
          <ChevronRight className="h-5 w-5 text-primary mt-1 shrink-0" />
          <span><strong>Comfortable and pain-free experience</strong> — We use local anesthesia so the procedure is as comfortable as possible. Most patients are surprised by how smooth and quick it is.</span>
        </li>
        <li className="flex items-start gap-3">
          <ChevronRight className="h-5 w-5 text-primary mt-1 shrink-0" />
          <span><strong>Local and trusted</strong> — We are part of the Debidwar community. You do not need to travel to Comilla city or Dhaka for good dental care.</span>
        </li>
      </ul>

      {/* Types */}
      <h2 className="text-2xl md:text-3xl font-display font-bold mt-12">Types of Fillings Available at Motiur's Dental</h2>
      <div className="not-prose grid gap-4 my-6">
        {[
          { title: "Composite (Tooth-Colored) Fillings", desc: "The most popular option. The material matches your tooth color perfectly and bonds directly to the tooth structure. Great for front teeth, small cavities, and gap filling." },
          { title: "Amalgam Fillings", desc: "Silver-colored fillings made from a metal alloy. Very durable, often used for back teeth where biting pressure is higher. Also the most budget-friendly option." },
          { title: "Porcelain Fillings (Inlays & Onlays)", desc: "Custom-made restorations for larger areas of damage. Incredibly strong, stain-resistant, and very natural-looking." },
        ].map((item) => (
          <div key={item.title} className="bg-card border border-border rounded-xl p-5">
            <h3 className="font-display font-bold text-lg text-foreground">{item.title}</h3>
            <p className="text-muted-foreground mt-1 text-sm">{item.desc}</p>
          </div>
        ))}
      </div>

      {/* Procedure */}
      <h2 className="text-2xl md:text-3xl font-display font-bold mt-12">How the Filling Procedure Works</h2>
      <p>People often worry about dental procedures, but at Motiur's Dental the process is simple and straightforward:</p>
      <ol className="space-y-2 my-6 list-decimal list-inside marker:text-primary marker:font-bold">
        <li>We examine your tooth and talk through your options.</li>
        <li>We apply local anesthesia to numb the area completely.</li>
        <li>We remove any decayed or damaged tissue and clean the tooth.</li>
        <li>We place the filling material — for composite fillings, a special curing light hardens the resin.</li>
        <li>We polish it so it feels and looks natural.</li>
      </ol>
      <p>The whole process usually takes <strong>one appointment</strong>.</p>

      {/* How long - TARGET KEYWORD */}
      <h2 className="text-2xl md:text-3xl font-display font-bold mt-12" id="how-long-do-front-teeth-fillings-last">
        How Long Do Cosmetic Fillings Last?
      </h2>
      <p>
        This is one of the most common questions patients ask. <strong>Composite resin fillings generally last between 5 and 10 years</strong> with proper care. Porcelain fillings can last even longer.
      </p>
      <p>The main factors that affect lifespan are:</p>
      <ul className="space-y-1 my-4">
        <li>✅ Your oral hygiene routine</li>
        <li>✅ Your diet</li>
        <li>✅ Whether you grind your teeth</li>
        <li>✅ Where in the mouth the filling is placed</li>
      </ul>
      <p>
        To get the most out of your filling, brush twice a day, floss daily, avoid very hard or sticky foods, and visit us for regular checkups. If you grind your teeth at night, let us know — we can suggest a simple solution for that too.
      </p>

      {/* Cost - TARGET KEYWORD */}
      <h2 className="text-2xl md:text-3xl font-display font-bold mt-12" id="cosmetic-filling-cost-comilla">
        Teeth Filling Cost in Debidwar, Comilla
      </h2>
      <p>
        The <strong>cost of a dental filling in Bangladesh</strong> varies based on the type of filling, how many teeth need treatment, and how complex the case is. At Motiur's Dental, we keep our prices <strong>lower than other clinics in Comilla</strong> without compromising on materials or technique.
      </p>
      <p>
        For an exact price, we recommend coming in for a consultation. We will examine your teeth, explain your options clearly, and give you a straightforward cost estimate with no hidden charges.
      </p>
      <div className="not-prose bg-primary/10 rounded-xl p-5 my-6 text-center">
        <p className="font-display font-bold text-lg text-foreground mb-2">Get Your Cost Estimate</p>
        <a href={telLink} className="text-primary font-bold text-xl hover:underline">
          📞 Call {CLINIC.phone}
        </a>
      </div>

      {/* FAQ - TARGET KEYWORDS */}
      <h2 className="text-2xl md:text-3xl font-display font-bold mt-12">Frequently Asked Questions</h2>
      <div className="not-prose space-y-4 my-6">
        {[
          { q: "Is dental filling painful?", a: "No. We use local anesthesia so you feel little to no discomfort during the procedure." },
          { q: "Can I fill the gap between my teeth?", a: "Yes, in many cases a cosmetic filling is a great option for closing small gaps between front teeth. We will assess your situation and let you know if it is suitable." },
          { q: "How long do front teeth fillings last?", a: "With good oral hygiene and regular checkups, composite fillings on front teeth typically last 5 to 10 years." },
          { q: "Are dental fillings permanent?", a: "They are not permanent, but they are long-lasting. Over time they may need to be replaced, which is why regular dental checkups matter." },
          { q: "What is the cheapest filling option?", a: "Amalgam fillings are generally the most affordable. However, most of our patients prefer composite fillings for their natural appearance. We offer both at competitive prices." },
          { q: "Should I avoid temporary fillings from a pharmacy?", a: "Yes. Temporary fillings from a shop are not a real solution. They can trap bacteria and make things worse. If you have lost a filling, call us right away at 01816010194." },
        ].map((faq, i) => (
          <details key={i} className="group bg-card border border-border rounded-xl overflow-hidden">
            <summary className="flex items-center justify-between p-5 cursor-pointer font-display font-semibold text-foreground hover:text-primary transition-colors">
              {faq.q}
              <ChevronRight className="h-4 w-4 text-muted-foreground group-open:rotate-90 transition-transform" />
            </summary>
            <div className="px-5 pb-5 text-muted-foreground text-sm">{faq.a}</div>
          </details>
        ))}
      </div>

      {/* CTA */}
      <div className="not-prose bg-hero-gradient rounded-2xl p-8 text-center my-12">
        <h2 className="font-display font-extrabold text-2xl md:text-3xl text-foreground mb-3">
          Book Your Appointment at Motiur's Dental
        </h2>
        <p className="text-muted-foreground max-w-xl mx-auto mb-6">
          Your smile matters, and fixing a damaged tooth does not have to be expensive or stressful. At Motiur's Dental in Debidwar, Comilla, we make quality dental care accessible to everyone.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <a href={telLink} className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-xl font-bold hover:opacity-90 transition">
            <Phone className="h-5 w-5" /> Call {CLINIC.phone}
          </a>
          <a href={`https://maps.app.goo.gl/5httN8nCiNWv5weU7`} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 border border-border text-foreground px-6 py-3 rounded-xl font-bold hover:bg-muted transition">
            <MapPin className="h-5 w-5" /> Debidwar, Comilla
          </a>
        </div>
      </div>
    </article>
  );
};

export default CosmeticFillingArticle;

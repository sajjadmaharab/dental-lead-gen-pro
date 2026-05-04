import { Phone, MapPin } from "lucide-react";
import { CLINIC, telLink } from "@/lib/clinic";
import ImageCarousel from "@/components/ImageCarousel";
import fracturedHero from "@/assets/fractured-teeth-hero.jpg";
import fracturedBA1 from "@/assets/fractured-before-after-1.png";
import fracturedBA2 from "@/assets/fractured-before-after-2.jpg";
import fracturedBA3 from "@/assets/fractured-before-after-3.jpg";
import fracturedBA4 from "@/assets/fractured-before-after-4.jpg";

const beforeAfterImages = [
  { src: fracturedBA1, alt: "Chipped tooth before and after treatment at Motiur's Dental Debidwar Comilla", caption: "Chipped tooth: before and after" },
  { src: fracturedBA2, alt: "Fractured front tooth before and after dental bonding Debidwar", caption: "Front tooth fracture: before and after" },
  { src: fracturedBA3, alt: "Broken tooth restoration before and after Comilla Bangladesh", caption: "Broken tooth: before and after" },
  { src: fracturedBA4, alt: "Traumatic dental injury before and after treatment Motiur's Dental", caption: "Dental injury: before and after" },
];

const Bullet = ({ children }: { children: React.ReactNode }) => (
  <li className="relative pl-6 before:content-[''] before:absolute before:left-0 before:top-[10px] before:w-2.5 before:h-2.5 before:rounded-full before:bg-primary/70 before:rotate-3">
    {children}
  </li>
);

const FracturedTeethArticle = () => {
  return (
    <article className="max-w-none">

      <h1 className="text-3xl md:text-4xl lg:text-5xl font-display font-extrabold text-foreground mb-6 leading-tight">
        Chipped Tooth and Fractured Teeth Treatment in Debidwar, Comilla
      </h1>

      <div className="rounded-2xl overflow-hidden border border-border mb-8">
        <img src={fracturedHero} alt="Chipped and fractured teeth treatment in Debidwar Comilla by Motiur's Dental" className="w-full h-auto object-cover" />
      </div>

      <p className="text-lg leading-relaxed text-foreground/90">
        A chipped, cracked, or fractured tooth can happen to anyone at any moment. One bite on something unexpectedly hard, a fall, a sports impact, or an accident, and suddenly part of your tooth is gone or you can feel something is wrong inside it. At <strong>Motiur's Dental in Debidwar, Comilla</strong>, we treat chipped and fractured teeth regularly and we see patients in varying degrees of urgency, from minor cosmetic chips to serious fractures involving the nerve.
      </p>
      <p className="mt-4 text-foreground/85 leading-relaxed">
        Whatever the severity, the one thing we always tell patients is this: do not leave a damaged tooth untreated. What looks or feels minor today can become a serious infection or result in tooth loss if it is ignored for too long.
      </p>
      <p className="mt-4 text-foreground/85 leading-relaxed">
        At Motiur's Dental, we offer the full range of treatments for traumatic dental injuries at prices that are significantly more affordable than other clinics in the Comilla district, with no compromise on the quality of care or materials used.
      </p>

      <div className="bg-primary/5 border border-primary/20 rounded-2xl p-6 my-8 flex flex-col sm:flex-row gap-4 items-start sm:items-center">
        <div className="flex items-center gap-2 text-primary font-semibold">
          <Phone className="h-5 w-5" />
          <a href={telLink} className="hover:underline">Call us immediately: {CLINIC.phone}</a>
        </div>
        <div className="flex items-center gap-2 text-muted-foreground">
          <MapPin className="h-5 w-5" />
          <span>Debidwar, Comilla, Bangladesh</span>
        </div>
      </div>

      {/* What Are Traumatic Dental Injuries */}
      <h2 className="text-2xl md:text-3xl font-display font-bold mt-12 text-foreground">What Are Traumatic Dental Injuries?</h2>
      <p className="mt-3 text-foreground/85 leading-relaxed">
        Traumatic dental injuries refer to any damage caused to the teeth, gums, or jawbone as a result of a sudden impact or accident. They can range from a small chip in the outer enamel layer of a tooth to a complete knock-out where the tooth is entirely displaced from its socket.
      </p>
      <p className="mt-3 text-foreground/85 leading-relaxed">
        These injuries are more common than most people realize. They occur in children playing sports, in adults involved in road accidents, in elderly patients who fall, and in anyone who bites down on something unexpectedly hard like a seed hidden in food, a piece of bone, or hard candy.
      </p>
      <p className="mt-3 text-foreground/85 leading-relaxed">
        The important thing to understand about dental trauma is that the visible damage on the outside of the tooth does not always tell the full story. A tooth can appear only mildly chipped on the surface while having a crack extending deep into the root. This is why professional examination and X-rays are essential after any dental injury, even one that initially seems minor.
      </p>

      <ImageCarousel images={beforeAfterImages} mobileMaxH="200px" desktopCols={2} />

      {/* Types */}
      <h2 className="text-2xl md:text-3xl font-display font-bold mt-12 text-foreground">Types of Traumatic Dental Injuries We Treat at Motiur's Dental</h2>
      <div className="grid gap-4 my-6">
        {[
          { title: "Chipped Tooth", desc: "The most common type of dental injury. A chip involves a piece of tooth enamel or structure breaking away. Small chips may only affect the enamel and cause no pain. Larger chips can extend into the dentine layer, causing sensitivity, and some chips expose the inner pulp which causes significant pain." },
          { title: "Cracked Tooth", desc: "More complex than a chip because the crack may extend in unpredictable directions, including vertically down the root. Cracked teeth often cause sharp pain when biting down that disappears immediately after the pressure is released, and sensitivity to hot and cold that lingers." },
          { title: "Fractured Tooth", desc: "A more serious structural break in the tooth. Depending on the depth and direction of the fracture, it may be treatable with a crown or may require root canal treatment before crowning. Severe fractures that extend below the gum line or deep into the root may not be restorable." },
          { title: "Dislodged Tooth (Luxated Tooth)", desc: "A tooth pushed out of its normal position but remaining partially attached. The tooth may appear tilted, pushed inward, outward, or driven deeper into the socket. This is a dental emergency that requires immediate attention." },
          { title: "Knocked-Out Tooth (Avulsed Tooth)", desc: "A tooth completely knocked out of its socket is a true dental emergency. The likelihood of successfully reimplanting the tooth decreases rapidly with time. If you can get to Motiur's Dental within 30 to 60 minutes with the tooth stored correctly, there is a real chance the tooth can be saved." },
          { title: "Root Fracture", desc: "A fracture within the root of the tooth, below the gum line. Not visible without X-rays. Root fractures can affect the stability of the tooth and may or may not require extraction depending on where along the root the fracture has occurred." },
          { title: "Injuries to the Gum and Jawbone", desc: "Trauma often involves not just the teeth but the surrounding soft tissue and bone. Lacerations to the gum or lip, and fractures of the jawbone, may accompany dental injuries in more significant accidents." },
        ].map((item) => (
          <div key={item.title} className="bg-card border border-border rounded-xl p-5">
            <h3 className="font-display font-bold text-lg text-foreground">{item.title}</h3>
            <p className="text-muted-foreground mt-1 text-sm">{item.desc}</p>
          </div>
        ))}
      </div>

      {/* Symptoms */}
      <h2 className="text-2xl md:text-3xl font-display font-bold mt-12 text-foreground">Symptoms of a Chipped, Cracked, or Fractured Tooth</h2>
      <p className="mt-3 text-foreground/85">Many patients are unsure whether they need to see a dentist after what seems like a minor chip. Here are the symptoms that tell you something needs attention.</p>
      <ul className="space-y-4 my-6 list-none p-0">
        <Bullet><strong>Visible damage:</strong> If you can see that a piece of your tooth is missing, or if the shape of your tooth has changed, you need a dental assessment regardless of whether it is causing pain.</Bullet>
        <Bullet><strong>Sharp edge:</strong> A chipped tooth often leaves a sharp or rough edge that irritates the tongue, lip, or cheek. This can cause cuts and sores on the soft tissue if left unaddressed.</Bullet>
        <Bullet><strong>Pain when biting:</strong> Pain that occurs specifically when you bite down on food is a classic symptom of a cracked tooth. The pain may be sharp and brief, occurring at the moment of biting or when you release the bite.</Bullet>
        <Bullet><strong>Sensitivity to temperature:</strong> A damaged tooth that is sensitive to hot food, cold drinks, or sweet things, especially if the sensitivity lingers, indicates the damage has extended beyond the enamel into the dentine or pulp.</Bullet>
        <Bullet><strong>Spontaneous or throbbing pain:</strong> Pain that comes on without any specific trigger, or pain that throbs continuously, suggests the pulp inside the tooth has been affected. This requires root canal treatment.</Bullet>
        <Bullet><strong>Swelling of the gum near the tooth:</strong> Swelling around a damaged tooth is a sign of infection or significant inflammation and needs prompt attention.</Bullet>
        <Bullet><strong>Loose tooth:</strong> A tooth that feels unstable or wiggly after an injury may have been dislodged or may have a root fracture. Do not try to stabilize it yourself. Contact us immediately.</Bullet>
        <Bullet><strong>Bleeding from the gum:</strong> Bleeding around the tooth following an injury is common and usually stops on its own. If bleeding is persistent or significant, contact Motiur's Dental right away.</Bullet>
      </ul>

      {/* What to Do Immediately */}
      <h2 className="text-2xl md:text-3xl font-display font-bold mt-12 text-foreground">What to Do Immediately After a Dental Injury</h2>
      <p className="mt-3 text-foreground/85">The actions you take in the minutes and hours after a dental injury can significantly affect the outcome of treatment. Here is what to do before you reach Motiur's Dental.</p>
      <ol className="space-y-2 my-6 list-decimal list-inside text-foreground/85 marker:text-primary marker:font-bold">
        <li>Locate any broken pieces of the tooth and bring them to your appointment. In some cases, it may be possible to reattach.</li>
        <li>Rinse gently with warm salt water to clean the area and reduce bacterial contamination. Do not rinse aggressively.</li>
        <li>Apply a cold compress against your cheek over the affected area. This reduces swelling and numbs the discomfort. Keep it on for 20 minutes at a time.</li>
        <li>Control bleeding by applying gentle pressure with a clean piece of gauze or cloth.</li>
        <li>Do not try to fix the tooth yourself. Do not use superglue, toothpaste, or any other home remedy.</li>
        <li>Call Motiur's Dental immediately at <a href={telLink} className="text-primary font-semibold hover:underline">{CLINIC.phone}</a>.</li>
      </ol>

      {/* Emergency: Knocked-Out Tooth */}
      <h2 className="text-2xl md:text-3xl font-display font-bold mt-12 text-foreground">Emergency: What to Do If a Tooth Is Completely Knocked Out</h2>
      <p className="mt-3 text-foreground/85">
        A knocked-out tooth is one of the few genuine dental emergencies where every minute matters. The window for successfully reimplanting a knocked-out tooth is approximately 30 to 60 minutes from the moment of injury.
      </p>
      <ol className="space-y-2 my-6 list-decimal list-inside text-foreground/85 marker:text-primary marker:font-bold">
        <li>Pick up the tooth by the crown (the white part). Do not touch the root. The root surface has ligament cells essential for successful reimplantation.</li>
        <li>If the tooth is dirty, rinse it very gently with clean water or milk. Do not scrub it, do not use soap, and do not dry it.</li>
        <li>If possible, try to gently reinsert the tooth into the socket and bite gently on gauze to hold it in place. If not possible, place it in cold milk or between the cheek and gum.</li>
        <li>Call Motiur's Dental at <a href={telLink} className="text-primary font-semibold hover:underline">{CLINIC.phone}</a> immediately and get to the clinic as fast as possible.</li>
      </ol>
      <p className="mt-3 text-foreground/85">
        For children who have knocked out a baby tooth: baby teeth are generally not reimplanted because doing so can interfere with the development of the adult tooth underneath. We will assess the situation and advise appropriately.
      </p>

      {/* Tooth Pushed Out of Position */}
      <h2 className="text-2xl md:text-3xl font-display font-bold mt-12 text-foreground">What to Do If a Tooth Is Pushed Out of Position</h2>
      <p className="mt-3 text-foreground/85">
        If a tooth has been pushed sideways, inward, outward, or driven deeper into the socket by an impact but is still attached, do not try to push it back yourself. Contact Motiur's Dental immediately. The sooner you are seen, the better the chance that the tooth can be repositioned and stabilized successfully without requiring extraction.
      </p>

      {/* Treatment Options */}
      <h2 className="text-2xl md:text-3xl font-display font-bold mt-12 text-foreground">Treatment Options for Chipped and Fractured Teeth at Motiur's Dental</h2>
      <p className="mt-3 text-foreground/85">
        The right treatment depends on the type, location, and severity of the injury. We always conduct a thorough examination including X-rays before recommending any treatment.
      </p>

      <div className="grid gap-4 my-6">
        {[
          { title: "Dental Bonding for Minor Chips", desc: "For small chips affecting only the enamel or slightly into the dentine, a tooth-colored composite resin is applied, sculpted, hardened with a curing light, and polished to a natural finish. Completed in a single appointment with no anesthesia needed in most cases." },
          { title: "Dental Fillings for Moderate Fractures", desc: "When a fracture extends into the dentine layer, a dental filling provides a stronger restoration than bonding alone. The damaged area is cleaned and disinfected thoroughly before the filling material is placed." },
          { title: "Dental Crowns for Severe Fractures", desc: "When a tooth has suffered a significant fracture or cracked tooth syndrome is present, a dental crown provides complete coverage and protection. Crowns are made from porcelain, zirconia, or metal depending on the location and needs." },
          { title: "Root Canal Treatment for Pulp Injuries", desc: "When a fracture exposes or damages the pulp, root canal treatment removes the damaged tissue, cleans and seals the canals, and is followed by a crown for protection. The procedure is performed under local anesthesia and is not painful." },
          { title: "Tooth Extraction for Unsalvageable Teeth", desc: "When the fracture is so extensive that the tooth cannot be restored, extraction becomes the final option. We always explore every viable option to save the natural tooth first." },
          { title: "Treatment for Dislodged and Knocked-Out Teeth", desc: "For luxated teeth, we reposition and splint. For knocked-out teeth brought promptly, we reimplant and splint, followed by root canal treatment. Recovery is monitored with follow-up appointments and X-rays." },
          { title: "Treatment for Root Fractures", desc: "Root fractures are diagnosed with X-rays. Treatment depends on the fracture location along the root. Fractures closer to the crown are more challenging, while those near the root tip may be manageable with splinting and monitoring." },
        ].map((item) => (
          <div key={item.title} className="bg-card border border-border rounded-xl p-5">
            <h3 className="font-display font-bold text-lg text-foreground">{item.title}</h3>
            <p className="text-muted-foreground mt-1 text-sm">{item.desc}</p>
          </div>
        ))}
      </div>

      {/* What Happens If You Ignore */}
      <h2 className="text-2xl md:text-3xl font-display font-bold mt-12 text-foreground">What Happens If You Ignore a Chipped or Fractured Tooth?</h2>
      <p className="mt-3 text-foreground/85">
        A damaged tooth does not stay the same if left untreated. In most cases, the situation gradually worsens.
      </p>
      <ul className="space-y-4 my-6 list-none p-0">
        <Bullet>A small chip can develop into a deeper crack over time as the structural integrity of the tooth is compromised.</Bullet>
        <Bullet>Bacteria enter through any break in the outer surface. Even a tiny crack provides a pathway for bacteria to reach the dentine and eventually the pulp.</Bullet>
        <Bullet>A fracture treatable with a simple bonding procedure early on may require a crown after months of neglect. A tooth that needed a crown may later need extraction.</Bullet>
        <Bullet>The cost of treatment increases with the severity of the problem. Treating a chip early is significantly less expensive than treating the infection and structural collapse that result from waiting.</Bullet>
      </ul>

      {/* Prevention */}
      <h2 className="text-2xl md:text-3xl font-display font-bold mt-12 text-foreground">Preventing Chipped and Fractured Teeth</h2>
      <ul className="space-y-4 my-6 list-none p-0">
        <Bullet><strong>Wear a mouthguard</strong> during contact sports. A custom-fitted mouthguard from Motiur's Dental provides the best protection.</Bullet>
        <Bullet><strong>Avoid biting on extremely hard objects</strong> like ice cubes, hard boiled sweets, unpopped popcorn kernels, and never use your teeth to open packaging or bottles.</Bullet>
        <Bullet><strong>Wear a nightguard if you grind your teeth.</strong> Grinding puts significant repetitive stress on tooth structure and makes teeth more vulnerable to cracking.</Bullet>
        <Bullet><strong>Maintain good oral health</strong> through regular brushing, flossing, and dental checkups. Teeth weakened by decay are far more likely to chip or fracture.</Bullet>
        <Bullet><strong>Address old, large fillings</strong> before they fail. Regular checkups allow us to monitor these and replace them proactively.</Bullet>
      </ul>

      {/* Cost */}
      <h2 className="text-2xl md:text-3xl font-display font-bold mt-12 text-foreground">Cost of Chipped and Fractured Tooth Treatment in Debidwar, Comilla</h2>
      <p className="mt-3 text-foreground/85">
        The cost depends entirely on the type of treatment required. A simple bonding procedure for a minor chip costs considerably less than a full crown or root canal treatment followed by a crown.
      </p>
      <p className="mt-3 text-foreground/85">
        At Motiur's Dental in Debidwar, we consistently offer lower prices than other dental clinics in the Comilla district. Patients from Debidwar, Muradnagar, Chandina, Brahmanpara, Burichung, Homna, and Comilla city come to us regularly because they know they receive genuine professional care at a price that other clinics cannot match.
      </p>
      <div className="bg-primary/10 rounded-xl p-5 my-6 text-center">
        <p className="font-display font-bold text-lg text-foreground mb-2">Get Your Cost Estimate</p>
        <a href={telLink} className="text-primary font-bold text-xl hover:underline">
          Call {CLINIC.phone}
        </a>
      </div>

      {/* FAQ */}
      <h2 className="text-2xl md:text-3xl font-display font-bold mt-12 text-foreground">Frequently Asked Questions About Chipped and Fractured Teeth</h2>
      <div className="space-y-4 my-6">
        {[
          { q: "Can I fix a chipped tooth at home?", a: "No. Home remedies including superglue or DIY kits do not restore the structural integrity of a damaged tooth. They can trap bacteria, make professional treatment more difficult, and cause further damage. See a dentist as soon as possible." },
          { q: "Is a chipped tooth always painful?", a: "Not necessarily. A small chip affecting only the enamel may cause no pain at all. However, the absence of pain does not mean the tooth is fine. The damage can still worsen over time. Always have a chipped tooth evaluated by a dentist." },
          { q: "What happens if I leave a cracked tooth untreated?", a: "The crack can deepen and extend toward the root. Bacteria enter and infect the pulp, causing pain, abscess, and eventually tooth loss. What might have been a simple filling early on becomes a root canal or extraction later." },
          { q: "How long does it take to fix a chipped tooth?", a: "A simple chip treated with dental bonding can be fixed in a single appointment of 30 to 60 minutes. More complex cases involving crowns or root canal treatment require multiple appointments spread over a few weeks." },
          { q: "Can a completely knocked-out tooth be saved?", a: "Yes, in many cases, if the tooth is handled correctly and the patient reaches a dentist within 30 to 60 minutes. Do not touch the root, keep it moist in milk or saliva, and get to Motiur's Dental immediately." },
          { q: "Do I need a crown after a root canal for a fractured tooth?", a: "In most cases, yes. Root canal treatment removes the pulp, leaving the tooth more brittle. A crown provides the structural protection needed to withstand normal biting forces long term." },
          { q: "How much does it cost to fix a broken tooth in Comilla?", a: "Costs vary depending on the treatment needed. At Motiur's Dental, our prices are among the most affordable in the Comilla district. Call 01816010194 for a personalized consultation and cost estimate." },
          { q: "Can a severely fractured tooth always be saved?", a: "Not always. When a fracture extends deep below the gum line or through the root, the tooth may not be restorable. We always try to save the natural tooth first and only recommend extraction when there is no viable alternative." },
          { q: "What is cracked tooth syndrome?", a: "Cracked tooth syndrome refers to a tooth with a crack that causes pain during chewing but may not be visible on an X-ray. It is characterized by sharp pain when biting down that disappears immediately after pressure is released. A dental crown is usually recommended." },
          { q: "Can children get traumatic dental injuries treated at Motiur's Dental?", a: "Yes. We treat patients of all ages including children. Treatment is adapted based on whether the injured tooth is a baby tooth or a permanent tooth." },
          { q: "Can I get treatment for a dental injury in Debidwar without going to Comilla city?", a: "Yes, absolutely. Motiur's Dental in Debidwar handles the full range of treatments for traumatic dental injuries. You do not need to travel to Comilla city or Dhaka for emergency dental care." },
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
          Book Your Appointment or Emergency Consultation
        </h2>
        <p className="text-muted-foreground max-w-xl mx-auto mb-6">
          If you have chipped, cracked, or fractured a tooth, contact Motiur's Dental in Debidwar as soon as possible. The sooner we assess and treat the injury, the better the outcome and the lower the overall cost. We serve patients from Debidwar, Muradnagar, Chandina, Brahmanpara, Burichung, Homna, and all across Comilla district.
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

export default FracturedTeethArticle;

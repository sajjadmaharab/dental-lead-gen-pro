import { Phone, MapPin } from "lucide-react";
import { CLINIC, telLink } from "@/lib/clinic";

const Bullet = ({ children }: { children: React.ReactNode }) => (
  <li className="relative pl-6 before:content-[''] before:absolute before:left-0 before:top-[10px] before:w-2.5 before:h-2.5 before:rounded-full before:bg-primary/70 before:rotate-3">
    {children}
  </li>
);

const ToothExtractionArticle = () => {
  return (
    <article className="max-w-none">

      {/* Placeholder for hero image */}

      <h1 className="text-3xl md:text-4xl lg:text-5xl font-display font-extrabold text-foreground mb-6 leading-tight">
        Tooth Extraction: Safe and Affordable
      </h1>

      <p className="text-lg leading-relaxed text-foreground/90">
        Tooth extraction is one of the most common dental procedures performed worldwide, and at <strong>Motiur's Dental in Debidwar, Comilla</strong>, we carry it out safely, comfortably, and at prices that are among the most affordable in the Comilla district. Whether you need a simple extraction for a badly decayed tooth, a surgical extraction for an impacted wisdom tooth, or extractions as part of an orthodontic treatment plan, our team handles every case with care and precision.
      </p>
      <p className="mt-3 text-lg leading-relaxed text-foreground/90">
        We understand that the idea of having a tooth removed makes many people anxious. The reality is that modern tooth extraction, performed under local anesthesia by an experienced dentist, is a routine and largely comfortable procedure. Most patients are genuinely surprised by how straightforward the experience is.
      </p>
      <p className="mt-3 text-lg leading-relaxed text-foreground/90">
        If you are in pain, have a tooth that cannot be saved, or have been told you need an extraction, do not delay. Leaving an infected or severely damaged tooth in place only allows the problem to worsen and spread.
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

      {/* What is Tooth Extraction? */}
      <h2 className="text-2xl md:text-3xl font-display font-bold mt-12 text-foreground">What is Tooth Extraction?</h2>
      <p className="mt-3 text-foreground/85 leading-relaxed">
        Tooth extraction is a dental procedure in which a tooth is removed from its socket in the jawbone. It is performed under local anesthesia so the patient feels no pain during the procedure, only mild pressure and movement.
      </p>
      <p className="mt-3 text-foreground/85 leading-relaxed">
        While dentists always prefer to save natural teeth whenever possible, there are situations where extraction is the most appropriate course of action, either because the tooth cannot be restored or because keeping it would harm the surrounding teeth and oral health. In these situations, extraction is not just acceptable but genuinely the right decision for the patient's long-term health.
      </p>
      <p className="mt-3 text-foreground/85 leading-relaxed">
        At Motiur's Dental, we follow a clear principle: we never recommend extraction unless it is truly necessary. We always explore whether the tooth can be saved first. When extraction is the right call, we ensure the procedure is as comfortable as possible and we discuss tooth replacement options afterward so you never end up with a long-term gap that causes further dental problems.
      </p>

      {/* When is Tooth Extraction Necessary? */}
      <h2 className="text-2xl md:text-3xl font-display font-bold mt-12 text-foreground">When is Tooth Extraction Necessary?</h2>
      <p className="mt-3 text-foreground/85 leading-relaxed">
        There are several situations where tooth extraction becomes the most appropriate treatment. Here is a detailed breakdown of each one.
      </p>

      <h3 className="text-xl font-display font-semibold mt-8 text-foreground">Severe Tooth Decay</h3>
      <p className="mt-3 text-foreground/85 leading-relaxed">
        Tooth decay, commonly known as a cavity, begins as a small area of damage in the outer enamel of the tooth. If caught early, a simple filling resolves the problem completely. However, when decay is left untreated it progresses steadily through the enamel, into the dentine layer beneath, and eventually reaches the pulp at the center of the tooth.
      </p>
      <p className="mt-3 text-foreground/85 leading-relaxed">
        Once bacteria reach the pulp, an infection develops inside the tooth. At this stage, root canal treatment can often still save the tooth by removing the infected pulp and sealing the canal. But in cases where the decay has destroyed too much of the tooth structure to support a crown after root canal treatment, or where the infection has spread extensively into the surrounding bone, extraction becomes necessary.
      </p>
      <p className="mt-3 text-foreground/85 leading-relaxed">
        This is one of the most important reasons why regular dental checkups matter so much. Cavities caught in their early stages are treated with a simple, inexpensive filling. Cavities left until they infect the pulp require either root canal treatment and a crown, or extraction followed by tooth replacement. The cost difference is significant, and the discomfort difference is even more so.
      </p>

      <h3 className="text-xl font-display font-semibold mt-8 text-foreground">Advanced Gum Disease</h3>
      <p className="mt-3 text-foreground/85 leading-relaxed">
        Gum disease, also known as periodontitis in its more advanced form, is an infection that affects not just the gum tissue but the ligaments and bone that hold the teeth in place. In its early stage, called gingivitis, it is completely reversible with professional cleaning and improved home hygiene.
      </p>
      <p className="mt-3 text-foreground/85 leading-relaxed">
        When gum disease is allowed to progress to periodontitis, it causes irreversible bone loss around the teeth. As the supporting bone is gradually destroyed, teeth become progressively looser. In advanced cases where a tooth has lost so much bone support that it is significantly mobile and cannot be stabilized with periodontal treatment, extraction is necessary.
      </p>
      <p className="mt-3 text-foreground/85 leading-relaxed">
        Leaving a severely periodontally compromised tooth in the mouth allows the infection to continue destroying bone, which can affect the neighboring teeth as well. In these situations, extraction actually protects the surrounding teeth.
      </p>

      <h3 className="text-xl font-display font-semibold mt-8 text-foreground">Overcrowded Teeth</h3>
      <p className="mt-3 text-foreground/85 leading-relaxed">
        Sometimes the jaw does not have enough space to accommodate all the teeth properly. This overcrowding causes teeth to overlap, rotate, and erupt in abnormal positions. Overcrowded teeth are harder to clean effectively, which increases the risk of cavities and gum disease, and they create bite problems that can affect jaw function.
      </p>
      <p className="mt-3 text-foreground/85 leading-relaxed">
        When a patient is starting orthodontic treatment with braces, the orthodontist may recommend extracting one or more teeth to create the space needed for the remaining teeth to be moved into proper alignment. This is a planned and deliberate part of the treatment, not an emergency. The extractions create room for the braces to do their job properly, resulting in a well-aligned and healthy smile at the end of treatment.
      </p>

      <h3 className="text-xl font-display font-semibold mt-8 text-foreground">Impacted Teeth</h3>
      <p className="mt-3 text-foreground/85 leading-relaxed">
        An impacted tooth is one that is unable to erupt fully through the gum because it is blocked by another tooth, bone, or gum tissue. Wisdom teeth are the most commonly impacted teeth, though other teeth can also become impacted.
      </p>
      <p className="mt-3 text-foreground/85 leading-relaxed">
        Impacted teeth cause a range of problems. They can be partially erupted, creating a pocket of gum tissue where food and bacteria collect and cause recurring infection. They can press against the roots of neighboring teeth, causing damage and pain. In some cases, cysts develop around impacted teeth, which can cause significant bone destruction if left untreated.
      </p>
      <p className="mt-3 text-foreground/85 leading-relaxed">
        When an impacted tooth is causing problems or is clearly going to cause problems based on its position, extraction is the recommended treatment. For a detailed discussion of wisdom tooth impaction and treatment, visit our dedicated <a href="/services/wisdom-teeth-treatment" className="text-primary hover:underline font-medium">wisdom teeth page</a>.
      </p>

      <h3 className="text-xl font-display font-semibold mt-8 text-foreground">Fractured or Broken Teeth</h3>
      <p className="mt-3 text-foreground/85 leading-relaxed">
        Not every fractured or cracked tooth requires extraction. Many can be successfully restored with a crown, root canal treatment, or a combination of both. However, when a fracture extends deep below the gum line, into the root, or when it causes the tooth to split vertically, restoration is not possible and extraction becomes necessary.
      </p>
      <p className="mt-3 text-foreground/85 leading-relaxed">
        The decision is made on a case-by-case basis after a thorough examination including X-rays. At Motiur's Dental, we always make every effort to save the tooth before recommending extraction.
      </p>

      <h3 className="text-xl font-display font-semibold mt-8 text-foreground">Failed Root Canal Treatment or Unrestorable Infection</h3>
      <p className="mt-3 text-foreground/85 leading-relaxed">
        In rare cases, a tooth that has previously undergone root canal treatment becomes reinfected and the infection cannot be resolved with retreatment or a surgical apicoectomy. In these situations, extraction may be the only remaining option.
      </p>
      <p className="mt-3 text-foreground/85 leading-relaxed">
        Similarly, when a tooth is associated with a significant abscess that has not responded adequately to drainage and antibiotics, and the tooth itself is not restorable, extraction removes the source of infection permanently.
      </p>

      <h3 className="text-xl font-display font-semibold mt-8 text-foreground">Preparation for Dentures</h3>
      <p className="mt-3 text-foreground/85 leading-relaxed">
        Patients who are transitioning to full dentures may need remaining teeth extracted as part of the preparation process. This is a planned procedure that is carefully timed to allow proper healing before the dentures are fitted.
      </p>

      {/* Types of Tooth Extraction */}
      <h2 className="text-2xl md:text-3xl font-display font-bold mt-12 text-foreground">Types of Tooth Extraction at Motiur's Dental</h2>

      <h3 className="text-xl font-display font-semibold mt-8 text-foreground">Simple Extraction</h3>
      <p className="mt-3 text-foreground/85 leading-relaxed">
        A simple extraction is performed on a tooth that has fully erupted above the gum line and has a relatively straightforward root structure. After the area is completely numbed with local anesthesia, the dentist uses specialized instruments to loosen the tooth within its socket and then removes it smoothly.
      </p>
      <p className="mt-3 text-foreground/85 leading-relaxed">
        Simple extractions are quick procedures, often completed in 10 to 20 minutes for a single tooth. Most patients report that the procedure was far more comfortable than they anticipated. The pressure of the instruments is felt but not pain.
      </p>
      <p className="mt-3 text-foreground/85 leading-relaxed">
        Simple extraction is appropriate for teeth that are badly decayed, teeth that are very loose due to advanced gum disease, and some teeth being removed as part of orthodontic planning.
      </p>

      <h3 className="text-xl font-display font-semibold mt-8 text-foreground">Surgical Extraction</h3>
      <p className="mt-3 text-foreground/85 leading-relaxed">
        A surgical extraction is required when a tooth is not fully erupted above the gum line, when it has a complex or curved root structure that prevents straightforward removal, when it has broken off at or below the gum line, or when it is impacted within the bone.
      </p>
      <p className="mt-3 text-foreground/85 leading-relaxed">
        Surgical extraction involves making a small incision in the gum tissue to access the tooth properly. In some cases, a small amount of bone around the tooth needs to be removed to allow access. The tooth may also need to be divided into sections for easier removal, particularly with impacted wisdom teeth that are deeply positioned in the jaw.
      </p>
      <p className="mt-3 text-foreground/85 leading-relaxed">
        Stitches are placed after a surgical extraction to close the gum tissue and promote proper healing. The procedure is performed entirely under local anesthesia so it is not painful, though the recovery period is slightly longer than for a simple extraction due to the involvement of gum tissue and sometimes bone.
      </p>

      {/* Step by Step Procedure */}
      <h2 className="text-2xl md:text-3xl font-display font-bold mt-12 text-foreground">The Tooth Extraction Procedure at Motiur's Dental Step by Step</h2>
      <p className="mt-3 text-foreground/85 leading-relaxed">
        We believe patients feel more comfortable when they know exactly what to expect. Here is a detailed walkthrough of what happens during a tooth extraction at our clinic.
      </p>

      <div className="grid gap-4 my-8">
        {[
          { step: "1", title: "Examination and X-rays", desc: "Before any extraction, we examine the tooth carefully and take X-rays to understand the root shape, depth, and the condition of the surrounding bone. This information tells us whether a simple or surgical approach is needed and helps us plan the procedure properly." },
          { step: "2", title: "Local Anesthesia", desc: "We inject local anesthetic around the tooth and into the surrounding gum tissue. We take our time with this step to make sure the area is fully numb before proceeding. You will feel the initial injection, which causes a brief sting, and then the area becomes completely numb within a few minutes." },
          { step: "3", title: "Confirming Numbness", desc: "We always check that the area is fully numb before starting. You should feel pressure and movement but absolutely no sharp pain. If you feel anything sharp at any point during the procedure, tell us immediately and we will add more anesthetic." },
          { step: "4", title: "Loosening the Tooth", desc: "For a simple extraction, we use an instrument called an elevator to gently loosen the tooth within its socket. This involves rocking the tooth back and forth to widen the socket and detach the ligament fibers holding the tooth in place. You will feel pressure during this step but not pain." },
          { step: "5", title: "Removing the Tooth", desc: "Once the tooth is sufficiently loosened, it is removed with dental forceps. In most cases this takes only a few seconds." },
          { step: "6", title: "For Surgical Extractions", desc: "After anesthesia, a small incision is made in the gum, bone is carefully managed as needed, and the tooth may be sectioned before removal. Stitches are placed to close the site afterward." },
          { step: "7", title: "Controlling Bleeding", desc: "Gauze is placed over the extraction socket and you are asked to bite down firmly on it for 30 to 45 minutes. This pressure helps a blood clot form in the socket, which is an essential part of the healing process." },
          { step: "8", title: "Post-operative Instructions", desc: "We give you detailed written and verbal instructions on how to care for the extraction site at home, what to eat, what to avoid, and what to do if you experience any concerning symptoms." },
        ].map((item) => (
          <div key={item.step} className="bg-card border border-border rounded-xl p-5 flex gap-4">
            <span className="flex-shrink-0 w-9 h-9 rounded-full bg-primary/10 text-primary font-bold flex items-center justify-center text-sm">{item.step}</span>
            <div>
              <h4 className="font-display font-semibold text-foreground">{item.title}</h4>
              <p className="text-muted-foreground text-sm mt-1">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Aftercare */}
      <h2 className="text-2xl md:text-3xl font-display font-bold mt-12 text-foreground">Aftercare: What to Do After a Tooth Extraction</h2>
      <p className="mt-3 text-foreground/85 leading-relaxed">
        Following aftercare instructions carefully makes the difference between a smooth, uneventful recovery and a complicated one. Here is everything you need to know.
      </p>
      <ul className="space-y-4 my-6 list-none p-0">
        <Bullet>
          <strong>The first 24 hours are critical:</strong> Bite firmly on the gauze pad for at least 30 to 45 minutes after the extraction. Change the gauze if it becomes soaked. Some minor oozing of blood mixed with saliva is normal for the first few hours.
        </Bullet>
        <Bullet>
          <strong>Do not disturb the blood clot:</strong> The blood clot that forms in the extraction socket is the foundation of healing. Avoid anything that could dislodge it. This means no spitting forcefully, no rinsing vigorously, no using a straw, and no smoking for at least 24 hours and ideally 48 to 72 hours.
        </Bullet>
        <Bullet>
          <strong>Apply ice for swelling:</strong> Use an ice pack wrapped in a cloth on the outside of your cheek over the extraction site for 20 minutes on and 20 minutes off during the first 24 hours. This minimizes swelling significantly.
        </Bullet>
        <Bullet>
          <strong>Take pain medication as directed:</strong> We prescribe appropriate pain medication for your situation. Take it as directed, beginning before the anesthesia wears off if possible so you stay ahead of the discomfort. Over-the-counter ibuprofen is particularly effective for dental pain because it addresses both pain and inflammation.
        </Bullet>
        <Bullet>
          <strong>Eat soft foods:</strong> Stick to soft foods for the first several days. Mashed potatoes, soft rice, dal, yogurt, eggs, and soup are all good choices. Eat on the opposite side from the extraction. Avoid hot foods and drinks for the first 24 hours. Avoid hard, crunchy, or chewy foods until the area has healed.
        </Bullet>
        <Bullet>
          <strong>Keep your mouth clean:</strong> Do not brush directly over the extraction socket for the first 24 hours. From the second day onward, gently rinse with warm salt water after meals. Dissolve half a teaspoon of salt in a glass of warm water and swish very gently. Resume normal brushing of all other teeth.
        </Bullet>
        <Bullet>
          <strong>Avoid smoking:</strong> Smoking is the single biggest risk factor for a complication called dry socket. The suction of smoking can dislodge the blood clot and the chemicals in smoke impair healing. We strongly recommend avoiding smoking for at least 72 hours after extraction, and ideally longer.
        </Bullet>
        <Bullet>
          <strong>Rest:</strong> Avoid strenuous physical activity for at least 24 hours after the extraction. Exercise increases blood pressure and heart rate, which can increase bleeding from the socket and slow clot formation.
        </Bullet>
      </ul>

      {/* Dry Socket */}
      <h2 className="text-2xl md:text-3xl font-display font-bold mt-12 text-foreground">What is Dry Socket and How to Avoid It?</h2>
      <p className="mt-3 text-foreground/85 leading-relaxed">
        Dry socket, also called alveolar osteitis, is the most common complication after tooth extraction. It occurs when the blood clot in the extraction socket is dislodged or dissolves before the area has healed, leaving the bone underneath exposed.
      </p>
      <p className="mt-3 text-foreground/85 leading-relaxed">
        Dry socket causes significant pain that typically begins two to four days after the extraction and is notably worse than the normal post-extraction soreness. The pain often radiates toward the ear and jaw. If you experience worsening pain after the third day rather than improving pain, contact Motiur's Dental immediately at <a href={telLink} className="text-primary hover:underline font-medium">{CLINIC.phone}</a>.
      </p>
      <p className="mt-3 text-foreground/85 leading-relaxed">
        Dry socket is treated easily at the clinic. We clean the socket gently and place a medicated dressing that relieves the pain almost immediately. The dressing is changed every few days until the area heals.
      </p>
      <p className="mt-3 text-foreground/85 leading-relaxed">
        To avoid dry socket, follow all aftercare instructions carefully, do not smoke, do not use a straw, and do not spit forcefully in the days following extraction.
      </p>

      {/* Replacing the Missing Tooth */}
      <h2 className="text-2xl md:text-3xl font-display font-bold mt-12 text-foreground">What to Do After Extraction: Replacing the Missing Tooth</h2>
      <p className="mt-3 text-foreground/85 leading-relaxed">
        One of the most important conversations we have with patients after an extraction is about replacing the missing tooth. Many patients assume that once the problem tooth is gone, the matter is resolved. In reality, a gap left by an extracted tooth creates its own set of problems over time if it is not addressed.
      </p>
      <p className="mt-3 text-foreground/85 leading-relaxed">
        The teeth on either side of the gap begin to drift toward the empty space. The tooth above or below the gap, with nothing to bite against, begins to over-erupt. Bone loss occurs in the jaw below the missing tooth because there is no root stimulating the bone anymore. Over time, these changes affect your bite, your ability to chew properly, and the alignment of your remaining teeth.
      </p>
      <p className="mt-3 text-foreground/85 leading-relaxed">
        At Motiur's Dental, we offer several options for replacing extracted teeth. A <a href="/services/dental-implants" className="text-primary hover:underline font-medium">dental implant</a> is the most comprehensive solution, replacing the entire tooth including the root. A <a href="/services/dental-bridges-caps" className="text-primary hover:underline font-medium">dental bridge</a> is a faster and less expensive option. A partial denture is a removable option that is the most affordable but also the least stable of the three.
      </p>
      <p className="mt-3 text-foreground/85 leading-relaxed">
        We discuss all options clearly during your post-extraction consultation so you can make an informed decision about the best path forward for your specific situation and budget.
      </p>

      {/* Cost */}
      <h2 className="text-2xl md:text-3xl font-display font-bold mt-12 text-foreground">Tooth Extraction Cost in Debidwar, Comilla</h2>
      <p className="mt-3 text-foreground/85 leading-relaxed">
        The cost of tooth extraction at Motiur's Dental depends on the type of extraction required. Simple extractions are significantly less expensive than surgical extractions. Surgical removal of deeply impacted wisdom teeth is more involved and therefore higher in cost than a simple extraction of a fully erupted tooth.
      </p>
      <p className="mt-3 text-foreground/85 leading-relaxed">
        At Motiur's Dental in Debidwar, we consistently offer some of the lowest extraction prices in the Comilla district without any compromise on safety, technique, or anesthesia. Patients from Debidwar, Muradnagar, Chandina, Brahmanpara, Burichang, Homna, and Comilla city choose us regularly because they receive professional dental care at a price that other clinics in the area simply cannot match.
      </p>
      <p className="mt-3 text-foreground/85 leading-relaxed">
        We provide a clear and honest cost estimate during your consultation before any treatment begins. No hidden charges and no surprise fees.
      </p>

      {/* FAQs */}
      <h2 className="text-2xl md:text-3xl font-display font-bold mt-12 text-foreground">Frequently Asked Questions About Tooth Extraction</h2>
      <div className="space-y-3 my-8">
        {[
          { q: "Is tooth extraction painful?", a: "No. The procedure is performed under local anesthesia so you will not feel pain during the extraction. You will feel pressure and movement as the tooth is loosened and removed, but not sharp pain. After the anesthesia wears off, some soreness is normal and is easily managed with pain medication." },
          { q: "How long does a tooth extraction take?", a: "A simple extraction typically takes 10 to 30 minutes for a single tooth. A surgical extraction, such as for an impacted wisdom tooth, may take 30 to 60 minutes depending on the complexity." },
          { q: "How long is recovery after tooth extraction?", a: "Most patients feel significantly better within 48 to 72 hours. The gum tissue heals over the socket within one to two weeks. Complete healing of the underlying bone takes several weeks to a few months, though this does not cause any ongoing pain or disruption to daily life." },
          { q: "Can I eat normally after tooth extraction?", a: "Not immediately. For the first few days, stick to soft foods and eat on the side of the mouth away from the extraction. Avoid hot, hard, crunchy, or chewy foods until the area has healed. You can gradually return to your normal diet as healing progresses." },
          { q: "What is the difference between simple and surgical extraction?", a: "A simple extraction is used for fully erupted teeth with straightforward roots. A surgical extraction is required for impacted teeth, broken teeth below the gum line, or teeth with complex root structures. Surgical extraction involves a gum incision and sometimes bone management." },
          { q: "Do I need to replace the extracted tooth?", a: "In most cases, yes. Leaving a gap causes neighboring teeth to shift, bone loss in the jaw, and bite problems over time. We discuss replacement options including dental implants, bridges, and partial dentures during your consultation." },
          { q: "Is tooth extraction safe?", a: "Yes. Tooth extraction is one of the most commonly performed dental procedures worldwide and has a very high safety record when carried out by a trained dentist with proper technique and sterile instruments. At Motiur's Dental, we follow strict infection control protocols for all surgical procedures." },
          { q: "Can I drive home after a tooth extraction?", a: "In most cases yes, as the local anesthesia used for standard tooth extractions does not affect your ability to drive. However, if you feel unwell or dizzy after the procedure, have someone take you home." },
          { q: "What happens if I leave a badly decayed tooth without extraction?", a: "The infection will spread from the tooth to the surrounding bone and tissue. This can cause an abscess, which is a painful and potentially serious complication. Never ignore a tooth that needs extraction." },
          { q: "Can I get tooth extraction in Debidwar without going to Comilla city?", a: "Yes, absolutely. Motiur's Dental in Debidwar performs both simple and surgical tooth extractions including impacted wisdom tooth removal. You do not need to travel to Comilla city or Dhaka for this treatment." },
          { q: "What is the cost of tooth extraction in Comilla?", a: "Costs depend on whether the extraction is simple or surgical and the complexity of the case. At Motiur's Dental, we offer the most affordable extraction pricing in the Debidwar and Comilla area. Call 01816010194 for a specific estimate." },
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
          Book Your Tooth Extraction Appointment at Motiur's Dental
        </h2>
        <p className="text-muted-foreground max-w-xl mx-auto mb-6">
          If you have a tooth that is causing pain, is severely decayed, is infected, or has been recommended for extraction by another dentist, contact Motiur's Dental in Debidwar today. We serve patients from Debidwar, Muradnagar, Chandina, Brahmanpara, Burichang, Homna, and all across Comilla district.
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

export default ToothExtractionArticle;

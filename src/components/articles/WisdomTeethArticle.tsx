import { Phone, MapPin } from "lucide-react";
import { CLINIC, telLink } from "@/lib/clinic";

const Bullet = ({ children }: { children: React.ReactNode }) => (
  <li className="relative pl-6 before:content-[''] before:absolute before:left-0 before:top-[10px] before:w-2.5 before:h-2.5 before:rounded-full before:bg-primary/70 before:rotate-3">
    {children}
  </li>
);

const WisdomTeethArticle = () => {
  return (
    <article className="max-w-none">

      {/* Placeholder for hero image */}

      <h1 className="text-3xl md:text-4xl lg:text-5xl font-display font-extrabold text-foreground mb-6 leading-tight">
        Wisdom Teeth Treatment: Wisdom Tooth Removal
      </h1>

      <p className="text-lg leading-relaxed text-foreground/90">
        Wisdom teeth are responsible for some of the most severe dental pain people experience. Whether yours are just starting to come through or you have been dealing with swelling, infection, and jaw pain for weeks, the team at <strong>Motiur's Dental in Debidwar, Comilla</strong> is here to help. We assess, treat, and where necessary remove wisdom teeth safely and at a cost that is significantly lower than other clinics in the Comilla district.
      </p>
      <p className="mt-3 text-lg leading-relaxed text-foreground/90">
        You do not need to travel to Comilla city or Dhaka for proper wisdom tooth care. We are right here in Debidwar, and we handle everything from routine monitoring to surgical extraction of fully impacted wisdom teeth.
      </p>

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

      {/* What Are Wisdom Teeth? */}
      <h2 className="text-2xl md:text-3xl font-display font-bold mt-12 text-foreground">What Are Wisdom Teeth?</h2>
      <p className="mt-3 text-foreground/85 leading-relaxed">
        Wisdom teeth are your third molars, the very last teeth to develop and erupt in the mouth. Most people have four of them, one in each corner of the mouth, though some people develop fewer and some develop none at all.
      </p>
      <p className="mt-3 text-foreground/85 leading-relaxed">
        In Bangladesh, wisdom teeth are commonly known as <strong>আক্কেল দাঁত (akkel dant)</strong>. They typically begin to push through the gums between the ages of 17 and 25, though this varies from person to person.
      </p>
      <p className="mt-3 text-foreground/85 leading-relaxed">
        The reason wisdom teeth cause so many problems is largely evolutionary. Human jaws have become smaller over thousands of years, but we still grow the same number of teeth our distant ancestors had. In many people, there is simply not enough space at the back of the jaw for wisdom teeth to come through properly. When that happens, the tooth becomes trapped, which leads to a range of complications.
      </p>

      {/* Why Wisdom Teeth Cause Problems */}
      <h2 className="text-2xl md:text-3xl font-display font-bold mt-12 text-foreground">Why Wisdom Teeth Cause Problems</h2>
      <p className="mt-3 text-foreground/85 leading-relaxed">
        The core issue with wisdom teeth is space, or the lack of it. When there is not enough room in the jaw for a wisdom tooth to erupt normally, several things can happen.
      </p>
      <ul className="space-y-4 my-6 list-none p-0">
        <Bullet>
          The tooth may become <strong>partially erupted</strong>, meaning only part of it breaks through the gum. This creates a flap of gum tissue where food, bacteria, and plaque collect constantly. This is one of the most common causes of wisdom tooth infection.
        </Bullet>
        <Bullet>
          The tooth may become <strong>fully impacted</strong>, meaning it is completely trapped within the jawbone. Impacted wisdom teeth can grow at awkward angles, pressing against the roots of neighboring teeth and causing damage.
        </Bullet>
        <Bullet>
          Even wisdom teeth that erupt fully can be <strong>difficult to clean properly</strong> because of their position at the very back of the mouth. This makes them more vulnerable to decay and gum disease.
        </Bullet>
      </ul>

      {/* Signs and Symptoms */}
      <h2 className="text-2xl md:text-3xl font-display font-bold mt-12 text-foreground">Signs and Symptoms That Your Wisdom Teeth Need Attention</h2>
      <ul className="space-y-4 my-6 list-none p-0">
        <Bullet>
          <strong>Pain at the back of the jaw:</strong> The pain can range from a dull, constant ache to sharp, throbbing pain that makes eating and sleeping difficult. It can radiate toward the ear, cheek, and temple.
        </Bullet>
        <Bullet>
          <strong>Swelling of the gum around the back teeth:</strong> The gum tissue around a partially or fully erupting wisdom tooth often becomes swollen, red, and tender. This swelling can sometimes extend to the cheek and the side of the face.
        </Bullet>
        <Bullet>
          <strong>Difficulty opening your mouth:</strong> This is called trismus and it indicates significant swelling or infection that needs prompt treatment.
        </Bullet>
        <Bullet>
          <strong>Bad breath that does not go away:</strong> The pocket of gum tissue around a partially erupted wisdom tooth traps food and bacteria continuously, leading to persistent bad breath and an unpleasant taste.
        </Bullet>
        <Bullet>
          <strong>Pain or difficulty chewing:</strong> Wisdom teeth that are pushing against neighboring teeth or causing crowding can make it uncomfortable to bite down properly.
        </Bullet>
        <Bullet>
          <strong>Headaches and jaw aches:</strong> The pressure that impacted wisdom teeth put on surrounding structures can cause referred pain manifesting as headaches, earaches, and jaw soreness.
        </Bullet>
        <Bullet>
          <strong>Swelling of the face or cheek:</strong> Noticeable swelling on one side of the face is a serious symptom that suggests an active infection. This requires urgent dental attention.
        </Bullet>
        <Bullet>
          <strong>Fever alongside tooth pain:</strong> A fever combined with wisdom tooth pain and swelling is a clear sign of infection that has progressed. Contact Motiur's Dental immediately at <a href={telLink} className="text-primary hover:underline font-semibold">{CLINIC.phone}</a>.
        </Bullet>
      </ul>

      {/* What is an Impacted Wisdom Tooth? */}
      <h2 className="text-2xl md:text-3xl font-display font-bold mt-12 text-foreground">What is an Impacted Wisdom Tooth?</h2>
      <p className="mt-3 text-foreground/85 leading-relaxed">
        An impacted wisdom tooth is one that cannot erupt normally because it is blocked by other teeth, bone, or gum tissue. This is one of the most common dental conditions affecting people in their late teens and twenties.
      </p>
      <p className="mt-3 text-foreground/85 leading-relaxed">
        There are different types of impaction depending on the angle at which the tooth is positioned within the jaw. Some grow at an angle toward the neighboring molar. Others grow horizontally, lying completely sideways within the bone. Some are partially erupted and some remain fully buried.
      </p>
      <p className="mt-3 text-foreground/85 leading-relaxed">
        Impacted wisdom teeth are more likely to cause complications. They are harder to clean, more prone to infection, more likely to damage neighboring teeth, and in rare cases can lead to the formation of cysts or tumors in the jawbone.
      </p>
      <p className="mt-3 text-foreground/85 leading-relaxed">
        At Motiur's Dental, we use dental X-rays to identify the exact position and angulation of your wisdom teeth and determine the best course of action.
      </p>

      {/* When is Removal Necessary? */}
      <h2 className="text-2xl md:text-3xl font-display font-bold mt-12 text-foreground">When is Wisdom Tooth Removal Necessary?</h2>
      <p className="mt-3 text-foreground/85 leading-relaxed">
        Not every wisdom tooth needs to be removed. If your wisdom teeth have erupted fully, are not causing pain, and can be cleaned properly, monitoring them with regular checkups may be all that is needed.
      </p>
      <p className="mt-3 text-foreground/85 leading-relaxed">
        However, removal is strongly recommended in the following situations:
      </p>
      <ul className="space-y-4 my-6 list-none p-0">
        <Bullet>When the wisdom tooth is impacted and causing pain, swelling, or infection.</Bullet>
        <Bullet>When the wisdom tooth is partially erupted and creating a gum pocket that traps food and bacteria repeatedly.</Bullet>
        <Bullet>When the wisdom tooth is pressing against the neighboring molar and causing damage to its root.</Bullet>
        <Bullet>When the wisdom tooth is causing crowding of the other teeth.</Bullet>
        <Bullet>When there is a recurring infection that keeps coming back even after antibiotic treatment.</Bullet>
        <Bullet>When cysts or other pathology are developing around the impacted tooth.</Bullet>
        <Bullet>When the wisdom tooth is decayed and cannot be properly restored due to its position.</Bullet>
      </ul>

      {/* Procedure */}
      <h2 className="text-2xl md:text-3xl font-display font-bold mt-12 text-foreground">Wisdom Tooth Removal Procedure at Motiur's Dental</h2>
      <div className="grid gap-4 my-6">
        {[
          { title: "Step 1: Consultation and X-rays", desc: "We examine your mouth and take dental X-rays to see the position, depth, and angle of your wisdom teeth. We discuss all findings with you clearly before anything begins." },
          { title: "Step 2: Anesthesia", desc: "For most wisdom tooth extractions, local anesthesia is used to completely numb the area. You will feel pressure during the procedure but not pain." },
          { title: "Step 3: The Extraction", desc: "For a straightforward extraction, the dentist gently loosens the tooth and removes it. For surgical extraction of impacted teeth, a small incision is made and the tooth may be divided into sections for easier removal." },
          { title: "Step 4: Stitches", desc: "Depending on the complexity, stitches may be placed to close the extraction site and promote proper healing." },
          { title: "Step 5: Post-operative Instructions", desc: "We provide detailed written and verbal instructions on how to care for the extraction site, what to eat, what to avoid, and when to come back if needed." },
        ].map((step) => (
          <div key={step.title} className="bg-card border border-border rounded-xl p-5">
            <h3 className="font-display font-bold text-lg text-foreground">{step.title}</h3>
            <p className="text-muted-foreground mt-1 text-sm">{step.desc}</p>
          </div>
        ))}
      </div>

      {/* Recovery */}
      <h2 className="text-2xl md:text-3xl font-display font-bold mt-12 text-foreground">Recovery After Wisdom Tooth Removal</h2>
      <p className="mt-3 text-foreground/85 leading-relaxed">
        Most patients recover well within a few days to a week, depending on the complexity of the procedure.
      </p>
      <ul className="space-y-4 my-6 list-none p-0">
        <Bullet>
          <strong>Pain and swelling:</strong> Swelling typically peaks around 48 to 72 hours after the extraction and then gradually subsides. Apply an ice pack wrapped in a cloth to the outside of your cheek for 20 minutes on and 20 minutes off during the first 24 hours. We prescribe appropriate pain medication.
        </Bullet>
        <Bullet>
          <strong>Bleeding:</strong> Minor bleeding in the first few hours is normal. Bite gently on the gauze pad we provide. Avoid spitting forcefully, rinsing vigorously, or using a straw in the first 24 hours.
        </Bullet>
        <Bullet>
          <strong>Oral hygiene:</strong> Do not brush the extraction site directly for the first day. After 24 hours, gently rinse with warm salt water several times a day.
        </Bullet>
        <Bullet>
          <strong>Diet:</strong> Stick to soft foods for the first several days. Good options include yogurt, mashed potatoes, soft rice, dal, soup, and scrambled eggs. Avoid hard, crunchy, or chewy foods.
        </Bullet>
        <Bullet>
          <strong>Dry socket:</strong> In a small number of cases, the blood clot can become dislodged before healing is complete. If you experience worsening pain a few days after the extraction, contact us immediately at <a href={telLink} className="text-primary hover:underline font-semibold">{CLINIC.phone}</a>.
        </Bullet>
      </ul>

      {/* Wisdom Tooth Infection */}
      <h2 className="text-2xl md:text-3xl font-display font-bold mt-12 text-foreground">Wisdom Tooth Infection: What You Need to Know</h2>
      <p className="mt-3 text-foreground/85 leading-relaxed">
        A wisdom tooth infection is one of the most common dental emergencies we see at Motiur's Dental. It happens most often around partially erupted wisdom teeth, where a flap of gum tissue creates a pocket that is nearly impossible to keep clean.
      </p>
      <p className="mt-3 text-foreground/85 leading-relaxed">
        The infection is called <strong>pericoronitis</strong> when it involves the gum tissue around a partially erupted tooth. Symptoms include intense pain, swelling, bad breath, difficulty opening the mouth fully, and in more serious cases, fever and swelling extending to the cheek and jaw.
      </p>
      <p className="mt-3 text-foreground/85 leading-relaxed">
        If you have a wisdom tooth infection, the first line of treatment is usually antibiotics to bring the infection under control. However, antibiotics alone are rarely a permanent solution. Once the infection has settled, we typically recommend extracting the wisdom tooth to prevent the infection from returning.
      </p>
      <p className="mt-3 text-foreground/85 leading-relaxed">
        Do not ignore a wisdom tooth infection. Left untreated, it can spread to surrounding tissues and bones. In serious cases it can spread to the neck and airway, which becomes a medical emergency.
      </p>

      {/* Alternatives */}
      <h2 className="text-2xl md:text-3xl font-display font-bold mt-12 text-foreground">Alternatives to Wisdom Tooth Removal</h2>
      <div className="grid gap-4 my-6">
        {[
          { title: "Monitoring", desc: "If your wisdom teeth are erupting normally, are not causing pain, and can be cleaned properly, we may simply monitor them with regular X-rays." },
          { title: "Antibiotics and Pain Management", desc: "For active infections, antibiotics are prescribed to clear the infection before any further treatment. Over-the-counter pain relievers like ibuprofen can help manage mild discomfort." },
          { title: "Operculectomy", desc: "In very specific cases where only a small flap of gum tissue is covering the wisdom tooth, a minor procedure can be performed to remove that flap, allowing the tooth to come through properly." },
        ].map((item) => (
          <div key={item.title} className="bg-card border border-border rounded-xl p-5">
            <h3 className="font-display font-bold text-lg text-foreground">{item.title}</h3>
            <p className="text-muted-foreground mt-1 text-sm">{item.desc}</p>
          </div>
        ))}
      </div>

      {/* Pain Relief at Home */}
      <h2 className="text-2xl md:text-3xl font-display font-bold mt-12 text-foreground">Wisdom Tooth Pain Relief at Home Before Your Appointment</h2>
      <ul className="space-y-4 my-6 list-none p-0">
        <Bullet>
          Over-the-counter pain relievers such as ibuprofen or paracetamol taken as directed can reduce pain and inflammation. Ibuprofen is particularly helpful because it addresses both pain and swelling simultaneously.
        </Bullet>
        <Bullet>
          Applying a cold compress to the outside of your cheek for 20 minutes at a time can reduce swelling and numb the area temporarily.
        </Bullet>
        <Bullet>
          Gently rinsing your mouth with warm salt water can soothe inflamed gum tissue and flush out food particles from around the erupting tooth.
        </Bullet>
      </ul>
      <p className="mt-3 text-foreground/85 leading-relaxed">
        These measures provide temporary relief only. They do not treat the underlying problem. Book your appointment at Motiur's Dental as soon as possible so we can assess the situation properly.
      </p>

      {/* Cost */}
      <h2 className="text-2xl md:text-3xl font-display font-bold mt-12 text-foreground" id="wisdom-tooth-cost-comilla">Wisdom Tooth Removal Cost in Debidwar, Comilla</h2>
      <p className="mt-3 text-foreground/85 leading-relaxed">
        The cost of wisdom tooth removal in Bangladesh depends on several factors. A simple extraction of a fully erupted wisdom tooth costs less than a surgical extraction of a deeply impacted one. The number of wisdom teeth being removed at once also affects the total cost.
      </p>
      <p className="mt-3 text-foreground/85 leading-relaxed">
        At Motiur's Dental in Debidwar, we offer wisdom tooth removal at prices that are significantly lower than dental clinics in Comilla city. Patients from Debidwar, Muradnagar, Chandina, Brahmanpara, Burichang, and Homna regularly come to us specifically because they know they will get professional-quality treatment at a fair and transparent price.
      </p>
      <p className="mt-3 text-foreground/85 leading-relaxed">
        We give every patient a clear, honest cost estimate during the consultation before any treatment begins. No hidden charges, no surprise fees.
      </p>

      <div className="bg-primary/10 rounded-xl p-5 my-6 text-center">
        <p className="font-display font-bold text-lg text-foreground mb-2">Get Your Cost Estimate</p>
        <a href={telLink} className="text-primary font-bold text-xl hover:underline">
          Call {CLINIC.phone}
        </a>
      </div>

      {/* FAQ */}
      <h2 className="text-2xl md:text-3xl font-display font-bold mt-12 text-foreground">Frequently Asked Questions</h2>
      <div className="space-y-4 my-6">
        {[
          { q: "At what age do wisdom teeth come in?", a: "Wisdom teeth typically begin erupting between the ages of 17 and 25. Some people experience eruption in their early teens, others not until their early thirties. A small number of people never develop wisdom teeth at all." },
          { q: "Does everyone need their wisdom teeth removed?", a: "No. If your wisdom teeth erupt fully, are not causing pain, and can be cleaned properly, removal may not be necessary. Regular monitoring with X-rays is recommended." },
          { q: "Is wisdom tooth removal painful?", a: "The procedure itself is not painful because it is done under local anesthesia. You will feel pressure and movement but not pain. Some soreness afterward is normal and is managed with medication." },
          { q: "How long does wisdom tooth pain last?", a: "Pain during a normal eruption typically lasts a few days to a week. Pain from an impacted wisdom tooth or infection can be persistent and progressively worsening." },
          { q: "How long is recovery after wisdom tooth removal?", a: "Most patients feel significantly better within three to four days. Full healing typically takes two to four weeks." },
          { q: "Can I eat normally after wisdom tooth removal?", a: "Not immediately. Stick to soft foods for the first several days. You can gradually return to your normal diet as the area heals." },
          { q: "What is dry socket and how do I avoid it?", a: "Dry socket occurs when the blood clot in the extraction site is dislodged before healing is complete. To avoid it, do not smoke, do not use a straw, do not spit forcefully, and avoid hard foods in the first few days." },
          { q: "Can wisdom teeth affect other teeth?", a: "Yes. Impacted wisdom teeth can press against the roots of neighboring molars, causing damage, pain, and even root resorption if left untreated." },
          { q: "Can wisdom teeth cause headaches?", a: "Yes. The pressure and inflammation caused by impacted or erupting wisdom teeth can cause referred pain that manifests as headaches, earaches, and jaw soreness." },
          { q: "What happens if I leave an infected wisdom tooth untreated?", a: "The infection can spread to surrounding bone, tissue, and in serious cases, to the neck and airway. An untreated dental infection can become life threatening." },
          { q: "Can I get wisdom tooth treatment in Debidwar without going to Comilla city?", a: "Yes, absolutely. Motiur's Dental in Debidwar handles all types of wisdom tooth cases including monitoring, infection treatment, simple extractions, and surgical removal." },
          { q: "What is the cost of wisdom tooth removal in Comilla?", a: "Costs depend on the complexity of the case. At Motiur's Dental, we offer the most affordable wisdom tooth removal prices in the Debidwar and Comilla area. Call 01816010194 for a personalized estimate." },
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
          Book Your Wisdom Tooth Appointment at Motiur's Dental
        </h2>
        <p className="text-muted-foreground max-w-xl mx-auto mb-6">
          If you are experiencing wisdom tooth pain, swelling, infection, or any of the symptoms described in this article, do not wait for it to get worse. Early treatment is always simpler, faster, and less expensive. We serve patients from Debidwar, Muradnagar, Chandina, Brahmanpara, Burichang, Homna, and all across Comilla district.
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

export default WisdomTeethArticle;

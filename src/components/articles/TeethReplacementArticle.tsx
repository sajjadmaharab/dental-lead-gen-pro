import { Phone, MapPin } from "lucide-react";
import { CLINIC, telLink } from "@/lib/clinic";

const Bullet = ({ children }: { children: React.ReactNode }) => (
  <li className="relative pl-6 before:content-[''] before:absolute before:left-0 before:top-[10px] before:w-2.5 before:h-2.5 before:rounded-full before:bg-primary/70 before:rotate-3">
    {children}
  </li>
);

const TeethReplacementArticle = () => {
  return (
    <article className="max-w-none">

      {/* Placeholder for hero image */}

      <h1 className="text-3xl md:text-4xl lg:text-5xl font-display font-extrabold text-foreground mb-6 leading-tight">
        Teeth Replacement Solutions in Debidwar, Comilla
      </h1>

      <p className="text-lg leading-relaxed text-foreground/90">
        Losing a tooth is something most people do not think much about until it actually happens. Then suddenly, chewing your favourite food feels different, smiling in photos feels uncomfortable, and you start becoming more aware of the gap every single day. Missing teeth affect a lot more than just how you look. They can change the way you speak, make eating genuinely difficult, and over time, cause the surrounding teeth to shift and the jawbone to weaken. The good news is that modern dentistry has excellent solutions for all of this, and at <strong>Motiur's Dental in Debidwar, Comilla</strong>, we offer every one of those solutions at a cost that is significantly lower than other dental clinics in the area.
      </p>
      <p className="mt-3 text-lg leading-relaxed text-foreground/90">
        We are not a clinic that gives you a one-size-fits-all answer. When you come to see us, we take the time to understand your situation, look at what is going on with your teeth, and walk you through your options honestly. Our goal is to help you find something that works well for your mouth and fits within your budget, because we genuinely believe that quality dental care should be available to everyone in Comilla, not just those who can afford to pay high prices elsewhere.
      </p>
      <p className="mt-3 text-lg leading-relaxed text-foreground/90">
        If you have been putting off dealing with a missing tooth because you were worried about the cost or the process, please call us at <a href={telLink} className="text-primary hover:underline font-medium">{CLINIC.phone}</a>. We are based right here in Debidwar, Comilla, and we would be glad to answer your questions.
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

      {/* 1. Dental Implants */}
      <h2 className="text-2xl md:text-3xl font-display font-bold mt-12 text-foreground">1. Dental Implants</h2>
      <p className="mt-3 text-foreground/85 leading-relaxed">
        Dental implants are widely considered the best tooth replacement option available in modern dentistry, and it is easy to see why. The treatment involves placing a small titanium post directly into the jawbone, where it acts as an artificial root. Once the implant has bonded with the bone, a custom-made dental crown is attached on top. The final result is a replacement tooth that looks, feels, and functions so naturally that most people cannot tell the difference.
      </p>
      <p className="mt-3 text-foreground/85 leading-relaxed">
        What makes implants stand out from every other option is that they work from the root up, just like a natural tooth does. They do not rely on neighbouring teeth for support, they do not come in and out, and they actively help preserve the jawbone by providing the stimulation the bone needs to stay healthy. When you lose a tooth and leave the gap untreated, the bone in that area starts to shrink over time. An implant stops that from happening.
      </p>
      <p className="mt-3 text-foreground/85 leading-relaxed">
        At Motiur's Dental in Debidwar, we provide dental implants at a price that is considerably lower than what other clinics in Comilla charge. The quality of the treatment is the same, but you are not paying for a big city clinic fee or unnecessary overhead.
      </p>

      <h3 className="text-xl font-display font-semibold mt-8 text-foreground">Benefits of Dental Implants at Motiur's Dental</h3>
      <ul className="space-y-4 my-6 list-none p-0">
        <Bullet>Looks and functions exactly like a natural tooth, most people around you will not be able to tell</Bullet>
        <Bullet>The titanium post fuses permanently with the jawbone, giving you a stable foundation that does not shift or slip</Bullet>
        <Bullet>No need to grind down or alter the healthy teeth on either side, which is something bridges require</Bullet>
        <Bullet>Prevents the jawbone from deteriorating in the area where the tooth was lost</Bullet>
        <Bullet>Custom crowns are carefully matched to the colour and shape of your natural teeth</Bullet>
        <Bullet>With proper care and regular checkups, dental implants can last a lifetime</Bullet>
        <Bullet>The most affordable dental implant pricing in Comilla, available right here in Debidwar at Motiur's Dental</Bullet>
      </ul>

      {/* 2. Implant-Supported Bridges */}
      <h2 className="text-2xl md:text-3xl font-display font-bold mt-12 text-foreground">2. Implant-Supported Bridges</h2>
      <p className="mt-3 text-foreground/85 leading-relaxed">
        When a patient has two or more missing teeth sitting next to each other, an implant-supported bridge is often one of the most practical and cost-effective solutions available. It works by placing dental implants at strategic points and then anchoring a bridge across them. This is different from a traditional bridge, which depends on the natural teeth on either side of the gap for its support.
      </p>
      <p className="mt-3 text-foreground/85 leading-relaxed">
        Because the bridge is supported by implants rather than natural teeth, you get a much more stable and long-lasting result. The natural teeth nearby are left completely untouched, and the implants below help maintain the health of the jawbone in the affected area.
      </p>

      <h3 className="text-xl font-display font-semibold mt-8 text-foreground">Benefits of Implant-Supported Bridges</h3>
      <ul className="space-y-4 my-6 list-none p-0">
        <Bullet>More affordable than placing a separate individual implant for every missing tooth</Bullet>
        <Bullet>Exceptionally durable and able to handle normal chewing pressure without issue</Bullet>
        <Bullet>Produces a completely natural appearance that blends smoothly with surrounding teeth</Bullet>
        <Bullet>Protects the jawbone underneath from the deterioration that comes with untreated tooth loss</Bullet>
        <Bullet>Restores proper chewing function so you can eat comfortably without avoiding certain foods</Bullet>
        <Bullet>Healthy natural teeth on either side of the gap are not affected or altered in any way</Bullet>
      </ul>

      {/* 3. Dental Bridges */}
      <h2 className="text-2xl md:text-3xl font-display font-bold mt-12 text-foreground">3. Dental Bridges</h2>
      <p className="mt-3 text-foreground/85 leading-relaxed">
        Dental bridges have been used in dentistry for a long time, and they remain one of the most popular and reliable options for replacing a missing tooth or a small group of missing teeth. A bridge works by creating an artificial tooth, called a pontic, that is held in place by dental crowns fitted onto the healthy teeth on either side of the gap. It is a fixed solution, meaning it stays in your mouth permanently and does not come out for cleaning.
      </p>
      <p className="mt-3 text-foreground/85 leading-relaxed">
        The procedure is typically completed over two visits and does not involve any surgery, which makes it a good option for patients who want effective results without a lengthy process. At Motiur's Dental, we custom-make every bridge to suit the individual patient, matching the shade and shape of the surrounding teeth so the final result looks completely natural.
      </p>

      <h3 className="text-xl font-display font-semibold mt-8 text-foreground">Benefits of Dental Bridges</h3>
      <ul className="space-y-4 my-6 list-none p-0">
        <Bullet>A well-established and proven treatment with a long history of successful results</Bullet>
        <Bullet>Can be used to replace a single missing tooth or several teeth in the same area</Bullet>
        <Bullet>No surgery involved, making it suitable for patients who prefer a non-invasive option</Bullet>
        <Bullet>Custom shading ensures the bridge blends naturally with the rest of your teeth</Bullet>
        <Bullet>Prevents the teeth on either side of the gap from tilting or shifting into the space</Bullet>
        <Bullet>Restores chewing ability and helps maintain the natural shape of your jaw</Bullet>
        <Bullet>One of the most cost-effective tooth replacement options, particularly at Motiur's Dental in Debidwar</Bullet>
      </ul>

      {/* 4. Dentures */}
      <h2 className="text-2xl md:text-3xl font-display font-bold mt-12 text-foreground">4. Dentures</h2>
      <p className="mt-3 text-foreground/85 leading-relaxed">
        Dentures have changed a great deal over the years. Modern dentures are far more comfortable, better fitting, and more natural-looking than older versions, and they remain one of the most practical solutions for patients who have lost a significant number of teeth. At Motiur's Dental, every set of dentures is custom-made for the individual patient, which means the fit, the comfort, and the appearance are all tailored specifically to you.
      </p>

      <h3 className="text-xl font-display font-semibold mt-8 text-foreground">4.1. Full Dentures</h3>
      <p className="mt-3 text-foreground/85 leading-relaxed">
        Full dentures are the right choice for patients who have lost all or nearly all of their teeth on the upper jaw, lower jaw, or both. A full denture consists of a carefully shaped acrylic base that is made to sit snugly and comfortably over your gums, with a full set of natural-looking artificial teeth attached to it. Each denture is custom-made based on measurements and impressions taken at our clinic, so it fits your mouth specifically rather than being a generic mould.
      </p>

      <h4 className="text-lg font-display font-semibold mt-6 text-foreground">Benefits of Full Dentures</h4>
      <ul className="space-y-4 my-6 list-none p-0">
        <Bullet>Allows you to eat a much wider variety of foods compared to having no teeth at all</Bullet>
        <Bullet>Significantly improves speech that has been affected by extensive tooth loss</Bullet>
        <Bullet>Restores the fullness and natural shape of the face, which often changes after major tooth loss</Bullet>
        <Bullet>The most affordable option available for patients who need a full set of replacement teeth</Bullet>
        <Bullet>Custom-made at Motiur's Dental to ensure a comfortable and natural-looking result</Bullet>
      </ul>

      <h4 className="text-lg font-display font-semibold mt-6 text-foreground">Things to Keep in Mind</h4>
      <p className="mt-3 text-foreground/85 leading-relaxed">
        There is usually a short adjustment period when you first start wearing full dentures. Speaking and eating may feel slightly unfamiliar in the beginning, but this settles quickly and our team will support you through it with practical advice. Dentures need to be cleaned daily and soaked overnight to keep them hygienic and comfortable. Over time, as the shape of your gums naturally changes, the dentures may need to be relined or eventually replaced to maintain a good fit.
      </p>

      <h3 className="text-xl font-display font-semibold mt-8 text-foreground">4.2. Partial Dentures</h3>
      <p className="mt-3 text-foreground/85 leading-relaxed">
        If you still have a number of healthy natural teeth remaining, partial dentures are a great way to fill in the gaps without affecting what you already have. A partial denture is a removable appliance that fits around your existing teeth, using metal clasps or precision attachments to stay securely in place. The replacement teeth are positioned to fill the gaps, giving you a complete-looking smile and restoring normal function.
      </p>

      <h4 className="text-lg font-display font-semibold mt-6 text-foreground">Benefits of Partial Dentures</h4>
      <ul className="space-y-4 my-6 list-none p-0">
        <Bullet>Your remaining healthy teeth are left completely untouched</Bullet>
        <Bullet>Fits naturally between your existing teeth and blends in well</Bullet>
        <Bullet>Stops the remaining teeth from gradually drifting into the gaps left by missing teeth</Bullet>
        <Bullet>Makes eating and speaking noticeably more comfortable</Bullet>
        <Bullet>A highly affordable option, especially at Motiur's Dental compared to other clinics in Comilla</Bullet>
      </ul>

      <h4 className="text-lg font-display font-semibold mt-6 text-foreground">Things to Keep in Mind</h4>
      <p className="mt-3 text-foreground/85 leading-relaxed">
        As with full dentures, there is usually a brief settling-in period at the start. Daily cleaning and regular visits to our clinic are important to make sure the partial denture continues to fit properly and stays comfortable. Partial dentures do have a lifespan and may need to be replaced after a number of years depending on how much wear they have experienced.
      </p>

      {/* FAQs */}
      <h2 className="text-2xl md:text-3xl font-display font-bold mt-12 text-foreground">Questions Our Patients Commonly Ask</h2>
      <div className="space-y-3 my-8">
        {[
          { q: "How long does it take to heal after getting a replacement tooth?", a: "It depends on the type of treatment. Dental implants involve a surgical step, so the healing is a bit longer. The initial soreness usually settles within one to two weeks, but the implant itself takes around three to six months to fully bond with the jawbone. Bridges and dentures do not involve surgery, so most patients feel comfortable again within just a few days." },
          { q: "Will I be able to eat normally?", a: "Yes, absolutely, though you will need to be a bit careful during the early healing phase. With dental implants, avoid very hard or chewy foods during the first few months while the implant is integrating. With bridges and dentures, you can generally return to your normal diet once any initial soreness passes." },
          { q: "How long will my replacement teeth last?", a: "Dental implants, with proper daily care and regular checkups, have the potential to last your entire lifetime. Dental bridges typically last anywhere from seven to fifteen years. Dentures generally need to be replaced or relined after five to ten years." },
          { q: "Is the procedure going to be painful?", a: "At Motiur's Dental, we use effective local anaesthesia so that you feel as little discomfort as possible during your treatment. Some mild soreness afterward is completely normal. The vast majority of our patients tell us afterward that the experience was much easier than they had expected." },
          { q: "Why is it important to replace a missing tooth rather than leaving the gap?", a: "Leaving a gap causes the teeth on either side to gradually tilt and shift into the empty space, which throws off your bite. The jawbone in the area deteriorates because it no longer has a root stimulating it. Over time, this can change the shape of your face. Replacing a missing tooth as early as possible is the best thing you can do for your long-term oral health." },
          { q: "How much does teeth replacement cost at Motiur's Dental?", a: "Motiur's Dental in Debidwar, Comilla offers the most affordable teeth replacement costs in the district. We are very straightforward about pricing and we do not have hidden fees. Call us at 01816010194 to book your free consultation." },
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
          Visit Us at Motiur's Dental, Debidwar, Comilla
        </h2>
        <p className="text-muted-foreground max-w-xl mx-auto mb-6">
          If missing teeth have been affecting your daily life, your confidence, or your ability to eat comfortably, there is no reason to keep putting it off. Come and see us at Motiur's Dental in Debidwar, Comilla. We will assess your situation properly and walk you through your options clearly and honestly.
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

export default TeethReplacementArticle;

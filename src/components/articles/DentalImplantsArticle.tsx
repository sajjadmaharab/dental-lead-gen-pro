import { Phone, MapPin } from "lucide-react";
import { CLINIC, telLink } from "@/lib/clinic";
import ImageCarousel from "@/components/ImageCarousel";
import heroImg from "@/assets/implant-hero.jpg";
import processImg from "@/assets/implant-process.jpg";
import xray1 from "@/assets/implant-xray-1.jpg";
import xray2 from "@/assets/implant-xray-2.jpg";
import xray3 from "@/assets/implant-xray-3.jpg";
import xray4 from "@/assets/implant-xray-4.jpg";
import implantsVsDentures from "@/assets/implants-vs-dentures.jpg";
import implantPost from "@/assets/implant-post-cylinder.jpg";

const Bullet = ({ children }: { children: React.ReactNode }) => (
  <li className="relative pl-6 before:content-[''] before:absolute before:left-0 before:top-[10px] before:w-2.5 before:h-2.5 before:rounded-full before:bg-primary/70 before:rotate-3">
    {children}
  </li>
);

const xrayImages = [
  { src: xray1, alt: "Dental implant X-ray showing titanium post fused with jawbone at Motiur's Dental Debidwar Comilla", caption: "Implant post integrated with jawbone" },
  { src: xray2, alt: "Dental implant placement X-ray at Motiur's Dental clinic Debidwar Comilla Bangladesh", caption: "Implant placement in jawbone" },
  { src: xray3, alt: "X-ray of dental implant surgery procedure at Motiur's Dental Debidwar", caption: "Implant surgical procedure X-ray" },
  { src: xray4, alt: "Successful dental implant osseointegration X-ray Motiur's Dental Comilla", caption: "Implant after osseointegration" },
];

const DentalImplantsArticle = () => {
  return (
    <article className="max-w-none">

      {/* Hero Image */}
      <div className="w-full overflow-hidden mb-6 max-h-[280px] md:max-h-[340px]">
        <img
          src={heroImg}
          alt="Dental implant procedure at Motiur's Dental clinic in Debidwar Comilla Bangladesh"
          className="w-full h-full object-cover"
          loading="eager"
          width={1200}
          height={340}
        />
      </div>

      <h1 className="text-3xl md:text-4xl lg:text-5xl font-display font-extrabold text-foreground mb-6 leading-tight">
        Dental Implants in Debidwar, Comilla
      </h1>

      {/* Intro */}
      <p className="text-lg leading-relaxed text-foreground/90">
        If you are missing one or more teeth, you already know how much it affects your confidence, your ability to eat comfortably, and even the way you speak. At <strong>Motiur's Dental in Debidwar, Comilla</strong>, we offer professional dental implant treatment that gives you back a fully functional, natural-looking smile. And compared to other clinics in the Comilla district, our prices are significantly lower without any compromise on quality or materials.
      </p>
      <p className="mt-4 text-lg leading-relaxed text-foreground/90">
        Whether you are from Debidwar, Muradnagar, Chandina, Brahmanpara, Burichang, or anywhere else in the Comilla region, you do not need to travel far or spend a fortune to get a proper dental implant done.
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

      {/* What is */}
      <h2 className="text-2xl md:text-3xl font-display font-bold mt-12 text-foreground">What is a Dental Implant?</h2>
      <p className="mt-3 text-foreground/85 leading-relaxed">
        A dental implant is a small titanium post that is placed directly into your jawbone during a minor surgical procedure. This post acts as an artificial tooth root. Over the following months, the implant fuses naturally with your jawbone through a process called osseointegration, creating an extremely stable and permanent base.
      </p>
      <p className="mt-3 text-foreground/85 leading-relaxed">
        Once that healing is complete, a custom-made dental crown is attached on top. The crown is designed to match the color, shape, and size of your surrounding teeth so it looks completely natural. Most people cannot tell the difference between an implant and a real tooth, and that is exactly the point.
      </p>

      {/* X-ray images gallery */}
      {isMobile ? (
        <div className="relative my-8">
          <figure
            className="overflow-hidden border border-border cursor-pointer"
            onClick={() => setLightbox({ src: xrayImages[xrayIndex].src, alt: xrayImages[xrayIndex].alt })}
          >
            <img
              src={xrayImages[xrayIndex].src}
              alt={xrayImages[xrayIndex].alt}
              className="w-full h-auto object-cover"
              loading="lazy"
            />
            <figcaption className="text-xs text-muted-foreground text-center py-2 px-2">{xrayImages[xrayIndex].caption}</figcaption>
          </figure>
          <button
            onClick={() => setXrayIndex((prev) => (prev - 1 + xrayImages.length) % xrayImages.length)}
            className="absolute left-2 top-1/2 -translate-y-1/2 bg-background/80 backdrop-blur-sm border border-border rounded-full p-1.5 shadow-md"
            aria-label="Previous X-ray image"
          >
            <ChevronLeft className="h-5 w-5 text-foreground" />
          </button>
          <button
            onClick={() => setXrayIndex((prev) => (prev + 1) % xrayImages.length)}
            className="absolute right-2 top-1/2 -translate-y-1/2 bg-background/80 backdrop-blur-sm border border-border rounded-full p-1.5 shadow-md"
            aria-label="Next X-ray image"
          >
            <ChevronRight className="h-5 w-5 text-foreground" />
          </button>
          <div className="flex justify-center gap-1.5 mt-3">
            {xrayImages.map((_, i) => (
              <span key={i} className={`w-2 h-2 rounded-full transition-colors ${i === xrayIndex ? 'bg-primary' : 'bg-muted-foreground/30'}`} />
            ))}
          </div>
        </div>
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 my-8">
          {xrayImages.map((img, i) => (
            <figure key={i} className="overflow-hidden border border-border cursor-pointer group" onClick={() => setLightbox({ src: img.src, alt: img.alt })}>
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-auto object-cover transition-transform group-hover:scale-105"
                loading="lazy"
              />
              <figcaption className="text-xs text-muted-foreground text-center py-2 px-2">{img.caption}</figcaption>
            </figure>
          ))}
        </div>
      )}

      {/* Why implants */}
      <h2 className="text-2xl md:text-3xl font-display font-bold mt-12 text-foreground">Why Dental Implants and Not Dentures or Bridges?</h2>
      <p className="mt-3 text-foreground/85 leading-relaxed">
        This is a question we hear a lot at Motiur's Dental, and it is a fair one. Dentures and bridges have been around for a long time and they do work, but they come with real limitations.
      </p>
      <p className="mt-3 text-foreground/85 leading-relaxed">
        Dentures can slip when you eat or talk. They require regular removal and cleaning. Over time, because there is no tooth root in the jaw, the bone underneath starts to shrink, which changes the shape of your face and makes the denture fit worse over time.
      </p>
      <p className="mt-3 text-foreground/85 leading-relaxed">
        Bridges require your dentist to grind down the healthy teeth on either side of the gap to support the bridge. You are essentially damaging good teeth to fix the missing one.
      </p>
      <p className="mt-3 text-foreground/85 leading-relaxed">
        Dental implants avoid all of these problems. The implant sits in the jawbone just like a natural root. It stimulates the bone and prevents that shrinkage. It does not affect any neighboring teeth. It is fixed permanently in place, so there is no slipping, no removal, and no special cleaning routine beyond what you already do for your natural teeth.
      </p>
      <p className="mt-3 text-foreground/85 leading-relaxed">
        For most patients who are eligible, a dental implant is simply the better long-term decision.
      </p>

      {/* Implants vs Dentures image */}
      <figure className="my-8 overflow-hidden border border-border cursor-pointer" onClick={() => setLightbox({ src: implantsVsDentures, alt: "Dental implants vs dentures comparison Motiur's Dental Debidwar Comilla" })}>
        <img
          src={implantsVsDentures}
          alt="Dental implants vs dentures comparison: why implants are better long-term solution at Motiur's Dental Debidwar Comilla"
          className="w-full h-auto object-cover"
          loading="lazy"
        />
        <figcaption className="text-xs text-muted-foreground text-center py-2 px-2">Dental implants vs traditional dentures</figcaption>
      </figure>

      {/* Candidates */}
      <h2 className="text-2xl md:text-3xl font-display font-bold mt-12 text-foreground">Who is a Good Candidate for Dental Implants?</h2>
      <p className="mt-3 text-foreground/85 leading-relaxed">
        Most healthy adults are good candidates for dental implants. At Motiur's Dental, we do a thorough assessment before recommending the procedure to make sure it is right for you.
      </p>
      <p className="mt-3 text-foreground/85 leading-relaxed">Generally speaking, you are likely a good candidate if:</p>
      <ul className="space-y-4 my-6 list-none p-0">
        <Bullet>You have one or more missing teeth</Bullet>
        <Bullet>Your jawbone has enough density to support an implant</Bullet>
        <Bullet>Your gums are healthy</Bullet>
        <Bullet>You do not have uncontrolled diabetes or other conditions that could affect healing</Bullet>
      </ul>
      <p className="mt-3 text-foreground/85 leading-relaxed">
        If your jawbone has thinned out over time, do not worry. In many cases, a bone graft procedure can build it back up enough to support an implant. We will assess this during your consultation and walk you through your options clearly.
      </p>

      {/* Problems we solve */}
      <h2 className="text-2xl md:text-3xl font-display font-bold mt-12 text-foreground">What Dental Implant Problems Can We Solve?</h2>
      <div className="flex flex-col md:flex-row gap-6 my-6 items-start">
        <ul className="space-y-4 list-none p-0 flex-1">
          <Bullet>
            <strong>Single missing tooth:</strong> A single implant with a crown is the cleanest and most natural solution for replacing one missing tooth. It looks exactly like a real tooth and does not affect the teeth around it.
          </Bullet>
          <Bullet>
            <strong>Multiple missing teeth:</strong> If you are missing several teeth in a row, implant-supported bridges are an excellent option. Instead of placing an implant for every single missing tooth, we place implants at key points and attach a bridge across them.
          </Bullet>
          <Bullet>
            <strong>All teeth missing:</strong> For patients who have lost all or most of their teeth, implant-supported full dentures or full bridges are a permanent and much more stable alternative to traditional removable dentures.
          </Bullet>
          <Bullet>
            <strong>Failed or broken old implants:</strong> If you have had implant work done elsewhere that has not held up, we can assess the situation and often provide a successful solution.
          </Bullet>
        </ul>
        <figure className="w-full max-w-[260px] md:max-w-[240px] lg:max-w-[280px] shrink-0 overflow-hidden border border-border self-start mx-auto md:mx-0">
          <video
            src="/videos/implant-procedure.mp4"
            controls
            preload="none"
            playsInline
            muted
            className="w-full h-auto"
            title="Dental implant procedure video at Motiur's Dental Debidwar Comilla"
          />
          <figcaption className="text-xs text-muted-foreground text-center py-2 px-2">Implant procedure at our clinic</figcaption>
        </figure>
      </div>

      {/* Implant Brands */}
      <h2 className="text-2xl md:text-3xl font-display font-bold mt-12 text-foreground">Implant Brands We Use at Motiur's Dental</h2>
      <p className="mt-3 text-foreground/85 leading-relaxed">
        At Motiur's Dental, we use internationally recognized implant systems from both America and Korea. These brands have decades of clinical research behind them and are trusted by dental professionals worldwide.
      </p>
      <p className="mt-3 text-foreground/85 leading-relaxed">
        American implant brands are known for their precision engineering and long track record in implant dentistry. Korean implant brands such as Osstem and Dentium have become globally respected for combining excellent quality with more accessible pricing, which directly benefits our patients.
      </p>
      <p className="mt-3 text-foreground/85 leading-relaxed">
        Using world-class implant brands means your implant has the best possible chance of lasting a lifetime with proper care.
      </p>

      {/* Implant post image */}
      <div className="flex flex-col md:flex-row gap-6 my-8 items-start">
        <figure className="w-full md:w-1/2 overflow-hidden border border-border cursor-pointer" onClick={() => setLightbox({ src: implantPost, alt: "Dental implant titanium post and cylinder used at Motiur's Dental Debidwar" })}>
          <img
            src={implantPost}
            alt="Dental implant titanium post and cylinder used at Motiur's Dental clinic Debidwar Comilla Bangladesh"
            className="w-full h-auto object-cover"
            loading="lazy"
          />
          <figcaption className="text-xs text-muted-foreground text-center py-2 px-2">Titanium implant post used at our clinic</figcaption>
        </figure>
      </div>

      {/* Procedure Steps */}
      <h2 className="text-2xl md:text-3xl font-display font-bold mt-12 text-foreground">The Dental Implant Procedure: Step by Step</h2>
      <p className="mt-3 text-foreground/85 leading-relaxed">We want our patients to know exactly what to expect. Here is how the process works from start to finish.</p>

      <div className="flex flex-col md:flex-row gap-6 my-6">
        <div className="grid gap-4 flex-1">
          {[
            { title: "Step 1: Consultation and Assessment", desc: "You come in, we examine your teeth, gums, and jawbone. We may take X-rays or other imaging to understand your bone structure clearly. We talk through your situation, answer your questions, and give you a transparent cost estimate with no hidden fees." },
            { title: "Step 2: Treatment Planning", desc: "Using the information from your assessment, we create a precise treatment plan. This includes the number of implants needed, whether a bone graft is required, and the timeline for the full procedure." },
            { title: "Step 3: Implant Placement", desc: "Under local anesthesia, we carefully place the titanium implant post into your jawbone. The procedure is much more comfortable than most people expect. You will feel pressure but not pain. The appointment typically takes one to two hours depending on how many implants are being placed." },
            { title: "Step 4: Healing Period", desc: "Over the next two to six months, your jawbone naturally grows around and bonds with the implant. During this time, we provide a temporary solution so you are not walking around with a visible gap." },
            { title: "Step 5: Abutment Placement", desc: "Once the implant has fully fused with the bone, we attach a small connector piece called an abutment. This is what the final crown will sit on." },
            { title: "Step 6: Crown Fitting", desc: "Your custom crown is placed onto the abutment. We make sure the fit, color, and bite are perfect before you leave. At this point, the process is complete and your new tooth is fully functional." },
          ].map((item) => (
            <div key={item.title} className="bg-card border border-border rounded-xl p-5">
              <h3 className="font-display font-bold text-lg text-foreground">{item.title}</h3>
              <p className="text-muted-foreground mt-1 text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
        <figure className="w-full max-w-[200px] md:max-w-[240px] lg:max-w-[280px] shrink-0 overflow-hidden border border-border self-start mx-auto md:mx-0">
          <img
            src={processImg}
            alt="Tooth implant process steps diagram showing implant placement procedure at Motiur's Dental Debidwar Comilla"
            className="w-full h-auto object-cover"
            loading="lazy"
          />
          <figcaption className="text-xs text-muted-foreground text-center py-2 px-2">Step-by-step tooth implant process</figcaption>
        </figure>
      </div>

      {/* Benefits */}
      <h2 className="text-2xl md:text-3xl font-display font-bold mt-12 text-foreground">Benefits of Getting Dental Implants at Motiur's Dental</h2>
      <ul className="space-y-4 my-6 list-none p-0">
        <Bullet>
          <strong>Natural appearance:</strong> Your implant crown is made to match your existing teeth. Nobody will know it is not real unless you tell them.
        </Bullet>
        <Bullet>
          <strong>Permanent and stable:</strong> Unlike dentures, implants are fixed. They do not move, slip, or require adhesives.
        </Bullet>
        <Bullet>
          <strong>Eat and speak normally:</strong> Because implants function like natural teeth, you can eat whatever you want and speak without any worry.
        </Bullet>
        <Bullet>
          <strong>Bone preservation:</strong> Implants stimulate the jawbone the same way natural tooth roots do, preventing the bone loss that happens with missing teeth over time.
        </Bullet>
        <Bullet>
          <strong>Protects surrounding teeth:</strong> No grinding down of neighboring teeth like with a bridge.
        </Bullet>
        <Bullet>
          <strong>Long-lasting:</strong> With proper care, the implant itself can last a lifetime. The crown on top may need replacement after 10 to 15 years, but the implant underneath typically does not.
        </Bullet>
        <Bullet>
          <strong>Better oral health overall:</strong> Gaps left by missing teeth can cause remaining teeth to shift over time. Implants keep everything in place.
        </Bullet>
      </ul>

      {/* Cost */}
      <h2 className="text-2xl md:text-3xl font-display font-bold mt-12 text-foreground" id="dental-implant-cost-comilla">
        Dental Implant Cost in Debidwar, Comilla
      </h2>
      <p className="mt-3 text-foreground/85 leading-relaxed">
        Dental implant cost is one of the first things people ask about, and understandably so. Implants are an investment, but they are also the most cost-effective tooth replacement solution in the long run because they last so much longer than bridges or dentures.
      </p>
      <p className="mt-3 text-foreground/85 leading-relaxed">
        At Motiur's Dental, we are committed to offering the lowest dental implant prices in the Debidwar and Comilla area. We do not cut corners on materials or technique, but we do keep our overheads low so our patients benefit from fair pricing.
      </p>
      <p className="mt-3 text-foreground/85 leading-relaxed">
        The total cost depends on factors like the number of implants, whether a bone graft is needed, and the type of crown chosen. We give every patient a full cost breakdown during the consultation so there are no surprises.
      </p>
      <div className="bg-primary/10 rounded-xl p-5 my-6 text-center">
        <p className="font-display font-bold text-lg text-foreground mb-2">Get Your Cost Estimate</p>
        <a href={telLink} className="text-primary font-bold text-xl hover:underline">
          Call {CLINIC.phone}
        </a>
      </div>

      {/* Things to know */}
      <h2 className="text-2xl md:text-3xl font-display font-bold mt-12 text-foreground">Things to Know Before Getting a Dental Implant</h2>
      <ul className="space-y-4 my-6 list-none p-0">
        <Bullet>
          <strong>Implants involve a surgical procedure.</strong> It is a minor surgery done under local anesthesia, but it is still surgery. Our team takes every precaution to ensure your safety and comfort throughout.
        </Bullet>
        <Bullet>
          <strong>The healing process takes time.</strong> You cannot rush osseointegration. The two to six month healing period is necessary for a successful long-term result.
        </Bullet>
        <Bullet>
          <strong>The crown may need replacement eventually.</strong> The implant root is designed to last forever, but the crown on top can wear down after 10 to 15 years. Replacing just the crown is a straightforward procedure.
        </Bullet>
        <Bullet>
          <strong>Not everyone qualifies immediately.</strong> If your bone density is too low or you have certain health conditions, we may need to address those first. This is why the initial consultation is so important.
        </Bullet>
      </ul>

      {/* Care */}
      <h2 className="text-2xl md:text-3xl font-display font-bold mt-12 text-foreground">How to Take Care of Your Dental Implant</h2>
      <p className="mt-3 text-foreground/85 leading-relaxed">
        Taking care of an implant is no different from taking care of your natural teeth. Brush twice a day, floss daily, and come in for regular checkups at Motiur's Dental. Avoid chewing on extremely hard objects like ice or bottle caps. If you grind your teeth at night, let us know as we can provide a nightguard to protect both your implant and your natural teeth.
      </p>
      <p className="mt-3 text-foreground/85 leading-relaxed">
        With proper care, your implant can genuinely last the rest of your life.
      </p>

      {/* FAQ */}
      <h2 className="text-2xl md:text-3xl font-display font-bold mt-12 text-foreground">Frequently Asked Questions About Dental Implants</h2>
      <div className="space-y-4 my-6">
        {[
          { q: "Is the dental implant procedure painful?", a: "The procedure is done under local anesthesia so you will not feel pain during the surgery. Some soreness and swelling afterward is normal and manageable with over-the-counter pain relief. Most patients are surprised by how comfortable the experience is." },
          { q: "How long does a dental implant last?", a: "The implant itself, meaning the titanium post in your jawbone, is designed to last a lifetime. The crown on top typically lasts 10 to 15 years before it may need replacing." },
          { q: "How long does the full process take?", a: "From the first consultation to the final crown placement, the process usually takes between three and nine months. Most of that time is the healing period where the implant is fusing with the bone." },
          { q: "Can I get an implant if I have been missing a tooth for years?", a: "Yes, in most cases. However, if you have been missing a tooth for a long time, some bone loss may have occurred. We will assess this and let you know if a bone graft is needed first." },
          { q: "Are dental implants safe?", a: "Yes. Dental implants have been used successfully for decades and have one of the highest success rates of any surgical procedure in dentistry. We use internationally certified implant systems and follow strict sterilization protocols." },
          { q: "What is the dental implant cost in Comilla?", a: "The cost varies depending on your specific situation. At Motiur's Dental, we offer the most affordable implant pricing in the Debidwar and Comilla area. Call 01816010194 for a consultation and we will give you a clear, honest estimate." },
          { q: "Is a bone graft always necessary?", a: "No. Most patients do not need one. A bone graft is only required if your jawbone has lost density. We determine this during the initial assessment." },
          { q: "Can I get implants for all my teeth?", a: "Yes. Implant-supported full bridges or full dentures are an option for patients who have lost all or most of their teeth. This gives you a fixed, permanent solution instead of removable dentures." },
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
          Book Your Dental Implant Consultation at Motiur's Dental
        </h2>
        <p className="text-muted-foreground max-w-xl mx-auto mb-6">
          If you are ready to stop living with missing teeth and want a permanent, natural-looking solution, Motiur's Dental in Debidwar, Comilla is the right place to start. We offer honest pricing, experienced care, and a genuine commitment to your long-term oral health.
        </p>
        <p className="text-muted-foreground text-sm mb-6">
          We serve patients from Debidwar, Muradnagar, Chandina, Brahmanpara, Burichang, Homna, and across Comilla district.
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

export default DentalImplantsArticle;

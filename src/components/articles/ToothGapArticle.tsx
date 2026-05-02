import { Phone, MapPin } from "lucide-react";
import { CLINIC, telLink } from "@/lib/clinic";
import { ImageCarousel } from "@/components/ImageCarousel";

import heroImg from "@/assets/tooth-gap-hero.jpg";
import ab1 from "@/assets/tooth-gap-ab-1.png";
import ab2 from "@/assets/tooth-gap-ab-2.png";
import ab3 from "@/assets/tooth-gap-ab-3.png";
import ab4 from "@/assets/tooth-gap-ab-4.png";
import ab5 from "@/assets/tooth-gap-ab-5.webp";
import bondingImg from "@/assets/tooth-gap-bonding.jpg";
import veneersImg from "@/assets/tooth-gap-veneers.jpg";
import alignersImg from "@/assets/tooth-gap-aligners.jpg";
import bracesImg from "@/assets/tooth-gap-braces.jpg";

const Bullet = ({ children }: { children: React.ReactNode }) => (
  <li className="relative pl-6 before:content-[''] before:absolute before:left-0 before:top-[10px] before:w-2.5 before:h-2.5 before:rounded-full before:bg-primary/70 before:rotate-3">
    {children}
  </li>
);

const beforeAfterImages = [
  { src: ab1, alt: "Tooth gap before and after treatment at Motiur's Dental Debidwar case 1" },
  { src: ab2, alt: "Diastema closure before and after dental bonding Comilla case 2" },
  { src: ab3, alt: "Gap between teeth fixed with cosmetic treatment Debidwar case 3" },
  { src: ab4, alt: "Front teeth gap treatment before and after Motiur's Dental case 4" },
  { src: ab5, alt: "Tooth gap closed with porcelain veneers before after Comilla case 5" },
];

const ToothGapArticle = () => {
  return (
    <article className="max-w-none">

      {/* Hero image */}
      <div className="w-full overflow-hidden mb-6 max-h-[280px] md:max-h-[340px]">
        <img
          src={heroImg}
          alt="Tooth gap treatment before and after illustration showing gap closure between front teeth at Motiur's Dental Debidwar Comilla"
          className="w-full h-full object-cover"
          loading="eager"
          width={800}
          height={340}
        />
      </div>

      <h1 className="text-3xl md:text-4xl lg:text-5xl font-display font-extrabold text-foreground mb-6 leading-tight">
        Tooth Gap Treatment: Close Gaps Between Teeth
      </h1>

      {/* Intro */}
      <p className="text-lg leading-relaxed text-foreground/90">
        A gap between your teeth is more common than you think. Some people embrace it, but many find it affects their confidence, their speech, and even their oral health over time. At <strong>Motiur's Dental in Debidwar, Comilla</strong>, we offer multiple proven solutions to close gaps between teeth, from quick and affordable bonding to long-lasting porcelain veneers. Whatever the size of the gap and whatever your budget, we will find the right treatment for you.
      </p>
      <p className="mt-3 text-lg leading-relaxed text-foreground/90">
        And if you are worried about cost, here is something worth knowing upfront: our prices for tooth gap treatment are among the lowest in the Debidwar and Comilla area, with no compromise on quality.
      </p>

      {/* Before & After gallery */}
      <div className="my-8">
        <ImageCarousel images={beforeAfterImages} mobileMaxH="240px" desktopCols={3} />
      </div>

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

      {/* What is Diastema */}
      <h2 className="text-2xl md:text-3xl font-display font-bold mt-12 text-foreground">What is a Tooth Gap? (Diastema)</h2>
      <p className="mt-3 text-foreground/85 leading-relaxed">
        The medical term for a gap between teeth is <strong>diastema</strong>. It refers to a space or spacing between two or more teeth and it can occur anywhere in the mouth. The most common and noticeable location is between the two upper front teeth, which is why it tends to attract the most attention.
      </p>
      <p className="mt-3 text-foreground/85 leading-relaxed">
        Diastema is a very common condition. It occurs in both children and adults, and the causes vary widely from person to person. Some gaps are purely cosmetic. Others can gradually affect your oral health if left unaddressed.
      </p>

      {/* Causes */}
      <h2 className="text-2xl md:text-3xl font-display font-bold mt-12 text-foreground">What Causes Gaps Between Teeth?</h2>
      <p className="mt-3 text-foreground/85">Understanding the cause of your tooth gap helps determine the most effective treatment. At Motiur's Dental, we assess each patient individually because the right solution depends on the reason behind the gap.</p>
      <ul className="space-y-4 my-6 list-none p-0">
        <Bullet>
          <strong>Genetics:</strong> If your parents or close relatives have gaps between their teeth, there is a good chance you inherited the same jaw and tooth size proportions. When the jawbone is larger relative to the size of the teeth, gaps naturally appear between them.
        </Bullet>
        <Bullet>
          <strong>Missing teeth:</strong> When a baby tooth falls out too early due to decay or injury, or when an adult tooth simply never grows in, the surrounding teeth tend to shift toward the empty space. This movement creates gaps between the remaining teeth.
        </Bullet>
        <Bullet>
          <strong>Tongue thrusting habit:</strong> This is more common than most people realize. When someone consistently pushes their tongue against their front teeth while swallowing instead of resting it against the roof of the mouth, that repeated pressure gradually pushes the front teeth apart over time.
        </Bullet>
        <Bullet>
          <strong>Gum disease:</strong> Gum disease causes inflammation and bone loss around the teeth. As the supporting bone weakens, teeth lose their stability and begin to drift apart, creating spacing that was not there before.
        </Bullet>
        <Bullet>
          <strong>Jaw size relative to tooth size:</strong> If your jaw is significantly larger than your teeth, there simply is not enough tooth material to fill the available space. This results in gaps throughout the mouth rather than just between one or two teeth.
        </Bullet>
        <Bullet>
          <strong>Smaller than average teeth:</strong> Even with a normal-sized jaw, teeth that are smaller than average will not fill the space properly, leaving visible gaps between them.
        </Bullet>
        <Bullet>
          <strong>Frenulum attachment:</strong> The frenulum is the band of tissue that connects your upper lip to your upper gum. In some people, this tissue is larger or positioned lower than usual, and it can sit directly between the two front teeth, physically preventing them from coming together.
        </Bullet>
        <Bullet>
          <strong>Thumb sucking in childhood:</strong> Prolonged thumb sucking puts consistent outward pressure on the developing front teeth and jaw. Over time this can push teeth out of their natural position and create gaps that persist into adulthood.
        </Bullet>
        <Bullet>
          <strong>Muscle pressure from lips or cheeks:</strong> Imbalanced pressure from the muscles surrounding the teeth can contribute to misalignment and spacing, especially in the front of the mouth.
        </Bullet>
        <Bullet>
          <strong>Congenitally missing teeth (Tooth Agenesis):</strong> Some people are simply born without one or more adult teeth. When those teeth never develop, the surrounding teeth may drift into the empty area, creating gaps.
        </Bullet>
      </ul>

      {/* Why treat */}
      <h2 className="text-2xl md:text-3xl font-display font-bold mt-12 text-foreground">Why Should You Treat a Tooth Gap?</h2>
      <p className="mt-3 text-foreground/85">Not every gap requires treatment, but many do. Here is why it is worth taking seriously beyond just the cosmetic concern.</p>
      <ul className="space-y-4 my-6 list-none p-0">
        <Bullet>
          <strong>Oral hygiene becomes harder:</strong> Gaps between teeth create pockets where food particles and plaque collect easily. Brushing and flossing cannot always reach these areas effectively, which increases the risk of cavities and gum disease over time.
        </Bullet>
        <Bullet>
          <strong>Food gets stuck:</strong> Food impaction in gaps is uncomfortable and also contributes to bacterial growth, bad breath, and decay if it happens regularly.
        </Bullet>
        <Bullet>
          <strong>Gum recession:</strong> When plaque sits trapped at the gum line around a gap for an extended period, it causes chronic inflammation. Over time this leads to gum recession, which exposes the sensitive root surfaces of teeth and increases tooth sensitivity.
        </Bullet>
        <Bullet>
          <strong>Speech difficulties:</strong> Gaps between the front teeth, particularly the upper incisors, can cause a lisp or affect how clearly you pronounce certain sounds. Air escapes through the gap during speech production, affecting words with sounds like "s" and "th."
        </Bullet>
        <Bullet>
          <strong>Shifting teeth:</strong> Gaps disrupt the natural balance between your teeth. Neighboring teeth tend to drift toward the open space over time, which can cause misalignment, bite problems, and additional gaps elsewhere.
        </Bullet>
        <Bullet>
          <strong>Jaw pain and headaches:</strong> When teeth become misaligned due to gaps, the pressure on your jaw joint and surrounding muscles becomes uneven. This can lead to jaw pain, facial discomfort, and headaches that many people never connect back to their teeth.
        </Bullet>
        <Bullet>
          <strong>Confidence and self-esteem:</strong> Many of our patients at Motiur's Dental come to us not because of pain but because they have stopped smiling the way they used to. That matters too, and it is a completely valid reason to seek treatment.
        </Bullet>
      </ul>

      {/* Treatment Options */}
      <h2 className="text-2xl md:text-3xl font-display font-bold mt-12 text-foreground">Tooth Gap Treatment Options at Motiur's Dental</h2>
      <p className="mt-3 text-foreground/85">We offer several different treatment approaches depending on the size of the gap, where it is located, and what outcome you are looking for. Here is a full breakdown of each option.</p>

      {/* 1. Bonding */}
      <h3 className="text-xl md:text-2xl font-display font-bold mt-10 text-foreground">1. Dental Bonding for Small Gaps</h3>
      <p className="mt-3 text-foreground/85 leading-relaxed">
        Dental bonding is one of the most popular treatments we offer at Motiur's Dental, and for good reason. It is quick, affordable, and produces results that look completely natural.
      </p>
      <p className="mt-3 text-foreground/85 leading-relaxed">
        The procedure involves applying a tooth-colored composite resin material directly onto the surface of the teeth surrounding the gap. The dentist carefully sculpts and shapes the resin to close the space and create a uniform look. A special curing light is then used to harden the material, bonding it permanently to the tooth. Finally, the surface is polished for a smooth, natural finish.
      </p>
      <p className="mt-3 text-foreground/85 leading-relaxed">
        The entire process is usually completed in a single appointment. Anesthesia is generally not required, which means no injections and no downtime.
      </p>
      <div className="bg-card border border-border rounded-xl p-5 my-6 space-y-2">
        <p className="text-foreground/85"><strong>Best for:</strong> Small to moderate gaps, patients on a budget, anyone who wants a quick result in one visit.</p>
        <p className="text-foreground/85"><strong>How long does it last:</strong> With proper care, dental bonding typically lasts several years. Occasional touch-ups may be needed over time.</p>
        <p className="text-foreground/85"><strong>Things to keep in mind:</strong> Bonding material is slightly more susceptible to staining than natural enamel, so limiting coffee, tea, and tobacco will help maintain the result. It can also chip if you regularly bite on hard objects, though minor chips are easy to repair.</p>
        <p className="text-foreground/85"><strong>Approximate cost in Bangladesh:</strong> BDT 3,000 to BDT 15,000 per tooth. At Motiur's Dental, our bonding prices are at the lower end of this range.</p>
      </div>

      {/* Bonding image */}
      <figure className="my-6">
        <img
          src={bondingImg}
          alt="Dental bonding before and after for tooth gap closure showing natural-looking results Debidwar Comilla"
          className="w-full object-cover"
          loading="lazy"
          width={800}
          height={400}
        />
        <figcaption className="text-xs text-muted-foreground mt-2 text-center">Dental bonding: before and after gap closure</figcaption>
      </figure>

      {/* 2. Veneers */}
      <h3 className="text-xl md:text-2xl font-display font-bold mt-10 text-foreground">2. Porcelain Veneers for Wider Gaps</h3>
      <p className="mt-3 text-foreground/85 leading-relaxed">
        For patients with wider or more noticeable gaps, porcelain veneers offer a more comprehensive and longer-lasting solution. Veneers are ultra-thin shells of high-quality porcelain that are custom-made in a dental laboratory and then permanently bonded to the front surface of your teeth.
      </p>
      <p className="mt-3 text-foreground/85 leading-relaxed">
        Because each veneer is crafted specifically for your tooth, the color, shape, and size can be designed to close the gap while also improving the overall appearance of your smile. Porcelain is exceptionally resistant to staining and mimics the natural translucency of real tooth enamel, so the result looks genuinely natural.
      </p>
      <p className="mt-3 text-foreground/85 leading-relaxed">
        The process typically involves two or three appointments. During the first visit, we prepare the teeth by removing a very thin layer of enamel from the surface, take precise impressions, and fit you with temporary veneers. Once the permanent ones are ready, we bond them to your teeth and make any final adjustments.
      </p>
      <div className="bg-card border border-border rounded-xl p-5 my-6 space-y-2">
        <p className="text-foreground/85"><strong>Best for:</strong> Moderate to wider gaps, patients who also want to address other cosmetic concerns like discoloration or uneven teeth at the same time, patients looking for a long-lasting result.</p>
        <p className="text-foreground/85"><strong>How long does it last:</strong> Porcelain veneers typically last 10 to 15 years or longer with proper care.</p>
        <p className="text-foreground/85"><strong>Things to keep in mind:</strong> The procedure involves removing a small amount of enamel, which cannot grow back. This makes it an irreversible treatment. It also costs more than bonding, though the durability and aesthetics often make it a worthwhile investment.</p>
        <p className="text-foreground/85"><strong>Approximate cost in Bangladesh:</strong> BDT 6,000 to BDT 20,000 per tooth. At Motiur's Dental, we offer competitive veneer pricing that is significantly lower than clinics in Comilla city or Dhaka.</p>
      </div>

      {/* Veneers image */}
      <figure className="my-6">
        <img
          src={veneersImg}
          alt="Porcelain veneers before and after results for closing tooth gaps at dental clinic Debidwar Comilla"
          className="w-full object-cover"
          loading="lazy"
          width={800}
          height={400}
        />
        <figcaption className="text-xs text-muted-foreground mt-2 text-center">Porcelain veneers: before and after gap treatment</figcaption>
      </figure>

      {/* 3. Clear Aligners */}
      <h3 className="text-xl md:text-2xl font-display font-bold mt-10 text-foreground">3. Clear Aligners for Minor Gap Closure</h3>
      <p className="mt-3 text-foreground/85 leading-relaxed">
        Clear aligners are a series of custom-made, removable plastic trays that gradually move your teeth into the desired position over time. They are nearly invisible when worn, which makes them a popular choice for adults who want a discreet option.
      </p>
      <p className="mt-3 text-foreground/85 leading-relaxed">
        For tooth gap treatment, clear aligners work best when the gap is minor and not caused by a structural issue with the jaw or missing teeth. They are not suitable for all cases of diastema, particularly large gaps or complex situations.
      </p>
      <div className="bg-card border border-border rounded-xl p-5 my-6 space-y-2">
        <p className="text-foreground/85"><strong>Best for:</strong> Mild gaps in otherwise well-aligned teeth, patients who prefer a discreet treatment option, patients who want to avoid any permanent changes to their tooth structure.</p>
        <p className="text-foreground/85"><strong>How long does it last:</strong> Once treatment is complete, you wear a retainer to maintain the result permanently.</p>
        <p className="text-foreground/85"><strong>Things to keep in mind:</strong> Clear aligners require strict compliance. You need to wear them for 20 to 22 hours a day for the treatment to work on schedule. They are also generally more expensive than bonding or veneers.</p>
        <p className="text-foreground/85"><strong>Approximate cost in Bangladesh:</strong> BDT 100,000 to BDT 200,000 for the full treatment course.</p>
      </div>

      {/* Aligners image - smaller */}
      <figure className="my-6 flex justify-center">
        <div className="max-w-xs md:max-w-sm">
          <img
            src={alignersImg}
            alt="Clear aligners for closing minor tooth gaps without braces affordable treatment Debidwar Comilla"
            className="w-full object-cover"
            loading="lazy"
            width={400}
            height={300}
          />
          <figcaption className="text-xs text-muted-foreground mt-2 text-center">Clear aligners for minor gap closure</figcaption>
        </div>
      </figure>

      {/* 4. Traditional Braces */}
      <h3 className="text-xl md:text-2xl font-display font-bold mt-10 text-foreground">4. Traditional Braces for Complex Cases</h3>
      <p className="mt-3 text-foreground/85 leading-relaxed">
        When the gap is large, when multiple gaps exist throughout the mouth, or when the spacing is accompanied by significant misalignment, traditional braces remain the most reliable and thorough solution. Braces apply continuous pressure to gradually move teeth into the correct positions over a period of months or years.
      </p>
      <p className="mt-3 text-foreground/85 leading-relaxed">
        At Motiur's Dental, we assess whether braces are necessary during your consultation and refer you appropriately if orthodontic treatment is the best path for your case.
      </p>
      <div className="bg-card border border-border rounded-xl p-5 my-6 space-y-2">
        <p className="text-foreground/85"><strong>Best for:</strong> Large gaps, multiple gaps, cases involving significant misalignment alongside spacing.</p>
        <p className="text-foreground/85"><strong>Approximate cost in Bangladesh:</strong> BDT 20,000 to BDT 80,000 depending on the type of braces and complexity of treatment.</p>
      </div>

      {/* Braces image */}
      <figure className="my-6">
        <img
          src={bracesImg}
          alt="Traditional braces for complex tooth gap and misalignment treatment orthodontic care Debidwar Comilla"
          className="w-full object-cover"
          loading="lazy"
          width={800}
          height={400}
        />
        <figcaption className="text-xs text-muted-foreground mt-2 text-center">Traditional braces for complex gap and alignment cases</figcaption>
      </figure>

      {/* 5. Cosmetic Contouring */}
      <h3 className="text-xl md:text-2xl font-display font-bold mt-10 text-foreground">5. Cosmetic Contouring for Very Minor Gaps</h3>
      <p className="mt-3 text-foreground/85 leading-relaxed">
        For extremely small gaps where the issue is more about the shape of the tooth than actual spacing, cosmetic contouring can be a quick and minimally invasive option. This involves gently reshaping the tooth enamel using a dental drill or laser to create the visual impression of a closed gap.
      </p>
      <p className="mt-3 text-foreground/85 leading-relaxed">
        It is a fast procedure, requires no anesthesia in most cases, and produces immediate results. However, it is only appropriate for very minor cases and the enamel removed cannot be replaced.
      </p>
      <div className="bg-card border border-border rounded-xl p-5 my-6 space-y-2">
        <p className="text-foreground/85"><strong>Best for:</strong> Minimal gaps where reshaping the tooth edge alone is enough to improve the appearance.</p>
      </div>

      {/* How we decide */}
      <h2 className="text-2xl md:text-3xl font-display font-bold mt-12 text-foreground">How Do We Decide Which Treatment is Right for You?</h2>
      <p className="mt-3 text-foreground/85 leading-relaxed">
        At Motiur's Dental, we never push one treatment over another based on cost or convenience. We look at the actual size and cause of your gap, your overall oral health, your aesthetic goals, and your budget, and then we give you an honest recommendation.
      </p>
      <p className="mt-3 text-foreground/85 leading-relaxed">
        Some patients come in expecting to need veneers and find that bonding is a better fit for their situation. Others come in wanting a quick fix and we have to explain that a more involved approach will serve them better long term. We will always be straightforward with you.
      </p>

      {/* Cost */}
      <h2 className="text-2xl md:text-3xl font-display font-bold mt-12 text-foreground" id="tooth-gap-cost-comilla">
        Tooth Gap Treatment Cost in Debidwar, Comilla
      </h2>
      <p className="mt-3 text-foreground/85 leading-relaxed">
        Cost is one of the most common concerns our patients have, and we understand that completely. The size and number of gaps being treated plays the biggest role. Closing one small gap with bonding is significantly less expensive than closing multiple wider gaps with veneers. The treatment method itself also determines cost, as some procedures involve more chair time, materials, and laboratory work than others.
      </p>
      <p className="mt-3 text-foreground/85 leading-relaxed">
        What we can tell you with confidence is that <strong>Motiur's Dental in Debidwar offers the most affordable tooth gap treatment pricing in the Comilla district</strong>. Patients from Muradnagar, Chandina, Brahmanpara, Burichang, Homna, and Comilla city come to us specifically because they get the same quality of treatment at a fraction of what other clinics charge.
      </p>
      <p className="mt-3 text-foreground/85">
        We give every patient a clear, honest cost estimate during the consultation before any treatment begins. No hidden charges, no surprise fees.
      </p>
      <div className="bg-primary/10 rounded-xl p-5 my-6 text-center">
        <p className="font-display font-bold text-lg text-foreground mb-2">Get Your Cost Estimate</p>
        <a href={telLink} className="text-primary font-bold text-xl hover:underline">
          Call {CLINIC.phone}
        </a>
      </div>

      {/* Aftercare */}
      <h2 className="text-2xl md:text-3xl font-display font-bold mt-12 text-foreground">How to Take Care of Your Teeth After Gap Treatment</h2>
      <p className="mt-3 text-foreground/85">Regardless of which treatment you choose, a few simple habits will help your results last as long as possible.</p>
      <ul className="space-y-4 my-6 list-none p-0">
        <Bullet>Brush your teeth twice a day with a soft-bristled toothbrush and fluoride toothpaste.</Bullet>
        <Bullet>Floss daily, paying attention to the areas where the treatment was applied.</Bullet>
        <Bullet>Avoid biting down on extremely hard objects like ice, bottle caps, or hard candy.</Bullet>
        <Bullet>If you clench or grind your teeth at night, mention this to us as a nightguard can protect your treatment significantly.</Bullet>
        <Bullet>Come in for regular checkups at Motiur's Dental so we can monitor the condition of your treatment and catch any issues early.</Bullet>
      </ul>

      {/* FAQ */}
      <h2 className="text-2xl md:text-3xl font-display font-bold mt-12 text-foreground">Frequently Asked Questions About Tooth Gap Treatment</h2>
      <div className="space-y-4 my-6">
        {[
          { q: "Can gaps between teeth be fixed permanently?", a: "Yes. Dental bonding and porcelain veneers both offer long-lasting results. Veneers in particular can last 10 to 15 years or more. Clear aligners and braces move teeth into a new position that is then maintained with a retainer permanently." },
          { q: "Is there a natural way to close a tooth gap?", a: "There are no scientifically proven natural methods that can close a gap between teeth. Maintaining good oral hygiene and avoiding habits like thumb sucking in children can prevent gaps from getting worse, but they will not close an existing gap. For actual closure, a dental procedure is necessary." },
          { q: "Is tooth gap treatment painful?", a: "Most treatments for tooth gaps are comfortable and require little or no anesthesia. Bonding and contouring involve no injections at all. Veneer preparation involves some enamel removal which is done under local anesthesia. Braces and aligners cause mild pressure as teeth move but are not painful in the traditional sense." },
          { q: "How long does tooth bonding for a gap take?", a: "Dental bonding for a gap can usually be completed in a single appointment lasting between 30 minutes and one hour depending on the number of teeth involved." },
          { q: "Will my gap come back after treatment?", a: "This depends on the treatment and the underlying cause of the gap. If the cause was a tongue thrusting habit or gum disease that has not been addressed, the gap can return over time. This is one reason we always assess the root cause of your gap before recommending a treatment." },
          { q: "What is diastema?", a: "Diastema is the medical term for a gap between teeth. It is a common condition and can occur between any two teeth, though it is most noticeable between the upper front teeth." },
          { q: "At what age should a tooth gap be treated?", a: "Gaps in baby teeth may close on their own as adult teeth come through, so treatment is usually not recommended for young children unless the gap is causing a functional problem. For adults, there is no age limit. Many of our patients at Motiur's Dental have gaps treated in their 30s, 40s, and beyond." },
          { q: "What is the cheapest way to fix a gap between teeth?", a: "Dental bonding is the most affordable option for small to moderate gaps. At Motiur's Dental, our bonding prices are among the lowest in the Comilla area." },
          { q: "Do I need braces to fix a gap?", a: "Not always. Braces are typically reserved for larger or more complex cases. Many gaps can be effectively treated with bonding, veneers, or aligners. We will assess your specific case and recommend the most appropriate option." },
          { q: "Can I get tooth gap treatment in Debidwar without going to Comilla city?", a: "Yes, absolutely. Motiur's Dental in Debidwar offers the full range of tooth gap treatments including bonding, veneers, and clear aligners, so you do not need to travel to Comilla city or Dhaka for quality care." },
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
          Book Your Tooth Gap Consultation at Motiur's Dental
        </h2>
        <p className="text-muted-foreground max-w-xl mx-auto mb-6">
          If you have been thinking about closing the gap between your teeth, the best next step is a consultation. We will examine your teeth, explain exactly which treatments are suitable for your case, and give you a clear and honest cost estimate.
        </p>
        <p className="text-muted-foreground text-sm mb-6">
          Serving patients from Debidwar, Muradnagar, Chandina, Brahmanpara, Burichang, Homna, and all of Comilla district.
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

export default ToothGapArticle;

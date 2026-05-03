import { Phone, MapPin } from "lucide-react";
import { CLINIC, telLink } from "@/lib/clinic";
import ImageCarousel from "@/components/ImageCarousel";

import scalingHero from "@/assets/scaling-hero.jpg";
import scalingBA from "@/assets/scaling-before-after.jpg";
import plaqueTartar from "@/assets/plaque-vs-tartar.webp";
import scalingAb1 from "@/assets/scaling-ab-1.webp";
import scalingAb2 from "@/assets/scaling-ab-2.webp";
import scalingAb3 from "@/assets/scaling-ab-3.jpg";
import scalingAb4 from "@/assets/scaling-ab-4.webp";
import scalingAb5 from "@/assets/scaling-ab-5.jpg";
import whiteningSmile from "@/assets/whitening-smile.jpg";
import whiteningAb1 from "@/assets/whitening-ab-1.jpg";
import whiteningAb2 from "@/assets/whitening-ab-2.jpg";

const Bullet = ({ children }: { children: React.ReactNode }) => (
  <li className="relative pl-6 before:content-[''] before:absolute before:left-0 before:top-[10px] before:w-2.5 before:h-2.5 before:rounded-full before:bg-primary/70 before:rotate-3">
    {children}
  </li>
);

const scalingBeforeAfterImages = [
  { src: scalingAb1, alt: "Teeth scaling before and after treatment showing tartar removal at Motiur's Dental Debidwar", caption: "Case 1: Full mouth scaling" },
  { src: scalingAb2, alt: "Professional dental cleaning before and after result at Motiur's Dental Comilla", caption: "Case 2: Lower teeth tartar removal" },
  { src: scalingAb3, alt: "Teeth cleaning before and after showing stain and tartar removal Debidwar", caption: "Case 3: Stain and tartar removal" },
  { src: scalingAb4, alt: "Scaling and polishing before and after result showing brighter teeth Comilla", caption: "Case 4: Heavy stain removal" },
  { src: scalingAb5, alt: "Dental scaling result before and after treatment at Motiur's Dental Debidwar Comilla", caption: "Case 5: Scaling and polishing result" },
];

const whiteningBeforeAfterImages = [
  { src: whiteningAb1, alt: "Teeth whitening before and after result showing brighter smile at Motiur's Dental Debidwar", caption: "Whitening Case 1" },
  { src: whiteningAb2, alt: "Professional teeth whitening before and after treatment result Comilla", caption: "Whitening Case 2" },
];

const ScalingWhiteningArticle = () => {
  return (
    <article className="max-w-none">

      <div className="w-full overflow-hidden mb-6 max-h-[280px] md:max-h-[340px]">
        <img src={scalingHero} alt="Teeth with plaque and tartar buildup requiring professional scaling and cleaning at Motiur's Dental Debidwar Comilla" className="w-full h-full object-cover" loading="eager" width={800} height={400} />
      </div>

      <h1 className="text-3xl md:text-4xl lg:text-5xl font-display font-extrabold text-foreground mb-6 leading-tight">
        Scaling, Polishing, and Teeth Whitening in Debidwar, Comilla
      </h1>

      <p className="text-lg leading-relaxed text-foreground/90">
        Most people brush their teeth every day and still end up with tartar buildup, stained teeth, and gum problems. That is because regular brushing at home, no matter how consistent, cannot remove hardened deposits that have already formed on and around your teeth. This is exactly what professional scaling and polishing is for, and at <strong>Motiur's Dental in Debidwar, Comilla</strong>, we perform this treatment every day for patients who want healthier gums, cleaner teeth, and a brighter smile.
      </p>
      <p className="mt-3 text-foreground/85 leading-relaxed">
        If you are also looking to go a step further and whiten your teeth, we offer professional teeth whitening services as well, at prices that are significantly more affordable than other clinics in the Comilla district.
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

      {/* What is Scaling and Polishing */}
      <h2 className="text-2xl md:text-3xl font-display font-bold mt-12 text-foreground">What is Dental Scaling and Polishing?</h2>
      <p className="mt-3 text-foreground/85 leading-relaxed">
        Scaling and polishing together make up what is commonly called a professional dental cleaning or prophylaxis. They are two separate steps that work together to give your teeth a level of clean that is simply not achievable at home.
      </p>
      <p className="mt-3 text-foreground/85 leading-relaxed">
        <strong>Scaling</strong> is the process of removing hardened plaque, also called tartar or calculus, from the surfaces of your teeth. This includes deposits both above the gum line and below it, in the areas where a toothbrush cannot reach. Tartar is essentially plaque that has been left long enough to mineralize and harden onto the tooth surface. Once it hardens, it cannot be brushed or flossed away. It requires specialized dental instruments to remove safely.
      </p>
      <p className="mt-3 text-foreground/85 leading-relaxed">
        <strong>Polishing</strong> follows the scaling step. After the tartar has been removed, the tooth surfaces are smoothed and buffed using a gritty polishing paste or an air-powder polishing system. This removes any remaining surface stains and leaves the teeth feeling smooth and looking noticeably cleaner. The smooth surface also makes it harder for plaque to cling back to the teeth afterward.
      </p>
      <p className="mt-3 text-foreground/85 leading-relaxed">
        Together, scaling and polishing are one of the most important preventive treatments in dentistry. Dentists worldwide recommend getting it done every six months.
      </p>

      <img
        src={scalingBA}
        alt="Dental scaling before and after showing tartar removal from teeth at Motiur's Dental Debidwar Comilla"
        className="w-full my-6"
        loading="lazy"
        width={800}
        height={400}
      />

      {/* Tartar */}
      <h2 className="text-2xl md:text-3xl font-display font-bold mt-12 text-foreground">What is Tartar and Why is it a Problem?</h2>
      <p className="mt-3 text-foreground/85 leading-relaxed">
        Tartar, also known as dental calculus, forms when plaque is not removed in time. Plaque is the soft, sticky film of bacteria that builds up on your teeth throughout the day. You can remove plaque with brushing and flossing if you do it consistently and correctly. But if any plaque is missed, it starts absorbing minerals from your saliva and hardens within a matter of days.
      </p>
      <p className="mt-3 text-foreground/85 leading-relaxed">
        Once tartar forms, it becomes a rough, porous surface that attracts even more plaque and bacteria. It sits right at and below the gum line, which is exactly where gum disease starts. The bacteria in tartar produce toxins that irritate the gum tissue, causing inflammation, bleeding, and over time, bone loss around the teeth.
      </p>
      <p className="mt-3 text-foreground/85 leading-relaxed">
        This is why professional scaling is not just a cosmetic treatment. It is a genuine health intervention that prevents gum disease and protects the long-term stability of your teeth.
      </p>

      <img
        src={plaqueTartar}
        alt="Plaque vs tartar comparison diagram showing how dental plaque hardens into calculus causing gum disease"
        className="w-full my-6"
        loading="lazy"
        width={800}
        height={450}
      />

      {/* Signs */}
      <h2 className="text-2xl md:text-3xl font-display font-bold mt-12 text-foreground">Signs That You Need Scaling and Polishing</h2>
      <p className="mt-3 text-foreground/85">Many patients at Motiur's Dental come in because they notice one or more of the following. If any of these apply to you, it is time to book a professional cleaning.</p>
      <ul className="space-y-4 my-6 list-none p-0">
        <Bullet><strong>Your gums bleed when you brush or floss.</strong> This is one of the earliest and most common signs of gum inflammation caused by tartar buildup. Healthy gums do not bleed during normal brushing.</Bullet>
        <Bullet><strong>You have persistent bad breath.</strong> Bacteria in tartar deposits produce sulfur compounds that cause bad breath. Even if you brush diligently, the smell returns because the source, the tartar, is still there.</Bullet>
        <Bullet><strong>You can see yellow or brown deposits near the gum line.</strong> These are visible tartar deposits. They are more common on the lower front teeth and the back surfaces of upper molars.</Bullet>
        <Bullet><strong>Your teeth feel rough or gritty</strong> when you run your tongue over them. This roughness is often tartar buildup on the enamel surface.</Bullet>
        <Bullet><strong>Your gums look puffy, red, or swollen.</strong> This is a sign of gum inflammation that typically results from bacteria in tartar irritating the gum tissue.</Bullet>
        <Bullet><strong>Your teeth look more yellow or stained than usual.</strong> Surface staining from tea, coffee, food, and other sources accumulates over time and polishing can remove much of it.</Bullet>
      </ul>

      {/* Procedure */}
      <h2 className="text-2xl md:text-3xl font-display font-bold mt-12 text-foreground">The Scaling and Polishing Procedure at Motiur's Dental</h2>
      <p className="mt-3 text-foreground/85">The procedure is straightforward, comfortable, and usually completed in a single appointment.</p>
      <ol className="space-y-3 my-6 list-decimal list-inside text-foreground/85 marker:text-primary marker:font-bold">
        <li>We begin with a thorough examination of your teeth and gums to assess the extent of tartar buildup and check for any signs of gum disease.</li>
        <li>For the scaling step, we use either an ultrasonic scaler or hand scalers, or a combination of both. The ultrasonic scaler uses high-frequency vibrations along with a water spray to break apart and flush away tartar deposits. Hand scalers are used for more precise work, particularly below the gum line.</li>
        <li>After scaling is complete, we move to polishing. A rotating brush or rubber cup is used with a professional polishing paste to buff the surface of each tooth.</li>
        <li>We finish with a thorough rinse and a check of your bite and gum condition.</li>
      </ol>
      <p className="mt-3 text-foreground/85">The entire appointment typically takes between 30 and 60 minutes depending on how much tartar is present.</p>

      <div className="my-8">
        <ImageCarousel images={scalingBeforeAfterImages} />
      </div>

      {/* Benefits */}
      <h2 className="text-2xl md:text-3xl font-display font-bold mt-12 text-foreground">Benefits of Professional Scaling and Polishing</h2>
      <ul className="space-y-4 my-6 list-none p-0">
        <Bullet><strong>Removes tartar that brushing cannot.</strong> No matter how well you brush, once plaque hardens into tartar, only professional instruments can remove it.</Bullet>
        <Bullet><strong>Prevents gum disease.</strong> Gum disease starts with tartar irritating the gum tissue. Regular scaling removes the source before it can cause damage.</Bullet>
        <Bullet><strong>Stops bad breath at the source.</strong> Removing bacterial deposits from around the teeth and gum line eliminates the primary cause of chronic bad breath.</Bullet>
        <Bullet><strong>Reduces gum bleeding and inflammation.</strong> Many patients notice that their gums stop bleeding when they brush within a few days of getting a professional cleaning.</Bullet>
        <Bullet><strong>Removes surface stains.</strong> Polishing lifts coffee, tea, and food stains from the tooth surface, revealing a noticeably brighter and cleaner appearance.</Bullet>
        <Bullet><strong>Protects your teeth long term.</strong> Regular professional cleaning, combined with good brushing and flossing at home, is the most effective way to keep your teeth and gums healthy for life.</Bullet>
        <Bullet><strong>Creates a smooth surface.</strong> The polished surface of your teeth makes it harder for plaque and stains to stick back on, giving your at-home hygiene routine a better chance of keeping up with buildup.</Bullet>
      </ul>

      {/* Side Effects */}
      <h2 className="text-2xl md:text-3xl font-display font-bold mt-12 text-foreground">Side Effects of Scaling and Polishing</h2>
      <p className="mt-3 text-foreground/85 leading-relaxed">
        Scaling and polishing are very safe procedures, but it is normal to experience some temporary effects afterward.
      </p>
      <p className="mt-3 text-foreground/85 leading-relaxed">
        <strong>Tooth sensitivity</strong> is the most common. When tartar is removed from around the gum line and below it, the previously covered areas of the tooth are exposed to air and temperature changes for the first time in a while. This can cause brief sensitivity to hot, cold, or sweet things for a day or two. Using a sensitive toothpaste after the procedure helps significantly.
      </p>
      <p className="mt-3 text-foreground/85 leading-relaxed">
        Some <strong>gum tenderness</strong> is also normal, particularly if there was significant inflammation before the cleaning. Your gums may feel slightly sore for a day or two as they recover and begin to heal.
      </p>
      <p className="mt-3 text-foreground/85 leading-relaxed">
        These effects are temporary and mild in the vast majority of cases. If you experience significant or prolonged discomfort after your cleaning at Motiur's Dental, call us right away at <a href={telLink} className="text-primary font-semibold hover:underline">{CLINIC.phone}</a>.
      </p>

      {/* How Often */}
      <h2 className="text-2xl md:text-3xl font-display font-bold mt-12 text-foreground">How Often Should You Get Scaling and Polishing?</h2>
      <p className="mt-3 text-foreground/85 leading-relaxed">
        The standard recommendation from dental professionals worldwide is <strong>every six months</strong>, or twice a year. This interval keeps tartar from building up to a level where it causes significant damage to the gums or surrounding bone.
      </p>
      <p className="mt-3 text-foreground/85 leading-relaxed">
        Some patients need more frequent cleanings, particularly those with a history of gum disease, those who produce tartar more quickly, or those who smoke. Others with excellent oral hygiene and minimal buildup may be fine with once a year. At Motiur's Dental, we assess your individual situation and recommend the right frequency for you.
      </p>
      <p className="mt-3 text-foreground/85 leading-relaxed">
        What we always tell our patients is this: waiting until you have visible problems is far more expensive and complicated than staying on schedule with preventive cleaning. A regular scaling and polishing appointment is one of the most cost-effective things you can do for your dental health.
      </p>

      {/* What is Teeth Whitening */}
      <h2 className="text-2xl md:text-3xl font-display font-bold mt-12 text-foreground">What is Teeth Whitening?</h2>
      <p className="mt-3 text-foreground/85 leading-relaxed">
        Teeth whitening is a cosmetic dental procedure that removes deeper stains and discoloration from the tooth enamel, making your teeth significantly brighter and whiter in appearance.
      </p>
      <p className="mt-3 text-foreground/85 leading-relaxed">
        Over time, the enamel of your teeth absorbs pigments from what you eat and drink. Coffee, tea, red wine, cola, curry, and soy sauce are among the biggest culprits. Tobacco, whether smoked or chewed, causes particularly stubborn staining. Certain medications taken during tooth development can also cause deep discoloration that regular cleaning cannot remove. And as we age, the outer enamel layer naturally thins, allowing the slightly yellow dentine underneath to show through more.
      </p>
      <p className="mt-3 text-foreground/85 leading-relaxed">
        Polishing during a regular cleaning can address surface stains. But for deeper discoloration that has penetrated the enamel, a dedicated whitening treatment is needed.
      </p>

      <img
        src={whiteningSmile}
        alt="Woman smiling with bright white teeth after professional teeth whitening treatment"
        className="w-full my-6"
        loading="lazy"
        width={800}
        height={500}
      />

      {/* Types of Whitening */}
      <h2 className="text-2xl md:text-3xl font-display font-bold mt-12 text-foreground">Types of Teeth Whitening Available at Motiur's Dental</h2>
      <div className="grid gap-4 my-6">
        {[
          { title: "In-Office Professional Whitening", desc: "Performed at our clinic in Debidwar during a single appointment. A high-concentration whitening gel is applied directly to your teeth and activated using a special light. The results are immediate and significant. Most patients see a noticeable difference of several shades in just one session." },
          { title: "At-Home Whitening with Custom Trays", desc: "Custom-made trays that fit precisely over your teeth. You fill the trays with a professional-grade whitening gel and wear them at home for a set period each day, typically one to two hours or overnight. Results develop gradually over one to two weeks. The custom trays also mean you have a reusable whitening system you can top up periodically." },
        ].map((item) => (
          <div key={item.title} className="bg-card border border-border rounded-xl p-5">
            <h3 className="font-display font-bold text-lg text-foreground">{item.title}</h3>
            <p className="text-muted-foreground mt-1 text-sm">{item.desc}</p>
          </div>
        ))}
      </div>
      <p className="text-foreground/85">We discuss both options with every patient and recommend the one that fits your schedule, budget, and desired outcome.</p>

      <div className="my-8">
        <ImageCarousel images={whiteningBeforeAfterImages} />
      </div>

      {/* Why Scale Before Whitening */}
      <h2 className="text-2xl md:text-3xl font-display font-bold mt-12 text-foreground">Why Get Scaling and Polishing Before Teeth Whitening?</h2>
      <p className="mt-3 text-foreground/85 leading-relaxed">
        This is something we always advise at Motiur's Dental and here is the reasoning behind it.
      </p>
      <p className="mt-3 text-foreground/85 leading-relaxed">
        When tartar deposits and surface stains are sitting on your teeth, the whitening gel cannot make even contact with the actual tooth enamel underneath. The result is uneven whitening, patchy spots, and a less dramatic outcome overall.
      </p>
      <p className="mt-3 text-foreground/85 leading-relaxed">
        By getting your teeth professionally scaled and polished first, you remove all those obstacles. The enamel surface is clean, smooth, and fully exposed. When the whitening gel is then applied, it penetrates evenly and works to its maximum potential.
      </p>
      <p className="mt-3 text-foreground/85 leading-relaxed">
        Patients who whiten after a professional cleaning consistently get better, more even, and longer-lasting results than those who skip the cleaning step. If you are considering whitening, book a scaling and polishing appointment first and you will be very glad you did.
      </p>

      {/* Before and After Results */}
      <h2 className="text-2xl md:text-3xl font-display font-bold mt-12 text-foreground">Teeth Whitening: What Kind of Results Can You Expect?</h2>
      <p className="mt-3 text-foreground/85 leading-relaxed">
        Results vary from person to person because the starting shade of your teeth, the type and cause of staining, and your overall enamel condition all play a role.
      </p>
      <p className="mt-3 text-foreground/85 leading-relaxed">
        That said, most patients who undergo professional whitening at Motiur's Dental see a meaningful improvement in brightness. Stains from coffee, tea, and food respond very well. Tobacco staining also responds, though it may require more than one session for heavy staining. Deeper discoloration caused by certain medications or by the natural thinning of enamel with age may not respond as dramatically to whitening, and in those cases we may recommend veneers or bonding as a more effective alternative.
      </p>
      <p className="mt-3 text-foreground/85 leading-relaxed">
        The best way to understand what whitening can realistically do for your specific teeth is to come in for a consultation. We will assess your teeth honestly and give you a clear picture of what to expect before you commit to any treatment.
      </p>

      {/* How Long Does Whitening Last */}
      <h2 className="text-2xl md:text-3xl font-display font-bold mt-12 text-foreground">How Long Does Teeth Whitening Last?</h2>
      <p className="mt-3 text-foreground/85 leading-relaxed">
        Professional teeth whitening results typically last anywhere from several months to a couple of years, depending on your lifestyle and habits.
      </p>
      <p className="mt-3 text-foreground/85 leading-relaxed">
        The main factors that shorten whitening results are consuming staining foods and drinks regularly, tobacco use, and poor oral hygiene. If you continue drinking coffee and tea daily without rinsing afterward, your results will fade faster.
      </p>
      <p className="mt-3 text-foreground/85 leading-relaxed">
        To maintain your results for as long as possible, rinse your mouth with water after consuming staining foods or drinks, brush twice daily, floss regularly, and come in for your routine scaling and polishing appointments at Motiur's Dental. Many patients also do a brief top-up whitening session once a year to keep their smile looking its best.
      </p>

      {/* Understanding the Difference */}
      <h2 className="text-2xl md:text-3xl font-display font-bold mt-12 text-foreground">Scaling, Polishing, and Whitening: Understanding the Difference</h2>
      <p className="mt-3 text-foreground/85">These three procedures are related but serve different purposes:</p>
      <div className="grid gap-4 my-6">
        {[
          { title: "Scaling", desc: "A health procedure. Its primary purpose is to remove tartar and protect your gums and teeth from disease. It targets both above and below the gum line using specialized instruments." },
          { title: "Polishing", desc: "A finishing step that follows scaling. It removes surface stains and smooths the tooth surface. It improves appearance and makes it harder for future buildup to stick." },
          { title: "Teeth Whitening", desc: "A cosmetic procedure. It goes deeper than polishing by using a bleaching agent to lift staining from within the enamel itself. Purely for aesthetic improvement." },
        ].map((item) => (
          <div key={item.title} className="bg-card border border-border rounded-xl p-5">
            <h3 className="font-display font-bold text-lg text-foreground">{item.title}</h3>
            <p className="text-muted-foreground mt-1 text-sm">{item.desc}</p>
          </div>
        ))}
      </div>
      <p className="text-foreground/85">All three can be done together in the right sequence. Scaling first, then polishing, then whitening. Each one enhances the effectiveness of the next.</p>

      {/* Cost */}
      <h2 className="text-2xl md:text-3xl font-display font-bold mt-12 text-foreground" id="scaling-whitening-cost-comilla">
        Scaling, Polishing, and Teeth Whitening Cost in Debidwar, Comilla
      </h2>
      <p className="mt-3 text-foreground/85 leading-relaxed">
        The cost of these procedures in Bangladesh varies depending on the clinic, the extent of tartar buildup, the type of whitening chosen, and the number of teeth involved.
      </p>
      <p className="mt-3 text-foreground/85 leading-relaxed">
        At Motiur's Dental in Debidwar, we keep our prices lower than other dental clinics in Comilla district. Patients from Muradnagar, Chandina, Brahmanpara, Burichang, Homna, and Comilla city regularly make the trip to Debidwar specifically because they get a better standard of care at a price that makes sense.
      </p>
      <p className="mt-3 text-foreground/85 leading-relaxed">
        We give every patient a clear cost breakdown during the consultation before any treatment begins. You will never face a surprise charge at Motiur's Dental.
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
          { q: "Is scaling and polishing good for your teeth?", a: "Yes, absolutely. It is one of the most important preventive dental procedures you can have done. It removes tartar that causes gum disease and keeps your teeth and gums healthy between home brushing sessions." },
          { q: "Does scaling whiten teeth?", a: "Scaling removes tartar and polishing removes surface stains, which can make your teeth look noticeably brighter and cleaner. However, for genuine whitening of the tooth enamel itself, a separate whitening treatment is needed." },
          { q: "Is scaling and polishing painful?", a: "For most patients it is comfortable. You may feel pressure and vibration from the instruments, and some sensitivity if your gums are inflamed or your roots are exposed. We take care to make the procedure as gentle as possible, and we can use numbing agents if needed." },
          { q: "Can I get scaling and polishing if I have sensitive teeth?", a: "Yes. We take extra precautions for patients with sensitivity, including using desensitizing agents and gentler techniques. Let us know about your sensitivity when you book so we can prepare accordingly." },
          { q: "How long does the effect of scaling and polishing last?", a: "A professional cleaning typically keeps your teeth in good condition for around six months before significant new tartar buildup occurs, which is why we recommend coming back every six months." },
          { q: "Can I get teeth whitening if I have sensitive teeth?", a: "In many cases yes, though we may recommend a lower concentration whitening gel or a shorter application time to minimize discomfort. We will assess your sensitivity level during the consultation and advise accordingly." },
          { q: "How long does teeth whitening take?", a: "In-office whitening is done in a single appointment lasting approximately one hour. At-home whitening with custom trays typically takes one to two weeks of daily use to reach the full result." },
          { q: "Should I do scaling before whitening?", a: "Yes, always. Scaling and polishing before whitening removes the tartar and surface stains that would otherwise block the whitening gel from reaching the enamel evenly. You will get better, more uniform results if you clean first." },
          { q: "How do I maintain my whitening results?", a: "Rinse your mouth after consuming staining food and drinks, maintain your daily brushing and flossing routine, avoid tobacco, and come in for your regular scaling and polishing appointments. Consider a top-up whitening session once a year if needed." },
          { q: "What is the cost of scaling and teeth whitening in Comilla?", a: "Costs vary by clinic and by how much treatment is needed. At Motiur's Dental in Debidwar, our prices are among the most affordable in the Comilla area. Call 01816010194 for a specific estimate." },
          { q: "How often should I get professional teeth cleaning?", a: "Every six months is the standard recommendation. Some patients with heavier buildup or a history of gum disease may benefit from more frequent visits." },
          { q: "Can scaling damage my teeth?", a: "No. When performed by a trained dental professional, scaling is completely safe and does not damage tooth enamel or root surfaces. The instruments used are designed specifically to remove deposits without harming the underlying tooth structure." },
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
          Book Your Appointment at Motiur's Dental
        </h2>
        <p className="text-muted-foreground max-w-xl mx-auto mb-6">
          Whether you need a routine professional cleaning, a deep scale and polish, or you are interested in teeth whitening, Motiur's Dental in Debidwar is ready to help. We serve patients from Debidwar, Muradnagar, Chandina, Brahmanpara, Burichang, Homna, and all across Comilla district.
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

export default ScalingWhiteningArticle;

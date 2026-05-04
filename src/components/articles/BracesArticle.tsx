import { Phone, MapPin } from "lucide-react";
import { CLINIC, telLink } from "@/lib/clinic";
import ImageCarousel from "@/components/ImageCarousel";
import bracesBefore1 from "@/assets/braces-before-1.jpg";
import bracesBefore2 from "@/assets/braces-before-2.jpg";
import bracesAfter1 from "@/assets/braces-after-1.jpg";
import bracesAfter2 from "@/assets/braces-after-2.jpg";

const bracesBeforeAfterImages = [
  { src: bracesBefore1, alt: "Teeth before braces treatment at Motiur's Dental Debidwar - crooked teeth case", caption: "Before: crooked teeth" },
  { src: bracesAfter1, alt: "Teeth after braces treatment showing alignment progress at Motiur's Dental", caption: "After: aligned teeth" },
  { src: bracesBefore2, alt: "Misaligned teeth before orthodontic treatment at Motiur's Dental Comilla", caption: "Before: misaligned teeth" },
  { src: bracesAfter2, alt: "Orthodontic braces correcting bite alignment at Motiur's Dental Debidwar", caption: "After: corrected bite" },
];
import bracesOrthoProblems from "@/assets/braces-ortho-problems.png";
import bracesMetal from "@/assets/braces-metal.jpg";
import bracesCeramic from "@/assets/braces-ceramic.jpg";
import bracesLingual from "@/assets/braces-lingual.jpg";
import bracesClearAligners from "@/assets/braces-clear-aligners.jpg";
import bracesHero from "@/assets/braces-hero.jpg";
import bracesChildren from "@/assets/braces-children.jpg";
import bracesTeenagers from "@/assets/braces-teenagers.jpg";
import bracesAdults from "@/assets/braces-adults.jpg";
import bracesTreatmentProcess from "@/assets/braces-treatment-process.webp";
import bracesOralHygiene from "@/assets/braces-oral-hygiene-tips.webp";

const Bullet = ({ children }: { children: React.ReactNode }) => (
  <li className="relative pl-6 before:content-[''] before:absolute before:left-0 before:top-[10px] before:w-2.5 before:h-2.5 before:rounded-full before:bg-primary/70 before:rotate-3">
    {children}
  </li>
);

const BracesArticle = () => {
  return (
    <article className="max-w-none">

      <h1 className="text-3xl md:text-4xl lg:text-5xl font-display font-extrabold text-foreground mb-6 leading-tight">
        Braces Treatment in Debidwar, Comilla: Straighten Your Teeth with Confidence
      </h1>

      {/* Hero Image */}
      <div className="my-6 rounded-xl overflow-hidden border border-border">
        <img
          src={bracesHero}
          alt="Braces treatment at Motiur's Dental in Debidwar Comilla - colorful orthodontic braces close-up"
          className="w-full h-48 sm:h-64 md:h-80 object-cover"
          loading="eager"
        />
      </div>

      <p className="text-lg leading-relaxed text-foreground/90">
        Crooked teeth, crowded teeth, gaps, overbites, underbites, and misaligned jaws are all conditions that affect a large number of people across Bangladesh, and they are all treatable. At <strong>Motiur's Dental in Debidwar, Comilla</strong>, we offer a full range of braces and orthodontic treatment options for children, teenagers, and adults who want straighter teeth, a better bite, and a more confident smile.
      </p>
      <p className="mt-3 text-foreground/85 leading-relaxed">
        Whether you are looking for traditional metal braces, ceramic braces, lingual braces, or clear aligners, we provide personalized orthodontic treatment plans at prices that are significantly more affordable than other dental clinics in the Comilla district.
      </p>
      <p className="mt-3 text-foreground/85 leading-relaxed">
        You do not need to travel to Comilla city or Dhaka for proper orthodontic care. Motiur's Dental in Debidwar is fully equipped to handle your braces treatment from start to finish.
      </p>

      {/* Before & After Grid */}
      <div className="my-8">
        <h3 className="text-xl font-display font-bold text-foreground mb-4">Real Patient Results: Before and After Braces</h3>
        <div className="grid grid-cols-2 gap-3 sm:gap-4">
          <div className="rounded-xl overflow-hidden border border-border relative">
            <img src={bracesBefore1} alt="Teeth before braces treatment at Motiur's Dental Debidwar - crooked teeth case" className="w-full h-40 sm:h-52 md:h-64 object-cover" loading="eager" />
            <span className="absolute top-2 left-2 bg-destructive/90 text-destructive-foreground text-xs font-bold px-2 py-1 rounded-lg">Before</span>
          </div>
          <div className="rounded-xl overflow-hidden border border-border relative">
            <img src={bracesBefore2} alt="Misaligned teeth before orthodontic treatment at Motiur's Dental Comilla" className="w-full h-40 sm:h-52 md:h-64 object-cover" loading="eager" />
            <span className="absolute top-2 left-2 bg-destructive/90 text-destructive-foreground text-xs font-bold px-2 py-1 rounded-lg">Before</span>
          </div>
          <div className="rounded-xl overflow-hidden border border-border relative">
            <img src={bracesAfter1} alt="Teeth during braces treatment showing alignment progress at Motiur's Dental" className="w-full h-40 sm:h-52 md:h-64 object-cover" loading="eager" />
            <span className="absolute top-2 left-2 bg-primary/90 text-primary-foreground text-xs font-bold px-2 py-1 rounded-lg">After</span>
          </div>
          <div className="rounded-xl overflow-hidden border border-border relative">
            <img src={bracesAfter2} alt="Orthodontic braces correcting bite alignment at Motiur's Dental Debidwar" className="w-full h-40 sm:h-52 md:h-64 object-cover" loading="eager" />
            <span className="absolute top-2 left-2 bg-primary/90 text-primary-foreground text-xs font-bold px-2 py-1 rounded-lg">After</span>
          </div>
        </div>
      </div>

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

      {/* What Are Dental Braces */}
      <h2 className="text-2xl md:text-3xl font-display font-bold mt-12 text-foreground">What Are Dental Braces and How Do They Work?</h2>
      <div className="flex flex-col md:flex-row gap-5 mt-4">
        <div className="flex-1">
          <p className="text-foreground/85 leading-relaxed">
            Dental braces, also known as orthodontic braces or teeth braces, are devices used to gradually move teeth into their correct positions over time. They work by applying continuous, controlled pressure to the teeth in specific directions. As this pressure is maintained over weeks and months, the teeth slowly shift and the bone surrounding the tooth roots remodels to support the new position.
          </p>
          <p className="mt-3 text-foreground/85 leading-relaxed">
            Traditional braces consist of brackets that are bonded directly to the front surfaces of the teeth, connected by an archwire that runs through each bracket. The wire exerts pressure that guides the teeth in the desired direction. Elastic ties or self-ligating clips hold the wire to the brackets.
          </p>
          <p className="mt-3 text-foreground/85 leading-relaxed">
            Modern orthodontic treatment has evolved significantly. Today, patients have several options beyond traditional metal braces, including ceramic braces that blend with the teeth, lingual braces that are placed on the inside of the teeth and invisible from the front, and clear aligners that are removable and nearly undetectable.
          </p>
          <p className="mt-3 text-foreground/85 leading-relaxed">
            All of these options achieve the same fundamental goal: moving your teeth into proper alignment to improve both how your smile looks and how your bite functions.
          </p>
        </div>
        <div className="w-full md:w-72 shrink-0 rounded-xl overflow-hidden border border-border">
          <video
            src="/videos/braces-treatment.mp4"
            controls
            preload="metadata"
            playsInline
            className="w-full h-auto"
            aria-label="Braces treatment video at Motiur's Dental Debidwar Comilla"
          >
            Your browser does not support the video tag.
          </video>
          <p className="text-xs text-muted-foreground text-center py-2 px-2">Braces treatment at Motiur's Dental</p>
        </div>
      </div>

      {/* Why Straight Teeth Matter */}
      <h2 className="text-2xl md:text-3xl font-display font-bold mt-12 text-foreground">Why Straight Teeth Matter Beyond Appearance</h2>
      <p className="mt-3 text-foreground/85 leading-relaxed">
        Many people think about braces purely in terms of cosmetics, and while a straighter smile absolutely improves confidence and appearance, the functional and health benefits of properly aligned teeth are equally significant.
      </p>
      <ul className="space-y-4 my-6 list-none p-0">
        <Bullet><strong>Better oral hygiene.</strong> When teeth are crowded or overlapping, cleaning them properly is much harder. Plaque and food debris accumulate in areas that a toothbrush and floss cannot reach effectively, which increases the risk of cavities and gum disease over time.</Bullet>
        <Bullet><strong>Reduced jaw pain and headaches.</strong> Bite problems such as overbites, underbites, and crossbites place uneven stress on the jaw joint and surrounding muscles. Over years, this uneven pressure can lead to jaw pain, headaches, earaches, and temporomandibular joint disorder.</Bullet>
        <Bullet><strong>Improved speech.</strong> Misaligned teeth can affect speech. Certain sounds require the tongue and teeth to work together in specific ways, and when teeth are not in the right position, pronunciation can be affected.</Bullet>
      </ul>
      <p className="mt-3 text-foreground/85 leading-relaxed">
        At Motiur's Dental, we assess your orthodontic needs comprehensively, looking at both the appearance of your teeth and the function of your bite, to develop a treatment plan that addresses all of these concerns together.
      </p>

      {/* Who Needs Braces */}
      <h2 className="text-2xl md:text-3xl font-display font-bold mt-12 text-foreground">Who Needs Braces? Common Orthodontic Problems We Treat</h2>
      <p className="mt-3 text-foreground/85 leading-relaxed">At Motiur's Dental in Debidwar, we treat the full range of orthodontic conditions with braces and aligners.</p>
      <ul className="space-y-4 my-6 list-none p-0">
        <Bullet><strong>Crowded teeth.</strong> When there is not enough space in the jaw for all the teeth to fit properly, they overlap and rotate. Crowding makes cleaning difficult and affects the appearance of the smile significantly.</Bullet>
        <Bullet><strong>Spaced teeth and gaps.</strong> Gaps between teeth, whether due to missing teeth, smaller than average teeth, or jaw size discrepancy, can affect both appearance and function.</Bullet>
        <Bullet><strong>Overbite.</strong> The upper front teeth overlap too far over the lower front teeth vertically. An excessive overbite can cause wear on the lower teeth and jaw problems over time.</Bullet>
        <Bullet><strong>Underbite.</strong> The lower teeth sit in front of the upper teeth when the mouth is closed. This is usually caused by the lower jaw being too far forward or the upper jaw being too far back.</Bullet>
        <Bullet><strong>Crossbite.</strong> Some of the upper teeth sit inside the lower teeth rather than outside them when biting. It can cause uneven wear on tooth surfaces and jaw asymmetry if left untreated.</Bullet>
        <Bullet><strong>Open bite.</strong> The upper and lower teeth do not meet when the mouth is closed, leaving a gap between them. It can affect chewing and speech significantly.</Bullet>
        <Bullet><strong>Protruding front teeth.</strong> When the upper front teeth stick out too far forward, they are more vulnerable to damage and also affect facial appearance.</Bullet>
        <Bullet><strong>Jaw misalignment.</strong> In some cases the problem is not just the teeth but the relationship between the upper and lower jaw. Braces can address many jaw issues, and in more complex cases they can be combined with other treatments.</Bullet>
      </ul>

      {/* Common Orthodontic Problems Image */}
      <div className="my-6 rounded-xl overflow-hidden border border-border">
        <img
          src={bracesOrthoProblems}
          alt="Common orthodontic problems treated with braces at Motiur's Dental Debidwar: crowding, spacing, crossbite, open bite, overbite, underbite, overjet, abnormal eruption"
          className="w-full h-auto"
          loading="lazy"
        />
      </div>

      {/* Types of Braces */}
      <h2 className="text-2xl md:text-3xl font-display font-bold mt-12 text-foreground">Types of Braces Available at Motiur's Dental</h2>
      <p className="mt-3 text-foreground/85 leading-relaxed">We offer four main types of braces at our clinic in Debidwar. Each has its own advantages and the right choice depends on your specific orthodontic needs, your lifestyle, and your budget.</p>

      <div className="grid gap-4 my-6">
        {/* Metal Braces - image RIGHT */}
        <div className="bg-card border border-border rounded-xl p-5">
          <div className="flex flex-row gap-4 items-center">
            <div className="flex-1">
              <h3 className="font-display font-bold text-lg text-foreground">Metal Braces (Traditional Braces)</h3>
              <p className="text-muted-foreground mt-2 text-sm leading-relaxed">The most commonly used type of orthodontic appliance worldwide. Modern metal brackets are smaller and smoother than older designs. They can treat virtually any level of orthodontic complexity and are the most affordable braces option.</p>
              <div className="mt-3 flex flex-wrap gap-2 text-xs">
                <span className="bg-primary/10 text-primary px-2 py-1 rounded-lg font-medium">Best for: All age groups, complex cases, most affordable option</span>
                <span className="bg-muted text-muted-foreground px-2 py-1 rounded-lg">Cost: BDT 30,000 to BDT 70,000</span>
                <span className="bg-muted text-muted-foreground px-2 py-1 rounded-lg">Duration: 12 to 36 months</span>
              </div>
            </div>
            <div className="w-28 sm:w-32 md:w-36 h-28 sm:h-32 md:h-36 shrink-0 rounded-xl overflow-hidden border border-border">
              <img src={bracesMetal} alt="Metal braces on dental model at Motiur's Dental Debidwar" className="w-full h-full object-cover" loading="lazy" />
            </div>
          </div>
        </div>

        {/* Ceramic Braces - image LEFT */}
        <div className="bg-card border border-border rounded-xl p-5">
          <div className="flex flex-row-reverse gap-4 items-center">
            <div className="flex-1">
              <h3 className="font-display font-bold text-lg text-foreground">Ceramic Braces (Tooth-Colored Braces)</h3>
              <p className="text-muted-foreground mt-2 text-sm leading-relaxed">Work exactly the same way as metal braces but the brackets are made from a tooth-colored ceramic material, making them significantly less visible. Popular with teenagers and adults who want effective treatment with a more discreet appearance.</p>
              <div className="mt-3 flex flex-wrap gap-2 text-xs">
                <span className="bg-primary/10 text-primary px-2 py-1 rounded-lg font-medium">Best for: Less visible braces, teenagers and adults, moderately complex cases</span>
                <span className="bg-muted text-muted-foreground px-2 py-1 rounded-lg">Cost: BDT 60,000 to BDT 120,000</span>
                <span className="bg-muted text-muted-foreground px-2 py-1 rounded-lg">Duration: 12 to 36 months</span>
              </div>
            </div>
            <div className="w-28 sm:w-32 md:w-36 h-28 sm:h-32 md:h-36 shrink-0 rounded-xl overflow-hidden border border-border">
              <img src={bracesCeramic} alt="Ceramic tooth-colored braces at Motiur's Dental Debidwar Comilla" className="w-full h-full object-cover" loading="lazy" />
            </div>
          </div>
        </div>

        {/* Lingual Braces - image RIGHT */}
        <div className="bg-card border border-border rounded-xl p-5">
          <div className="flex flex-row gap-4 items-center">
            <div className="flex-1">
              <h3 className="font-display font-bold text-lg text-foreground">Lingual Braces (Inside Braces)</h3>
              <p className="text-muted-foreground mt-2 text-sm leading-relaxed">Placed on the tongue-facing surfaces of the teeth rather than the outer surfaces. Completely invisible from the front. Custom-made to fit the unique contours of each patient's teeth. Particularly popular among adult professionals.</p>
              <div className="mt-3 flex flex-wrap gap-2 text-xs">
                <span className="bg-primary/10 text-primary px-2 py-1 rounded-lg font-medium">Best for: Completely invisible option, professionals, adults</span>
                <span className="bg-muted text-muted-foreground px-2 py-1 rounded-lg">Cost: Custom quote during consultation</span>
                <span className="bg-muted text-muted-foreground px-2 py-1 rounded-lg">Duration: Varies by case</span>
              </div>
            </div>
            <div className="w-28 sm:w-32 md:w-36 h-28 sm:h-32 md:h-36 shrink-0 rounded-xl overflow-hidden border border-border">
              <img src={bracesLingual} alt="Lingual braces placed inside teeth at Motiur's Dental Debidwar" className="w-full h-full object-cover" loading="lazy" />
            </div>
          </div>
        </div>

        {/* Clear Aligners - image LEFT */}
        <div className="bg-card border border-border rounded-xl p-5">
          <div className="flex flex-row-reverse gap-4 items-center">
            <div className="flex-1">
              <h3 className="font-display font-bold text-lg text-foreground">Clear Aligners (Invisalign)</h3>
              <p className="text-muted-foreground mt-2 text-sm leading-relaxed">A series of custom-made, removable plastic trays that gradually move the teeth in small, controlled increments. Nearly invisible when worn and removable for eating, drinking, brushing, and flossing. Must be worn 20 to 22 hours per day.</p>
              <div className="mt-3 flex flex-wrap gap-2 text-xs">
                <span className="bg-primary/10 text-primary px-2 py-1 rounded-lg font-medium">Best for: Mild to moderate cases, adults prioritizing discretion, good self-discipline</span>
                <span className="bg-muted text-muted-foreground px-2 py-1 rounded-lg">Cost: BDT 100,000 to BDT 200,000</span>
                <span className="bg-muted text-muted-foreground px-2 py-1 rounded-lg">Duration: Varies by case</span>
              </div>
            </div>
            <div className="w-28 sm:w-32 md:w-36 h-28 sm:h-32 md:h-36 shrink-0 rounded-xl overflow-hidden border border-border">
              <img src={bracesClearAligners} alt="Clear aligners Invisalign at Motiur's Dental Debidwar Comilla" className="w-full h-full object-cover" loading="lazy" />
            </div>
          </div>
        </div>
      </div>

      {/* Braces for Different Age Groups */}
      <h2 className="text-2xl md:text-3xl font-display font-bold mt-12 text-foreground">Braces for Different Age Groups</h2>

      {/* Braces for Children - image centered in text */}
      <h3 className="text-xl font-display font-bold mt-8 text-foreground">Braces for Children</h3>
      <div className="mt-3 text-foreground/85 leading-relaxed">
        <p>
          Early orthodontic evaluation is one of the most valuable things a parent can do for their child's long-term dental health. We recommend bringing children in for their first orthodontic assessment around the age of 7.
        </p>
        <div className="float-right ml-4 mb-3 mt-1 w-32 sm:w-40 md:w-48 rounded-xl overflow-hidden border border-border shadow-soft">
          <img src={bracesChildren} alt="Child with braces at Motiur's Dental Debidwar - early orthodontic treatment" className="w-full h-auto object-cover" loading="lazy" />
        </div>
        <p className="mt-3">
          At this age, most adult teeth have begun erupting and we can assess how the teeth and jaws are developing. Early evaluation does not always mean early treatment. In many cases, we monitor the child's development and begin treatment at the most appropriate time. However, early intervention can guide jaw growth, create space for incoming teeth, and prevent more complex problems from developing.
        </p>
      </div>

      {/* Braces for Teenagers - image centered in text */}
      <h3 className="text-xl font-display font-bold mt-8 text-foreground">Braces for Teenagers</h3>
      <div className="mt-3 text-foreground/85 leading-relaxed">
        <p>
          Adolescence is the most common time for braces treatment because most of the adult teeth have erupted by this stage and the jaw is still growing, which means teeth move more readily.
        </p>
        <div className="float-left mr-4 mb-3 mt-1 w-32 sm:w-40 md:w-48 rounded-xl overflow-hidden border border-border shadow-soft">
          <img src={bracesTeenagers} alt="Teenager smiling with braces at Motiur's Dental Debidwar Comilla" className="w-full h-auto object-cover" loading="lazy" />
        </div>
        <p className="mt-3">
          Teenagers at Motiur's Dental can choose from metal braces, ceramic braces, or clear aligners depending on their specific needs and preferences. We understand that teenagers have social concerns about their appearance. We take the time to explain all options clearly and help each patient choose what works best for their lifestyle.
        </p>
      </div>

      {/* Braces for Adults - image centered in text */}
      <h3 className="text-xl font-display font-bold mt-8 text-foreground">Braces for Adults</h3>
      <div className="mt-3 text-foreground/85 leading-relaxed">
        <p>
          There is no age limit for orthodontic treatment. Healthy teeth can be moved at any age, and an increasing number of adults are choosing to get braces to correct problems they have lived with for years or to address shifting that has occurred over time.
        </p>
        <div className="float-right ml-4 mb-3 mt-1 w-32 sm:w-40 md:w-48 rounded-xl overflow-hidden border border-border shadow-soft">
          <img src={bracesAdults} alt="Adult flossing with braces at Motiur's Dental Debidwar - adult orthodontic care" className="w-full h-auto object-cover" loading="lazy" />
        </div>
        <p className="mt-3">
          Adults at Motiur's Dental often prefer the less visible options such as ceramic braces, lingual braces, or clear aligners. Adult treatment may sometimes take slightly longer than treatment in adolescence because mature bone is denser, but the results are just as successful and long-lasting.
        </p>
      </div>

      <div className="clear-both" />

      {/* Treatment Process */}
      <h2 className="text-2xl md:text-3xl font-display font-bold mt-12 text-foreground">The Braces Treatment Process at Motiur's Dental: Step by Step</h2>
      <div className="flex flex-col md:flex-row gap-5 mt-4">
        <div className="flex-1 grid gap-4">
          {[
            { step: "Step 1", title: "Initial Consultation and Evaluation", desc: "A comprehensive orthodontic examination. We assess the positions of your teeth, the relationship between your upper and lower jaws, and the health of your teeth and gums. We take dental X-rays, photographs, and in some cases dental impressions or digital scans." },
            { step: "Step 2", title: "Treatment Planning Discussion", desc: "We go through your treatment plan in detail, explaining which type of braces is most suitable for your case, how long treatment is expected to take, what the process will involve at each stage, and what the full cost will be." },
            { step: "Step 3", title: "Placing the Braces", desc: "For fixed braces, the bonding appointment typically takes one to two hours. Brackets are carefully placed on each tooth and the archwire is threaded through and secured. For clear aligners, we take precise digital impressions. The placement process is comfortable and painless." },
            { step: "Step 4", title: "Regular Adjustment Appointments", desc: "Throughout treatment, you visit every four to eight weeks. During these visits, we assess how the teeth are moving, make adjustments to the wire or provide the next set of aligners. These appointments typically last around 20 to 30 minutes." },
            { step: "Step 5", title: "Braces Removal", desc: "When your teeth have reached their target positions, the braces are removed. For fixed braces, the brackets are carefully detached and any remaining adhesive is polished away." },
            { step: "Step 6", title: "Retainers", desc: "After braces are removed, teeth have a natural tendency to drift back toward their original positions. Wearing a retainer as directed prevents this and maintains the results permanently. Retainers are typically worn full time for the first few months, then only at night." },
          ].map((item) => (
            <div key={item.step} className="bg-card border border-border rounded-xl p-5">
              <span className="text-xs font-bold text-primary uppercase tracking-wider">{item.step}</span>
              <h3 className="font-display font-bold text-lg text-foreground mt-1">{item.title}</h3>
              <p className="text-muted-foreground mt-2 text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
        <div className="w-full md:w-72 shrink-0 rounded-xl overflow-hidden border border-border md:sticky md:top-24 self-start">
          <img
            src={bracesTreatmentProcess}
            alt="Orthodontic braces treatment process step by step infographic at Motiur's Dental Debidwar"
            className="w-full h-auto"
            loading="lazy"
          />
        </div>
      </div>

      {/* Duration */}
      <h2 className="text-2xl md:text-3xl font-display font-bold mt-12 text-foreground">How Long Does Braces Treatment Take?</h2>
      <p className="mt-3 text-foreground/85 leading-relaxed">
        Treatment duration varies depending on the type and severity of the orthodontic problem being corrected. Simple cases involving minor crowding or spacing may be resolved in 12 months. More complex cases involving significant bite correction or jaw alignment can take up to 36 months. On average, most patients at Motiur's Dental complete their braces treatment within <strong>18 to 24 months</strong>.
      </p>
      <p className="mt-3 text-foreground/85 leading-relaxed">
        Compliance plays a significant role in treatment duration. Patients who attend all their adjustment appointments on schedule, follow dietary guidelines for fixed braces, and wear their aligners or retainers as directed consistently achieve the fastest and best results.
      </p>

      {/* Caring for Teeth */}
      <h2 className="text-2xl md:text-3xl font-display font-bold mt-12 text-foreground">Caring for Your Teeth During Braces Treatment</h2>
      <div className="flex flex-col md:flex-row gap-5 mt-4">
        <div className="flex-1">
          <p className="text-foreground/85 leading-relaxed">
            Oral hygiene requires more attention during braces treatment, particularly with fixed braces where brackets and wires create additional surfaces where plaque can accumulate.
          </p>
          <ul className="space-y-4 my-6 list-none p-0">
            <Bullet>Brush your teeth after every meal if possible, and at minimum twice a day. Use a soft-bristled toothbrush and angle the bristles toward the gum line as well as along the brackets.</Bullet>
            <Bullet>Interdental brushes are very helpful for cleaning around brackets. Floss daily using a floss threader to get the floss underneath the archwire.</Bullet>
            <Bullet>For fixed braces, avoid hard foods such as raw carrots, hard biscuits, and hard candy that can break brackets. Avoid sticky foods like toffee, chewing gum, and very chewy sweets.</Bullet>
            <Bullet>For clear aligner patients, remove your aligners before eating or drinking anything other than water. Rinse your aligners every time you take them out and clean them thoroughly at least once a day.</Bullet>
          </ul>
        </div>
        <div className="w-full md:w-72 shrink-0 rounded-xl overflow-hidden border border-border md:sticky md:top-24 self-start">
          <img
            src={bracesOralHygiene}
            alt="Tips for oral hygiene with braces - brushing flossing mouthwash guide at Motiur's Dental Debidwar"
            className="w-full h-auto"
            loading="lazy"
          />
        </div>
      </div>

      {/* Cost */}
      <h2 className="text-2xl md:text-3xl font-display font-bold mt-12 text-foreground" id="braces-cost-comilla">Braces Treatment Cost in Debidwar, Comilla</h2>
      <p className="mt-3 text-foreground/85 leading-relaxed">
        The cost of braces treatment in Bangladesh varies depending on the type of braces, the complexity of the case, and the expected duration of treatment. At Motiur's Dental in Debidwar, our braces pricing is among the most affordable in the Comilla district. Patients from Debidwar, Muradnagar, Chandina, Brahmanpara, Burichang, Homna, and Comilla city come to us specifically because they receive the same standard of orthodontic care at a significantly lower cost.
      </p>
      <div className="grid gap-3 my-6">
        {[
          { type: "Metal Braces", range: "BDT 30,000 - 70,000" },
          { type: "Ceramic Braces", range: "BDT 60,000 - 120,000" },
          { type: "Lingual Braces", range: "Custom quote" },
          { type: "Clear Aligners", range: "BDT 100,000 - 200,000" },
        ].map((item) => (
          <div key={item.type} className="flex justify-between items-center bg-card border border-border rounded-xl px-5 py-3">
            <span className="font-display font-semibold text-foreground">{item.type}</span>
            <span className="text-primary font-bold text-sm">{item.range}</span>
          </div>
        ))}
      </div>
      <p className="text-foreground/85 leading-relaxed">
        We provide a precise, personalized cost estimate during the initial consultation so you know the full cost of your treatment before anything begins. No hidden fees and no unexpected charges.
      </p>

      {/* FAQ */}
      <h2 className="text-2xl md:text-3xl font-display font-bold mt-12 text-foreground">Frequently Asked Questions About Braces</h2>
      <div className="space-y-4 my-6">
        {[
          { q: "What is the best age to get braces?", a: "There is no single best age for braces. Treatment is most commonly started between the ages of 10 and 14 because most adult teeth have erupted and the jaw is still developing. However, braces are effective for patients of all ages. Adults get braces successfully all the time." },
          { q: "Are braces painful?", a: "Braces do not cause pain in the way an injury does. After getting braces placed and after each adjustment appointment, you may feel some pressure and soreness for two to four days. This is normal and manageable with over-the-counter pain medication." },
          { q: "How long do braces stay on?", a: "Most patients wear braces for 12 to 36 months. The average is around 18 to 24 months. Your specific treatment duration depends on the complexity of your case." },
          { q: "Can adults get braces?", a: "Absolutely. There is no age limit for braces. Healthy teeth can be moved orthodontically at any age. We treat many adult patients and offer discreet options like ceramic braces, lingual braces, and clear aligners." },
          { q: "Do braces change your face shape?", a: "Braces primarily move teeth and correct bite alignment. In some cases, particularly where a significant overbite, underbite, or crossbite is corrected, there can be subtle improvements to facial balance and jaw position." },
          { q: "Can I play sports with braces?", a: "Yes, but we recommend wearing a mouthguard during contact sports to protect your braces and your teeth from impact." },
          { q: "What happens if I do not wear my retainer after braces?", a: "Teeth will gradually begin shifting back toward their original positions if a retainer is not worn consistently. This can happen relatively quickly in the first year after braces removal. Wearing your retainer as directed is essential for maintaining your results permanently." },
          { q: "What is the difference between braces and clear aligners?", a: "Both achieve the same result but through different mechanisms. Fixed braces apply continuous force through brackets and wires that are always in place. Clear aligners are removable trays that are changed regularly. Braces are more suitable for complex cases. Aligners are more discreet but require the patient to wear them consistently for 20 to 22 hours per day." },
          { q: "How do I fix crooked teeth without braces?", a: "For very minor cosmetic concerns, veneers or dental bonding can improve the appearance of slightly crooked teeth without moving them. However, for genuine orthodontic correction, some form of braces or aligners is required." },
          { q: "What is the cost of braces in Comilla?", a: "At Motiur's Dental in Debidwar, metal braces start from BDT 30,000 and ceramic braces start from BDT 60,000 for the full treatment course. These are among the most affordable braces prices in the Comilla district. Call 01816010194 for a personalized estimate." },
          { q: "How often do I need to visit the dentist during braces treatment?", a: "Adjustment appointments are typically scheduled every four to eight weeks throughout treatment." },
          { q: "Can braces fix a bad bite?", a: "Yes. Correcting bite problems such as overbites, underbites, crossbites, and open bites is one of the primary functions of orthodontic treatment." },
          { q: "Are ceramic braces better than metal braces?", a: "Neither is objectively better. Ceramic braces are less visible. Metal braces are more durable, slightly more affordable, and in some complex cases provide slightly more precise control. The best choice depends on your specific case and priorities." },
        ].map((faq, i) => (
          <details key={i} className="group bg-card border border-border rounded-xl overflow-hidden">
            <summary className="flex items-center justify-between p-5 cursor-pointer font-display font-semibold text-foreground hover:text-primary transition-colors">
              {faq.q}
              <svg className="h-4 w-4 text-muted-foreground group-open:rotate-90 transition-transform shrink-0" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2"><path d="M6 4l4 4-4 4" /></svg>
            </summary>
            <div className="px-5 pb-5 text-muted-foreground text-sm leading-relaxed">{faq.a}</div>
          </details>
        ))}
      </div>

      {/* CTA */}
      <div className="bg-hero-gradient rounded-2xl p-8 text-center my-12">
        <h2 className="font-display font-extrabold text-2xl md:text-3xl text-foreground mb-3">
          Book Your Braces Consultation at Motiur's Dental
        </h2>
        <p className="text-muted-foreground max-w-xl mx-auto mb-6">
          Whether you are a parent looking into early orthodontic treatment for your child, a teenager ready to start braces, or an adult who has been thinking about straightening your teeth for years, Motiur's Dental in Debidwar is ready to help you take the first step.
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

export default BracesArticle;

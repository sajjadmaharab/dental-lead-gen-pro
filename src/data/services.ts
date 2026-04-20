export type Service = {
  slug: string;
  name: string;
  short: string;
  icon: string; // emoji as lightweight icon
  hero: string;
  description: string;
  benefits: string[];
  steps: string[];
  faqs: { q: string; a: string }[];
};

export const SERVICES: Service[] = [
  {
    slug: "cosmetic-filling",
    name: "Cosmetic Filling",
    short: "Tooth-coloured fillings that look completely natural.",
    icon: "🦷",
    hero: "Natural-Looking Cosmetic Fillings in Debidwar & Comilla",
    description:
      "Cosmetic (tooth-coloured) fillings restore decayed or chipped teeth using high-quality composite resin that matches your natural tooth shade. At Motiur's Dental, we use modern bonding techniques so your smile stays bright and seamless.",
    benefits: [
      "Matches natural tooth colour",
      "Mercury-free and safe",
      "Strong bonding, long lasting",
      "Single-visit treatment in most cases",
    ],
    steps: [
      "Examination and shade selection",
      "Gentle removal of decay",
      "Layered composite placement",
      "Curing, shaping & polishing",
    ],
    faqs: [
      { q: "How long do cosmetic fillings last?", a: "With good oral hygiene, modern composite fillings typically last 7–10 years or more." },
      { q: "Is the procedure painful?", a: "No. We use local anaesthesia where needed and most patients feel only mild pressure." },
      { q: "How much does it cost in Debidwar?", a: "Cost depends on tooth size and location. Call us for an affordable, transparent estimate." },
    ],
  },
  {
    slug: "dental-implants",
    name: "Dental Implants",
    short: "Permanent replacement for missing teeth.",
    icon: "🪥",
    hero: "Affordable Dental Implants in Debidwar, Comilla",
    description:
      "Dental implants are titanium roots placed into the jawbone to support a natural-looking crown. They are the gold-standard for replacing missing teeth and feel exactly like your own.",
    benefits: ["Looks and feels natural", "Preserves jawbone", "Doesn't damage neighbouring teeth", "Lifetime solution with proper care"],
    steps: [
      "Consultation & 3D evaluation",
      "Implant placement (minor surgery)",
      "Healing period (2–4 months)",
      "Final crown attachment",
    ],
    faqs: [
      { q: "Am I a candidate for an implant?", a: "Most healthy adults with sufficient jawbone are candidates. We assess this in your free consultation." },
      { q: "How long does the full process take?", a: "Typically 3–6 months from placement to final crown." },
      { q: "Is implant treatment safe?", a: "Yes — when done by qualified dental surgeons like ours, success rates exceed 95%." },
    ],
  },
  {
    slug: "tooth-gap-treatment",
    name: "Tooth Gap Treatment",
    short: "Close gaps without braces using bonding or veneers.",
    icon: "✨",
    hero: "Tooth Gap Closing Treatment in Debidwar",
    description:
      "Embarrassed by gaps between your teeth? We offer fast, painless gap-closing treatments using cosmetic bonding, veneers, or orthodontics — tailored to your case.",
    benefits: ["Same-day results possible", "No drilling in many cases", "Boosts confidence", "Affordable"],
    steps: ["Smile analysis", "Treatment plan", "Bonding/veneer/braces", "Final polish"],
    faqs: [
      { q: "Will gap closing damage my teeth?", a: "No. Modern bonding and veneers are minimally invasive." },
      { q: "How fast can I see results?", a: "Cosmetic bonding gives results in a single visit." },
    ],
  },
  {
    slug: "scaling-polishing-whitening",
    name: "Scaling, Polishing & Teeth Whitening",
    short: "Professional cleaning and brightening for a fresh smile.",
    icon: "💎",
    hero: "Teeth Cleaning & Whitening in Debidwar, Comilla",
    description:
      "Remove stubborn stains, tartar and plaque with professional ultrasonic scaling, then brighten your smile up to several shades whiter with safe in-clinic whitening.",
    benefits: ["Removes tartar & stains", "Prevents gum disease", "Whiter, fresher smile", "Painless & safe"],
    steps: ["Oral examination", "Ultrasonic scaling", "Polishing", "Whitening (optional)"],
    faqs: [
      { q: "How often should I get scaling?", a: "Most people benefit from professional scaling every 6 months." },
      { q: "Is teeth whitening safe?", a: "Yes — performed by a dentist with controlled gel concentration, it's safe for enamel." },
    ],
  },
  {
    slug: "root-canal-treatment",
    name: "Root Canal Treatment",
    short: "Save your natural tooth from extraction.",
    icon: "🔬",
    hero: "Painless Root Canal Treatment in Debidwar",
    description:
      "Root Canal Treatment (RCT) saves a badly decayed or infected tooth instead of extracting it. Our modern equipment makes the procedure comfortable and predictable.",
    benefits: ["Saves natural tooth", "Relieves severe pain", "High success rate", "Restores chewing function"],
    steps: ["X-ray & diagnosis", "Local anaesthesia", "Cleaning & shaping canals", "Filling & crown placement"],
    faqs: [
      { q: "Does root canal hurt?", a: "Modern RCT is virtually painless — the pain you had before treatment is what stops." },
      { q: "How many visits will I need?", a: "Usually 1–3 visits depending on the tooth." },
    ],
  },
  {
    slug: "wisdom-teeth-treatment",
    name: "Wisdom Teeth Treatment",
    short: "Safe extraction of impacted or painful wisdom teeth.",
    icon: "🩺",
    hero: "Wisdom Tooth Extraction in Debidwar, Comilla",
    description:
      "Impacted wisdom teeth can cause pain, infection and crowding. Our oral surgeons perform safe, gentle wisdom tooth removal with minimal discomfort and quick recovery.",
    benefits: ["Stops recurring pain", "Prevents infection", "Protects nearby teeth", "Quick recovery"],
    steps: ["Clinical & X-ray exam", "Local anaesthesia", "Surgical extraction", "Aftercare guidance"],
    faqs: [
      { q: "How long is recovery?", a: "Most patients recover in 3–7 days." },
      { q: "Will I be awake?", a: "Yes — local anaesthesia keeps you comfortable and alert." },
    ],
  },
  {
    slug: "minor-oral-surgery",
    name: "Minor Oral Surgery",
    short: "Small surgical procedures performed safely in-clinic.",
    icon: "⚕️",
    hero: "Minor Oral Surgery in Debidwar",
    description:
      "From cyst removal to frenectomy and biopsy, our experienced oral surgeons perform a wide range of minor surgical procedures safely under local anaesthesia.",
    benefits: ["Performed in clinic", "Local anaesthesia", "Fast healing", "Experienced surgeons"],
    steps: ["Diagnosis", "Treatment planning", "Surgical procedure", "Post-op care"],
    faqs: [
      { q: "Will I need stitches?", a: "Most procedures involve dissolvable stitches that don't need removal." },
    ],
  },
  {
    slug: "braces-orthodontic",
    name: "Braces (Orthodontic) Treatment",
    short: "Straighten crooked teeth and fix bite issues.",
    icon: "😁",
    hero: "Braces & Orthodontic Treatment in Debidwar, Comilla",
    description:
      "Get a straighter, healthier smile with metal or ceramic braces. We design a personalised orthodontic plan for children, teens and adults.",
    benefits: ["Straight, healthy smile", "Better bite & chewing", "Easier cleaning", "Boosts self-confidence"],
    steps: ["Orthodontic assessment", "Bracket bonding", "Regular adjustments", "Retainer phase"],
    faqs: [
      { q: "How long does treatment take?", a: "Typically 12–24 months depending on case complexity." },
      { q: "Are braces painful?", a: "Mild soreness for a few days after each adjustment, easily managed." },
    ],
  },
  {
    slug: "fractured-teeth-treatment",
    name: "Traumatic / Chipped / Fractured Teeth",
    short: "Emergency restoration of broken teeth.",
    icon: "🚑",
    hero: "Broken & Fractured Teeth Treatment in Debidwar",
    description:
      "Chipped, cracked or knocked-out teeth need urgent care. We offer same-day repair using bonding, crowns or root canal therapy to save your tooth and your smile.",
    benefits: ["Same-day emergency care", "Saves natural tooth", "Restores appearance", "Stops pain fast"],
    steps: ["Emergency exam & X-ray", "Pain relief", "Restoration (bond/crown/RCT)", "Follow-up"],
    faqs: [
      { q: "What should I do immediately?", a: "Rinse gently, apply cold compress and call us right away." },
    ],
  },
  {
    slug: "dental-bridges-caps",
    name: "Dental Bridges & Caps",
    short: "Replace missing teeth and protect weak teeth.",
    icon: "👑",
    hero: "Dental Bridges & Crowns (Caps) in Debidwar, Comilla",
    description:
      "Dental bridges fill the space of missing teeth, while crowns (caps) cover weak or root-canal-treated teeth. We use high-quality porcelain and zirconia for a natural look.",
    benefits: ["Restores chewing & smile", "Strong, long lasting", "Natural appearance", "Protects damaged teeth"],
    steps: ["Tooth preparation", "Impressions", "Custom fabrication", "Final cementation"],
    faqs: [
      { q: "How long do crowns last?", a: "Quality crowns last 10–15 years or more with good care." },
    ],
  },
  {
    slug: "tooth-extraction",
    name: "Tooth Extraction",
    short: "Painless removal of damaged or unsavable teeth.",
    icon: "🦴",
    hero: "Painless Tooth Extraction in Debidwar",
    description:
      "When a tooth cannot be saved, our gentle extraction technique ensures minimum pain and fast healing. We always discuss replacement options before extraction.",
    benefits: ["Painless procedure", "Quick healing", "Replacement guidance", "Affordable"],
    steps: ["Examination", "Local anaesthesia", "Gentle extraction", "Aftercare instructions"],
    faqs: [
      { q: "Will I feel pain?", a: "No — local anaesthesia ensures the procedure is painless." },
    ],
  },
  {
    slug: "teeth-replacement",
    name: "Teeth Replacement",
    short: "Dentures, bridges and implants for missing teeth.",
    icon: "🪞",
    hero: "Teeth Replacement Solutions in Debidwar, Comilla",
    description:
      "Whether you've lost one tooth or many, we offer the full range of replacement options — dentures, bridges and implants — tailored to your needs and budget.",
    benefits: ["Restores smile & confidence", "Improves chewing & speech", "Multiple options for every budget", "Long-lasting results"],
    steps: ["Consultation", "Custom plan", "Fitting", "Adjustment & aftercare"],
    faqs: [
      { q: "Which option is best for me?", a: "Implants are gold-standard, but bridges and dentures are excellent alternatives — we'll guide you." },
    ],
  },
];

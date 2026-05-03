import { Phone, MapPin } from "lucide-react";
import { CLINIC, telLink } from "@/lib/clinic";

const Bullet = ({ children }: { children: React.ReactNode }) => (
  <li className="relative pl-6 before:content-[''] before:absolute before:left-0 before:top-[10px] before:w-2.5 before:h-2.5 before:rounded-full before:bg-primary/70 before:rotate-3">
    {children}
  </li>
);

const MinorOralSurgeryArticle = () => {
  return (
    <article className="max-w-none">

      <h1 className="text-3xl md:text-4xl lg:text-5xl font-display font-extrabold text-foreground mb-6 leading-tight">
        Minor Oral Surgery Services at Motiur's Dental, Comilla
      </h1>

      <p className="text-lg leading-relaxed text-foreground/90">
        Looking for expert minor oral surgery in Comilla? At <strong>Motiur's Dental</strong>, we offer an ample range of procedures performed by our highly skilled and experienced dental team. We understand that even minor oral health problems can cause significant discomfort and anxiety. That is why we prioritize your comfort and well-being throughout the entire process.
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

      {/* What is Minor Oral Surgery */}
      <h2 className="text-2xl md:text-3xl font-display font-bold mt-12 text-foreground">What is Minor Oral Surgery?</h2>
      <p className="mt-3 text-foreground/85 leading-relaxed">
        Minor oral surgery encompasses a variety of procedures designed to address issues within the mouth and jaw area. These procedures are typically less complex than major oral surgery and can often be performed using local anesthesia, with or without sedation, in a comfortable outpatient setting.
      </p>

      {/* Services Range */}
      <h2 className="text-2xl md:text-3xl font-display font-bold mt-12 text-foreground">Our Range of Minor Oral Surgery Services</h2>

      <div className="grid gap-4 my-6">
        {[
          {
            title: "Wisdom Tooth Extraction",
            desc: "Addressing discomfort and potential future complications associated with impacted or problematic wisdom teeth. Wisdom teeth are the third molars that erupt in late adolescence or early adulthood. Sometimes, there is not enough space in the jaw for them to erupt properly, causing them to become impacted. Impacted wisdom teeth can lead to pain, swelling, infection, and damage to nearby teeth. During a wisdom tooth extraction, the dentist will numb the area with local anesthesia and carefully remove the wisdom tooth."
          },
          {
            title: "Tooth Extractions",
            desc: "Removing damaged or infected teeth to restore oral health. Damaged or infected teeth can cause pain, discomfort, and spread infection to other parts of the mouth. Tooth extraction involves removing the entire tooth, including the root, using local anesthesia. Depending on the complexity, stitches may be placed to close the gum tissue."
          },
          {
            title: "Biopsies",
            desc: "Examining suspicious tissue samples for diagnosis. A biopsy involves removing a small sample of tissue from the mouth for microscopic examination. This helps diagnose oral diseases like cancer or precancerous lesions. The biopsy procedure is usually minimally invasive and performed with local anesthesia."
          },
          {
            title: "Abscess Drainage",
            desc: "Treating painful infections for immediate relief. An abscess is a pus-filled pocket that forms due to a bacterial infection. Abscesses in the mouth can be very painful. Abscess drainage involves lancing the abscess to allow pus to drain and administering antibiotics to eliminate the infection."
          },
          {
            title: "Cyst and Tumor Removal",
            desc: "Addressing benign growths in the mouth. Cysts and tumors are abnormal growths that can develop in the mouth. While most are benign, some require removal for diagnosis or to prevent future complications. The removal procedure depends on the size, location, and type of cyst or tumor."
          },
          {
            title: "Frenectomy",
            desc: "Correcting a restrictive frenulum for improved function and mobility. A frenulum is a small fold of tissue that connects the lips, cheeks, or tongue to the gums. An abnormally positioned or tight frenulum can restrict tongue movement or cause gaps between teeth. A frenectomy involves surgically trimming the frenulum to improve mobility and function."
          },
          {
            title: "Alveoloplasty / Alveolectomy",
            desc: "Reshaping the jawbone for optimal denture fit or implant placement. Alveoloplasty involves smoothing out the jawbone ridge, while alveolectomy involves removing a portion of the jawbone. These procedures can be necessary for a proper denture fit or to create a suitable foundation for dental implants."
          },
          {
            title: "Bone Grafting",
            desc: "Building up bone structure for future implant procedures. Dental implants require sufficient bone mass for support. If there is bone loss due to tooth extraction or other reasons, bone grafting can help rebuild the bone structure to create a stable foundation for implants."
          },
          {
            title: "Jaw Fracture Repair",
            desc: "Stabilizing fractured jaws for proper healing. A jaw fracture can occur due to facial trauma or impact. Jaw fracture repair involves realigning the fractured bone fragments and stabilizing them with wires, plates, or screws to ensure proper healing."
          },
          {
            title: "Facial Laceration Repair",
            desc: "Minimizing scarring and restoring aesthetics after facial injuries. Facial lacerations require prompt medical attention to minimize scarring and ensure proper healing. The dentist will clean the wound, close it with sutures, and advise on aftercare to promote optimal healing."
          },
          {
            title: "Splinting",
            desc: "Supporting jaw fractures or loose teeth for proper healing. Splinting is a technique used to stabilize fractured jawbones or loose teeth. Splints are typically made of acrylic or metal and help hold the jaw or teeth in place during healing."
          },
          {
            title: "Apicoectomy",
            desc: "Removing infected root tips to preserve the tooth. An apicoectomy is a surgical procedure to remove the infected tip of a tooth root to save the tooth. This procedure is an alternative to tooth extraction when root canal treatment fails to eliminate the infection."
          },
          {
            title: "Gum Grafting",
            desc: "Rebuilding receding gums for improved aesthetics and oral health. Gum recession is the gradual loss of gum tissue, which can expose the tooth root and increase the risk of tooth decay and bone loss. Gum grafting replaces lost gum tissue with tissue taken from another area of the mouth or a donor source."
          },
          {
            title: "Operculectomy",
            desc: "Removing excess gum tissue covering an erupting tooth. An operculectomy is a minor surgical procedure to remove excess gum tissue that is covering an erupting tooth. This may be necessary if the erupting tooth is trapped and unable to emerge fully."
          },
        ].map((item) => (
          <div key={item.title} className="bg-card border border-border rounded-xl p-5">
            <h3 className="font-display font-bold text-lg text-foreground">{item.title}</h3>
            <p className="text-muted-foreground mt-2 text-sm leading-relaxed">{item.desc}</p>
          </div>
        ))}
      </div>

      {/* Benefits */}
      <h2 className="text-2xl md:text-3xl font-display font-bold mt-12 text-foreground">Benefits of Choosing Motiur's Dental for Minor Oral Surgery</h2>
      <ul className="space-y-4 my-6 list-none p-0">
        <Bullet><strong>Experienced and Qualified Team.</strong> Our dentists are specially trained and equipped to handle all your minor oral surgery needs.</Bullet>
        <Bullet><strong>Comfortable Environment.</strong> We prioritize creating a relaxed and calming atmosphere for our patients.</Bullet>
        <Bullet><strong>Advanced Technology.</strong> We utilize state-of-the-art equipment and techniques to ensure precise and efficient procedures.</Bullet>
        <Bullet><strong>Personalized Care.</strong> We understand every patient is unique, and we tailor our treatment plans to your specific needs and concerns.</Bullet>
        <Bullet><strong>Pain Management.</strong> We offer various options to ensure your comfort throughout the procedure and during recovery.</Bullet>
      </ul>

      <p className="text-foreground/85 leading-relaxed mt-6">
        At Motiur's Dental, we prioritize your comfort, safety, and satisfaction above all else. With our comprehensive range of minor oral surgery services, performed with precision and care, you can trust us to deliver the exceptional results you deserve.
      </p>

      {/* FAQ */}
      <h2 className="text-2xl md:text-3xl font-display font-bold mt-12 text-foreground">Frequently Asked Questions</h2>
      <div className="space-y-4 my-6">
        {[
          { q: "What is an example of a minor oral surgery?", a: "Minor oral surgery encompasses a variety of procedures designed to address issues within the mouth and jaw. Some common examples include wisdom tooth extraction to prevent future problems, removing damaged or infected teeth, taking a tissue sample for diagnosis (biopsy), draining an abscess to relieve pain and infection, and correcting a restrictive frenulum for improved tongue movement (frenectomy)." },
          { q: "Is minor oral surgery painful?", a: "Local anesthesia is typically used during minor oral surgery to minimize discomfort. You may experience some soreness or tenderness after the procedure, but this can be managed with medication. Our team at Motiur's Dental will discuss pain management options with you before your surgery." },
          { q: "What are the most common oral surgeries?", a: "Tooth extractions, including wisdom teeth, are among the most common minor oral surgeries. Other frequently performed procedures include biopsies, abscess drainage, and frenectomies." },
          { q: "Why is minor oral surgery sometimes followed by a recovery period and rest?", a: "Even though minor oral surgery is less complex than major procedures, it still involves manipulating tissues in the mouth. Following your dentist's post-operative instructions, including rest, promotes proper healing and minimizes the risk of complications like infection." },
          { q: "What if I am anxious about minor oral surgery?", a: "We understand that any surgery can cause anxiety. At Motiur's Dental, we prioritize your comfort and well-being. We offer various options for managing anxiety, including sedation dentistry, to ensure a relaxed and comfortable experience. Feel free to discuss your concerns with our team during your consultation." },
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
          Book Your Consultation at Motiur's Dental
        </h2>
        <p className="text-muted-foreground max-w-xl mx-auto mb-6">
          Whether you need a wisdom tooth removed, an abscess drained, or any other minor oral surgery, our experienced team in Debidwar, Comilla is here to help. Safe, affordable, and comfortable care.
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

export default MinorOralSurgeryArticle;

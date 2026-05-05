import { useState } from "react";
import { z } from "zod";
import { MapPin, Phone, Clock, MessageCircle, Facebook, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { SEO } from "@/components/SEO";
import { CLINIC, telLink, waLink } from "@/lib/clinic";
import { toast } from "@/hooks/use-toast";
import { Reveal } from "@/hooks/useScrollReveal";

const schema = z.object({
  name: z.string().trim().min(2, "Please enter your name").max(80),
  phone: z.string().trim().min(7, "Please enter a valid phone number").max(20),
  message: z.string().trim().min(5, "Please add a short message").max(800),
});

const Contact = () => {
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [loading, setLoading] = useState(false);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const data = { name: String(fd.get("name") || ""), phone: String(fd.get("phone") || ""), message: String(fd.get("message") || "") };
    const result = schema.safeParse(data);
    if (!result.success) {
      const errs: Record<string, string> = {};
      result.error.issues.forEach((i) => { if (i.path[0]) errs[String(i.path[0])] = i.message; });
      setErrors(errs);
      return;
    }
    setErrors({});
    setLoading(true);
    const text = `New appointment request:\n\nName: ${data.name}\nPhone: ${data.phone}\nMessage: ${data.message}`;
    window.open(waLink(text), "_blank");
    setTimeout(() => {
      setLoading(false);
      toast({ title: "Opening WhatsApp…", description: "Send the pre-filled message and we'll get back to you." });
      (e.target as HTMLFormElement).reset();
    }, 400);
  };

  return (
    <>
      <SEO
        title="Contact Motiur's Dental | Best Dentist in Debidwar, Comilla"
        description="Contact Motiur's Dental in Debidwar (Ibn Sina Hospital). Call 01816010194 or WhatsApp to book an appointment. Open Sat–Thu, 10AM–7PM."
        path="/contact"
      />
      <section className="bg-hero-gradient py-14 md:py-20">
        <div className="container-page text-center max-w-3xl mx-auto">
          <Reveal direction="bottom">
            <span className="text-sm font-semibold text-primary">Get in Touch</span>
            <h1 className="mt-2 text-4xl md:text-5xl font-display font-extrabold">Contact Motiur's Dental</h1>
            <p className="mt-4 text-muted-foreground text-lg">Call, WhatsApp or visit us at Ibn Sina Hospital, Debidwar.</p>
          </Reveal>
        </div>
      </section>

      <section className="section-pad">
        <div className="container-page grid lg:grid-cols-2 gap-10">
          <Reveal direction="left">
            <div className="grid sm:grid-cols-2 gap-4">
              <a href={telLink} className="bg-card border border-border/60 rounded-2xl p-5 hover:shadow-medium transition-smooth flex items-start gap-3">
                <Phone className="h-6 w-6 text-primary mt-0.5" />
                <div><div className="text-xs text-muted-foreground">Call</div><div className="font-semibold">{CLINIC.phone}</div></div>
              </a>
              <a href={waLink()} target="_blank" rel="noopener noreferrer" className="bg-card border border-border/60 rounded-2xl p-5 hover:shadow-medium transition-smooth flex items-start gap-3">
                <MessageCircle className="h-6 w-6 text-secondary mt-0.5" />
                <div><div className="text-xs text-muted-foreground">WhatsApp</div><div className="font-semibold">{CLINIC.whatsapp}</div></div>
              </a>
              <a href={CLINIC.mapUrl} target="_blank" rel="noopener noreferrer" className="bg-card border border-border/60 rounded-2xl p-5 hover:shadow-medium transition-smooth flex items-start gap-3">
                <MapPin className="h-6 w-6 text-primary mt-0.5" />
                <div><div className="text-xs text-muted-foreground">Address</div><div className="font-semibold text-sm">{CLINIC.address}</div></div>
              </a>
              <div className="bg-card border border-border/60 rounded-2xl p-5 flex items-start gap-3">
                <Clock className="h-6 w-6 text-primary mt-0.5" />
                <div><div className="text-xs text-muted-foreground">Hours</div><div className="font-semibold text-sm">Sat–Thu 10AM–7PM<br />Friday Closed</div></div>
              </div>
            </div>

            <div className="mt-6 rounded-2xl overflow-hidden border border-border/60 aspect-[4/3]">
              <iframe
                title="Motiur's Dental clinic location"
                src={CLINIC.mapEmbed}
                width="100%" height="100%"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
            <a href={CLINIC.facebook} target="_blank" rel="noopener noreferrer" className="mt-4 inline-flex items-center gap-2 text-sm text-primary font-medium">
              <Facebook className="h-4 w-4" /> Follow us on Facebook
            </a>
          </Reveal>

          <Reveal direction="right" delay={0.1}>
            <div className="bg-card border border-border/60 rounded-2xl p-6 md:p-8 shadow-card">
              <h2 className="font-display text-2xl font-bold">Request an Appointment</h2>
              <p className="text-sm text-muted-foreground mt-1">Fill in this form — it will open WhatsApp with your message ready to send.</p>
              <form onSubmit={onSubmit} className="mt-6 space-y-4">
                <div>
                  <Label htmlFor="name">Your Name</Label>
                  <Input id="name" name="name" placeholder="Full name" maxLength={80} />
                  {errors.name && <p className="text-xs text-destructive mt-1">{errors.name}</p>}
                </div>
                <div>
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input id="phone" name="phone" type="tel" placeholder="01XXX-XXXXXX" maxLength={20} />
                  {errors.phone && <p className="text-xs text-destructive mt-1">{errors.phone}</p>}
                </div>
                <div>
                  <Label htmlFor="message">Message</Label>
                  <Textarea id="message" name="message" placeholder="Briefly describe your concern or preferred date" rows={4} maxLength={800} />
                  {errors.message && <p className="text-xs text-destructive mt-1">{errors.message}</p>}
                </div>
                <Button type="submit" variant="hero" size="lg" className="w-full gap-2" disabled={loading}>
                  <MessageCircle className="h-5 w-5" /> Send via WhatsApp
                </Button>
              </form>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
};

export default Contact;

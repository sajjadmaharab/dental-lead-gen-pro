import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { MessageCircle } from "lucide-react";
import { CLINIC } from "@/lib/clinic";

interface LeadCaptureDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const SERVICES = [
  "Scaling & Polishing",
  "Teeth Whitening",
  "Cosmetic Filling",
  "Root Canal Treatment",
  "Cap & Bridge",
  "Spacing Treatment",
  "Teeth Replacement",
  "Other",
];

export const LeadCaptureDialog = ({ open, onOpenChange }: LeadCaptureDialogProps) => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [service, setService] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const msg = `Hi, I'm *${name}*.\nPhone: ${phone}\nI'm interested in: *${service}*\n\nI'd like to book an appointment at ${CLINIC.name}.`;
    const waUrl = `https://wa.me/${CLINIC.whatsappRaw}?text=${encodeURIComponent(msg)}`;

    // Reset form
    setName("");
    setPhone("");
    setService("");
    onOpenChange(false);

    window.open(waUrl, "_blank", "noopener,noreferrer");
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md rounded-2xl border-primary/10">
        <DialogHeader>
          <DialogTitle className="font-display text-xl text-primary text-center">
            Book Your Appointment
          </DialogTitle>
          <p className="text-sm text-muted-foreground text-center">
            Fill in your details — we'll connect you on WhatsApp instantly
          </p>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-4 mt-2">
          <div className="space-y-1.5">
            <Label htmlFor="lead-name">Your Name</Label>
            <Input
              id="lead-name"
              placeholder="e.g. Rahim Uddin"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              maxLength={100}
            />
          </div>

          <div className="space-y-1.5">
            <Label htmlFor="lead-phone">Phone Number</Label>
            <Input
              id="lead-phone"
              type="tel"
              placeholder="e.g. 01XXXXXXXXX"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
              maxLength={20}
            />
          </div>

          <div className="space-y-1.5">
            <Label>Service Needed</Label>
            <Select value={service} onValueChange={setService} required>
              <SelectTrigger>
                <SelectValue placeholder="Select a service" />
              </SelectTrigger>
              <SelectContent>
                {SERVICES.map((s) => (
                  <SelectItem key={s} value={s}>{s}</SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <Button
            type="submit"
            disabled={!name || !phone || !service}
            className="w-full gap-2 bg-[#25D366] hover:bg-[#1da851] text-white font-bold rounded-xl h-12 text-base"
          >
            <MessageCircle className="h-5 w-5" />
            Continue to WhatsApp
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
};

import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Award, GraduationCap, Stethoscope, Phone, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { telLink, waLink } from "@/lib/clinic";

export type Doctor = {
  name: string;
  role: string;
  qualifications: string[];
  bio: string;
  experience: string;
  specialties: string[];
  image: string;
};

interface Props {
  doctor: Doctor | null;
  open: boolean;
  onOpenChange: (v: boolean) => void;
}

export const DoctorModal = ({ doctor, open, onOpenChange }: Props) => {
  if (!doctor) return null;
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl p-0 overflow-hidden bg-card">
        <div className="grid md:grid-cols-[260px_1fr]">
          <div className="bg-hero-gradient p-6 flex items-center justify-center">
            <img
              src={doctor.image}
              alt={`${doctor.name} - ${doctor.role}`}
              className="w-44 h-44 md:w-full md:h-auto md:max-h-72 object-cover object-top rounded-2xl shadow-medium"
            />
          </div>
          <div className="p-6 md:p-7">
            <DialogHeader>
              <DialogTitle className="text-2xl font-display">{doctor.name}</DialogTitle>
              <DialogDescription className="text-primary font-medium">{doctor.role}</DialogDescription>
            </DialogHeader>
            <div className="mt-4 space-y-3 text-sm">
              <div className="flex gap-2.5"><GraduationCap className="h-4 w-4 mt-0.5 text-primary shrink-0" /><span>{doctor.qualifications.join(", ")}</span></div>
              <div className="flex gap-2.5"><Award className="h-4 w-4 mt-0.5 text-primary shrink-0" /><span>{doctor.experience}</span></div>
              <div className="flex gap-2.5"><Stethoscope className="h-4 w-4 mt-0.5 text-primary shrink-0" /><span>{doctor.specialties.join(" • ")}</span></div>
              <p className="text-muted-foreground leading-relaxed pt-2">{doctor.bio}</p>
            </div>
            <div className="flex gap-2 mt-5">
              <a href={telLink} className="flex-1"><Button variant="hero" className="w-full gap-2"><Phone className="h-4 w-4" />Call</Button></a>
              <a href={waLink(`Hi, I'd like to book an appointment with ${doctor.name}.`)} target="_blank" rel="noopener noreferrer" className="flex-1">
                <Button variant="outline" className="w-full gap-2"><MessageCircle className="h-4 w-4" />WhatsApp</Button>
              </a>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

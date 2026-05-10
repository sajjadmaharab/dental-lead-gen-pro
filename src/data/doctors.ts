import drShahSultan from "@/assets/dr-shah-sultan.png";
import drSaharulKabir from "@/assets/dr-saharul-kabir.png";
import type { Doctor } from "@/components/DoctorModal";

export const DOCTORS: Doctor[] = [
  {
    name: "Dr. Md. Saharul Kabir",
    role: "Oral & Dental Surgeon",
    qualifications: [
      "BDS — Shaheed Suhrawardy Medical College & Hospital",
      "PGT — Maxillofacial Surgery",
      "PGT — Conservative Dentistry",
      "BMDC Reg. No.: 13287",
    ],
    image: drSaharulKabir,
    experience: "Specially trained in Aesthetic Dentistry & Surgical Extraction",
    specialties: [
      "Maxillofacial Surgery",
      "Conservative Dentistry",
      "Aesthetic Dentistry",
      "Surgical Extraction",
    ],
    bio: "Dr. Md. Saharul Kabir is an Oral & Dental Surgeon with advanced post-graduate training in Maxillofacial Surgery and Conservative Dentistry. He is specially trained in aesthetic dentistry and surgical extractions, delivering safe, comfortable and precise care for every patient.",
  },
  {
    name: "Dr. Md. Shah Sultan",
    role: "Dental Surgeon",
    qualifications: [
      "BDS — Rajshahi University",
      "BMDC Reg. No.: 13087",
    ],
    image: drShahSultan,
    experience: "Experienced in Root Canal Treatment and Surgical Extraction",
    specialties: [
      "Root Canal Treatment",
      "Surgical Extraction",
      "General Dentistry",
      "Cosmetic Filling",
    ],
    bio: "Dr. Md. Shah Sultan is a dedicated Dental Surgeon with hands-on experience in root canal treatment and surgical extractions. He focuses on conservative, pain-free dentistry using modern techniques and patient-centred care.",
  },
];

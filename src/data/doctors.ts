import drShahSultan from "@/assets/dr-shah-sultan.png";
import drSaharulKabir from "@/assets/dr-saharul-kabir.png";
import type { Doctor } from "@/components/DoctorModal";

export const DOCTORS: Doctor[] = [
  {
    name: "Dr. Md. Shah Sultan",
    role: "Dental Surgeon",
    qualifications: ["BDS (RU)"],
    image: drShahSultan,
    experience: "Years of experience treating patients across Debidwar and Comilla",
    specialties: ["General Dentistry", "Cosmetic Filling", "Root Canal", "Crowns & Bridges"],
    bio: "Dr. Md. Shah Sultan is a dedicated dental surgeon committed to providing high-quality, patient-centred care. He focuses on conservative dentistry, smile design and pain-free treatments using modern equipment.",
  },
  {
    name: "Dr. Md. Saharul Kabir",
    role: "Oral & Dental Surgeon",
    qualifications: ["BDS"],
    image: drSaharulKabir,
    experience: "Experienced oral & dental surgeon serving the Debidwar community",
    specialties: ["Oral Surgery", "Wisdom Teeth", "Dental Implants", "Extractions"],
    bio: "Dr. Md. Saharul Kabir specialises in oral and dental surgery, including wisdom tooth removal, implant placement and minor oral surgical procedures, with a strong focus on patient comfort and safety.",
  },
];

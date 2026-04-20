import broken_b from "@/assets/case-broken-before.jpg";
import broken_a from "@/assets/case-broken-after.jpg";
import gap_b from "@/assets/case-gap-before.jpg";
import gap_a from "@/assets/case-gap-after.jpg";
import white_b from "@/assets/case-whitening-before.jpg";
import white_a from "@/assets/case-whitening-after.jpg";
import fill_b from "@/assets/case-filling-before.jpg";
import fill_a from "@/assets/case-filling-after.jpg";
import imp_b from "@/assets/case-implant-before.jpg";
import imp_a from "@/assets/case-implant-after.jpg";
import br_b from "@/assets/case-braces-before.jpg";
import br_a from "@/assets/case-braces-after.jpg";

export type Case = {
  id: number;
  title: string;
  category: string;
  before: string;
  after: string;
  description: string;
};

export const CASES: Case[] = [
  { id: 1, title: "Broken Tooth Restoration", category: "Cosmetic", before: broken_b, after: broken_a, description: "A patient came in with a chipped front tooth after an accident. We restored it in a single visit using cosmetic bonding for a seamless natural look." },
  { id: 2, title: "Gap Teeth Closing", category: "Cosmetic", before: gap_b, after: gap_a, description: "Visible gap between front teeth closed using cosmetic bonding — no braces needed. Result: a confident, even smile in just one appointment." },
  { id: 3, title: "Professional Teeth Whitening", category: "Whitening", before: white_b, after: white_a, description: "Years of coffee and tea stains removed with professional scaling and in-clinic whitening. The patient regained a bright, fresh smile." },
  { id: 4, title: "Cavity & Cosmetic Filling", category: "Filling", before: fill_b, after: fill_a, description: "A visible cavity restored with tooth-coloured composite filling. The repair is invisible and protects the tooth for years to come." },
  { id: 5, title: "Single Tooth Implant", category: "Implant", before: imp_b, after: imp_a, description: "Missing tooth replaced with a permanent dental implant and natural-looking crown. The patient can chew and smile with full confidence again." },
  { id: 6, title: "Orthodontic Braces", category: "Orthodontic", before: br_b, after: br_a, description: "Crowded, crooked teeth straightened with orthodontic braces over 18 months. Result: a perfectly aligned, healthy smile." },
];

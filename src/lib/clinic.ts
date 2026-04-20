// Central source of truth for clinic info
export const CLINIC = {
  name: "Motiur's Dental",
  tagline: "Life-Changing Dental Care in Debidwar",
  phone: "01816010194",
  phoneTel: "+8801816010194",
  whatsapp: "+8801816010194",
  whatsappRaw: "8801816010194",
  email: "info@motiursdental.com",
  address: "Ibn Sina Hospital (Pvt.) Ltd, Debidwar, Cumilla, Bangladesh",
  shortAddress: "Ibn Sina Hospital (Pvt.) Ltd, Debidwar",
  city: "Debidwar",
  region: "Cumilla (Comilla)",
  mapUrl: "https://maps.app.goo.gl/5httN8nCiNWv5weU7",
  mapEmbed:
    "https://www.google.com/maps?q=Ibn+Sina+Hospital+Debidwar&output=embed",
  facebook: "https://www.facebook.com/share/18eWxEYMj8/",
  hours: "Every day 10:00 AM – 7:00 PM (Friday Closed)",
  hoursOpen: "10:00",
  hoursClose: "19:00",
  url: "https://motiursdental.com",
};

export const waLink = (msg = "Hi, I would like to book a dental appointment at Motiur's Dental.") =>
  `https://wa.me/${CLINIC.whatsappRaw}?text=${encodeURIComponent(msg)}`;

export const telLink = `tel:${CLINIC.phoneTel}`;

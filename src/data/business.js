// Contact details used across the site. Change them here only.
export const BUSINESS = {
  name: "Vindyvasni Marketing",
  phone: "+91 94250 00642",
  phoneHref: "tel:+919425000642",
  whatsapp: "919425000642",
  whatsappCatalogue: "https://wa.me/c/23837638951136",
  email: "vindyvasnimarketing2020@gmail.com",
  address: "Housing Board, Betul Ganj, Betul (M.P.) 460001",
  hours: "Mon – Sat, 10 am – 7 pm",
};

export const waLink = (text) =>
  `https://wa.me/${BUSINESS.whatsapp}${text ? `?text=${encodeURIComponent(text)}` : ""}`;

export interface FAQItem {
  question: string;
  answer: string;
  category: 'facial' | 'nails' | 'general';
}

export const FAQ_ITEMS: FAQItem[] = [
  {
    question: "Do I need to know which facial treatment to choose before booking?",
    answer: "Not at all! You are not expected to know technical treatment names before arriving. Simply select 'Skin Consultation' or 'Advanced Deep Clean Facial' when booking. During your appointment, our certified esthetician will analyze your skin, discuss your concerns, and tailor the treatment specifically for you.",
    category: 'facial'
  },
  {
    question: "What should I expect during my first facial experience at Signature?",
    answer: "Your visit starts with a relaxed 5-minute skin discussion. You will lie on a warmed plush facial bed in a private, quiet room. The treatment includes gentle cleansing, skin analysis, customized exfoliation, steam, gentle extraction (if needed), nutrient masks, and finishing hydration with sun protection.",
    category: 'facial'
  },
  {
    question: "Is there any downtime or redness after a facial treatment?",
    answer: "Most of our facials (like the NanoGlow Infusion and Silk Lift Therapy) have zero downtime and leave your skin glowing immediately. Deep cleansing facials with extractions may leave mild flushing for 1–2 hours. We recommend skipping heavy makeup for 12 hours after your treatment.",
    category: 'facial'
  },
  {
    question: "Can I get my nails and a facial done on the same day?",
    answer: "Yes! Many of our clients schedule a 'Nails to Glow' combination day. We recommend receiving your facial first so you can relax, followed by your manicure or pedicure service.",
    category: 'general'
  },
  {
    question: "What is your appointment cancellation policy?",
    answer: "We kindly request at least 24 hours notice for any cancellation or rescheduling so we can accommodate other clients on our waitlist. You can manage your appointment via link or by calling us at 616-785-0944.",
    category: 'general'
  }
];

export interface Review {
  id: string;
  author: string;
  category: 'nails' | 'facial';
  rating: number;
  date: string;
  comment: string;
  serviceName: string;
  verified: boolean;
}

export const REVIEWS_DATA: Review[] = [
  {
    id: '1',
    author: 'Nicole McLaughlin',
    category: 'nails',
    rating: 5,
    date: '2 weeks ago',
    comment: 'I had a dream experience! My nails were thin and damaged from a previous nail shop. Instead of just applying acrylics, Xena explained what I should do to restore natural nail health. I have never been happier with my nails!',
    serviceName: 'Gel-X Natural Restoration',
    verified: true
  },
  {
    id: '2',
    author: 'Audra Leigh',
    category: 'nails',
    rating: 5,
    date: '1 month ago',
    comment: 'Absolutely love my nails! Ken did an amazing job helping me build up my natural nails since I am a biter. I work as a bartender and ride motorcycles - almost 3 weeks later, zero chips or breakage!',
    serviceName: 'Dip Powder Manicure',
    verified: true
  },
  {
    id: '3',
    author: 'Kristin Coalter',
    category: 'nails',
    rating: 5,
    date: '3 weeks ago',
    comment: 'Highly recommend Xena! She is very friendly, polite, fast, and pays attention to detail. The salon is clean, bright, and welcoming.',
    serviceName: 'Deluxe Spa Pedicure',
    verified: true
  },
  {
    id: '4',
    author: 'Elena R.',
    category: 'facial',
    rating: 5,
    date: '1 week ago',
    comment: 'I was hesitant to book a facial because I didn’t know what my skin needed. The skin consultation was so warm and unpressured. My pores have never felt this clean, and my skin had an incredible natural glow for days!',
    serviceName: 'Advanced Deep Clean Facial',
    verified: true
  },
  {
    id: '5',
    author: 'Jessica M.',
    category: 'facial',
    rating: 5,
    date: '2 weeks ago',
    comment: 'I regularly get my nails done at Signature and decided to try the NanoGlow Infusion. Wow! My skin felt so plump, hydrated, and radiant right before my sister’s wedding. The esthetician is so knowledgeable.',
    serviceName: 'NanoGlow Infusion',
    verified: true
  },
  {
    id: '6',
    author: 'Samantha K.',
    category: 'facial',
    rating: 5,
    date: '1 month ago',
    comment: 'As someone dealing with stubborn adult breakouts, the clarifying facial was a game changer. Super calming treatment without aggressive peeling. Highly recommend Signature for both nails and skincare!',
    serviceName: 'Clarifying Acne & Barrier Support',
    verified: true
  }
];

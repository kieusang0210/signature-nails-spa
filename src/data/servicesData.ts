export interface SkinConcern {
  id: string;
  title: string;
  category: string;
  customerLanguage: string[];
  description: string;
  image: string;
  recommendedFacial: string;
}

export interface ServiceItem {
  id: string;
  name: string;
  category: 'nails' | 'facial';
  subCategory?: string;
  outcome: string;
  bestFor: string;
  duration: string;
  price: string;
  description: string;
  whatHappens?: string[];
  postCareNotice?: string;
  badge?: string;
  image?: string;
}

export const SKIN_CONCERNS: SkinConcern[] = [
  {
    id: 'deep-clean',
    title: 'Deep Clean / Pores',
    category: 'Congestion & Pores',
    customerLanguage: ['Clogged pores', 'Blackheads', 'Congested skin', 'Skin that does not feel clean'],
    description: 'Purify congested pores, remove impactions, and restore clean clarity without harsh abrasion.',
    image: '/images/skincare_deepclean.png',
    recommendedFacial: 'Advanced Deep Clean Facial'
  },
  {
    id: 'glow',
    title: 'Glow / Brightening',
    category: 'Radiance & Texture',
    customerLanguage: ['Dull or tired-looking skin', 'Uneven texture', 'Event preparation', 'A healthy-looking glow'],
    description: 'Gentle exfoliation and nutrient infusion designed to reveal luminous, vibrant skin tone.',
    image: '/images/skincare_nanoglow.png',
    recommendedFacial: 'NanoGlow Infusion'
  },
  {
    id: 'acne',
    title: 'Acne / Breakouts',
    category: 'Calm & Clarify',
    customerLanguage: ['Recurring breakouts', 'Oily or congested skin', 'Teen skincare', 'Calm and consistent care'],
    description: 'Soothe redness, control excess sebum, and support barrier repair with non-comedogenic care.',
    image: '/images/skincare_facial_treatment.png',
    recommendedFacial: 'Clarifying Acne Barrier Therapy'
  },
  {
    id: 'hydration',
    title: 'Hydration / Renewal',
    category: 'Moisture & Firming',
    customerLanguage: ['Dry or tight skin', 'Fine lines', 'Loss of radiance', 'Dehydrated mature skin'],
    description: 'Deeply lock in essential hydration, plump dehydration lines, and restore plush softness.',
    image: '/images/skincare_facial_treatment.png',
    recommendedFacial: 'Silk Lift Therapy'
  }
];

export const FEATURED_FACIALS: ServiceItem[] = [
  {
    id: 'advanced-deep-clean',
    name: 'Advanced Deep Clean Facial',
    category: 'facial',
    subCategory: 'Cleansing & Purifying',
    outcome: 'Clear, breathable skin with refined pores and balanced oils.',
    bestFor: 'Congested skin, clogged pores, and monthly skin maintenance.',
    duration: '60 Min',
    price: '$75',
    badge: 'Most Popular',
    description: 'A comprehensive pore-purifying treatment featuring gentle double cleansing, enzyme exfoliation, targeted ultrasonic extractions, soothing clay mask, and calming serum infusion.',
    whatHappens: [
      'Botanical oil & jelly double cleanse',
      'Warm steam & gentle papaya enzyme resurfacing',
      'Painless ultrasonic extraction of pore impactions',
      'Purifying green tea & zinc cooling mask',
      'Finishing hydration & SPF protection'
    ],
    postCareNotice: 'Skin feels instantly fresh and clean. Slight flushing may last 1–2 hours. Avoid heavy makeup for 12 hours.',
    image: '/images/skincare_deepclean.png'
  },
  {
    id: 'nanoglow-infusion',
    name: 'NanoGlow Infusion',
    category: 'facial',
    subCategory: 'Renewal & Brightening',
    outcome: 'Luminous, glass-like radiance and ultra-smooth texture.',
    bestFor: 'Dullness, special event prep, and fine texture refinement.',
    duration: '60 Min',
    price: '$95',
    badge: 'Red Carpet Favorite',
    description: 'Advanced micro-channeling nano-technology pairs with high-concentration hyaluronic acid and Vitamin C to deliver intense radiance without downtime or skin discomfort.',
    whatHappens: [
      'Gentle AHA/BHA skin prep polish',
      'Nano-infusion pen application with botanical serums',
      'Hydrogel cooling sheet mask under LED red light',
      'Relaxing neck & shoulder pressure-point massage',
      'Moisture barrier seal with peptide lipid cream'
    ],
    postCareNotice: 'Zero downtime! Perfect 24–48 hours before photo shoots or special celebrations.',
    image: '/images/skincare_nanoglow.png'
  },
  {
    id: 'silk-lift-therapy',
    name: 'Silk Lift Therapy',
    category: 'facial',
    subCategory: 'Anti-Aging & Firming',
    outcome: 'Plumped hydration, visibly softened lines, and contour support.',
    bestFor: 'Dehydrated, mature skin, fine lines, or sagging contours.',
    duration: '75 Min',
    price: '$115',
    badge: 'Ultimate Renewal',
    description: 'A deeply restorative ritual combining microcurrent firming lift, silk peptide mask, and sculpted lymphatic facial massage to revitalize tone and elasticity.',
    whatHappens: [
      'Gentle milk cleansing & lactic acid skin smoother',
      'Microcurrent contour stimulation for muscle toning',
      'Raw silk peptide cocooning hydration mask',
      'Jade roller lymphatic drainage facial sculpting',
      'Rich ceramide recovery moisture seal'
    ],
    postCareNotice: 'Skin appears noticeably firmer and deeply hydrated immediately following treatment.',
    image: '/images/skincare_facial_treatment.png'
  }
];

export const ALL_FACIAL_SERVICES: ServiceItem[] = [
  ...FEATURED_FACIALS,
  {
    id: 'clarifying-acne-therapy',
    name: 'Clarifying Acne & Barrier Support Facial',
    category: 'facial',
    subCategory: 'Calming & Acne Care',
    outcome: 'Reduced inflammation, calmed redness, and barrier rebalancing.',
    bestFor: 'Active breakouts, reactive skin, and teen skincare support.',
    duration: '50 Min',
    price: '$70',
    description: 'Targeted anti-bacterial high-frequency therapy, soothing blue botanical masks, and barrier-repairing ceramides designed to heal active lesions while preventing future congestion.',
    whatHappens: ['Salicylic acid cleanser', 'Gentle non-stripping extraction', 'High frequency spot disinfection', 'Cooling Centella Asiatica mask', 'Non-comedogenic moisturizer'],
    image: '/images/skincare_facial_treatment.png'
  },
  {
    id: 'express-refresh-facial',
    name: 'Express Signature Glow Facial',
    category: 'facial',
    subCategory: 'Quick Care',
    outcome: 'Instant pick-me-up hydration and smoothed skin polish.',
    bestFor: 'Busy schedules, lunch break pampering, or first-timers.',
    duration: '30 Min',
    price: '$45',
    description: 'A focused 30-minute treatment delivering essential cleansing, customized mask, and glowing moisture lock.',
    whatHappens: ['Gentle cleanse', 'Custom exfoliation mask', 'Hydration serum massage', 'Sun protection'],
    image: '/images/skincare_nanoglow.png'
  }
];

export const NAIL_CATEGORIES = [
  {
    name: 'Signature Manicures',
    description: 'Meticulous cuticle care, nail shaping, hand massage, and long-lasting polish.',
    items: [
      { name: 'Classic Signature Manicure', price: '$25', duration: '30 Min', desc: 'Nail shaping, cuticle trimming, warm lotion massage, and classic polish.' },
      { name: 'Gel / Shellac Manicure', price: '$40', duration: '45 Min', desc: 'Long-lasting zero-dry-time gel polish cured under LED light for up to 3 weeks of shine.' },
      { name: 'Deluxe Spa Manicure', price: '$38', duration: '45 Min', desc: 'Classic manicure upgraded with exfoliating sugar scrub, hydrating paraffin wax treatment, and hot towel wrap.' },
      { name: 'Signature Dip Powder Manicure', price: '$50+', duration: '50 Min', desc: 'Strong, lightweight, vitamin-fortified dip powder application that promotes natural nail growth.' }
    ]
  },
  {
    name: 'Pedicure Experiences',
    description: 'Relaxing foot soaks, heel smoothing, leg massages, and pristine polish application.',
    items: [
      { name: 'Signature Spa Pedicure', price: '$38', duration: '40 Min', desc: 'Whirlpool foot bath, nail shaping, callus smoothing, foot scrub, and calming massage.' },
      { name: 'Deluxe Herbal Spa Pedicure', price: '$52', duration: '50 Min', desc: 'Custom organic herbal soak, deep exfoliating scrub, mud mask with warm towels, and extended massage.' },
      { name: 'Volcano Spa Luxury Pedicure', price: '$65', duration: '60 Min', desc: 'Detoxifying bubble volcano activation, organic sugar scrub, collagen cream mask, paraffin wax, and hot stone massage.' },
      { name: 'Gel Pedicure Upgrade', price: '+$15', duration: '+15 Min', desc: 'Upgrade any pedicure with durable gel polish.' }
    ]
  },
  {
    name: 'Nail Enhancements & Custom Art',
    description: 'Full sets, fills, custom nail shaping, and artistic hand-drawn nail designs.',
    items: [
      { name: 'Full Set Acrylics', price: '$50+', duration: '60 Min', desc: 'Full set acrylic enhancements with tip extension and choice of shape & length.' },
      { name: 'Acrylic Refill', price: '$38+', duration: '45 Min', desc: 'Maintenance fill for acrylic enhancements.' },
      { name: 'Gel-X Full Set', price: '$65+', duration: '60 Min', desc: 'Soft gel extension system that gives natural weight feel with maximum durability.' },
      { name: 'Custom Nail Art (per nail)', price: '$5+', duration: 'Varies', desc: 'Hand-drawn designs, chrome finishes, French tips, rhinestones, and ombré gradients.' }
    ]
  }
];

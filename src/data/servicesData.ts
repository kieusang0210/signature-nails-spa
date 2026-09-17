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
    recommendedFacial: 'Advanced Deep Clean ($125)'
  },
  {
    id: 'glow',
    title: 'Glow / Brightening',
    category: 'Radiance & Texture',
    customerLanguage: ['Dull or tired-looking skin', 'Uneven texture', 'Event preparation', 'A healthy-looking glow'],
    description: 'Gentle exfoliation and nutrient infusion designed to reveal luminous, vibrant skin tone.',
    image: '/images/skincare_nanoglow.png',
    recommendedFacial: 'NanoGlow Infusion ($145)'
  },
  {
    id: 'acne',
    title: 'Acne / Breakouts',
    category: 'Calm & Clarify',
    customerLanguage: ['Recurring breakouts', 'Oily or congested skin', 'Teen skincare', 'Calm and consistent care'],
    description: 'Soothe redness, control excess sebum, and support barrier repair with non-comedogenic care.',
    image: '/images/skincare_facial_treatment.png',
    recommendedFacial: 'Calm Acne Therapy ($145)'
  },
  {
    id: 'hydration',
    title: 'Hydration / Renewal',
    category: 'Moisture & Firming',
    customerLanguage: ['Dry or tight skin', 'Fine lines', 'Loss of radiance', 'Dehydrated mature skin'],
    description: 'Deeply lock in essential hydration, plump dehydration lines, and restore plush softness.',
    image: '/images/skincare_facial_treatment.png',
    recommendedFacial: 'Silk Lift Therapy ($175)'
  }
];

export const FEATURED_FACIALS: ServiceItem[] = [
  {
    id: 'advanced-deep-clean',
    name: 'Advanced Deep Clean',
    category: 'facial',
    subCategory: 'Essential Facials',
    outcome: 'Purify pores + clearer, calmer skin.',
    bestFor: 'Congested skin, clogged pores, and deep impurities.',
    duration: '75 mins',
    price: '$125',
    badge: 'Best Seller',
    description: 'Purify pores + clearer, calmer skin. Deep pore cleanse removing build-up & impurities.',
    whatHappens: [
      'Botanical double cleanse',
      'Warm steam & gentle exfoliation',
      'Ultrasonic & manual extractions',
      'Purifying cooling mask',
      'Finishing hydration & SPF'
    ],
    postCareNotice: 'Skin feels instantly fresh and clean. Slight flushing may last 1–2 hours. Avoid heavy makeup for 12 hours.',
    image: '/images/skincare_deepclean.png'
  },
  {
    id: 'nanoglow-infusion',
    name: 'NanoGlow Infusion',
    category: 'facial',
    subCategory: 'Advanced Skin Therapies',
    outcome: 'Infuses targeted nutrients to boost hydration, radiance, and skin renewal.',
    bestFor: 'Skin renewal & revitalization, dullness, and event prep.',
    duration: '75 mins',
    price: '$145',
    badge: 'Best Seller',
    description: '(Skin Renewal & Revitalization) Infuses targeted nutrients to boost hydration, radiance, and skin renewal.',
    whatHappens: [
      'Gentle AHA/BHA skin prep polish',
      'Nano-infusion with targeted serums',
      'Hydrogel cooling mask',
      'LED light therapy',
      'Peptide moisture barrier seal'
    ],
    postCareNotice: 'Zero downtime! Perfect 24–48 hours before special events.',
    image: '/images/skincare_nanoglow.png'
  },
  {
    id: 'silk-lift-therapy',
    name: 'Silk Lift Therapy',
    category: 'facial',
    subCategory: 'Advanced Skin Therapies',
    outcome: 'Firms, lifts, and improves elasticity for smoother, younger-looking skin.',
    bestFor: 'Firm & Lift, mature skin, fine lines, or sagging contours.',
    duration: '90 mins',
    price: '$175',
    badge: 'Best Seller',
    description: '(Firm & Lift) Firms, lifts, and improves elasticity for smoother, younger-looking skin.',
    whatHappens: [
      'Gentle cleansing & smoothing prep',
      'Microcurrent firming lift',
      'Silk peptide cocooning mask',
      'Facial contour massage',
      'Ceramide recovery moisture seal'
    ],
    postCareNotice: 'Skin appears noticeably firmer and deeply hydrated immediately.',
    image: '/images/skincare_facial_treatment.png'
  }
];

export const ESSENTIAL_FACIALS: ServiceItem[] = [
  {
    id: 'express-refresh',
    name: 'Express Refresh',
    category: 'facial',
    subCategory: 'Essential Facials',
    outcome: 'Cleanse + instantly refreshed skin',
    bestFor: 'Quick pick-me-up or busy schedules',
    duration: '30 mins',
    price: '$55',
    description: 'Cleanse + instantly refreshed skin'
  },
  {
    id: 'essential-deep-clean',
    name: 'Essential Deep Clean',
    category: 'facial',
    subCategory: 'Essential Facials',
    outcome: 'Deep pore cleanse + visibly clearer skin',
    bestFor: 'Clogged pores and general maintenance',
    duration: '50 mins',
    price: '$85',
    description: 'Deep pore cleanse + visibly clearer skin'
  },
  {
    id: 'bubble-oxygen-clean',
    name: 'Bubble Oxygen Clean',
    category: 'facial',
    subCategory: 'Essential Facials',
    outcome: 'Oxygen cleanse + fresh radiant glow',
    bestFor: 'Dull skin needing cellular oxygenation & glow',
    duration: '60 mins',
    price: '$105',
    description: 'Oxygen cleanse + fresh radiant glow'
  },
  FEATURED_FACIALS[0], // Advanced Deep Clean ($125)
  {
    id: 'pore-detox-infusion',
    name: 'Pore Detox Infusion',
    category: 'facial',
    subCategory: 'Essential Facials',
    outcome: 'Detox pores + loosen build up, remove impurities',
    bestFor: 'Heavy pore congestion & deep buildup',
    duration: '75 mins',
    price: '$135',
    description: 'Detox pores + loosen build up, remove impurities'
  }
];

export const ACNE_TREATMENTS: ServiceItem[] = [
  {
    id: 'acne-relief',
    name: 'Acne Relief',
    category: 'facial',
    subCategory: 'Acne Treatment',
    outcome: 'Deep cleanse + reduced breakouts',
    bestFor: 'Active breakouts and stubborn blemishes',
    duration: '75 mins',
    price: '$125',
    description: 'Deep cleanse + reduced breakouts'
  },
  {
    id: 'calm-acne-therapy',
    name: 'Calm Acne Therapy',
    category: 'facial',
    subCategory: 'Acne Treatment',
    outcome: 'Soothe inflammation + stronger skin barrier',
    bestFor: 'Inflamed, reactive acne skin',
    duration: '75 mins',
    price: '$145',
    description: 'Soothe inflammation + stronger skin barrier'
  },
  {
    id: 'acne-detox-hydra',
    name: 'Acne Detox Hydra',
    category: 'facial',
    subCategory: 'Acne Treatment',
    outcome: 'Deep detox + faster skin recovery',
    bestFor: 'Persistent acne requiring hydrated healing',
    duration: '90 mins',
    price: '$165',
    description: 'Deep detox + faster skin recovery'
  }
];

export const ADVANCED_SKIN_THERAPIES: ServiceItem[] = [
  {
    id: 'gentle-renewal',
    name: 'Gentle Renewal',
    category: 'facial',
    subCategory: 'Advanced Skin Therapies',
    outcome: 'Deeply hydrates to soften skin, smooth fine lines & restore a healthy glow',
    bestFor: 'Soft Hydration & early signs of aging',
    duration: '60 mins',
    price: '$115',
    description: '(Soft Hydration) Deeply hydrates to soften skin, smooth fine lines & restore a healthy glow'
  },
  FEATURED_FACIALS[1], // NanoGlow Infusion ($145)
  {
    id: 'radiance-glow-peel',
    name: 'Radiance Glow Peel',
    category: 'facial',
    subCategory: 'Advanced Skin Therapies',
    outcome: 'Brightens pigmentation, reveals luminous & plump skin',
    bestFor: 'Even Tone Correction & hyperpigmentation',
    duration: '80 mins',
    price: '$155',
    description: '(Even Tone Correction) Brightens pigmentation, reveals luminous & plump skin'
  },
  {
    id: 'golden-glow-therapy',
    name: 'Golden Glow Therapy',
    category: 'facial',
    subCategory: 'Advanced Skin Therapies',
    outcome: 'Enhance glow, improve tone, and visibly brighten the skin',
    bestFor: 'Luxury Brightening & radiant glow',
    duration: '80 mins',
    price: '$165',
    description: '(Luxury Brightening) Enhance glow, improve tone, and visibly brighten the skin'
  },
  FEATURED_FACIALS[2], // Silk Lift Therapy ($175)
  {
    id: 'luminous-glass-therapy',
    name: 'Luminous Glass Therapy',
    category: 'facial',
    subCategory: 'Advanced Skin Therapies',
    outcome: 'Deeply purifies, brightens, and smooths the skin for a softer, clearer, luminous glass-skin finish',
    bestFor: 'Advanced Brightening & Glass Skin',
    duration: '90 mins',
    price: '$175',
    badge: 'Best Seller',
    description: '(Advanced Brightening & Glass Skin) Deeply purifies, brightens, and smooths the skin for a softer, clearer, luminous glass-skin finish'
  },
  {
    id: 'aqua-luxe-therapy',
    name: 'Aqua Luxe Therapy',
    category: 'facial',
    subCategory: 'Advanced Skin Therapies',
    outcome: 'Intense hydration to restore softness, enhance radiance, and plump the skin',
    bestFor: 'Ultimate Hydration & deep replenishment',
    duration: '90 mins',
    price: '$185',
    description: '(Ultimate Hydration) Intense hydration to restore softness, enhance radiance, and plump the skin'
  }
];

export const FACIAL_ADDONS = {
  enhancements: [
    { name: 'Oxygen Glow Finish', price: '$40' },
    { name: 'LED Light Therapy', price: '$20' },
    { name: 'Lifting Mask', price: '$25' }
  ],
  targeted: [
    { name: 'Pores Detox Infusion', price: '$45' },
    { name: 'Dermaplaning', price: '$40' },
    { name: 'Eyes Treatment', price: '$35' },
    { name: 'Deep Clean Technique', price: '$45' }
  ],
  relaxations: [
    { name: 'Neck & Shoulder Massage', price: '$20' },
    { name: 'Facial Massage', price: '$20' }
  ]
};

export const ALL_FACIAL_SERVICES: ServiceItem[] = [
  ...ESSENTIAL_FACIALS,
  ...ACNE_TREATMENTS,
  ...ADVANCED_SKIN_THERAPIES
];

export const NAIL_CATEGORIES = [
  {
    name: 'Nail Enhancements',
    description: 'Acrylics, Dip Powder, Gel-X & Builder Gel enhancements crafted for strength and style.',
    items: [
      { name: 'Full Set Acrylic w/ Shellac', price: '$55', duration: '60 Min', desc: 'Full set acrylics with gel shellac finish. (w/ Take-Off +$10)' },
      { name: 'Acrylic Fill-In', price: '$42', duration: '45 Min', desc: 'Maintenance fill for acrylic enhancements.' },
      { name: 'Dip Powder', price: '$45', duration: '50 Min', desc: 'Vitamin-fortified dip powder application. (w/ Tips +$10, w/ Take-Off +$5)' },
      { name: 'Gel-X / Builder Gel', price: '$60', duration: '60 Min', desc: 'Soft gel extension system or builder gel for natural weight feel. (w/ Take-Off +$10)' },
      { name: 'Builder Gel Fill-In', price: '$50', duration: '50 Min', desc: 'Maintenance fill for builder gel extensions.' },
      { name: 'Toe Acrylic', price: '$10 / toe', duration: '15 Min', desc: 'Acrylic enhancement per single toe.' },
      { name: 'Toe Full-Set Acrylic', price: '$65', duration: '60 Min', desc: 'Full set acrylic enhancements for toes.' }
    ]
  },
  {
    name: 'Natural Nail Care',
    description: 'Meticulous cuticle care, foot soaks, heel smoothing, and classic or shellac polish.',
    items: [
      { name: 'Classic Manicure', price: '$25', duration: '30 Min', desc: 'Nail shaping, cuticle trimming, hand massage, and regular polish.' },
      { name: 'Classic Manicure w/ Shellac', price: '$38', duration: '45 Min', desc: 'Classic manicure upgraded with long-lasting gel shellac polish.' },
      { name: 'Classic Spa Pedicure', price: '$35', duration: '40 Min', desc: 'Whirlpool foot bath, nail shaping, callus smoothing, foot scrub, and calming massage.' },
      { name: 'Deluxe Spa Pedicure', price: '$50', duration: '50 Min', desc: 'Exfoliating scrub, mud mask with warm towels, and extended relaxing massage.' },
      { name: 'Hot Stone Spa Pedicure', price: '$60', duration: '55 Min', desc: 'Warm stone massage, deep moisture treatment, and muscle tension relief.' },
      { name: 'Candle Therapy Spa Pedicure', price: '$75', duration: '65 Min', desc: 'Luxury warm massage candle oil treatment for ultra-hydrated, soft skin.' },
      { name: 'Polish Change (Fingers) - Regular', price: '$15', duration: '15 Min', desc: 'Quick regular polish removal and re-application for fingers.' },
      { name: 'Polish Change (Fingers) - w/ Shellac', price: '$25', duration: '25 Min', desc: 'Shellac gel polish change for fingers.' },
      { name: 'Polish Change (Toes) - Regular', price: '$20', duration: '15 Min', desc: 'Quick regular polish removal and re-application for toes.' },
      { name: 'Polish Change (Toes) - w/ Shellac', price: '$30', duration: '25 Min', desc: 'Shellac gel polish change for toes.' }
    ]
  },
  {
    name: 'Kid Services (10 Years & Under)',
    description: 'Gentle, fun manicures and pedicures specially designed for children aged 10 and under.',
    items: [
      { name: 'Shellac Pedicure (Kid)', price: '$35', duration: '35 Min', desc: 'Kid pedicure with long-lasting gel shellac polish.' },
      { name: 'Shellac Manicure (Kid)', price: '$25', duration: '30 Min', desc: 'Kid manicure with long-lasting gel shellac polish.' },
      { name: 'Regular Pedicure (Kid)', price: '$25', duration: '30 Min', desc: 'Gentle foot soak, nail care, and choice of regular polish.' },
      { name: 'Regular Manicure (Kid)', price: '$20', duration: '25 Min', desc: 'Nail shaping, light lotion massage, and choice of regular polish.' },
      { name: 'Polish Change Fingers (Kid - Regular)', price: '$10', duration: '15 Min', desc: 'Regular polish change on fingers for kids.' },
      { name: 'Polish Change Toes (Kid - Regular)', price: '$15', duration: '15 Min', desc: 'Regular polish change on toes for kids.' },
      { name: 'Polish Change Fingers (Kid - w/ Shellac)', price: '$15', duration: '20 Min', desc: 'Shellac polish change on fingers for kids.' },
      { name: 'Polish Change Toes (Kid - w/ Shellac)', price: '$20', duration: '20 Min', desc: 'Shellac polish change on toes for kids.' }
    ]
  },
  {
    name: 'Waxing Services',
    description: 'Smooth, gentle facial and body hair removal services.',
    items: [
      { name: 'Eyebrows Waxing', price: '$15', duration: '15 Min', desc: 'Precision brow waxing and custom arch shaping.' },
      { name: 'Chin Waxing', price: '$10', duration: '10 Min', desc: 'Gentle hair removal for chin area.' },
      { name: 'Lip Waxing', price: '$10', duration: '10 Min', desc: 'Gentle hair removal for upper lip area.' },
      { name: 'Sideburns Waxing', price: '$20', duration: '15 Min', desc: 'Smooth hair removal for sideburns.' },
      { name: 'Forehead Waxing', price: '$25', duration: '15 Min', desc: 'Hair removal for forehead area.' },
      { name: 'Full Face Waxing', price: '$45', duration: '30 Min', desc: 'Complete facial waxing (brows, lip, chin, sideburns).' },
      { name: 'Underarms Waxing', price: '$45', duration: '20 Min', desc: 'Gentle underarm hair removal.' },
      { name: 'Full Legs Waxing', price: '$50', duration: '45 Min', desc: 'Full leg hair removal from thighs to ankles.' },
      { name: 'Half Leg Waxing', price: '$30', duration: '30 Min', desc: 'Hair removal for upper or lower legs.' },
      { name: 'Full Arms Waxing', price: '$40', duration: '35 Min', desc: 'Full arm hair removal from shoulders to wrists.' },
      { name: 'Half Arm Waxing', price: '$25', duration: '25 Min', desc: 'Hair removal for upper or lower arms.' }
    ]
  },
  {
    name: 'Add-on Services & Nail Art',
    description: 'Custom artwork, removals, French tips, chrome, cat-eye, and nail repairs.',
    items: [
      { name: 'Dip Removal', price: '$15', duration: '15 Min', desc: 'Safe removal of dipping powder without damaging natural nails.' },
      { name: 'Acrylic Removal', price: '$15', duration: '20 Min', desc: 'Safe soak-off removal of acrylic extensions.' },
      { name: 'French Design', price: '$10', duration: '15 Min', desc: 'Classic white or colored French tip design.' },
      { name: 'Cat-Eye Effect', price: '$10', duration: '15 Min', desc: 'Magnetic cat-eye shimmer effect.' },
      { name: 'Chrome Finish', price: '$10', duration: '15 Min', desc: 'High-gloss mirror chrome finish.' },
      { name: 'Ombré Design', price: '$15', duration: '20 Min', desc: 'Seamless gradient color transition design.' },
      { name: 'Nail Art (2 Fingers)', price: '$10', duration: '15 Min', desc: 'Hand-drawn custom artwork on 2 fingers.' },
      { name: 'Nail Art (4 Fingers)', price: '$15', duration: '25 Min', desc: 'Hand-drawn custom artwork on 4 fingers.' },
      { name: 'Nail Art (10 Fingers)', price: '$20', duration: '35 Min', desc: 'Full set custom hand-drawn artwork (price varies by complexity).' },
      { name: 'Nail Fix (1 Nail)', price: '$5', duration: '10 Min', desc: 'Repair 1 broken or chipped nail.' },
      { name: 'Nail Fix (2 Nails)', price: '$8', duration: '15 Min', desc: 'Repair 2 broken or chipped nails.' },
      { name: 'Nail Fix (3 Nails)', price: '$10', duration: '20 Min', desc: 'Repair 3 broken or chipped nails.' }
    ]
  }
];


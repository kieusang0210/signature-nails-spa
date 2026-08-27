export interface ResultItem {
  id: string;
  category: 'skin' | 'nails';
  title: string;
  skinConcernOrStyle: string;
  timeframe: string;
  treatmentName: string;
  quote: string;
  beforeImg?: string;
  afterImg?: string;
  resultImg: string;
}

export const RESULTS_DATA: ResultItem[] = [
  {
    id: 'res-1',
    category: 'skin',
    title: 'Pore Clearing & Texture Smoothing',
    skinConcernOrStyle: 'Clogged Pores & Dullness',
    timeframe: 'After 1 Advanced Deep Clean Session',
    treatmentName: 'Advanced Deep Clean Facial',
    quote: 'My skin felt immediately lighter, cleaner, and super smooth without any irritation!',
    resultImg: '/images/skincare_deepclean.png'
  },
  {
    id: 'res-2',
    category: 'skin',
    title: 'Instant Radiance & Event Hydration',
    skinConcernOrStyle: 'Dehydration & Loss of Glow',
    timeframe: 'Immediately After Treatment',
    treatmentName: 'NanoGlow Infusion',
    quote: 'The dewiness lasted for days! My foundation glided on like silk for the party.',
    resultImg: '/images/skincare_nanoglow.png'
  },
  {
    id: 'res-3',
    category: 'nails',
    title: 'Natural Nail Recovery & Dip Powder Art',
    skinConcernOrStyle: 'Damaged / Short Nails',
    timeframe: '3 Weeks Wear Duration',
    treatmentName: 'Signature Dip Powder Manicure',
    quote: 'My bitten nails grew out strong and healthy under this dip set!',
    resultImg: 'https://nz-website-media-r2-pub.gocheckin.net/19649-8506/page/index-3a2a6f5836457c12f578bc4bbb4c6244-49660.jpg'
  },
  {
    id: 'res-4',
    category: 'nails',
    title: 'Custom Almond Gel-X French Design',
    skinConcernOrStyle: 'Custom Nail Art',
    timeframe: 'Fresh Set',
    treatmentName: 'Gel-X Full Set + Chrome Accents',
    quote: 'Ken matched my photo inspiration perfectly down to the finest line detail.',
    resultImg: 'https://nz-website-media-r2-pub.gocheckin.net/19649-8506/page/index-f28e9c2bb570762650accbf37b6dcc64-41689.jpg'
  }
];

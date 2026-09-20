import { BusinessConfig, FAQItem, GalleryItem, NavigationItem, RoofingService } from '../types';

import heroImg from '../assets/images/london_roof_hero_1789797446825.jpg';
import slateImg from '../assets/images/roof_slate_repair_1789797463361.jpg';
import chimneyImg from '../assets/images/chimney_flashing_1789797479516.jpg';
import flatImg from '../assets/images/flat_roofing_1789797493293.jpg';
import gutterImg from '../assets/images/gutter_maintenance_1789797510654.jpg';
import pitchedImg from '../assets/images/pitched_tiled_roof_1789797530564.jpg';

export const businessConfig: BusinessConfig = {
  businessName: 'Heritage Roofing & Repairs',
  phone: '+44 7723 782655',
  phoneHref: 'tel:+447723782655',
  location: 'London W2 1PX',
  rating: '5.0',
  reviewCount: '473',
};

export const navigationItems: NavigationItem[] = [
  { id: 'home', label: 'Home', href: '#home' },
  { id: 'services', label: 'Services', href: '#services' },
  { id: 'repairs', label: 'Repairs', href: '#repairs' },
  { id: 'gallery', label: 'Gallery', href: '#gallery' },
  { id: 'reviews', label: 'Reviews', href: '#reviews' },
  { id: 'faq', label: 'FAQ', href: '#faq' },
  { id: 'contact', label: 'Contact', href: '#contact' },
];

export const roofingServices: RoofingService[] = [
  {
    id: 'roof-repairs',
    title: 'Roof Repairs',
    summary: 'General roofing repair requirements across London residential properties.',
    description:
      'Targeted repair work addressing slipped or broken slates, damaged tiles, storm wear, water ingress points, and compromised roofing elements to restore roof integrity.',
    scopePoints: [
      'Remedying broken, displaced, or missing tiles and slates',
      'Investigating and resolving active roof leak locations',
      'Ridge tile re-bedding and pointing adjustments',
      'Emergency protective tarpaulin measures where required',
    ],
    iconName: 'Wrench',
    image: slateImg,
  },
  {
    id: 'roof-maintenance',
    title: 'Roof Maintenance',
    summary: 'Keeping roofing systems properly maintained throughout changing seasons.',
    description:
      'Proactive care and systematic visual checks to help property owners preserve their roof structures, identify wear early, and prevent avoidable moisture damage.',
    scopePoints: [
      'Routine surface visual condition checks',
      'Removal of accumulated debris from valleys and gutters',
      'Inspection of vulnerable roof junctions and flashings',
      'General maintenance recommendations for London properties',
    ],
    iconName: 'ShieldCheck',
    image: pitchedImg,
  },
  {
    id: 'flat-roofing',
    title: 'Flat Roofing',
    summary: 'Flat-roof related services, maintenance, and remedial repairs.',
    description:
      'Attention to flat roof surfaces commonly found on London extensions, dormers, bays, and outbuildings, addressing pooling, membrane splits, and perimeter edge seals.',
    scopePoints: [
      'Flat roof condition evaluations and assessments',
      'Waterproofing membrane remedial repairs and patching',
      'Perimeter drip trim and flashing interface alignment',
      'Assistance with domestic flat roofing requirements',
    ],
    iconName: 'Layers',
    image: flatImg,
  },
  {
    id: 'pitched-tiled-roofing',
    title: 'Pitched & Tiled Roofing',
    summary: 'Roofing involving slates, tiles, and pitched structural layouts.',
    description:
      'Care for pitched roof configurations including natural slate roofs, clay plain tiles, and modern interlocking profiles common across classic and modern London architecture.',
    scopePoints: [
      'Slate nail sickness resolution and individual slate replacements',
      'Clay and concrete tile alignment and bedding',
      'Underlay and batten visual condition checking',
      'Eaves, hips, and verge structural detailing',
    ],
    iconName: 'Home',
    image: slateImg,
  },
  {
    id: 'gutter-services',
    title: 'Gutter Services',
    summary: 'Gutter maintenance, clearance, realignment, and repair.',
    description:
      'Maintaining unobstructed rainwater disposal systems to prevent overflowing water from penetrating external walls, brickwork, and roofline timbers.',
    scopePoints: [
      'Clearing moss, leaves, and silt buildup from gutter runs',
      'Addressing leaking gutter seams and loose union brackets',
      'Downpipe unblocking and drainage flow checks',
      'Fascia and soffit interface inspection',
    ],
    iconName: 'Droplets',
    image: gutterImg,
  },
  {
    id: 'chimney-roof-details',
    title: 'Chimney & Roof Details',
    summary: 'Roof-related chimney and flashing maintenance and protection.',
    description:
      'Specialist care for chimney stacks, lead flashings, parapet walls, and valleys that experience high exposure to wind-driven rain in the London area.',
    scopePoints: [
      'Lead apron, stepped, and cover flashing inspection',
      'Chimney stack brickwork pointing and flaunching checks',
      'Chimney pot stability and terminal cap assessments',
      'Parapet coping and valley trough water-tightness review',
    ],
    iconName: 'Flame',
    image: chimneyImg,
  },
];

export const galleryItems: GalleryItem[] = [
  {
    id: 'gal-1',
    title: 'London Slate & Pitched Roofline',
    category: 'london',
    categoryLabel: 'London Roofscapes',
    description: 'Traditional slate craftsmanship and chimney details under British skies.',
    image: heroImg,
    labelBadge: 'Roofing Inspiration',
  },
  {
    id: 'gal-2',
    title: 'Natural Slate & Clay Ridge Alignment',
    category: 'slate',
    categoryLabel: 'Slate & Tiling',
    description: 'Precision slate overlapping with clean ridge mortar lines.',
    image: slateImg,
    labelBadge: 'Roofing Inspiration',
  },
  {
    id: 'gal-3',
    title: 'Lead Step Flashing & Chimney Junction',
    category: 'chimney',
    categoryLabel: 'Chimneys & Flashing',
    description: 'Dressed lead flashing cleanly chased into brickwork joints.',
    image: chimneyImg,
    labelBadge: 'Roofing Inspiration',
  },
  {
    id: 'gal-4',
    title: 'Pristine Flat Roof Waterproofing',
    category: 'flat',
    categoryLabel: 'Flat Roofing',
    description: 'Modern clean flat roofing surface with raised perimeter coping.',
    image: flatImg,
    labelBadge: 'Roofing Inspiration',
  },
  {
    id: 'gal-5',
    title: 'Clean Eaves Guttering System',
    category: 'gutters',
    categoryLabel: 'Gutters & Drainage',
    description: 'Deep-flow rainwater guttering aligned along residential eaves.',
    image: gutterImg,
    labelBadge: 'Roofing Inspiration',
  },
  {
    id: 'gal-6',
    title: 'Residential Pitched Plain Tile Detailing',
    category: 'pitched',
    categoryLabel: 'Pitched Roofing',
    description: 'Architectural plain tiles arranged across a steep pitched pitch.',
    image: pitchedImg,
    labelBadge: 'Roofing Inspiration',
  },
];

export const faqItems: FAQItem[] = [
  {
    id: 'faq-1',
    question: 'What roofing services are available?',
    answer:
      'Heritage Roofing & Repairs provides a wide range of services including roof repairs, roof maintenance, flat roofing, pitched & tiled roofing, gutter servicing, and chimney & flashing detailing across London properties.',
    category: 'Services',
  },
  {
    id: 'faq-2',
    question: 'Can I enquire about a roof repair?',
    answer:
      'Yes. You can contact Heritage Roofing & Repairs directly by calling +44 7723 782655 or by submitting the contact form on this website with your property details and repair requirements.',
    category: 'Enquiries',
  },
  {
    id: 'faq-3',
    question: 'Do you work on different roof types?',
    answer:
      'Yes, we cater to a variety of roof configurations including natural slate roofs, clay and concrete pitched tile structures, residential flat roofs, and associated rainwater drainage systems.',
    category: 'Roof Types',
  },
  {
    id: 'faq-4',
    question: 'How can I request information?',
    answer:
      'You can request information either by telephone on +44 7723 782655 or through the online enquiry form. Please provide a brief summary of your roofing enquiry and property location in London.',
    category: 'Information',
  },
  {
    id: 'faq-5',
    question: 'How can I get pricing?',
    answer:
      'Pricing depends entirely on the specific requirements, roof dimensions, accessibility, and materials involved. Visitors should contact the business directly regarding their specific requirements so an accurate assessment can be made.',
    category: 'Pricing',
  },
];

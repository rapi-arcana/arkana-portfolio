// Import real user project image assets using standard Vite static imports
import kostCover from '../assets/images/projects/kost-management/cover.jpg'
import kostScreen01 from '../assets/images/projects/kost-management/screen-01.jpg'
import kostScreen02 from '../assets/images/projects/kost-management/screen-02.jpg'
import kostScreen03 from '../assets/images/projects/kost-management/screen-03.jpg'

import bafainCover from '../assets/images/projects/bafain/cover.jpg'
import bafainScreen01 from '../assets/images/projects/bafain/screen-01.jpg'
import bafainScreen02 from '../assets/images/projects/bafain/screen-02.jpg'

const projects = [
  {
    id: 'kost-management-app',
    slug: 'kost-management-app',
    title: 'Kost Management App',
    subtitle: 'Mobile Property Management',
    category: 'UI / UX Design',
    year: '2026',
    role: 'UI/UX Designer',
    tools: 'Figma, FigJam',
    isFeatured: true,
    description: 'A digital platform for managing boarding houses, room availability, and tenant billing.',
    tags: ['Mobile App', 'UI/UX', 'Property Tech'],
    overview: 'Designed an intuitive web and mobile dashboard to streamline boarding house operations, tenant communication, and automated payment tracking.',
    whatIDid: [
      'Information Architecture',
      'User Flow & Wireframing',
      'High-Fidelity UI Design',
      'Design System & UI Components',
      'Usability Iteration'
    ],
    reflection: 'Balancing daily operational tasks with a clean mobile experience required prioritizing user flows and establishing a robust component library early in the process.',
    alt: 'Kost Management App mobile and web interface design',
    coverImage: kostCover,
    images: [
      kostScreen01,
      kostScreen02,
      kostScreen03
    ]
  },
  {
    id: 'pt-bafain-indonesia',
    slug: 'pt-bafain-indonesia',
    title: 'PT. Bafain Indonesia',
    subtitle: 'Website & Mobile App',
    category: 'UI / UX Design',
    year: '2025',
    role: 'UI/UX Designer',
    tools: 'Figma',
    isFeatured: false,
    description: 'Corporate web portal and interface redesign for industrial and commercial services.',
    tags: ['Website', 'Mobile App', 'Corporate'],
    overview: 'Transformed the digital presence of PT. Bafain Indonesia with a modern, high-performance web interface aimed at enhancing corporate credibility and client conversion.',
    whatIDid: [
      'Website UI/UX',
      'Mobile UI/UX',
      'Information & Navigation Structure',
      'Responsive Design Consistency',
      'Collaboration with Stakeholders'
    ],
    reflection: 'Aligning stakeholder expectations with modern web usability ensured both corporate authority and clear client conversion paths.',
    alt: 'PT. Bafain Indonesia website and mobile interface redesign',
    coverImage: bafainCover,
    images: [
      bafainScreen01,
      bafainScreen02
    ]
  },
  {
    id: 'pesmaba-fakultas-teknik',
    slug: 'pesmaba-fakultas-teknik',
    title: 'Pesmaba Fakultas Teknik',
    subtitle: 'Event Identity & Visual Content',
    category: 'Visual Design',
    year: '2025',
    role: 'Publication & Design Volunteer',
    tools: 'Adobe Illustrator, Photoshop',
    isFeatured: false,
    description: 'Event visual identity and branding materials for student orientation.',
    tags: ['Event Design', 'Publication', 'Branding'],
    overview: 'Created a cohesive visual identity, environmental graphics, and print/digital collateral for the Faculty of Engineering’s student orientation event.',
    whatIDid: [
      'Visual Identity Design',
      'Poster & Banner Layouts',
      'Event Merchandising Assets',
      'Social Media Templates'
    ],
    reflection: 'Developing a cohesive visual theme for a large student orientation event required adaptable templates and strict brand consistency across media.',
    alt: 'PESMABA Fakultas Teknik orientation visual identity and publication',
    coverImage: null,
    images: []
  },
  {
    id: 'himpunan-kominfo',
    slug: 'himpunan-kominfo',
    title: 'Himpunan Kominfo',
    subtitle: 'Organizational Visual Communication',
    category: 'Social Media Design',
    year: '2024',
    role: 'Social Media Designer',
    tools: 'Figma, Illustrator',
    isFeatured: false,
    description: 'Creative social media content, graphic assets, and digital publication designs.',
    tags: ['Social Media', 'Graphic Design', 'Organization'],
    overview: 'Designed social media content series, infographic templates, and organizational publication banners to boost engagement across departmental communication channels.',
    whatIDid: [
      'Social Media Content Strategy',
      'Infographic & Feed Graphics',
      'Brand Consistency Guidelines',
      'Digital Campaign Assets'
    ],
    reflection: 'Designing structured content templates simplified social media publishing while maintaining high visual engagement for organizational updates.',
    alt: 'Himpunan Kominfo social media content and graphic assets',
    coverImage: null,
    images: []
  },
  {
    id: 'yourmoney',
    slug: 'yourmoney',
    title: 'YourMoney',
    subtitle: 'Personal Finance Management',
    category: 'UI / UX Design',
    context: 'Academic Project',
    projectType: 'Mobile App',
    year: '2024', // Easily editable field: adjust to match course completion year
    role: 'UI/UX Designer',
    tools: 'Figma',
    isFeatured: false,
    description: 'YourMoney is a mobile finance management concept designed to help users manage, monitor, and understand their personal finances in a more organized and intuitive way.',
    tags: ['Mobile App', 'UI/UX', 'Academic Project'],
    overview: 'YourMoney is a mobile finance management concept designed to help users manage and monitor their personal finances through a clearer and more intuitive mobile experience.',
    whatIDid: [
      'UI/UX Design',
      'Mobile App Interface',
      'User Flow',
      'Wireframing',
      'Prototyping',
      'High-Fidelity UI Design'
    ],
    reflection: 'Focusing on personal finance management within an academic course allowed exploring intuitive information architecture and clear mobile financial interactions.',
    alt: 'YourMoney mobile personal finance management interface design',
    coverImage: null,
    images: []
  }
]

export default projects


// Import real user project image assets using standard Vite static imports
import kostCover from '../assets/images/projects/kost-management/cover.jpg'
import kostScreen01 from '../assets/images/projects/kost-management/screen-01.jpg'
import kostScreen02 from '../assets/images/projects/kost-management/screen-02.jpg'
import kostScreen03 from '../assets/images/projects/kost-management/screen-03.jpg'
import kostScreen04 from '../assets/images/projects/kost-management/screen-04.png'
import kostScreen05 from '../assets/images/projects/kost-management/screen-05.png'
import kostScreen06 from '../assets/images/projects/kost-management/screen-06.png'
import kostScreen07 from '../assets/images/projects/kost-management/screen-07.png'
import kostScreen08 from '../assets/images/projects/kost-management/screen-08.png'
import kostScreen09 from '../assets/images/projects/kost-management/screen-09.png'


import bafainCover from '../assets/images/projects/bafain/cover.jpg'
import bafainScreen01 from '../assets/images/projects/bafain/screen-01.jpg'
import bafainScreen02 from '../assets/images/projects/bafain/screen-02.jpg'
import bafainScreen03 from '../assets/images/projects/bafain/screen-03.png'
import bafainScreen04 from '../assets/images/projects/bafain/screen-04.png'
import bafainScreen05 from '../assets/images/projects/bafain/screen-05.png'
import bafainScreen06 from '../assets/images/projects/bafain/screen-06.png'
import bafainScreen07 from '../assets/images/projects/bafain/screen-07.png'
import bafainScreen08 from '../assets/images/projects/bafain/screen-08.png'
import bafainScreen09 from '../assets/images/projects/bafain/screen-09.png'
import bafainScreen10 from '../assets/images/projects/bafain/screen-10.png'


import pesmabaFeed01 from '../assets/images/projects/pesmaba/feed-01.png'
import pesmabaFeed02 from '../assets/images/projects/pesmaba/feed-02.png'
import pesmabaFeed03 from '../assets/images/projects/pesmaba/feed-03.png'
import pesmabaFeed04 from '../assets/images/projects/pesmaba/feed-04.png'
import pesmabaFeed05 from '../assets/images/projects/pesmaba/feed-05.png'
import pesmabaFeed06 from '../assets/images/projects/pesmaba/feed-06.png'
import pesmabaFeed07 from '../assets/images/projects/pesmaba/feed-07.png'
import pesmabaFeed08 from '../assets/images/projects/pesmaba/feed-08.png'
import pesmabaFeed09 from '../assets/images/projects/pesmaba/feed-09.png'
import pesmabaCover3 from '../assets/images/projects/pesmaba/cover3.png'

import kominfoFeed01 from '../assets/images/projects/kominfo/feed-01.png'
import kominfoFeed02 from '../assets/images/projects/kominfo/feed-02.png'
import kominfoFeed03 from '../assets/images/projects/kominfo/feed-03.png'
import kominfoFeed04 from '../assets/images/projects/kominfo/feed-04.png'
import kominfoFeed05 from '../assets/images/projects/kominfo/feed-05.png'
import kominfoFeed06 from '../assets/images/projects/kominfo/feed-06.png'
import kominfoFeed07 from '../assets/images/projects/kominfo/feed-07.png'
import kominfoFeed08 from '../assets/images/projects/kominfo/feed-08.png'
import kominfoFeed09 from '../assets/images/projects/kominfo/feed-09.png'
import kominfoCover from '../assets/images/projects/kominfo/cover.png'


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
      kostCover,
      kostScreen02,
      kostScreen01,
      kostScreen04,
      kostScreen05,
      kostScreen06,
      kostScreen07,
      kostScreen08,
      kostScreen09
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
    // Web platform interface (16:10 / 16:9 desktop layout)
    webImages: [
      bafainCover,
      bafainScreen06,
      bafainScreen07,
      bafainScreen08
    ],
    // Mobile application interface (9:19 smartphone page screens)
    mobileImages: [
      bafainScreen01,
      bafainScreen03,
      bafainScreen04,
      bafainScreen05,
      bafainScreen09,
      bafainScreen10

    ],
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
    coverImage: pesmabaFeed02,
    images: [
      pesmabaFeed01,
      pesmabaFeed02,
      pesmabaFeed03,
      pesmabaFeed04,
      pesmabaFeed05,
      pesmabaFeed06,
      pesmabaFeed07,
      pesmabaFeed08,
      pesmabaFeed09,
    ]
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
    coverImage: kominfoCover,
    images: [
      kominfoFeed01,
      kominfoFeed02,
      kominfoFeed03,
      kominfoFeed04,
      kominfoFeed05,
      kominfoFeed06,
      kominfoFeed07,
      kominfoFeed08,
      kominfoFeed09,
    ]
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


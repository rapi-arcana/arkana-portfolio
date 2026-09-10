// Realistic Designer Toolkit Data
const skillGroups = [
  {
    id: 'design',
    title: 'Design Capabilities',
    items: [
      {
        name: 'UI/UX Design',
        level: 'CORE',
        proficiency: 90,
        keywords: 'Wireframing · User Flow · Prototyping'
      },
      {
        name: 'UI Design',
        level: 'CORE',
        proficiency: 90,
        keywords: 'High-Fidelity UI · Interface Design'
      },
      {
        name: 'Visual Design',
        level: 'CORE',
        proficiency: 88,
        keywords: 'Composition · Visual Systems'
      },
      {
        name: 'Graphic Design',
        level: 'STRONG',
        proficiency: 85,
        keywords: 'Publication · Social Content'
      },
      {
        name: 'Branding',
        level: 'WORKING',
        proficiency: 75,
        keywords: 'Identity · Visual Language'
      },
      {
        name: 'Web Design',
        level: 'WORKING',
        proficiency: 75,
        keywords: 'Interface · Responsive Layout'
      },
      {
        name: 'Social Media Design',
        level: 'STRONG',
        proficiency: 85,
        keywords: 'Feed · Publication · Content Visuals'
      }
    ]
  },
  {
    id: 'tools',
    title: 'Tools',
    primary: {
      name: 'Figma',
      type: 'PRIMARY DESIGN TOOL',
      level: 'CORE',
      proficiency: 90,
      capabilities: [
        'Wireframing',
        'Prototyping',
        'High-Fidelity UI',
        'Design System',
        'Visual Design'
      ]
    },
    supporting: {
      name: 'Canva',
      type: 'SUPPORTING TOOL',
      level: 'WORKING',
      proficiency: 75,
      uses: 'References · Visual Elements · Quick Assets'
    }
  },
  {
    id: 'technical',
    title: 'Technical',
    description: 'Supporting my understanding of how digital products are built',
    items: [
      { name: 'HTML', level: 'WORKING', proficiency: 70 },
      { name: 'CSS', level: 'WORKING', proficiency: 70 },
      { name: 'JavaScript', level: 'FAMILIAR', proficiency: 60 },
      { name: 'Flutter', level: 'FAMILIAR', proficiency: 60 },
      { name: 'Vue', level: 'FAMILIAR', proficiency: 60 }
    ]
  },
  {
    id: 'core',
    title: 'Core Capabilities',
    items: [
      'Problem Solving',
      'Communication',
      'Teamwork',
      'Time Management',
      'Attention to Detail'
    ]
  }
]

export default skillGroups

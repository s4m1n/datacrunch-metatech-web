import type { HomeContent } from '../types/index.js'

export const home: HomeContent = {
  navigation: {
    links: [
      { label: 'Solutions', href: '#solutions' },
      { label: 'Showcase', href: '#showcase' },
      { label: 'Contact', href: '#contact' },
    ],
    cta: { label: 'Book a meeting', href: '#meeting' },
  },
  hero: {
    headline: [
      { text: 'Building ' },
      { text: 'Intelligence', highlight: true },
      { text: ' To Power ', highlight: true },
      { text: 'Scalable Innovation' },
    ],
    description:
      'MetaTech integrates custom software engineering, advanced data and AI systems, and strategic staff augmentation to power scalable, high impact digital transformation.',
    primaryCta: { label: 'Book for Demo', href: '#demo' },
  },
  weAre: {
    label: 'We Are / >',
    lead: 'Engineering business solutions through three strategic pillars',
    body: 'AI powered delivery combining intelligent software engineering, data driven insight, and elite talent to accelerate scale, quality, and competitive advantage.',
  },
  solutions: {
    tabs: [
      {
        id: 'data-ai',
        label: 'Data + AI',
        index: '01',
        title: 'Data + AI Settings Innovation',
        description:
          'Our Data and AI services combine engineering, analytics, and applied AI to help organizations understand data, predict outcomes, and automate decisions. From trusted analytics to production grade AI systems, we deliver intelligence that works in the real world.',
        cta: { label: 'Book a consultation', href: '#consultation' },
        principles: [
          {
            id: 'data-integrity',
            title: 'Data Integrity First',
            description:
              'AI outputs are only as reliable as the data feeding them. We design, validate, and strengthen your data foundation from the ground up. Garbage in, garbage out is not a risk we take with your business.',
          },
          {
            id: 'workflows',
            title: 'Workflows Before Automation',
            description:
              'Before we build anything, we map your business workflows end to end by surveying the ambiguity. We understand the decisions being made, the people making them, and the systems involved. That clarity determines how and where automation creates real leverage, not just activity.',
          },
          {
            id: 'governance',
            title: 'Governance With Same Standard',
            description:
              'We implement data governance frameworks that carry the same accountability as human oversight. Your agents operate within defined boundaries. Auditability, control, and compliance are built in, not added on.',
          },
        ],
      },
      {
        id: 'custom-software',
        label: 'Custom Software',
        index: '02',
        title: 'Custom Software Solutions Innovation',
        description:
          'Our custom software services combine product engineering, platform architecture, and delivery excellence to help organizations build scalable applications. From discovery to production deployment, we deliver software that performs in the real world.',
        cta: { label: 'Book a consultation', href: '#consultation' },
        principles: [
          {
            id: 'architecture',
            title: 'Architecture Built To Scale',
            description:
              'We design systems that grow with your business, not against it. Every architectural decision is made with scalability, maintainability, and long term performance in mind from day one.',
          },
          {
            id: 'experience',
            title: 'Experience Before Features',
            description:
              'We prioritize user experience and business outcomes before feature lists. Understanding how people actually use your product determines what gets built and what creates lasting value.',
          },
          {
            id: 'quality',
            title: 'Quality With Same Standard',
            description:
              'We apply the same rigorous quality standards across every release. Testing, code review, and delivery discipline are built into our process, not bolted on at the end.',
          },
        ],
      },
      {
        id: 'tech-staffing',
        label: 'Tech Staffing',
        index: '03',
        title: 'Tech Staffing Solutions Innovation',
        description:
          'Our tech staffing services combine elite talent sourcing, team integration, and delivery leadership to help organizations scale engineering capacity. From specialized roles to full squad augmentation, we deliver talent that integrates in the real world.',
        cta: { label: 'Book a consultation', href: '#consultation' },
        principles: [
          {
            id: 'talent',
            title: 'Talent Fit First',
            description:
              'We match engineers to your culture, stack, and delivery model before anything else. The right person in the right role accelerates outcomes faster than volume alone.',
          },
          {
            id: 'integration',
            title: 'Teams Before Headcount',
            description:
              'We focus on how talent integrates into your existing teams and workflows. Effective collaboration and shared accountability matter more than filling seats on an org chart.',
          },
          {
            id: 'delivery',
            title: 'Delivery With Same Standard',
            description:
              'We hold augmented teams to the same delivery standards as your core engineering organization. Consistency, transparency, and measurable output are non negotiable.',
          },
        ],
      },
    ],
  },
  showcase: {
    slides: [
      {
        id: 'amicredible',
        brand: 'AmICredible',
        logoUrl: '/logos/AmiCredible-Logo.png',
        title: 'An AI-powered credibility checking platform',
        description:
          'that helps users verify claims, analyze sources, and make informed decisions with Quick Check, Deep Check, and Image Check features.',
        cta: { label: 'Explore more →', href: '#amicredible' },
        imageUrl: '/images/AmiCredible.png',
      },
    ],
  },
  techStacks: {
    label: 'Tech Stacks / >',
    title: 'Built With Modern Technologies',
    description:
      'We use modern, reliable technologies to design, build, and scale high-performance software systems. Our team works with proven tools to deliver secure, scalable, production-ready solutions.',
    rows: [
      {
        id: 'frontend',
        direction: 'left',
        logos: [
          { id: 'react', name: 'React', logoUrl: '/logos/React-Logo.png' },
          { id: 'nextjs', name: 'Next.js', logoUrl: '/logos/Nextjs-logo.png' },
          {
            id: 'tailwind',
            name: 'Tailwind CSS',
            logoUrl: '/logos/tailwind_css-logo.png',
          },
          {
            id: 'typescript',
            name: 'TypeScript',
            logoUrl: '/logos/TypeScript-logo.png',
          },
          { id: 'angular', name: 'Angular', logoUrl: '/logos/angular-3-logo.png' },
          { id: 'vue', name: 'Vue.js', logoUrl: '/logos/vuejs-logo.png' },
        ],
      },
      {
        id: 'backend',
        direction: 'right',
        offset: true,
        logos: [
          { id: 'go', name: 'Go', logoUrl: '/logos/Go_logo.png' },
          { id: 'python', name: 'Python', logoUrl: '/logos/Python_logo.png' },
          { id: 'nodejs', name: 'Node.js', logoUrl: '/logos/Node.js_logo.png' },
          { id: 'dotnet', name: '.NET', logoUrl: '/logos/NET-Framework-logo.png' },
          { id: 'ruby', name: 'Ruby', logoUrl: '/logos/Ruby-logo.png' },
          { id: 'php', name: 'PHP', logoUrl: '/logos/PHP-logo.png' },
        ],
      },
      {
        id: 'platform',
        direction: 'left',
        logos: [
          { id: 'django', name: 'Django', logoUrl: '/logos/django-logo.png' },
          { id: 'laravel', name: 'Laravel', logoUrl: '/logos/Laravel-logo.png' },
          { id: 'flutter', name: 'Flutter', logoUrl: '/logos/Google-flutter-logo.png' },
          { id: 'mysql', name: 'MySQL', logoUrl: '/logos/MySQL-logo.png' },
          { id: 'mongodb', name: 'MongoDB', logoUrl: '/logos/MongoDB_logo.png' },
          { id: 'html5', name: 'HTML5', logoUrl: '/logos/HTML5-logo.png' },
        ],
      },
    ],
  },
  video: {
    imageUrl: '/images/Hero-Banner.png',
    overlayText: 'METATECH',
  },
  trustedBy: {
    headline: [
      { text: 'Trusted by ', highlight: true },
      { text: 'product teams and enterprise ' },
      { text: 'innovators.', highlight: true },
    ],
    logos: [
      { id: 'databricks', name: 'Databricks', logoUrl: '/logos/databricks.svg' },
      {
        id: 'google-cloud',
        name: 'Google Cloud',
        logoUrl: '/logos/google-cloud.svg',
      },
      { id: 'uipath', name: 'UiPath', logoUrl: '/logos/uipath.svg' },
      { id: 'alteryx', name: 'Alteryx', logoUrl: '/logos/alteryx.svg' },
      { id: 'alteryx-2', name: 'Alteryx', logoUrl: '/logos/alteryx.svg' },
      { id: 'figma', name: 'Figma', logoUrl: '/logos/figma.svg' },
      { id: 'aws', name: 'AWS', logoUrl: '/logos/aws.svg' },
      {
        id: 'google-cloud-2',
        name: 'Google Cloud',
        logoUrl: '/logos/google-cloud.svg',
      },
    ],
  },
  footer: {
    copyright: {
      yearStart: 2022,
      yearEnd: 2026,
      companyName: 'MetaTech LLC',
      rightsText: 'All Rights Reserved',
    },
    legalLinks: [
      { id: 'terms', label: 'Terms of Use', href: '/terms' },
      { id: 'privacy', label: 'Privacy Policy', href: '/privacy' },
    ],
    socialLinks: [
      { id: 'facebook', label: 'Facebook', href: 'https://facebook.com' },
      { id: 'linkedin', label: 'Linkedin', href: 'https://linkedin.com' },
      { id: 'instagram', label: 'Instagram', href: 'https://instagram.com' },
      { id: 'youtube', label: 'Youtube', href: 'https://youtube.com' },
    ],
  },
}

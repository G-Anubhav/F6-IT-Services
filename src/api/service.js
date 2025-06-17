import icon1 from '../images/icon/research.gif'
import icon2 from '../images/icon/durability.gif'
import icon3 from '../images/icon/digital-tra.gif'
import icon4 from '../images/icon/business-develop.gif'
import icon5 from '../images/icon/search.gif'
import icon6 from '../images/icon/warning.gif'

import sicon1 from '../images/icon/ser-icon01.svg'
import sicon2 from '../images/icon/ser-icon02.svg'
import sicon3 from '../images/icon/ser-icon03.svg'
import sicon4 from '../images/icon/ser-icon04.svg'

// import sdicon1 from '../images/icon/da-fea_icon01.svg'
// import sdicon2 from '../images/icon/da-fea_icon02.svg'
// import sdicon3 from '../images/icon/da-fea_icon03.svg'
// import sdicon4 from '../images/icon/da-fea_icon04.svg'

// import simg1 from '../images/service/service-img02.jpg'
// import simg2 from '../images/service/service-img01.jpg'
// import simg3 from '../images/service/service-img03.jpg'
// import simg4 from '../images/service/service-img04.jpg'


import scicon1 from '../images/icon/airdrop-white.svg'
import scicon2 from '../images/icon/cloud-add.svg'
import scicon3 from '../images/icon/check02.svg'
import scicon4 from '../images/icon/finger-scan.svg'
import scicon5 from '../images/icon/ranking.svg'


import cdicon1 from '../images/icon/cd-ser_icon01.svg'
import cdicon2 from '../images/icon/cd-ser_icon02.svg'
import cdicon3 from '../images/icon/cd-ser_icon03.svg'
import cdicon4 from '../images/icon/cd-ser_icon04.svg'
import cdicon5 from '../images/icon/cd-ser_icon05.svg'
import cdicon6 from '../images/icon/cd-ser_icon06.svg'
import cdicon7 from '../images/icon/cd-ser_icon08.svg'
import cdicon8 from '../images/icon/cd-ser_icon09.svg'



const Services = [
    {
        Id: '1',
        sImg: icon1,
        title: 'Marketing Automation',
        slug: 'Niche-research',
        thumb1: 'Strategy',
        thumb2: 'Consultation',
        description: 'Streamline your campaigns with smart automation tools that nurture leads and maximize ROI.',
    },
    {
        Id: '2',
        sImg: icon2,
        title: 'Lead Management System',
        slug: 'Capture, track, and convert leads with a centralized, efficient lead management process.',
        thumb1: 'Management',
        thumb2: 'Transfer',
        description: 'Maximize ROI with targeted campaigns that convert—built for measurable impact and smart budget utilization.',
    },
    {
        Id: '3',
        sImg: icon3,
        title: 'Business Applications',
        slug: 'International-SEO',
        thumb1: 'Landing Page',
        thumb2: 'Plugins',
        description: 'Custom web and mobile solutions to support and scale your core business operations.',
    },
    {
        Id: '4',
        sImg: icon4,
        title: 'Mobile Apps',
        slug: 'Enterprise-SEO',
        thumb1: 'Consultation',
        thumb2: 'solution',
        description: 'Build high-performance mobile applications for Android and iOS with user-first design.',
    },
    {
        Id: '5',
        sImg: icon5,
        title: 'User/Customer Experience Design',
        slug: 'SEO-audit',
        thumb1: 'Website',
        thumb2: 'Mobile App',
        description: 'Create seamless digital experiences that enhance user satisfaction and brand loyalty.',
    },
    {
        Id: '6',
        sImg: icon6,
        title: 'Business Automations (AI)',
        slug: 'Penalty-recovery',
        description: 'Leverage AI to automate repetitive tasks, gain insights, and boost operational efficiency.',
    },
    {
        Id: '7',
        sImg: icon1,
        sIcon: sicon1,
        title: 'Web Development / DevOps',
        slug: 'IT-management',
        description: 'Scalable, secure, and fast websites powered by modern development and DevOps practices.',
    },
    {
        Id: '8',
        sImg: icon2,
        sIcon: sicon2,
        title: 'Cloud Communication',
        slug: 'Data-tracking-&-security',
        description: 'Enable real-time, reliable communication through cloud-based platforms and APIs.',
    },
    {
        Id: '9',
        sImg: icon3,
        sIcon: sicon3,
        title: 'Performance Marketing',
        slug: 'Custom-CRM-services',
        description: 'Enable real-time, reliable communication through cloud-based platforms and APIs.',
    },
    {
        Id: '10',
        sImg: icon4,
        sIcon: sicon4,
        title: 'Impact / Awareness Campaigns',
        slug: 'Website-development ',
        description: 'Strategically crafted campaigns that build brand awareness and emotional connection.',
    },
    {
        Id: '11',
        sImg: icon5,
        title: 'Search Engine Optimization (SEO)',
        slug: 'Data-source',
        description: 'Improve your website’s visibility and ranking on Google with proven SEO techniques.',
    },
    {
        Id: '12',
        sImg: icon6,
        title: 'Social Media Management (SMM)',
        slug: 'Data-ecosystem',
        description: 'Engage and grow your audience across platforms with consistent and creative content.',
    },
    {
        Id: '13',
        sImg: icon1,
        title: 'Online Reputation Management',
        slug: 'AI-solution',
        description: 'Monitor, manage, and improve your brands online presence and customer sentiment.',
    },
    {
        Id: '14',
        sImg: icon2,
        title: 'Creative Innovations',
        slug: 'Business-wide',
        description: 'We support you in helping your business understand, embrace, and adopt the change.',
    },
    {
        Id: '15',
        sImg: icon3,
        title: 'Branded Content',
        slug: 'Business-wide',
        description: 'Craft compelling content that communicates your brand’s story and values effectively.',
    },
    {
        Id: '16',
        sImg: icon4,
        title: 'Ecommerce Automation',
        slug: 'Business-wide',
        description: 'Automate your ecommerce operations from inventory to marketing for higher efficiency and sales.',
    },
    {
        Id: '17',
        sIcon: scicon1,
        title: 'Branded Content',
        slug: 'Secure-your-network',
        features: [' Consistently Secure the Enterprise.', 'Apply Al inline to prevent evasive.', 'Simplify network security operations.', ' Adopt Zero Trust across the network.', ' Simplify with AI-Powered SASE.']
    },
    {
        Id: '18',
        sIcon: scicon2,
        title: 'Ecommerce Automation',
        slug: 'Secure-your-cloud',
        features: ['End-to-End Cloud Security.', 'Real-Time Threat Detection.', 'Identity & Access Management.', 'Data Encryption & Privacy.', 'Compliance & Governance.']
    },
    {
        id: '19',
        sIcon: scicon3,
        title: 'Transform your SOC',
        slug: 'Transform-your-SOC',
        features: [
            'Accelerate Threat Detection',
            'Automate Security Processes',
            'Streamline Incident Response',
            'Attack Surface Management',
            'Integrated Security Monitoring',
        ],
    },
    {
        id: '20',
        sIcon: scicon4,
        title: 'Threat Intel & Response',
        slug: 'Threat-Intel-&-Response',
        features: [
            "Let our experts be of your team.",
            "Move from reactive to proactive.",
            "Get world-class threat intelligence",
            "Every second counts when attack",
            "Make our experience your experience",
        ],
    },
    {
        id: '21',
        sIcon: scicon5,
        title: 'Solutions by industry',
        slug: 'Solutions-by-industry',
        features: [
            'Public sector',
            'Financial services',
            'Manufacturing',
            'Small & medium business solutions',
            'Healthcare',
        ],
    },

    {
        Id: '22',
        sIcon: cdicon1,
        title: 'INFRASTRUCT URE DESIGN',
        slug: 'INFRASTRUCT-URE-DESIGN',
    },
    {
        Id: '23',
        sIcon: cdicon2,
        title: 'COSTS OPTIMIZATION',
        slug: 'COSTS-OPTIMIZATION',
        bgClass:'cd-dot_bg2',
    },
    {
        Id: '24',
        sIcon: cdicon3,
        title: 'INFRASTRUCTURE AS A CODE',
        slug: 'INFRASTRUCTURE-AS-A-CODE',
        bgClass:'cd-dot_bg3',
    },
    {
        Id: '25',
        sIcon: cdicon4,
        title: 'Continuous Integration',
        slug: 'Continuous-Integration',
        bgClass:'cd-dot_bg4',
    },
    {
        Id: '26',
        sIcon: cdicon5,
        title: 'Continuous Deployment',
        slug: 'Continuous-Deployment',
    },
    {
        Id: '27',
        sIcon: cdicon6,
        title: 'Blue Green Deployment',
        slug: 'Blue-Green-Deployment',
        bgClass:'cd-dot_bg2',
    },
    {
        Id: '28',
        sIcon: '',
        title: 'Data Consistency',
        slug: 'Data-Consistency',
        bgClass:'cd-dot_bg3'
    },
    {
        Id: '29',
        sIcon: cdicon7,
        title: 'Data Integrity',
        slug: 'Data-Integrity',
        bgClass:'cd-dot_bg4'
    },
    {
        Id: '30',
        sIcon: cdicon8,
        title: 'Redundancy',
        slug: 'Redundancy',
    },
]

export default Services;
// gitprofile.config.js

const config = {
  github: {
    username: 'niraj003', // Your GitHub org/user name. (Required)
    sortBy: 'stars', // stars | updated
    limit: 10, // How many projects to display.
    exclude: {
      forks: false, // Forked projects will not be displayed if set to true.
      projects: [], // These projects will not be displayed. example: ['my-project1', 'my-project2']
    },
  },
  social: {
    linkedin: 'niraj-ghetiya-5b13b7220',
    twitter: '',
    mastodon: '',
    facebook: '',
    instagram: '',
    dribbble: '',
    behance: '',
    medium: '',
    dev: '',
    stackoverflow: '', // format: userid/username
    skype: '',
    telegram: '',
    website: 'https://niraj-ghetiya.vercel.app/',
    phone: '9978003438',
    email: 'nirajghetiya2002@gmail.com',
  },
  resume: {
    fileUrl:
      'https://drive.google.com/file/d/1DKyv8TdV8M2IJMeLsAri2Z_vfwbI736d/edit', // Empty fileUrl will hide the `Download Resume` button.
  },
  skills: [
   
    'DBMS',
    'JavaScript',
    'React.js',
    'HTML5',
    'MySQL',
    'C',
    'Git',
    'PHPUnit',
    'CSS',
    'Tailwind-Css',
    'PHP',
  ],
  experiences: [
    // {
      // company: '',
      // position: 'Position',
      // from: 'September 2021',
      // to: 'Present',
      // companyLink: 'https://example.com',
    // },
    // {
      // company: 'Company Name',
      // position: 'Position',
      // from: 'July 2019',
      // to: 'August 2021',
      // companyLink: 'https://example.com',
    // },
  ],
  /* certifications: [
    {
      name: 'Lorem ipsum',
      body: 'Lorem ipsum dolor sit amet',
      year: 'March 2022',
      link: 'https://example.com'
    },
  ], */
  education: [
    {
      institution: 'Gujarat Technological University',
      degree: 'B.Tech. in Computer Engineering',
      from: '2020',
      to: '2024',
    },
    {
      institution: 'Ramkrishna Vidhya bhavan',
      degree: 'Higher Secondary Education(GHSEB)',
      from: '2018',
      to: '2020',
    },
    {
      institution: 'Archhna Vidhya bhavan',
      degree: 'Higher Education(GHSEB)',
      from: '2017',
      to: '2018',
    },
  ],

  // To hide the `My Projects` section, keep it empty.
  externalProjects: [
    {
      title: 'Engineering Courses',
      description:
        'in this project, we are going to guide those students which are enroll in engineering and they students are not know anything about their course, books , etc.',
      imageUrl: 'https://ec0036624.000webhostapp.com/img/main.svg',
      link: 'https://ec0036624.000webhostapp.com',
    },
    {
      title: 'emi-calculator',
      description:
        'Simple EMI Calculator as an exercise for Modern Software Development workshop.',
      imageUrl: 'https://www.wemakescholars.com/images/background-design/education-loan-emi-cal.png',
      link: 'https://niraj003.github.io/emi-calculator/',
    },
  ],
  // Display blog posts from your medium or dev account. (Optional)
  blog: {
    source: '', // medium | dev
    username: '', // to hide blog section, keep it empty
    limit: 1, // How many posts to display. Max is 10.
  },
  googleAnalytics: {
    id: '', // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
  },
  // Track visitor interaction and behavior. https://www.hotjar.com
  hotjar: {
    id: '',
    snippetVersion: 6,
  },
  themeConfig: {
    defaultTheme: 'winter',

    // Hides the switch in the navbar
    // Useful if you want to support a single color mode
    disableSwitch: false,

    // Should use the prefers-color-scheme media-query,
    // using user system preferences, instead of the hardcoded defaultTheme
    respectPrefersColorScheme: false,

    // Hide the ring in Profile picture
    hideAvatarRing: false,

    // Available themes. To remove any theme, exclude from here.
    themes: [
      'light',
      'dark',
      'cupcake',
      'bumblebee',
      'emerald',
      'corporate',
      'synthwave',
      'retro',
      'cyberpunk',
      'valentine',
      'halloween',
      'garden',
      'forest',
      'aqua',
      'lofi',
      'pastel',
      'fantasy',
      'wireframe',
      'black',
      'luxury',
      'dracula',
      'cmyk',
      'autumn',
      'business',
      'acid',
      'lemonade',
      'night',
      'coffee',
      'winter',
      'procyon',
    ],

    // Custom theme
    customTheme: {
      primary: '#fc055b',
      secondary: '#219aaf',
      accent: '#e8d03a',
      neutral: '#2A2730',
      'base-100': '#E3E3ED',
      '--rounded-box': '3rem',
      '--rounded-btn': '3rem',
    },
  },

  // Optional Footer. Supports plain text or HTML.
  footer: `Made with <a 
      class="text-primary" href="https://github.com/niraj003/profile"
      target="_blank"
      rel="noreferrer"
    >Profile</a> and ❤️.`,
};

export default config;

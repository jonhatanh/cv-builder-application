import {
  faLinkedin,
  faGithub,
  faYoutube,
  faXTwitter,
} from "@fortawesome/free-brands-svg-icons";
import {
  faBan,
  faBriefcase,
  faCode,
  faGlobe,
} from "@fortawesome/free-solid-svg-icons";

export const ICONS = [
  {
    name: "Empty",
    icon: faBan,
  },
  {
    name: "LinkedIn",
    icon: faLinkedin,
  },
  {
    name: "GitHub",
    icon: faGithub,
  },
  {
    name: "YouTube",
    icon: faYoutube,
  },
  {
    name: "X",
    icon: faXTwitter,
  },
  {
    name: "Internet",
    icon: faGlobe,
  },
  {
    name: "Code",
    icon: faCode,
  },
  {
    name: "Briefcase",
    icon: faBriefcase,
  },
  {
    name: "Briefcase",
    icon: faBriefcase,
  },
];


export const FORMS_ID = {
  personalDetails: 1,
  professionalDetails: 2,
  educationDetails: 3,
  othersDetails: 4,
};

export const PERSONAL_DETAILS_EXAMPLE = {
  name: "John Doe",
  email: "john.doe@example.com",
  phone: "123-456-7890",
  skills:
    "HTML, CSS, JavaScript, React, SASS, Tailwind, Node.js, PHP, Laravel, MySQL, Git",
};

export const SOCIAL_MEDIA_EXAMPLE = [
  {
    id: crypto.randomUUID(),
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/john-doe/",
    iconName: "LinkedIn",
  },
  {
    id: crypto.randomUUID(),
    name: "GitHub",
    link: "https://github.com/jonhatanh",
    iconName: "GitHub",
  },
];
export const EDUCATION_EXAMPLE = [
  {
    id: crypto.randomUUID(),
    title: "UNIVERSITY OF EXAMPLE",
    subtitle: "Degree in Computer Science",
    date: "09/2018 - 06/2022",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    bullets: [
      {
        id: crypto.randomUUID(),
        text: "GPA: 3.8 / 4.0",
      },
      {
        id: crypto.randomUUID(),
        text: "Graduation Date: 06/2022",
      },
    ],
  },
  {
    id: crypto.randomUUID(),
    title: "EXAMPLE TECHNICAL INSTITUTE",
    subtitle: "Degree in Software Development",
    date: "09/2014 - 06/2018",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    bullets: [
      {
        id: crypto.randomUUID(),
        text: "GPA: 3.6 / 4.0",
      },
    ],
  },
];

export const EXPERIENCE_EXAMPLE = [
  {
    id: crypto.randomUUID(),
    title: "EXAMPLE COMPANY",
    subtitle: "Software Engineer",
    date: "07/2022 - Present",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    bullets: [
      {
        id: crypto.randomUUID(),
        text: "Developed and maintained web applications using React and Node.js.",
      },
      {
        id: crypto.randomUUID(),
        text: "Collaborated with cross-functional teams to deliver high-quality software solutions.",
      },
      {
        id: crypto.randomUUID(),
        text: "Utilized Git for version control and participated in code reviews.",
      },
    ],
  },
];

export const OTHERS_EXAMPLE = [
  {
    id: crypto.randomUUID(),
    title: "EXAMPLE BOOTCAMP",
    subtitle: "Full Stack Web Development Bootcamp",
    date: "01/2023 - 06/2023",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    bullets: [
      {
        id: crypto.randomUUID(),
        text: "Completed an intensive bootcamp covering both frontend and backend technologies.",
      },
    ],
  },
];

export const CUSTOM_DETAILS_EMPTY = [
  {
    id: crypto.randomUUID(),
    title: "",
    subtitle: "",
    date: "",
    description: "",
    bullets: [
      {
        id: crypto.randomUUID(),
        text: "",
      },
    ],
  },
]
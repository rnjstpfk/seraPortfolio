
import {
  logo,
  backend,
  creator,
  mobile,
  web,
  github,
  menu,
  close,
  css,
  gearXpert,
  project2,
  project3,
  mysql,
  express,
  aws,
  mui,
  scss,
  Firebase,
  
  gsap,
  framer,
  figma,
  git,
  html,
  javascript,
  mongodb,
  nodejs,
  reactjs,
  redux,
  tailwind,
  threejs,
  firstTestimonial,
  secondTestimonial,
  thirdTestimonial,
} from '../assets'


// Import Tekisky separately
import tekisky from "../assets/company/tekisky.png";


export const navLinks = [


  {
    id: "about",
    title: "About",
    
  },
  {
    id: "Skills",
    title: "Skills",
  },
  {
    id: "Projects",
    title: "Projects",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  /* {
    title: "Full-Stack Developer",
    icon: web,
  }, */
  {
    title: "Frontend Developer",
    icon: mobile,
  },
  /* {
    title: "Backend Developer",
    icon: backend,
  }, */
  {
    title: "Ui UX Designer",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  /* {
    name: "gsap",
    icon: gsap,
  }, */
  /* {
    name: "framer",
    icon: framer,
  }, */

 
  /* {
    name: "Three JS",
    icon: threejs,
  }, */
  {
    name: "figma",
    icon: figma,
  },
  /* {
    name: "Redux Toolkit",
    icon: redux,
  }, */
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  /* {
    name: "Material Ui",
    icon: mui,
  }, */
  /* {
    name: "Node JS",
    icon: nodejs,
  }, */
  /* {
    name: "Express Js",
    icon: express,
  }, */
  /* {
    name: "AWS",
    icon: aws,
  }, */
  /* {
    name: "MongoDB",
    icon: mongodb,
  }, */
  /* {
    name: "mysql",
    icon: mysql,
  }, */

  {
    name: "git",
    icon: git,
  },
  {
    name: "scss",
    icon: scss,
  },
  {
    name: "Firebase",
    icon: Firebase,
  },
  
 

];

//경력
const experiences = [
  {
    title: "Full-Stack Developer",
    company_name: "Tekisky",
    icon: tekisky,
    iconBg: "#383E56",
    date: "Jan 2023 - present",
    points: [
      "Developing and maintaining web applications using MERN technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Huzaif proved me wrong.",
    name: "MD Mustaqeem",
    designation: "Ecommerce",
    company: "QuickMart",
    image: firstTestimonial,
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Huzaif does.",
    name: "Abdul Raheman",
    designation: "Ecommerce Business",
    company: "justbuyz",
    image: secondTestimonial,
  },
  {
    testimonial:
      "After Huzaif optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "James Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: thirdTestimonial,
  },
];

const projects = [
  {
    name: "My Movie App",
    description:
      "TMDB API로 인기/상영 중 영화 보여주는 앱",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "API",
        color: "white-text-gradient",
      },
      {
        name: "firebase",
        color: "pink-text-gradient",
      },
 
    ],
    image: project2,
    source_code_link: "https://github.com/rnjstpfk/movie-app",
    live_link: "https://movie-app-six-brown-53.vercel.app/"
  },
  {
    name: "스타벅스",
    description:
      "스타벅스 공식 웹사이트를 HTML/CSS로 클론 코딩하며 웹 퍼블리싱을 연습한 프로젝트입니다.",
    tags: [
      {
        name: "html",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "green-text-gradient",
      },
      /* {
        name: "Gsap",
        color: "pink-text-gradient",
      }, */
    ],
    image: gearXpert,
    source_code_link: "https://github.com/rnjstpfk/strarbucks",
    live_link: "https://rnjstpfk.github.io/strarbucks/"
  },
  {
    name: "아뜨랑스",
    description:
      "아뜨랑스 쇼핑몰 클론 프로젝트. React로 구조화된 페이지와 SCSS 기반의 스타일 구현 중심으로 제작.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "scss",
        color: "white-text-gradient",
      },
      {
        name: "javascript",
        color: "green-text-gradient",
      },

    ],
    image: project3, 
    source_code_link: "https://github.com/rnjstpfk/shop2",
    live_link: "https://rnjstpfk.github.io/shop2/"
  },
  {
    name: "GoGroove-Ecommerce",
    description:
      "Go-Groove is your ultimate destination for premium products across various categories. Whether you're a savvy shopper or a professional, enhance, and simplify your lifestyle—all in one place!",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "express",
        color: "white-text-gradient",
      },
      {
        name: "node",
        color: "green-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
    ],
    image: project3,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };

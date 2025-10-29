
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
  pro4,
  pro5,
  team2,
  mysql,
  express,
  aws,
  mui,
  scss,
  firebase,
  
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
    name: "firebase",
    icon: firebase,
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
      "TMDB API를 활용해 실시간 개봉·인기 영화를 보여주는 앱입니다. Firebase 로그인 후 좋아요 표시 및 마이페이지에서 저장된 영화를 관리할 수 있습니다.",
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
    name: "Starbucks Clone",
    description:
      "HTML과 CSS로 스타벅스 공식 웹사이트를 클론 코딩했습니다. 시멘틱 구조와 반응형 레이아웃으로 퍼블리싱 감각을 강화했습니다.",
    tags: [
      {
        name: "html",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "white-text-gradient",
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
      "React와 SCSS를 활용해 아뜨랑스 메인 페이지를 클론 코딩했습니다. 홈 화면 UI 중심으로 퍼블리싱 구조를 설계하고 스타일 모듈화를 적용했습니다.",
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
    name: "OK DRUGS",
    description:
      "React와 Firebase를 활용한 쇼핑몰 클론 프로젝트입니다. 로그인, 게시글 작성, 댓글, 좋아요 기능을 Firebase로 연동했습니다. 반응형 디자인을 적용해 다양한 기기에서 원활하게 사용할 수 있습니다.",
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
        name: "firebase",
        color: "pink-text-gradient",
      },
    ],
    image: pro4,
    source_code_link: "https://github.com/rnjstpfk/ok1",
    live_link: "https://ok1-phi.vercel.app/"
  },
  {
    name: "ARCHIVE MUSEE",
    description:
      "여러 박물관의 작품을 탐색할 수 있는 팀 프로젝트입니다. 무료 API 부재로 자체 데이터셋을 제작·연동했으며, 로그인·검색·좋아요 기능을 구현했습니다.",
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
        name: "firebase",
        color: "pink-text-gradient",
      },
      {
        name: "team project",
        color: "yellow-text-gradient",
      },
    ],
    image: pro5,
    source_code_link: "https://github.com/rnjstpfk/team1",
    live_link: "https://team1-2c9b9.web.app"
  },
  {
    name: "ShopFrame",
    description:
      "사용자가 직접 쇼핑몰을 생성할 수 있는 웹 빌더 프로젝트입니다. 회원가입 후 로고·이미지·카테고리를 설정하면 자동으로 쇼핑몰이 완성됩니다.",
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
        name: "firebase",
        color: "pink-text-gradient",
      },
      {
        name: "team project",
        color: "yellow-text-gradient",
      },
    ],
    image: team2,
    source_code_link: "https://github.com/rnjstpfk/ShopFrame",
    live_link: "https://hotel-83914.web.app/"
  },
  
];

export { services, technologies, experiences, testimonials, projects };

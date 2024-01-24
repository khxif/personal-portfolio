import { Contact, Home, Presentation, User } from "lucide-react";
import {
  FaGithub,
  FaInstagram,
  FaNodeJs,
  FaSass,
  FaTelegramPlane,
} from "react-icons/fa";
import { FaLinkedin, FaSquareTwitter } from "react-icons/fa6";
import { GrReactjs } from "react-icons/gr";
import { ImHtmlFive2 } from "react-icons/im";
import { IoLogoJavascript } from "react-icons/io";
import { IoLogoFirebase } from "react-icons/io5";
import {
  SiCss3,
  SiExpress,
  SiMongodb,
  SiNextdotjs,
  SiTailwindcss,
} from "react-icons/si";
import { TbBrandTypescript } from "react-icons/tb";

export const navLinks = [
  {
    id: 1,
    label: "Home",
    href: "/",
    icon: Home,
  },
  {
    id: 2,
    label: "About",
    href: "/about",
    icon: User,
  },
  {
    id: 3,
    label: "Projects",
    href: "/projects",
    icon: Presentation,
  },
  {
    id: 4,
    label: "Contact Me",
    href: "/contact",
    icon: Contact,
  },
];

export const icons = [
  {
    id: 1,
    name: "HTML",
    icon: ImHtmlFive2,
  },
  {
    id: 2,
    name: "CSS",
    icon: SiCss3,
  },
  {
    id: 3,
    name: "SCSS",
    icon: FaSass,
  },
  {
    id: 4,
    name: "Tailwind Css",
    icon: SiTailwindcss,
  },
  {
    id: 5,
    name: "JavaScript",
    icon: IoLogoJavascript,
  },
  {
    id: 6,
    name: "TypeScript",
    icon: TbBrandTypescript,
  },
  {
    id: 7,
    name: "React js",
    icon: GrReactjs,
  },
  {
    id: 8,
    name: "Next js",
    icon: SiNextdotjs,
  },
  {
    id: 9,
    name: "Node js",
    icon: FaNodeJs,
  },
  {
    id: 10,
    name: "Express js",
    icon: SiExpress,
  },
  {
    id: 11,
    name: "MongoDB",
    icon: SiMongodb,
  },
  {
    id: 12,
    name: "Firebase",
    icon: IoLogoFirebase,
  },
  {
    id: 13,
    name: "Github",
    icon: FaGithub,
  },
];

export const projects = [
  {
    id: 1,
    name: "MernGPT",
    description:
      "An advanced AI chatbot built with the Mern stack,Next.js as frontend and OpenAI APIs.Its mobile responsive.Chat History and deletion features.Dark mode is also implemented",
    image: "/MernGPT.png",
    github: "https://github.com/khxif/MernGPT",
    live: "https://mern-gpt.vercel.app/",
  },
  {
    id: 2,
    name: "Genius",
    description:
      "Advanced AI application where you can generate texts,images,videos,music and codes built with power of Next.js 13.OpenAI and ReplicateAI APIs are also used and authentication with Clerk. Its mobile responsive.",
    image: "/Genius.png",
    github: "https://github.com/khxif/genius",
    live: "https://genius-khxif.vercel.app/",
  },
  {
    id: 3,
    name: "Dropstore",
    description:
      "Store you important files in our dropstore cloud.Built using Next.js,Firebase and shadcnUI.Its mobile responsive and has realtime updates.Also it has Dark mode.",
    image: "/Dropstore.png",
    github: "https://github.com/khxif/dropstore",
    live: "https://dropstore.vercel.app/",
  },
  {
    id: 4,
    name: "Messenger clone",
    description:
      "Realtime messaging app made by React.js and Firebase.Also authenticated by Firebase Auth.Many people can have a chat in single room realtime.Its completely Mobile Responsive",
    image: "/Messenger.png",
    github: "https://github.com/khxif/react-messenger-clone",
    live: "https://react-messenger-clone-khxif.vercel.app/",
  },
  {
    id: 5,
    name: "AI Image Generator",
    description:
      "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available",
    image: "/Image-generator.png",
    github: "https://github.com/khxif/AI-image-generator",
    live: "https://ai-image-generator-khxif.vercel.app/",
  },
  {
    id: 6,
    name: "Movie App",
    description:
      "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available",
    image: "/movie-app.png",
    github: "https://github.com/khxif/netflix_clone",
    live: "https://netflix-clone-khxif.vercel.app/",
  },
];

export const socials = [
  {
    id: 1,
    name: "Telegram",
    icon: FaTelegramPlane,
    url: "https://t.me/Khxiff",
  },
  {
    id: 2,
    name: "Github",
    icon: FaGithub,
    url: "https://github.com/khxif",
  },
  {
    id: 3,
    name: "LinkedIn",
    icon: FaLinkedin,
    url: "https://www.linkedin.com/in/khaif-mohd-26aa25246?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
  },
  {
    id: 4,
    name: "Twitter",
    icon: FaSquareTwitter,
    url: "https://x.com/khaif_mohamed?t=SNA8RiKuJm8rw0l0HqvQtA&s=09",
  },
  {
    id: 5,
    name: "Instagram",
    icon: FaInstagram,
    url: "https://www.instagram.com/khxiif?igsh=cXYxZm85YTgzY3Iz",
  },
];

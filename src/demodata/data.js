import { v4 as uuidv4 } from "uuid";

export const projects = [
  {
    id: uuidv4(),
    title: "NextBid",
    description:
      "NextBid is an auction web appliction. Where users can buy and sell any product through auction. Whoever bids the highest amount within the specified time will be the winner.",

    live: "https://nextbid-137df.web.app",
    code: "https://github.com/Arifulislam5577/nextbid",
    coverImage: "/images/p1.png",

    usedTechnology: [
      "React Js",
      "React Router",
      "TailwindCSS",
      "Redux Toolkit",
      "Node Js",
      "Express Js",
      "MongoDB",
      "Mongoose",
      "Firebase",
    ],
    projectType: "Auction Web Application",
  },
  {
    id: uuidv4(),
    title: "Travelin",
    description:
      "Travelin is a travel service web application. It sells various kinds of tour service in the world. User can purchase their favourite tour package with Stripe payment gateway.",

    usedTechnology: [
      "React Js",
      "React Router Dom",
      "Context API",
      "Tailwind CSS",
      "Firebase",
      "Node Js",
      "Express Js",
      "MongoDB",
      "Mongoose",
    ],
    live: "https://travelin-327a3.web.app",
    code: "https://github.com/Arifulislam5577/travelin-cilent",
    coverImage: "/images/p2.png",

    projectType: "business app",
  },

  {
    id: uuidv4(),
    title: "Newsman",
    description:
      "Rolex is a ecommerce website. It sells various kinds of rolex brand watches. User can purchase their favourite watch with Stripe payment gateway.",

    usedTechnology: [
      "React Js",
      "React Router Dom",
      "Redux Thunk",
      "Tailwind CSS",
      "Node Js",
      "Express Js",
      "MongoDB",
      "Mongoose",
      "Json web token",
    ],
    live: "https://newsman-849a8.web.app",
    code: "https://github.com/Arifulislam5577/newsman-blog-app",
    coverImage: "/images/p3.png",

    projectType: "blog web application",
  },
  {
    id: uuidv4(),
    title: "Rolex",
    description:
      "Rolex is a ecommerce website. It sells various kinds of rolex brand watches. User can purchase their favourite watch with Stripe payment gateway.",

    live: "https://rolex-ec266.web.app",
    code: "https://github.com/Arifulislam5577/rolex-shopping",
    coverImage: "/images/p4.png",
    usedTechnology: [
      "React Js",
      "React Router Dom",
      "Redux Thunk",
      "Bootstrap",
      "Node Js",
      "Express Js",
      "MongoDB",
      "Mongoose",
      "Json web token",
    ],
    projectType: "ecommerce web application",
  },

  {
    id: uuidv4(),
    title: "Nikeshoe",
    description:
      "Nikeshoe is a small business website. It sell nike brand shoe with different packages. Anyone can purchase any package with stripe payment geteway.",

    live: "https://nikeshoe-a57fd.web.app",
    code: "https://github.com/Arifulislam5577/NikeShoe",
    coverImage: "/images/p5.png",
    usedTechnology: [
      "React Js",
      "React Router Dom",
      "Tailwind CSS",
      "Redux Thunk",
      "Node Js",
      "Express Js",
      "MongoDB",
      "Mongoose",
      "Json web token",
    ],
    projectType: "business app",
  },
];

import PokemonImageBattle from "../public/poke_battle.png";
import myMenu from "../public/my-menu.png";
import Koremo from "../public/koremo.png"

const histories = [
  {
    id: 7,
    period: "2023",
    description: {
      title: "Koremo",
      describe: "An application, anticipated to be used between family and friends, that allows users to inform other users what they want and has them buy it like uber eats.",
      points: [
        "Share what users want and has them buy it",
        "Register friends",
        "Login with google oauth",
      ],
      // information for my work
      image: Koremo,
      language: ["TypeScript", "Next.js", "Node.js", "Graphql", "Typeorm", "MySQL"],
      link: "https://koremo-client.vercel.app/",
    },
  },
  {
    id: 6,
    period: "March - July 2022",
    description: {
      title: "Full-Stack Developer",
      describe: "Argano Inc. / Japan",
      points: ["Maintained and operated an educational service, using NextJs, Apollo GraphQL, MySQL, and TypeORM mainly, which helps users to find an online tutor.", "Implemented scripts that enable to load CSV files automatically which had been typed by hand and increased efficiency by 50%.", "Create the specification to avoid the double effort due to the miscommunication"],
      link: "https://argano.co.jp/"
    },
  },
  {
    id: 5,
    period: "2021",
    description: {
      title: "BESTDISH",
      describe: "This app is able to create the ranking of favorite dishes",
      points: [
        "Share favorite dishes",
        "Suggest new restaurants on the basis of the dishes which is share by similar taste user for user",
        "I'm going to create an actual restaurants menu by user information (dish name, location, price, etc...)",
      ],
      // information for my work
      image: myMenu,
      language: ["Next.js", "Node.js", "MySQL"],
      link: "https://poke-battle.netlify.app/",
    },
  },
  {
    id: 4,
    period: "2021",
    description: {
      title: "Pokemon Battle App",
      describe:
      "This app is able to play Pokemon on the browser. I created this app with a few people",
      points: ["Choose pokemon", "Decide move", "Change Pokemon", "Use Item"],
      image: PokemonImageBattle,
      language: ["React", "Redux", "JS"],
      link: "https://poke-battle.netlify.app/",
    },
  },
  {
    id: 3,
    period: "2021",
    description: {
      title: "I did volunteer",
      describe: "I helped an art event",
      points: ["Venue setup", "Reception"],
    },
  },
  {
    id: 2,
    period: "2021 -",
    description: {
      title: "I enrolled in CICCC",
      describe: "I'm specializing web development",
      points: ["Algorithm", "HTML & CSS", "JavaScript", "Java"],
    },
  },
  {
    id: 1,
    period: "- 2021",
    description: {
      title: "Before coming to Vancouver",
      describe: "I was a university student and a part-timer",
      points: [
        "Salesperson in grocery store",
        "Salesperson in Japanese style pub",
        "employee in Japanese style hotel",
        "Website content writer",
        "I'd been specializing sociology",
      ],
    },
  },
];

export default histories;

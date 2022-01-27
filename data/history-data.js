import PokemonImageBattle from "../public/poke_battle.png";
import myMenu from "../public/my-menu.png";

const histories = [
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
    id: 3,
    period: "2021",
    description: {
      title: "I did volunteer",
      describe: "I helped an art event",
      points: ["Venue setup", "Reception"],
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
];

export default histories;

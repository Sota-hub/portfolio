import PokemonImageChoose from "../public/poke_choose.png";
import PokemonImageCutin from "../public/poke_cutin.png";
import PokemonImageBattle from "../public/poke_battle.png";

const dataOfPokemon = {
  title: "Pokemon Battle App",
  description: [
    `This app can play Pokemon on the browser. I created this app with a few people. What I learned with creating this app are below. I used an API called "pokeapi" in this app. by using that, I learned how to use useSWR as a custom hook. And, I realized that When I use the custom hook, I have to take care of it's not more than 2 layers below the component I use the custom hook. It caused a problem, so I decide to confirm that it is used directly below the component.`,
    `Additionally, when I create a redux store, I learned that if there are more than two initial states which have the same structure, I should use an empty array in the initial state, and create a reducer that pushes a complex array or object into the initial state array. It turned wet code into dry code. There were other issues such as the difficulty of controlling component rerendering, However, I solved these problems and a little get used to developing with React.`,
  ],
  image: [PokemonImageChoose, PokemonImageCutin, PokemonImageBattle],
  link: "https://poke-battle.netlify.app/",
  language: ["React", "Redux", "JS"],
  github: "https://github.com/Sota-hub/pokemon-battle.git",
};

export default dataOfPokemon;

import myMenu from "../public/my-menu.png";
import searchMenu from "../public/search.png";
import postMenu from "../public/post.png";
import homeMenu from "../public/home.png";

const dataOfBestDish = {
  title: "BESTDISH",
  description: [
    "This is an app that you can find restaurants on the basis of what you want to eat. First, the reason why I developed this app is there is a few images on restaurant's menu, therefore, I decided to create app which has the menu with image. To achieve that I used react-dropzone, however, It became a little bit complicated by using with react hook from. As a result, I could use them together, but, I think I'll use them from now on ,so I want to get use to them more.",
    "And, It was reflection that I begun this project without thinking the database structure well. The beginning of the project, I just created page design. Then, This project came up to the turning point, I realized that I didn't pass the sufficient data to the database. I've already created a component that display the data which is not enough, due to that, I had to update the page design. Next time I develop an app needed a lot of data, I will definitely prepare the data structure.",
    "I leaned many things such as setting proxy for sending request correctly, relating two models in node.js and so on. And also, I feel the importance that to develop more than two person, since, goes without saying faster developing, I could refactor my code from a different perspective",
  ],
  image: [myMenu, searchMenu, postMenu, homeMenu],
  link: "https://poke-battle.netlify.app/",
  language: ["Next.js", "Node.js", "MongoDB"],
  github: "https://github.com/Sota-hub/BESTDISH.git",
};

export default dataOfBestDish;

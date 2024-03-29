import Koremo from "../public/koremo.png";
import Login from "../public/login.png";
import Home from "../public/home-koremo.png";
import FriendList from "../public/friend's-list.png";
import FriendListDetail from "../public/friend's-list-detail.png";
import List from "../public/list.png";
import ListDetail from "../public/list-detail.png";
import Account from "../public/account.png";

const dataOfKoremo = {
  title: "Koremo",
  description: [
    `This is an app that allows users to inform other users what they want and has them buy it like uber eats. The reason I began to develop this app is I came up with an idea that what if there is an app which is able to share what users want and has them buy it with no fee be used between family and friends while I use uber eats application`,
    `when I develop the app, I chose the technologies which use in my work which contributed before. These are "TypeScript", "Next.js", "Node.js", "Apollo Graphql", "Typeorm", "MySQL" "Docker" and "lerna". In these technologies, I stopped using Docker due to that docker and lerna were a little bit incompatible and starting the frontend side app was slow in the virtual environment.`,
    "Through my development experience, I learned the structure of OAuth 2.0, how to operate the mono-repo application and the usefulness of docker in the multi-developer environment. Additionally, I am made aware that I need to write more efficient code like split by function and more reusable."
  ],
  image: [Koremo, Login, Home, FriendList, FriendListDetail, List, ListDetail, Account],
  link: "https://koremo-client.vercel.app",
  language: ["TypeScript", "Next.js", "Node.js", "Apollo Graphql", "Typeorm", "MySQL"],
  github: "https://github.com/Sota-hub/Koremo_dev",
};

export default dataOfKoremo;

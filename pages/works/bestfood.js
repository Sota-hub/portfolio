import WorkDetail from "../../component/works/WorkDetail";

const data = {
  title: "BESTFOOD",
  description: "this is a bestfood app",
  image: ["/aboutMe.jpg", "/aboutMe.jpg", "/aboutMe.jpg"],
  link: "https://poke-battle.netlify.app/",
  language: ["Next.js", "Node.js", "MySQL"],
};

const bestfood = () => {
  return <WorkDetail data={data} />;
};

export default bestfood;

import Work from "./work";

const Works = ({ ids }) => ids.map((id) => <Work key={id} id={id}></Work>);

export default Works;

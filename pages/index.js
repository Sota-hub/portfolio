import Header from "../component/common/Header";
import Block from "../component/home/Block";
import Footer from "../component/common/Footer";

const blocks = [
  {
    title: "If you are interested in me",
    linkName: "about me",
  },
  {
    title: "If you are NOT interested in me (Please see my works at least)",
    linkName: "works",
  },
  {
    title: "If it’s time to hire me already",
    linkName: "contact",
  },
];

const HomePage = () => {
  return (
    <>
      <Header />
      <main>
        {blocks.map((block, index) => (
          <Block key={`block_${index}`} block={block} />
        ))}
      </main>
      <Footer />
    </>
  );
};

export default HomePage;

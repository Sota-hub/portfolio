import { useRouter } from "next/dist/client/router";

const Work = ({ id }) => {
  const router = useRouter();

  const individualWork = () => {
    router.push(`/${id}`);
  };

  return (
    <div>
      <p>Title</p>
      <button onClick={individualWork}>Click</button>
    </div>
  );
};

export default Work;

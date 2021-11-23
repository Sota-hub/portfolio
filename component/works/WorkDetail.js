import Image from "next/image";

import Header from "../../component/common/Header";
import Footer from "../../component/common/Footer";
import Language from "../../component/about/Language";
import classes from "../../styles/works.module.scss";
import image from "next/image";

const WorkDetail = ({ data }) => {
  return (
    <>
      <Header />
      <div className="container">
        <div className={classes.detail_container}>
          <h2 className={classes.detail_title}>{data.title}</h2>
          <p className={classes.detail_description}>{data.description}</p>
          <div className={classes.detail_image_container}>
            {data.image?.map((img, index) => (
              <div key={`image-${index}`} className={classes.detail_image}>
                <Image
                  src={img}
                  alt={`Pokemon Battle App-${index}`}
                  layout="fill"
                />
              </div>
            ))}
          </div>
          <a href={data.link} target="blank" className={classes.detail_link}>
            Visit
          </a>
          <p className={classes.detail_language}>languages</p>
          <Language language={data.language} />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default WorkDetail;

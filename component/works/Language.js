import classes from "../../styles/works.module.scss";

const Language = ({ language }) => {
  return (
    <div className={classes.language_grid}>
      {language.map((lang) => (
        <div key={lang} className={classes.language_style}>
          {lang}
        </div>
      ))}
    </div>
  );
};

export default Language;

import DarkImage from "../images/image-about-dark.jpg";
import LightImage from "../images/image-about-light.jpg";
import classes from "./StaticContent.module.css";

const StaticContent = () => {
  return (
    <>
      <div className={classes.firstImage}>
        <img src={DarkImage} alt="Bedroom with dark bed and chairs" />
      </div>
      <div className={classes.textBox}>
        <h2 className={classes.title}>About our furniture</h2>
        <p className={classes.paragraph}>
          Our multifunctional collection blends design and function to suit your
          individual taste. Make each room unique, or pick a cohesive theme that
          best express your interests and what inspires you. Find the furniture
          pieces you need, from traditional to contemporary styles or anything
          in between. Product specialists are available to help you create your
          dream space.
        </p>
      </div>
      <div className={classes.secondImage}>
        <img src={LightImage} alt="White chair in white room" />
      </div>
    </>
  );
};

export default StaticContent;

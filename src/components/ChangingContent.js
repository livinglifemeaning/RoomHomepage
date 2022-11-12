import { useState } from "react";
import useMediaQuery from "../useMediaQuery"; 
import Hero1Desktop from "../images/desktop-image-hero-1.jpg";
import Hero2Desktop from "../images/desktop-image-hero-2.jpg";
import Hero3Desktop from "../images/desktop-image-hero-3.jpg";
import Hero1Mobile from "../images/mobile-image-hero-1.jpg";
import Hero2Mobile from "../images/mobile-image-hero-2.jpg";
import Hero3Mobile from "../images/mobile-image-hero-3.jpg";
import Arrow from "../images/icon-arrow.svg";
import classes from "./ChangingContent.module.css";
import ToggleContent from "./ToggleContent";

const HERO_IMAGES_DESKTOP = [Hero1Desktop, Hero2Desktop, Hero3Desktop];
const HERO_IMAGES_MOBILE = [Hero1Mobile, Hero2Mobile, Hero3Mobile];
const DYNAMIC_CONTENT = [
  {
    title: "Discover innovative ways to decorate",
    paragraph:
      "We provide unmatched quality, comfort, and style for property owners across the country. Our experts combine form and function in bringing your vision to life. Create a room in your own style with our collection and make your property a reflection of you and what you love.",
    alt: "White chairs by table with bonsai tree ontop",
  },
  {
    title: "We are available all across the globe",
    paragraph:
      "With stores all over the world, it's easy for you to find furniture for your home or place of business. Locally, we’re in most major cities throughout the country. Find the branch nearest you using our store locator. Any questions? Don't hesitate to contact us today.",
    alt: "Chairs in yellow, green and white",
  },
  {
    title: "Manufactured with the best materials",
    paragraph:
      "Our modern furniture store provide a high level of quality. Our company has invested in advanced technology to ensure that every product is made as perfect and as consistent as possible. With three decades of  experience in this industry, we understand what customers want for their home and office.",
    alt: "black fold chair",
  },
];

const ChangingContent = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const isDesktop = useMediaQuery("(min-width: 45em)"); 
  const amountOfDynamicContent = DYNAMIC_CONTENT.length 

  const changeContentHandler = (num) => {
    if (activeIndex === 0 && num === -1) {
      setActiveIndex(amountOfDynamicContent - 1);
    } else if (activeIndex === amountOfDynamicContent - 1 && num === 1) {
      setActiveIndex(0);
    } else {
      setActiveIndex(activeIndex + num);
    }
  };

  return (
    <>
      <div className={classes.imageBox}>
        <picture >
          <source
            media="(min-width: 45em)"
            srcSet={HERO_IMAGES_DESKTOP[activeIndex]}
          />
          <img className={classes.heroImage}
            src={HERO_IMAGES_MOBILE[activeIndex]}
            alt={DYNAMIC_CONTENT[activeIndex].alt}
          />
        </picture>
        {!isDesktop && <div className={classes.toggleBox}><ToggleContent changeContentHandler={changeContentHandler} /> </div>}
      </div>
      <div className={classes.textBox}>
        <h1 className={classes.title}>{DYNAMIC_CONTENT[activeIndex].title}</h1>
        <p className={classes.paragraph}>
          {DYNAMIC_CONTENT[activeIndex].paragraph}
        </p>
        <button className={classes.shop}>
          Shop Now{" "}
          <span>
            <img src={Arrow} alt="" />{" "}
          </span>
        </button>
        {isDesktop && <div className={classes.toggleBox}><ToggleContent changeContentHandler={changeContentHandler} /> </div>}
      </div>
    </>
  );
};

export default ChangingContent;

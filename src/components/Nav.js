import { useEffect, useState } from "react";
import useMediaQuery from "../useMediaQuery";
import HamburgerMenu from "./HamburgerMenu";
import Logo from "../images/logo.svg";
import classes from "./Nav.module.css";

const Nav = () => {
  const [navOpen, setNavOpen] = useState(false);
  const isDesktop = useMediaQuery("(min-width: 45em)");

  useEffect(() => {
    if (isDesktop) {
      setNavOpen(false);
    }
  }, [isDesktop]);

  return (
    <div className={`${classes.nav} ${navOpen && classes.open}`}>
      {!isDesktop && (
        <HamburgerMenu
          navOpen={navOpen}
          onClick={() => setNavOpen((prevState) => !prevState)}
        />
      )}
      {(!navOpen || isDesktop) && (
        <img className={classes.logo} src={Logo} alt="Room logo" />
      )}
      {(navOpen || isDesktop) && (
        <ul className={classes.links}>
          <li>home</li>
          <li>shop</li>
          <li>about</li>
          <li>contact</li>
        </ul>
      )}
    </div>
  );
};

export default Nav;

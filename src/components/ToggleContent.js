import ToggleLeft from "../images/icon-angle-left.svg";
import ToggleRight from "../images/icon-angle-right.svg";
import classes from "./ToggleContent.module.css";

const ToggleContent = ({changeContentHandler}) => {
  return (
    <div className={classes.toggleContainer}>
      <div className={classes.toggle} onClick={()=>changeContentHandler(-1)}>
        <img src={ToggleLeft} alt="Toggle content backwards" />
      </div>
      <div className={classes.toggle} onClick={()=>changeContentHandler(1)}>
        <img src={ToggleRight} alt="Toggle content backwards" />
      </div>
    </div>
  );
};

export default ToggleContent;

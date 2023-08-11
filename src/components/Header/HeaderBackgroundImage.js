import React from "react";
import classes from "./HeaderBackgroundImage.module.css";
import mealsImage from "../../assets/meals.jpg";

const HeaderBackgroundImage = () => {
  return (
    <div className={classes["main-image"]}>
      <img src={mealsImage} alt="Meals Image"></img>
    </div>
  );
};

export default HeaderBackgroundImage;

import React from "react";
import classes from "./Header.module.css";
import HeaderCartButton from "./HeaderCartButton";
import HeaderBackgroundImage from "./HeaderBackgroundImage";

const Header = () => {
  const carButtonClickHandler = () => {};
  return (
    <>
      <header className={classes.header}>
        <h1>Meals</h1>
        <HeaderCartButton
          title={"Your Cart"}
          onCartButtonClick={carButtonClickHandler}
          itemsCount={0}
        />
      </header>
      <HeaderBackgroundImage />
    </>
  );
};

export default Header;

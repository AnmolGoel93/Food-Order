import React from "react";
import classes from "./Header.module.css";
import HeaderCartButton from "./HeaderCartButton";
import HeaderBackgroundImage from "./HeaderBackgroundImage";

const Header = ({ itemsQuantity, onClick }) => {
  return (
    <>
      <header className={classes.header}>
        {/* Title */}
        <h1>Meals</h1>

        {/* Cart Button */}
        <HeaderCartButton title={"Your Cart"} onClick={() => onClick()} />
      </header>

      {/* Background Image */}
      <HeaderBackgroundImage />
    </>
  );
};

export default Header;

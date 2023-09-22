import React, { useContext, useEffect, useState } from "react";
import CartIcon from "../Cart/CartIcon";
import classes from "./HeaderCartButton.module.css";
import CartContext from "../../store/cart-context";

const HeaderCartButton = ({ title, onClick }) => {
  const [btnBump, setBtnBump] = useState(false);
  const cartContextData = useContext(CartContext);
  const itemsCount = cartContextData.items.reduce((curNum, item) => {
    return curNum + item.amount;
  }, 0);

  useEffect(() => {
    if (cartContextData.items.length === 0) {
      return;
    }

    setBtnBump(true);

    const timer = setTimeout(() => {
      setBtnBump(false);
    }, 300);

    return () => {
      clearTimeout(timer);
    };
  }, [cartContextData.items]);

  const btnClasses = `${classes.button} ${btnBump ? classes.bump : ""}`;

  return (
    <button onClick={onClick} className={btnClasses}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span className={classes.title}>{title}</span>
      <span className={classes.badge}>{itemsCount}</span>
    </button>
  );
};

export default HeaderCartButton;

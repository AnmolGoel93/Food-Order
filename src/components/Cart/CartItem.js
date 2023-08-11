import React from "react";
import classes from "./CartItem.module.css";

const CartItem = (props) => {
  return <li className={classes.cart_item}>{props.children}</li>;
};

export default CartItem;

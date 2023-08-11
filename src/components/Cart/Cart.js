import React from "react";
import classes from "./Cart.module.css";
import Modal from "../Modal/Modal";
import Button from "../UI/Button";
import CartItem from "./CartItem";

const Cart = ({ onClose }) => {
  const cartItems = (
    <ul className={classes.cart_items}>
      {[
        { id: "c1", name: "Sushi", quantity: 2, price: 22.99 },
        { id: "c2", name: "Sushi", quantity: 2, price: 22.99 },
        { id: "c3", name: "Sushi", quantity: 2, price: 22.99 },
      ].map((item) => (
        <CartItem key={item.id}>
          <span>{item.name}</span>
        </CartItem>
      ))}
    </ul>
  );

  return (
    <Modal onClose={onClose}>
      {cartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>$88.99</span>
      </div>
      <div className={classes.actions}>
        <Button onClick={() => onClose()}>Close</Button>
        <Button className={classes.button}>Order</Button>
      </div>
    </Modal>
  );
};

export default Cart;

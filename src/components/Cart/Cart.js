import React, { useContext } from "react";
import classes from "./Cart.module.css";
import Modal from "../Modal/Modal";
import Button from "../UI/Button";
import CartItem from "./CartItem";
import CartContext from "../../store/cart-context";

const Cart = ({ onClose }) => {
  const cartContextData = useContext(CartContext);
  const formattedTotalAmount = cartContextData.totalAmount.toFixed(2);
  const hasItems = cartContextData.items.length > 0;

  const cartItemRemoveHandler = (id) => {
    cartContextData.removeItem(id);
  };

  const cartItemAddHandler = (item) => {
    cartContextData.addItem(item);
  };

  const cartItems = (
    <ul className={classes.cart_items}>
      {cartContextData.items.map((item) => (
        <CartItem
          key={item.id}
          name={item.name}
          amount={item.amount}
          price={item.price}
          onRemove={cartItemRemoveHandler.bind(null, item.id)}
          onAdd={cartItemAddHandler.bind(null, item)}
        />
      ))}
    </ul>
  );

  return (
    <Modal onClose={onClose}>
      {cartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>${formattedTotalAmount}</span>
      </div>
      <div className={classes.actions}>
        <Button onClick={() => onClose()}>Close</Button>
        {hasItems && <Button className={classes.button}>Order</Button>}
      </div>
    </Modal>
  );
};

export default Cart;

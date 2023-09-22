import React, { useContext } from "react";
import classes from "./MealItem.module.css";
import MealItemDetails from "./MealItemDetails";
import MealItemForm from "./MealItemForm";
import CartContext from "../../../store/cart-context";

const MealItem = ({ meal }) => {
  const cartContextData = useContext(CartContext);

  const addToCartHandler = (amount) => {
    cartContextData.addItem({
      id: meal.id,
      name: meal.name,
      amount,
      price: meal.price,
    });
  };

  return (
    <li className={classes.meal}>
      <MealItemDetails mealDetails={meal} />
      <MealItemForm id={meal.id} onAddToCart={addToCartHandler} />
    </li>
  );
};

export default MealItem;

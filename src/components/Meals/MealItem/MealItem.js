import React from "react";
import classes from "./MealItem.module.css";
import MealItemDetails from "./MealItemDetails";
import MealItemQuantityInput from "./MealItemQuantityInput";

const MealItem = ({ meal }) => {
  return (
    <li className={classes.meal}>
      <MealItemDetails mealDetails={meal} />
      <MealItemQuantityInput id={meal.id} />
    </li>
  );
};

export default MealItem;

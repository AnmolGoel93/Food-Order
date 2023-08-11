import React from "react";
import classes from "./MealItem.module.css";
import MealItemDetails from "./MealItemDetails";
import MealItemForm from "./MealItemForm";

const MealItem = ({ meal }) => {
  return (
    <li className={classes.meal}>
      <MealItemDetails mealDetails={meal} />
      <MealItemForm id={meal.id} />
    </li>
  );
};

export default MealItem;

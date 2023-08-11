import React from "react";
import classes from "./MealItemDetails.module.css";

const MealItemDetails = ({ mealDetails: { name, description, price } }) => {
  const formattedPrice = `$${price.toFixed(2)}`;

  return (
    <div className={classes.details}>
      <h3>{name}</h3>
      <div className={classes.description}>{description}</div>
      <div className={classes.price}>{formattedPrice}</div>
    </div>
  );
};

export default MealItemDetails;

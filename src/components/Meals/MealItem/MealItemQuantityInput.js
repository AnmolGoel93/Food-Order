import React from "react";
import classes from "./MealItemQuantityInput.module.css";
import Input from "../../UI/Input";

const MealItemQuantityInput = ({ id }) => {
  return (
    <form className={classes.form}>
      <Input
        id={id}
        label={"Amount"}
        input={{
          type: "number",
          defaultValue: "1",
          id: { id },
          min: "1",
          max: "5",
          step: "1",
        }}
      />
      <button className={classes.addButton}>+ Add</button>
    </form>
  );
};

export default MealItemQuantityInput;

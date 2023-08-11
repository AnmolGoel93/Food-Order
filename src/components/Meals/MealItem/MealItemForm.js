import React from "react";
import classes from "./MealItemForm.module.css";
import Input from "../../UI/Input";
import Button from "../../UI/Button";

const MealItemForm = ({ id }) => {
  const addButtonClickHandler = () => {};

  return (
    <form className={classes.form}>
      <Input
        label="Amount"
        input={{
          type: "number",
          defaultValue: "1",
          id: "amount_" + id,
          min: "1",
          max: "5",
          step: "1",
        }}
      />
      <Button onClick={addButtonClickHandler}>+Add</Button>
    </form>
  );
};

export default MealItemForm;

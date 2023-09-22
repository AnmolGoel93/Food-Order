import React, { useRef, useState } from "react";
import classes from "./MealItemForm.module.css";
import Input from "../../UI/Input";
import Button from "../../UI/Button";

const MealItemForm = ({ id, onAddToCart }) => {
  const [isAmountValid, setIsAmountValid] = useState(true);
  const amountInputRef = useRef();
  const submitHandler = (event) => {
    event.preventDefault();

    const enteredAmount = amountInputRef.current.value;
    const enteredAmountNumber = +enteredAmount;

    if (
      enteredAmount.trim().length === 0 ||
      enteredAmountNumber < 1 ||
      enteredAmountNumber > 5
    ) {
      setIsAmountValid(false);
      return;
    }

    onAddToCart(enteredAmountNumber);
  };

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <Input
        ref={amountInputRef}
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
      <Button type="submit">+Add</Button>
      {!isAmountValid && <p>Please Enter a Valid Amount (1-5).</p>}
    </form>
  );
};

export default MealItemForm;

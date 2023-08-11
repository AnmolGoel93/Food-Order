import React from "react";
import classes from "./MealsList.module.css";
import Card from "../UI/Card";
import MealItem from "./MealItem/MealItem";
import DUMMY_MEALS from "../data/dummy-meals";

const MealsList = () => {
  return (
    <section>
      <Card className={classes.mealsList}>
        <ul>
          {DUMMY_MEALS.map((meal) => (
            <MealItem key={meal.id} meal={meal} />
          ))}
        </ul>
      </Card>
    </section>
  );
};

export default MealsList;

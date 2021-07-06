import Card from "../UI/Card";
import classes from "./AvailableAuctions.module.css";
import MealItem from "./AuctionItem/AuctionItem";
import E from "../../assets/image2.jpg";
import F from "../../assets/main.jpg";

const DUMMY_MEALS = [
  {
    id: "m1",
    name: "Sushi",
    description: "Finest fish and veggies",
    price: 22.99,
    due: "July 30 2021 00:00:00",
    src: E,
  },
  {
    id: "m2",
    name: "Schnitzel",
    description: "A german specialty!",
    price: 16.5,
    due: "July 30 2021 00:00:00",
    src: F,
  },
  {
    id: "m3",
    name: "Barbecue Burger",
    description: "American, raw, meaty",
    price: 12.99,
    due: "July 30 2021 00:00:00",
    src: E,
  },
  {
    id: "m4",
    name: "Green Bowl",
    description: "Healthy...and green...",
    price: 18.99,
    due: "July 30 2021 00:00:00",
    src: E,
  },
  {
    id: "m5",
    name: "Sushi1",
    description: "Finest fish and veggies",
    price: 22.99,
    due: "July 30 2021 00:00:00",
    src: E,
  },
  {
    id: "m6",
    name: "Schnitzel1",
    description: "A german specialty!",
    price: 16.5,
    due: "June 30 2021 00:00:00",
    src: E,
  },
  {
    id: "m7",
    name: "Barbecue Burger1",
    description: "American, raw, meaty",
    price: 12.99,
    due: "June 30 2022 00:00:00",
    src: E,
  },
  {
    id: "m8",
    name: "Green Bowl1",
    description: "Healthy...and green...",
    price: 18.99,
    due: "July 30 2020 00:00:00",
    src: E,
  },
];

const AvailableMeals = () => {
  const mealsList = DUMMY_MEALS.map((meal) => (
    <MealItem
      key={meal.id}
      meal={meal}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ));

  return (
    <section className={classes.meals}>
      {mealsList.map((meal) => {
        return (
          <Card key={meal.key} meal={meal}>
            {meal}
          </Card>
        );
      })}
    </section>
  );
};

export default AvailableMeals;

// CORE
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
// PARTS
import MealsList from "../components/MealsList";
import Preloader from "../components/Preloader";
// API
import { getFilteredByCategories } from "../api";

function Category() {
  const { name } = useParams();
  const [meals, setMeals] = useState([]);

  useEffect(() => {
    getFilteredByCategories(name).then((data) => setMeals(data.meals));
  }, [name]);

  return <>{!meals.length ? <Preloader /> : <MealsList meals={meals} />}</>;
}

export default Category;

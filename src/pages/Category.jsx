// CORE
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
// PARTS
import MealsList from "../components/MealsList";
import Preloader from "../components/Preloader";
// API
import { getFilteredByCategories } from "../api";

function Category() {
  const { name } = useParams();
  const [meals, setMeals] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    getFilteredByCategories(name).then((data) => setMeals(data.meals));
  }, [name]);

  return (
    <>
      <button className="btn" onClick={() => navigate(-1)}>
        Go Back
      </button>
      {!meals.length ? <Preloader /> : <MealsList meals={meals} />}
    </>
  );
}

export default Category;

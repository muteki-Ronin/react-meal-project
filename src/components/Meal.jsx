// PARTS
import CustomLink from "./CustomLink";

function Meal({ strMeal, strMealThumb, idMeal }) {
  return (
    <div className="card">
      <div className="card-image">
        <img src={strMealThumb} alt={strMeal} />
      </div>
      <div className="card-content">
        <span className="card-title">{strMeal}</span>
      </div>
      <div className="card-action">
        <CustomLink type={"NavLink"} to={`/meal/${idMeal}`} classCss={"btn"}>
          Watch recipe
        </CustomLink>
      </div>
    </div>
  );
}

export default Meal;

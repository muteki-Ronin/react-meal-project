// CORE
import { NavLink } from "react-router-dom";

function CategoryItem({
  idCategory,
  strCategory,
  strCategoryThumb,
  strCategoryDescription,
}) {
  return (
    <div className="card">
      <div className="card-image">
        <img src={strCategoryThumb} alt={strCategory} />
      </div>
      <div className="card-content">
        <span className="card-title">{strCategory}</span>
        <p>{strCategoryDescription.slice(0, 200)}...</p>
      </div>
      <div className="card-action">
        <NavLink to={`/category/${strCategory}`} className="btn">
          Watch category
        </NavLink>
      </div>
    </div>
  );
}

export default CategoryItem;

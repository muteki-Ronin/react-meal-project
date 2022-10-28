// CORE
import { Link } from "react-router-dom";

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
        <Link to={`/category/${idCategory}`} className="btn">
          Watch category
        </Link>
      </div>
    </div>
  );
}

export default CategoryItem;

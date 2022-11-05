// PARTS
import CustomLink from "./CustomLink";

function CategoryItem({
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
        <CustomLink
          type={"NavLink"}
          to={`/category/${strCategory}`}
          classCss={"btn"}
        >
          Watch category
        </CustomLink>
      </div>
    </div>
  );
}

export default CategoryItem;

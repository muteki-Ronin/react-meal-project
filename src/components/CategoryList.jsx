// PARTS
import CategoryItem from "../components/CategoryItem";

function CategoryList({ catalog = [] }) {
  return (
    <div className="list">
      {catalog.map((element) => (
        <CategoryItem key={element.idCategory} {...element} />
      ))}
    </div>
  );
}

export default CategoryList;

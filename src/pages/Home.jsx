// CORE
import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
// PARTS
import CategoryList from "../components/CategoryList";
import Preloader from "../components/Preloader";
import Search from "../components/Search";
// API
import { getAllCategories } from "../api";

function Home() {
  const [catalog, setCatalog] = useState([]);
  const [filteredCatalog, setFilteredCatalog] = useState([]);

  const { pathname, search } = useLocation();
  const navigate = useNavigate();

  const handleSearch = (str) => {
    setFilteredCatalog(
      catalog.filter((item) =>
        item.strCategory.toLowerCase().includes(str.toLowerCase())
      )
    );

    navigate({
      pathname,
      search: str === "" ? "" : `?search=${str}`,
    });
  };

  useEffect(() => {
    getAllCategories().then((data) => {
      setCatalog(data.categories);
      setFilteredCatalog(
        !search
          ? data.categories
          : data.categories.filter((item) =>
              item.strCategory
                .toLowerCase()
                .includes(search.split("=")[1].toLowerCase())
            )
      );
    });
  }, [search]);

  return (
    <>
      <Search callbackSearch={handleSearch} />
      {!catalog.length ? (
        <Preloader />
      ) : (
        <CategoryList catalog={filteredCatalog} />
      )}
    </>
  );
}

export default Home;

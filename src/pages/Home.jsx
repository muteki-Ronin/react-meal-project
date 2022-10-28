// CORE
import { useState, useEffect } from "react";
// PARTS
import CategoryList from "../components/CategoryList";
import Preloader from "../components/Preloader";
// API
import { getAllCategories } from "../api";

function Home() {
  const [catalog, setCatalog] = useState([]);

  useEffect(() => {
    getAllCategories().then((data) => {
      setCatalog(data.categories);
    });
  }, []);

  return (
    <>{!catalog.length ? <Preloader /> : <CategoryList catalog={catalog} />}</>
  );
}

export default Home;

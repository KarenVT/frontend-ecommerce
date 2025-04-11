import Category from "../categories/Category";
import Banner from "../common/Banner"
import Underline from "../common/Underline"
import Search from "../search/Search"
import Products from "../productsList/Products"
import { useState } from "react";

const Inicio = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  return (
    <>
      <Banner />
      <Underline />
      <Search />
      <Underline />
      <Category selected={selectedCategory} setSelected={setSelectedCategory} />
      <Underline />
      <Products selectedCategory={selectedCategory} />
    </>
  );
}

export default Inicio
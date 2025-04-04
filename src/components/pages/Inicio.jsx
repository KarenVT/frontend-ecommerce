import Category from "../categories/Category";
import Banner from "../common/Banner"
import Underline from "../common/Underline"
import Search from "../search/Search"
import Products from "../productsList/Products"


const Inicio = () => {
  return (
    <>
      <Banner />
      <Underline />
      <Search />
      <Underline />
      <Category />
      <Underline />
      <Products />
    </>
  );
}

export default Inicio
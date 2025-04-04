import Category from "../categories/Category";
import Banner from "../common/Banner"
import Underline from "../common/Underline"
import Search from "../search/Search"


const Inicio = () => {
  return (
    <>
      <Banner />
      <Underline />
      <Search />
      <Underline />
      <Category />
    </>
  );
}

export default Inicio
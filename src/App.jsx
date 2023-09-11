import Header from "./Components/Header/index";
import Footer from "./Components/Footer/index";
import Categories from "./Components/Categories/index";
import Products from "./Components/Products/index";
import "./App.css";
export default (props) => {
  return <>
  <Header/>
  <Categories/>
  <Products/>
  <Footer/>
  </>;
};
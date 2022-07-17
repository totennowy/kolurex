import React from "react";
import Header from "./components/header/Header";
import Slider from "./components/slider/Slider";
import Footer from "./components/footer/Footer";
import Sale from "./components/sale/Sale";
import Categories from "./components/categories/Categories";

const App = () => {
  return (
    <>
      <Header />
      <Slider />
      <Sale />
      <Categories />
      <Footer />
    </>
  );
};
export default App;

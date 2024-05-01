import React, { useEffect } from "react";
import JoinUs from "./../../components/Common/JoinUs/JoinUs";
import ProductsBanner from "./ProductsBanner/ProductsBanner";
import Products from "./ProductsList/ProductsList";
import OurProduct from "./OurProducts/OurProduct";

const Index = () => {
  useEffect(() => {
    document.body.classList.add("remove-body-padding");
    document.getElementById("header").classList.add("header-bg-blue");
    return () => {
      document.body.classList.remove("remove-body-padding");
      document.getElementById("header").classList.remove("header-bg-blue");
    };
  }, []);
  const hostname = window.location.hostname;
  return (
    <>
      <ProductsBanner />
      {hostname === "www.novotrack.co.uk" ? <OurProduct /> : "" }
      <Products />
      <JoinUs />
    </>
  );
};

export default Index;

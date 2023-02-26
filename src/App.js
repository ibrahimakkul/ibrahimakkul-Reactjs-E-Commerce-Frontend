import "./index.css";
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useThemeHook } from "./GlobalComponents/ThemeProvider";
import Header from "./component/Header";
import { Route, Routes } from "react-router-dom";
import Home from "../src/Pages/Home"
import Cart from "../src/Pages/Cart"
import ProductDetails from "./Pages/ProductDetails";


function App() {
  const [theme] = useThemeHook();
  
  return (
    <>
      <main className={theme ? "bg-black" : "bg-light-2"} style={{height:"100vh",overflowY:"auto"}}>
      <Header/>
      
      <Routes>
        <Route exact  path="/" element={<Home/>}/>
        <Route path="/product-details/:productId" element={<ProductDetails/>}/>
        <Route path="/cart" element={<Cart/>}/>
        
      </Routes>
      </main>
    </>
  );
}

export default App;

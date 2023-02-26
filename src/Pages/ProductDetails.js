import React, { useEffect, useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { useThemeHook } from "../GlobalComponents/ThemeProvider";
import Lightbox from 'react-lightbox-component';
import "react-lightbox-component/build/css/index.css"
import "./product-details.css";
import { useCart } from "react-use-cart";
import { BsCartPlus } from "react-icons/bs";


const ProductDetails = () => {
  const id = useParams();
  const {addItem}=useCart();

  const [productData, setProductData] = useState([]);
  const [theme] = useThemeHook();

  async function getResponse() {
    const res = await fetch(
      `https://fakestoreapi.com/products/${id.productId}`
    ).then((res) => res.json());
    setProductData(await res);
  }

  useEffect(() => {
    getResponse();
  }, []);
console.log(productData);
  return (
    <Container className="py-5">
      <Row className="justify-content-center mt-5">
        <Col xs={10} md={7} lg={5} className="p-0">
         
         <Lightbox
           images={
            [
              {
                src: productData.image,
                title: productData.title,
                description: productData.description
              },
              {
                src: productData.image,
                title: productData.title,
                description: productData.description
              },
              {
                src: productData.image,
                title: productData.title,
                description: productData.description
              }
            ]
          }/>
         
        </Col>
        <Col xs={10} md={7} lg={7} className={`${theme?"text-light" : "text-black"} product-details`}>
        <h1>{productData.title}</h1>
        <Button 
        className={`${theme?"bg-dark-primary text-black":"bg-light-primary"}`}
        style={{borderRadius:"0",border:0}}
        onClick={()=>addItem(productData)}>
          <BsCartPlus size={"1.7rem"}/>
          Add to cart

        </Button>
        <br/>
        <b className={`${theme? "text-dark-primary ":"text-light-primary"} h4 mt-3 d-block `}>Rs. {productData.price}</b>
        <br/>
        <b className="h5">4.1 🌟</b>
        <p className="mt-3 h5" style={{opacity:"0.8", fontWeight:"400"}}>{productData.description}</p>
        </Col>
      </Row>
    </Container>
  );
};

export default ProductDetails;

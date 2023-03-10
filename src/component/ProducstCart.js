import React from "react";
import { Button, Card } from "react-bootstrap";
import { useCart } from "react-use-cart";
import { useThemeHook } from "../GlobalComponents/ThemeProvider";
import { BsCartPlus } from "react-icons/bs";
import { Link } from "react-router-dom";

const ProducstCart = (props) => {
  let { image, price, title, id } = props.data;
  const [theme] = useThemeHook();
  const { addItem } = useCart();

  const addToCard = () => {
    addItem(props.data);
  };

  return (
    <Card
      style={{ width: "18rem", height: "auto" }}
      className={`${
        theme ? "bg-light-black text-light" : "bg-light text-black"
      } text-center p-0 overflow-hidden shadow mx-auto mb-4`}
    >
      <Link to={`/product-details/${id}`}>
        <div
          style={{
            background: "white",
            height: "15rem",
            overflow: "hidden",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginBottom: "inherit",
          }}
        >
          <div style={{ width: "9rem" }}>
            <Card.Img variant="top" src={image} className={"img-fluid"} />
          </div>
        </div>
      </Link>
      <Card.Body>
        <Card.Title
          style={{
            textOverflow: "ellipsis",
            overflow: "hidden",
            whiteSpace: "nowrap",
          }}
        >
          {title}
        </Card.Title>
        <Card.Title>
          Rs.<span className="h3">{price}</span>
        </Card.Title>
        <Button
          onClick={() => addToCard()}
          className={`${
            theme ? "bg-dark-primary text-black" : "bg-light-primary"
          } d-flex align-items-center m-auto border-0`}
        >
          <BsCartPlus size={"1.5rem"} />
          Add to cart{" "}
        </Button>
      </Card.Body>
    </Card>
  );
};

export default ProducstCart;

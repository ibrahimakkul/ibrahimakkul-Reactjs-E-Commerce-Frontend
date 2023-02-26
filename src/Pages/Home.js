import React, { useEffect, useState } from "react";
import { Col, Container, Row, InputGroup, Form } from "react-bootstrap";
import { useThemeHook } from "../GlobalComponents/ThemeProvider";
import { CgSearchLoading } from "react-icons/cg";
import SearchFilter from "react-filter-search";
import ProducstCart from "../component/ProducstCart";



const Home = () => {
  const [theme] = useThemeHook();
  const [searchInput, setSearchInput] = useState("");
  const [products, setProducts] = useState([]);

  async function getResponse() {
    const res = await fetch("https://fakestoreapi.com/products").then((res) =>
      res.json()
    );
    setProducts(await res);
  }
  useEffect(() => {
    getResponse();
    
  }, []);
console.log(products);
  return (
    <Container className="py-4">
      <Row className="justify-content-center">
        <Col xs="10" md="7" lg="6" xl="4" className="mb-3 mx-auto text-center">
          <h1 className={theme ? "text-light my-5" : "text-black my-5"}>
            Search products
          </h1>
          <InputGroup className="mb-3">
            <InputGroup.Text
              className={
                theme
                  ? "bg-black text-dark-primay"
                  : "bg-light text-light-primary"
              }
            >
              <CgSearchLoading size={"1.5rem"} />
            </InputGroup.Text>
            <Form.Control
              className={
                theme
                  ? "bg-black text-dark-primay"
                  : "bg-light text-light-primary"
              }
              value={searchInput}
              onChange={(e) => setSearchInput(e.target.value)}
              placeholder="Search "
            />
          </InputGroup>
        </Col>
        <SearchFilter
          value={searchInput}
          data={products}
          renderResults={(results) => (
            <Row className="justify-content-center">
              {results.map((item) => (
                <ProducstCart data={item} key={item.id}/>
              ))}
              
            </Row>
          )}
        />
      </Row>
    </Container>
  );
};

export default Home;

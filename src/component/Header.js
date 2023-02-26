import React, { useContext, useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { ThemeContext } from "../GlobalComponents/ThemeProvider";
import { BiSun, BiMoon, BiCart } from "react-icons/bi";
import { Link } from "react-router-dom";
import { useCart } from "react-use-cart";

function Header() {
  const { theme, setThemeMode } = useContext(ThemeContext);
  const [darkMode, setDarkMode] = useState(theme);
  useEffect(() => {
    setThemeMode(darkMode);
  }, [darkMode]);


  const {isEmpty,totalItems}=useCart();

  return (
    <Navbar
      collapseOnSelect
      expand="md"
      variant={darkMode ? "dark" : "light"}
      className={
        darkMode ? "bg-light-black border-bottom" : "bg-light border-bottom"
      }
      style={{ width: "100%", position: "fixed", zIndex: 100 }}
    >
      <Container>
        <Link   to="/" style={{textDecoration:"none"}}>
        <Navbar.Brand
          className={darkMode ? "text-dark-primay " : "text-light-primary"}
         
        >
          E-Commerce
        </Navbar.Brand>
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link
              onClick={() => setDarkMode(!darkMode)}
              className={darkMode ? "text-dark-primay " : "text-light-primary"}
              
            >
              {darkMode ? (
                <BiSun size={"2rem"} />
              ) : (
                <BiMoon size={"2rem"} />
              )}
            </Nav.Link>
            <Link style={{textDecoration:"none", }} to={"/cart"}
              className={`${
                darkMode ? "text-dark-primay" : "text-light-primary"
              } d-flex align-items`}
            >
              <BiCart  size={"1.7rem"} />
              {!isEmpty && <span style={{position:"relative",left:"-21px",top:"-13px"}}>{totalItems}</span>}
              <span style={{marginLeft : !isEmpty ? "-13px": "5",paddingTop:"2px"}}>Cart</span>     
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;

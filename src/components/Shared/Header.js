import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

const Header = () => {
  const { user, handleLogOut } = useAuth();
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand href="#">OneStop Service</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="ms-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Nav.Link as={Link} to={`/home`} href="#action1">
              Home
            </Nav.Link>
            <Nav.Link as={Link} to={`/booking`} href="#action2">
              Services
            </Nav.Link>
            <Nav.Link as={Link} to={`/login`}>
              DashBoard
            </Nav.Link>
            <Nav.Link as={Link} to={`/login`} href="#action2">
              Testimonial
            </Nav.Link>
            <Nav.Link as={Link} to={`/about`} href="#action2">
              About Us
            </Nav.Link>
            <Nav.Link as={Link} to={`/allOrders`} href="#action2">
              All Orders
            </Nav.Link>
            <Nav.Link as={Link} to={`/myOrder`} href="#action2">
              My Order
            </Nav.Link>
            {!user?.email ? (
              <Nav.Link as={Link} to={`/login`}>
                Login
              </Nav.Link>
            ) : (
              <Nav.Link as={Link} to={`/login`} onClick={handleLogOut}>
                LogOut
              </Nav.Link>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;

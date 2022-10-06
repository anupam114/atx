import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link } from "react-router-dom";
import Logo from "../Logo.png";
const Navigation = () => {
  return (
    <Navbar bg="primary" variant="dark" expand="lg" className="mr-auto">
      <Container fluid>
        <Link to="/" className="navbar-brand">
          <img className="img-responsive" src={Logo} alt="" />
        </Link>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll" className="ms-auto">
          <Nav>
            <Link to="/" className="nav-link">
              Home
            </Link>

            <NavDropdown title="Resource" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">
                WarnCentralTexas
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                LCRA Austin Hydromet
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">
                {" "}
                Austin FloodPro{" "}
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">
                USGS Texas Water Dashboard
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">
                Flood Safety
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">
                Open Data Feed
              </NavDropdown.Item>
            </NavDropdown>

            <Link to="terms" className="nav-link">
              Terms
            </Link>
            <Link to="privacy" className="nav-link">
              Privacy
            </Link>
            <Link to="contact" className="nav-link">
              Contact
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation;

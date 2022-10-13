import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link } from "react-router-dom";
import Logo from "../atx-logo-front.png";
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
              <NavDropdown.Item href="https://warncentraltexas.org/" target = '_blank'>
                WarnCentralTexas
              </NavDropdown.Item>
              <NavDropdown.Item href="https://hydromet.lcra.org/coa/" target = '_blank'>
                LCRA Austin Hydromet
              </NavDropdown.Item>
              <NavDropdown.Item href="https://maps.austintexas.gov/FloodPro/#/FloodProIntro/" target = '_blank'>
                Austin FloodPro
              </NavDropdown.Item>
              <NavDropdown.Item href="https://txpub.usgs.gov/txwaterdashboard//" target = '_blank'>
                USGS Texas Water Dashboard
              </NavDropdown.Item>
              <NavDropdown.Item href="https://atxfloodsafety.com/" target = '_blank'>
                Flood Safety
              </NavDropdown.Item>
              <NavDropdown.Item href="/data-feed.xml" target = '_blank'>
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

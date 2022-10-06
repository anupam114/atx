import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
      <Navbar bg="dark" variant="dark">
        <Container>
          <Link to="/" className="navbar-brand"><img className="img-responsive" src="/AtxFloods/flood-logo-white-v4.svg" /></Link> | {" "}
          <Nav className="me-auto">
            {/* <Nav.Link to="/">Home</Nav.Link>
            <Nav.Link to="terms">Terms</Nav.Link> */}
            <Link to="/" className='nav-link'>Home</Link> |{" "}
            <Link to="terms" className='nav-link'>Terms</Link>
          </Nav>
        </Container>
      </Navbar>
  );
}

export default Navigation;
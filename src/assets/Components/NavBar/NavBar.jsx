import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import CarWidget from '../CarWidget/CarWidget';
import { DiCodeigniter } from "react-icons/di";


function NavBar() {
  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home"><DiCodeigniter /></Navbar.Brand>
          <Nav className="d-flex justify-content-between align-items-center">
            <Nav.Link href="#ekyword">PokeAPI</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      </>
  );
}

export default NavBar;
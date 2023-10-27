import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

import { CartWidget } from "./CartWidget"

export const NavBar = () =>{
    return <header>
        <Navbar expand='lg' className='bg-body-tertiary'>
        <Container>
      
        <Navbar.Brand href="#home">Mi talla</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="">Pantalones</Nav.Link>
            <Nav.Link href="">Camperas</Nav.Link>
            <Nav.Link href="">Carrito <CartWidget /></Nav.Link>
            <NavDropdown title="Contactenos" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Instagram</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Facebook </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Twitter</NavDropdown.Item>
              
              <NavDropdown.Divider />
              
              <NavDropdown.Item href="#action/3.4">Contacto personalizado </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          
        </Navbar.Collapse>
     
      </Container>
   
        </Navbar>
   
    </header> 
}
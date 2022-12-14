import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../img/pokemonLogo.png';

import "../css/style.css"

function Menu(){
    return  <>
    <Navbar collapseOnSelect expand="lg" className='bgColorBlue navbar' variant="dark" sticky="top">
        <Container>
        <Navbar.Brand href="/">
            <img src={logo}alt='logo'/>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className='me-auto'>
                <Nav.Link className="navText navbar-size" href="/">Home</Nav.Link>
                <Nav.Link className="navText navbar-size" href="/Pokemon">Pokemon</Nav.Link>
                <Nav.Link className="navText navbar-size" href="/Pokedex">Pokedex</Nav.Link>
                <Nav.Link className="navText navbar-size" href="/Gestion">Gestion Pokemon</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
        </Navbar>
    </>
}

export default Menu;
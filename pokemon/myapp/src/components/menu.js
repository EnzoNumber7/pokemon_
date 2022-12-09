import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../img/pokemonLogo.png';

import "../css/style.css"

function Menu(){
    return  <>
    <Navbar className='bgColorBlue navbar' variant="dark">
        <Container>
        <Navbar.Brand href="/">
            <img
              src={logo}
              alt='logo'
            />
          </Navbar.Brand>
            <Nav>
                <Nav.Link className="navText" href="/">Home</Nav.Link>
                <Nav.Link className="navText" href="/Pokemon">Pokemon</Nav.Link>
                <Nav.Link className="navText" href="/Pokedex">Pokedex</Nav.Link>
            </Nav>
            </Container>
        </Navbar>
    </>
}

export default Menu;
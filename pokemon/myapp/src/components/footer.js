import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import logo from '../img/pokemonLogoFooter.png';

function Footer(){
    return <div className='bgColorBlue footer ' sticky="botom">
        <Container>
            <Row>
                <Col xs={12} lg={5} className=' text-center'>
                    <img src={logo} />
                    <p className="footer-title">Nous Contacter</p>
                    <p className="footer-text">Email: ephilippe@gaming.tech / vfovet@gaming.tech</p>
                </Col>
                <Col xs={12} lg={5} className='text-center'>
                    <p className="footer-title margin-top">Pour plus d'information sur Pokemon</p>
                    <a className="footer-text" href="https://www.pokemon.com/fr">Le site Web officiel Pokémon</a>
                </Col>
            </Row>
        </Container>
    </div>

}

export default Footer;

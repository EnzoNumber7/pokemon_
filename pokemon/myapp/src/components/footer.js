import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import logo from '../img/pokemonLogoFooter.png';

function Footer(){
    return <div className='bgFooterImage footer ' sticky="botom">
        <Container>
            <Row>
                <Col xs={12} lg={5} className=' text-center'>
                    <img className='footer-logo ' src={logo}  alt="logo pokemon"/>
                    <p className="footer-title zero-padd">Nous Contacter</p>
                    <p className="footer-text zero-padd">Email: ephilippe@gaming.tech / vfovet@gaming.tech</p>
                </Col>
                <Col xs={12} lg={5} className='text-center'>
                    <p className="footer-title margin-top">Pour plus d'information sur Pokemon</p>
                    <a className="footer-text" href="https://www.pokemon.com/fr" target="blank">Le site Web officiel Pokémon</a>
                </Col>
            </Row>
        </Container>
    </div>

}

export default Footer;

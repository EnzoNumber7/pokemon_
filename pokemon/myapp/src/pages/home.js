import Menu from "../components/menu";
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from "react-bootstrap/esm/Button";
import Footer from "../components/footer";
import logo from "../img/pokemonLogoHome.png"
import motisma from "../img/motismaDex.png"

function Home(props){
    return <div>
        <Menu />
        <div className="bgImage">
            <Container>
                <Row>
                    <Col>
                        <Card className="margin-top margin-bottom home-CardColor">
                            <Card.Body>
                                <Card.Title className="text-center">
                                    <Card.Img className="card-image " src={logo} alt="logo pokemon" />
                                </Card.Title>
                                <Card.Text className="text-center">
                                    Jetez un oeil à la liste des Pokémons disponibles ici-même et Attrapez les tous !
                                </Card.Text>
                                <Card.Text className="text-center"><Button variant="light" href="Pokemon">Liste des Pokémons</Button></Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card className="margin-top margin-bottom home-CardColor">
                            <Card.Body>
                                <Card.Title>
                                    <Row>
                                        <Col sm={12} lg={3}>
                                            <Card.Img className="card-image" src={motisma} alt="motisma dex" />
                                        </Col>
                                        <Col sm={12} lg={9}>
                                            <Card.Text className="vertical-center">Liste de vos Pokémons</Card.Text>
                                        </Col>
                                    </Row>
                                </Card.Title>
                                <Card.Text className="text-center">
                                    Jetez un oeil à votre Pokedex 
                                </Card.Text>
                                <Card.Text className="text-center"><Button href="Pokedex" variant="light">Votre Pokedex</Button></Card.Text>
                            </Card.Body>
                        </Card>  
                    </Col>
                </Row>
            </Container>
        </div>
        <Footer />
    </div>
}

export default Home;

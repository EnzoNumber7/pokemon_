import Menu from "../components/menu";
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from "react-bootstrap/esm/Button";
import Footer from "../components/footer";
import logo from "../img/pokemonLogoHome.png"

function Home(props){
    return <div>
        <Menu />
        <div>
            <Container>
                <Row>
                    <Col>
                        <Card>
                            <Card.Body>
                                <Card.Title className="text-centers">Liste des Pokémons</Card.Title>
                                <Card.Text>
                                    Jetez un oeil à la liste des Pokémons disponibles ici-même et "Attrapez les tous !" :
                                </Card.Text>
                                <Card.Img src={logo} alt="logo pokemon" />
                                <Button href="Pokemon">Aller sur la liste des Pokémons</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card>
                            <Card.Body>
                                <Card.Title className="text-centers">Liste de vos Pokémons</Card.Title>
                                <Card.Text>
                                    Jetez un oeil à votre Pokedex  :
                                </Card.Text>
                                {/*<Card.Img><img src="../img/pokemon_catchthemall.jpg"></img></Card.Img>*/}
                                <Button href="Pokedex">Aller sur votre Pokédex</Button>
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

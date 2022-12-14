import Menu from "../components/menu";
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from "react-bootstrap/esm/Button";

function Home(props){
    return <div>
        <Menu />
        <div>
            <Container>
                <Row>
                    <Col>
                        <Card>
                            <Card.Body>
                                <Card.Title>Liste des Pokémons</Card.Title>
                                <Card.Text>
                                    Jetez un oeil à la liste des Pokémons disponibles ici-même et "Attrapez les tous !" :
                                </Card.Text>
                                <Button href="Pokemon">Aller sur la liste des Pokémons</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card>
                            <Card.Body>
                                <Card.Title>Liste de vos Pokémons</Card.Title>
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
    </div>
}

export default Home;

import Menu from "../components/menu";
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Home(props){
    return <div>
        <Menu />
        <div>
            <Container>
                <Row>
                    <Col>
                        <Card>
                            <Card.Body>
                                <Card.Title>Liste des Pokemon</Card.Title>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card>
                            <Card.Body>
                                <Card.Title>Liste de vos Pokemon</Card.Title>
                            </Card.Body>
                        </Card>  
                    </Col>
                </Row>
            </Container>
        </div>
    </div>
}

export default Home;
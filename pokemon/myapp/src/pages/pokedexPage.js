import Menu from "../components/menu";
import React, { useEffect, useState } from "react";
import { getPokedex,getType,delPokedex } from "../api/pokemon";
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Footer from "../components/footer";


function PokedexPage(props){
    const [ pokedex, setPokedex ] = useState([]);
    const [type, setType] = useState([])
    function refreshPage() {
      window.location.reload(false);
    }

    //va s'executer seulement au lancement du composant (dep: [])
    useEffect(() => {
    
    const pokedexFetched = getPokedex();
    pokedexFetched
        .then(result => setPokedex(result))
        .catch(error=>console.error("Erreur avec notre API :",error.message))

      
    const typeFetched = getType();
    typeFetched
        .then(result => setType(result))
        .catch(error=>console.error("Erreur avec notre API :",error.message));
    },[]);
    return <div className="bgColorGrey">
        <Menu />
        <div className="bgImage">
        <h1><span>Pokedex</span></h1>
        
        <h2 className="lg-h2 d-none d-sm-block"><span>Retrouvez ici les Pokemon que vous avez capturé !</span></h2>
        <h2 className="sm-h2 d-sm-none"><span>Retrouvez ici les Pokemon que vous avez capturé !</span></h2>

        <Container>
          <Row>
            {
            pokedex.map((pokedex,key) =>{
                  return <Col sm={2} md={3}>
                   <div key={key} className="bloc-pokemon item-center offset-2">
                          <Card border="dark" className="cardColor cardSize text-center">
                            <Card.Body>
                              <Card.Title className="cardTitle text-center zero-marg ">
                                <Container>
                                  <Row>
                                    <Col className="zero-padd zero-marg col-3"><p className="text-center">{pokedex.numero}</p> </Col>
                                    <Col className="zero-padd zero-marg col-9"><p className="text-center">{pokedex.name}</p></Col>
                                  </Row>
                                </Container>
                              </Card.Title>
                              <Card.Img className="pkmSize" variant="top" src={pokedex.img} />
                              <Card.Text>
                              {
                                pokedex.types.map((pokeType,key)=>{
                                  const rightType = type.find(type => type.type===pokeType);
                                  return (rightType?<img src={rightType.img} style={{ width: '5.5rem' }} alt="type logo"/>:null);
                                })
                              }
                              </Card.Text>
                              <Container>
                                  <Row>
                                    <Col className="zero-padd"><Button className="btn-size" size="sm" variant="light" onClick={async()=>{
                                      await delPokedex(pokedex)
                                      refreshPage()
                                      }}>Relâcher</Button></Col>
                                  </Row>
                                </Container>  
                            </Card.Body>
                          </Card>
                  </div>
              </Col>
            })}
          </Row>
        </Container>
        </div>
        <Footer />
    </div>;
}

export default PokedexPage;

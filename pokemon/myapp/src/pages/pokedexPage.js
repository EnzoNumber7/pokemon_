import Menu from "../components/menu";
import React, { useEffect, useState } from "react";
import { getPokedex,getType } from "../api/pokemon";
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


function PokedexPage(props){
    const [ pokedex, setPokedex ] = useState([]);
    const [type, setType] = useState([])

    //va s'executer seulement au lancement du composant (dep: [])
    useEffect(() => {
    // récupérer la liste des users seulement au chargement du composant ! 
    const pokedexFetched = getPokedex();
    pokedexFetched
        .then(result => setPokedex(result))
        .catch(error=>console.error("Erreur avec notre API :",error.message))

      // récupérer la liste des users seulement au chargement du composant ! 
    const typeFetched = getType();
    typeFetched
        .then(result => setType(result))
        .catch(error=>console.error("Erreur avec notre API :",error.message));
    },[]);
    return <div className="bgColorGrey">
        <Menu />
        <div className="bgImage">
        <Container>
          <Row>
            {
            pokedex.map((pokedex,key) =>{
                  return <Col sm={2} md={3}>
                   <div key={key} className="bloc-pokemon">
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
                            </Card.Body>
                          </Card>
                  </div>
              </Col>
            })}
          </Row>
        </Container>
        </div>
    </div>;
}

export default PokedexPage;

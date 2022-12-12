import Menu from "../components/menu";
import React, { useEffect, useState } from "react";
import { getPoke,getType,getPokedex,addPoke } from "../api/pokemon";
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';




function PokePage(props){
    const [ pokemons, setPokemons ] = useState([]);
    const [type, setType] = useState([])
    const [ pokedex, setPokedex ] = useState([]);

    //va s'executer seulement au lancement du composant (dep: [])
    useEffect(() => {
    // récupérer la liste des users seulement au chargement du composant ! 
    const pokemonsFetched = getPoke();
    pokemonsFetched
        .then(result => setPokemons(result))
        .catch(error=>console.error("Erreur avec notre API :",error.message))
      
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
        <Container>
          <Row>
            {
            pokemons.map((pokemon,key) =>{
                  return <Col sm={2} md={3}>
                   <div key={key} className="bloc-pokemon">
                          <Card border="dark" className="cardColor cardSize text-center">
                            <Card.Body>
                              <Card.Title className="cardTitle text-center">{pokemon.numero}:{pokemon.name}</Card.Title>
                              <Card.Img className="pkmSize" variant="top" src={pokemon.img} />
                              <Card.Text>
                              {
                                pokemon.types.map((pokeType,key)=>{
                                  const rightType = type.find(type => type.type===pokeType);
                                  return (rightType?<img src={rightType.img} style={{ width: '4.5rem' }} alt="type logo"/>:null);
                                })
                              }
                              </Card.Text>
                              {
                              (!pokedex.find(pokedex => pokemon.name===pokedex.name)?<Button variant='light' onClick={()=>addPoke(pokemon)}>Capturer !</Button>:"Pokemon déjà obtenu")  
                              }
                              </Card.Body>
                          </Card>
                  </div>
              </Col>
            })}
          </Row>
        </Container>
        </div>;
}

export default PokePage;
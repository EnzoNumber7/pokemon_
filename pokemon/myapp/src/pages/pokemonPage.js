import Menu from "../components/menu";
import React, { useEffect, useState } from "react";
import { getPoke,getType,getPokedex,addPokedex } from "../api/pokemon";
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import pokeball from '../img/pokeball.png';
import Footer from "../components/footer";




function PokePage(props){
    function refreshPage() {
      window.location.reload(false);
    }
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
        <div className="bgImage">
        <h1><span>Pokemon</span></h1>

        <h2 className="lg-h2 d-none d-sm-block"><span>Retrouvez ici la liste des pokemon à capturer !</span></h2>
        <h2 className="sm-h2 d-sm-none"><span>Retrouvez ici la liste des pokemon à capturer !</span></h2>
        
        {/*<Filter pokemons={pokemons} />*/}
        <Container>
          <Row>
            {
            pokemons.map((pokemon,key) =>{
                  return <Col sm={2} md={3}>
                   <div key={key} className="bloc-pokemon item-center offset-2">
                          <Card border="dark" className="cardColor cardSize">
                            <Card.Body>
                              <Card.Title className="cardTitle text-center zero-marg">
                                      {(pokedex.find(pokedex => pokemon.name===pokedex.name)?
                                      (
                                      <Container>
                                        <Row>
                                          <Col className="zero-padd zero-marg col-3"><p className="text-center">{pokemon.numero}</p></Col>
                                          <Col className="zero-padd zero-marg col-9"><p className="text-center">{pokemon.name} <img src={pokeball} alt="pokeball icon"/></p></Col>
                                        </Row>
                                      </Container>  
                                        ):
                                      (
                                      <Container>
                                        <Row>
                                          <Col className="zero-padd zero-marg col-3"><p className="text-center">{pokemon.numero}</p></Col>
                                          <Col className="zero-padd zero-marg col-9"><p className="text-center">{pokemon.name}</p></Col>
                                        </Row>
                                      </Container> 
                                      ))}

                              </Card.Title>
                              <Card.Img className="pkmSize" variant="top" src={pokemon.img} />
                              <Card.Text>
                              {
                                pokemon.types.map((pokeType,key)=>{
                                  const rightType = type.find(type => type.type===pokeType);
                                  return (rightType?<img src={rightType.img} style={{ width: '5.5rem' }} alt="type logo"/>:null);
                                })
                              }
                              </Card.Text>
                              {
                              (!pokedex.find(pokedex => pokemon.name===pokedex.name)?<Button variant='light' onClick={async()=>{
                                await addPokedex(pokemon)
                                refreshPage()
                              }}
                                >Capturer !</Button>:null)  
                              }
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

export default PokePage;

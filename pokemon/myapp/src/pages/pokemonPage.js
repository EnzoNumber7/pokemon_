import Menu from "../components/menu";
import React, { useEffect, useState } from "react";
import { getPoke,getType } from "../api/pokemon";
import Card from 'react-bootstrap/Card';


function PokePage(props){
    const [ pokemons, setPokemons ] = useState([]);
    const [type, setType] = useState([])

    //va s'executer seulement au lancement du composant (dep: [])
    useEffect(() => {
    // récupérer la liste des users seulement au chargement du composant ! 
    const pokemonsFetched = getPoke();
    pokemonsFetched
        .then(result => setPokemons(result))
        .catch(error=>console.error("Erreur avec notre API :",error.message))

      // récupérer la liste des users seulement au chargement du composant ! 
    const typeFetched = getType();
    typeFetched
        .then(result => setType(result))
        .catch(error=>console.error("Erreur avec notre API :",error.message));
    },[]);
    return <div>
        <Menu />
        <div>
      {
        pokemons.map((pokemon,key) =>{
          return <div key={key} className="bloc-pokemon">
            <Card className="cardColor" style={{ width: '10rem' }}>
              <Card.Body>
                <Card.Title className="cardTitle text-center">{pokemon.numero}:{pokemon.name}</Card.Title>
                <Card.Img variant="top" src={pokemon.img} />
                <Card.Text className="text-center">
                  {type.map((type,key) =>{
                    return  (type.type===pokemon.types[1])?<img src={type.img} style={{ width: '4.5rem' }} alt="type logo"/>+" ":(type.type===pokemon.types[0]?<img src={type.img} style={{ width: '4.5rem' }} alt="type logo"/>:"")})}
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
        })}
        
        </div>
    </div>;
}

export default PokePage;
import React, { useState,useEffect } from 'react';
import {getType,updatePoke} from '../api/pokemon';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import {useForm} from 'react-hook-form'


function UpdateModal(props) {
    const { register, handleSubmit } = useForm();
    const [show, setShow] = useState(false);
    const handleShow = () => setShow(true);
    const handleClose = () => setShow(false);
    const onSubmit = (data) => {
      console.log(data);
      
      updatePoke(data);
    }
    const [type, setType] = useState([]);

    useEffect(() => {
      // récupérer la liste des users seulement au chargement du composant ! 
      const typeFetched = getType();
        typeFetched
          .then(result => setType(result))
          .catch(error=>console.error("Erreur avec notre API :",error.message));
    },[]);
    
  
    return (
      <>
        <Button className="btn-size" variant="light" size="sm" onClick={handleShow}>Modifier</Button>
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Modifier le Pokémon</Modal.Title>
          </Modal.Header>
          <Modal.Body>
              <form onSubmit={handleSubmit(onSubmit)}>
                  <input {...register("name")} defaultValue={props.pokemon.name} placeholder="Nom du Pokémon :" />
                  <input {...register("numero")} defaultValue={props.pokemon.numero} placeholder="Numéro du pokémon dans le pokédex :" />
                  <select defaultValue={props.pokemon.types} multiple {...register("types[]", { required: true })}>
                    {
                      type.map(typ=><option value={typ.type}>{typ.type}</option>)
                    }
                  </select>
                  <input {...register("img")} defaultValue={props.pokemon.img} placeholder="Lien de l'image :" />
                  <Button type="submit" variant="primary">Save Changes</Button>
              </form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
    }

export default UpdateModal;

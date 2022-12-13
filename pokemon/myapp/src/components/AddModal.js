import React, { useState,useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import {useForm} from 'react-hook-form'
import {addPoke,getType} from '../api/pokemon';
import plus from '../img/plus.png';

function AddModal() {
    const [show, setShow] = useState(false);
    const { register, handleSubmit } = useForm();
    const onSubmit = (data) => {
        data.types=Array(data.types)
        addPoke(data)
      /*Coder ici pour préparer l'appel réseau POST avec FETCH !*/
      //On peut transformer les données en JSON pour les envoyer dans notre appel
      //JSON.stringify(data);
    }
    const [type, setType] = useState([]);

    useEffect(() => {
      // récupérer la liste des users seulement au chargement du composant ! 
      const typeFetched = getType();
        typeFetched
          .then(result => setType(result))
          .catch(error=>console.error("Erreur avec notre API :",error.message));
    },[]);

    const handleShow = () => setShow(true);
    const handleClose = () => setShow(false);
    return (
        <>
          <Button className='add-btn' variant='light' size="sm" onClick={handleShow}><img src={plus}/></Button>
          <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>Ajouter un nouveau pokemon</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <input {...register("numero")} placeholder="Numero du pokemon" />
                    <input {...register("name")} placeholder="Nom du Pokémon :" />
                    <select {...register("types", { required: true })}>
                      {type.map(typ=><option value={typ.type}>{typ.type}</option>)}
                        <option value={type.type}>{type.type}</option>
                    </select>
                    <input {...register("img")} placeholder="Lien de l'image :" />
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

export default AddModal;

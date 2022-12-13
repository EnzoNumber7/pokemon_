import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import {useForm} from 'react-hook-form'
import {addPoke} from '../api/pokemon';

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

    const handleShow = () => setShow(true);
    const handleClose = () => setShow(false);
    return (
        <>
          <Button variant="light" size="sm" onClick={handleShow}>Ajouter</Button>
          <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>Ajouter un nouveau pokemon</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <input {...register("numero")} placeholder="Numero du pokemon" />
                    <input {...register("name")} placeholder="Nom du Pokémon :" />
                    <select {...register("types", { required: true })}>
                        <option value="Eau">Eau</option>
                        <option value="Plante">Plante</option>
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
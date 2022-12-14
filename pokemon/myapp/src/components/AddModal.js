import React, { useState,useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import {useForm} from 'react-hook-form'
import {addPoke,getType} from '../api/pokemon';
import plus from '../img/plus.png';
import Form from 'react-bootstrap/Form';

function AddModal() {
    const [show, setShow] = useState(false);
    const { register, handleSubmit } = useForm();
    const onSubmit = (data) => {
        data.types=[data.type1,data.type2]
        delete data.type1
        delete data.type2
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
          <Button className='add-btn' variant='light' size="sm" onClick={handleShow}><img src={plus} alt="plus"/></Button>
          <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>Ajouter un nouveau pokemon</Modal.Title>
            </Modal.Header>
            <Modal.Body>


                <Form onSubmit={handleSubmit(onSubmit)}>
                  <Form.Group className="mb-3">
                    <Form.Label>Numero du pokemon</Form.Label>
                    <Form.Control {...register("numero")} placeholder="Ex: 129" />
                  </Form.Group>

                  <Form.Group className="mb-3">
                    <Form.Label>Nom du pokemon</Form.Label>
                    <Form.Control {...register("name")} placeholder="Ex: Magicarpe" />
                  </Form.Group>

                  <Form.Group className="mb-3" >
                    <Form.Select {...register("type1", { required: true })}>
                      {type.map(typ=><option value={typ.type}>{typ.type}</option>)}
                        <option value={type.type}>{type.type}</option>
                    </Form.Select>
                    <Form.Select {...register("type2", { required: true })}>
                      <option value={null}>None</option>
                      {type.map(typ=><option value={typ.type}>{typ.type}</option>)}
                        <option value={type.type}>{type.type}</option>
                    </Form.Select>
                  </Form.Group>

                  <Form.Group className="mb-3">
                    <Form.Label>Liens image</Form.Label>
                    <Form.Control {...register("img")} placeholder="Liens image" />
                  </Form.Group>
                  <Button variant="primary" type="submit" onClick={handleClose}>Ajouter</Button>
              </Form>
            </Modal.Body>
          </Modal>
        </>
      );
}

export default AddModal;

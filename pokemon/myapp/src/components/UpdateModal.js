import React, { useState,useEffect } from 'react';
import {getType,updatePoke} from '../api/pokemon';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import {useForm} from 'react-hook-form'


function UpdateModal(props) {
    const secondType= props.pokemon.types.length===2?props.pokemon.types[1]:null;
    const { register, handleSubmit } = useForm();
    const [show, setShow] = useState(false);
    const handleShow = () => setShow(true);
    const handleClose = () => setShow(false);
    function refreshPage() {
      window.location.reload(false);
    }

    const onSubmit = async (data) => {  
      data.types=[data.type1,data.type2]
      delete data.type1
      delete data.type2
      await updatePoke(data);
      refreshPage()
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

                <Form onSubmit={handleSubmit(onSubmit)}>
                  <Form.Group className="mb-3">
                    <Form.Label>Numéro du pokemon</Form.Label>
                    <Form.Control defaultValue={props.pokemon.numero} {...register("numero")} />
                  </Form.Group>

                  <Form.Group className="mb-3">
                    <Form.Label>Nom du Pokémon</Form.Label>
                    <Form.Control defaultValue={props.pokemon.name} {...register("name")}  />
                  </Form.Group>

                  <Form.Group className="mb-3" >
                    <Form.Label>Changer le(s) type(s) du Pokémon</Form.Label>
                    <Form.Select defaultValue={props.pokemon.types[0]} {...register("type1", { required: true })}>
                      {type.map(typ=><option value={typ.type}>{typ.type}</option>)}
                        <option value={type.type}>{type.type}</option>
                    </Form.Select>
                    <Form.Select defaultValue={secondType} {...register("type2", { required: true })}>
                    <option value={null}>Pas de second type</option>
                      {type.map(typ=><option value={typ.type}>{typ.type}</option>)}
                        <option value={type.type}>{type.type}</option>
                    </Form.Select>
                  </Form.Group>

                  <Form.Group className="mb-3">
                    <Form.Label>Lien de l'image</Form.Label>
                    <Form.Control defaultValue={props.pokemon.img} {...register("img")} />
                  </Form.Group>
                  <Button variant="primary" type="submit" >Modifer</Button>
              </Form>
            </Modal.Body>
          </Modal>
      </>
    );
    }

export default UpdateModal;

//<Button className='add-btn' variant='light' size="sm" onClick={handleShow}><img src={plus}/></Button>
          
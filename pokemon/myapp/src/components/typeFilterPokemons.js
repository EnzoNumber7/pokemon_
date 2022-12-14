import {getPoke,getType} from '../api/pokemon';
import React, { useEffect, useState } from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

function Filter (props) {
    const [type, setType] = useState([]);
    function refreshPage() {
        window.location.reload(false);
    }

    useEffect(() => {
    
    
        const typeFetched = getType();
        typeFetched
            .then(result => setType(result))
            .catch(error=>console.error("Erreur avec notre API :",error.message));
    },[]);

    
    
    return <Container>
        <Row>
            <Col>
            <Form.Select>
                <option value={null}>Pas de filtre type</option>
                {type.map(typ=><option value={typ.type}>{typ.type}</option>)}
                <option value={type.type}>{type.name}</option>
            </Form.Select>
            </Col>
            <Col>
            <Form.Select>
                <option value={null}>Pas de filtre type</option>
                {type.map(typ=><option value={typ.type}>{typ.type}</option>)}
                <option value={type.type}>{type.name}</option>
            </Form.Select>
            </Col>
            <Col>
            <Button className="btn-size" size="sm" variant="light" onClick={async()=>{refreshPage()}}>Appliquer</Button>
            </Col>
        </Row>
    </Container>
}


export default Filter;

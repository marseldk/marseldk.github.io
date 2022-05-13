//import hook useState from react
import { useState } from 'react';

//import component Bootstrap React
import { Card, Container, Row, Col , Form, Button, Alert } from 'react-bootstrap';

//import axios
import axios from 'axios';

//import hook history dari react router dom
import { useHistory, useParams } from "react-router-dom";

function CreateLocation() {

    //state
    // const [name1, setName] = useState('');
    const [location, setLocation] = useState('');

    //state validation
    const [validation, setValidation] = useState({});

    //history
    const history = useHistory();

    //method "storePost"
    const storeLocation = async (e) => {
        e.preventDefault();
        const name1 = document.getElementById('formBasicEmail').value;
        const id = document.getElementById('formBasicId').value;
        const data = {name:name1, location:location, id:id}
        // console.log(data)
        localStorage.setItem(`username${id}`, JSON.stringify(data))
        history.push(`/posts`);
        //send data to server
        /*await axios.post('http://localhost:3000/api/posts/store', {
            name: name1,
            location: location
        })
        .then(() => {

            //redirect
            history.push('/posts');

        })
        .catch((error) => {

            //assign validation on state
            setValidation(error.response.data);
        })*/
        
    };

    const { name } = useParams();

    const { id } = useParams();

    return (
        <Container className="mt-3">
            <Row>
                <Col md="{12}">
                    <Card className="border-0 rounded shadow-sm">
                        <Card.Body>
                            <Form onSubmit={ storeLocation }>
                                <Form.Group className="mb-3" controlId="formBasicId" hidden>
                                    <Form.Label>Name</Form.Label>
                                    <Form.Control type="text" value={id} readOnly/>
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Label>Name</Form.Label>
                                    <Form.Control type="text" value={name} readOnly/>
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="formBasicPassword">
                                    <Form.Label>Location</Form.Label>
                                    <Form.Control as="textarea" rows={3} value={location} onChange={(e) => setLocation(e.target.value)} placeholder="Masukkan Location" />
                                </Form.Group>

                                <Button variant="primary" type="submit">
                                    SIMPAN
                                </Button>
                            </Form>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
}

export default CreateLocation;
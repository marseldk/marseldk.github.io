//import hook useState dan useEffect from react
// import { useState, useEffect } from 'react';
import React, { useState, useEffect } from 'react'

//import react router dom
import { Link,useParams } from "react-router-dom";

//import component Bootstrap React
import { Card, Container, Row, Col, Button, Table, Image } from 'react-bootstrap';

function DetailChar() {
    
    //define state
    const [chars, setChars] = useState([]);

    //function "fetchData"
    const fectData = async () => {
        //fetching
        const response = await fetch('https://rickandmortyapi.com/api/character');
        //get response data
        const data = await response.json()
        const users = data.results
        // console.log(users.length)
        /* const userstest = Array() */
        /* const i = 0
        for(i=0 ; i<users.length; i++) {
            console.log("test")
            if (users[i].id != 1)continue
            const userstest = users[i]
            setChars1(userstest);
        } */
        //assign response data to state "posts"
        setChars(users);
    }

    useEffect(() => {
        fectData()
    }, [])

    /* var recievedMessage = this.props.location.state.message
    console.log(recievedMessage) */

    const { id } = useParams();
    const { name } = useParams();
    const { status } = useParams();
    const { gender } = useParams();
    const { species } = useParams();
    // console.log(id,name)

    return (
        <Container  className="mt-3">
            <Row>
                <Col md="{12}">
                    <Card className="border-0 rounded shadow-sm">
                        <Card.Body>
                            <h3>Character Detail</h3>
                            <Table autoWidth striped bordered hover>
                                <thead>
                                    <tr>
                                        <th>No.</th>
                                        <th>Picture</th>
                                        <th>Name</th>
                                        <th>Gender</th>
                                        <th>Species</th>
                                        <th>Status</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                    <td>{id}</td>
                                    <td><Image style={{height:'auto', width:'auto'}} src={"https://rickandmortyapi.com/api/character/avatar/" + id + ".jpeg"} className='img-fluid rounded'/></td>
                                    <td>{name}</td>
                                    <td>{gender}</td>
                                    <td>{species}</td>
                                    <td>{status}</td>
                                    </tr>
                                </tbody>
                            </Table>
                            <Button as={Link} to="/char/create" variant="success" className="mb-3">Choose Location</Button>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
}

export default DetailChar;
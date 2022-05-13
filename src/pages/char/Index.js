// import { useState, useEffect } from 'react';
import React, { useState, useEffect } from 'react'

//import react router dom
import { Link } from "react-router-dom";

//import component Bootstrap React
import { Card, Container, Row, Col, Button, Table, Image } from 'react-bootstrap';

function IndexChar() {
    
    //define state
    const [chars, setChars] = useState([]);

    //function "fetchData"
    const fectData = async () => {
        //fetching
        const response = await fetch('https://rickandmortyapi.com/api/character');
        //get response data
        const data = await response.json()
        const users = data.results.slice(0, 2)
        //assign response data to state "posts"
        setChars(users);
    }

    useEffect(() => {
        fectData()
    }, [])

    return (
        <Container className="mt-3">
            <Row>
                <Col md="{12}">
                    <Card className="border-0 rounded shadow-sm">
                        <Card.Body>
                            <h3>Character List</h3>
                            {/*<Button as={Link} to="/posts/create" variant="success" className="mb-3">TAMBAH POST</Button>*/}
                            <Table striped bordered hover className="mb-1">
                                <thead>
                                    <tr>
                                        <th>No.</th>
                                        <th>Picture</th>
                                        <th>Character Name</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    { chars.map((char, index) => (
                                        <tr key={ char.id }>
                                            <td>{ index + 1 }</td>
                                            <Link to={`/detail/${char.id}/${char.name}/${char.status}/${char.gender}/${char.species}`}><td><Image style={{height:'auto', width:'auto'}} src={char.image} className='img-fluid rounded'/></td></Link>
                                            <td>{ char.name }</td>
                                        </tr>
                                    )) }
                                </tbody>
                            </Table>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
}

export default IndexChar;
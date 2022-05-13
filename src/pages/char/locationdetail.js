//import hook useState dan useEffect from react
import { useState, useEffect } from 'react';

//import react router dom
import { useParams, Link } from "react-router-dom";

//import component Bootstrap React
import { Card, Container, Row, Col, Table } from 'react-bootstrap';

function LocationDetail() {

    //define state
    const [posts, setPosts] = useState([]);
    // const lokasi = JSON.parse(localStorage.getItem("username1"))

    let lokasi2 = ""

    if (JSON.parse(localStorage.getItem("username2"))){
        lokasi2 = JSON.parse(localStorage.getItem("username2"))
    }

    let lokasi = ""

    if (JSON.parse(localStorage.getItem("username1"))){
        lokasi = JSON.parse(localStorage.getItem("username1"))
    }


    const { lokasiparam } = useParams();
    // console.log(lokasiparam)

    return (
        <Container className="mt-3">
            <Row>
                <Col md="{12}">
                    <Card className="border-0 rounded shadow-sm">
                        <Card.Body>
                            <Table striped bordered hover className="mb-1">
                                <thead>
                                    <tr>
                                        <th colspan="2">List Person In {lokasiparam}</th>
                                    </tr>
                                </thead>
                                <tbody>
                                {
                                    (() => {
                                        if(lokasi.location == lokasi2.location){
                                            return(
                                                <tr>
                                                <td>{lokasi.name}</td>
                                                <td>{lokasi2.name}</td>
                                                </tr>
                                            )
                                        }
                                        else if(lokasi.location == lokasiparam){
                                            return (
                                                <tr>
                                                <td>{lokasi.name}</td>
                                                </tr> 
                                            )
                                        }
                                        else{
                                            return(
                                                <tr>
                                                <td>{lokasi2.name}</td>
                                                </tr>
                                            )
                                        } 
                                    })()  
                                }  
                                </tbody>
                            </Table>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
}

export default LocationDetail;
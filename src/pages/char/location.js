//import hook useState dan useEffect from react
import { useState, useEffect } from 'react';

//import react router dom
import { Link } from "react-router-dom";

//import component Bootstrap React
import { Card, Container, Row, Col, Table } from 'react-bootstrap';

function PostIndex() {

    //define state
    const [posts, setPosts] = useState([]);
    let lokasi = ""

    if (JSON.parse(localStorage.getItem("username1"))){
        lokasi = JSON.parse(localStorage.getItem("username1"))
    }
    // const lokasi = JSON.parse(localStorage.getItem("username1"))

    let lokasi2 = ""

    if (JSON.parse(localStorage.getItem("username2"))){
        lokasi2 = JSON.parse(localStorage.getItem("username2"))
    }

    return (
        <Container className="mt-3">
            <Row>
                <Col md="{12}">
                    <Card className="border-0 rounded shadow-sm">
                        <Card.Body>
                            <Table striped bordered hover className="mb-1">
                                <thead>
                                    <tr>
                                        <th colspan="2">Location</th>
                                    </tr>
                                </thead>
                                <tbody>
                                {
                                    (() => {
                                        if(lokasi.location == lokasi2.location || lokasi2.location == null){
                                            return(
                                                <tr>
                                                <td><Link to={`/location/${lokasi.location}`}>{lokasi.location}</Link></td>
                                                </tr>
                                            )
                                        }else if (lokasi.location == lokasi2.location || lokasi.location == null) {
                                            return(
                                                <tr>
                                                <td><Link to={`/location/${lokasi2.location}`}>{lokasi2.location}</Link></td>
                                                </tr>
                                            )
                                        }
                                        else{
                                            return(
                                                <tr>
                                                <td><Link to={`/location/${lokasi.location}`}>{lokasi.location}</Link></td>
                                                <td><Link to={`/location/${lokasi2.location}`}>{lokasi2.location}</Link></td>
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

export default PostIndex;
import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Navbar from '../components/Navbar';
import Searchbar from '../components/Searchbar';

import '../styles/pages/landing.css';

export default function Landing(){
    return(
        <div id="page-landing">
            <Container>
                <Row className="content-wrapper">
                    <Col>
                        <Navbar />
                        <main>
                            <h1>Seu novo melhor amigo ta aqui.</h1>
                        </main>
                        <Searchbar />
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
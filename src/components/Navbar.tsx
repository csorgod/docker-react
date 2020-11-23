import React from 'react';
import { Navbar as NavBar, Nav } from 'react-bootstrap';

import '../styles/components/navbar.css';

export default function Navbar() {
    return (
        <NavBar bg="transparent" expand="lg">
            <NavBar.Brand href="#home">
                <img alt="LOGO"/>
            </NavBar.Brand>
            <NavBar.Toggle />
            <NavBar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link href="/about">Sobre nós</Nav.Link>
                    <Nav.Link href="#link">Seja um doador</Nav.Link>
                </Nav>
                <Nav>
                    <Nav.Link href="#home">Login</Nav.Link>
                </Nav>
            </NavBar.Collapse>
        </NavBar>
    );
}
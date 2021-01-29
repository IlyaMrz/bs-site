import React, { useState } from 'react';
import { Nav, Navbar, Button, Container, Form, Modal, } from 'react-bootstrap';
import {Link} from "react-router-dom";
import styled from 'styled-components';

const Styles = styled.div `
    a, .navbar-brand, .navbar-nav, .navlink {
        color: #adb1b8;
        &:hover {
            color: white
        }
    }
`

function NaviBar() {
    const [show, setShow] = useState(false);
    const handleClose =() => setShow(false);
    const handleShow = () => setShow(true);
    return(
        <>
        <Styles>
            <Navbar collapseOnSelect expand='lg' bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand>WebDev Blog</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-Navbar-nav"/>
                    <Navbar.Collapse id="responsive-Navbar-nav">
                        <Nav className="mr-auto">
                            <Nav.Link><Link to="/">Home</Link></Nav.Link>
                            <Nav.Link><Link to="/users">Users</Link></Nav.Link>
                            <Nav.Link><Link to="/about">About</Link></Nav.Link>
                        </Nav>
                        <Nav>
                            <Button variant="primary" className="m-1" onClick={handleShow}>Log In</Button>
                            <Button variant="primary" className="m-1" onClick={handleShow}>Sign Out</Button>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </Styles>
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Log in</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Email Adress</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" />
                        <Form.Text className="text-muted">We'll never share your email with 3rd side</Form.Text>
                    </Form.Group>
                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Enter password" />
                    </Form.Group>
                    <Form.Group controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="remeber me" />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
            </Modal.Body>
        </Modal>

    </>
    )
}

export default NaviBar; 
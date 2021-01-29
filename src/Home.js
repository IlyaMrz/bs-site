import React from 'react';
import Slider from './Components/Slider'
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import Jumbotron from './Components/Jumbotron';

function Home() {
    return(
        <>
            <Slider />
            <Container style={{paddingTop: '2rem',paddingBottom: '2rem'}}>
                <Row>
                    <Col>
                        <Card style={{width: '18rem'}}>
                            <Card.Img variant="top" src="https://images.unsplash.com/photo-1588225802522-66a2d6527a27?"/>
                            <Card.Body>
                                <Card.Title>WEbDev Blog</Card.Title>
                                <Card.Text>Text of card.text</Card.Text>
                                <Button variant="primary">Learn more...</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card style={{width: '18rem'}}>
                            <Card.Img variant="top" src="https://images.unsplash.com/photo-1458014350714-9881b36c0778"/>
                            <Card.Body>
                                <Card.Title>WEbDev Blog</Card.Title>
                                <Card.Text>Text of card.text</Card.Text>
                                <Button variant="primary">Learn more...</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card style={{width: '18rem'}}>
                            <Card.Img variant="top" src="https://images.unsplash.com/photo-1591243698028-d4ee08022d0f"/>
                            <Card.Body>
                                <Card.Title>WEbDev Blog</Card.Title>
                                <Card.Text>Text of card.text</Card.Text>
                                <Button variant="primary">Learn more...</Button>
                            </Card.Body>
                        </Card>
                    </Col>

                </Row>
            </Container>
            <Jumbotron />
            <Container style={{marginBottom:'2rem'}}>
                <Row>
                    <Col md={7}>
                        <img src="https://images.unsplash.com/photo-1583266387827-e4c6ac214a0a" height={300}/>
                    </Col>
                    <Col md={5}>
                        <h2>Web Developer Blog</h2>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum</p>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default Home;
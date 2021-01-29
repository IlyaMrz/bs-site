import React from 'react';
import {Container} from 'react-bootstrap';

function Footer() {
    return(
        <Container fluid style={{ backgroundColor: '#212529', color: '#fff'}}>
            <Container style={{ display: 'flex', justifyContent:'center', padding: '12px'}}>
                <p>Web Developer Blog</p>
            </Container>
        </Container>
    )
}

export default Footer;
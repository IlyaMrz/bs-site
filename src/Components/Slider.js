import React from 'react';
import {Carousel} from 'react-bootstrap';

function NaviBar() {
    return(
        <Carousel>
            <Carousel.Item style={{'height':'200px'}}>
                <img
                className="d-block w-100"
                src="https://images.unsplash.com/photo-1560814304-4f05b62af116"
                alt="First slide"
                style={{'position': 'absolute',
                    'bottom': '0'}}
                />
                <Carousel.Caption>
                    <h3>First Slide</h3>
                    <p>khe khe p under first slide</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item style={{'height':'200px'}}>
                <img
                className="d-block w-100"
                src="https://images.unsplash.com/photo-1587351156331-f833af4a3350"
                alt="First slide"
                style={{'position': 'absolute',
                    'bottom': '0'}}
                />
                <Carousel.Caption>
                    <h3>First Slide</h3>
                    <p>khe khe p under first slide</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item style={{'height':'200px'}}>
                <img
                className="d-block w-100"
                src="https://images.unsplash.com/photo-1544161513-0179fe746fd5"
                alt="First slide"
                style={{'position': 'absolute',
                    'bottom': '0'}}
                />
                <Carousel.Caption>
                    <h3>First Slide</h3>
                    <p>khe khe p under first slide</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    )
}

export default NaviBar; 
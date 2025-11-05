import React from 'react'
import { Carousel } from "react-bootstrap"

const LandingPage = () => {
    return (
        <div>
            <Carousel fade>
                <Carousel.Item>
                    <img src='https://graphicsfamily.com/wp-content/uploads/edd/2022/08/Food-Menu-Instagram-Carousel-Design-scaled.jpg' alt='img' style={{ objectFit: "cover", width: "100%", height: "800px" }} />
                    <Carousel.Caption>
                        <h3>First slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img src='https://yi-files.yellowimages.com/products/1112000/1112654/1864462-full.jpg' alt='img' style={{ objectFit: "cover", width: "100%", height: "800px" }} />
                    <Carousel.Caption>
                        <h3>Second slide label</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img src='https://i.deeezy.com/uploads/thumbnails/213/21348-a244d775662ca16ec674b5d7da953c39.jpg' alt='img' style={{ objectFit: "cover", width: "100%", height: "800px" }} />
                    <Carousel.Caption>
                        <h3>Third slide label</h3>
                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    )
}

export default LandingPage
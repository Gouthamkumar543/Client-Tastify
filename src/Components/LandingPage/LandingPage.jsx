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
                    <img src='https://png.pngtree.com/background/20250105/original/pngtree-asian-food-background-with-various-ingredients-on-rustic-stone-picture-image_15454529.jpg' alt='img' style={{ objectFit: "cover", width: "100%", height: "800px" }} />
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
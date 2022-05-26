import { Carousel } from "react-bootstrap";
import React from "react";
import photo1 from "../../img/photo1.jpeg";
import photo2 from "../../img/photo2.jpeg";
import photo3 from "../../img/photo3.jpeg";
import photo4 from "../../img/photo4.jpeg";
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";

const Home = () => {
  return (
    <>
      <Carousel>
        <Carousel.Item>
          <img
            className='d-block w-100 active'
            src={photo1}
            alt='First slide'
          />
          <Carousel.Caption>
            <h3>Raising Confident Kids </h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className='d-block w-100' src={photo2} alt='Second slide' />

          <Carousel.Caption>
            <h3>Interested in their Environment</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className='d-block w-100' src={photo3} alt='Third slide' />

          <Carousel.Caption>
            <h3>Compassionately Caring</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className='d-block w-100' src={photo4} alt='Third slide' />

          <Carousel.Caption>
            <h3>With Neo-Traditional Family Values</h3>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </>
  );
};

export default Home;

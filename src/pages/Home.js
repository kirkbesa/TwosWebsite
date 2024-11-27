import './Home.css'; 
import Image1 from '../images/Image1.jpg'; 
import Image2 from '../images/Image2.jpg';
import Image3 from '../images/Image3.jpg';
import Image4 from '../images/Image4.jpg';
import Image5 from '../images/Image5.jpg';
import marker from '../images/marker.png';
import newsImg from '../images/news.jpg';
import Footer from '../components/Footer.js';

import Carousel from 'react-bootstrap/Carousel';

import React, { useState, useEffect } from 'react';

const Home = () => {

  return (
    <>
    <div id='homeBGContainer'>
      <div id='homeContainer' className='fade-in'>
        <div id='imageCarousel'>
          <Carousel>
            <Carousel.Item>
              <img className="carouselImg d-block w-100" src={Image1} alt="First slide" />
            </Carousel.Item>
            <Carousel.Item>
              <img className="carouselImg d-block w-100" src={Image2} alt="Second slide" />
            </Carousel.Item>
            <Carousel.Item>
              <img className="carouselImg d-block w-100" src={Image3} alt="Third slide" />
            </Carousel.Item>
            <Carousel.Item>
              <img className="carouselImg d-block w-100" src={Image4} alt="Fourth slide" />
            </Carousel.Item>
            <Carousel.Item>
              <img className="carouselImg d-block w-100" src={Image5} alt="Fifth slide" />
            </Carousel.Item>
          </Carousel>
        </div>
        
        <div id="secondRow">
          <div className='sRow' id='AboutUsContainer'>
            <div className='aboutUsDiv'>
            <h2>About Us</h2>
            <img className="markerCircle" src={marker} alt="circle"/>
            </div>
            <p>
            Nestled in the heart of Marikina, Two’s serves up the perfect combination of flavor, quality, and comfort. Our burgers are crafted with the finest locally sourced ingredients, from juicy, perfectly seasoned patties to freshly baked buns. Masarap dito man promise.
            </p>
            <div class="mapswrapper">
              <iframe loading="lazy" title="twos" allowfullscreen src="https://www.google.com/maps/embed/v1/place?key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8&q=twos&zoom=12&maptype=roadmap"></iframe>
            </div>
          </div>
          <div className='sRow' id='PromosContainer'>
            <div className='promosDiv'>
              <h2 className='promosText'>News</h2>
              <img className="markerCircle" src={marker} alt="circle"/>
            </div>
            <img className="promoImg" src={newsImg} alt="promos"/>
          </div>
        </div>
        <Footer />
      </div>
    </div>

    </>
  ); 
};

export default Home;

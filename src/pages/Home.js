import './Home.css'; 
import Image1 from '../images/Image1.jpg'; 
import Image2 from '../images/Image2.jpg';
import Image3 from '../images/Image3.jpg';
import Image4 from '../images/Image4.jpg';
import Image5 from '../images/Image5.jpg';
import marker from '../images/marker.png';
import promoImg from '../images/promoImage1.jpg';

import Carousel from 'react-bootstrap/Carousel';

import React, { useState, useEffect } from 'react';

const Home = () => {

  return (
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
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
            </p>
            <div class="mapswrapper">
              <iframe loading="lazy" title="twos" allowfullscreen src="https://www.google.com/maps/embed/v1/place?key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8&q=twos&zoom=12&maptype=roadmap"></iframe>
            </div>
            <p>
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
            </p>
          </div>
          <div className='sRow' id='PromosContainer'>
            <div className='promosDiv'><h2>Promos</h2>
            <img className="markerCircle" src={marker} alt="circle"/>
            </div>
            <p>
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <img className="promoImg" src={promoImg} alt="promos"/>
          </div>
        </div>
      </div>
    </div>
  ); 
};

export default Home;

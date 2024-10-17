import './Home.css'; // Keep your styles here
import React, { useState } from 'react';
import Image1 from '../images/Image1.jpg'; 
import Image2 from '../images/Image2.jpg';
import Image3 from '../images/Image3.jpg';
import Image4 from '../images/Image4.jpg';
import Image5 from '../images/Image5.jpg';

const Home = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = [Image1, Image2, Image3, Image4, Image5];

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <div id='homeBGContainer'>
      <div id='homeContainer'>
        <div id='imageCarousel'>
          <div className='carouselImages'>
            <img src={images[currentIndex]} alt={`Dish ${currentIndex + 1}`} className="carousel-image"/>
            <button className='homeBtn' id="prev" onClick={prevSlide}>❮</button>
            <button className='homeBtn' id="next" onClick={nextSlide}>❯</button>  
          </div>
        </div>
        <div id="secondRow">
            <div className='sRow' id='AboutUsContainer'>
              <h2>About Us</h2>
              <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
            </div>
            <div className='sRow' id='PromosContainer'>
              <h2>Promos</h2>
              <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
            </div>
        </div>
      </div>
    </div>
  ); 
};

export default Home;

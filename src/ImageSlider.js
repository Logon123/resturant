import React from 'react';
import './ImageSlider.css'; 
import northIndianImg from '../src/assets/northIndianImg.png';
import southIndianImg from '../src/assets/southIndianImg.png';
import mainImg from '../src/assets/mainImg.png';

const ImageSlider = () => {
  return (
    <div id="carouselExample" className="carousel slide" data-ride="carousel">
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img src={northIndianImg} className="d-block w-100" alt="North Indian Cuisine" />
          <div className="carousel-caption d-none d-md-block">
            <h5>North Indian Cuisine</h5>
            <p>Delicious North Indian dishes made with authentic spices.</p>
          </div>
        </div>
        <div className="carousel-item">
          <img src={southIndianImg} className="d-block w-100" alt="South Indian Cuisine" />
          <div className="carousel-caption d-none d-md-block">
            <h5>South Indian Cuisine</h5>
            <p>Explore a variety of South Indian foods that are rich in flavor.</p>
          </div>
        </div>
            {/* ...start. */}
        <div className="carousel-item">
          <img src={mainImg} className="d-block w-100 Img" alt="Main Starter" />
          <div className="carousel-caption d-none d-md-block">
            <h5>Dessert</h5>
            <p>Dessert is a course that concludes a meal consists of sweet foods, such as cake, biscuit, ice cream.</p>
          </div>
        </div>
        {/* .End. */}
      </div>
      <a className="carousel-control-prev" href="#carouselExample" role="button" data-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="sr-only">Previous</span>
      </a>
      <a className="carousel-control-next" href="#carouselExample" role="button" data-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="sr-only">Next</span>
      </a>
    </div>
  );
};

export default ImageSlider;

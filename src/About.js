import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css'; 
import image1 from './assets/8.png'; 
import image2 from './assets/22.png';
import image3 from './assets/pata.png';

const About = () => {
  return (
    <section id="about" className="py-5">
      <h1 style={{marginLeft: '520px', marginTop:'-90px', color:'red'}}>About Think</h1>
      <div className="container">
        <div className="row align-items-center mb-3">
          <div className="col-md-6">
            <img src={image1} alt="About Us" className="img-fluid imge animate__animated animate__flash " />
            <img src={image3} alt="Pattta" className="img-fluid animate__animated animate__flash pattta" />
          </div>
          <div className="col-md-6">
            <h2 className="animate__animated animate__fadeInRight">About Us</h2>
            <p className="animate__animated animate__fadeInRight">We are committed to providing the best services. Welcome to Foody Restaurant, where passion meets flavor! Established in [2022], we pride ourselves on serving delicious, handcrafted dishes made from the freshest local ingredients. Our dedicated team is committed to providing a warm and inviting atmosphere for every guest. Join us for a memorable dining experience that celebrates community and culinary excellence!. Our team is dedicated to excellence and innovation in every project.</p>
            <p className="animate__animated animate__fadeInRight"><h3>Our Vision</h3><br />
            To be a leading dining destination that brings people together through exceptional food and memorable experiences.</p>
          </div>
        </div>

        <div className="row align-items-center">
          <div className="col-md-6 order-md-2">
            <img src={image2} alt="Our Mission" className="img-fluid msne" />
          </div>
          <div className="col-md-6">
            <h2 className="animate__animated animate__fadeInLeft">Our Mission</h2>
            <p className="animate__animated animate__fadeInLeft mission">Delivering high-quality solutions to our clients. To create delicious, high-quality dishes using fresh, local ingredients while providing outstanding service and a welcoming atmosphere for our guests.The aim of Foody Restaurant is to bring the original taste of South Indian foods to people all over the country. Foody Restaurant provides various hospitality experiences like a fine dining experience, outdoor catering.</p>
            <p className="animate__animated animate__fadeInLeft mission">To serve delicious, locally-sourced food while creating a welcoming atmosphere for all our guests. Fostering a culture of innovation and collaboration. At Foody Restaurant, our mission is to provide an unforgettable dining experience by serving delicious, locally-sourced meals with exceptional service in a warm and inviting atmosphere. 
Our mission at foody is to delight our guests with fresh, flavorful dishes while fostering a welcoming environment that feels like home.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

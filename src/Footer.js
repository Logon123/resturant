import React from 'react';
import  './Footer.css';
import insta from '../src/assets/insta.png';
import face from '../src/assets/facebook.png';
import ytube from '../src/assets/yutub.png';
const Footer = () => {
  return (
    <footer id="contact" className="py-2" style={{ backgroundColor: '#DC3545', color: 'white' }}>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-6">
            <h5>Contact Us</h5>
            <p>
              Address: 123 Street, Chandigarh, India <br />
              Phone: +91 99559 99559 <br />
              Email: info@foodyrestaurant.com
            </p>
          </div>
          <div className="col-md-6 text-center">
            <h5>Follow Us</h5>
            <ul className="list-inline">
              <li className="list-inline-item">
                <a href="/"  className="social-link"> 
                <img src={face} alt="face" /> Facebook</a>
              </li>
              {/* <li className="list-inline-item">
                <a href="/" className="social-link">
                <img src={insta} alt="Insta" />Twitter</a>
              </li> */}
              <li className="list-inline-item">
                <a href="/"  className="social-link">
                <img src={insta} alt="Insta" />Instagram</a>
              </li>
              <li className="list-inline-item">
                <a href="/"  className="social-link">
                <img src={ytube} alt="Insta" />Youtube</a>
              </li>
            </ul>
          </div>
        </div>
        <hr style={{ backgroundColor: 'white' }} />
        <div className="row">
          <div className="col-12 text-center">
            <p>&copy; 2024 Foody Restaurant. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

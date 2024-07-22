import React, { useEffect, useState } from 'react';

const Footer = () => {
   const [showScroll, setShowScroll] = useState(false);
    const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };
  useEffect(() => {
    const handleScroll = () => {
      if (window.pageYOffset > 300) {
        setShowScroll(true);
      } else {
        setShowScroll(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <footer id="footer" className="py-2" style={{ backgroundColor: '#DC3545', color: 'white' }}>
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
            <ul className="list-inline" style={{ marginLeft: '10px' }}>
              <li className="list-inline-item"><i className="bi bi-facebook"></i><a href="/" style={{ color: 'white', marginLeft: '5px' }}>Facebook</a></li>
              <li className="list-inline-item"><i className="bi bi-twitter"></i><a href="/" style={{ color: 'white', marginLeft: '5px' }}>Twitter</a></li>
              <li className="list-inline-item"><i className="bi bi-instagram"></i><a href="/" style={{ color: 'white', marginLeft: '5px' }}>Instagram</a></li>
            </ul>
          </div>
        </div>
        <hr style={{ backgroundColor: 'white' }} />
        <div className="row">
          <div className="col-12 text-center">
            <p>&copy; 2024 Foody Restaurant. All rights reserved.</p>
          </div>
        </div>
        {/* Scroll to top button */}
        {showScroll && (
          <div className="scroll-to-top">
            <button className="btn btn-light" onClick={scrollToTop} >
              {/* <i className="bi bi-arrow-up-circle"></i> Scroll to Top */}
            </button>
          </div>
        )}
      </div>
    </footer>
  );
};

export default Footer;

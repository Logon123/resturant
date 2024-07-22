import React from 'react';
import './Header.css'; 
import northIndianImg from '../src/assets/northIndianImg.png';
import southIndianImg from '../src/assets/southIndianImg.png';

const Header = () => {
  return (
    <header id="header" className="text-center py-5">
      <h1 className="display-4">Welcome to My Foody Restaurant</h1>
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <img
              src={northIndianImg}
              alt="North Indian Food"
              className="img-fluid mb-2"
            />
            <h3>North Indian Cuisine</h3>
            <p className='descr'>
              Delicious North Indian dishes made with authentic spices. North Indian cuisine is known for its rich flavors and diverse dishes, often featuring ingredients like wheat, dairy, and a variety of spices. Popular dishes include biryani, butter chicken, paneer tikka, and dal makhani. Meals are typically enjoyed with naan or roti and accompanied by flavorful gravies and sides.
            </p>
          </div>
          <div className="col-md-6">
            <img
              src={southIndianImg}
              alt="South Indian Food"
              className="img-fluid mb-3"
            />
            <h3>South Indian Cuisine</h3>
            <p className='descr'>
              Explore a variety of South Indian foods that are rich in flavor. South Indian cuisine is famous for its vibrant flavors and healthy ingredients, emphasizing rice, lentils, and vegetables. Popular dishes include dosa, idli, sambar, and rasam. Meals often feature coconut, curry leaves, and a variety of spices, typically served with chutneys and sambars.
            </p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

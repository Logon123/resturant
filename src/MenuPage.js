import React from 'react';
import './FoodMenuPage.css';
import MenuItem from './MenuItem'; 
import foodImage1 from './assets/8.png'; 
import foodImage2 from './assets/22.png';
import foodImage3 from './assets/southdish.jpg';
import foodImage4 from './assets/banner.png';

const MenuPage = () => {
  const menuItems = [
    { name: 'Drinks', imageSrc: foodImage1, price: 40 },
    { name: 'South Indian ', imageSrc: foodImage2, price: 75 },
    { name: 'Dosa', imageSrc: foodImage3, price: 100 },
    { name: 'Main Course', imageSrc: foodImage4, price: 150 },
    
  ];
  return (
    <section id='menu'>
    <div className="container py-5">
      <h2 className="text-center mb-5 mnu" style={{color:'#DC3545'}}>Our Menu</h2>
      <div className="row">
        {menuItems.map((item, index) => (
          <MenuItem
            key={index}
            name={item.name}
            imageSrc={item.imageSrc}
            price={item.price}
          />
        ))}
      </div>
    </div>
    </section>
  );
};

export default MenuPage;

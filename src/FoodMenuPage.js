import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import './FoodMenuPage.css'; // Import your custom CSS for styling
import Image2 from './assets/roast-mushroom.jpg';
import Image3 from './assets/Jackfruit-Potato.jpg';
import Image1 from './assets/chaat.webp';
import Image4 from './assets/three-sandwiches.jpg';
import Image5 from './assets/chilli-paneer.jpg';
import Image6 from './assets/Fresh burger.jpg';
import Image7 from './assets/gulabjmn.png';
import Image8 from './assets/kulfi.png';
const FoodMenuPage = () => {
  const menuItems = [
    {
      name: 'Dahi Papdi Chaat',
      image: Image1,
      price: '₹ 190',
      description: 'Papdi or flat puri, Boiled potatoes, Plain Yogurt'
    },
    {
      name: 'Mushroom Textures',
      image: Image2,
      price: '₹ 220',
      description: 'Enoki, Cremini, Shimeji, Shiitake & Oyster Mushroom'
    },
    {
      name: 'Potato And Jackfruit Katsu Bao ',
      image: Image3,
      price: '₹ 350',
      description: 'Pineapple Relish, Avocado & Sriracha'
    },
    {
      name: 'Grilled Sandvich',
      image: Image4,
      price: '₹ 120',
      description: 'Plain Bread, Vegitable, Plain Yogurt'
    },
     {
      name: 'Sahi Paneer Chilli',
      image: Image5,
      price: '₹ 180',
      description: 'Paneer, Vegitable, chilli paneer gravy, dry.'
    },
    {
      name: 'Veg Burger',
      image: Image6,
      price: '₹ 130',
      description: 'Burger, Paneer, Vegitable'
    },
    {
      name: 'Gulab Jamun',
      image: Image7,
      price: '₹ 50',
      description: 'Dessert Gulab Jamun'
    },
    {
      name: 'Malai Kulfi',
      image: Image8,
      price: '₹ 75',
      description: 'Malai Kulfi'
    },
    // Add more menu items as needed
  ];

  return (
    <section id='menuitem'> <h3 className='h3title'>Menu Items</h3>
    <div className="food-menu-page">
      <Container>
        <Row>
          {menuItems.map((item, index) => (
            <Col key={index} sm={12} md={4} className="mb-4">
              <Card className="menu-item">
                <div className="menu-image">
                  <img src={item.image} alt={item.name} className="img-fluid rounded-circle menuitm" />
                </div>
                <Card.Body>
                  <Card.Title>{item.name}</Card.Title>
                  <Card.Text>{item.price}</Card.Text>
                  <Card.Text>{item.description}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>

     
    </div>
    </section>
  );
};

export default FoodMenuPage;

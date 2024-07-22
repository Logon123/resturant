
import './App.css';
import NavBar from './Navbar';
import Header from './Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import About from './About';
import ImageSlider from './ImageSlider';
import MenuPage from './MenuPage';
import Footer from './Footer';
import FoodMenuPage from './FoodMenuPage';

function App() {
  return (
    <>
       <NavBar />
       <ImageSlider />
      <Header />
      <About />
      <MenuPage />
      <FoodMenuPage />
      <Footer />
    </>
  );
}

export default App;

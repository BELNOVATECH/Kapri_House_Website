import './App.css';

import TopBar from './components/TopBar';
import Header from './components/Header';
import Navbar from './components/Navbar';
import HeroSlider from './components/HeroSlider';
import ProductSection from './pages/ProductSection';
import CategorySlider from './pages/CategorySlider';

function App() {
  return (
    <>
      <TopBar />
      <Header />
      <Navbar />
      <HeroSlider />
      <CategorySlider/>
       <ProductSection />
    </>
  );
}

export default App;
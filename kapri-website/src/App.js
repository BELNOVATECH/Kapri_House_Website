import './App.css';

import TopBar from './components/TopBar';
import Header from './components/Header';
import Navbar from './components/Navbar';
import HeroSlider from './components/HeroSlider';
import ProductSection from './pages/ProductSection';
import CategorySlider from './pages/CategorySlider';
import FestiveWear from './pages/FestiveWear';
import EverydayKurtaSets from './pages/EverydayKurtaSets';
import HolidayDresses from './pages/HolidayDresses';
import CelebApprovedLooks from './pages/CelebApprovedLooks';
import WomenOfBunaai from './pages/WomenOfBunaai';
import FeaturedOn from './pages/FeaturedOn';
import Footer from './pages/Footer';
import ReelsStrip from './pages/Reelsstrips'; 
import NewArrivalsBanner from "./components/NewArrivalsBanner";
function App() {
  return (
    <>
      <TopBar />
      <Header />
      <Navbar />
      <HeroSlider />
      <CategorySlider/>
  <ReelsStrip />
      <NewArrivalsBanner />
       <ProductSection />
       <FestiveWear/>
       <EverydayKurtaSets/>
       <HolidayDresses/>
       <CelebApprovedLooks/>
       <WomenOfBunaai/>
       <FeaturedOn/>
       <Footer/>
    </>
  );
}

export default App;
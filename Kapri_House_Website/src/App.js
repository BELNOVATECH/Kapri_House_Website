import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import TopBar from "./components/TopBar";
import Header from "./components/Header";
import Navbar from "./components/Navbar";

import HeroSlider from "./components/HeroSlider";

import ProductSection from "./pages/ProductSection";
import CategorySlider from "./pages/CategorySlider";
import ReelsStrip from "./pages/Reelsstrips";
import FestiveWear from "./pages/FestiveWear";
import EverydayKurtaSets from "./pages/EverydayKurtaSets";
import HolidayDresses from "./pages/HolidayDresses";
import CelebApprovedLooks from "./pages/CelebApprovedLooks";
import WomenOfBunaai from "./pages/WomenOfBunaai";
import FeaturedOn from "./pages/FeaturedOn";
import Footer from "./pages/Footer";
import NewArrivals from "./pages/NewArrivals";
import ProductDetails from "./pages/ProductDetails";

function HomePage() {
  return (
    <>
      <TopBar />
      <Header />
      <Navbar />

      <HeroSlider />
      <CategorySlider />
      <ReelsStrip />
      <ProductSection />
      <FestiveWear />
      <EverydayKurtaSets />
      <HolidayDresses />
      <CelebApprovedLooks />
      <WomenOfBunaai />
      <FeaturedOn />
      <ProductDetails/>
      <Footer />
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route
          path="/"
          element={<HomePage />}
        />

        <Route
          path="/new-arrivals"
          element={
            <>
              <TopBar />
              <Header />
              <Navbar />
              <NewArrivals />
              <Footer />
            </>
          }
        />

    


      <Route
          path="/product-details"
          element={
            <>
              <TopBar />
              <Header />
              <Navbar />
            <ProductDetails/>
              <Footer />
            </>
          }
        />

      </Routes>


    </BrowserRouter>
  );
}

export default App;
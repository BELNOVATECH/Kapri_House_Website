import "../styles/HeroSlider.css";
import banner from "../assets/banner1.jpg";

export default function HeroSlider() {
  return (
    <div className="hero">
      <img src={banner} alt="banner" />

      <div className="hero-content">
        {/* <h1>
          END OF SEASON
          <br />
          EDIT!
        </h1>

        <p>Styles worth holding onto.</p>

        <div className="discount">20%</div>

        <div className="code">
          Use code: <b>SALE20</b>
        </div> */}

        {/* <button className="shop-btn">
          SHOP NOW
        </button> */}
      </div>

      {/* <div className="slider-dots">
        <div className="dot active"></div>
        <div className="dot"></div>
        <div className="dot"></div>
        <div className="dot"></div>
      </div> */}
    </div>
  );
}
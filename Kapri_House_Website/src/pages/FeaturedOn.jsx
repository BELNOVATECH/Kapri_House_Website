import { useRef } from "react";
import "../styles/FeaturedOn.css";

import logo1 from "../assets/featured1.png";
import logo2 from "../assets/featured2.png";
import logo3 from "../assets/featured3.png";
import logo4 from "../assets/featured4.png";
import logo5 from "../assets/featured5.png";
import logo6 from "../assets/featured6.png";
import logo7 from "../assets/featured7.png";
import logo8 from "../assets/featured8.png";
import logo9 from "../assets/featured9.png";
import logo10 from "../assets/featured10.png";

export default function FeaturedOn() {
  const sliderRef = useRef(null);

  const logos = [
    logo1,
    logo2,
    logo3,
    logo4,
    logo5,
    logo6,
    logo7,
    logo8,
    logo9,
    logo10,
  ];

  const slideLeft = () => {
    sliderRef.current.scrollBy({
      left: -1000,
      behavior: "smooth",
    });
  };

  const slideRight = () => {
    sliderRef.current.scrollBy({
      left: 1000,
      behavior: "smooth",
    });
  };

  return (
    <>
      <section className="featured-section">

        <h2 className="featured-title">
          ♡ AS FEATURED ON ♡
        </h2>

        <div className="featured-slider-wrapper">

          {/* <button
            className="nav-btn left"
            onClick={slideLeft}
          >
            ❮
          </button> */}

          <div
            className="featured-logos"
            ref={sliderRef}
          >
            {logos.map((logo, index) => (
              <div
                className="logo-card"
                key={index}
              >
                <img
                  src={logo}
                  alt={`logo-${index}`}
                />
              </div>
            ))}
          </div>

          {/* <button
            className="nav-btn right"
            onClick={slideRight}
          >
            ❯
          </button> */}

        </div>

      </section>

      <section className="newsletter-section">
        <div className="newsletter-content">

          <h2>GET ON THE LIST</h2>

          <p>
            Sign up for weekly newsletters
            to receive information about
            new arrivals, future events and
            special discounts.
          </p>

          <div className="newsletter-form">
            <input
              type="email"
              placeholder="Enter your email"
            />

            <button>
              SIGN ME UP!
            </button>
          </div>

        </div>
      </section>

      <section className="content-section">

        <h3>
          STYLISH ETHNIC WEAR FOR WOMEN & MEN –
          HAND PICKED DESIGNER OUTFITS
        </h3>

        <p>
          Looking for ethnic wear online
          that feels good and looks even
          better? You're in the right place.
          At Bunai, we bring together
          traditional styles and modern fits.
        </p>

        <p>
          Explore ethnic wear for women
          in bright prints and bold
          silhouettes with modern styling.
        </p>

        <h4>
          FREE SHIPPING | 100% QUALITY
          ASSURANCE | EASY RETURNS
        </h4>

        <p>
          Shop trending pieces like
          co-ord sets, designer suit sets
          and festive wear online.
        </p>

        <h4>
          SHOP OUR BESTSELLING COLLECTIONS
        </h4>

        <p>
          Explore our most-loved ethnic
          wear collections that redefine
          elegance and festive fashion.
        </p>

        <span className="read-more">
          Read more
        </span>

      </section>

      <div className="footer-banner">
        ✨ FEEL AS BEAUTIFUL AS YOU ARE! ✨
      </div>
    </>
  );
}
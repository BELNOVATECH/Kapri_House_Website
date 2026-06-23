import { useState, useEffect, useRef } from "react";
import "../styles/HeroSlider.css";

// 1. Import your images here
import banner1 from "../assets/idd2.jpg";
import banner2 from "../assets/Idd1.jpg";
import banner3 from "../assets/idd3.jpg";
import banner4 from "../assets/idd3.jpg";
import banner5 from "../assets/idd44.webp";
import banner6 from "../assets/idd55.webp";

// 2. List your slides here. "content" is optional — leave it out (or null)
//    for a plain image-only slide, like your Idaho banners.
const slides = [
  {
    image: banner1,
    content: null,
  },
  {
    image: banner2,
    content: null,
  },
  {
    image: banner3,
    content: null,
  },
  {
    image: banner4,
    content: null,
  },
  {
    image: banner5,
    content: null,
  },
  {
    image: banner6,
    content: null,
  },
  // {
  //   image: banner4,
  //   content: {
  //     heading: ["END OF SEASON", "EDIT!"],
  //     subtext: "Styles worth holding onto.",
  //     discount: "20%",
  //     code: "SALE20",
  //     buttonText: "SHOP NOW",
  //   },
  // },
  // {
  //   image: banner5,
  //   content: null,
  // },
];

const AUTOPLAY_DELAY = 4000; // ms between slides

export default function HeroSlider() {
  const [activeIndex, setActiveIndex] = useState(0);
  const timeoutRef = useRef(null);

  const goToSlide = (index) => {
    setActiveIndex(index);
  };

  const goToNext = () => {
    setActiveIndex((prev) => (prev + 1) % slides.length);
  };

  // Autoplay
  useEffect(() => {
    timeoutRef.current = setTimeout(goToNext, AUTOPLAY_DELAY);
    return () => clearTimeout(timeoutRef.current);
  }, [activeIndex]);

  return (
    <div className="hero">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`hero-slide ${index === activeIndex ? "active" : ""}`}
        >
          <img src={slide.image} alt={`banner-${index + 1}`} />

          {slide.content && (
            <div className="hero-content">
              <h1>
                {slide.content.heading.map((line, i) => (
                  <span key={i}>
                    {line}
                    <br />
                  </span>
                ))}
              </h1>

              <p>{slide.content.subtext}</p>

              {slide.content.discount && (
                <div className="discount">{slide.content.discount}</div>
              )}

              {slide.content.code && (
                <div className="code">
                  Use code: <b>{slide.content.code}</b>
                </div>
              )}

              {slide.content.buttonText && (
                <button className="shop-btn">{slide.content.buttonText}</button>
              )}
            </div>
          )}
        </div>
      ))}

      <div className="slider-dots">
        {slides.map((_, index) => (
          <div
            key={index}
            className={`dot ${index === activeIndex ? "active" : ""}`}
            onClick={() => goToSlide(index)}
          ></div>
        ))}
      </div>
    </div>
  );
}
import Slider from "react-slick";

import p1 from "../assets/p1.jpg";
import p2 from "../assets/p2.jpg";
import p3 from "../assets/p3.jpg";
import p4 from "../assets/p4.jpg";

import "../styles/CategorySlider.css";

export default function CategorySlider() {
  const baseData = [
    { image: p1, name: "Kurta Sets" },
    { image: p2, name: "Suit Sets" },
    { image: p3, name: "Maxis" },
    { image: p4, name: "Dresses" },
    { image: p1, name: "Farshi Set" },
    { image: p2, name: "Sharara Set" },
    { image: p3, name: "Sarees" },
    { image: p4, name: "Lehengas" },
  ];

  // duplicate so there are enough slides to scroll continuously
  const data = [...baseData, ...baseData];

  const settings = {
    infinite: true,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 0,
    speed: 5500,        // lower = faster, higher = slower. tweak this.
    cssEase: "linear",
    arrows: false,
    dots: false,
    pauseOnHover: false,
    swipeToSlide: true,
    responsive: [
      { breakpoint: 1200, settings: { slidesToShow: 5 } },
      { breakpoint: 992, settings: { slidesToShow: 4 } },
      { breakpoint: 768, settings: { slidesToShow: 3 } },
      { breakpoint: 576, settings: { slidesToShow: 2 } },
    ],
};

  return (
    <div className="category-slider-wrapper">
      <Slider {...settings}>
        {data.map((item, index) => (
          <div className="category-item" key={index}>
            <div className="category-circle">
              <img src={item.image} alt={item.name} />
            </div>
            <p className="category-name">{item.name}</p>
          </div>
        ))}
      </Slider>
    </div>
  );
}
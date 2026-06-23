import Slider from "react-slick";

import p1 from "../assets/p1.jpg";
import p2 from "../assets/p2.jpg";
import p3 from "../assets/p3.jpg";
import p4 from "../assets/p4.jpg";

import "../styles/CategorySlider.css";

export default function CategorySlider() {
  const data = [
    { image: p1 },
    { image: p2 },
    { image: p3 },
    { image: p4 },
    { image: p1 },
    { image: p2 },
  ];

  const settings = {
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 0,
    speed: 6000,
    cssEase: "linear",
    arrows: false,
    dots: false,
    pauseOnHover: false,
  };

  return (
    <div className="category-slider">
      <Slider {...settings}>
        {data.map((item, index) => (
          <div className="category-item" key={index}>
            <img src={item.image} alt="" />
          </div>
        ))}
      </Slider>
    </div>
  );
}
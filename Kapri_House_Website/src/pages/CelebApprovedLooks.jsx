import { useRef } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

import "../styles/CelebApprovedLooks.css";

import celeb1 from "../assets/celeb1.jpg";
import celeb2 from "../assets/celeb2.jpg";
import celeb3 from "../assets/celeb3.jpg";
import celeb4 from "../assets/celeb4.jpg";
import celeb5 from "../assets/celeb5.jpg";
import celeb6 from "../assets/celeb6.jpg";
import celeb7 from "../assets/celeb7.jpg";
import celeb8 from "../assets/celeb8.jpg";
import celeb9 from "../assets/celeb9.jpg";
import celeb10 from "../assets/celeb10.jpg";

const products = [
  {
    id: 1,
    image: celeb1,
    title: "Toasted Brown Georgette Dress",
  },
  {
    id: 2,
    image: celeb2,
    title: "Orange Bandhej Cotton Suit",
  },
  {
    id: 3,
    image: celeb3,
    title: "White Cotton Co-Ord Set",
  },
  {
    id: 4,
    image: celeb4,
    title: "Black Fiesta Cotton Dress",
  },
  {
    id: 5,
    image: celeb5,
    title: "Light Pink Sleeveless Dress",
  },
  {
    id: 6,
    image: celeb6,
    title: "Rosy Georgette Suit Set",
  },
  {
    id: 7,
    image: celeb7,
    title: "Cyprus Green Dress",
  },
  {
    id: 8,
    image: celeb8,
    title: "Mink Aari Work Kurta",
  },
  {
    id: 9,
    image: celeb9,
    title: "Black Embroidered Cotton Kurta",
  },
  {
    id: 10,
    image: celeb10,
    title: "Divya Georgette Suit Set",
  },
];

export default function CelebApprovedLooks() {
  const sliderRef = useRef(null);

  const scrollLeft = () => {
    sliderRef.current.scrollBy({
      left: -1200,
      behavior: "smooth",
    });
  };

  const scrollRight = () => {
    sliderRef.current.scrollBy({
      left: 1200,
      behavior: "smooth",
    });
  };

  return (
    <section className="celeb-section">

      <h2 className="celeb-heading">
        ♡ CELEB APPROVED LOOKS ♡
      </h2>

      <button
        className="celeb-arrow left"
        onClick={scrollLeft}
      >
        <FaChevronLeft />
      </button>

      <div
        className="celeb-slider"
        ref={sliderRef}
      >
        {products.map((item) => (
          <div
            className="celeb-card"
            key={item.id}
          >
            <img
              src={item.image}
              alt={item.title}
            />

            <h4>{item.title}</h4>
          </div>
        ))}
      </div>

      <button
        className="celeb-arrow right"
        onClick={scrollRight}
      >
        <FaChevronRight />
      </button>

    </section>
  );
}
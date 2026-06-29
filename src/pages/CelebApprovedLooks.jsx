import { useRef, useEffect } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import "../styles/CelebApprovedLooks.css";

import celeb1  from "../assets/celeb1.jpg";
import celeb2  from "../assets/celeb2.jpg";
import celeb3  from "../assets/celeb3.jpg";
import celeb4  from "../assets/celeb4.jpg";
import celeb5  from "../assets/celeb5.jpg";
import celeb6  from "../assets/celeb6.jpg";
import celeb7  from "../assets/celeb7.jpg";
import celeb8  from "../assets/celeb8.jpg";
import celeb9  from "../assets/celeb9.jpg";
import celeb10 from "../assets/celeb10.jpg";

const products = [
  { id: 1,  image: celeb1,  title: "Toasted Brown Georgette Dress"    },
  { id: 2,  image: celeb2,  title: "Orange Bandhej Cotton Suit"        },
  { id: 3,  image: celeb3,  title: "White Cotton Co-Ord Set"           },
  { id: 4,  image: celeb4,  title: "Black Fiesta Cotton Dress"         },
  { id: 5,  image: celeb5,  title: "Light Pink Sleeveless Dress"       },
  { id: 6,  image: celeb6,  title: "Rosy Georgette Suit Set"           },
  { id: 7,  image: celeb7,  title: "Cyprus Green Dress"                },
  { id: 8,  image: celeb8,  title: "Mink Aari Work Kurta"              },
  { id: 9,  image: celeb9,  title: "Black Embroidered Cotton Kurta"    },
  { id: 10, image: celeb10, title: "Divya Georgette Suit Set"          },
];

export default function CelebApprovedLooks() {
  const sliderRef = useRef(null);
  const cardRefs  = useRef([]);

  // arrow scroll
  const scrollLeft  = () => sliderRef.current.scrollBy({ left: -1200, behavior: "smooth" });
  const scrollRight = () => sliderRef.current.scrollBy({ left:  1200, behavior: "smooth" });

  // drag-to-scroll
  let isDown = false;
  let startX;
  let scrollPos;

  const handleMouseDown = (e) => {
    isDown = true;
    sliderRef.current.classList.add("dragging");
    startX    = e.pageX - sliderRef.current.offsetLeft;
    scrollPos = sliderRef.current.scrollLeft;
  };
  const handleMouseLeave = () => { isDown = false; sliderRef.current.classList.remove("dragging"); };
  const handleMouseUp    = () => { isDown = false; sliderRef.current.classList.remove("dragging"); };
  const handleMouseMove  = (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - sliderRef.current.offsetLeft;
    sliderRef.current.scrollLeft = scrollPos - (x - startX) * 1.5;
  };

  // scroll-triggered slide-up
  useEffect(() => {
    const observers = [];
    cardRefs.current.forEach((card, i) => {
      if (!card) return;
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setTimeout(() => card.classList.add("celeb-card--visible"), i * 80);
            observer.disconnect();
          }
        },
        { threshold: 0.15 }
      );
      observer.observe(card);
      observers.push(observer);
    });
    return () => observers.forEach((o) => o.disconnect());
  }, []);

  return (
    <section className="celeb-section">

      <h2 className="celeb-heading">♡ CELEB APPROVED LOOKS ♡</h2>

      <div className="celeb-slider-wrapper">

        <button className="celeb-arrow left" onClick={scrollLeft}>
          <FaChevronLeft />
        </button>

        <div
          className="celeb-slider"
          ref={sliderRef}
          onMouseDown={handleMouseDown}
          onMouseLeave={handleMouseLeave}
          onMouseUp={handleMouseUp}
          onMouseMove={handleMouseMove}
        >
          {products.map((item, i) => (
            <div
              className="celeb-card"
              key={item.id}
              ref={(el) => (cardRefs.current[i] = el)}
            >
              <div className="celeb-image-wrapper">
                <img src={item.image} alt={item.title} />
              </div>
              <h4>{item.title}</h4>
            </div>
          ))}
        </div>

        <button className="celeb-arrow right" onClick={scrollRight}>
          <FaChevronRight />
        </button>

      </div>

    </section>
  );
}
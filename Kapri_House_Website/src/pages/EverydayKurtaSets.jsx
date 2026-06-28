import "../styles/EverydayKurtaSets.css";
import { useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import ek1 from "../assets/ek1.jpg";
import ek2 from "../assets/ek2.jpg";
import ek3 from "../assets/ek3.jpg";
import ek4 from "../assets/ek4.jpg";
import ek5 from "../assets/ek5.jpg";
import ek6 from "../assets/ek6.jpg";
import ek7 from "../assets/ek7.jpg";
import ek8 from "../assets/ek8.jpg";
import ek1Hover from "../assets/ek1-hover.jpg";
import ek2Hover from "../assets/ek2-hover.jpg";
import ek3Hover from "../assets/ek3-hover.jpg";
import ek4Hover from "../assets/ek4-hover.jpg";
import ek5Hover from "../assets/ek5-hover.jpg";
import ek6Hover from "../assets/ek6-hover.jpg";
import ek7Hover from "../assets/ek7-hover.jpg";
import ek8Hover from "../assets/ek8-hover.jpg";
const products = [
  { id: 1, image: ek1,hoverImage: ek1Hover, title: "Mustard Cotton Kurta Set",     mrp: 4000, price: 2499, discount: "37% OFF" },
  { id: 2, image: ek2,hoverImage: ek2Hover, title: "Pastel Cotton Kurta Set",      mrp: 4000, price: 2499, discount: "37% OFF" },
  { id: 3, image: ek3,hoverImage: ek3Hover, title: "Noorani Embroidered Kurta",    mrp: 4000, price: 2499, discount: "37% OFF" },
  { id: 4, image: ek4,hoverImage: ek4Hover, title: "Blue Cotton Kurta Set",        mrp: 4000, price: 2499, discount: "37% OFF" },
  { id: 5, image: ek5,hoverImage: ek5Hover, title: "Ivory Cotton Coord Set",       mrp: 4000, price: 2499, discount: "37% OFF" },
  { id: 6, image: ek6,hoverImage: ek6Hover, title: "Green Straight Kurta Set",     mrp: 4000, price: 2499, discount: "37% OFF" },
  { id: 7, image: ek7,hoverImage: ek8Hover, title: "Red Cotton Coord Set",         mrp: 4000, price: 2499, discount: "37% OFF" },
  { id: 8, image: ek8,hoverImage: ek7Hover, title: "Lavender Crushed Coord Set",   mrp: 4000, price: 3500, discount: "12% OFF" },
];

export default function EverydayKurtaSets() {
  const sliderRef = useRef(null);
  const cardRefs  = useRef([]);
const navigate = useNavigate();
  // drag-to-scroll
  let isDown = false;
  let startX;
  let scrollLeft;

  const handleMouseDown = (e) => {
    isDown = true;
    sliderRef.current.classList.add("dragging");
    startX = e.pageX - sliderRef.current.offsetLeft;
    scrollLeft = sliderRef.current.scrollLeft;
  };
  const handleMouseLeave = () => { isDown = false; sliderRef.current.classList.remove("dragging"); };
  const handleMouseUp    = () => { isDown = false; sliderRef.current.classList.remove("dragging"); };
  const handleMouseMove  = (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - sliderRef.current.offsetLeft;
    sliderRef.current.scrollLeft = scrollLeft - (x - startX) * 1.5;
  };

  // scroll-triggered slide-up
  useEffect(() => {
    const observers = [];

    cardRefs.current.forEach((card, i) => {
      if (!card) return;
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              card.classList.add("ek-card--visible");
            }, i * 80);
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
    <section className="ek-section">

      <div className="ek-title">
        <h2>EVERYDAY KURTA SETS</h2>
        <p>Stylish daily wear kurta sets for women.</p>
      </div>

      <div
        className="ek-scroll-row"
        ref={sliderRef}
        onMouseDown={handleMouseDown}
        onMouseLeave={handleMouseLeave}
        onMouseUp={handleMouseUp}
        onMouseMove={handleMouseMove}
      >
        {products.map((item, i) => (
<div
  className="ek-card"
  key={item.id}
  ref={(el) => (cardRefs.current[i] = el)}
  onClick={() =>
    navigate("/product-details", {
      state: {
        id: item.id,
        image: item.image,
        hoverImage: item.hoverImage,
        name: item.title,
        price: item.price,
        mrp: item.mrp,
        discount: item.discount,
      },
    })
  }
>
<div className="ek-image-wrapper">
  <img
    src={item.image}
    alt={item.title}
    className="ek-img ek-img-default"
  />

  <img
    src={item.hoverImage}
    alt={item.title}
    className="ek-img ek-img-hover"
  />

  <span className="ek-badge">{item.discount}</span>
</div>

            <div className="ek-info">
              <div className="ek-stars">★★★★★</div>
              <h4>{item.title}</h4>
              <div className="ek-price">
                <span className="ek-mrp">₹{item.mrp}</span>
                ₹{item.price}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="ek-view-all-wrap">
       <button
  className="view-btn"
  onClick={() => navigate("/kurta-sets")}
>
  VIEW ALL
</button>
      </div>

    </section>
  );
}
import "../styles/FestiveWear.css";
import { useRef, useEffect } from "react";

import fw1 from "../assets/fw1.jpg";
import fw2 from "../assets/fw2.jpg";
import fw3 from "../assets/fw3.jpg";
import fw4 from "../assets/fw4.jpg";
import fw5 from "../assets/fw5.jpg";
import fw6 from "../assets/fw6.jpg";
import fw7 from "../assets/fw7.jpg";
import fw8 from "../assets/fw8.jpg";

const products = [
  { id: 1, image: fw1, title: "Orange Myra Suit Set",     mrp: 4500, price: 3999, discount: "11% OFF" },
  { id: 2, image: fw2, title: "Meadow Silk Kurta Set",    mrp: 3999, price: 2499, discount: "42% OFF" },
  { id: 3, image: fw3, title: "Light Green Silk Kurta",   mrp: 3500, price: 2499, discount: "29% OFF" },
  { id: 4, image: fw4, title: "Black Cotton Kurta Set",   mrp: 3200, price: 2499, discount: "22% OFF" },
  { id: 5, image: fw5, title: "Pink Luxe Kaftan Set",     mrp: 4000, price: 2499, discount: "37% OFF" },
  { id: 6, image: fw6, title: "Black Silver Kurta Pants", mrp: 3500, price: 2499, discount: "29% OFF" },
  { id: 7, image: fw7, title: "Floral Drape Saree",       mrp: 6000, price: 4200, discount: "30% OFF" },
  { id: 8, image: fw8, title: "Blue Floral Fusion Saree", mrp: 6500, price: 4550, discount: "30% OFF" },
];

export default function FestiveWear() {
  const sliderRef = useRef(null);
  const sectionRef = useRef(null);
  const cardRefs = useRef([]);

  // Drag-to-scroll
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

  // Scroll-triggered slide-up per card
  useEffect(() => {
    const observers = [];

    cardRefs.current.forEach((card, i) => {
      if (!card) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            // staggered delay: each card animates slightly after the previous
            setTimeout(() => {
              card.classList.add("fw-card--visible");
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
    <section className="festive-section" ref={sectionRef}>

      <div className="section-title">
        <h2>FESTIVE WEAR</h2>
        <p>Celebrates the vibrant Indian fashion</p>
      </div>

      <div
        className="festive-scroll-row"
        ref={sliderRef}
        onMouseDown={handleMouseDown}
        onMouseLeave={handleMouseLeave}
        onMouseUp={handleMouseUp}
        onMouseMove={handleMouseMove}
      >
        {products.map((item, i) => (
          <div
            className="fw-card"
            key={item.id}
            ref={(el) => (cardRefs.current[i] = el)}
          >
            <div className="fw-image-wrapper">
              <img src={item.image} alt={item.title} />
              <span className="fw-badge">{item.discount}</span>
            </div>

            <div className="fw-info">
              <div className="fw-stars">★★★★★</div>
              <h4>{item.title}</h4>
              <div className="fw-price">
                <span className="fw-mrp">₹{item.mrp}</span>
                ₹{item.price}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="view-all-wrap">
        <button className="view-all-btn">VIEW ALL</button>
      </div>

    </section>
  );
}
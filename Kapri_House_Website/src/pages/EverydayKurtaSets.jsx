import "../styles/FestiveWear.css";

import ek1 from "../assets/ek1.jpg";
import ek2 from "../assets/ek2.jpg";
import ek3 from "../assets/ek3.jpg";
import ek4 from "../assets/ek4.jpg";
import ek5 from "../assets/ek5.jpg";
import ek6 from "../assets/ek6.jpg";
import ek7 from "../assets/ek7.jpg";
import ek8 from "../assets/ek8.jpg";

const products = [
  {
    id: 1,
    image: ek1,
    title: "Mustard Cotton Kurta Set",
    mrp: 4000,
    price: 2499,
    discount: "37% OFF",
  },
  {
    id: 2,
    image: ek2,
    title: "Pastel Cotton Kurta Set",
    mrp: 4000,
    price: 2499,
    discount: "37% OFF",
  },
  {
    id: 3,
    image: ek3,
    title: "Noorani Embroidered Kurta",
    mrp: 4000,
    price: 2499,
    discount: "37% OFF",
  },
  {
    id: 4,
    image: ek4,
    title: "Blue Cotton Kurta Set",
    mrp: 4000,
    price: 2499,
    discount: "37% OFF",
  },
  {
    id: 5,
    image: ek5,
    title: "Ivory Cotton Coord Set",
    mrp: 4000,
    price: 2499,
    discount: "37% OFF",
  },
  {
    id: 6,
    image: ek6,
    title: "Green Straight Kurta Set",
    mrp: 4000,
    price: 2499,
    discount: "37% OFF",
  },
  {
    id: 7,
    image: ek7,
    title: "Red Cotton Coord Set",
    mrp: 4000,
    price: 2499,
    discount: "37% OFF",
  },
  {
    id: 8,
    image: ek8,
    title: "Lavender Crushed Coord Set",
    mrp: 4000,
    price: 3500,
    discount: "12% OFF",
  },
];

export default function EverydayKurtaSets() {
  return (
    <section className="festive-section">

      <div className="section-title">
        <h2>EVERYDAY KURTA SETS</h2>
        <p>Stylish daily wear kurta sets for women.</p>
      </div>

      <div className="products-grid">
        {products.map((item) => (
          <div className="product-card" key={item.id}>
            <div className="product-image-wrapper">

              <span className="sale-badge">
                SALE
              </span>

              <img
                src={item.image}
                alt={item.title}
              />

              <div className="size-options">
                <span>XS</span>
                <span>S</span>
                <span>M</span>
                <span>L</span>
                <span>XL</span>
              </div>

            </div>

            <div className="product-content">

              <div className="stars">
                ★★★★★
              </div>

              <h4>{item.title}</h4>

              <div className="price-box">
                <span className="mrp">
                  ₹{item.mrp}
                </span>

                <span className="price">
                  ₹{item.price}
                </span>

                <span className="discount">
                  ({item.discount})
                </span>
              </div>

            </div>
          </div>
        ))}
      </div>

      <div className="view-all-wrap">
        <button className="view-all-btn">
          VIEW ALL
        </button>
      </div>

    </section>
  );
}
import "../styles/FestiveWear.css";

import fw1 from "../assets/fw1.jpg";
import fw2 from "../assets/fw2.jpg";
import fw3 from "../assets/fw3.jpg";
import fw4 from "../assets/fw4.jpg";
import fw5 from "../assets/fw5.jpg";
import fw6 from "../assets/fw6.jpg";
import fw7 from "../assets/fw7.jpg";
import fw8 from "../assets/fw8.jpg";

const products = [
  {
    id: 1,
    image: fw1,
    title: "Orange Myra Suit Set",
    mrp: 4500,
    price: 3999,
    discount: "11% OFF",
  },
  {
    id: 2,
    image: fw2,
    title: "Meadow Silk Kurta Set",
    mrp: 3999,
    price: 2499,
    discount: "42% OFF",
  },
  {
    id: 3,
    image: fw3,
    title: "Light Green Silk Kurta",
    mrp: 3500,
    price: 2499,
    discount: "29% OFF",
  },
  {
    id: 4,
    image: fw4,
    title: "Black Cotton Kurta Set",
    mrp: 3200,
    price: 2499,
    discount: "22% OFF",
  },
  {
    id: 5,
    image: fw5,
    title: "Pink Luxe Kaftan Set",
    mrp: 4000,
    price: 2499,
    discount: "37% OFF",
  },
  {
    id: 6,
    image: fw6,
    title: "Black Silver Kurta Pants",
    mrp: 3500,
    price: 2499,
    discount: "29% OFF",
  },
  {
    id: 7,
    image: fw7,
    title: "Floral Drape Saree",
    mrp: 6000,
    price: 4200,
    discount: "30% OFF",
  },
  {
    id: 8,
    image: fw8,
    title: "Blue Floral Fusion Saree",
    mrp: 6500,
    price: 4550,
    discount: "30% OFF",
  },
];

export default function FestiveWear() {
 return (
  <section className="festive-section">

    <div className="section-title">
      <h2>FESTIVE WEAR</h2>
      <p>Celebrates the vibrant Indian fashion</p>
    </div>

    <div className="products-grid">

      {products.map((item) => (
        <div
          className="product-card"
          key={item.id}
        >

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

              <span>XXL</span>

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
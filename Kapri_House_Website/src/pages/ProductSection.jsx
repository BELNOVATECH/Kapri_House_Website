import "../styles/ProductSection.css";

import p1 from "../assets/p1.jpg";
import p2 from "../assets/p2.jpg";
import p3 from "../assets/p3.jpg";
import p4 from "../assets/p4.jpg";
import p5 from "../assets/p5.jpg";
import p6 from "../assets/p6.jpg";
import p7 from "../assets/p7.jpg";
import p8 from "../assets/p8.jpg";

const products = [
  {
    id: 1,
    image: p1,
    name: "Noorani Embroidered Kurta Set",
    price: "2499",
  },
  {
    id: 2,
    image: p2,
    name: "Black Embroidered Cotton Co-ord Set",
    price: "2499",
  },
  {
    id: 3,
    image: p3,
    name: "Cotton Slub Co-ord Set",
    price: "2499",
  },
  {
    id: 4,
    image: p4,
    name: "Rust Cotton Relaxed Co-ord Set",
    price: "2499",
  },
  {
    id: 5,
    image: p5,
    name: "White Cotton Body Co-ord Set",
    price: "2499",
  },
  {
    id: 6,
    image: p6,
    name: "Cotton Charm Co-ord Set",
    price: "2499",
  },
  {
    id: 7,
    image: p7,
    name: "Mint Green Maxi Dress",
    price: "3500",
  },
  {
    id: 8,
    image: p8,
    name: "Fantasy Co-ord Set",
    price: "2499",
  },
];

export default function ProductSection() {
  return (
    <section className="product-section">
      <h2>SHOP MORE, SAVE MORE</h2>

      <p>Women's ethnic wear in our exclusive Sale.</p>

      <div className="product-grid">
        {products.map((product) => (
          <div className="product-card" key={product.id}>
            <span className="sale-tag">SALE</span>

            <div className="product-image-wrapper">
              <img
                src={product.image}
                alt={product.name}
              />

              <div className="size-overlay">
                <span>XS</span>
                <span>S</span>
                <span>M</span>
                <span>L</span>
                <span>XL</span>
                <span>XXL</span>
              </div>
            </div>

            <div className="rating">
              ★★★★★
            </div>

            <h4>{product.name}</h4>

            <div className="price">
              <span className="old-price">
                ₹4,999
              </span>

              ₹{product.price}

              <span className="discount">
                (50% OFF)
              </span>
            </div>
          </div>
        ))}
      </div>

      <button className="view-btn">
        VIEW ALL
      </button>
    </section>
  );
}
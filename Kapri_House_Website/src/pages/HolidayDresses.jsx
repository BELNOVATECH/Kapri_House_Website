import "../styles/FestiveWear.css";

import hd1 from "../assets/fd1.jpg";
import hd2 from "../assets/fd2.jpg";
import hd3 from "../assets/fd3.jpg";
import hd4 from "../assets/fd4.jpg";
import hd5 from "../assets/fd5.jpg";
import hd6 from "../assets/fd6.jpg";
import hd7 from "../assets/fd7.jpg";
import hd8 from "../assets/fd8.jpg";

const products = [
  {
    id: 1,
    image: hd1,
    title: "White Shift Dress",
    mrp: 4200,
    price: 3150,
    discount: "25% OFF",
  },
  {
    id: 2,
    image: hd2,
    title: "Float White Cotton Dress",
    mrp: 4200,
    price: 2499,
    discount: "40% OFF",
  },
  {
    id: 3,
    image: hd3,
    title: "White Cotton Midi Dress",
    mrp: 4500,
    price: 3500,
    discount: "22% OFF",
  },
  {
    id: 4,
    image: hd4,
    title: "Lime Green Cotton Dress",
    mrp: 5000,
    price: 4000,
    discount: "20% OFF",
  },
  {
    id: 5,
    image: hd5,
    title: "Indigo Shirt Cotton Dress",
    mrp: 4200,
    price: 2499,
    discount: "40% OFF",
  },
  {
    id: 6,
    image: hd6,
    title: "Black Embroidered Dress",
    mrp: 4500,
    price: 3500,
    discount: "22% OFF",
  },
  {
    id: 7,
    image: hd7,
    title: "Black Floral Dress",
    mrp: 4200,
    price: 3150,
    discount: "25% OFF",
  },
  {
    id: 8,
    image: hd8,
    title: "Black Daisy Dress",
    mrp: 4200,
    price: 2999,
    discount: "29% OFF",
  },
];

export default function HolidayDresses() {
  return (
    <section className="festive-section">

      <div className="section-title">
        <h2>HOLIDAY DRESSES</h2>
        <p>Women's dresses in different designs & colors.</p>
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
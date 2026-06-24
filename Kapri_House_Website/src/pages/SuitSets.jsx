import "../styles/SuitSets.css";
import { useNavigate } from "react-router-dom";

import suitBanner from "../assets/suit-banner.webp";

import s1 from "../assets/suit1.jpg";
import s2 from "../assets/suit2.jpg";
import s3 from "../assets/suit3.jpg";
import s4 from "../assets/suit4.jpg";
import s5 from "../assets/suit5.jpg";
import s6 from "../assets/suit6.jpg";
import s7 from "../assets/suit7.jpg";
import s8 from "../assets/suit8.jpg";
import s9 from "../assets/suit9.jpg";

import FilterSidebar from "./FilterSidebar";

const products = [
  {
    id: 101,
    image: s1,
    title: "Elegant Floral Suit Set",
    mrp: 3999,
    price: 2999,
    discount: "25% OFF",
  },
  {
    id: 102,
    image: s2,
    title: "Cotton Printed Suit Set",
    mrp: 4499,
    price: 3499,
    discount: "22% OFF",
  },
  {
    id: 103,
    image: s3,
    title: "Designer Anarkali Suit Set",
    mrp: 4999,
    price: 3899,
    discount: "20% OFF",
  },
  {
    id: 104,
    image: s4,
    title: "Festive Embroidered Suit Set",
    mrp: 3599,
    price: 2799,
    discount: "22% OFF",
  },
  {
    id: 105,
    image: s5,
    title: "Straight Cut Suit Set",
    mrp: 4200,
    price: 3299,
    discount: "21% OFF",
  },
  {
    id: 106,
    image: s6,
    title: "Premium Silk Suit Set",
    mrp: 3800,
    price: 2899,
    discount: "24% OFF",
  },
  {
    id: 107,
    image: s7,
    title: "Pastel Party Wear Suit Set",
    mrp: 4500,
    price: 3499,
    discount: "22% OFF",
  },
  {
    id: 108,
    image: s8,
    title: "Traditional Ethnic Suit Set",
    mrp: 3999,
    price: 2999,
    discount: "25% OFF",
  },
  {
    id: 109,
    image: s9,
    title: "Luxury Occasion Suit Set",
    mrp: 5200,
    price: 3999,
    discount: "23% OFF",
  },
];

export default function SuitSets() {
  const navigate = useNavigate();

  return (
    <div className="suit-page">

      <img
        src={suitBanner}
        alt="Suit Banner"
        className="suit-banner"
      />

      <div className="breadcrumb">
        Home / Suit Sets
      </div>

      <h1 className="suit-title">
        SUIT SETS
      </h1>

      <div className="suit-layout">

        <FilterSidebar />

        <div className="product-grid">

          {products.map((item) => (
            <div
              className="suit-card"
              key={item.id}
              onClick={() =>
                navigate("/product-details", {
                  state: item,
                })
              }
            >
              <img
                src={item.image}
                alt={item.title}
              />

              <h4>{item.title}</h4>

              <div className="price">

                <span className="mrp">
                  ₹{item.mrp}
                </span>

                <span className="sale-price">
                  ₹{item.price}
                </span>

                <span className="discount">
                  {item.discount}
                </span>

              </div>

            </div>
          ))}

        </div>

      </div>

    </div>
  );
}
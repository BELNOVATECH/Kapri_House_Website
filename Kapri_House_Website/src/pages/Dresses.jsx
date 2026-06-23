import "../styles/Dresses.css";
import { useNavigate } from "react-router-dom";

import dressesBanner from "../assets/dresses.webp"; // ← add your banner image

import d1 from "../assets/ek1.jpg"; // ← add your dress images
import d2 from "../assets/ek2.jpg";
import d3 from "../assets/ek3.jpg";
import d4 from "../assets/ek4.jpg";
import d5 from "../assets/ek5.jpg";
import d6 from "../assets/ek6.jpg";

import FilterSidebar from "../pages/FilterSidebar";

const products = [
  {
    id: 1,
    image: d1,
    title: "White Cotton Dress",
    mrp: 4500,
    price: 3800,
    discount: "20% OFF",
  },
  {
    id: 2,
    image: d2,
    title: "Lime Green Frill Dress",
    mrp: 4550,
    price: 3999,
    discount: "12% OFF",
  },
  {
    id: 3,
    image: d3,
    title: "Black Embroidered Dress",
    mrp: 3350,
    price: 3350,
    discount: "",
  },
  {
    id: 4,
    image: d4,
    title: "Black Floral Dress",
    mrp: 2700,
    price: 2499,
    discount: "7% OFF",
  },
  {
    id: 5,
    image: d5,
    title: "Yellow Puff Sleeve Dress",
    mrp: 3200,
    price: 2799,
    discount: "15% OFF",
  },
  {
    id: 6,
    image: d6,
    title: "Lavender Chiffon Dress",
    mrp: 3900,
    price: 2999,
    discount: "23% OFF",
  },
];

export default function Dresses() {
  const navigate = useNavigate();

  return (
    <div className="dresses-page">

      <img
        src={dressesBanner}
        alt="Dresses Banner"
        className="dresses-banner"
      />

      <div className="breadcrumb">
        Home / Dresses
      </div>

      <h1 className="dresses-title">
        DRESSES
      </h1>

      <div className="dresses-layout">

        <FilterSidebar />

        <div className="product-grid">

          {products.map((item) => (
            <div
              className="dress-card"
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

                {item.discount && (
                  <span className="discount">
                    {item.discount}
                  </span>
                )}

              </div>

            </div>
          ))}

        </div>

      </div>

    </div>
  );
}
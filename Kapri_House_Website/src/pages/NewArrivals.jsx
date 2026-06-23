import "../styles/NewArrivals.css";
import { useNavigate } from "react-router-dom";

import banner from "../assets/banner.jpg";

import na1 from "../assets/na1.jpg";
import na2 from "../assets/na2.jpg";
import na3 from "../assets/na3.jpg";
import na4 from "../assets/na4.jpg";
import na5 from "../assets/na5.jpg";
import na6 from "../assets/na6.jpg";

import FilterSidebar from "../pages/FilterSidebar";

const products = [
  {
    id: 1,
    image: na1,
    title: "White Cotton Dress",
    mrp: 4500,
    price: 3800,
    discount: "20% OFF",
  },
  {
    id: 2,
    image: na2,
    title: "Orange Myra Suit Set",
    mrp: 4550,
    price: 3999,
    discount: "12% OFF",
  },
  {
    id: 3,
    image: na3,
    title: "White Shirt Dress",
    mrp: 3350,
    price: 3350,
    discount: "",
  },
  {
    id: 4,
    image: na4,
    title: "Indigo Dress",
    mrp: 2700,
    price: 2499,
    discount: "7% OFF",
  },
  {
    id: 5,
    image: na5,
    title: "Pink Cotton Dress",
    mrp: 3200,
    price: 2799,
    discount: "15% OFF",
  },
  {
    id: 6,
    image: na6,
    title: "Brown Kurta Set",
    mrp: 3900,
    price: 2999,
    discount: "23% OFF",
  },
];

export default function NewArrivals() {
  const navigate = useNavigate();

  return (
    <div className="arrivals-page">

      <img
        src={banner}
        alt="banner"
        className="arrival-banner"
      />

      <div className="breadcrumb">
        Home / New Arrivals
      </div>

      <h1 className="arrival-title">
        NEW ARRIVALS
      </h1>

      <div className="arrival-layout">

        <FilterSidebar />

        <div className="product-grid">

          {products.map((item) => (
            <div
              className="arrival-card"
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
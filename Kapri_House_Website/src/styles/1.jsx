import "../styles/KurtaSets.css";
import { useNavigate } from "react-router-dom";

import kurtaBanner from "../assets/kurta-banner.webp";

import k1 from "../assets/kurta1.jpg";
import k2 from "../assets/kurta2.jpg";
import k3 from "../assets/kurta3.jpg";
import k4 from "../assets/kurta4.jpg";
import k5 from "../assets/kurta5.jpg";
import k6 from "../assets/kurta6.jpg";

import FilterSidebar from "../pages/FilterSidebar";

const products = [
  {
    id: 1,
    image: k1,
    title: "Pink Floral Kurta Set",
    mrp: 3999,
    price: 2999,
    discount: "25% OFF",
  },
  {
    id: 2,
    image: k2,
    title: "Yellow Printed Kurta Set",
    mrp: 4500,
    price: 3499,
    discount: "22% OFF",
  },
  {
    id: 3,
    image: k3,
    title: "White Embroidered Kurta Set",
    mrp: 4999,
    price: 3899,
    discount: "20% OFF",
  },
  {
    id: 4,
    image: k4,
    title: "Lavender Straight Kurta Set",
    mrp: 3599,
    price: 2799,
    discount: "22% OFF",
  },
  {
    id: 5,
    image: k5,
    title: "Green Cotton Kurta Set",
    mrp: 4200,
    price: 3299,
    discount: "21% OFF",
  },
  {
    id: 6,
    image: k6,
    title: "Blue Printed Kurta Set",
    mrp: 3800,
    price: 2899,
    discount: "24% OFF",
  },
];

export default function KurtaSets() {
  const navigate = useNavigate();

  return (
    <div className="kurta-page">

      <img
        src={kurtaBanner}
        alt="Kurta Banner"
        className="kurta-banner"
      />

      <div className="breadcrumb">
        Home / Kurta Sets
      </div>

      <h1 className="kurta-title">
        KURTA SETS
      </h1>

      <div className="kurta-layout">

        <FilterSidebar />

        <div className="product-grid">

          {products.map((item) => (
            <div
              className="kurta-card"
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
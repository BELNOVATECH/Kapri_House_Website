import "../styles/KurtaSets.css";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

import kurtaBanner from "../assets/kurta-banner.webp";

import k1 from "../assets/kurta1.jpg";
import k2 from "../assets/kurta2.jpg";
import k3 from "../assets/kurta3.jpg";
import k4 from "../assets/kurta4.jpg";
import k5 from "../assets/kurta5.jpg";
import k6 from "../assets/kurta6.jpg";
import k7 from "../assets/kurta7.jpg";
import k8 from "../assets/kurta8.jpg";
import k9 from "../assets/kurta9.jpg";
// import FilterSidebar from "./FilterSidebar";

const products = [
{
  id: 1,
  image: k1,
  title: "Pink Floral Kurta Set",
  category: "Floral",
  color: "#ff69b4",
  sizes: ["M", "L", "XL"],
  mrp: 3999,
  price: 2999,
  discount: "25% OFF",
},
{
  id: 2,
  image: k2,
  title: "Yellow Printed Kurta Set",
  category: "Printed",
  color: "#ffd700",
  sizes: ["S", "M", "L"],
  mrp: 4500,
  price: 3499,
  discount: "22% OFF",
},
{
  id: 3,
  image: k3,
  title: "White Embroidered Kurta Set",
  category: "Embroidered",
  color: "#ffffff",
  sizes: ["M", "L", "XL"],
  mrp: 4999,
  price: 3899,
  discount: "20% OFF",
},
{
  id: 4,
  image: k4,
  title: "Lavender Straight Kurta Set",
  category: "Straight",
  color: "#c8a2c8",
  sizes: ["M", "L"],
  mrp: 3599,
  price: 2799,
  discount: "22% OFF",
},
{
  id: 5,
  image: k5,
  title: "Green Cotton Kurta Set",
  category: "Cotton",
  color: "#228b22",
  sizes: ["L", "XL"],
  mrp: 4200,
  price: 3299,
  discount: "21% OFF",
},
{
  id: 6,
  image: k6,
  title: "Blue Printed Kurta Set",
  category: "Printed",
  color: "#1e90ff",
  sizes: ["S", "M", "L"],
  mrp: 3800,
  price: 2899,
  discount: "24% OFF",
},
{
  id: 7,
  image: k7,
  title: "Peach Floral Kurta Set",
  category: "Floral",
  color: "#ffdab9",
  sizes: ["M", "L"],
  mrp: 4500,
  price: 3499,
  discount: "22% OFF",
},
{
  id: 8,
  image: k8,
  title: "Sky Blue Printed Kurta Set",
  category: "Printed",
  color: "#87ceeb",
  sizes: ["S", "M", "L"],
  mrp: 3999,
  price: 2999,
  discount: "25% OFF",
},
{
  id: 9,
  image: k9,
  title: "Maroon Embroidered Kurta Set",
  category: "Embroidered",
  color: "#800000",
  sizes: ["L", "XL"],
  mrp: 5200,
  price: 3999,
  discount: "23% OFF",
}
 
];
const categories = [
  "NewArrivals",
  "Floral",
  "Printed",
  "Embroidered",
  "Straight",
  "Cotton"
];

const colors = [
  "#ff69b4", // Pink
  "#ffd700", // Yellow
  "#ffffff", // White
  "#c8a2c8", // Lavender
  "#228b22", // Green
  "#1e90ff", // Blue
  "#ffdab9", // Peach
  "#87ceeb", // Sky Blue
  "#800000"  // Maroon
];

const sizes = ["S", "M", "L", "XL"];
export default function KurtaSets() {
  const [selectedColor, setSelectedColor] = useState(null);
const [selectedSize, setSelectedSize] = useState(null);
const [selectedCategory, setSelectedCategory] = useState(null);
const [priceRange, setPriceRange] = useState(5500);
const [sortBy] = useState("featured");
const [filterOpen, setFilterOpen] = useState(true);


const filteredProducts = products.filter((product) => {
  const categoryMatch =
    !selectedCategory ||
    product.category === selectedCategory;

  const colorMatch =
    !selectedColor ||
    product.color === selectedColor;

  const sizeMatch =
    !selectedSize ||
    product.sizes.includes(selectedSize);

  const priceMatch =
    product.price <= priceRange;

  return (
    categoryMatch &&
    colorMatch &&
    sizeMatch &&
    priceMatch
  );
});
const sorted = [...filteredProducts].sort((a, b) => {
  if (sortBy === "price-asc") return a.price - b.price;
  if (sortBy === "price-desc") return b.price - a.price;
  if (sortBy === "discount")
    return parseInt(b.discount) - parseInt(a.discount);

  return a.id - b.id;
});
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


<aside className="sr-sidebar">
<div className="sr-toolbar">
  <button
    className="sr-filter-btn"
    onClick={() => setFilterOpen(!filterOpen)}
  >
    ☰ FILTER
  </button>
</div>
  <div className="sr-filter-group">
    <h4>CATEGORY</h4>

    {categories.map((cat) => (
      <label key={cat} className="sr-checkbox">
        <input
          type="checkbox"
          checked={selectedCategory === cat}
          onChange={() =>
            setSelectedCategory(
              selectedCategory === cat ? null : cat
            )
          }
        />
        {cat}
      </label>
    ))}
  </div>

  <div className="sr-filter-group">
    <h4>PRICE</h4>

    <input
      type="range"
      min={0}
      max={5500}
      value={priceRange}
      onChange={(e) =>
        setPriceRange(Number(e.target.value))
      }
      className="sr-range"
    />

    <div className="sr-price-labels">
      <span>₹0</span>
      <span>₹{priceRange}</span>
    </div>
  </div>

  <div className="sr-filter-group">
    <h4>COLOR</h4>

    <div className="sr-colors">
      {colors.map((c) => (
        <button
          key={c}
          className={`sr-color-dot ${
            selectedColor === c ? "active" : ""
          }`}
          style={{
            background: c,
            border:
              c === "#ffffff"
                ? "1px solid #ccc"
                : "none",
          }}
          onClick={() =>
            setSelectedColor(
              selectedColor === c ? null : c
            )
          }
        />
      ))}
    </div>
  </div>

  <div className="sr-filter-group">
    <h4>SIZE</h4>

    <div className="sr-sizes">
      {sizes.map((s) => (
        <button
          key={s}
          className={`sr-size-btn ${
            selectedSize === s ? "active" : ""
          }`}
          onClick={() =>
            setSelectedSize(
              selectedSize === s ? null : s
            )
          }
        >
          {s}
        </button>
      ))}
    </div>
  </div>

</aside>
        <div className="product-grid">

       {sorted.map((item) => {
  console.log(item);

  return (
    <div
      className="kurta-card"
      key={item.id}
      onClick={() =>
        navigate("/product-details", {
          state: item,
        })
      }
    >
      <img src={item.image} alt={item.title} />

      <h4>{item.title}</h4>

<div className="price">
  <span className="mrp">₹{item.mrp}</span>
  <span className="sale-price">₹{item.price}</span>
  <span className="offer-badge">{item.discount}</span>
</div>
    </div>
  );
})}

            </div>

        </div>

      </div>

  );
}
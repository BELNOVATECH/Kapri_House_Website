import "../styles/ShrugSets.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import sh1  from "../assets/sh1.webp";
import sh2  from "../assets/sh2.webp";
import sh3  from "../assets/sh3.jpg";
import sh4  from "../assets/sh4.jpg";
import sh5  from "../assets/sh5.jpg";
import sh6  from "../assets/sh6.jpg";
import sh7  from "../assets/sh7.jpg";
import sh8  from "../assets/sh8.jpg";
import sh9  from "../assets/sh9.jpg";
import sh10 from "../assets/sh10.jpg";
import sh11 from "../assets/sh11.jpeg";
import sh12 from "../assets/sh12.jpeg";
import shrugBanner from "../assets/ban.webp";

const products = [
  {
    id: 1,
    name: "Raven black printed shrug set",
    category: "Printed Sets",
    color: "#ff69b4",
    sizes: ["S", "M", "L"],
    mrp: 3999,
    price: 2499,
    discount: "37% OFF",
    image: sh1,
  },
  {
    id: 2,
    name: "Solid  Shrug Set",
    category: "Printed Sets",
    color: "#4a6fa5",
    sizes: ["M", "L", "XL"],
    mrp: 3500,
    price: 2199,
    discount: "37% OFF",
    image: sh2,
  },
  {
    id: 3,
    name: "cotton Shrug Set",
    category: "Cotton Shrug",
    color: "#b8860b",
    sizes: ["L", "XL", "XXL"],
    mrp: 4200,
    price: 2799,
    discount: "33% OFF",
    image: sh3,
  },
  {
    id: 4,
    name: "Printed Linen Shrug Set",
    category: "Embroidered",
    color: "#ff0000",
    sizes: ["S", "M", "L"],
    mrp: 3800,
    price: 2499,
    discount: "34% OFF",
    image: sh4,
  },
  {
    id: 5,
    name: "Block Print Shrug Set",
    category: "Embroidered",
    color: "#ffa500",
    sizes: ["M", "L", "XL"],
    mrp: 4500,
    price: 2999,
    discount: "33% OFF",
    image: sh5,
  },
  {
    id: 6,
    name: "printed Tie-Dye Shrug Set",
    category: "Printed Sets",
    color: "#800080",
    sizes: ["S", "M", "L"],
    mrp: 3999,
    price: 2499,
    discount: "37% OFF",
    image: sh6,
  },
  {
    id: 7,
    name: "Shrug Set",
    category: "New Arrivals",
    color: "#e8c9a0",
    sizes: ["S", "M", "L"],
    mrp: 3500,
    price: 2199,
    discount: "37% OFF",
    image: sh7,
  },
  {
    id: 8,
    name: "Embroidered Shrug Set",
    category: "Embroidered",
    color: "#6b8e6b",
    sizes: ["M", "L", "XL"],
    mrp: 3200,
    price: 1999,
    discount: "37% OFF",
    image: sh8,
  },
  {
    id: 9,
    name: "Printed Kurti Shrug Set",
    category: "New Arrivals",
    color: "#d97882",
    sizes: ["S", "M", "L"],
    mrp: 4200,
    price: 2799,
    discount: "33% OFF",
    image: sh9,
  },
  {
    id: 10,
    name: "Organza Shrug Set",
    category: "Embroidered",
    color: "#00ced1",
    sizes: ["L", "XL", "XXL"],
    mrp: 5000,
    price: 3499,
    discount: "30% OFF",
    image: sh10,
  },
  {
    id: 11,
    name: "Rust Cotton Shrug Set",
    category: "printed Shrug",
    color: "#8b4513",
    sizes: ["M", "L", "XL"],
    mrp: 3800,
    price: 2499,
    discount: "34% OFF",
    image: sh11,
  },
  {
    id: 12,
    name: "Ivory Lace Shrug Set",
    category: "Shrug Sets",
    color: "#fff",
    sizes: ["S", "M", "L"],
    mrp: 4500,
    price: 2999,
    discount: "33% OFF",
    image: sh12,
  },
];

const categories = ["New Arrivals", "Shrug Sets", "Cotton Shrug", "Printed Sets", "Embroidered"];
const colors = [
  "#fff",
  "#000",
  "#e8c9a0",
  "#d97882",
  "#6b8e6b",
  "#b8860b",
  "#4a6fa5",
  "#c49a6c",
  "#ff0000",
  "#800080",
  "#ffa500",
  "#ffff00",
  "#00ced1",
  "#ff69b4",
  "#808080",
  "#8b4513",
];
const sizes      = ["XS","S","M","L","XL","XXL"];

export default function ShrugSets() {
  const navigate = useNavigate();

  const [selectedColor,    setSelectedColor]    = useState(null);
  const [selectedSize,     setSelectedSize]     = useState(null);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [priceRange,       setPriceRange]       = useState(5000);
  const [sortBy,           setSortBy]           = useState("featured");
  const [filterOpen,       setFilterOpen]       = useState(true);

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
  if (sortBy === "price-asc")
    return a.price - b.price;

  if (sortBy === "price-desc")
    return b.price - a.price;

  if (sortBy === "discount")
    return parseInt(b.discount) - parseInt(a.discount);

  return a.id - b.id;
});

  return (
    <div className="sh-page">

      <div className="sh-breadcrumb">
        <span>Home</span> › <span>Shrug Sets</span>
      </div>

      <img src={shrugBanner} alt="Shrug Sets" className="sh-banner" />

      <div className="sh-toolbar">
        <button className="sh-filter-btn" onClick={() => setFilterOpen(!filterOpen)}>
          ☰ FILTER
        </button>
        <span className="sh-count">{sorted.length} Products</span>
        <div className="sh-sort">
          <label>Sort by</label>
          <select value={sortBy} onChange={e => setSortBy(e.target.value)}>
            <option value="featured">Featured</option>
            <option value="price-asc">Price: Low to High</option>
            <option value="price-desc">Price: High to Low</option>
            <option value="discount">Best Discount</option>
          </select>
        </div>
      </div>

      <div className="sh-body">

        {filterOpen && (
          <aside className="sh-sidebar">

            <div className="sh-filter-group">
              <h4>CATEGORY</h4>
              {categories.map(cat => (
                <label key={cat} className="sh-checkbox">
                  <input
                    type="checkbox"
                    checked={selectedCategory === cat}
                    onChange={() => setSelectedCategory(selectedCategory === cat ? null : cat)}
                  />
                  {cat}
                </label>
              ))}
            </div>

            <div className="sh-filter-group">
              <h4>PRICE</h4>
              <input
                type="range"
                min={0}
                max={5000}
                value={priceRange}
                onChange={e => setPriceRange(Number(e.target.value))}
                className="sh-range"
              />
              <div className="sh-price-labels">
                <span>₹0</span>
                <span>₹{priceRange.toLocaleString()}</span>
              </div>
            </div>

            <div className="sh-filter-group">
              <h4>COLOR</h4>
              <div className="sh-colors">
                {colors.map((c, i) => (
                  <button
                    key={i}
                    className={`sh-color-dot ${selectedColor === c ? "active" : ""}`}
                    style={{ background: c, border: c === "#fff" ? "1px solid #ccc" : "none" }}
                    onClick={() => setSelectedColor(selectedColor === c ? null : c)}
                  />
                ))}
              </div>
            </div>

            <div className="sh-filter-group">
              <h4>SIZE</h4>
              <div className="sh-sizes">
                {sizes.map(s => (
                  <button
                    key={s}
                    className={`sh-size-btn ${selectedSize === s ? "active" : ""}`}
                    onClick={() => setSelectedSize(selectedSize === s ? null : s)}
                  >
                    {s}
                  </button>
                ))}
              </div>
            </div>

          </aside>
        )}

        <div className={`sh-grid ${filterOpen ? "" : "sh-grid--full"}`}>
         {sorted.length === 0 ? (
  <div className="sh-no-products">
    <h2>No Shrug Sets Found</h2>
    <p>Try changing your filters.</p>
  </div>
) : 
  sorted.map(product => (
            <div
              className="sh-card"
              key={product.id}
              onClick={() =>
                navigate("/product-details", {
                  state: product,
                })
              }
            >
              <div className="sh-img-wrap">
                <img src={product.image} alt={product.name} />
              </div>
              <div className="sh-info">
                <div className="sh-stars">★★★★★</div>
                <h4>{product.name}</h4>
                <div className="sh-price">
                  <span className="sh-mrp">₹{product.mrp.toLocaleString()}</span>
                  <span className="sh-current">₹{product.price.toLocaleString()}</span>
                  <span className="sh-off">({product.discount})</span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
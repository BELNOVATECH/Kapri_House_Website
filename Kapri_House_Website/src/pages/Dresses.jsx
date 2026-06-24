import "../styles/Dresses.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import dressesBanner from "../assets/dresses.webp";

import d1 from "../assets/ek1.jpg";
import d2 from "../assets/ek2.jpg";
import d3 from "../assets/ek3.jpg";
import d4 from "../assets/ek4.jpg";
import d5 from "../assets/ek5.jpg";
import d6 from "../assets/ek6.jpg";

const products = [
  { id: 1, name: "White Cotton Dress",        mrp: 4500, price: 3800, discount: "20% OFF", image: d1 },
  { id: 2, name: "Lime Green Frill Dress",     mrp: 4550, price: 3999, discount: "12% OFF", image: d2 },
  { id: 3, name: "Black Embroidered Dress",    mrp: 3350, price: 3350, discount: "",        image: d3 },
  { id: 4, name: "Black Floral Dress",         mrp: 2700, price: 2499, discount: "7% OFF",  image: d4 },
  { id: 5, name: "Yellow Puff Sleeve Dress",   mrp: 3200, price: 2799, discount: "15% OFF", image: d5 },
  { id: 6, name: "Lavender Chiffon Dress",     mrp: 3900, price: 2999, discount: "23% OFF", image: d6 },
];

const categories = ["New Arrivals", "Casual Dresses", "Party Wear", "Floral Dresses", "Embroidered"];
const colors     = ["#fff","#000","#e8c9a0","#d97882","#6b8e6b","#b8860b","#4a6fa5","#c49a6c"];
const sizes      = ["XS","S","M","L","XL","XXL"];

export default function Dresses() {
  const navigate = useNavigate();

  const [selectedColor,    setSelectedColor]    = useState(null);
  const [selectedSize,     setSelectedSize]     = useState(null);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [priceRange,       setPriceRange]       = useState(5000);
  const [sortBy,           setSortBy]           = useState("featured");
  const [filterOpen,       setFilterOpen]       = useState(true);

  const sorted = [...products].sort((a, b) => {
    if (sortBy === "price-asc")  return a.price - b.price;
    if (sortBy === "price-desc") return b.price - a.price;
    if (sortBy === "discount")   return parseInt(b.discount || 0) - parseInt(a.discount || 0);
    return a.id - b.id;
  }).filter(p => p.price <= priceRange);

  return (
    <div className="dr-page">

      <div className="dr-breadcrumb">
        <span>Home</span> › <span>Dresses</span>
      </div>

      <img src={dressesBanner} alt="Dresses" className="dr-banner" />

      <div className="dr-toolbar">
        <button className="dr-filter-btn" onClick={() => setFilterOpen(!filterOpen)}>
          ☰ FILTER
        </button>
        <span className="dr-count">{sorted.length} Products</span>
        <div className="dr-sort">
          <label>Sort by</label>
          <select value={sortBy} onChange={e => setSortBy(e.target.value)}>
            <option value="featured">Featured</option>
            <option value="price-asc">Price: Low to High</option>
            <option value="price-desc">Price: High to Low</option>
            <option value="discount">Best Discount</option>
          </select>
        </div>
      </div>

      <div className="dr-body">

        {filterOpen && (
          <aside className="dr-sidebar">

            <div className="dr-filter-group">
              <h4>CATEGORY</h4>
              {categories.map(cat => (
                <label key={cat} className="dr-checkbox">
                  <input
                    type="checkbox"
                    checked={selectedCategory === cat}
                    onChange={() => setSelectedCategory(selectedCategory === cat ? null : cat)}
                  />
                  {cat}
                </label>
              ))}
            </div>

            <div className="dr-filter-group">
              <h4>PRICE</h4>
              <input
                type="range"
                min={0}
                max={5000}
                value={priceRange}
                onChange={e => setPriceRange(Number(e.target.value))}
                className="dr-range"
              />
              <div className="dr-price-labels">
                <span>₹0</span>
                <span>₹{priceRange.toLocaleString()}</span>
              </div>
            </div>

            <div className="dr-filter-group">
              <h4>COLOR</h4>
              <div className="dr-colors">
                {colors.map((c, i) => (
                  <button
                    key={i}
                    className={`dr-color-dot ${selectedColor === c ? "active" : ""}`}
                    style={{ background: c, border: c === "#fff" ? "1px solid #ccc" : "none" }}
                    onClick={() => setSelectedColor(selectedColor === c ? null : c)}
                  />
                ))}
              </div>
            </div>

            <div className="dr-filter-group">
              <h4>SIZE</h4>
              <div className="dr-sizes">
                {sizes.map(s => (
                  <button
                    key={s}
                    className={`dr-size-btn ${selectedSize === s ? "active" : ""}`}
                    onClick={() => setSelectedSize(selectedSize === s ? null : s)}
                  >
                    {s}
                  </button>
                ))}
              </div>
            </div>

          </aside>
        )}

        <div className={`dr-grid ${filterOpen ? "" : "dr-grid--full"}`}>
          {sorted.map(product => (
            <div
              className="dr-card"
              key={product.id}
              onClick={() =>
                navigate("/product-details", {
                  state: product,
                })
              }
            >
              <div className="dr-img-wrap">
                <img src={product.image} alt={product.name} />
              </div>
              <div className="dr-info">
                <div className="dr-stars">★★★★★</div>
                <h4>{product.name}</h4>
                <div className="dr-price">
                  <span className="dr-mrp">₹{product.mrp.toLocaleString()}</span>
                  <span className="dr-current">₹{product.price.toLocaleString()}</span>
                  {product.discount && (
                    <span className="dr-off">({product.discount})</span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
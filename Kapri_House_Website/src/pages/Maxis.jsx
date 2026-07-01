import "../styles/Maxis.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import mx1  from "../assets/mx1.webp";
import mx2  from "../assets/mx2.webp";
import mx3  from "../assets/mx3.webp";
import mx4  from "../assets/mx4.webp";
import mx5  from "../assets/mx5.webp";
import mx6  from "../assets/mx6.webp";
import mx7  from "../assets/mx7.webp";
import mx8  from "../assets/mx8.webp";
import mx9  from "../assets/mx9.webp";
import mx10 from "../assets/mx10.webp";
import mx11 from "../assets/mx11.webp";
import mx12 from "../assets/mx12.webp";
import maxiBanner from "../assets/maxisban.webp";

const products = [
  {
    id: 1,
    name: "Floral Print Maxi Dress",
    category: "Party Wear",
    color: "#fff", // White / Cream
    sizes: ["S", "M", "L"],
    mrp: 4999,
    price: 3499,
    discount: "30% OFF",
    image: mx1,
  },
  {
    id: 2,
    name: "Solid Flared Maxi",
    category: "Casual Maxis",
    color: "#000",
    sizes: ["M", "L", "XL"],
    mrp: 4500,
    price: 2999,
    discount: "33% OFF",
    image: mx2,
  },
  {
    id: 3,
    name: "Tiered Cotton Maxi Dress",
    category: "Printed Maxis",
    color: "#6b8e6b", // Green
    sizes: ["S", "M", "L"],
    mrp: 3999,
    price: 2799,
    discount: "30% OFF",
    image: mx3,
  },
  {
    id: 4,
    name: "Embroidered Maxi Gown",
    category: "Printed Maxis",
    color: "#b8860b", // Gold
    sizes: ["L", "XL", "XXL"],
    mrp: 6999,
    price: 4999,
    discount: "29% OFF",
    image: mx4,
  },
  {
    id: 5,
    name: "Off-Shoulder Maxi Dress",
    category: "Party Wear",
    color: "#d97882", // Pink
    sizes: ["S", "M", "L"],
    mrp: 4200,
    price: 2899,
    discount: "31% OFF",
    image: mx5,
  },
  {
    id: 6,
    name: "Printed Wrap Maxi Dress",
    category: "Party Wear",
    color: "#4a6fa5", // Blue
    sizes: ["M", "L", "XL"],
    mrp: 3800,
    price: 2599,
    discount: "32% OFF",
    image: mx6,
  },
  {
    id: 7,
    name: "Ruffle Sleeve Maxi Dress",
    category: "New Arrivals",
    color: "#6b8e6b", // Olive Green
    sizes: ["M", "L", "XL"],
    mrp: 4600,
    price: 3199,
    discount: "30% OFF",
    image: mx7,
  },
  {
    id: 8,
    name: "Georgette Flowy Maxi",
    category: "Casual Maxis",
    color: "#98fb98", // Light Green
    sizes: ["L", "XL", "XXL"],
    mrp: 5200,
    price: 3699,
    discount: "29% OFF",
    image: mx8,
  },
  {
    id: 9,
    name: "Tie-Dye Maxi Dress",
    category: "Casual Maxis",
    color: "#ff0000", // Red
    sizes: ["S", "M", "L"],
    mrp: 3900,
    price: 2699,
    discount: "31% OFF",
    image: mx9,
  },
  {
    id: 10,
    name: "Boho Maxi Dress",
    category: "Solid Maxis",
    color: "#ffa500", // Orange
    sizes: ["M", "L", "XL"],
    mrp: 4400,
    price: 2999,
    discount: "32% OFF",
    image: mx10,
  },
  {
    id: 11,
    name: "Halter Neck Maxi Dress",
    category: "Party Wear",
    color: "#000", // Black
    sizes: ["L", "XL", "XXL"],
    mrp: 4800,
    price: 3299,
    discount: "31% OFF",
    image: mx11,
  },
  {
    id: 12,
    name: "Pastel Chiffon Maxi Dress",
    category: "New Arrivals",
    color: "#ff0000", // White
    sizes: ["S", "M", "L"],
    mrp: 5500,
    price: 3899,
    discount: "29% OFF",
    image: mx12,
  },
];

const categories = ["New Arrivals", "Casual Maxis", "Party Wear", "Printed Maxis", "Solid Maxis"];
const colors = [
  { id: 1, name: "White", hex: "#fff" },
  { id: 2, name: "Black", hex: "#000" },
  { id: 3, name: "Pink", hex: "#d97882" },
  { id: 4, name: "Green", hex: "#6b8e6b" },
  { id: 5, name: "Light Green", hex: "#98fb98" },
  { id: 6, name: "Gold", hex: "#b8860b" },
  { id: 7, name: "Blue", hex: "#4a6fa5" },
  { id: 8, name: "Red", hex: "#ff0000" },
  { id: 9, name: "Orange", hex: "#ffa500" },
];
const sizes      = ["XS","S","M","L","XL","XXL"];

export default function Maxis() {
  const navigate = useNavigate();

  const [selectedColor,    setSelectedColor]    = useState(null);
  const [selectedSize,     setSelectedSize]     = useState(null);
  const [selectedCategory, setSelectedCategory] = useState([]); // FIX: array for multi-select
  const [priceRange,       setPriceRange]       = useState(7000);
  const [sortBy,           setSortBy]           = useState("featured");
  const [filterOpen,       setFilterOpen]       = useState(true);

  const toggleCategory = (cat) => {
    setSelectedCategory(prev =>
      prev.includes(cat)
        ? prev.filter(c => c !== cat)   // uncheck: remove it
        : [...prev, cat]                // check: add it
    );
  };

const filteredProducts = products.filter((product) => {
  const categoryMatch =
    selectedCategory.length === 0 ||
    selectedCategory.includes(product.category);

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
    <div className="mx-page">

      <div className="mx-breadcrumb">
        <span>Home</span> › <span>Maxis</span>
      </div>

      <img src={maxiBanner} alt="Maxis" className="mx-banner" />

      <div className="mx-toolbar">
        <button className="mx-filter-btn" onClick={() => setFilterOpen(!filterOpen)}>
          ☰ FILTER
        </button>
        <span className="mx-count">{sorted.length} Products</span>
        <div className="mx-sort">
          <label>Sort by</label>
          <select value={sortBy} onChange={e => setSortBy(e.target.value)}>
            <option value="featured">Featured</option>
            <option value="price-asc">Price: Low to High</option>
            <option value="price-desc">Price: High to Low</option>
            <option value="discount">Best Discount</option>
          </select>
        </div>
      </div>

      <div className="mx-body">

        {filterOpen && (
          <aside className="mx-sidebar">

            <div className="mx-filter-group">
              <h4>CATEGORY</h4>
              {categories.map(cat => (
                <label key={cat} className="mx-checkbox">
                  <input
                    type="checkbox"
                    checked={selectedCategory.includes(cat)}
                    onChange={() => toggleCategory(cat)}
                  />
                  {cat}
                </label>
              ))}
            </div>

            <div className="mx-filter-group">
              <h4>PRICE</h4>
              <input
                type="range"
                min={0}
                max={7000}
                value={priceRange}
                onChange={e => setPriceRange(Number(e.target.value))}
                className="mx-range"
              />
              <div className="mx-price-labels">
                <span>₹0</span>
                <span>₹{priceRange.toLocaleString()}</span>
              </div>
            </div>

          <div className="mx-filter-group">
  <h4>COLOR</h4>

  <div className="mx-colors">
    {colors.map((color) => (
      <button
        key={color.id}
        type="button"
        title={color.name}
        className={`mx-color-dot ${
          selectedColor === color.hex ? "active" : ""
        }`}
        style={{
          backgroundColor: color.hex,
          border: color.hex === "#fff" ? "1px solid #ccc" : "none",
        }}
        onClick={() =>
          setSelectedColor(
            selectedColor === color.hex ? null : color.hex
          )
        }
      />
    ))}
  </div>
</div>

            <div className="mx-filter-group">
              <h4>SIZE</h4>
              <div className="mx-sizes">
                {sizes.map(s => (
                  <button
                    key={s}
                    className={`mx-size-btn ${selectedSize === s ? "active" : ""}`}
                    onClick={() => setSelectedSize(selectedSize === s ? null : s)}
                  >
                    {s}
                  </button>
                ))}
              </div>
            </div>

          </aside>
        )}

<div className={`mx-grid ${filterOpen ? "" : "mx-grid--full"}`}>
  {sorted.length === 0 ? (
    <div className="mx-no-products">
      <h2>No Maxis Found</h2>
      <p>Try changing your filters.</p>
    </div>
  ) : 
    sorted.map(product => (
            <div
              className="mx-card"
              key={product.id}
              onClick={() =>
                navigate("/product-details", {
                  state: product,
                })
              }
            >
              <div className="mx-img-wrap">
                <img src={product.image} alt={product.name} />
              </div>
              <div className="mx-info">
                <div className="mx-stars">★★★★★</div>
                <h4>{product.name}</h4>
                <div className="mx-price">
                  <span className="mx-mrp">₹{product.mrp.toLocaleString()}</span>
                  <span className="mx-current">₹{product.price.toLocaleString()}</span>
                  <span className="mx-off">({product.discount})</span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
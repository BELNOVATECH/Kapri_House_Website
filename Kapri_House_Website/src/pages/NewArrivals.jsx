import "../styles/NewArrivals.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import banner from "../assets/banner.jpg";

import na1 from "../assets/na1.jpg";
import na2 from "../assets/na2.jpg";
import na3 from "../assets/na3.jpg";
import na4 from "../assets/na4.jpg";
import na5 from "../assets/na5.jpg";
import na6 from "../assets/na6.jpg";

// import FilterSidebar from "../pages/FilterSidebar";

const products = [
  {
    id: 1,
    image: na1,
    title: "White Cotton Dress",
    category: "Dresses",
    color: "#ffffff",
    sizes: ["S", "M", "L"],
    mrp: 4500,
    price: 3800,
    discount: "20% OFF",
  },
  {
    id: 2,
    image: na2,
    title: "Orange Myra Suit Set",
    category: "Suit Sets",
    color: "#ffa500",
    sizes: ["M", "L", "XL"],
    mrp: 4550,
    price: 3999,
    discount: "12% OFF",
  },
  {
    id: 3,
    image: na3,
    title: "White Shirt Dress",
    category: "Dresses",
    color: "#ffffff",
    sizes: ["S", "M"],
    mrp: 3350,
    price: 3350,
    discount: "",
  },
  {
    id: 4,
    image: na4,
    title: "Indigo Dress",
    category: "Dresses",
    color: "#4a6fa5",
    sizes: ["M", "L"],
    mrp: 2700,
    price: 2499,
    discount: "7% OFF",
  },
  {
    id: 5,
    image: na5,
    title: "Pink Cotton Dress",
    category: "Dresses",
    color: "#d97882",
    sizes: ["S", "M", "L"],
    mrp: 3200,
    price: 2799,
    discount: "15% OFF",
  },
  {
    id: 6,
    image: na6,
    title: "Brown Kurta Set",
    category: "Kurtas",
    color: "#8b4513",
    sizes: ["M", "L", "XL"],
    mrp: 3900,
    price: 2999,
    discount: "23% OFF",
  },
];
const categories = ["Dresses", "Suit Sets", "Kurtas"];

const colors = [
  "#ffffff",
  "#ffa500",
  "#4a6fa5",
  "#d97882",
  "#8b4513",
];

const sizes = ["S", "M", "L", "XL"];
export default function NewArrivals() {
  const navigate = useNavigate();
const [selectedColor, setSelectedColor] = useState(null);
const [selectedSize, setSelectedSize] = useState(null);
const [selectedCategory, setSelectedCategory] = useState(null);
const [priceRange, setPriceRange] = useState(5000);
const [filterOpen, setFilterOpen] = useState(true);
  const [sortBy, setSortBy] = useState("featured");

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

const sortedProducts = [...filteredProducts].sort((a, b) => {
  if (sortBy === "price-asc") return a.price - b.price;

  if (sortBy === "price-desc") return b.price - a.price;

  if (sortBy === "discount")
    return parseInt(b.discount || "0") -
           parseInt(a.discount || "0");

  return a.id - b.id;
});

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

<div className="arrival-toolbar">

  <button
    className="filter-btn"
    onClick={() => setFilterOpen(!filterOpen)}
  >
    ☰ FILTER
  </button>

  <span className="arrival-count">
    {sortedProducts.length} Products
  </span>

  <div className="arrival-sort">
    <label>Sort by</label>

    <select
      value={sortBy}
      onChange={(e) => setSortBy(e.target.value)}
    >
      <option value="featured">Featured</option>
      <option value="price-asc">Price: Low to High</option>
      <option value="price-desc">Price: High to Low</option>
      <option value="discount">Best Discount</option>
    </select>

  </div>

</div>

      <div className="arrival-layout">
        {/* <FilterSidebar /> */}
{filterOpen && (
  <aside className="filter-sidebar">

    <div className="filter-block">
      <h4>CATEGORY</h4>

      {categories.map((cat) => (
        <label key={cat}>
          <input
            type="checkbox"
            checked={selectedCategory === cat}
            onChange={() =>
              setSelectedCategory(
                selectedCategory === cat
                  ? null
                  : cat
              )
            }
          />
          {cat}
        </label>
      ))}
    </div>

    <div className="filter-block">
      <h4>PRICE</h4>

      <input
        type="range"
        min="0"
        max="5000"
        value={priceRange}
        onChange={(e) =>
          setPriceRange(
            Number(e.target.value)
          )
        }
      />

      <div className="price-labels">
        <span>₹0</span>
        <span>₹{priceRange}</span>
      </div>
    </div>

    <div className="filter-block">
      <h4>COLOR</h4>

      <div className="color-list">

        {colors.map((color) => (
          <span
            key={color}
            style={{
              background: color,
              border:
                color === "#ffffff"
                  ? "1px solid #ccc"
                  : "none",
              outline:
                selectedColor === color
                  ? "2px solid black"
                  : "none",
            }}
            onClick={() =>
              setSelectedColor(
                selectedColor === color
                  ? null
                  : color
              )
            }
          />
        ))}

      </div>
    </div>

    <div className="filter-block">
      <h4>SIZE</h4>

      <div className="size-list">

        {sizes.map((size) => (
          <button
            key={size}
            className={`size-btn ${
              selectedSize === size
                ? "active"
                : ""
            }`}
            onClick={() =>
              setSelectedSize(
                selectedSize === size
                  ? null
                  : size
              )
            }
          >
            {size}
          </button>
        ))}

      </div>
    </div>

  </aside>
)}
        <div className="product-grid">
          {sortedProducts.length === 0 ? (
            <div className="no-products">
              <h2>No Products Found</h2>
              <p>Try changing your filters.</p>
            </div>
          ) : (
            sortedProducts.map((item) => (
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
            ))
          )}
        </div>
      </div>
    </div>
  );
}
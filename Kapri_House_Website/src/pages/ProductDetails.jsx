import "../styles/ProductDetails.css";
import { useState } from "react";
import { useLocation } from "react-router-dom";
import ZoomImage from "./ZoomImage";

export default function ProductDetails() {
  const { state } = useLocation();
  // eslint-disable-next-line no-unused-vars
  const [selectedSize, setSelectedSize] = useState("");
  // eslint-disable-next-line no-unused-vars
  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState(0); // ← NEW

  if (!state) return <h2>No Product Found</h2>;

  // Build the 4-image array from state (all same image since only one provided)
  const images = [state.image, state.image, state.image, state.image]; // ← NEW

  // eslint-disable-next-line no-unused-vars
  const handleAddToCart = () => {
    if (!selectedSize) {
      alert("Please select a size");
      return;
    }
    const cartItem = { ...state, size: selectedSize, quantity };
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    cart.push(cartItem);
    localStorage.setItem("cart", JSON.stringify(cart));
    alert("Product added to cart");
  };

  return (
    <div className="product-page">
      <div className="product-container">
        <div className="product-gallery">

          <div className="thumb-grid">
            {images.map((img, i) => (        // ← CHANGED
              <img
                key={i}
                src={img}
                alt=""
                onClick={() => setSelectedImage(i)}
                className={selectedImage === i ? "active-thumb" : ""}
                style={{ cursor: "pointer" }}
              />
            ))}
          </div>

          <div className="gallery-main">
            {/* key trick forces re-mount → triggers CSS fade-in on change */}
            <ZoomImage
              key={selectedImage}            // ← NEW
              src={images[selectedImage]}    // ← CHANGED
              alt={state.title}
              className="main-image"
            />
          </div>

        </div>

        <div className="product-info">
          <h1>{state.title}</h1>
          <div className="price-row">
            <span className="sale-price">₹{state.price}</span>
            <span className="mrp">₹{state.mrp}</span>
            <span className="discount">{state.discount}</span>
          </div>
          <p className="stock">Only 10 pieces left</p>
          <div className="size-section">
            <h4>Select Size</h4>
            <div className="sizes">
              {["XS", "S", "M", "L", "XL"].map((size) => {
                const isAvailable = state.sizes?.includes(size);
                return (
                  <button
                    key={size}
                    disabled
                    className={`
                      ${selectedSize === size ? "active-size" : ""}
                      ${!isAvailable ? "disabled-size" : ""}
                    `}
                  >
                    {size}
                  </button>
                );
              })}
            </div>
          </div>
          <div className="qty-box">
            <button disabled>-</button>
            <span>{quantity}</span>
            <button disabled>+</button>
          </div>
          <div className="cart-row">
            <button className="cart-btn" disabled>ADD TO CART</button>
            <span className="coming-soon">Stay Tuned | Coming Soon</span>
          </div>
          <div className="description">
            <h3>Description</h3>
            <p>
              Radiate festive charm with the Orange Myra Suit Set. Crafted in rich cotton silk,
              this A-line silhouette features a round neck with a notch, three-quarter sleeves,
              and delicate lace detailing on the yoke and sleeve hems. Paired with matching pants
              and a soft dupatta, this vibrant ensemble is perfect for daytime celebrations and
              intimate festive gatherings.
              {"\n\n"}Model height: 5.6ft{"\n"}Fabric: Georgette{"\n"}Handcrafted in India{"\n"}
              Size: Refer to size chart. Model is wearing size Small.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
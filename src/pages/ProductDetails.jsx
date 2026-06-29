import "../styles/ProductDetails.css";
import { useState } from "react";
import { useLocation } from "react-router-dom";
export default function ProductDetails() {
  const { state } = useLocation();
const [selectedSize, setSelectedSize] = useState("");
const [quantity, setQuantity] = useState(1);
  if (!state) return <h2>No Product Found</h2>;
const handleAddToCart = () => {
  if (!selectedSize) {
    alert("Please select a size");
    return;
  }

  const cartItem = {
    ...state,
    size: selectedSize,
    quantity,
  };

  const cart =
    JSON.parse(localStorage.getItem("cart")) || [];

  cart.push(cartItem);

  localStorage.setItem(
    "cart",
    JSON.stringify(cart)
  );

  alert("Product added to cart");
};
  return (
    <div className="product-page">

      <div className="product-container">

        <div className="product-gallery">

          <img src={state.image} alt="" className="main-image"/>

          <div className="thumb-grid">
            <img src={state.image} alt="" />
            <img src={state.image} alt="" />
            <img src={state.image} alt="" />
            <img src={state.image} alt="" />
          </div>

        </div>

        <div className="product-info">

          <h1>{state.title}</h1>

          <div className="price-row">

            <span className="sale-price">
              ₹{state.price}
            </span>

            <span className="mrp">
              ₹{state.mrp}
            </span>

            <span className="discount">
              {state.discount}
            </span>

          </div>

          <p className="stock">
            Only 10 pieces left
          </p>

          <div className="size-section">

            <h4>Select Size</h4>

<div className="sizes">
  {["XS", "S", "M", "L", "XL"].map((size) => {
    const isAvailable = state.sizes?.includes(size);

    return (
      <button
        key={size}
        disabled={!isAvailable}
        className={`
          ${selectedSize === size ? "active-size" : ""}
          ${!isAvailable ? "disabled-size" : ""}
        `}
        onClick={() =>
          isAvailable && setSelectedSize(size)
        }
      >
        {size}
      </button>
    );
  })}
</div>


          </div>

<div className="qty-box">

  <button
    onClick={() =>
      quantity > 1 &&
      setQuantity(quantity - 1)
    }
  >
    -
  </button>

  <span>{quantity}</span>

  <button
    onClick={() =>
      setQuantity(quantity + 1)
    }
  >
    +
  </button>

</div>

<div className="cart-row">
  <button
    className="cart-btn"
    onClick={handleAddToCart}
  >
    ADD TO CART
  </button>

  <span className="coming-soon">
    Stay Tuned | Coming Soon
  </span>
</div>
          <div className="description">

            <h3>Description</h3>

            <p>
            Radiate festive charm with the Orange Myra Suit Set. Crafted in rich cotton silk, this A-line silhouette features a round neck with a notch, three-quarter sleeves, and delicate lace detailing on the yoke and sleeve hems. Paired with matching pants and a soft dupatta, this vibrant ensemble is perfect for daytime celebrations and intimate festive gatherings.

Model height: 5.6ft

Fabric: Georgette

Handcrafted in India

Size: Refer to size chart. Model is wearing size Small.
            </p>

          </div>

        </div>

      </div>

    </div>
  );
}
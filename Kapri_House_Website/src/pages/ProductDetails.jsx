import { useLocation } from "react-router-dom";
import "../styles/ProductDetails.css";

export default function ProductDetails() {
  const { state } = useLocation();

  if (!state) return <h2>No Product Found</h2>;

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
              <button>XS</button>
              <button>S</button>
              <button>M</button>
              <button>L</button>
              <button>XL</button>
            </div>

          </div>

          <div className="qty-box">

            <button>-</button>

            <span>1</span>

            <button>+</button>

          </div>

          <button className="cart-btn">
            ADD TO CART
          </button>

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
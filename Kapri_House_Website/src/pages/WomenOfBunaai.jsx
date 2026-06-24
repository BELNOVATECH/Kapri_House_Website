import "../styles/WomenOfBunaai.css";

import wb1 from "../assets/wb1.jpg";
import wb2 from "../assets/wb2.jpg";
import wb3 from "../assets/wb3.jpg";
import wb4 from "../assets/wb4.jpg";
import wb5 from "../assets/wb5.jpg";
import wb6 from "../assets/wb6.jpg";
import wb7 from "../assets/wb7.jpg";
import wb8 from "../assets/wb8.jpg";
import wb9 from "../assets/wb9.jpg";
import wb10 from "../assets/wb10.jpg";
import wb11 from "../assets/wb11.jpg";
import wb12 from "../assets/wb12.jpg";

const reviews = [
  {
    id: 1,
    image: wb1,
    review:
      "The flare of lehenga is gorgeous. Loved it.",
    title:
      "Yellow Floral Print Georgette Dress",
  },
  {
    id: 2,
    image: wb2,
    review:
      "Very comfortable co-ord set.",
    title:
      "White Pink Embroidered Co-ord Set",
  },
  {
    id: 3,
    image: wb3,
    review:
      "My mehendi function was even beautiful when I wore this saree.",
    title:
      "Light Blue Drape Saree",
  },
  {
    id: 4,
    image: wb4,
    review:
      "Wore this at my brothers wedding. Very comfortable.",
    title:
      "Muted Lime Draped Saree",
  },
  {
    id: 5,
    image: wb5,
    review:
      "Love how the fitting was. It looked absolutely gorgeous.",
    title:
      "Nandini Georgette Suit Set",
  },
  {
    id: 6,
    image: wb6,
    review:
      "Loved the suit :)",
    title:
      "Riva Cotton Suit Set",
  },
  {
    id: 7,
    image: wb7,
    review:
      "The colors and patterns are vibrant.",
    title:
      "Jhanvi Cotton Suit Set",
  },
  {
    id: 8,
    image: wb8,
    review:
      "Wearing this outfit made my Diwali feel even more special.",
    title:
      "Damini Cotton Suit Set",
  },
  {
    id: 9,
    image: wb9,
    review:
      "Loved how comfortable it was while still looking elegant.",
    title:
      "Pink Handblock Cotton Dress",
  },
  {
    id: 10,
    image: wb10,
    review:
      "Perfect blend of tradition and modernity.",
    title:
      "Vedika Trio Cotton Suit Set",
  },
  {
    id: 11,
    image: wb11,
    review:
      "The quality exceeded my expectations.",
    title:
      "Rhea Kurta Co-ord Set",
  },
  {
    id: 12,
    image: wb12,
    review:
      "This collection is a game changer.",
    title:
      "Siya Cotton Suit Set",
  },
];

export default function WomenOfBunaai() {
  return (
    <section className="women-section">

      <h2 className="women-title">
        ♡ WOMEN OF KH ♡
      </h2>

      <div className="women-slider">

        {reviews.map((item) => (
          <div
            key={item.id}
            className="women-card"
          >
            <img
              src={item.image}
              alt={item.title}
            />

            <div className="women-stars">
              ★★★★★
            </div>

            <p className="women-review">
              {item.review}
            </p>

            <h4 className="women-product">
              {item.title}
            </h4>
          </div>
        ))}

      </div>

    </section>
  );
}
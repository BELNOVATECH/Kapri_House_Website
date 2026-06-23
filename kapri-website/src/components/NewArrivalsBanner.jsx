import "../styles/NewArrivalsBanner.css";
import newArrivalsImg from "../assets/newar.webp";

export default function NewArrivalsBanner() {
  return (
    <section className="new-arrivals-banner">
      <img
        src={newArrivalsImg}
        alt="New Arrivals - Shine bright with grace this festive"
        className="new-arrivals-img"
      />
      <div className="new-arrivals-content">
        <button
          className="new-arrivals-cta"
          onClick={() => {/* navigate to collection */}}
        >
          Shop Now
        </button>
      </div>
    </section>
  );
}
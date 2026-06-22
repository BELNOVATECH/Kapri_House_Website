import "../styles/Navbar.css";

export default function Navbar() {
  const menu = [
    "NEW ARRIVALS",
    "SUIT SETS",
    "KURTA SETS",
    "DRESSES",
    "SAREES",
    "MENSWEAR",
    "HOME LINEN",
    "SALE",
  ];

  return (
    <div className="navbar">
      {menu.map((item) => (
        <div key={item} className="nav-item">
          {item}
        </div>
      ))}
    </div>
  );
}
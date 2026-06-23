import { Link } from "react-router-dom";
import "../styles/Navbar.css";

export default function Navbar() {
  const menu = [
    {
      name: "NEW ARRIVALS",
      path: "/new-arrivals",
    },
    {
      name: "SUIT SETS",
      path: "/suit-sets",
    },
    {
      name: "KURTA SETS",
      path: "/kurta-sets",
    },
    {
      name: "DRESSES",
      path: "/dresses",
    },
    {
      name: "SAREES",
      path: "/sarees",
    },
    {
      name: "MENSWEAR",
      path: "/menswear",
    },
    {
      name: "HOME LINEN",
      path: "/home-linen",
    },
    {
      name: "SALE",
      path: "/sale",
    },
  ];

  return (
    <nav className="navbar">
      {menu.map((item) => (
        <Link
          key={item.name}
          to={item.path}
          className="nav-item"
        >
          {item.name}
        </Link>
      ))}
    </nav>
  );
}
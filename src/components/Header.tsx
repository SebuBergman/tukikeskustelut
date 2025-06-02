import { Link, useLocation } from "react-router-dom";
import { Box } from "@mui/material";

import "./style.css";

const navLinks = [
  { to: "/", label: "Etusivu" },
  { to: "/minusta", label: "Minusta" },
  { to: "/hinnasto", label: "Hinnasto" },
  { to: "/ota-yhteytta", label: "Ota yhteyttä" },
];

export default function Header() {
  const location = useLocation();
  return (
    <header className="main-header">
      <Box className="header-titles">
        <h1 className="brandfont">Tukikeskustelut</h1>
        <h3 className="subtitle">Lyhytterapia, Työnohjaus ja Kriisityö</h3>
      </Box>
      <Box>
        <ul className="nav-links">
          {navLinks.map((link) => (
            <li
              key={link.to}
              className={location.pathname === link.to ? "active" : ""}
            >
              <Link to={link.to}>{link.label}</Link>
            </li>
          ))}
        </ul>
      </Box>
    </header>
  );
};

import { useState } from "react";
import "./master.css"; // افترضنا أن التنسيقات موجودة في master.css أو header.css

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="header">
      <div className="container">
        <div className="logo">
          <img src="/photos/Logo-Icon.png" alt="Logo" />
        </div>

        <nav>
          <ul className={`links ${menuOpen ? "show" : ""}`}>
            <li><a href="/#home" onClick={() => setMenuOpen(false)}>Home</a></li>
            <li><a href="/#products" onClick={() => setMenuOpen(false)}>Products</a></li>
            <li><a href="/#whywe" onClick={() => setMenuOpen(false)}>Why We</a></li>
            <li><a href="/#contact" onClick={() => setMenuOpen(false)}>Contact</a></li>
          </ul>

          {/* Burger Menu Icon */}
          <div className="menu-toggle" onClick={toggleMenu}>
            {menuOpen ? (
              <svg width="24" height="24" viewBox="0 0 24 24">
                <line x1="4" y1="4" x2="20" y2="20" stroke="#333" strokeWidth="2"/>
                <line x1="20" y1="4" x2="4" y2="20" stroke="#333" strokeWidth="2"/>
              </svg>
            ) : (
              <svg width="24" height="24" viewBox="0 0 24 24">
                <line x1="3" y1="6" x2="21" y2="6" stroke="#333" strokeWidth="2"/>
                <line x1="3" y1="12" x2="21" y2="12" stroke="#333" strokeWidth="2"/>
                <line x1="3" y1="18" x2="21" y2="18" stroke="#333" strokeWidth="2"/>
              </svg>
            )}
          </div>
        </nav>
      </div>
    </header>
  );
}

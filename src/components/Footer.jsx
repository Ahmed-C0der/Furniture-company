import "./master.css";

export default function Footer() {
  return (
    <footer className="footer hidden-section">
      <div className="container">
        <p>&copy; 2025 Furniture Shop. All rights reserved.</p>
        <nav className="footer-nav">
          <a href="#home">Home</a>
          <a href="#offers">Special Offers</a>
          <a href="#products">Products</a>
          <a href="#testimonials">Testimonials</a>
          <a href="#contact">Contact</a>
        </nav>
      </div>
    </footer>
  );
}

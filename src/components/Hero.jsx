import "./master.css";

export default function HeroSection() {
  return (
    <div className="hero hidden-section" id="home">
      <div className="container">
        <div className="hero-content">
          <div className="main-text">
  <h1>Best Furniture Collection for your interior.</h1>
  <p className="subtitle">
    Discover stylish and comfortable furniture that perfectly fits your home.
  </p>
</div>

          <div className="img large-img">
            <img src="./photos/Hero.png" alt="market" />
          </div>
        </div>

        <button className="buy-btn"><a style={{textDecoration:"none" , color:"white"}} href="#products"> Shop Now </a></button>
      </div>
    </div>
  );
}

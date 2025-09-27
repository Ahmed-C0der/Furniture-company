import { useEffect, useState } from "react";
import "./master.css"; 
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faArrowLeft } from "@fortawesome/free-solid-svg-icons";

export default function Testimonials() {
  const [comments, setComments] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [width, setWidth] = useState(400);
  
  useEffect(() => {
    fetch("/testimonialsDetails.json")
      .then((res) => res.json())
      .then((data) => setComments(data));
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 576) {
        setWidth(250);
      } else if (window.innerWidth <= 768) {
        setWidth(300);
      } else {
        setWidth(400);
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleTransform = (direction) => {
    if (direction === "left") {
      setCurrentIndex((prev) => (prev > 0 ? prev - 1 : 0));
    } else {
      setCurrentIndex((prev) =>
        prev < comments.length - 1 ? prev + 1 : prev
      );
    }
  };

  const styleSlider = {
    display: "flex",
    alignItems: "center",
    gap: "20px",
    flexWrap: "nowrap",
    transform: `translateX(-${currentIndex * (width + 80 )}px)`,
    transition: "transform 0.5s ease",
  };

  return (
    <section id="testimonials" className="hidden-section testimonials">
      <div className="padding-section">
        <div className="container">
          <div className="parentTes">
            <h1 className="special-heading">What client says about us</h1>
            <div className="controll-slide" style={{ display:"flex", justifyContent:"center", alignItems:"center", gap:"15px" }}>
              <button
                style={{ color:"white", backgroundColor:"#029DAB", padding:"5px 12px", borderRadius:"6px", border:"none", cursor:"pointer" }}
                onClick={() => handleTransform("left")}
              >
                <FontAwesomeIcon icon={faArrowLeft} />
              </button>
              <button
                style={{ color:"white", backgroundColor:"#029DAB", padding:"5px 12px", borderRadius:"6px", border:"none", cursor:"pointer" }}
                onClick={() => handleTransform("right")}
              >
                <FontAwesomeIcon icon={faArrowRight} />
              </button>
            </div>
          </div>

          <div className="slid-wrapper bg-sec" style={{ overflow:"hidden", padding:"15px 15px" }}>
            <div className="slid-controle" style={styleSlider}>
              {comments.map((el) => (
                <div key={el.id} style={{ width: `${width}px`, flexShrink: 0 }}>
                  <div className="text">
                    <p>{el.text}</p>
                  </div>
                  <div className="profile">
                    <div className="img">
                      <img data-src={el.imgSrc} alt={el.name} className="lazy-img" />
                    </div>
                    <div className="info">
                      <span>{el.name}</span>
                      <span>{el.job}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

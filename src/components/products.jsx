import { useEffect, useState } from "react";
import "./master.css";
import { Link } from "react-router-dom";

export default function Productes({
  title,
  fileName,
  mainBg = false,
  id,
  from = "As",
}) {
  const [products, setProducts] = useState([]);
  const [category, setCategory] = useState("All");
  const [showImg, setShowImg] = useState(true);

  // ✅ handle resize (show/hide offer img)
  useEffect(() => {
    const handleResize = () => {
      setShowImg(window.innerWidth > 1200);
    };
    handleResize(); // call once
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // ✅ fetch data
  useEffect(() => {
    fetch(`/items.json`)
      .then((response) => response.json())
      .then((data) => setProducts(data[fileName]))
      .catch((error) => console.error("Error loading products:", error));
  }, [fileName]);

  // ✅ filter by category
  const filteredProducts =
    category === "All"
      ? products
      : products.filter((p) => p.category === category);

  // ✅ handle category buttons
  function handleCategory(e) {
    const selected = e.target.dataset.category;
    setCategory(selected);
  }

  // ✅ intersection observers (lazy load + sections)
  useEffect(() => {
    if (products.length === 0) return;

    // observer للصور (lazy load)
    const imgObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.src = entry.target.dataset.src;
            imgObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2, rootMargin: "0px 0px 200px 0px" }
    );

    const lazyImgs = document.querySelectorAll(".lazy-img");
    lazyImgs.forEach((img) => imgObserver.observe(img));

    // observer للأقسام (لو from === "st")
    let sectionObserver;
    if (from === "st") {
      sectionObserver = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.remove("hidden-section");
              sectionObserver.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.2 }
      );

      const allSections = document.querySelectorAll(
        "body > #root > .App > *"
      );
      allSections.forEach((el) => sectionObserver.observe(el));
    }

    // cleanup
    return () => {
      imgObserver.disconnect();
      if (sectionObserver) sectionObserver.disconnect();
    };
  }, [products, from  , category]);

  return (
    <section id={id} className="hidden-section items">
      <div
        className="padding-section"
        style={mainBg ? { backgroundColor: "#f0f2f3" } : {}}
      >
        <h1 className="special-heading">{title}</h1>

        {title === "Special Offers" && (
          <p
            className="text-color"
            style={{
              textAlign: "center",
              margin: "20px auto",
              width: "fit-content",
              fontSize: "20px",
            }}
          >
            Buy a set of products and get a discount
          </p>
        )}

        <div className="container">
          {/* ✅ category buttons */}
          {title === "Our Products" && (
            <div className="sort">
              {[
                "All",
                "Chairs",
                "Tables",
                "Desks",
                "Beds",
                "Sofas",
                "Wardrobes",
              ].map((cat) => (
                <button
                  key={cat}
                  data-category={cat}
                  onClick={handleCategory}
                  className={category === cat ? "active-btn" : ""}
                >
                  {cat}
                </button>
              ))}
            </div>
          )}

          <div
            className="parent"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <div className="slide-container">
              {filteredProducts.length > 0 ? (
                filteredProducts.map((el) => (
                  <div key={el.id} className="product-card">
                    <div className="img">
                      <img
                        data-src={el.imgSrc}
                        className="lazy-img"
                        alt={el.name || "item"}
                      />
                    </div>
                    <Link to={`/Productes-Details/${fileName}/${el.id}`}>
                      <button
                        className="main-cl"
                        onClick={() =>
                          window.scrollTo({ top: 0, behavior: "smooth" })
                        }
                      >
                        Buy Now
                      </button>
                    </Link>
                  </div>
                ))
              ) : (
                <p>Loading products...</p>
              )}
            </div>

            {/* ✅ special offer img */}
            {title === "Special Offers" && showImg && (
              <img
                src="./photos/Discount-rafiki.svg"
                alt="Discount Img"
                className="discount-img Dicount-img"
                width={300}
                style={{ backgroundColor: "#f0f2f3", borderRadius: "50%" }}
              />
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

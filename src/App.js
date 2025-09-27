import './App.css';
import HeroSection from './components/Hero';
import Header from './components/header';
import Productes from './components/products';
import Testimonials from './components/testimonials';
import WhyWe from './components/WhyWe';
import ContactUs from './components/Contact';
import Footer from './components/Footer';
import { useEffect, useRef, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';
import { Routes, Route } from "react-router-dom";
import ProductDetails from "./components/ProductDetails";
import { useLocation } from 'react-router-dom';
function App() {
  const GoUp = useRef(null);

  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY < 500) {
        GoUp.current.style.display = "none";
      } else {
        GoUp.current.style.display = "flex";
      }
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);


  // observer
    const location = useLocation();
  function runObserverCode(){
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.remove("hidden-section");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.2 }
  );

  const hiddenElements = document.querySelectorAll(".hidden-section");
  const All = document.querySelectorAll("body > #root > .App > *")

  All.forEach((el) => observer.observe(el));

  return () => observer.disconnect(); 
}

useEffect(() => {
  const cleanup = runObserverCode();
  return cleanup;
}, []); 
function HideEffect (){
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.remove("hidden-section");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.2 }
  );

  const hiddenElements = document.querySelectorAll(".hidden-section");
  const All = document.querySelectorAll("body > #root > .App > *")

  // hiddenElements.forEach((el) => observer.observe(el));
  All.forEach((el) => observer.observe(el));

  return () => observer.disconnect(); // cleanup
}
useEffect(() => {
  // setTimeout(()=>{
  // },1000)
  HideEffect()
  const cleanup = HideEffect()
  
}, []);


  return (
    <div className="App">
      <div
        className="go-to-up"
        ref={GoUp}
        onClick={() => {
          window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
        }}
        style={{
          backgroundColor: "#029dab",
          width: "40px",
          height: "40px",
          color: "white",
          borderRadius: "50%",
          position: "fixed",
          bottom: "20px",
          right: "20px",
          cursor: "pointer",
          display: "none",
          justifyContent: "center",
          alignItems: "center",
          boxShadow: "0 4px 10px rgba(0,0,0,0.2)",
          transition: "0.3s",
          zIndex: 1000
        }}
      >
        <FontAwesomeIcon icon={faArrowUp} />
      </div>

      <Header />

      <Routes>
        <Route path="/" element={
          <>
            <HeroSection/>
            <Productes HideEffect={HideEffect} id="special-offers" title={"Special Offers"} fileName="offers" />
            <Productes HideEffect={HideEffect} id="products" title={"Our Products"} fileName="products" mainBg={true} />
            <Testimonials />
            <WhyWe />
            <ContactUs />
            <Footer />
          </>
        } />

        <Route path="/Productes-Details/:TheName/:id" element={<ProductDetails />} />
      </Routes>
    </div>
  );
}

export default App;


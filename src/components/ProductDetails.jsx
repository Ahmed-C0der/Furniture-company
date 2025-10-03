import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Productes from "./products";
import "./master.css";

export default function ProductDetails() {
  const { id ,TheName} = useParams(); // نجيب الـ id من الـ URL
  const [details, setDetails] = useState([]);

  useEffect(() => {

    fetch("/items.json")
      .then((response) => response.json())
      .then((responses) => {
        const filtered = responses[TheName].filter((e) => e.id === parseInt(id));
        setDetails(filtered);
      })
      .catch((err) => console.error("Error loading product details:", err));
  }, [id]);

  if (details.length === 0) {
    return <h1>We Are Loading the Data ...</h1>;
  }

  const product = details[0];

  return (
    <>
    <div className="parent">
      <div className="img">
        <img 
  src={product.imgSrc || "/placeholder.png"} 
  alt={product.name || "No Image"} 
/>

        <div className="quantity">
          <p>quantity is :{product.quantity}</p>
        </div>
      </div>
      <div className="info">
        <span>{product.name}</span>
        <span>{product.descripe}</span>
        <span><span className="text-color"style={{color:"#555",fontSize:"18px"}}>price is :</span>{product.price}</span>
        <button>Buy Now</button>
      </div>
    </div>

    <Productes from="st" id={`${id}`} title={"Our Products"} fileName={TheName} mainBg={true} />
    
    </>
  );
  
}


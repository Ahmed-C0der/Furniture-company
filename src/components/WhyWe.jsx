// import { useState , useEffect } from "react";
export default function WhyWe() {
//     const [width, setWidth] = useState(400);
//     useEffect(() => {
//     const handleResize = () => {
//       if (window.innerWidth <= 576) {
//         setWidth(250);
//       } else if (window.innerWidth <= 768) {
//         setWidth(300);
//       } else {
//         setWidth(400);
//       }
//     };
//     handleResize();
//     window.addEventListener("resize", handleResize);
//     return () => window.removeEventListener("resize", handleResize);
//   }, []);
    return (
    <div className="why-we hidden-section padding-section bg-sec" id="whywe" >
        <div className=" ">
            <div className="container">
                <h1 className="special-heading">Why We</h1>
                <div className="Why-parent">
                    <div className="box"  style={{maxWidth:"100vw",}}>
                        <div className="icon">🛋️</div>
                        <div className="info">
                            <h2 className="title">Modern Designs</h2>
                            <p className="text">
                                We create furniture that blends elegance and comfort to match
                                every style.
                            </p>
                        </div>
                    </div>
                    <div className="box"  style={{maxWidth:"100vw",}}>
                        <div className="icon">😎</div>
                        <div className="info">
                            <h2 className="title">High Quality</h2>
                            <p className="text">
                                Crafted from premium materials and solid wood to ensure
                                durability.
                            </p>
                        </div>
                    </div>
                    <div className="box"  style={{maxWidth:"100vw",}}>
                        <div className="icon">🚚</div>
                        <div className="info">
                            <h2 className="title">Fast Delivery</h2>
                            <p className="text">
                                We deliver quickly and safely to your doorstep with free
                                installation.
                            </p>
                        </div>
                    </div>
                    <div className="box"  style={{maxWidth:"100vw",}}>
                        <div className="icon">💰</div>
                        <div className="info">
                            <h2 className="title">Competitive Prices</h2>
                            <p className="text">
                                Get the best value for money with ongoing offers and discounts.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
}

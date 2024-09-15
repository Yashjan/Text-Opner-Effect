import React, { useEffect, useRef } from "react";
import "./App.css";
import gsap from "gsap";
import  ScrollTrigger  from "gsap/ScrollTrigger";


const App = () => {

  if (typeof window !== `undefined`) {
    gsap.registerPlugin(ScrollTrigger);
    gsap.core.globals("ScrollTrigger", ScrollTrigger);
  }
  const containerRef = useRef(null);  // Ref for the container div

  useEffect(() => {
    const container = containerRef.current;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: container,
        start: "50% 50%",
        end: "180% 50%",
        scrub: 2,
        pin: true,
        // markers: true, // Uncomment for debugging
      },
    });

    tl.to("#center", { height: "100vh" }, "a")
      .to(".top", { top: "-50%" }, "a")
      .to(".bottom", { bottom: "-50%" }, "a")
      // .to("#top-h1", { top: "60%" }, "a")
      // .to("#bottom-h1", { bottom: "-30%" }, "a")
      // .to(".content", { marginTop: "0%" });

    // Cleanup on unmount
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  });

  return (
    <>
      <div className="main"></div>
      <div className="container" ref={containerRef}>
        <div className="top">
          <h1 id="top-h1">PRODUCTS</h1>
        </div>
        <div id="center">
          <div className="content">
            <h4>GRAVITY</h4>
            <h3>
              <i>Browse</i> the work that define a <i>movement</i> and created a
              craft.
            </h3>
            <div className="btn">
              <h5>ENTER GALLERY</h5>
            </div>
            <h2>(17)</h2>
          </div>
        </div>
        <div className="bottom">
          <h1 id="bottom-h1">PRODUCTS</h1>
        </div>
      </div>
      <div className="end"></div>
    </>
  );
};

export default App;

import "./hero2.scss";
import { useState, useEffect } from "react";

export default function Hero2() {

  const [scale, setScale] = useState(1);
  const [opacity, setOpacity] = useState(0);

  useEffect(() => {
        const handleScroll = () => {
            const scrollY = window.scrollY;
            const newScale = 1 + scrollY / 1000;
            setScale(newScale);
            const newOpacity = opacity + scrollY / 1000;
            setOpacity(newOpacity);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
  }, [scale, opacity])

  return (
    <section className="hero-section">
      <div className="inner-container">
        <div className="sticky-container">
          <div className="hero-card">
            <div className="left">
              <h2>Benjamin Dandre</h2>
            </div>
            <div className="separator"></div>
            <div className="right">
              <h2>Developer Web/mobile</h2>
            </div>
          </div>
        </div>
      </div>

    </section>
  )
}
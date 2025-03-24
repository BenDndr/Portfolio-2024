import "./hero2.scss";
import { useState, useEffect } from "react";

export default function Hero2() {

  const [scale, setScale] = useState(1);
  const [opacity, setOpacity] = useState(.2);

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
        <div className="zoom-container">
            <div className="zooming-element"
                style={{
                    transform: `scale(${scale})`,
                    opacity: opacity,
                }}
            >
            </div>
        </div>
      </div>

    </section>
  )
}
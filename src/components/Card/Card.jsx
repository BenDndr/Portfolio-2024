import {useState, useRef, useEffect} from "react"
import "./Card.scss"

function Card() {

  const [isVisible, setIsVisible] = useState(false)
  const card = useRef(null)

  const handleMouseMove = (event) => {
    const rect = card.current.getBoundingClientRect();
    let x = event.clientX - rect.left
    let y = event.clientY - rect.top
    card.current.style.setProperty("--x", `${x}px`)
    card.current.style.setProperty("--y", `${y}px`)
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            // observer.disconnect();
          // } else {
          //   setIsVisible(false);
          }
        });
      },
      {
        threshold: 1,
        rootMargin: "-50px"
      }
    );

    const currentCard = card.current

    if (currentCard) {
      observer.observe(currentCard);
    }

    return () => {
      if (currentCard) {
        observer.unobserve(currentCard);
      }
    };
  }, [])

  return (
    <div className={`card ${isVisible ? "visible" : ""}`} ref={card} onMouseMove={handleMouseMove}>
      <div className="card-content">
        <p>Card</p>
      </div>
    </div>
  )
}
  
export default Card
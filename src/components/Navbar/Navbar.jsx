import logo from '../../assets/logo2.png'
import './Navbar.scss'
import { useState, useEffect } from "react";

const Navbar = () => {

    const [scale, setScale] = useState(6);
    const [position, setPosition] = useState({ left: (window.innerWidth / 2 - 180), top:  window.innerHeight / 4});

    console.log("window.innerWidth", window.innerWidth)
    console.log("window.innerHeight", window.innerHeight)

    useEffect(() => {
        const handleScroll = () => {
            const scrollY = window.scrollY;
            const newScale = Math.max(1, 6 - scrollY / 200); 
            const newLeft = Math.max(0, window.innerWidth / 2 - scrollY / 3);  
            const newTop = Math.max(0, window.innerHeight / 4 - scrollY / 5); 
            setScale(newScale);
            setPosition({ left: newLeft, top: newTop });
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
      <nav>
        <div className="inner-nav">
          <div className="logo-container">
            <img 
                src={logo} 
                alt="Logo" 
                className="logo" 
                onClick={() => console.log("logo")}
                style={{
                    transform: `scale(${scale})`,
                    left: `${position.left}px`,
                    top: `${position.top}px`,
                    
                }}    
            />
          </div>
          <ul>
            <li><a href="#hero" onClick={() => console.log("hero")}>Home</a></li>
            <li><a href="#presentation" onClick={() => console.log("presentation")}>About</a></li>
            <li><a href="#skills" onClick={() => console.log("skills")}>Skills</a></li>
            <li><a href="#experiences" onClick={() => console.log("experiences")}>Experiences</a></li>
            <li><a href="#contact" onClick={() => console.log("contact")}>Contact</a></li>
          </ul>
        </div>
      </nav>
    )
}

export default Navbar
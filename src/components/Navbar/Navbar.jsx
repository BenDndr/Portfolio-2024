import logo from '../../assets/logo.png'
import './Navbar.scss'

const Navbar = () => {

    return (
      <nav>
        <div className="inner-nav">
          <img src={logo} alt="Logo" className="logo" onClick={() => console.log("logo")}/>
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
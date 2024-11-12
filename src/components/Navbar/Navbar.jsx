import logo from '../../assets/logo.png'
import './Navbar.scss'

const Navbar = () => {

    return (
      <nav>
        <div className="inner-nav">
          <img src={logo} alt="Logo" className="logo" onClick={() => console.log("logo")}/>
          <h2>Benjamin Dandre</h2>
          <p>Contact</p>
        </div>
      </nav>
    )
}

export default Navbar
import "./hero.scss"
import cloud1 from '../../assets/cloud1.png'
import me from '../../assets/me.png'

export default function Hero () {
    return (
        <section className="hero-container">
            <div className="inner-container">
                <h1>Benjamin Dandre<br /> Développeur web/mobile</h1>
            </div>
            <img src={cloud1} alt="pink cloud" className="cloud left"/>
            <img src={cloud1} alt="pink cloud" className="cloud right"/>
            <img src={me} alt="It's me ! Benjamin !" className="me"/>
    
        </section>
    )
}
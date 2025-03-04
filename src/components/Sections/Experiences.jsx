import "./experiences.scss"
import Card from "../Card/Card.jsx"

export default function Experiences () {
    return (
        <section className="experience-container">
        <div className="inner-container">
          <h2>Mon experience</h2>
          <Card />
          <Card />
          <Card />
        </div>
      </section>
    )
}
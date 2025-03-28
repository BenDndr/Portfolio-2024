import "./experiences.scss"
import Card from "../../Card/Card.jsx"

export default function Experiences () {
    return (
        <section className="experience-container">
        <div className="inner-container">
            <p>Mon expérience</p>
            <Card />
            <Card />
            <Card />
        </div>
      </section>
    )
}
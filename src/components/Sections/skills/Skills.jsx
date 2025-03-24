import "./skills.scss"
import GridCard from "../../GridCard/GridCard"

export default function Skills () {
    return (
        <section className="skills-container">
        <div className="inner-container">
          <h2>Mon expertise</h2>
          <div className="skill-grid">
            <GridCard col={"1/5"} row={"1/2"} imgUrl={"./public/react.svg"}>Javascript/Typescript</GridCard>
            <GridCard col={"1/5"} row={"2/3"} imgUrl={"./public/vite.svg"}>Html/Css</GridCard>
            <GridCard col={"5/9"} row={"1/3"} imgUrl={"./public/react.svg"}>React-Native</GridCard>
            <GridCard col={"1/5"} row={"3/5"} imgUrl={"./public/react.svg"} name="React">React</GridCard>
            <GridCard col={"5/7"} row={"3/4"} imgUrl={"./public/vite.svg"} name="Vite">NodeJs</GridCard>
            <GridCard col={"5/7"} row={"4/5"} imgUrl={"./public/react.svg"} name="React">SQL</GridCard>
            <GridCard col={"7/9"} row={"3/5"} imgUrl={"./public/vite.svg"} name="Vite">Ruby on Rails</GridCard>
          </div>
        </div>
      </section>
    )
}
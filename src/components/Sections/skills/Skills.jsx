import "./skills.scss"
import {useEffect, useState} from "react";
// import GridCard from "../../GridCard/GridCard"

export default function Skills () {

    const [category, setCategory] = useState("Front-end")
    const frontSkills = [
        {name: "JavaScript", img: "#"},
        {name: "TypeScript", img: "#"},
        {name: "HTML", img: "#"},
        {name: "CSS", img: "#"},
        {name: "ReactJs", img: "#"},
        {name: "React-Native", img: "#"},
    ]
    const backSkills = [
        {name: "Ruby", img: "#"},
        {name: "Rails", img: "#"},
        {name: "NodeJs", img: "#"},
    ]
    const otherSkills = [
        {name: "Git", img: "#"},
        {name: "Github", img: "#"},
        {name: "Figma", img: "#"},
        
    ]
    const [skills, setSkills] = useState(frontSkills)

    useEffect(() => {

        const changeEffect = (newCategory) => {
            setCategory(newCategory);
        }

        const handleScroll = () => {
            const scrollInVh = (window.scrollY / window.innerHeight) * 100;
            if (scrollInVh <= 750) {
                changeEffect("Front-end");
                setSkills(frontSkills)
            } else if (scrollInVh > 750 && scrollInVh <= 850) {
                changeEffect("Back-end");
                setSkills(backSkills)
            } else if (scrollInVh > 850 && scrollInVh <= 950) {
                changeEffect("Other");
                setSkills(otherSkills)
            }
        }

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [])

    return (
        <section className="skills-container">
            <div className="inner-container">
                <div className="sticky-part">
                    <div className="left">
                    <p>{category}</p>
                    </div>
                    <div className="separator"/>
                    <div className="right">
                        {
                            skills.map(skill => {
                                return (
                                    <div className="skill" key={skill.name}>
                                        <img src={"#"}/>
                                        <p>{skill.name}</p>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
      </section>
    )
}
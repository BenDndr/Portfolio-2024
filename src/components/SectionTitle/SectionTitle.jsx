import "./section-title.scss";
import {useState, useEffect} from "react";


export default function SectionTitle () {

    const [title, setTitle] = useState("");

    useEffect(() => {

        const changeEffect = (newTitle) => {
            setTitle(newTitle);
        }

        const handleScroll = () => {
            const scrollInVh = (window.scrollY / window.innerHeight) * 100;
            if (scrollInVh <= 350) {
                changeEffect("");
            } else if (scrollInVh > 350 && scrollInVh <= 650) {
                changeEffect("Who am I");
            } else if (scrollInVh > 650 && scrollInVh <= 950) {
                changeEffect("What can I do");
            } else if (scrollInVh > 950 && scrollInVh <= 1250) {
                changeEffect("Experience");
            } else if (scrollInVh > 1250 && scrollInVh <= 1550) {
                changeEffect("contact");
            }
        }

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [])

    return (
        <div className="section-title">
            <div className="section-title-container">
                <h2>{title}</h2>
            </div>
        </div>
    )
}
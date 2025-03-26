import "./section-title.scss";
import {useState, useEffect} from "react";


export default function SectionTitle () {

    const [title, setTitle] = useState("Mon portfolio");

    useEffect(() => {
        const handleScroll = () => {
            const scrollInVh = (window.scrollY / window.innerHeight) * 100;
            if (scrollInVh <= 400) {
                setTitle("My portfolio");
            } else if (scrollInVh > 400 && scrollInVh <= 700) {
                setTitle("Who am I");
            } else if (scrollInVh > 700 && scrollInVh <= 1000) {
                setTitle("Skills");
            } else if (scrollInVh > 1000 && scrollInVh <= 1300) {
                setTitle("Experience");
            } else if (scrollInVh > 1300 && scrollInVh <= 1600) {
                setTitle("contact");
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
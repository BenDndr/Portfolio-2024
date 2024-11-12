// import { useState, useEffect, useRef } from 'react'
import './stylesheets/App.scss'
import Card from "./components/Card/Card.jsx"
import GridCard from './components/GridCard/GridCard.jsx'
import Navbar from './components/Navbar/Navbar.jsx'
import cloud1 from './assets/cloud1.png'
import me from './assets/me.png'

function App() {

  return (
    <main>
      <Navbar/>
      <section className="hero-container">
        <div className="inner-container">
          <h1>Benjamin Dandre<br /> Développeur web/mobile</h1>
        </div>
        <img src={cloud1} alt="pink cloud" className="cloud left"/>
        <img src={cloud1} alt="pink cloud" className="cloud right"/>
        <img src={me} alt="It's me ! Benjamin !" className="me"/>

      </section>
      <section className="pres-container">
        <div className="inner-container">
          <div className="inner-half left-pres">
            <div className="pres-card">
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat aut tempore velit, hic dicta voluptates adipisci similique fugit ducimus labore mollitia modi eligendi voluptatibus nihil provident fugiat exercitationem voluptas totam eveniet, optio dolores, id at. Unde repellendus corrupti totam repellat eum? Minus incidunt eum earum hic adipisci porro, repudiandae perspiciatis.</p>
            </div>
          </div>
          <div className="inner-half right-pres">

          </div>
        </div>
      </section>
      <section className="skills-container">
        <div className="inner-container">
          <h2>What can I do ?</h2>
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
      <section className="place-holder-div orange">
        <div className="inner-container">
          <Card />
          <Card />
          <Card />
        </div>
      </section>
      <section className="place-holder-div black">
        <div className="inner-container">
          <Card />
          <Card />
          <Card />
        </div>
      </section>
    </main>
  )
}

export default App

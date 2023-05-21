import React from "react";
import "./App.css"
import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Home from "./components/home/Home";
import Qualification from "./components/qualification/Qualification";
import ScrolUp from "./components/scrolUp/ScrolUp";
import Portfolio from "./components/project/project";
import Skills from "./components/skills/Skills";
import AcademicProject from "./components/project/academic";
import { Helmet } from "react-helmet";


const App = () => {
  return (
    <>
     <Helmet>
          <title>{ "Sanjog - Portfolio Website" }</title>
        </Helmet>
     <Header />
     
     <main className="main">
      <Home />
      <About />
      <Skills />
      <Qualification/>
      <Portfolio/>
      <AcademicProject/>
      <Contact/>
     </main>

     <Footer/>
      <ScrolUp/>
    </>
  )
}

export default App;
import React from 'react'
import Navbar from '../components/Navbar'
import AboutPageContent from '../components/AboutPageContent'
import Footer from "../components/Footer"
function About() {
  return (
    <div>
    <Navbar/>
    <img src="https://www.djjs.org/uploads/news/571ed64bc1509221250521.jpg" style={{width:"100%"}} alt="hero-img"/>
    <AboutPageContent/>
    <Footer/>
    </div>
  )
}

export default About
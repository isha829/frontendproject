import React, { useState } from 'react'
import Navbar from './Components/Nav-bar/Navbar'
import VideoPlayer from './Components/videoPlayer/VideoPlayer'
import Hero from './Components/Hero/Hero'
import Program from './Components/Program/Program'
import Title from './Components/Titles/Title'
import About from './Components/About/About'
import Campus from './Components/Campus/Campus'
import Testimonials from './Components/Testimonials/Testimonials'
import Contact from './Components/Contact/Contact'
import Footer from './Components/Footer/Footer'

const App = () => {
  const [playState, setPlayState] =useState(false);
  return (
   <div>
    <Navbar />
    <Hero />
    <div className="container">
    <Title subtitle="Our Program" title="What We Offer"/>
    <Program />
    <About setPlayState={setPlayState}/>
    <Title subtitle="Gallery" title="Campus Photos"/>
    <Campus />
    <Title subtitle="Testimonials" title="what Students say"/>
    <Testimonials />
    <Title subtitle="Contact Us" title="Get in Touch"/>
    <Contact />
    <Footer />
    </div>
    <VideoPlayer playState={playState} setPlayState={setPlayState}/>
   </div>
  )
}

export default App


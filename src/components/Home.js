import React from 'react' 
import Slider from './Slider.js';
import About from './About.js';
import Services from './Services';
import Gallery from './Gallery';
import Team from './Team';
import Footer from './Footer'; 

  const Home = () => {
    return ( 
    <>
      <Slider />
      <About />
      <Services />
      <Gallery />
      <Team />
      <Footer />
    </> 
    )
}

export default Home
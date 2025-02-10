import React from 'react'
import About from './About';
import Skills from './Skills';
import Projects from './Projects';
import Statistics from './Statistics'
import Contact from './Contact';
import '../styles/Home.css'
import '../styles/About.css'
import '../styles/Skills.css'
import '../styles/Projects.css'
import '../styles/Contact.css'

const Home = () => {
    return (
      <>
      <div id="home">
        <h2>Hello! I'm Gowsalya</h2>
        <p>React Developer</p>
       
      </div>
       <div>
       <About/>
       <Skills/>
      <Projects/>
      {/* <Statistics/> */}
      <Contact/>
      </div>
      </>
      
      
      
    );
  };
export default Home

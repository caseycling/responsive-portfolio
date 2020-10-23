import React from 'react';
import NavBar from '../components/Navbar/Navbar';
import About from '../components/About/About';
import Bio from '../components/Bio/Bio';
import ProjectsContainer from '../components/ProjectsContainer/ProjectsContainer';
import Social from '../components/Social/Social';
import Contact from '../components/Contact/Contact';
import Footer from '../components/Footer/Footer';

import './Home.css';

function Home() {
  return (
    <div>
      <NavBar />
      <About />
      <Bio />
      <ProjectsContainer />
      <Social />
      <Contact />
      <Footer />
    </div>
  );
}

export default Home;

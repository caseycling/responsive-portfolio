import React from 'react';
import NavBar from '../components/Navbar/Navbar';
import About from '../components/About/About';
import Carousel from '../components/Carousel/Carousel';
import Contact from '../components/Contact/Contact';
import Footer from '../components/Footer/Footer';

import './Home.css';

function Home() {
  return (
    <div className='home'>
      <NavBar />
      <About />
      <Carousel />
      <Contact />
      <Footer />
    </div>
  );
}

export default Home;

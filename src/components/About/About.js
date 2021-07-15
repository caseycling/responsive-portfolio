import React from 'react';
import { Jumbotron, Button } from 'react-bootstrap';
import { Link } from 'react-scroll';

import './About.css';

const About = () => {
  return (
    <div className='about-cont'>
      <Jumbotron className='jumbotron' id='home'>
        <div className='content'>
          <h1>Casey Clingaman</h1>
          <h5>Full-Stack Developer </h5>
          <h5>based out of Seattle, WA</h5>
          <Link to='about' smooth={true} offset={-90} duration={500}>
            <Button variant='primary'>Learn more</Button>
          </Link>
        </div>
      </Jumbotron>
    </div>
  );
};

export default About;

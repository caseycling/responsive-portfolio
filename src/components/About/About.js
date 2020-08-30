import React from 'react';
import { Jumbotron, Button } from 'react-bootstrap';

import './About.css';

const About = () => {
  return (
    <div className='about-cont'>
      <Jumbotron className='jumbotron'>
        <div className='content'>
          <h1>Casey Clingaman</h1>
          <h5>Full-Stack Developer</h5>
          <p>
            This is a simple hero unit, a simple jumbotron-style component for
            calling extra attention to featured content or information.
          </p>
          <p>
            <Button variant='primary'>Learn more</Button>
          </p>
        </div>
      </Jumbotron>
    </div>
  );
};

export default About;

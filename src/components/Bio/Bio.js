import React from 'react';
import { Container } from 'reactstrap';

import './Bio.css';

const Bio = () => {
  return (
    <div className='wrapper'>
      <div className='themed-container' fluid='sm' id='technologies'>
        {/* <img></img> */}
        <h3 style={{ marginTop: '20px' }}>About Me</h3>
        <p>
          I am a full-stack web developer, passionate about turning ideas into
          reality. Experienced with front-end and back-end development, I enjoy
          the logical puzzles that come with software engineering and take pride
          in writting elegant, dry code. I am excited to apply the skills I've
          built as a developer in a challenging environment where I can grow as
          a professional and be a positive impact as a team member. <br></br>
          <br></br> Outside of coding, I am a very driven home-chef and
          constantly am working on some sort of cooking or baking project. If
          I'm not in the kitchen, you can catch me at yoga (working off my
          latest culinary masterpiece), the comedy club or hanging with my cat.
        </p>
      </div>
    </div>
  );
};

export default Bio;

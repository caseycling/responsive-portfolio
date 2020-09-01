import React from 'react';
import { Image } from 'react-bootstrap';
import profile from '../../images/profilePic.jpg';

import './Bio.css';

const Bio = () => {
  return (
    <div className='wrapper'>
      <div className='themed-container' fluid='sm' id='about'>
        <Image src={profile} alt='casey' fluid />
        <h2>About Me</h2>
        <p>
          I am a full-stack web developer, passionate about turning ideas into
          reality. Experienced with front-end and back-end development, I enjoy
          the logical puzzles that come with software engineering and take pride
          in writting elegant, dry code. I am excited to apply the skills I've
          built as a developer in a challenging environment where I can grow as
          a professional and be a positive impact as a team member. <br />
          <br></br> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
          do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
          ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </div>
    </div>
  );
};

export default Bio;

import React from 'react';
import ProjectCard from '../Card/Card';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';

import './ProjectsContainer.css';
import projectsObjects from '../../utils/projectsObjects';

function ProjectsContainer() {
  const handleDragStart = (e) => e.preventDefault();

  const responsive = {
    0: { items: 1 },
    600: { items: 2 },
    1000: { items: 3 },
  };

  const projects = projectsObjects.map((item) => {
    return (
      <ProjectCard
        src={item.image}
        title={item.title}
        text={item.description}
        code={item.code}
        app={item.projectHref}
        onDragStart={handleDragStart}
      />
    );
  });

  return (
    <div className='projects-container' id='projects'>
      <h1>
        {' '}
        <strong>My Portfolio Pieces</strong>
      </h1>
      <AliceCarousel
        className='carousel'
        mouseTracking
        items={projects}
        responsive={responsive}
      />
    </div>
  );
}

export default ProjectsContainer;

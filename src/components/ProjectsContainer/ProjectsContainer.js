import React from 'react';
import ProjectCard from '../Card/Card';
// import AliceCarousel from 'react-alice-carousel';
import { CardColumns } from 'reactstrap'

import './ProjectsContainer.css';
import projectsObjects from '../../utils/projectsObjects';

function ProjectsContainer() {

    const projects = projectsObjects.map(item => {
        return (
            <ProjectCard
                src={item.image}
                title={item.title}
                text={item.description}
                code={item.code}
            />
        );
    });

    return (
        <div className='projects-container' id='projects'>
            <h1> <strong>My Portfolio Pieces</strong></h1>
            <CardColumns>
                {projects}
            </CardColumns>
        </div>

    )
}

export default ProjectsContainer


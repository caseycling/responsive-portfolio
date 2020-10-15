import React from 'react';
import ProjectCard from '../Card/Card';
import AliceCarousel from 'react-alice-carousel';

import 'react-alice-carousel/lib/alice-carousel.css';
import projectsObjects from '../../utils/projectsObjects';
import './Carousel.css';

class Carousel extends React.Component {
  state = {
    galleryItems: projectsObjects.map((item) => (
      <ProjectCard
        src={item.image}
        title={item.title}
        text={item.description}
        code={item.code}
      />
    )),
  };

  responsive = {
    0: { items: 1 },
    750: { items: 2 },
    1200: { items: 3 },
  };

  thumbItem = (item, i) => (
    <span key={item} onClick={() => this.Carousel.slideTo(i)}></span>
  );

  render() {
    return (
      <div className='carousel-cont' id='projects'>
        <h2>
          <strong>My Portfolio Pieces:</strong>
        </h2>
        <AliceCarousel
          className='carousel'
          dotsDisabled={true}
          responsive={this.responsive}
          buttonsDisabled={false}
          showDots={true}
          items={this.state.galleryItems}
          itemsInSlide={3}
          ref={(el) => (this.Carousel = el)}
        />
      </div>
    );
  }
}

export default Carousel;

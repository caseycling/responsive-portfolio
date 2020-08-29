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
      <div className='carousel'>
        <AliceCarousel
          dotsDisabled={true}
          responsive={this.responsive}
          buttonsDisabled={true}
          showDots={false}
          items={this.state.galleryItems}
          itemsInSlide={3}
          ref={(el) => (this.Carousel = el)}
        />

        <nav>{projectsObjects.map(this.thumbItem)}</nav>
        <button id='carousel-btn' onClick={() => this.Carousel.slidePrev()}>
          Prev
        </button>
        <button id='carousel-btn' onClick={() => this.Carousel.slideNext()}>
          Next
        </button>
      </div>
    );
  }
}

export default Carousel;

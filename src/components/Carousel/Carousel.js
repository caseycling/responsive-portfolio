import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import projectsObjects from '../../utils/projectsObjects';

class Carousel extends React.Component {
  state = {
    galleryItems: projectsObjects.map((item) => (
      <div className='individualProject' id={item.image}>
        <a href={item.projectHref} target={'_blank'}>
          <img id='projectImage' src={item.image} alt='Project' />
        </a>
        <div>
          <h3 id='projectTitle'>{item.title}</h3>
          <p>{item.description} </p>
        </div>
        <div>
          <button>
            <a id='projectLink' href={item.codeHref} target={'_blank'}>
              Code
            </a>
          </button>
        </div>
      </div>
    )),
  };

  responsive = {
    0: { items: 1 },
    600: { items: 2 },
    1024: { items: 3 },
  };

  thumbItem = (item, i) => (
    <span key={item} onClick={() => this.Carousel.slideTo(i)}></span>
  );

  render() {
    return (
      <div>
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

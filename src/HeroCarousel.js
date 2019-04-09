import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import './../node_modules/bootstrap/dist/css/bootstrap.min.css';

import './HeroCarousel.scss';

import slideData from './slideData.js';

export default class HeroCarousel extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.slides = slideData;

    this.handleSelect = this.handleSelect.bind(this);

    this.state = {
      index: 0,
      direction: null,
      slides: this.slides
    };
  }

  handleSelect(selectedIndex, e) {
    this.setState({
      index: selectedIndex,
      direction: e.direction
    });
  }

  render() {
    const { index, direction, slides } = this.state;

    var carouselItems = [];
    for (let i = 0; i < slides.length; i ++) {
      var item = slides[i];
      carouselItems.push(
        <Carousel.Item key={i}>
          <img
            className="d-block w-100"
            src={item.src}
            alt={item.alt}
          />
          <Carousel.Caption>
            <h3>{item.captionTitle}</h3>
            <p>{item.captionDesc}</p>
          </Carousel.Caption>
        </Carousel.Item>
      );
    }

    return (
      <Carousel
        activeIndex={index}
        direction={direction}
        onSelect={this.handleSelect}
      >
        {carouselItems}
      </Carousel>
    );
  }
}

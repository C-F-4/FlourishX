import React, { Component } from 'react';

import './Landing.scss';

import HeroCarousel from './HeroCarousel';
import Search from './Search';
import CategoryGrid from './CategoryGrid';

export default class Landing extends Component {
  render() {
    return (
      <div className="page">
        <section className="hero-carousel-container">
          <HeroCarousel />
        </section>
        <section className="search-container">
          <Search />
        </section>
        <section className="main-categories">
          <header className="section-header h3">Let's Celebrate all your special occasions stress-free!</header>        
          <CategoryGrid />
        </section>
        <section className="best-sellers">
          <header className="section-header"></header>
        </section>
      </div>
    );
  }
}

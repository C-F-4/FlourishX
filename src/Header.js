import React from 'react';
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";

import './Header.scss';

export default class Search extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      searchParams: {},
      isTop: true
    };
  }

  componentDidMount() {
    document.addEventListener('scroll', () => {
      const isTop = window.scrollY < 100;
      if (isTop !== this.state.isTop) {
        this.setState({isTop});
      }
    });
  }

  render() {
    const { searchParams, isTop } = this.state;

    return (
      <nav className={isTop ? 'site-nav site-nav-top': 'site-nav' }>
        <div className="brand-name">
          <NavLink to="/" className="brand-link">
            <span className="first-half">Flour</span><span className="second-half">ishX</span>
          </NavLink>
        </div>
        <ul className="nav-list">
          <li className="nav-item">
            <NavLink to="/explore/" className="nav-link">
              Explore<i className="fas fa-map-marked-alt fa-icon"></i>
            </NavLink>
          </li>
          <li className="nav-item">
            <a className="nav-link">Gifts<i className="fas fa-gift fa-icon"></i></a>
          </li>
          <li className="nav-item">
            <NavLink to="/contact/" className="nav-link">
              Contact Us<i className="fas fa-headset fa-icon"></i>
            </NavLink>
          </li>
        </ul>
        <ul className="action-nav-list">
          <li className="nav-item">
            <a className="nav-link">Search<i className="fas fa-search fa-icon"></i></a>
          </li>
          <li className="nav-item">
            <a className="nav-link">Sign In<i className="fas fa-sign-in-alt fa-icon"></i></a>
          </li>
        </ul>
      </nav>
    );
  }
}

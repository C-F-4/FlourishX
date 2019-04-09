import React from 'react';

import './Contact.scss';
import heroContactBanner from './images/grid-item-13-min.jpg';

export default class Search extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      hasContacted: 0
    };
  }

  render() {
    const { hasContacted } = this.state;

    return (
      <div className="page">
        <div className="fake-parallax-header" style={{backgroundImage: "url(" + heroContactBanner + ")"}}>
          <div className="page-header h2">Contact Us</div>
        </div>
      </div>
    );
  }
}

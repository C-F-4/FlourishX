import React from 'react';
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";

import './CategoryGrid.scss';

import categoryData from './categoryData.js';

export default class CategoryGrid extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.gridItems = categoryData;

    this.state = {
      gridItems: this.gridItems
    };
  }

  render() {
    const { gridItems } = this.state;

    var gridList = [];
    for (let i = 0; i < gridItems.length; i++) {
      var item = gridItems[i];
      gridList.push(
        <NavLink to={"/explore/" + item.catId} className="category-card" style={{backgroundImage: "url(" + item.src + ")"}} key={i} data-id={item.catId}>
          <div className="card-title h2">
            {item.title}
          </div>
        </NavLink>
      );
    }

    return (
      <div className="category-cardlist">
        {gridList}
      </div>
    );
  }
}

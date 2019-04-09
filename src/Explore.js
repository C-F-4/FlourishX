import React from 'react';

import './Explore.scss';
import categoryData from './categoryData.js';
import heroExploreBanner from './images/grid-item-12-min.jpg';

export default class Search extends React.Component {
  constructor(props, context) {
    super(props, context);

    const catId = this.props.match.params.categoryId;
    var cat = this.selectedCategoryData(categoryData, catId);
    this.state = {
      selectedCat: (catId || null),
      catData: cat
    };
  }

  selectedCategoryData(arr, catId) {
    if (catId) {
      return arr[arr.findIndex(x => x.catId === catId)];
    } else {
      return {
        'src': heroExploreBanner,
        'title': null,
        'catId': null
      };
    }
  }

  render() {
    const { selectedCat, catData } = this.state;

    return (
      <div className="page">
        <div className="fake-parallax-header" style={{backgroundImage: "url(" + catData.src + ")"}}>
          <div className="page-header h2">Explore {catData.title}</div>
        </div>
      </div>
    );
  }
}

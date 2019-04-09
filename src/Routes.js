import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Landing from './Landing';
import Contact from './Contact';
import Explore from './Explore';

export default () =>
  <Switch>
    <Route path="/" exact component={Landing} />
    <Route path="/contact" component={ Contact } />
    <Route path="/explore/:categoryId?" component={ Explore } />
  </Switch>;

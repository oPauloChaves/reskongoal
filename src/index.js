import './index.css'
import 'react-mdl/extra/material.css';
import 'react-mdl/extra/material.js';

import React from 'react'
import {render} from 'react-dom'

import { Router, Route, IndexRoute, browserHistory } from 'react-router'

import App from './components/App'
import AboutPage from './components/about/AboutContainer'
import HomePage from './components/home/HomeContainer'
import MainPage from './components/main/MainContainer'
import NotFound from './components/error404/NotFound'

render(
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={HomePage} />
      <Route path="/about" component={AboutPage} />
      <Route path="/main" component={MainPage} />

      <Route path="*" component={NotFound} />
    </Route>
  </Router>,
  document.querySelector('#app')
)

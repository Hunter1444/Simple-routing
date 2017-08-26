import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Home from './Home';
import SinglePageHotel from './Single-page-hotel';
import NoMatch from './No-match';
import HotelList from './Hotel-list';
import Header from './Header';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';


ReactDOM.render(
    <BrowserRouter>
      <div>
        <Route path="/" component={Header}/>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route path="/hotels/:hotel" component={SinglePageHotel}/>
          <Route path="/hotels" component={HotelList}/>
          <Route component={NoMatch} />
        </Switch>
      </div>
    </BrowserRouter>,
    document.getElementById('root'));
registerServiceWorker();

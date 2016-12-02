import React from 'react';
import ReactDOM from 'react-dom';
import AppContainer from './containers/AppContainer';
import Albums from './components/Albums';
import Album from './components/Album';
import { Router, Route, browserHistory, IndexRedirect } from 'react-router';

ReactDOM.render(
  <div>
    <Router history={browserHistory}>
      <Route path='/' component={AppContainer}>
        <IndexRedirect to="/albums" />
          {/* Our child routes will go here!
          The components that these child routes render will be the "children"
          of the component that the parent route renders!  */}
        <Route path="/albums/:albumId" component={Album} />
        <Route path='/albums' component={Albums}/>
      </Route>
    </Router>
  </div>,
  document.getElementById('app')
);

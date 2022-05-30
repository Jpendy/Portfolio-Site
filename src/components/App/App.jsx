import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import HomePage from './homePage/HomePage';
import ProjectDetailPage from './projectDetailPage/ProjectDetailPage';

export default function App() {
 
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route exact path='/:id' component={ProjectDetailPage} /> 
      </Switch>
    </Router>
  );
}
  

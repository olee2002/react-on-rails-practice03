import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import NavBar from './Components/NavBar'
import ParentList from './Components/ParentList'
import ParentPage from './Components/ParentPage'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <div>
            <NavBar />
            <Switch>
              <Route exact path='/' />
              <Route exact path='/parents' component={ParentList} />
              <Route exact path='/parents/:parentId' component={ParentPage} />
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;

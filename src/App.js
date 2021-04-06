import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Nav from './components/Nav';
import Home from './components/Home';
import './App.css';

function App() {
  return (
    <Router>
      <div className="app">
          <Switch>
            <Route path='/' exact component={Home}/>
              <Home />
          </Switch>
      </div>
    </Router>
  );
}

export default App;

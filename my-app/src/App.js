import React, { Component } from 'react';
import {BrowserRouter, Route ,Link} from "react-router-dom";
import { Switch } from 'react-router';
import  Display  from './component/display/display.js'
import Form from './component/form/from.js'
import './App.css';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <div className="App">
        <header className="App-header">
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <Link className="navbar-brand"  to={"regist"}>Demo</Link>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <Link className="nav-item nav-link active" to={'regist'}>Register </Link>
              <Link className="nav-item nav-link" to={'display'}>Member</Link>
            </div>
          </div>
        </nav>
        </header>
          <div>
            <Switch>
              <Route path="/" component={Form}></Route> 
              <Route path="regist" component={Form}></Route>
              <Route path="display" component={Display}></Route> 
            </Switch>
          </div>
      </div>
      </BrowserRouter>

    );
  }
}

export default App;


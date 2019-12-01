//<<<<<<< HEAD
import React, { Component } from "react";
import "./App.css";
import MainPage from "./pages"; ///< index.jsx will be automatically imported
import BookDisplay from "./pages/BookDisplay"
import GoogleBookDisplay from "./pages/GoogleBookDisplay"
import SelectSearch from "./pages/SelectSearch"
import Login from "./pages/Login"
import logo from './logo.svg';
import './App.css';

//Import all needed Component for this tutorial
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
  Redirect
} from "react-router-dom";


import Test from './TestContainer.js';

class App extends Component {
  render() {
    return (
        <Router>
            <Route exact path="/" component={Login} />
            <Route exact path="/SelectSearch" component={SelectSearch}/>
            <Route exact path="/BookDisplay" component={BookDisplay}/>
            <Route exact path="/GoogleBookDisplay" component={GoogleBookDisplay}/>
      </Router>
    );
    }
}
export default App;

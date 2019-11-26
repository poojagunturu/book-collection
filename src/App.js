/*App.js*/
import React, { Component } from "react";
import "./App.css";
import MainPage from "./pages"; ///< index.jsx will be automatically imported
import bookDisplay from "./pages/bookDisplay"
import Login from "./pages/Login"
//Import all needed Component for this tutorial
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
  Redirect
} from "react-router-dom";

class App extends Component {
  render() {
    return (
      <Router>
      <Route exact path="/" component={Login} />
      <Route exact path="/bookDisplay" component={bookDisplay} />
    </Router>
    );
  }
}
export default App;

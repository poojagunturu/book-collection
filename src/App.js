/*App.js*/
import React, { Component } from "react";
import "./App.css";
import MainPage from "./pages"; ///< index.jsx will be automatically imported
import bookDisplay from "./pages/bookDisplay"
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
      <Route exact path="/" component={MainPage} />
      <Route exact path="/bookDisplay" component={bookDisplay} />
    </Router>
    );
  }
}
export default App;

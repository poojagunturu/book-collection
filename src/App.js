//<<<<<<< HEAD
import React, { Component } from "react";
import "./App.css";
import MainPage from "./pages"; ///< index.jsx will be automatically imported
import bookDisplay from "./pages/bookDisplay"
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
  state = {
    response: '',
    post: '',
    responseToPost: '',
  };
  
  componentDidMount() {
    this.callApi()
      .then(res => this.setState({ response: res.express }))
      .catch(err => console.log(err));
  }
  
  callApi = async () => {
    const response = await fetch('/api/hello');
    const body = await response.json();
    if (response.status !== 200) throw Error(body.message);
    
    return body;
  };
  
  handleSubmit = async e => {
    e.preventDefault();
    const response = await fetch('/api/world', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ post: this.state.post }),
    });
    const body = await response.text();
    
    this.setState({ responseToPost: body });
  };
  
  render() {
    return (
      <Router>
      <Route exact path="/" component={Login} />
      <Route exact path="/bookDisplay" component={bookDisplay} />
    </Router>
    );
    }
// =======
// /*App.js*/
// import React, { Component } from "react";
// import "./App.css";
// import MainPage from "./pages"; ///< index.jsx will be automatically imported
// import bookDisplay from "./pages/bookDisplay"
// import Login from "./pages/Login"
// //Import all needed Component for this tutorial
// import {
//   BrowserRouter as Router,
//   Route,
//   Switch,
//   Link,
//   Redirect
// } from "react-router-dom";

// class App extends Component {
//   render() {
//     return (
//       <Router>
//       <Route exact path="/" component={Login} />
//       <Route exact path="/bookDisplay" component={bookDisplay} />
//     </Router>
//     );
//   }
// >>>>>>> feature/google-suggest
}
export default App;

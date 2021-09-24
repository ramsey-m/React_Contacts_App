import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "../components/Home";
import Friends from "../components/Friends";
import MyCard from "../components/MyCard";
import Navbar from "./../components/Navbar";
import axios from "axios";

class App extends Component {
  // useEffect
  // get request with axios (axios.get)
  // inside .get pass in the url (github)
  // then use .then and inside .then put data.
  // set data to new state.
  // console log data.
  // after .then have .catch to catch error
  //then console log the error.

  render() {
    return (
      <Router>
        <div>
          <Navbar />
          <hr />

          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/my-card" component={MyCard} />
            <Route path="/friends" component={Friends} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;

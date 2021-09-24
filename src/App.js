import React, { Component, useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "../components/Home";
import Friends from "../components/Friends";
import MyCard from "../components/MyCard";
import Navbar from "./../components/Navbar";
import axios from "axios";

function App() {
  const [ramsey, setRamsey] = useState({});

  useEffect(() => {
    axios
      .get("https://api.github.com/users/ramsey-m")
      .then((data) => setRamsey(data.data))
      .catch((err) => console.log(err));
  }, []);

  //render() {
  return (
    <Router>
      <div>
        <Navbar />
        <hr />

        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/my-card">
            <MyCard props={ramsey} />
          </Route>
          <Route path="/friends" component={Friends} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;

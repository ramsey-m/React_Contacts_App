import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "../components/Home";
import Friends from "../components/Friends";
import MyCard from "../components/MyCard";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <h2>Cohort 12 Contact Information</h2>
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <ul className="navbar-nav mr-auto">
              <li>
                <Link to={"/"} className="nav-link">
                  {" "}
                  Home{" "}
                </Link>
              </li>
              <li>
                <Link to={"/MyCard"} className="nav-link">
                  My Card
                </Link>
              </li>
              <li>
                <Link to={"/Friends"} className="nav-link">
                  Friends
                </Link>
              </li>
            </ul>
          </nav>
          <hr />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/contact" component={MyCard} />
            <Route path="/about" component={Friends} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;

// import "./styles.css";
// import Footer from "../components/Footer";
// import Card from "../components/Card";
// import Header from "../components/Header";
// import React, { Component } from "react";
// import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
// import Home from "../components/Home";
// import MyCard from "../components/MyCard";
// import Friends from "../components/Friends";

// export default function App() {
//   return (
//     <Router>
//       <div className="App">
//         <h2>Welcome to React Router Tutorial</h2>
//         <nav className="navbar navbar-expand-lg navbar-light bg-light">
//           <ul className="navbar-nav mr-auto">
//             <li>
//               <Link to={"/"} className="nav-link">
//                 {" "}
//                 Home{" "}
//               </Link>
//             </li>
//             <li>
//               <Link to={"/contact"} className="nav-link">
//                 MyCard
//               </Link>
//             </li>
//             <li>
//               <Link to={"/about"} className="nav-link">
//                 Friends
//               </Link>
//             </li>
//           </ul>
//         </nav>
//         <hr />
//         <Switch>
//           <Route exact path="/" component={Home} />
//           <Route path="/contact" component={MyCard} />
//           <Route path="/about" component={Friends} />
//         </Switch>
//         <Header />
//         <Footer />
//       </div>
//     </Router>
//   );
// }

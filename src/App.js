import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// store
import { connect } from "react-redux";

// components
import Favourites from "./Components/Favourites";
import Logo from "./Components/Logo";

// pages
import HomePage from "./pages/HomePage";
import Detail from "./pages/Detail";

// assets
import logo from "./assets/logo.png";

const App = (props) => {
  return (
    <div className="mainContainer">
      <Router>
        <Logo image={logo} />
        <div className="contentContainer">
          <Switch>
            <Route exact path="/">
              <HomePage />
            </Route>
            <Route path="/detail/:artistId">
              <Detail data={props.artistData} />
            </Route>
          </Switch>
          <Favourites />
        </div>
      </Router>
    </div>
  );
};

function mapStateToProps(state) {
  return {
    artistData: state.artistData,
  };
}

export default connect(mapStateToProps)(App);

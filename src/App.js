import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Detail from "./pages/Detail";
import { connect } from "react-redux";
import Favourites from "./Components/Favourites";
import Logo from "./Components/Logo";
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
    artistList: state.artistList,
  };
}

export default connect(mapStateToProps)(App);

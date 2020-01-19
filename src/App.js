import React from "react";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import Homepage from "./pages/homepage/homepage.component";
import Header from "./components/header/header.component";
import Articles from "./pages/articles/articles.component";
import History from "./pages/history/history.component";
import Links from "./pages/links/links.component";
import Photos from "./pages/photos/photos.component";
import SettlersNames from "./pages/settlers-names/settlers-names.component";

import "./App.scss";


export default function App() {
 
  return (
    
    <Router >
      <div className="App">
        <Header />

          <div className="m-2 p-md-3 mt-md-4 page-container">
            <Switch>
              <Route exact path="/" component={Homepage}></Route>
              <Route path="/articles" component={Articles}></Route>
              <Route exact path="/history" component={History}></Route>
              <Route exact path="/links" component={Links}></Route>
              <Route path="/photos" component={Photos}></Route>
              <Route
                exact
                path="/settlers-names"
                component={SettlersNames}
              ></Route>
            </Switch>
          </div>
      </div>
    </Router>
  );
}

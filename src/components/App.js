import React, { Component } from "react";
import { Switch, Route} from "react-router-dom";
import Home from "../screens/home/Home";
import Movies from "../screens/movies/Movies";
import NotFound from '../screens/notFound/NotFound';
import Header from './header/Header';

export default class App extends Component {
  state = {};

  render() {
    return (
      <>
        <Header />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/movies/:id" component={Home} />
          <Route path="/movies" component={Movies} />
          <Route component={NotFound} />
        </Switch>
      </>
    );
  }
}
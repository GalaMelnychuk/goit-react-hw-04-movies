import React, { Component } from "react";
import { Switch, Route} from "react-router-dom";
import Loadable from 'react-loadable';
import Loading from '../components/spiner/spiner';
import Header from './header/Header';


const LoadableHome = Loadable({
  loader: () => import('../screens/home/Home' /* webpackChunkName: "home" */),
  loading: Loading,
});

const LoadableMovies = Loadable({
  loader: () => import('../screens/movies/Movies'/* webpackChunkName: "movies" */),
  loading: Loading,
});

const LoadableMovieDetails = Loadable({
  loader: () => import('../screens/movieDetails/MovieDetails'/* webpackChunkName: "movieDetails" */),
  loading: Loading,
});

const LoadableNotFound  = Loadable({
  loader: () => import('../screens/notFound/NotFound'/* webpackChunkName: "not-found" */),
  loading: Loading,
});

export default class App extends Component {
  state = {};

  render() {
    return (
      <>
        <Header />
        <Switch>
          <Route path="/" exact component={LoadableHome} />
          <Route path="/movies/:movieId" component={LoadableMovieDetails} />
          <Route path="/movies" component={LoadableMovies} />
          <Route component={LoadableNotFound} />
        </Switch>
      </>
    );
  }
}

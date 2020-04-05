import React, { Component } from "react";
import { Switch, Route} from "react-router-dom";
import Loadable from 'react-loadable';
import Loading from '../components/spiner/spiner';
// import Home from "../screens/home/Home";
// import Movies from "../screens/movies/Movies";
// import NotFound from '../screens/notFound/NotFound';
import Header from './header/Header';
// import MovieDetails from '../screens/movieDetails/MovieDetails';

const LoadableHome = Loadable({
  loader: () => import('../screens/home/Home'),
  loading: Loading,
});

const LoadableMovies = Loadable({
  loader: () => import('../screens/movies/Movies'),
  loading: Loading,
});

const LoadableMovieDetails = Loadable({
  loader: () => import('../screens/movieDetails/MovieDetails'),
  loading: Loading,
});

const LoadableNotFound  = Loadable({
  loader: () => import('../screens/notFound/NotFound'),
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

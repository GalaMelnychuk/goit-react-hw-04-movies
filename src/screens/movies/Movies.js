import React, { Component } from "react";
import * as moviesApiRequest from "../../services/moviesAPI";
import MoviesList from "../../components/moviesList/MoviesList";
import styles from "../movies/Movies.module.css";
import queryString from "query-string";


export default class Movies extends Component {
  state = {
    query: "",
    movies: []
  };

  componentDidMount() {
    const querySt = queryString.parse(this.props.location.search);

    if (querySt.query) {
      moviesApiRequest.getMoviesForInput(querySt.query).then(films =>
        this.setState({
          movies: films.data.results
        })
      );
    }
  }

  handleSubmitForm = async e => {
    e.preventDefault();
    await this.setState({ movies: [] });
    await this.onQueryChange(this.state.query);
    await moviesApiRequest.getMoviesForInput(this.state.query).then(films =>
      this.setState({
        movies: films.data.results
      })
    );
  };

  onQueryChange = query => {
    this.props.history.push({
      pathname: this.props.location.pathname,
      search: `query=${query}`
    });
  };

  handleChange = e => {
    this.setState({ query: e.target.value });
  };

  render() {
    return (
      <>
        <div className={styles.Searchbar}>
          <form className={styles.SearchForm} onSubmit={this.handleSubmitForm}>
            <button type="submit" className={styles.SearchFormButton}>
              <span className={styles.SearchFormButtonLabel}>Search</span>
            </button>
            <input
              className={styles.SearchFormInput}
              onChange={this.handleChange}
              type="text"
              autoComplete="off"
              autoFocus
              placeholder="Search movies"
            />
          </form>
        </div>
        {this.state.movies.length > 0 && (
          <MoviesList movies={this.state.movies} />
        )}
      </>
    );
  }
}

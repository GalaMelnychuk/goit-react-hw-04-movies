import React, {Component} from 'react';
import * as moviesApiRequest from "../../services/moviesAPI";
import QueryMoviesList from '../queryMiviesList/QueryMoviesList';
import styles from '../movies/Movies.module.css'


export default class Movies extends Component {
  state = { 
    query: '',
    movies: []
   }

  handleSubmitForm = async e => {
    e.preventDefault();
   await this.setState({ movies: [] })
   await moviesApiRequest.getMoviesForInput(this.state.query).then(films =>
    this.setState({
      movies: films.data.results
    })
  );
  };

  handleChange = (e) => {
    this.setState({ query: e.target.value }) 
  }

  render() {
    return (
      <>
      <div className={styles.Searchbar}>
      <form className={styles.SearchForm} onSubmit={this.handleSubmitForm}>
        <button type="submit" className={styles.SearchFormButton} >
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
    {
      this.state.movies.length > 0 &&
      <QueryMoviesList movies={this.state.movies} />
    }
    
    </>
    );
  }
}
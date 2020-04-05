import React, { Component } from "react";
import * as moviesApiRequest from "../../services/moviesAPI";
import styles from "./MovieDetails.module.css";
import AddMovieInfo from "../../components/addMovieInfo/AddMovieInfo";

const getIdFromProps = props => props.match.params.movieId;

export default class MovieDetails extends Component {
  state = {
    poster: "",
    filmName: "",
    overview: "",
    id: "",
    genres: [],
    userScore: ""
  };

  maxId = 100;

  componentDidMount() {
    const id = getIdFromProps(this.props);

    moviesApiRequest
      .getMovieDetails(id)
      .then(
        ({
          data: {
            backdrop_path,
            original_title,
            overview,
            id,
            vote_average,
            genres
          }
        }) => {
          const movieGenres = genres.map(item => {
            return item.name;
          });
          // console.log('data', rez)
          this.setState({
            poster: backdrop_path,
            filmName: original_title,
            overview: overview,
            id,
            genres: movieGenres,
            userScore: vote_average
          });
        }
      );
  }

  handleGoBack = () => {
    this.props.history.push('/')
  }

  render() {
    const { poster, filmName, overview, id, genres, userScore } = this.state;
    console.log('this.props', this.props)

    return (
      <>
        <button className={styles.button} onClick = {this.handleGoBack}>GO BACK</button>
        <div className={styles.filmDesc}>
          <img
            src={`https://image.tmdb.org/t/p/original${poster}`}
            alt="img"
            height="700"
            width="700"
          />
          <div className={styles.filmDetl}>
            <h1>{filmName}</h1>
            <p>User Score: {userScore} %</p>
            <h2>Overview</h2>
            <p>{overview}</p>
            <h3>Genres</h3>
            <ul>
              {genres.map(genr => (
                <li key={this.maxId++}>{genr}</li>
              ))}
            </ul>
          </div>
        </div>
        <AddMovieInfo id={id}/>
      </>
    );
  }
}

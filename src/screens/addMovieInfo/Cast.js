import React, { Component } from "react";
import * as moviesApiRequest from "../../services/moviesAPI";

const getIdFromProps = props => props.match.params.movieId;

export default class Cast extends Component {
  state = {
    cast: []
  };

  componentDidMount() {
    const id = getIdFromProps(this.props);
    moviesApiRequest
      .getMovieCast(id)
      .then(({ data }) => this.setState({ cast: [...data.cast] }));
  }

  render() {
    return (
      <>
        <ul>
          {this.state.cast.map(actor => (
            <li key={actor.id}>
              <img
                src={`https://image.tmdb.org/t/p/original${actor.profile_path}`}
                alt="actor" width='100' height='100'
              />
              <p>{actor.name}</p>
              <p>Character: {actor.character}</p>
            </li>
          ))}
        </ul>
      </>
    );
  }
}

import React, { Component } from "react";
import * as moviesApiRequest from "../../services/moviesAPI";
import NotFound from "../notFound/NotFound";

const getIdFromProps = props => props.match.params.movieId;

export default class Cast extends Component {
  state = {
    reviews: []
  };

  maxId = 700;

  componentDidMount() {
    const id = getIdFromProps(this.props);
    moviesApiRequest.getMovieReview(id).then(res => {
      this.setState({ reviews: res.data.results });
    });
  }

  render() {
    const { reviews } = this.state;
    return (
      <>
        <ul>
          {reviews.length > 0 ? (
            reviews.map(review => (
              <li key={review.id}>
                <h5>AUTOR: </h5>
                <p>{review.author}</p>
                <span>{review.content}</span>
              </li>
            ))
          ) : (
            <NotFound />
          )}
        </ul>
      </>
    );
  }
}

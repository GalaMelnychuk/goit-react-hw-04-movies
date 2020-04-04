import React from 'react'
import { Link } from "react-router-dom";

const MoviesList = ({ movies = [] }) => {
    return (
      <ul>
        {movies.map(movie => (
          <li key={movie.id}>
            <Link
              to={{
                pathname: `/movies/${movie.id}`,
                state: { from: "/" }
              }}
            >
              {movie.title || movie.original_name}
            </Link>
          </li>
        ))}
      </ul>
    );
  };
  
  export default MoviesList;

import React from 'react'
import { Link } from "react-router-dom";

const QueryMoviesList = ({ movies = [] }) => {
    return (
      <ul>
        {movies.map(movie => (
          <li key={movie.id}>
            <Link to={`/movies/${movie.id}`}> 
              {movie.original_title}
              </Link>
          </li>
        ))}
      </ul>
    );
  };
  
  export default QueryMoviesList;

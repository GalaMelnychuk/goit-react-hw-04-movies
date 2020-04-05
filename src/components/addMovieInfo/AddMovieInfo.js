import React from "react";
import { NavLink, Route, withRouter } from "react-router-dom";
import styles from "./AddMovieInfo.module.css";
import Cast from "../../screens/addMovieInfo/Cast";
import Reviews from "../../screens/addMovieInfo/Reviews";

const AddMovieInfo = ({ id, location }) => {
  return (
    <>
      <div className={styles.movieInfo}>
        <h2>Additional information</h2>
        <ul>
          <li>
            <NavLink to={{
              pathname: `/movies/${id}/cast`,
              state: {from: location}}} activeClassName={styles.activeLink} >Cast</NavLink>
          </li>
          <li>
            <NavLink to={{
              pathname: `/movies/${id}/reviews`,
              state: {from: location}}} activeClassName={styles.activeLink} >Reviews</NavLink>
          </li>
        </ul>
      </div>
      <Route path={`/movies/:movieId/cast`} component={Cast}></Route>
      <Route path={`/movies/:movieId/reviews`} component={Reviews}></Route>
    </>
  );
};

export default withRouter(AddMovieInfo);

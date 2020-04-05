import axios from "axios";

const KEY = "b1e265531c8ed75f20ac8a3df06da0b2";

export const getMovies = async () => {
  const res = await axios.get(
    `https://api.themoviedb.org/3/trending/all/day?api_key=${KEY}`
  );
  return res;
};

export const getMovieDetails = async (movieId) => {
  const res = await axios.get(
    `https://api.themoviedb.org/3/movie/${movieId}?api_key=${KEY}&language=en-US`
  );
  return res;
};

export const getMovieCast = async movieId => {
  const res = await axios.get(`https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=${KEY}`)
    return res;
};

export const getMovieReview = async movieId => {
  const res = await axios.get(
    `https://api.themoviedb.org/3/movie/${movieId}/reviews?api_key=${KEY}&language=en-US&page=1`
  );
return res;
};

export const getMoviesForInput = async query => {
  const res = await axios.get(
    `https://api.themoviedb.org/3/search/movie?api_key=${KEY}&language=en-US&query=${query}&page=1&include_adult=false`
  );
  return res;
};

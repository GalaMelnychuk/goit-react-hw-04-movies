import axios from "axios";

const KEY = "b1e265531c8ed75f20ac8a3df06da0b2";

export const getMovies = async () => {
  const res = await axios.get(
    `https://api.themoviedb.org/3/trending/all/day?api_key=${KEY}`
  );
    return res;
};

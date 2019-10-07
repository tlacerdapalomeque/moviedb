import axios from "axios";
import { GET_MOVIES } from "./types";

export const getMovies = movieSearchText => dispatch => {
  axios
    .get(
      `https://api.themoviedb.org/3/search/movie?api_key=5adda1888ce5d51c3152043a0977978e&language=en-US&page=1&include_adult=false&query=${movieSearchText}`
    )
    .then(res =>
      dispatch({
        type: GET_MOVIES,
        payload: res.data
      })
    );
};

import { combineReducers } from "redux";
import movieReducer from "./movieReducer";

const movies = combineReducers({
  movies: movieReducer
});

export default movies;

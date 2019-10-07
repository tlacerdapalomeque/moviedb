import React, { Component } from "react";
import "./App.css";

import Navbar from "./components/navbar";
import MovieSearch from "./components/movieSearch";
import MovieList from "./components/movieList";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar></Navbar>
        <MovieSearch></MovieSearch>
        <MovieList></MovieList>
      </div>
    );
  }
}

export default App;

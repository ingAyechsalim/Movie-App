import React from "react";
import NameFilter from "./filter";
import RatingFilter from "./ratingG";
import MovieList from "./Movielist";
import moviesToDisplay from "./data";
const MovieApp = () => (
  <div className="movie-app">
    <header className="movie-app-header">
      <NameFilter />
      <RatingFilter />
    </header>
    <main className="movie-app-main">
      <MovieList movies={moviesToDisplay} />
    </main>
  </div>
);

export default MovieApp;

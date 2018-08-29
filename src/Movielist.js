import React from "react";
import MovieCard from "./Card";

const MovieList = props => (
  <div className="movie-list">
    {props.movies.map((el, i) => <MovieCard key={i} movie={el} />)}
    <div>
      <input className="new-movie-card" type="button" value="+" />
    </div>
  </div>
);

export default MovieList;

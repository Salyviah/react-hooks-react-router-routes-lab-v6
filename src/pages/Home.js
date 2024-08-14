import React from "react";
import MovieCard from "../components/MovieCard";

function Home() {
  // Example: You might want to map over an array of movies to display them
  const movies = [{ id: 1, title: "Inception" }, { id: 2, title: "Interstellar" }];
  
  return (
    <div>
      <h1>Home Page</h1>
      <div>
        {movies.map(movie => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
}

export default Home;

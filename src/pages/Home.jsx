import React, { useState } from "react";
import MovieCard from "../components/MovieCard";
import moviesData from "../data/movies"; // Corrected import path and renamed to avoid conflict

function Home() {
  const [searchQuery, setSearchQuery] = useState("");
  const [movies, setMovies] = useState(moviesData); // Initialize with imported data

  const handleSearch = (e) => {
    e.preventDefault();
    alert(`Searching for: ${searchQuery}`);
    setSearchQuery("");
  };

  return (
    <div>
      {/* Search Bar */}
      <div>
        <div className="flex p-4 justify-center items-center gap-20">
          <form className="flex" onSubmit={handleSearch}>
            <input
              type="text"
              className="rounded-l-sm bg-amber-100 p-2 focus:outline-none"
              placeholder="Search movies here..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <button
              className="rounded-r-sm bg-white p-2 border border-amber-100 hover:bg-amber-50 transition-colors"
              type="submit"
            >
              Search
            </button>
          </form>
        </div>
      </div>

      {/* Movie Cards */}
      <div className="flex flex-wrap gap-5 mt-5 justify-center">
        {movies
          .filter((movie) =>
            movie.title.toLowerCase().startsWith(searchQuery.toLowerCase())
          )
          .map((movie) => (
            <MovieCard movie={movie} key={movie.id} />
          ))}
      </div>
    </div>
  );
}

export default Home;
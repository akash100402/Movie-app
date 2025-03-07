import React, { useState } from "react";
import MovieCard from "../components/MovieCard";

function Home() {
  const [searchQuery, setSearchQuery] = useState("");

  const movies = [
    { id: 1, title: "John Wick", releaseYear: "2014" },
    { id: 2, title: "Avengers", releaseYear: "2012" },
    { id: 3, title: "Dead Pool", releaseYear: "2009" },
    { id: 4, title: "Catch Me", releaseYear: "2024" },
    { id: 5, title: "Last of Us", releaseYear: "2019" },
  ];
  const handleSubmit = (e) => {
    e.preventDefault();
    alert(searchQuery);
  };
  return (
    <div>
      <div className="bg-blue-950">
        <div className="flex p-4 justify-center  items-center gap-20">
          <h2 className="font-bold text-white">
            Movies <span className="text-cyan-300">List</span>
          </h2>
          <form className="flex" onSubmit={handleSubmit}>
            <input
              type="text"
              className="rounded-l-sm bg-amber-100"
              placeholder="Search movies here..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <button className="rounded-r-sm bg-white" type="submit">
              Search
            </button>
          </form>
        </div>
      </div>
      <div className="">
        {movies.map(
          (movie) =>
            movie.title.toLowerCase().startsWith(searchQuery) && (
              <MovieCard movie={movie} key={movie.id} />
            )
        )}
      </div>

      {/* <p className="text-red-500">Hello world</p> */}
    </div>
  );
}

export default Home;

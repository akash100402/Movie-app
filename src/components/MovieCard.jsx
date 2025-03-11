// MovieCard.js
import React from "react";

function MovieCard({ movie }) {
  function onFav() {
    alert("Added to favorite");
  }

  return (
    <div className="group relative w-56 h-80 border border-gray-500 hover:border-2 sm:h-[360px] overflow-hidden rounded-lg sm:w-[280px] transition-all">
     {/* <div className="relative float-right">
          <button onClick={onFav}>❤️</button>
        </div> */}
      <div>
        <img
          src={movie.url}
          className="h-[260px] w-full object-cover group-hover:h-[200px] transition-all duration-300 z-20"
          alt={movie.title}
        />
        
      </div>
      <div className="p-3 flex flex-col gap-2">
        <h2 className="text-lg font-semibold line-clamp-2">{movie.title}</h2>
        <p className="italic text-sm">{movie.releaseYear}</p>
      </div>
    </div>
  );
}

export default MovieCard;
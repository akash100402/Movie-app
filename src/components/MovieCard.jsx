import React from 'react'

function MovieCard({movie}) {
    function onFav(){
        alert("Added to favorite")
    }
  return (
    <div>
      <div className=''>
        <img src={movie.url} alt={movie.title} />
        <div>
            <button onClick={onFav}>❤️</button>
        </div>
      </div>
      <div>
        <h2 className='text-green-400'>{movie.title}</h2>
        <p className='text-bold'>{movie.release}</p>
      </div>
    </div>
  )
}

export default MovieCard

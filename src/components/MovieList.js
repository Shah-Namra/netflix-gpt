import React from 'react';
import MovieCard from './MovieCard';

const MovieList = ({ title, movies }) => {
  if (!movies || movies.length === 0) {
    return <div className="text-white">No movies available</div>;
  }

  return (
    <div className="p-6 md:px-12 md:py-8">
      <h2 className="text-lg md:text-3xl font-semibold py-2 text-white drop-shadow-lg animate-fade-in-up">
        {title}
      </h2>
      <div className="flex overflow-x-scroll space-x-4 scrollbar-hide animate-slide-in">
        {movies.map((movie) => (
          <MovieCard key={movie.id} posterPath={movie.poster_path} />
        ))}
      </div>
    </div>
  );
};

export default MovieList;

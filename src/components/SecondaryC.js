import React from 'react';
import { useSelector } from 'react-redux';
import MovieList from './MovieList';

const SecondaryC = () => {
  const { nowMovies, popularMovies, topRatedMovies, upcomingMovies } = useSelector(store => store.movies);

  return (
    <div className="bg-black bg-opacity-90 py-8 md:py-12">
      <div className="z-20 px-4 md:px-12 relative">
        <MovieList title="Now Playing" movies={nowMovies} />
        <MovieList title="Popular" movies={popularMovies} />
        <MovieList title="Top Rated" movies={topRatedMovies} />
        <MovieList title="Upcoming Movies" movies={upcomingMovies} />
      </div>
    </div>
  );
};

export default SecondaryC;

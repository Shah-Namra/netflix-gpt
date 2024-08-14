import React from 'react';
import { useSelector } from 'react-redux';
import VideoBG from './VideoBG';
import VideoTitle from './VideoTitle';

const MainC = () => {
  const movies = useSelector((store) => store.movies?.nowMovies);

  if (!movies || movies.length === 0) return null; // if movies is not available, return nothing

  const mainMovie = movies?.[0];
  if (!mainMovie) return null; // extra security check

  const { original_title, overview, id } = mainMovie; // this will be the hero section of the page

  return (
    <div className="relative pt-[30%] bg-black md:pt-0 overflow-hidden">
      <VideoTitle title={original_title} overview={overview} />
      <VideoBG movieId={id} />
    </div>
  );
}

export default MainC;

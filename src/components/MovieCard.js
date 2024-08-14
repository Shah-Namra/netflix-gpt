import React from 'react';
import { Image_cdn } from '../utils/constants';

const MovieCard = ({ posterPath }) => {
  if (!posterPath) return null;
  return (
    <div className="flex-none transform transition-transform duration-300 hover:scale-105 shadow-xl rounded-lg overflow-hidden">
      <img
        className="w-24 md:w-36 lg:w-48 h-auto object-cover"
        alt="Movie Poster"
        src={`${Image_cdn}${posterPath}`}
      />
    </div>
  );
};

export default MovieCard;

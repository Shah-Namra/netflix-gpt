import React from 'react';

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="w-full pt-[40%] md:pt-[20%] px-4 md:px-24 absolute top-0 left-0 right-0 bottom-0 bg-gradient-to-r from-black to-transparent">
      <h1 className="font-extrabold text-3xl md:text-7xl text-white drop-shadow-lg animate-fade-in">
        {title}
      </h1>
      <p className="hidden md:block py-4 text-sm md:text-lg w-full md:w-1/2 text-white opacity-90 animate-slide-up">
        {overview}
      </p>

      <div className="flex flex-col md:flex-row mt-6 md:mt-10 space-y-4 md:space-y-0 md:space-x-4">
        <button className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black py-3 px-8 text-lg md:text-xl rounded-lg shadow-xl transform transition-transform duration-300 hover:scale-105 animate-bounce">
          ▶ Play
        </button>
        <button className="bg-gray-800 bg-opacity-60 text-white py-3 px-8 text-lg md:text-xl rounded-lg shadow-xl transform transition-transform duration-300 hover:scale-105">
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;

import React from 'react'
import useMovieTrailer from '../Hooks/useMovieTrailer';
import { useSelector } from 'react-redux';

const VideoBG = ({movieId}) => {
  const trailerVideo = useSelector(state => state.movies.TrailerVideo); // getting the trailer from the store
  
  useMovieTrailer(movieId);
   
  return (
    
    <div>
      <h1>
        <iframe className='w-screen  aspect-video'  
          src={"https://www.youtube.com/embed/"+ trailerVideo?.key +"?&autoplay=1"+"&mute=1"}
          title="YouTube video player" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
          referrerPolicy="strict-origin-when-cross-origin" >
        </iframe>
      </h1>
    </div>
  )
}

export default VideoBG

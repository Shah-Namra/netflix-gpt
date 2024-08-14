import { API_options } from '../utils/constants'
import { useDispatch, useSelector } from 'react-redux';
import { addTrailerVideo } from '../utils/movieSlice';
import { useEffect } from 'react';

const useMovieTrailer = (movieId) => {
    const dispatch = useDispatch();

  const TrailerVideo = useSelector(store => store.movies.trailerVideo); // getting the trailer from the store

    // fetch movie id and then fetch trailer from the movie id  
    const getMovieVideo = async () => {
       const data = await fetch(
         'https://api.themoviedb.org/3/movie/'+ 
            movieId+
         '/videos?language=en-US',
          API_options
         ) // API_options will come from constants
         const json = await data.json();
         //console.log(json);
         
         const filterData = json.results.filter(video => video.type === "Trailer"); // fiding the trailer in API
         const trailer = filterData[0]; // in case there are multiple trailers, we will take the first one
         // console.log(trailer);
         dispatch(addTrailerVideo(trailer)); // dispatching the trailer from the store

         // if filterData is empty, then we will return 1st video from the results
         if(filterData.length === 0) {
           return json.results[0];
         }
       };

     useEffect(() => {
      !TrailerVideo && getMovieVideo();
     }, [movieId]); 
}

export default useMovieTrailer

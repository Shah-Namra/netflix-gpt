import React from 'react'
import { API_options } from '../utils/constants';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setMovies } from '../utils/movieSlice';

const useNowPlayingMovies = () => {
  // fetching the data and putting it in the store
  const dispatch = useDispatch();

  // memoization
  const nowMovies = useSelector(store => store.movies.nowMovies);


  // api call
  const getNowPlayingMovies = async () => {
    const data= await fetch(
      'https://api.themoviedb.org/3/movie/now_playing?page=1',
       API_options
      )
    const json = await data.json();
    //console.log(json.results);
    dispatch(setMovies(json.results));// it will show the movies in the console
  }

  useEffect(() => { // useEffect is used to call the API only once
    // if(!nowMovies)
    //   getNowPlayingMovies(); 
    !nowMovies && getNowPlayingMovies(); // if nowMovies is null then call the API
  },[]) // if we dont [] then we will show infinite API calls

}

export default useNowPlayingMovies

import React from 'react'
import { API_options } from '../utils/constants';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addPopularMovies } from '../utils/movieSlice';

const usePopularMovies = () => {
  // fetching the data and putting it in the store
  const dispatch = useDispatch();
  // api call
  const popularMovies = useSelector(store => store.movies.popularMovies);

  const getPopularMovies = async () => {
    const data= await fetch(
      'https://api.themoviedb.org/3/movie/popular',
       API_options
      )
    const json = await data.json();
    console.log(json.results);
    dispatch(addPopularMovies(json.results));// it will show the movies in the console
  }

  useEffect(() => { // useEffect is used to call the API only once
    !popularMovies && getPopularMovies(); 
  },[]) // if we dont [] then we will show infinite API calls

}

export default usePopularMovies

// https://api.themoviedb.org/3/movie/top_rated
import React from 'react'
import { API_options } from '../utils/constants';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {  addTopRatedMovies } from '../utils/movieSlice';

const useTopRatedMovies = () => {
  // fetching the data and putting it in the store
  const dispatch = useDispatch();
  // api call
  const topRatedMovies = useSelector(store => store.movies.topRatedMovies);

  const getTopRatedMovies = async () => {
    const data= await fetch(
      'https://api.themoviedb.org/3/movie/top_rated',
       API_options
      )
    const json = await data.json();
    console.log(json.results);
    dispatch(addTopRatedMovies(json.results));// it will show the movies in the console
  }

  useEffect(() => { // useEffect is used to call the API only once
   !topRatedMovies && getTopRatedMovies(); 
  },[]) // if we dont [] then we will show infinite API calls

}

export default useTopRatedMovies

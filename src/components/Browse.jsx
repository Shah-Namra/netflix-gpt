import React from 'react'
import Header from './Header'
import useNowPlayingMovies from '../Hooks/useNowPlayingMovies';
import MainC from './MainC';
import SecondaryC from './SecondaryC';
import usePopularMovies from '../Hooks/usePopularMovies';
import useTopRatedMovies from '../Hooks/useTopRatedMovies';
import useUpcomingMovies from '../Hooks/useUpcomingMovies';
import GPTSearch from './GPTSearch';
import { useSelector } from 'react-redux';

const Browse = () => {
  
  const showGPTSearch = useSelector( store => store.gpt.showGptSearch);
  useNowPlayingMovies();
  usePopularMovies();
  useTopRatedMovies();
  useUpcomingMovies();
  

  return (
    <div>
      <Header />
      {
        showGPTSearch ? 
        <GPTSearch /> : 
         <>
          <MainC />
          <SecondaryC /> 
        </>
      }
      {
        // videobackground, title, play button, 
        // row of movies in form of cards 
      }


    </div>
  )
}

export default Browse

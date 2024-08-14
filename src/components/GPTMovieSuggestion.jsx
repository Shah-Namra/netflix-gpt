import React from 'react'
import MovieList from './MovieList'
import { useSelector } from 'react-redux'

const GPTMovieSuggestion = () => {
  const {movieResults , movieNames} = useSelector(store => store.gpt);
    if(!movieNames) return null;

  return (
    <div className='p-4 bg-black m-4 text-white bg-opacity-90'>
        <div>
          {movieNames.map((movieName, index)  => (
          <MovieList key=
            {movieName} 
            title={movieNames} 
            movies={movieResults[index]} 
          />
        ))}
        </div>
    </div>
  )
}

export default GPTMovieSuggestion

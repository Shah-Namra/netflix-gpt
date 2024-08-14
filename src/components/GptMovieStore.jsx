import React from 'react'
import { useSelector } from 'react-redux'

const GptMovieStore = () => {
  const {movieResults , movieNames} = useSelector(store => store.gpt);
    if(!movieNames) return null;

  return (
    <div className='p-4 bg-black m-4 text-white'>
        {movieNames}
    </div>
  )
}

export default GptMovieStore

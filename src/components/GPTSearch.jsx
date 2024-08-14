import React from 'react'
import GPTSearchBar from './GPTSearchBar'
import GPTMovieSuggestion from './GPTMovieSuggestion'    
import { BG_URL } from '../utils/constants'
const GPTSearch = () => {
  return (
  <>
    <div>
      <img 
        className='w-full h-full fixed -z-10 ' 
        src={BG_URL} 
        alt="background" 
        />
    </div>
      <div className=''>
        <GPTSearchBar />
        <GPTMovieSuggestion />
    </div>
    </>
  )
}

export default GPTSearch;
    
import React, { useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import lang from '../utils/languageConstats';
import openAI from '../utils/openAI';
import { addGPTMovieResult } from '../utils/gptSlice'; // Fix: Import addGPTMovieResult

const GPTSearchBar = () => {
    const dispatch = useDispatch();
    const langKey = useSelector(store => store.config.lang);
    const searchText = useRef(null);

    const searchMovieTMDB = async (movieName) => {
        const API_options = {
            method: 'GET',
            headers: {
                'Authorization': 'Bearer YOUR_API_KEY'
            }
        };
        const response = await fetch(`https://api.themoviedb.org/3/search/movie?query=${movieName}&include_adult=false&language=en-US&page=1`, API_options);
        return response.json();
    };

    const handleGPTSearchClick = async () => {
        try {
            const userInput = searchText.current.value;
            console.log(userInput);

            const gptQuery = `Act as a movie recommendation system and suggest me some movies based on the following preferences: ${userInput}. Only give the names of the top 5 movies, comma-separated like the example result given ahead. Example result: 3 Idiots, Sholay, Players, Golmaal, Lagaan`;

            const gptResult = await openAI.chat.completions.create({
                model: 'gpt-3.5-turbo',
                messages: [{ role: 'user', content: gptQuery }],
            });

            console.log(gptResult.choices?.[0]?.message?.content);

            const gptMovies = gptResult.choices?.[0]?.message?.content.split(",");
            const promiseArray = gptMovies.map(movie => searchMovieTMDB(movie.trim()));
            const tmdbResults = await Promise.all(promiseArray);

            console.log(tmdbResults);
            dispatch(addGPTMovieResult({movieNames: gptMovies, movieResults: tmdbResults})); // Fix: Dispatch the results
        } catch (error) {
            console.error('Error fetching GPT result:', error);
        }
    };

    return (
        <div className='pt-[35%] md:p-[10%] flex justify-center'>
            <form
                className='w-full mid:w-1/2 bg-slate-900 grid grid-cols-12'
                onSubmit={(e) => e.preventDefault()} // Prevent default form submission
            >
                <input 
                    ref={searchText}
                    type="text" 
                    placeholder={lang[langKey].GptSearchPlaceholder} 
                    className='p-4 m-4 col-span-9' 
                />
                <button 
                    type="button"
                    className='py-2 px-4 m-4 bg-red-500 text-white rounded-lg col-span-3 '
                    onClick={handleGPTSearchClick}
                >
                    {lang[langKey].search}
                </button>
            </form>
        </div>
    );
};

export default GPTSearchBar;

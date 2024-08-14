import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({ 
    name: 'gpt',
    initialState: {
        showGptSearch: false,  
        gptMovies: null,
        movieResults: null,
        movieNames: null,
    },
    reducers:{
        toggleGptSearchView: (state) => {
            state.showGptSearch = !state.showGptSearch;
        },
        addGPTMovieResult: (state, action) => { // Fix: Added action parameter
            const {movieNames, movieResults} = action.payload;
            state.movieNames = movieNames;
            state.movieResults = movieResults;
        },
    },
});

export const { toggleGptSearchView, addGPTMovieResult } = gptSlice.actions; // Fix: Export addGPTMovieResult
export default gptSlice.reducer;

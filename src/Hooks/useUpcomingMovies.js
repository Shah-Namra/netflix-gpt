import { API_options } from '../utils/constants';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { addUpcomingMovies } from '../utils/movieSlice';
import { useSelector } from 'react-redux';

const useUpcomingMovies = () => {
  const dispatch = useDispatch();
  const upcomingMovies = useSelector(store => store.movies.upcomingMovies); 

  const getUpcomingMovies = async () => {
    const data = await fetch('https://api.themoviedb.org/3/movie/upcoming', API_options);
    const json = await data.json();
    //console.log(json.results);
    dispatch(addUpcomingMovies(json.results));
  }

  useEffect(() => {
    !upcomingMovies && getUpcomingMovies();
  }, []);

}

export default useUpcomingMovies;

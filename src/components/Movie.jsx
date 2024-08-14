import React from 'react';
import { useParams } from 'react-router-dom';
import useMovieDetails from '../Hooks/useMovieDetails'; // Custom hook to fetch movie details
import CastCard from './CastCard';
import CircularRatingBar from './CircularRatingBar';
import MovieReviews from './MovieReviews'; // Assume you create this component for reviews

const Movie = () => {
    const { movieId } = useParams(); // Get movieId from the route
    const { movieDetails, loading, error } = useMovieDetails(movieId);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error}</p>;
    if (!movieDetails) return <p>No movie details available</p>;

    const { title, overview, rating, cast, reviews } = movieDetails;

    return (
        <div className="p-6">
            <h1 className="text-4xl font-bold mb-4">{title}</h1>
            <CircularRatingBar rating={rating} />
            <p className="mt-4 mb-8">{overview}</p>

            <div className="my-8">
                <h2 className="text-2xl font-semibold mb-4">Cast</h2>
                <div className="flex overflow-x-scroll">
                    {cast.map((member) => (
                        <CastCard
                            key={member.id}
                            img_path={member.profile_path}
                            name={member.name}
                            character={member.character}
                        />
                    ))}
                </div>
            </div>

            <div className="my-8">
                <h2 className="text-2xl font-semibold mb-4">Reviews</h2>
                <MovieReviews reviews={reviews} /> {/* Render reviews */}
            </div>
        </div>
    );
};

export default Movie;

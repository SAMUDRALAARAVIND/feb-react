import { useState } from "react";
import Search from "./Search.js"
import MovieCard from "./MovieCard.js"
import "./movies.css";
import { movies as moviesList } from "./data.js";

export const MoviesApp = () => {
    const [movies, setMovies] = useState(moviesList);

    const searchMovies = (searchValue) => {
        // filter movies which are a match of searchValue
        const filteredMovies = moviesList.filter((movie) => {
            return movie.Title.toLowerCase().includes(searchValue.toLowerCase())
        });

        setMovies(filteredMovies);
    }

    return (
        <>
            <Search searchMovies={searchMovies} />
            <div className="movie-cards">
                {
                    movies.map(movie => <MovieCard movieInfo={movie} key={movie.imdbID} />)
                }
            </div>
        </>
    )


};
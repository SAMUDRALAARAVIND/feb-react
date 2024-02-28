import { useSelector } from "react-redux";
import { MovieCard } from "./MovieCard";
import "../styles/movies.scss";
import { useNavigate } from "react-router-dom";

const Movies = () => {
    const movies = useSelector((state) => state.movies);
    const navigate = useNavigate();

    const onClickCard = (movieId) => {
        navigate(`/movie/${movieId}`)
    }

    return (
        <div className="movie-cards">
            {
                movies.map((movie) => <MovieCard key={movie.id} movie={movie} onClickCard={onClickCard} />)
            }
        </div>
    );
}

export default Movies;
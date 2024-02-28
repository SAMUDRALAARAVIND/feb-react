export const MovieCard = ({ movie, onClickCard }) => {
    return (
        <div className="movie-card" onClick={() => onClickCard(movie.id)}>
            <img src={movie.imageUrl} />
            <p className="title">{movie.title}</p>
            <span>{movie.releaseDate}</span>
        </div>
    );
}
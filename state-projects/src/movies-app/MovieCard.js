import { memo } from "react";

function MovieCard({ movieInfo }) {
    const ratingColor = Number(movieInfo.imdbRating) >= 8 ? "green" : "orange"
    let writer = movieInfo.Writer;

    writer = writer.length >= 30 ? `${writer.slice(0, 30)} ...` : writer;

    return (
        <div className="movie-card">
            <img src={movieInfo.Images[0]} />
            <div className="fr-aic jc-sb">
                <h3>{movieInfo.Title}</h3>
                <span className="release-date">{movieInfo.Released}</span>
            </div>
            <div className="fr-aic" style={{ gap: 10 }}>
                <span className="material-icons" style={{ color: ratingColor }}>star</span>
                <b>{`${movieInfo.imdbRating} / 10`}</b>
            </div>
            <div className="fr-aic">
                <b>Genre :</b>
                <span>{movieInfo.Genre}</span>
            </div>
            <div className="fr-aic">
                <b>Director :</b>
                <span>{movieInfo.Director}</span>
            </div>
            <div className="fr-aic">
                <b>Writer :</b>
                <span>{writer}</span>
            </div>
        </div>
    );
}

export default memo(MovieCard);
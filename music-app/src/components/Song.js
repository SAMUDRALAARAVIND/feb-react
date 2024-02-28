import { useState } from "react";

export const Song = ({ index, song, togglePlayPause, toggleLikeUnLike }) => {
    const [playButton, setPlayButton] = useState(false);

    const imageUrl = `${window.location.origin}/${song.imageUrl}`;

    const togglePlayButton = () => {
        setPlayButton(!playButton);
    }

    return (
        <div className="song-card" onMouseEnter={togglePlayButton} onMouseLeave={togglePlayButton}>
            <div className="left">
                <div className="play-box">
                    {
                        playButton ? (
                            <span
                                className="material-icons play-btn"
                                onClick={() => togglePlayPause(song.id)}
                            >play_arrow</span>
                        ) :
                            <span>{index + 1}</span>
                    }
                </div>
                <img src={imageUrl} />
                <span>{song.title}</span>
            </div>
            <div className="right">
                {playButton && <span className="material-icons fav-btn" onClick={() => toggleLikeUnLike(song.id)}>favorite</span>}
                <span>{song.viewCount}</span>
            </div>
        </div>
    )
}
import { useState } from "react";
import { useSelector } from "react-redux";

export const Song = ({ index, song, togglePlayPause, toggleLikeUnLike }) => {
    const [playButton, setPlayButton] = useState(false);
    const activeSong = useSelector((state) => state.activeSong);
    const likedSongs = useSelector(state => state.likedSongs);

    const isLiked = likedSongs.indexOf(song.id) !== -1;

    const imageUrl = `${window.location.origin}/${song.imageUrl}`;

    const iconName = (activeSong?.state && song.id === activeSong?.id) ? "pause" : "play_arrow";
    // "play_arrow" || "pause";
    const isCurrentSongActive = activeSong?.id === song.id;

    const togglePlayButton = () => {
        setPlayButton(!playButton);
    }

    return (
        <div className={`song-card ${isCurrentSongActive ? 'active-song' : ''}`} onMouseEnter={togglePlayButton} onMouseLeave={togglePlayButton}>
            <div className="left">
                <div className="play-box">
                    {
                        playButton ? (
                            <span
                                className="material-icons play-btn"
                                onClick={() => togglePlayPause(song.id)}
                            >{iconName}</span>
                        ) :
                            <span>{index + 1}</span>
                    }
                </div>
                <img src={imageUrl} />
                <span>{song.title}</span>
            </div>
            <div className="right">
                {playButton && (
                    <span
                        className={`material-icons fav-btn ${isLiked ? 'liked' : ''}`}
                        onClick={() => toggleLikeUnLike(song.id)}
                    >favorite</span>
                )}
                <span>{song.viewCount}</span>
            </div>
        </div>
    )
}
import { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";

const Player = () => {
    const audioRef = useRef(null);
    const activeSong = useSelector(state => state.activeSong);

    // {state, id}
    const songDetails = useSelector((state) => {
        if (!activeSong) return null;

        const selectedSongId = activeSong.id;
        for (let movieId in state.songs) {
            const movieSongs = state.songs[movieId];
            for (let i = 0; i < movieSongs.length; i++) {
                if (movieSongs[i].id === selectedSongId) {
                    return movieSongs[i];
                }
            }
        }
    });

    useEffect(() => {
        if (activeSong) {
            activeSong.state ? audioRef.current.play() : audioRef.current.pause();
        }
    }, [activeSong]);

    if (!activeSong) return <p>Please select a song</p>

    const audioFileAddress = `${window.location.origin}/${songDetails.fileAddress}`;

    return (
        <div>
            <audio controls ref={audioRef} key={activeSong.id}>
                <source src={audioFileAddress} type="audio/mp3" />
            </audio>
        </div>
    );
}

export default Player;


// <audio key={100} />
// <audio key={101} />
// <audio key={101} />
// <audio key={200} />
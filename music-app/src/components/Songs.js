import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { Song } from "./Song";
import "../styles/songs.scss";
import { ActionTypes } from "../store/actions";

const Songs = () => {
    const { movieId } = useParams();
    const dispatch = useDispatch();

    const songs = useSelector(state => state.songs[movieId]);

    const togglePlayPause = (songId) => {
        dispatch({ type: ActionTypes.TOGGLE_PLAY_PAUSE, payload: songId })
    }

    const toggleLikeUnLike = (songId) => {
        dispatch({ type: ActionTypes.TOGGLE_LIKE_UNLIKE, payload: songId })
    }

    return <div className="songs-container">
        {
            songs.map((song, index) => (
                <Song
                    toggleLikeUnLike={toggleLikeUnLike}
                    togglePlayPause={togglePlayPause}
                    key={song.id}
                    song={song}
                    index={index}
                />)
            )
        }
    </div>;
}

export default Songs
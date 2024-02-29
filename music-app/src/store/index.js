import { legacy_createStore as createStore } from "redux";
import { movies, songs } from "../data/movies";
import { ActionTypes } from "./actions";

const intialState = {
    movies,
    songs,
    likedSongs: [], // [ 100, 200, 300 ]
    activeSong: null // { state: true, id: }
}

const reducer = (state = intialState, action) => {
    if (action.type === ActionTypes.TOGGLE_PLAY_PAUSE) {
        if (!state.activeSong) {
            return { ...state, activeSong: { state: true, id: action.payload } };
        }
        else {
            if (state.activeSong.id === action.payload) {
                return { ...state, activeSong: { state: !state.activeSong.state, id: action.payload } }
            }
            else return { ...state, activeSong: { state: true, id: action.payload } }
        }
    }

    if (action.type === ActionTypes.TOGGLE_LIKE_UNLIKE) {
        const songId = action.payload;
        const isPresent = state.likedSongs.indexOf(songId);

        if (isPresent === -1) {
            return { ...state, likedSongs: [...state.likedSongs, songId] };
        }
        else return { ...state, likedSongs: state.likedSongs.filter(id => id !== songId) }
    }

    return state;
}

const store = createStore(reducer);

export default store;
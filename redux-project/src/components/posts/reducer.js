import { postActionTypes } from "./ActionTypes";

const intialState = {
    posts: [],
    getPostsApiStatus: "init",
    createPostApiStatus: "init",
};

const postsReducer = (state = intialState, action) => {
    switch (action.type) {
        case postActionTypes.FETCH_POSTS_PENDING: {
            return { ...state, getPostsApiStatus: "pending" };
        }
        case postActionTypes.FETCH_POSTS_ERROR: {
            return { ...state, getPostsApiStatus: "error" };
        }
        case postActionTypes.FETCH_POSTS_SUCCESS: {
            return { ...state, posts: action.payload, getPostsApiStatus: "success" };
        }

        case postActionTypes.CREATE_POST_PENDING: {
            return { ...state, createPostApiStatus: "pending" };
        }
        case postActionTypes.CREATE_POST_SUCCESS: {
            return { ...state, createPostApiStatus: "success" };
        }
        case postActionTypes.CREATE_POST_ERROR: {
            return { ...state, createPostApiStatus: "error" };
        }
    }
    return state;
}

export default postsReducer;
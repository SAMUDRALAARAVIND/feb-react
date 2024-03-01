import { Endpoints } from "../../network/endpoints";
import { postActionTypes } from "./ActionTypes";
import { put, takeEvery } from "redux-saga/effects"
import request from "../../network/request"
import { notification } from "antd";

function* getAllPosts() {
    yield put({ type: postActionTypes.FETCH_POSTS_PENDING });
    const httpConfig = {
        url: Endpoints.posts,
        method: "GET",
    };
    const { success, data } = yield request(httpConfig);
    if (success) {
        yield put({ type: postActionTypes.FETCH_POSTS_SUCCESS, payload: data });
    }
    else {
        notification.error({
            message: "Failed to fetch posts",
            description: "Some error occured"
        });
        yield put({ type: postActionTypes.FETCH_POSTS_ERROR })
    }
}

function* createPost(action) {
    yield put({ type: postActionTypes.CREATE_POST_PENDING });
    const httpConfig = {
        url: Endpoints.createPost,
        method: "POST",
        data: action.payload
    }
    const { success, data } = yield request(httpConfig);
    if (success) {
        notification.success({
            message: "Post created successfully",
            description: "Your post is been published"
        });
        yield put({ type: postActionTypes.CREATE_POST_SUCCESS });
    }
    else {
        notification.error({
            message: "Failed",
            description: "Failed to create post , please try again.."
        });
        yield put({ type: postActionTypes.CREATE_POST_ERROR });
    }
}

function* postsSaga() {
    yield takeEvery(postActionTypes.FETCH_POSTS, getAllPosts);
    yield takeEvery(postActionTypes.CREATE_POST, createPost);
}

export default postsSaga;
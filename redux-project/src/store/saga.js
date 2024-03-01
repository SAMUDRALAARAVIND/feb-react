import { takeEvery, put } from "redux-saga/effects";
import { ActionTypes } from "./ActionTypes";
import request from "../network/request";
import { notification } from "antd";
import { Endpoints } from "../network/endpoints";

function* login(action) {
    yield put({ type: ActionTypes.LOGIN_PENDING });
    const httpConfig = {
        url: Endpoints.login,
        method: "POST",
        data: action.payload
    }
    const { data, success } = yield request(httpConfig);
    if (success) {
        localStorage.setItem("token", data.token);
        yield put({ type: ActionTypes.LOGIN_SUCCESS, payload: data });
    }
    else {
        yield put({ type: ActionTypes.LOGIN_FAILED, payload: data })
    }
}

function* signup(action) {
    yield put({ type: ActionTypes.SIGNUP_PENDING });
    const httpConfig = {
        url: Endpoints.signup,
        method: "POST",
        data: action.payload
    };

    const { data, success } = yield request(httpConfig);
    if (success) {
        notification.success({
            message: "Signup Success",
            description: "Please login with the signed up credentials"
        });
        yield put({ type: ActionTypes.SIGNUP_SUCCESS, payload: data });
    }
    else {
        notification.error({
            message: "Signup Failed",
            description: "Please retry"
        });
        yield put({ type: ActionTypes.SIGNUP_FAILED, payload: data })
    }
}

function* authSaga() {
    yield takeEvery(ActionTypes.LOGIN, login);
    yield takeEvery(ActionTypes.SIGNUP, signup);
}

export default authSaga;
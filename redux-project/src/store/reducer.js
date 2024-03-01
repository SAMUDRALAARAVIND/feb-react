import { ActionTypes } from "./ActionTypes";

const intialState = {
    loginApiStatus: "init",
    signupApiStatus: "init"
};

export const authReducer = (state = intialState, action) => {
    switch (action.type) {
        case ActionTypes.LOGIN_PENDING: {
            return { ...state, loginApiStatus: "pending" };
        }
        case ActionTypes.LOGIN_SUCCESS: {
            return { ...state, loginApiStatus: "success" };
        }
        case ActionTypes.LOGIN_FAILED: {
            return { ...state, loginApiStatus: "error" };
        }

        case ActionTypes.SIGNUP_PENDING: {
            return { ...state, signupApiStatus: "pending" };
        }
        case ActionTypes.SIGNUP_SUCCESS: {
            return { ...state, signupApiStatus: "success" };
        }
        case ActionTypes.SIGNUP_FAILED: {
            return { ...state, signupApiStatus: "error" };
        }



    }
    return state
}
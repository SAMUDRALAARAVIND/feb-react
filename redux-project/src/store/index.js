import { applyMiddleware, combineReducers, legacy_createStore as createStore } from "redux";
import { authReducer } from "./reducer";
import createSagaMiddleware from "redux-saga";
import authSaga from "./saga";
import postsSaga from "../components/posts/saga";
import { all } from "redux-saga/effects"
import postsReducer from "../components/posts/reducer";


function* rootSaga() {
    yield all([
        authSaga(),
        postsSaga()
    ]);
}

const sagaMiddleware = createSagaMiddleware();

const rootReducer = combineReducers({
    auth: authReducer,
    post: postsReducer
})

const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootSaga);

export default store;
import { legacy_createStore as createStore, applyMiddleware } from "redux";
import countReducer from "./reducer";
import createSagaMiddleware from "redux-saga"
import { counterSaga } from "./saga";

// while creating the store we need to setup middlewares also
const sagaMiddleWare = createSagaMiddleware();
const store = createStore(countReducer, applyMiddleware(sagaMiddleWare));
sagaMiddleWare.run(counterSaga);

export default store;


// async function callme() {
//     await new Promise();
//     await 20;
//     await fail();
// }


// generator function
// function* callme() {
//     yield 10;
//     yield 20;
//     yield new Promise();
// }
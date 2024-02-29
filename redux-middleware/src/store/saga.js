import { takeEvery, put } from "redux-saga/effects"
import { ActionTypes } from "./ActionType";
// task of middleware: intercept the actions 


function* asyncIncrement() {
    // increment count 
    console.log("before");
    yield new Promise(r => setTimeout(r, 3000));
    // inform reducer to increment the count
    // put is an effect used to communicate with the reducer.
    yield put({ type: ActionTypes.INCREMENT, payload: 10 }); // dispatch({type : "INC"})
}

// async function fetchData() {
//     try {
//         let d1 = await call1()
//         let d2 = await call2();
//         let d3 = await call3();
//         return d3;
//     }
//     catch (e) {

//     }
// }

function* fetchPincodeDetails(action) {
    console.log(action);
    const response = yield fetch(`https://api.postalpincode.in/pincode/${action.payload}`);
    const data = yield response.json();
    console.log(data);

    // const data = yield fetchData();
    yield put({ type: "FETCHED", payload: data })
}

export function* counterSaga() {
    yield takeEvery(ActionTypes.INC_ASYNC, asyncIncrement);
    yield takeEvery(ActionTypes.FETCH_PINCODE, fetchPincodeDetails)
}
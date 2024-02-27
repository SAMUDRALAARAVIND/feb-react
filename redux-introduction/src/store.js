// creates and exports the store object 

import { legacy_createStore as createStore } from "redux";


const reducer = (state, action) => {
    if (action.type === "increment") {
        return { count: state.count + 1 }
    }
    else if (action.type === "decrement") {
        return { count: state.count - action.payload }
    }

    return { count: 0 };
}

const store = createStore(reducer);

export default store;

/**
 * useSelector => useContext + useState
 */

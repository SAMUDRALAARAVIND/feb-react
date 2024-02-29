import { ActionTypes } from "./ActionType"

const intialState = {
    count: 0
}

const countReducer = (state = intialState, action) => {
    // if (action.type === ActionTypes.INCREMENT) {
    //     return { ...state, count: state.count + 1 };
    // }
    // else if (action.type === ActionTypes.DECREMENT) {
    //     return { ...state, count: state.count - 1 };
    // }
    switch (action.type) {
        case ActionTypes.INCREMENT: {
            console.log("incrementing...", action.payload);
            return { ...state, count: state.count + 1 };
        }
        case ActionTypes.DECREMENT: {
            return { ...state, count: state.count - 1 };
        }
        case "FETCHED": {
            console.log(action.payload);
        }
        default: {
            return state;
        }
    }
}

export default countReducer;